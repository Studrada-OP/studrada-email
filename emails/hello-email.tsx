import React from "react";

import {
  Preview,
  Heading,
  Section,
  Button,
  Column,
  Body,
  Html,
  Head,
  Text,
  Img,
  Row,
  Hr,
} from "@react-email/components";
import { Container } from "@react-email/container";
import { Font } from "@react-email/font";

const HelloEmail = () => {
  const greetingsContent = (
    <Section style={greetingsSection}>
      <Heading style={{ ...heading, textAlign: "center" }}>
        Вітаємо, шановні студенти!
      </Heading>
      <Section style={greetingsImageContainer}>
        <Img
          src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-1.jpg?raw=true"
          alt="Веселе фото з членами студради"
          width="100%"
          style={{ borderRadius: "16px" }}
        />
      </Section>

      <Text style={{ ...greetingText, textAlign: "center" }}>
        Запрошуємо вас приєднатися до Студентської Ради Одеської Політехніки -
        органу, що об'єднує активних та мотивованих студентів з метою покращення
        студентського життя та розвитку університетської спільноти.
      </Text>

      <Section style={buttonContainer}>
        <Button
          href="https://bio.link/studrada_nuop"
          pX={13}
          pY={13}
          style={button}
        >
          Тиць!
        </Button>
      </Section>
    </Section>
  );

  const reasonsContent = (
    <Section style={reasonsSection}>
      <Row style={{ margin: 0, tableLayout: "fixed" }}>
        <Column style={{ margin: 0 }}>
          <Section style={columnSection}>
            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-2.jpg?raw=true"
              width="100%"
              style={{ borderRadius: "16px" }}
            />

            <div style={firstReason}>
              <Text style={reasonTitle}>1. Вплив на рішення</Text>
              <Text style={reasonText}>
                Ви матимете можливість ініціювати вплив на важливі рішення, які
                стосуються навчання, культурних заходів, соціальних ініціатив та
                багато іншого.
              </Text>
            </div>

            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-4.jpg?raw=true"
              width="100%"
              style={{ borderRadius: "16px" }}
            />

            <Text style={reasonTitle}>4. Це просто весело!</Text>

            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-5.jpg?raw=true"
              width="100%"
              style={{ borderRadius: "16px" }}
            />
          </Section>
        </Column>
        <Column style={{ margin: 0 }}>
          <Section style={columnSection}>
            <Heading style={{ ...heading, textAlign: "right" }}>
              Чому варто вступити до Студентської Ради?
            </Heading>
            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-3.jpg?raw=true"
              width="100%"
              style={{ borderRadius: "16px" }}
            />

            <div style={secondReason}>
              <Text style={reasonTitle}>2. Лідерські навички</Text>
              <Text style={reasonText}>
                Робота в Студраді допоможе вам розвинути лідерські та
                організаційні навички, набути досвіду управління проектами та
                взаємодії зі спільнотою.
              </Text>
            </div>

            <div style={thirdReason}>
              <Text style={reasonTitle}>3. Нові знайомства</Text>
              <Text style={reasonText}>
                Ви познайомитесь з цікавими людьми, які поділяють ваші інтереси,
                та зможете побудувати цінні зв'язки.
              </Text>
            </div>

            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-6.jpg?raw=true"
              width="100%"
              style={{ borderRadius: "16px" }}
            />
          </Section>
        </Column>
      </Row>
    </Section>
  );

  const footerContent = (
    <Section style={{ marginTop: "65px", marginBottom: "16px" }}>
      <Text style={{ textAlign: "center" }}>
        You are receiving this email because you opted in via our website.
      </Text>
      <Section style={logoContainer}>
        <Img
          src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
          width="120"
          alt="Лого студради НУ'ОП'"
        />
      </Section>
    </Section>
  );

  return (
    <Html>
      <Head>
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
          <Section style={logoContainer}>
            <Img
              src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
              width="160"
              alt="Лого студради НУ'ОП'"
            />
          </Section>

          <Hr style={divider} />

          {greetingsContent}

          {reasonsContent}

          {footerContent}
        </Container>
      </Body>
    </Html>
  );
};

const body = {};

const mainContainer = {
  maxWidth: "600px",
  backgroundColor: "#070707",
  padding: "40px 12px 0 12px",
  color: "#EFEFEF",
};

const logoContainer = {
  width: "min-content",
  margin: "auto",
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
  padding: "0 20px",
};

const greetingsImageContainer = {
  margin: "24px 0",
};

const greetingText = {
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: 700,
};

const buttonContainer = {
  width: "min-content",
  margin: "auto",
  marginTop: "24px",
};

const button = {
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  fontSize: "14px",
};

const reasonsSection = {
  marginTop: "40px",
};

const columnSection = {
  padding: "0 8px",
  margin: 0,
};

const reasonTitle = {
  fontSize: "16px",
  fontWeight: "700",
};

const reasonText = {
  fontSize: "15px",
  fontWeight: "500",
};

const firstReason = {
  backgroundColor: "#EFEFEF",
  color: "#070707",
  borderRadius: "16px",
  margin: "24px 0",
  padding: "12px",
};

const secondReason = {
  backgroundColor: "#E3FF2E",
  color: "#070707",
  borderRadius: "16px",
  marginTop: "24px",
  padding: "12px",
};

const thirdReason = {
  backgroundColor: "#C09DED",
  color: "#070707",
  borderRadius: "16px",
  margin: "24px 0",
  padding: "12px",
};

export default HelloEmail;
