import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.message) {
    return new Response(JSON.stringify({ message: "Uncomplete" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Taha's contact form submission",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `
        <div>
          <div><h3>Name:</h3> ${body.name}</div>
          <div><h3>Email:</h3> ${body.email}</div>
          <div><h3>Message:</h3> ${body.message}</div>
          </div>`,
    });
    return new Response(JSON.stringify({ success: true }), {});
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err.message }), {});
  }
}
