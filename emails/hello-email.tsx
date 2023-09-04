import React from "react";

import { Container } from "@react-email/container";
import { Font } from "@react-email/font";
import {
  Body,
  Button,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const HelloEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Jura"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.cdnfonts.com/s/8770/Jura-Regular.woff",
            format: "woff",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <Font
          fontFamily="Kharkiv Tone, sans-serif"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.cdnfonts.com/s/89605/Kharkiv%20Tone%2004.10.2020.woff",
            format: "woff",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Вітаємо, шановні студенти!</Preview>

      <Body style={body}>
        <Container style={mainContainer}>
          <div style={logoContainer}>
            <Img
              src={`${baseUrl}/static/studrada-logo.png`}
              width="160"
              alt="Лого студради НУ'ОП'"
            />
          </div>

          <Hr style={divider} />

          <Section style={greetingsSection}>
            <Heading style={{ ...heading, textAlign: "center" }}>
              Вітаємо, шановні студенти!
            </Heading>
            <div style={greetingsImageContainer}>
              <Img
                src={`${baseUrl}/static/happy-photo-1.jpg`}
                alt="Веселе фото з членами студради"
                width="100%"
                style={{ borderRadius: "16px" }}
              />
            </div>

            <Text style={{ ...greetingText, textAlign: "center" }}>
              Запрошуємо вас приєднатися до Студентської Ради Одеської
              Політехніки - органу, що об'єднує активних та мотивованих
              студентів з метою покращення студентського життя та розвитку
              університетської спільноти.
            </Text>

            <Section style={buttonContainer}>
              <Button href="#" pX={13} pY={13} style={button}>
                Тиць!
              </Button>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const body = {
  backgroundColor: "#FFFFFF",
};

const mainContainer = {
  maxWidth: "600px",
  backgroundColor: "#070707",
  padding: "40px 28px 0 28px",
  color: "#EFEFEF",
};

const logoContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

const divider = {
  width: "68%",
  height: "1px",
  margin: "24px auto",
};

const heading = {
  color: "#EFEFEF",
  fontSize: "24px",
};

const greetingsSection = {
  display: "flex",
  justifyContent: "center",
  padding: "0 20px",
};

const greetingsImageContainer = {
  margin: "24px 0",
};

const greetingText = {
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: 700,
  fontFamily: "Jura",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "24px",
};

const button = {
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  fontSize: "14px",
};

export default HelloEmail;
