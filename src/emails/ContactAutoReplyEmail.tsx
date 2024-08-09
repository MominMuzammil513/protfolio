import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Text } from '@react-email/components';

interface AutoReplyEmailProps {
  name: string;
}

export const ContactAutoReplyEmail: React.FC<AutoReplyEmailProps> = ({ name }) => (
  <Html>
    <Head />
    <Preview>Thank you for your message</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Contacting Us</Heading>
        <Text style={text}>Dear {name},</Text>
        <Text style={text}>
          Thank you for reaching out. We have received your message and will get back to you as soon as possible.
        </Text>
        <Hr style={hr} />
        <Text style={text}>
          Best regards,<br />
          Your Name/Company Name
        </Text>
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

export default ContactAutoReplyEmail;