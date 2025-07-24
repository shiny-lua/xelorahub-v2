export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (process.env.DISCORD_WEBHOOK_URL_CONTACT) {
      const discordMessage = {
        embeds: [{
          title: 'New Contact Form Submission',
          color: 0x00ff00, // Green color
          fields: [
            { name: 'Name', value: name },
            { name: 'Email', value: email },
            { name: 'Subject', value: subject },
            { name: 'Message', value: message }
          ],
          timestamp: new Date().toISOString()
        }]
      };
      await fetch(process.env.DISCORD_WEBHOOK_URL_CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email or Discord notification:', error);
    return new Response(JSON.stringify({ error: 'Failed to send notification' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 