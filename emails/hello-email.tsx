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
  Link,
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

      <Section style={buttonContainer}>
        <Button
          href="https://bio.link/studrada_nuop"
          pX={13}
          pY={13}
          style={{ ...button, textAlign: "center" }}
        >
          Наші канали
        </Button>
      </Section>

      <Section>
        <Text style={{ ...reasonText, textAlign: "justify" }}>
          Ми — орган студентського самоврядування університету, що представляє
          студентство та об'єднує в собі активних та мотивованих студентів для
          покращення студентського життя та розвитку університетської спільноти.
        </Text>

        <Text style={{ ...reasonText, textAlign: "justify" }}>
          Студентська Рада складається на 100% зі студентів, ми будуємо
          платформу де думка кожного буде почута. Органи студентського
          самоврядування (ОСС) є невід’ємними частинами будь-якого університету,
          і від якості їх роботи залежить наскільки гарним буде перебування в
          університеті.
        </Text>

        <Text style={{ ...reasonText, textAlign: "justify" }}>
          ОСС — це про небайдужих людей — від студентів і для студентів. Якщо ти
          побачив себе в цих рядках — вітаємо, ти чудовий кандидат для наших
          лав. Ми приймаємо нових членів з усіх інститутів впродовж всього року
          і завжди раді поповненню.
        </Text>
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
                Ти матимеш можливість реалізовувати своє бачення навчання в
                Політехніці та допомагати приймати важливі рішення, які
                стосуються навчання, культурних заходів, соціальних ініціатив і
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
                Волонтерство в Студраді допоможе розвинути лідерські та
                організаційні навички, набути досвіду управління проектами та
                взаємодії зі спільнотою.
              </Text>
            </div>

            <div style={thirdReason}>
              <Text style={reasonTitle}>3. Нові знайомства</Text>
              <Text style={reasonText}>
                Ти познайомишся з крутими та цікавими людьми, які дуже ймовірно
                стануть твоїми друзями, поділять твої інтереси, та зможеш
                побудувати цінні зв'язки.
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

      <Row style={{ margin: 0, tableLayout: "fixed" }}>
        <Section style={{ marginTop: "24px", padding: "0 12px" }}>
          <Text style={reasonTitle}>Що потрібно зробити, щоб долучитися?</Text>

          <Text style={{ ...reasonText, textAlign: "justify" }}>
            Заповнити{" "}
            <Link
              style={link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSf971y1GRkNDdUvcT02KwMcDJs_zWkuvrcnac_VZ8Wy1MTCgw/viewform"
            >
              форму
            </Link>
            . Ми розуміємо, яким важким може здаватися зробити перший крок, але
            не хвилюйся, достатньо просто вказати, що хочеш долучитися і ми
            розпитаємо тебе про твої інтереси, навички тощо, додамо до нашої
            комунікації і опишемо подальші дії. Не хвилюйся щодо того, підходиш
            ти чи ні — в нас знайдеться робота для кожного студента. Ми
            намагаємося надати кожному хто стане членом Студради стільки
            можливостей для зросту, скільки можемо.
          </Text>

          <Text style={{ ...reasonText, textAlign: "justify" }}>
            Закликаємо підписатися на наш{" "}
            <Link style={link} href="https://t.me/students_op">
              телеграм-канал
            </Link>{" "}
            , де ми інформуємо про найважливіше, що відбувається у Політехніці.
            Це — головне джерело інформації після офіційного веб-сайту, кафедр і
            деканатів. Не пропусти важливе!
          </Text>

          <Text style={{ ...reasonText, textAlign: "justify" }}>
            В разі виникнення будь-яких проблем чи питань щодо навчання радимо
            звертатися до нашого{" "}
            <Link style={link} href="https://t.me/Studrada_OP_bot">
              бота підтримки
            </Link>
            , і волонтер із Студради твого інституту допоможе корисною,
            актуальною інформацією і порадами або поділиться контактами
            працівника університету, який зможе вирішити питання.
          </Text>
        </Section>

        <Section style={{ marginTop: "24px", padding: "0 12px" }}>
          <Text style={reasonTitle}>Які є обов'язки?</Text>

          <Text style={reasonText}>
            1. Виділяти щонайменше кілька годин на тиждень нашій роботі.
          </Text>

          <Text style={reasonText}>
            2. Відвідувати щотижневі-двотижневі зустрічі. Для тих хто живе
            далеко ми надаємо можливість приймати участь дистанційно.
          </Text>

          <Text style={reasonText}>
            Якщо ти вважаєш, що тобі це підходить — не зволікай, заповнюй{" "}
            <Link
              style={link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSf971y1GRkNDdUvcT02KwMcDJs_zWkuvrcnac_VZ8Wy1MTCgw/viewform"
            >
              форму
            </Link>{" "}
            і ми подбаємо про решту.
          </Text>
        </Section>
      </Row>

      <Section style={buttonContainer}>
        <Button
          href="https://bio.link/studrada_nuop"
          pX={13}
          pY={13}
          style={{ ...button, textAlign: "center" }}
        >
          Наші канали
        </Button>
      </Section>
    </Section>
  );

  const footerContent = (
    <Section style={{ marginTop: "16px", marginBottom: "40px" }}>
      <Section style={{ marginBottom: "16px" }}>
        <Text style={{ ...reasonTitle, textAlign: "center" }}>
          До наступних повідомлень!
        </Text>
      </Section>

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

const body = {
  color: "#EFEFEF",
};

const mainContainer = {
  maxWidth: "600px",
  backgroundColor: "#070707",
  padding: "40px 12px 0 12px",
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

// const greetingText = {
//   fontSize: "20px",
//   lineHeight: "30px",
//   fontWeight: 700,
// };

const buttonContainer = {
  width: "min-content",
  margin: "auto",
  marginTop: "8px",
};

const button = {
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  fontSize: "14px",
};

const reasonsSection = {
  marginTop: "24px",
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

const link = {
  color: "#C09DED",
  textDecoration: "underlined",
};

export default HelloEmail;

/* <Text style={{ ...greetingText, textAlign: "center" }}>
        Запрошуємо вас приєднатися до Студентської Ради Одеської Політехніки -
        органу, що об'єднує активних та мотивованих студентів з метою покращення
        студентського життя та розвитку університетської спільноти.
      </Text> */
