import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, company, reCaptchaToken } = await req.json();

    // Honeypot trap
    if (company && company.trim() !== "") {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      return new Response(JSON.stringify({ status: "success" }), { status: 200 });
    }

    // Check token
    if (!reCaptchaToken) {
      return new Response(
        JSON.stringify({ status: "error", message: "Missing reCAPTCHA token" }),
        { status: 400 }
      );
    }

    // Verify token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${reCaptchaToken}`,
    });

    const verifyData = await verifyRes.json();

    // Validate Google success
    if (!verifyData.success) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "reCAPTCHA failed: success=false",
          details: verifyData,
        }),
        { status: 400 }
      );
    }

    // Validate score
    if (typeof verifyData.score === "number" && verifyData.score < 0.5) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "reCAPTCHA score too low",
          score: verifyData.score,
        }),
        { status: 400 }
      );
    }

    // Validate action
    if (verifyData.action !== "contact_form") {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid reCAPTCHA action",
          receivedAction: verifyData.action,
        }),
        { status: 400 }
      );
    }

    // Validate hostname (important for prod)
    if (!["aguaplumbingco.com", "www.aguaplumbingco.com", "localhost"].includes(verifyData.hostname)) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid hostname",
          receivedHostname: verifyData.hostname,
        }),
        { status: 400 }
      );
    }

    // Send emails
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const companyMailOptions = {
      from: "admin@aguaplumbingco.com",
      to: "admin@aguaplumbingco.com",
      replyTo: email,
      subject: `New Inquiry from Agua Plumbing Website: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const autoReplyOptions = {
      from: "no-reply@aguaplumbingco.com",
      to: email,
      subject: "We've Received Your Inquiry - Agua Plumbing",
      text: `Hello ${name},\n\nThank you for reaching out to Agua Plumbing. We will contact you shortly.`,
    };

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return new Response(
      JSON.stringify({ status: "success", message: "Message sent successfully!" }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Internal Server Error",
        details: String(err),
      }),
      { status: 500 }
    );
  }
}
