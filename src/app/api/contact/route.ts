import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // senha de app
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // recebe no seu gmail
      replyTo: email,
      subject: `[FORM SITE] ${subject}`,
      text: `Nome: ${firstname} ${lastname}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response("Erro ao enviar email", { status: 500 });
  }
}
