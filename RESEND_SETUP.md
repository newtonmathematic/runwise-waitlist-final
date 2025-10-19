# 📧 Resend Integration Setup Guide for Runwise

## ✅ What I've Already Done

1. **Updated Email Template**: Changed from generic template to Runwise branding
2. **Created Bulk Email API**: `/api/bulk-email` endpoint for sending to all users
3. **Created Admin Interface**: `/admin` page to trigger bulk emails
4. **Updated Mail API**: Changed sender to Runwise branding

## 🔧 Manual Setup Required

Since I can't create the `.env.local` file directly, please create it manually:

### Step 1: Create `.env.local` file

Create a file named `.env.local` in your project root with these contents:

```env
# Resend Configuration
RESEND_API_KEY=your_resend_api_key_here

# Notion Configuration  
NOTION_SECRET=your_notion_secret_here
NOTION_DB=your_notion_database_id_here

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here
```

### Step 2: Set Up Resend Domain

1. Go to [resend.com](https://resend.com) and log in
2. Go to **"Domains"** in the dashboard
3. Click **"Add Domain"**
4. Enter: `runwiseai.app`
5. Follow the DNS setup instructions:
   - Add **TXT record** for domain verification
   - Add **MX record** for email routing
   - Add **CNAME record** for tracking

### Step 3: Test Your Setup

1. **Test Individual Email**:
   - Go to your waitlist form at `http://localhost:3000`
   - Submit a test email
   - Check if you receive the Runwise welcome email

2. **Test Bulk Email**:
   - Visit `http://localhost:3000/admin`
   - Click "Send Bulk Emails"
   - Check the results

## 🚀 How to Use

### Individual Emails (Already Working)
- Users who sign up through your waitlist form automatically receive welcome emails

### Bulk Emails (New Feature)
1. Go to `/admin` on your site
2. Click "Send Bulk Emails"
3. The system will:
   - Fetch all users from your Notion database
   - Send emails sequentially with rate limiting
   - Show you the results (successful/failed)

## 📊 Free Tier Limits

- **Resend**: 3,000 emails/month, 100 emails/day
- **Notion API**: 3 requests/second
- **Upstash Redis**: 10,000 requests/day

## 🔒 Security Notes

- The admin page is currently unprotected - consider adding authentication
- Rate limiting is already implemented
- Emails are sent sequentially to respect limits

## 🐛 Troubleshooting

### If emails don't send:
1. Check your `.env.local` file has the correct API keys
2. Verify your Resend domain is properly set up
3. Check the browser console for errors
4. Make sure your Notion database has the correct structure (Name and Email columns)

### If bulk emails fail:
1. Check the results on the admin page
2. Ensure you have users in your Notion database
3. Verify the Notion database ID is correct

## 🎯 Next Steps

1. **Create the `.env.local` file** with your actual credentials
2. **Set up your domain** in Resend
3. **Test with a few emails** first
4. **Deploy to production** and test bulk emails
5. **Add authentication** to the admin page for security

Your Runwise waitlist is now ready to send professional emails! 🚀