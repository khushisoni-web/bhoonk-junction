import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Transporter request ke time banega
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Connection Test
    await transporter.verify();

    // Mail to Owner
    await transporter.sendMail({
      from: `"Bhoonk Junction" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    // Auto Reply
    await transporter.sendMail({
      from: `"Bhoonk Junction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Bhoonk Junction 🍕",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting <b>Bhoonk Junction</b>.</p>

        <p>We have received your message successfully.</p>

        <p>Our team will contact you shortly.</p>

        <br>

        <p>Regards,</p>

        <h3>Bhoonk Junction Team</h3>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });

  } catch (err) {
    console.error("EMAIL ERROR");
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;