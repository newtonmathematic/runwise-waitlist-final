import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const RunwiseWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Runwise, {userFirstname}! 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://runwiseai.app/logo.png`}
          width="80"
          height="80"
          alt="Runwise Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to Runwise! Thanks for joining our waitlist for AI-powered automation made effortless.
        </Text>
        <Text style={paragraph}>
          We're building something amazing and you'll be among the first to experience it. 
          We'll keep you updated on our progress and notify you as soon as we're ready to launch.
        </Text>
        <Text style={paragraph}>
          In the meantime, follow us on X for updates:{" "}
          <a href="https://x.com/runwise_ai" style={link}>
            @runwise_ai
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          The Runwise Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Runwise waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

RunwiseWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default RunwiseWaitlistEmail;

const main = {
  background: "linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #8B5FBF 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
  color: "#2d1b69",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
  color: "#2d1b69",
};

const link = {
  color: "#FF6B9D",
  textDecoration: "underline",
  fontWeight: "600",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
  color: "#2d1b69",
};

const hr = {
  borderColor: "#FF6B9D",
  margin: "20px 0",
  opacity: "0.3",
};

const footer = {
  color: "#6b7280",
  fontSize: "12px",
};
