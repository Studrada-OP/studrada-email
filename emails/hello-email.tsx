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

      <Preview>Вітаємо, студенти!</Preview>

      <Body style={body}>
        <Container style={mainContainer}>
          <Section>
            <Section>
              <Section style={logoContainer}>
                <Img
                  src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
                  alt="Лого студради НУ'ОП'"
                  style={{ width: "160px" }}
                />
              </Section>

              <Hr style={divider} />
            </Section>

            <Section style={greetingsSection}>
              <Heading style={heading}>Вітаємо, студенти!</Heading>

              <Text style={reasonText}>
                Закликаємо підписатися на наш{" "}
                <Link style={link} href="https://t.me/students_op">
                  телеграм-канал
                </Link>
                , де ми інформуємо про найважливіше, що відбувається у
                Політехніці. Це — головне джерело інформації після офіційного
                веб-сайту, кафедр і деканатів. Не пропусти важливе!
              </Text>

              <Section style={buttonContainer}>
                <Link href="https://t.me/students_op" style={button}>
                  <Img
                    src="https://github.com/sspaceless/studrada-email/blob/main/static/button.jpg?raw=true"
                    alt="кнопка"
                    style={{ width: "173px" }}
                  ></Img>
                </Link>
              </Section>

              <Text style={reasonText}>
                У разі виникнення будь-яких проблем чи питань щодо навчання
                радимо звертатися до нашого{" "}
                <Link style={link} href="https://t.me/Studrada_OP_bot">
                  бота підтримки
                </Link>
                , і волонтер зі Студради твого інституту допоможе корисною,
                актуальною інформацією і порадами або поділиться контактами
                працівника університету, який зможе вирішити питання.
              </Text>
              <Section style={greetingsImageContainer}>
                <Img
                  src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-4.jpg?raw=true"
                  alt="Веселе фото з членами студради 4"
                  style={{ borderRadius: "16px", width: "100%" }}
                />
              </Section>

              <Section>
                <Text style={reasonText}>
                  Ми — орган студентського самоврядування університету, що
                  представляє студентство та об'єднує в собі активних та
                  мотивованих студентів для покращення студентського життя та
                  розвитку університетської спільноти.
                </Text>

                <Text style={reasonText}>
                  Студентська Рада складається на 100% зі студентів, ми будуємо
                  платформу, де думка кожного буде почута. Органи студентського
                  самоврядування (ОСС) є невід’ємною частиною будь-якого
                  університету і від їх роботи залежить якість освітнього
                  процесу в університеті.
                </Text>

                <Text style={reasonText}>
                  ОСС — це про небайдужих людей — від студентів і для студентів.
                  Якщо це про тебе — вітаємо, ти чудовий кандидат у наші лави.
                  Ми приймаємо нових членів з усіх інститутів впродовж всього
                  року і завжди раді поповненню. Членство у студраді є
                  <b> безкоштовним</b> і ми не вимагаємо підписання жодних заяв.
                </Text>
              </Section>

              <Section>
                <Heading style={{ ...heading, textAlign: "left" }}>
                  Чому варто вступити до Студентської Ради?
                </Heading>
              </Section>
            </Section>

            <Section style={reasonsSection}>
              <Row style={{ tableLayout: "fixed", textAlign: "center" }}>
                <Column style={column}>
                  <Section style={firstReason}>
                    <Text style={reasonTitle}>1. Вплив на рішення</Text>
                    <Text style={reasonText}>
                      Ти матимеш можливість реалізовувати своє бачення навчання
                      в Політехніці та допомагати приймати важливі рішення, які
                      стосуються навчання, культурних заходів, соціальних
                      ініціатив і багато іншого.
                    </Text>
                  </Section>
                </Column>

                <Column style={column}>
                  <Section>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-2.jpg?raw=true"
                      alt="Веселе фото з членами студради 2"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Column>

                <Column style={column}>
                  <Section>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-3.jpg?raw=true"
                      alt="Веселе фото з членами студради 3"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Column>

                <Column style={column}>
                  <Section style={secondReason}>
                    <Text style={reasonTitle}>2. Лідерські навички</Text>
                    <Text style={reasonText}>
                      Волонтерство в Студраді допоможе розвинути лідерські та
                      організаційні навички, набути досвіду управління проектами
                      та взаємодії зі спільнотою.
                    </Text>
                  </Section>
                </Column>

                <Column style={column}>
                  <Section>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-1.jpg?raw=true"
                      alt="Веселе фото з членами студради 1"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Column>

                <Column style={column}>
                  <Section style={thirdReason}>
                    <Text style={reasonTitle}>3. Нові знайомства</Text>
                    <Text style={reasonText}>
                      Ти познайомишся з крутими та цікавими людьми, які дуже
                      ймовірно стануть твоїми друзями та розділять твої
                      інтереси.
                    </Text>
                  </Section>
                </Column>

                <Column style={column}>
                  <Section>
                    <Text style={reasonTitle}>4. Це просто весело!</Text>

                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-5.jpg?raw=true"
                      alt="Веселе фото з членами студради 5"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Column>

                <Column style={column}>
                  <Section>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-6.jpg?raw=true"
                      alt="Веселе фото з членами студради 6"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Column>
              </Row>

              <Row style={{ tableLayout: "fixed" }}>
                <Section style={{ marginTop: "24px", padding: "0 12px" }}>
                  <Text style={reasonTitle}>
                    Що потрібно зробити, щоб долучитися?
                  </Text>

                  <Text style={reasonText}>
                    Заповнити{" "}
                    <Link
                      style={link}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf971y1GRkNDdUvcT02KwMcDJs_zWkuvrcnac_VZ8Wy1MTCgw/viewform"
                    >
                      форму
                    </Link>
                    . Ми розуміємо, яким важким може здаватися зробити перший
                    крок, але не хвилюйся, достатньо просто вказати, що хочеш
                    долучитися і ми розпитаємо тебе про твої інтереси, навички
                    тощо, додамо до нашої комунікації і опишемо подальші дії. Не
                    хвилюйся щодо того, підходиш ти чи ні — в нас знайдеться
                    робота для кожного студента. Ми намагаємося надати кожному,
                    хто стане членом Студради стільки можливостей для зросту,
                    скільки можемо.
                  </Text>
                </Section>

                <Section style={greetingsSection}>
                  <Section style={greetingsImageContainer}>
                    <Img
                      src="https://github.com/sspaceless/studrada-email/blob/main/static/happy-photo-7.jpg?raw=true"
                      alt="Веселе фото з членами студради 7"
                      style={{ borderRadius: "16px", width: "100%" }}
                    />
                  </Section>
                </Section>

                <Section style={{ marginTop: "24px", padding: "0 12px" }}>
                  <Text style={reasonTitle}>Які є обов'язки?</Text>

                  <Text style={reasonText}>
                    1. Виділяти щонайменше кілька годин на тиждень нашій роботі.
                  </Text>

                  <Text style={reasonText}>
                    2. Відвідувати щотижневі зустрічі. Для тих, хто живе далеко,
                    ми надаємо можливість приймати участь дистанційно.
                  </Text>

                  <Text style={reasonText}>
                    Якщо ти вважаєш, що тобі це підходить — не зволікай,
                    заповнюй{" "}
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
                <Link href="https://t.me/students_op" style={button}>
                  <Img
                    src="https://github.com/sspaceless/studrada-email/blob/main/static/button.jpg?raw=true"
                    alt="кнопка"
                    style={{ width: "173px" }}
                  ></Img>
                </Link>
              </Section>
            </Section>

            <Section style={{ marginTop: "16px", marginBottom: "40px" }}>
              <Section style={{ marginBottom: "16px" }}>
                <Text style={{ ...reasonTitle, textAlign: "center" }}>
                  До наступних повідомлень!
                </Text>
              </Section>

              <Section style={logoContainer}>
                <Img
                  src="https://github.com/sspaceless/studrada-email/blob/main/static/studrada-logo.png?raw=true"
                  alt="Лого студради НУ'ОП'"
                  style={{ width: "120px" }}
                />
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const body = {
  color: "#EFEFEF",
  backgroundColor: "#FFFFFF",
};

