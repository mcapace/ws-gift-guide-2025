import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend - you'll need to set RESEND_API_KEY in your environment variables
// For now, we'll use a fallback to handle the case where it's not set
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Marissa's email - update this to the actual email address
const RECIPIENT_EMAIL = process.env.PROOF_OF_PURCHASE_EMAIL || "marissa@winespectator.com";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const winery = formData.get("winery") as string;
    const receipt = formData.get("receipt") as File | null;

    // Validate required fields
    if (!name || !email || !winery) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If Resend is configured, send email with attachment
    if (resend && receipt) {
      const receiptBuffer = await receipt.arrayBuffer();
      const receiptBase64 = Buffer.from(receiptBuffer).toString("base64");

      await resend.emails.send({
        from: "Wine Spectator Gift Guide <noreply@thanksgiving.winespectator.com>",
        to: RECIPIENT_EMAIL,
        subject: `Proof of Purchase Submission - ${winery}`,
        html: `
          <h2>New Proof of Purchase Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Winery/Partner:</strong> ${winery}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p>Please process this submission and send the 3-month free subscription to: ${email}</p>
        `,
        attachments: [
          {
            filename: receipt.name,
            content: receiptBase64,
          },
        ],
      });
    } else {
      // Fallback: Log to console if Resend is not configured
      console.log("Proof of Purchase Submission:", {
        name,
        email,
        winery,
        receiptFileName: receipt?.name,
        receiptSize: receipt?.size,
      });
      console.warn("RESEND_API_KEY not configured. Email not sent. Please configure Resend API key.");
    }

    return NextResponse.json(
      { message: "Submission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing proof of purchase:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
    }
}

