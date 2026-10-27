import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, role, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // If Resend API Key is not set in development, simulate success with a notice
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.log("Mock Resend Email Dispatch (RESEND_API_KEY not configured):", {
        to: "amanbishtab99@gmail.com",
        from: email,
        name,
        company,
        role,
        message,
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Form received! (Note: Please set RESEND_API_KEY in .env.local to enable real live email delivery to amanbishtab99@gmail.com).",
      });
    }

    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: "Portfolio Recruiter Inquiry <onboarding@resend.dev>",
      to: ["amanbishtab99@gmail.com"],
      replyTo: email,
      subject: `[Data Analyst Portfolio] New Inquiry from ${name} (${company || "Recruiter"})`,
      text: `
New Message from Portfolio Website:
-----------------------------------
Name: ${name}
Work Email: ${email}
Company / Organization: ${company || "Not specified"}
Target Role: ${role || "Data Analyst"}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background-color: #0b132b; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #00f0ff; margin-top: 0;">New Recruiter Inquiry</h2>
          <p style="font-size: 14px; color: #94a3b8; border-bottom: 1px solid #1e293b; padding-bottom: 12px;">
            A recruiter has contacted you via your Data Analyst portfolio website.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Recruiter Name:</strong></td>
              <td style="padding: 8px 0; color: #f8fafc;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Work Email:</strong></td>
              <td style="padding: 8px 0; color: #00f0ff;"><a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; color: #f8fafc;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Target Role:</strong></td>
              <td style="padding: 8px 0; color: #38bdf8;"><strong>${role || "Data Analyst"}</strong></td>
            </tr>
          </table>

          <div style="background-color: #070b14; padding: 16px; border-radius: 8px; border: 1px solid #1e293b;">
            <strong style="color: #cbd5e1; display: block; margin-bottom: 8px;">Message:</strong>
            <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 12px;">
            Reply directly to this email to respond to ${name} (${email}).
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return NextResponse.json(
        { error: emailResponse.error.message || "Failed to dispatch email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: emailResponse,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
