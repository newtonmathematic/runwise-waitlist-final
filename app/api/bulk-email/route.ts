import { Client } from "@notionhq/client";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";
import RunwiseWaitlistEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);
const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function POST(request: NextRequest) {
  try {
    // Get all users from Notion database
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB!,
    });

    const users = response.results.map((page: any) => ({
      name: page.properties.Name?.title?.[0]?.text?.content || "Friend",
      email: page.properties.Email?.email || null,
    })).filter(user => user.email); // Only include users with emails

    if (users.length === 0) {
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }

    // Send emails sequentially with delays to respect rate limits (2 requests per second)
    const results = [];
    const delayBetweenEmails = 600; // 600ms delay = ~1.67 emails per second (under 2/second limit)
    
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      
      try {
        const { data, error } = await resend.emails.send({
          from: "Runwise <hello@runwiseai.app>",
          to: [user.email],
          subject: "Welcome to Runwise! 🚀",
          html: await render(RunwiseWaitlistEmail({ userFirstname: user.name })),
        });

        results.push({ email: user.email, success: !error, error });
        
        // Add delay between emails to respect rate limits
        if (i < users.length - 1) {
          await new Promise(resolve => setTimeout(resolve, delayBetweenEmails));
        }
      } catch (error) {
        results.push({ email: user.email, success: false, error: error.message });
        
        // Still add delay even on error
        if (i < users.length - 1) {
          await new Promise(resolve => setTimeout(resolve, delayBetweenEmails));
        }
      }
    }

    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    return NextResponse.json({
      message: `Bulk email sent!`,
      total: users.length,
      successful,
      failed,
      results: results.filter(r => !r.success) // Return failed emails for debugging
    });

  } catch (error) {
    console.error("Bulk email error:", error);
    return NextResponse.json(
      { error: "Failed to send bulk emails" },
      { status: 500 }
    );
  }
}
