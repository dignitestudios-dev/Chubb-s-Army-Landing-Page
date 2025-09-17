import sgMail from "@sendgrid/mail";

// Set your SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email template function
function createEmailTemplate(name, email, phone, message) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          background-color: #f9f7f4;
          padding: 20px;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(125, 91, 63, 0.15);
        }
        
        .header {
          background: linear-gradient(135deg, #7d5b3f 0%, #d5bd95 100%);
          color: #ffffff;
          padding: 30px;
          text-align: center;
        }
        
        .header h1 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .field-group {
          margin-bottom: 25px;
          border-left: 4px solid #d5bd95;
          padding-left: 20px;
          background-color: #faf9f7;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .field-label {
          font-weight: 600;
          color: #7d5b3f;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }
        
        .field-value {
          color: #333333;
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
        }
        
        .message-field {
          border-left: 4px solid #7d5b3f;
        }
        
        .message-field .field-value {
          background-color: #ffffff;
          padding: 15px;
          border-radius: 6px;
          border: 1px solid #e8e1d8;
          white-space: pre-wrap;
        }
        
        .timestamp {
          text-align: center;
          color: #888;
          font-size: 14px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e8e1d8;
        }
        
        .footer {
          background-color: #7d5b3f;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 14px;
        }
        
        .divider {
          height: 2px;
          background: linear-gradient(to right, #d5bd95, #7d5b3f, #d5bd95);
          margin: 30px 0;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .header {
            padding: 25px 20px;
          }
          
          .field-group {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p>Someone has reached out through your website</p>
        </div>
        
        <div class="content">
          <div class="field-group">
            <span class="field-label">👤 Full Name</span>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field-group">
            <span class="field-label">✉️ Email Address</span>
            <div class="field-value">
              <a href="mailto:${email}" style="color: #7d5b3f; text-decoration: none;">${email}</a>
            </div>
          </div>
          
          <div class="field-group">
            <span class="field-label">📱 Phone Number</span>
            <div class="field-value">
              ${
                phone
                  ? `<a href="tel:${phone}" style="color: #7d5b3f; text-decoration: none;">${phone}</a>`
                  : '<em style="color: #999;">Not provided</em>'
              }
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="field-group message-field">
            <span class="field-label">💬 Message</span>
            <div class="field-value">${message}</div>
          </div>
          
          <div class="timestamp">
            📅 Received on ${new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent via your website's contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    const msg = {
      to: "info@chubbsarmy.com", // Your custom email
      from: "info@chubbsarmy.com", // Verified sender email
      subject: `🔔 New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\nMessage: ${message}\n\nReceived: ${new Date().toLocaleString()}`,
      html: createEmailTemplate(name, email, phone, message),
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ success: "Submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to submit, Please try again!." + error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
