import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendAdminEmail(
  name: string,
  email: string,
  phone: string,
  company: string
) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ must be verified in Resend
      to: "dileep.nexusczar@gmail.com",
      subject: `New Demo Request from ${name}`,
      html: `
        <div style="font-family:Arial, sans-serif;line-height:1.6;">
          <img src="https://mqlexperts.com/favicon.png" alt="MQL Experts Logo" width="150" />
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
        </div>
      `,
    });

    console.log("[v0] Email sent successfully to admin");
  } catch (error) {
    console.error("[v0] Failed to send email:", error);
    throw error; // make sure caller sees the failure
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, company } = await request.json();

    if (!name || !email || !phone || !company) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ await this
    await sendAdminEmail(name, email, phone, company);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
