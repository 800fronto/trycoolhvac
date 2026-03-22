import { google } from "googleapis";

export async function POST(request) {
  const { firstName, lastName, email, phone, zip, service, details } =
    await request.json();

  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  const gmail = google.gmail({ version: "v1", auth });

  const subject = `New Service Request - ${service || "General Inquiry"}`;
  const body = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `ZIP Code: ${zip}`,
    `Service: ${service || "Not specified"}`,
    ``,
    `Details:`,
    details || "None provided",
  ].join("\n");

  const message = [
    `To: service@trycoolhvac.com`,
    `From: hello@800fronto.ai`,
    `Reply-To: ${email}`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ].join("\n");

  const encoded = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  try {
    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encoded },
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Gmail send error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
