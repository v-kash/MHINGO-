"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Email Templates ──────────────────────────────────────────────────────────

// Template sent TO the trust
function buildTrustEmail({ name, email, phone, subject, message }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f5f4f0; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-top: 5px solid #0f4c5c; }
    .header { background: #0f4c5c; padding: 36px 40px; }
    .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
    .header p { color: rgba(255,255,255,0.65); margin: 6px 0 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; }
    .body { padding: 40px; }
    .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #6aa84f; font-weight: 700; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1a1a1a; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #f0ede6; }
    .message-box { background: #f5f4f0; border-left: 4px solid #0f4c5c; padding: 20px 24px; border-radius: 0 4px 4px 0; }
    .message-box p { margin: 0; color: #333; line-height: 1.7; font-size: 15px; }
    .footer { background: #0f4c5c; padding: 20px 40px; text-align: center; }
    .footer p { color: rgba(255,255,255,0.5); font-size: 12px; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <p>New Contact Form Submission</p>
      <h1>MAHI Education &amp; Charitable Trust</h1>
    </div>
    <div class="body">
      <div class="label">Full Name</div>
      <div class="value">${name}</div>

      <div class="label">Email Address</div>
      <div class="value">${email}</div>

      ${phone ? `<div class="label">Phone Number</div><div class="value">${phone}</div>` : ""}

      <div class="label">Subject</div>
      <div class="value">${subject}</div>

      <div class="label">Message</div>
      <div class="message-box"><p>${message.replace(/\n/g, "<br/>")}</p></div>
    </div>
    <div class="footer">
      <p>This message was submitted via the MAHI Trust contact form.</p>
    </div>
  </div>
</body>
</html>
`.trim();
}

// Auto-reply sent TO the sender
function buildSenderEmail({ name }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f5f4f0; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-top: 5px solid #6aa84f; }
    .header { background: #0f4c5c; padding: 40px; text-align: center; }
    .header h1 { color: #fff; margin: 0 0 6px; font-size: 26px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.6); margin: 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; }
    .body { padding: 48px 40px; text-align: center; }
    .icon { font-size: 48px; margin-bottom: 20px; }
    .body h2 { color: #0f4c5c; font-size: 22px; margin: 0 0 16px; }
    .body p { color: #555; line-height: 1.8; font-size: 15px; max-width: 440px; margin: 0 auto 20px; }
    .divider { width: 60px; height: 3px; background: linear-gradient(to right, #0f4c5c, #6aa84f); margin: 28px auto; border-radius: 2px; }
    .pillars { display: flex; gap: 16px; justify-content: center; margin: 28px 0; flex-wrap: wrap; }
    .pill { background: #f5f4f0; border-radius: 100px; padding: 8px 18px; font-size: 13px; color: #0f4c5c; font-weight: 600; border: 1px solid #e0ddd5; }
    .footer { background: #0f4c5c; padding: 24px 40px; text-align: center; }
    .footer p { color: rgba(255,255,255,0.5); font-size: 12px; margin: 0 0 4px; }
    .footer a { color: rgba(255,255,255,0.7); text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>MAHI</h1>
      <p>Education &amp; Charitable Trust</p>
    </div>
    <div class="body">
      <div class="icon">🙏</div>
      <h2>Thank you, ${name}.</h2>
      <p>We have received your message and truly appreciate you reaching out. Our team will review your enquiry and get back to you as soon as possible — usually within <strong>1–3 working days</strong>.</p>
      <div class="divider"></div>
      <p style="font-size:14px; color:#888;">At MAHI, we work towards a society where every individual lives with dignity, confidence and opportunity — across:</p>
      <div class="pillars">
        <span class="pill">📚 Education</span>
        <span class="pill">❤️ Health</span>
        <span class="pill">🤝 Social Welfare</span>
      </div>
      <p style="font-size:13px; color:#aaa;">If your matter is urgent, please write directly to<br/><a href="mailto:vivanparmar09@gmail.com" style="color:#0f4c5c;">vivanparmar09@gmail.com</a></p>
    </div>
    <div class="footer">
      <p>MAHI Education &amp; Charitable Trust</p>
      <p><a href="mailto:vivanparmar09@gmail.com">vivanparmar09@gmail.com</a></p>
    </div>
  </div>
</body>
</html>
`.trim();
}

// ─── Contact Info Card ────────────────────────────────────────────────────────
function InfoCard({ icon: Icon, label, value, color }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm"
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{
          backgroundColor: color + "22",
          border: `1.5px solid ${color}55`,
        }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <p className="text-xs tracking-widest uppercase text-white/40 mb-1">
          {label}
        </p>
        <p className="text-white/90 text-sm leading-relaxed">{value}</p>
      </div>
    </motion.div>
  );
}

// ─── Input Field ──────────────────────────────────────────────────────────────
function Field({ label, id, required, children }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs tracking-widest uppercase text-gray-600"
      >
        {label} {required && <span className="text-[#6aa84f]">*</span>}
      </label>
      {children}
    </motion.div>
  );
}

const inputCls =
  "w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-gray-800 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c]/30 transition-all duration-200";

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ── Send email to MAHI Trust ─────────────────────────────────────────
      // Using EmailJS — replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
      // OR swap this block for your own API route / Resend / Nodemailer
      //
      // Example using EmailJS (https://www.emailjs.com/):
      //
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     to_email: "vivanparmar09@gmail.com",
      //     from_name: form.name,
      //     from_email: form.email,
      //     phone: form.phone,
      //     subject: form.subject,
      //     message: form.message,
      //     trust_html: buildTrustEmail(form),
      //     sender_html: buildSenderEmail(form),
      //   },
      //   "YOUR_PUBLIC_KEY"
      // );
      //
      // ── OR: Next.js API Route (recommended) ─────────────────────────────
      // POST to /api/contact with form data + both HTML templates
      //
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          trustEmailHtml: buildTrustEmail(form),
          senderEmailHtml: buildSenderEmail(form),
        }),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-12 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base tracking-widest uppercase text-gray-400 mb-4 relative inline-block"
          >
            GET IN TOUCH
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f4c5c] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug mb-4"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-[#0f4c5c] to-[#6aa84f] bg-clip-text text-transparent">
              MAHI Trust
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
            Reach out for partnerships, volunteering, donations, or any queries
            about our programs. We'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* LEFT — Info Panel */}
          <motion.div
            className="lg:col-span-2 bg-[#0f4c5c] rounded-sm p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Decorative shapes */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full border border-white/10" />
            <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#6aa84f]" />
            <div className="absolute top-14 right-14 w-1.5 h-1.5 rounded-full bg-[#C6B062]" />

            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs tracking-widest uppercase text-white/40 mb-3"
              >
                MAHI Education & Charitable Trust
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-8"
              >
                Empowering communities, one conversation at a time.
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4"
              >
                <InfoCard
                  icon={Mail}
                  label="Email"
                  value="vivanparmar09@gmail.com"
                  color="#6aa84f"
                />
                <InfoCard
                  icon={Phone}
                  label="Phone"
                  value="+91 95120 09535"
                  color="#C6B062"
                />
                <InfoCard
                  icon={MapPin}
                  label="Location"
                  value="India"
                  color="#58B6AD"
                />
              </motion.div>
            </div>

            {/* Bottom tagline */}
            <motion.p
              variants={fadeUp}
              className="text-white/30 text-xs mt-10 leading-relaxed"
            >
              "We don't believe in charity. We believe in building systems that
              outlast our presence."
            </motion.p>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            className="lg:col-span-3 bg-[#f9f8f5] border border-gray-100 rounded-sm p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {status === "success" ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={56} className="text-[#6aa84f] mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-500 max-w-sm leading-relaxed">
                  Thank you for reaching out. We've sent a confirmation to your
                  email and our team will be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm text-[#0f4c5c] border border-[#0f4c5c]/40 rounded-full px-6 py-2 hover:bg-[#0f4c5c] hover:text-white transition-all duration-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" id="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={form.name}
                      onChange={handle}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email Address" id="email" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Your Mail"
                      value={form.email}
                      onChange={handle}
                      className={inputCls}
                    />
                  </Field>
                </div>

                {/* Row: Phone + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" id="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={form.phone}
                      onChange={handle}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Subject" id="subject" required>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handle}
                      className={inputCls + " cursor-pointer"}
                    >
                      <option value="" disabled>
                        Select a subject…
                      </option>
                      <option>Partnership / Collaboration</option>
                      <option>Volunteering</option>
                      <option>Donation Enquiry</option>
                      <option>Education Programs</option>
                      <option>Healthcare Initiatives</option>
                      <option>Social Welfare</option>
                      <option>General Enquiry</option>
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <Field label="Your Message" id="message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help or how you'd like to get involved…"
                    value={form.message}
                    onChange={handle}
                    className={inputCls + " resize-none"}
                  />
                </Field>

                {/* Error */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-sm px-4 py-3"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full md:w-auto md:self-end flex items-center justify-center gap-3 bg-[#0f4c5c] text-white text-sm tracking-wide px-10 py-3.5 rounded-sm hover:bg-[#6aa84f] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: status !== "loading" ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
