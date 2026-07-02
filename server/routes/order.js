import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("=================================");
  console.log("✅ Order API Hit");
  console.log("Received Body:");
  console.log(req.body);
  console.log("=================================");

  const {
    name,
    phone,
    email,
    address,
    food,
    quantity,
    totalPrice,
    instructions,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ SMTP Connected");

    const info = await transporter.sendMail({
      from: `"Bhoonk Junction" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🍔 New Bhoonk Junction Order",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#f97316;">🍔 New Order Received</h2>

          <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Address</strong></td>
              <td>${address}</td>
            </tr>

            <tr>
              <td><strong>Food</strong></td>
              <td>${food}</td>
            </tr>

            <tr>
              <td><strong>Quantity</strong></td>
              <td>${quantity}</td>
            </tr>

            <tr>
              <td><strong>Total Price</strong></td>
              <td>₹${totalPrice}</td>
            </tr>

            <tr>
              <td><strong>Instructions</strong></td>
              <td>${instructions || "None"}</td>
            </tr>
          </table>

          <br>

          <h3 style="color:green;">
            ✅ Please prepare this order.
          </h3>
        </div>
      `,
    });

    console.log("📧 Email Sent Successfully");
    console.log(info.response);

    return res.status(200).json({
      success: true,
      message: "Order placed successfully!",
    });

  } catch (error) {
    console.error("❌ MAIL ERROR");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to send order.",
    });
  }
});

export default router;