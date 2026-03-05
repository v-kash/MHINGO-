// app/api/contact/route.js  (Next.js 13+ App Router)
// ─────────────────────────────────────────────────────────────────────────────
// Install:  npm install nodemailer
//
// Add these to your .env.local:
//   EMAIL_USER=vivanparmar09@gmail.com
//   EMAIL_PASS=your_gmail_app_password        ← NOT your Gmail login password!
//
// How to get an App Password (Gmail):
//   1. Go to Google Account → Security → 2-Step Verification (must be ON)
//   2. Then go to → App Passwords → create one for "Mail / Other"
//   3. Paste that 16-char password as EMAIL_PASS
// ─────────────────────────────────────────────────────────────────────────────

import nodemailer from "nodemailer";

const TRUST_EMAIL = "vivanparmar09@gmail.com";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message, trustEmailHtml, senderEmailHtml } =
      await req.json();

    // ── Validate ──────────────────────────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Transporter ──────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ── 1. Email to MAHI Trust ────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"MAHI Contact Form" <${process.env.EMAIL_USER}>`,
      to: TRUST_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${subject} — from ${name}`,
      html: trustEmailHtml,
      text: `
New contact form submission
─────────────────────────────
Name:     ${name}
Email:    ${email}
Phone:    ${phone || "—"}
Subject:  ${subject}

Message:
${message}
      `.trim(),
    });

    // ── 2. Auto-reply to the Sender ───────────────────────────────────────────
    await transporter.sendMail({
      from: `"MAHI Education & Charitable Trust" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your message — MAHI Trust`,
      html: senderEmailHtml,
      text: `
Dear ${name},

Thank you for reaching out to MAHI Education & Charitable Trust.

We have received your message and will get back to you within 1–3 working days.

If your matter is urgent, please write directly to: ${TRUST_EMAIL}

With warm regards,
MAHI Education & Charitable Trust
      `.trim(),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}