import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, location, neighborhood, message } = await request.json();

    await resend.emails.send({
      from: "Shalom Bayit Website <hello@shalombayitpm.com>",
      to: "marc@shalombayitpm.com",
      replyTo: email,
      subject: `New Consultation Request — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2A28;">
          <h2 style="font-weight: normal; font-size: 24px; border-bottom: 1px solid #D2BE9E; padding-bottom: 12px;">
            New Consultation Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4; width: 160px; color: #A68B5B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4; color: #A68B5B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4;"><a href="mailto:${email}" style="color: #5C6B3A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4; color: #A68B5B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Based in</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4;">${location || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4; color: #A68B5B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Neighborhood</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebe4;">${neighborhood || "—"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #A68B5B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Message</p>
            <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #D2BE9E; font-size: 12px; color: #A68B5B;">
            Sent from shalombayitpm.com — Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
