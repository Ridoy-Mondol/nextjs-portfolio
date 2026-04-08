import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function emailTemplate(
  name: string,
  email: string,
  subject: string,
  message: string,
) {
  const formattedMessage = message.replace(/\n/g, "<br/>");
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#06060f;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#06060f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f0f1e 0%,#0d1526 100%);border-radius:16px 16px 0 0;padding:36px 40px 28px;border:1px solid rgba(56,189,248,0.15);border-bottom:none;text-align:center;">
              <!-- Top accent line -->
              <div style="width:60px;height:3px;background:linear-gradient(90deg,#38bdf8,#818cf8);border-radius:99px;margin:0 auto 24px;"></div>

              <!-- Avatar initials -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
                <tr>
                  <td width="52" height="52" align="center" valign="middle"
                    style="width:52px;height:52px;border-radius:50%;background-color:#0e2a3a;border:1px solid rgba(56,189,248,0.4);font-size:22px;font-weight:700;color:#38bdf8;font-family:'Segoe UI',Helvetica,Arial,sans-serif;line-height:52px;text-align:center;">
                    A
                  </td>
                </tr>
              </table>

              <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">New Message Received</h1>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.35);letter-spacing:0.02em;">Portfolio Contact Form</p>
            </td>
          </tr>

          <!-- Subject banner -->
          <tr>
            <td style="background:linear-gradient(90deg,rgba(56,189,248,0.08),rgba(129,140,248,0.08));border-left:1px solid rgba(56,189,248,0.15);border-right:1px solid rgba(56,189,248,0.15);padding:14px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(56,189,248,0.6);">Subject</span>
                    <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#ffffff;">${subject}</p>
                  </td>
                  <td align="right" style="white-space:nowrap;padding-left:16px;">
                    <span style="display:inline-block;padding:5px 12px;border-radius:99px;background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.2);font-size:11px;font-weight:600;color:rgba(56,189,248,0.8);">📬 New Lead</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender info -->
          <tr>
            <td style="background:#0d0d1c;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Name -->
                  <td width="50%" style="padding-right:12px;">
                    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 16px;">
                      <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:6px;">From</span>
                      <span style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.85);">${name}</span>
                    </div>
                  </td>
                  <!-- Email -->
                  <td width="50%" style="padding-left:12px;">
                    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 16px;">
                      <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:6px;">Email</span>
                      <span style="font-size:13px;font-weight:500;color:rgba(56,189,248,0.8);">${email}</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message body -->
          <tr>
            <td style="background:#0d0d1c;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);padding:0 40px 28px;">
              <div style="border:1px solid rgba(255,255,255,0.07);border-radius:14px;overflow:hidden;">
                <!-- Message header -->
                <div style="background:rgba(255,255,255,0.03);padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.25);">Message</span>
                </div>
                <!-- Message content -->
                <div style="padding:20px;background:#0a0a18;">
                  <p style="margin:0;font-size:14.5px;line-height:1.85;color:rgba(255,255,255,0.6);">${formattedMessage}</p>
                </div>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="background:#0d0d1c;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);padding:0 40px 32px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${subject}"
                style="display:inline-block;padding:13px 32px;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.02em;box-shadow:0 4px 20px rgba(14,165,233,0.25);">
                ↩ Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#0d0d1c;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);padding:0 40px;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent);"></div>
            </td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td style="background:#0d0d1c;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);padding:16px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:11.5px;color:rgba(255,255,255,0.25);">📅 ${date} &nbsp;·&nbsp; 🕐 ${time}</span>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;color:rgba(255,255,255,0.18);">via Portfolio Contact Form</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a0a18 0%,#0d0d20 100%);border-radius:0 0 16px 16px;padding:20px 40px;border:1px solid rgba(255,255,255,0.05);border-top:1px solid rgba(56,189,248,0.1);text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:rgba(255,255,255,0.3);">Ahatashamul — Full-Stack Developer</p>
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.15);">This email was sent from your portfolio contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ridoymondol140@gmail.com",
      subject: `[Portfolio] ${subject}`,
      html: emailTemplate(name, email, subject, message),
      replyTo: email,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}