const blendScreen = {
  mixBlendMode: "screen" as const,
};

const blendDifference = {
  mixBlendMode: "difference" as const,
};

const mainContainer = {
  maxWidth: "600px",
  backgroundColor: "#070707",
  padding: "40px 12px 0 12px",
};

const logoContainer = {
  width: "min-content",
};

const divider = {
  width: "68%",
  height: "1px",
  margin: "24px auto",
};

const heading = {
  color: "#EFEFEF",
  fontSize: "24px",
  textAlign: "center" as const,
};

const greetingsSection = {
  padding: "0 8px",
};

const greetingsImageContainer = {
  margin: "24px 0",
};

const buttonContainer = {
  width: "min-content",
  marginTop: "8px",
};

const button = {
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  fontSize: "14px",
  textAlign: "center" as const,
  whiteSpace: "pre" as const,
};

const reasonsSection = {
  marginTop: "24px",
};

const column = {
  width: "100%",
  maxWidth: "268px",
  display: "inline-block",
  verticalAlign: "top",
  margin: "12px 8px",
  textAlign: "left" as const,
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
  padding: "12px",
};

const secondReason = {
  backgroundColor: "#E3FF2E",
  color: "#070707",
  borderRadius: "16px",
  padding: "12px",
};

const thirdReason = {
  backgroundColor: "#C09DED",
  color: "#070707",
  borderRadius: "16px",
  padding: "12px",
};

const link = {
  color: "#C09DED",
  textDecoration: "underlined",
};

export default HelloEmail;
