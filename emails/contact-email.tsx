import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface Props {
  fullname: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  fullname = 'estong jamion',
  email = 'estong.jamion@gmail.com',
  message = 'hello i love the website',
}: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Contact form email</Preview>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  style={sectionLogo}
                  src={
                    'https://cdn.palawanwebsolutions.com/static/optimal-logo.png'
                  }
                  width='55'
                  height='55'
                  alt='Optimal Travel Services'
                />
              </Column>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={paragraph}>Message from {fullname}</Text>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>Email Address: {email}</Text>
            <Hr />
          </Section>

          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Optimal Travel Services Sta. Monica,
              Puerto Princesa City, Palawan, Philippines
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                textAlign: 'center',
                margin: 0,
              }}
            >
              This is a copy of the confirmation email you received regarding
              your booking with Optimal Travel Services, including important
              details about your upcoming trip.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: '40px 40px 0 40px',
  margin: '0 auto',
};

const container = {
  margin: '30px auto',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
};

const containerContact = {
  backgroundColor: '#8be7e7',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  padding: '20px',
};

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#4FAFAF',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
};

const booking = {
  fontSize: '12px',
  lineHeight: '10px',
  color: '#2d2e30',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};

const footer = {
  maxWidth: '100%',
};
