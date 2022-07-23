import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeading from '../../components/SectionHeading';
import threeSquare from '../../assets/images/icons/3square.svg';
import calendarTick from '../../assets/images/icons/calendar-tick.svg';
import moneyTick from '../../assets/images/icons/money-tick.svg';
import './style.scss';

const benifitsData = [
  {
    icon: threeSquare,
    title: 'Many Choices',
    desc: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
  },
  {
    icon: calendarTick,
    title: 'Fast and On Time',
    desc: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
  },
  {
    icon: moneyTick,
    title: 'Affordable Price',
    desc: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
  },
];

const Benifits = () => {
  return (
    <section className="benifits section-margin">
      <Container>
        <SectionHeading
          subheading="Benifits"
          heading="Benefits when using our services"
          bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />

        <Row className="g-3 g-lg-4">
          {benifitsData.map((benifit, idx) => (
            <Col key={idx} xs={12} lg={4}>
              <Card className="benifits__card">
                <Card.Body>
                  <Image
                    src={benifit.icon}
                    className="bg-body rounded-circle mb-3 mb-lg-4 p-2 p-lg-3"
                  />
                  <Card.Title as="h6" className="fs-lg-5">
                    {benifit.title}
                  </Card.Title>
                  <Card.Text>{benifit.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Benifits;
