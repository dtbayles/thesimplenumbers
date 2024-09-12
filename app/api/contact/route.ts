import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_REGION, // Ensure that the AWS region is set in your environment variables
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  // Check if all required fields are present
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, message: 'Name, email, and message are required fields.' }), { status: 400 });
  }

  const params = {
    Source: process.env.SES_SENDER_EMAIL!, // Verified email
    Destination: {
      ToAddresses: [process.env.SES_RECIPIENT_EMAIL!], // The recipient email
    },
    Message: {
      Subject: {
        Data: `Contact Form Submission from ${name}`,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return jsonResponse({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return jsonResponse({ success: false, message: 'Failed to send email' }, 500);
  }
}

function jsonResponse(body: any, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status: status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
