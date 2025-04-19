"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Email from "../components/Email";

export const sendMail = async (formData, formName) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_SMTP_KEY,
            },
        });

        const emailHTML = await render(
            <Email
                name={formData.company}
                email={formData.email}
                number={formData.phone}
                topic={formData.topic}
                place={formData.phone}
                message={formData.message}
            />
        );

        let attachments = [];

        if (formData.file.size > 0) {
            const arrayBuffer = await formData.file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
        
            attachments.push({
              filename: formData.file.name,
              content: buffer,
              contentType: formData.file.type,
            });
        }

        const mailOptions = {
            from: `"Website Contact" <${process.env.EMAIL_USERNAME}>`,
            replyTo: formData.email,
            to: process.env.EMAIL_USERNAME,
            subject: formName,
            html: emailHTML,
            ...(attachments.length > 0 && { attachments })
        };

        const res = await transporter.sendMail(mailOptions);

        console.log(res, process.env.EMAIL_USERNAME)

        return { type: 'success', message: 'Form submitted successfully!' };
    } catch (err) {
        console.log(err);

        return {
            type: "error",
            message:
              "Something Went Wrong, Please reach out to us at arita@advinci.it",
        };
    }
}