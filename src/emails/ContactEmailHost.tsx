import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailHost: React.FC<ContactEmailProps> = ({ name, email, subject, message }) => (
  <Html>
    <Head />
    <Preview>New contact form submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={text}>
          <strong>Subject:</strong> {subject}</Text>
        <Hr style={hr} />
        <Section style={section}>
          <Text style={text}>
            <strong>Message:</strong>
          </Text>
          <Text style={text}>{message} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae facere natus illo voluptate asperiores maiores cumque, officia consequuntur eum maxime culpa quisquam ipsum. Officia eius accusantium atque deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a earum ullam amet sed, eaque dolore eligendi cum omnis! Obcaecati a modi explicabo commodi laudantium alias reiciendis ullam, aliquid perspiciatis.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
//   backgroundColor: '#ffffff',
font:'bold',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 20px 48px 20px',
  maxWidth: '580px',
  border: '1px solid black',
};

const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '24px',
};

const text = {
  fontSize: '14px',
  lineHeight: '24px',
  marginBottom: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const section = {
  padding: '20px',
  borderRadius: '5px',
  border: '1px solid #cccccc',
};

export default ContactEmailHost;