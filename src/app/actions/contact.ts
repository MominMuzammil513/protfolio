'use server'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import ContactEmailHost from '@/emails/ContactEmailHost' 
import ContactAutoReplyEmail from '@/emails/ContactAutoReplyEmail' 
import React from 'react'
import { contactSchema } from '@/schemas/contactSchema'

export async function submitContact(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, subject, message } = validatedFields.data

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Render the emails using react-email
    const recruiterEmailHtml = render(React.createElement(ContactEmailHost, { name, email, subject, message }))
    const autoReplyEmailHtml = render(React.createElement(ContactAutoReplyEmail, { name }))

    // Send email to recruiter/website owner
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: recruiterEmailHtml,
    })

    // Send auto-reply email to the sender
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting us',
      html: autoReplyEmailHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { error: 'Failed to send message. Please try again later.' }
  }
}