"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sendBulkEmails = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/bulk-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Failed to send emails" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Runwise Admin</h1>
        
        <Button
          onClick={sendBulkEmails}
          disabled={loading}
          className="w-full mb-4"
        >
          {loading ? "Sending Emails (Rate Limited)..." : "Send Bulk Emails"}
        </Button>
        
        {loading && (
          <p className="text-gray-400 text-sm mb-4">
            Emails are being sent with delays to respect rate limits. 
            This may take a few minutes for multiple recipients.
          </p>
        )}

        {result && (
          <div className="mt-4 p-4 bg-gray-700 rounded">
            <h3 className="text-white font-semibold mb-2">Results:</h3>
            <pre className="text-sm text-gray-300">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
