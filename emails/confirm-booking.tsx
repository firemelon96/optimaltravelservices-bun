import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import { format } from 'date-fns';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

interface Props {
  fullname: string;
  title: string;
  type: string;
  email: string;
  mobileNumber: string;
  message: string;
  adults: number;
  children?: number;
  dateRange: { from: Date; to: Date };
}

export const ConfirmBooking = ({
  fullname,
  title,
  type,
  email,
  mobileNumber,
  message,
  adults,
  children,
  dateRange = { from: new Date(), to: new Date() },
}: Props) => {
  const dateFromString = format(dateRange.from, 'yyyy-MM-dd');
  const dateToString = format(dateRange.to, 'yyyy-MM-dd');
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Booking from Website</Preview>
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
            <Text style={heading}>BOOKING UPDATE</Text>
            <Text style={paragraph}>Hello {fullname}</Text>
            <Text style={paragraph}>
              We recieved your booking about {title}. We are excited to help you
              plan your travels and ensure you have an unforgettable experience.
              One of our representatives will review your Inquiry/Booking and
              get back to you within 24 hours with further details and next
              steps.
            </Text>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>BOOKING DETAILS</Text>
            <Text style={booking}>
              Title: {title} | {type}
            </Text>
            <Text style={booking}>
              Duration: {format(new Date(dateFromString), 'LLL dd, yyyy')} -{' '}
              {format(new Date(dateToString), 'LLL dd, yyyy')}
            </Text>
            <Text style={booking}>
              Participants: {adults} number of adult,{' '}
              {children ? `${children} number of children` : ''}
            </Text>
            <Text style={booking}>
              Contact details: {email} {mobileNumber}
            </Text>
            <Text style={booking}>Message: {message}</Text>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={paragraph}>
              Should you have any immediate questions or require further
              assistance, please feel free to contact us at{' '}
              <Link href='mailto:optimaltravelservices11@gmail.com'>
                optimaltravelservices11@gmail.com
              </Link>
            </Text>
            <Text style={paragraph}>
              Thank you for choosing Optimal Travel Services. We look forward to
              helping you create wonderful memories!
            </Text>
          </Section>

          <Section style={paragraphContent}>
            <Text style={paragraph}>Thank you,</Text>
            <Text style={{ ...paragraph, fontSize: '20px' }}>
              Optimal Travel Team
            </Text>
          </Section>

          {/* <Section style={containerContact}>
            <Row>
              <Text style={paragraph}>Connect with us</Text>
            </Row>
            <Row
              align='left'
              style={{
                width: '84px',
                float: 'left',
              }}
            >
              <Column style={{ paddingRight: '4px' }}>
                <Link href='https://notifications.google.com'>
                  <Img
                    width='28'
                    height='28'
                    src={`${baseUrl}/static/google-play-chat.png`}
                  />
                </Link>
              </Column>
              <Column style={{ paddingRight: '4px' }}>
                <Link href='https://notifications.google.com'>
                  <Img
                    width='28'
                    height='28'
                    src={`${baseUrl}/static/google-play-icon.png`}
                  />
                </Link>
              </Column>
              <Column style={{ paddingRight: '4px' }}>
                <Link href='https://notifications.google.com'>
                  <Img
                    width='28'
                    height='28'
                    src={`${baseUrl}/static/google-play-academy.png`}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Img
                style={footer}
                width='540'
                height='48'
                src={`${baseUrl}/static/google-play-footer.png`}
              />
            </Row>
          </Section> */}

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

export default ConfirmBooking;

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
  backgroundColor: '#fffaf0',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
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
