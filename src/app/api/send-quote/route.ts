import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      product,
      quantity,
      packaging,
      destination,
      message,
    } = data;

    // 1️⃣ Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // app password if Gmail
      },
    });

    // 2️⃣ Email to Admin (You)
    const adminMail = {
      from: `"Website Quote" <${process.env.SMTP_USER}>`,
      to: 'info@infiexport.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <h2 style="color:#047857;">New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Packaging:</strong> ${packaging}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    };

    // 3️⃣ Email to User (Confirmation)
    const userMail = {
      from: `"Your Company Name" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Your Quote Request',
      html: `
        <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #e5e7eb; border-radius:10px;">
          <h2 style="color:#047857;">Thank You, ${name}!</h2>
          <p>We have received your request for a quote. Our team will get back to you within 24 hours.</p>
          <hr style="margin:20px 0;" />
          <p><strong>Your Inquiry:</strong></p>
          <ul>
            <li><strong>Product:</strong> ${product}</li>
            <li><strong>Quantity:</strong> ${quantity}</li>
            <li><strong>Packaging:</strong> ${packaging}</li>
            <li><strong>Destination:</strong> ${destination}</li>
            <li><strong>Message:</strong> ${message || 'N/A'}</li>
          </ul>
          <p style="margin-top:20px;">Thank you for choosing us!</p>
        </div>
      `,
    };

    // 4️⃣ Send emails in parallel (faster)
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return new Response(
      JSON.stringify({ message: 'Emails sent successfully' }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: err }),
      { status: 500 },
    );
  }
}
