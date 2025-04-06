import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Destructure the form data from the request body
        const { name, email, message } = await req.json();

        // Setup nodemailer transport
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1️ **Email to the company**
        const companyMailOptions = {
            from: 'admin@aguaplumbingco.com', // Your business email
            to: 'admin@aguaplumbingco.com',  // Recipient (company's email)
            replyTo: email,                  // User's email for direct reply
            subject: `New Inquiry from Agua Plumbing Website: ${name}`,
            text: `Hello,\n\nYou have received a new inquiry from your website.\n\nDetails:\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nBest regards,\nAgua Plumbing Website`,
            html: `
                <p>Hello,</p>
                <p>You have received a new inquiry from your website:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Message:</strong></li>
                </ul>
                <p>${message}</p>
                <p>Best regards,<br>Agua Plumbing Website</p>
            `,
        };

        // 2️ **Auto-reply email to the user**
        const autoReplyOptions = {
            from: 'no-reply@aguaplumbingco.com',  // No-reply email
            to: email,                            // User's email
            subject: `We've Received Your Inquiry - Agua Plumbing`,
            text: `Hello ${name},\n\nThank you for reaching out to Agua Plumbing. We have received your inquiry and will get back to you as soon as possible.\n\nBest regards,\nAgua Plumbing Team`,
            html: `
                <p>Hello ${name},</p>
                <p>Thank you for reaching out to Agua Plumbing. We have received your inquiry and will get back to you as soon as possible.</p>
                <p>Best regards,<br>Agua Plumbing Team</p>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(companyMailOptions), // Email to company
            transporter.sendMail(autoReplyOptions)   // Auto-reply to user
        ]);

        return new Response(JSON.stringify({ status: 'success', message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ status: 'error', message: 'Internal Server Error' }), { status: 500 });
    }
}
