const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

admin.initializeApp();

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    functions.config().gmail.client_id,
    functions.config().gmail.client_secret,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: functions.config().gmail.refresh_token
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: functions.config().gmail.user,
      accessToken,
      clientId: functions.config().gmail.client_id,
      clientSecret: functions.config().gmail.client_secret,
      refreshToken: functions.config().gmail.refresh_token
    }
  });

  return transporter;
};

exports.sendContactNotification = functions.database
  .ref("/contactSubmissions/{submissionId}")
  .onCreate(async (snapshot) => {
    const submission = snapshot.val();
    const mailOptions = {
      from: functions.config().gmail.user,
      to: "rockkilic@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${submission.name}
        Email: ${submission.email}
        Message: ${submission.message}
      `,
    };

    let transporter = await createTransporter();
    await transporter.sendMail(mailOptions);
  });
