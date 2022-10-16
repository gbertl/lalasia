import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import SectionHeading from '../SectionHeading';
import testimonials1 from '../../assets/images/testimonials/testimonials-1.png';
import star from '../../assets/images/testimonials/star.svg';
import quoteUp from '../../assets/images/testimonials/quote-up.svg';
import './style.scss';

const Testimonials = () => {
  return (
    <section className="testimonials section-margin">
      <Container>
        <SectionHeading
          subheading="Testimonials"
          heading="What our customer say"
          bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
          centered
        />

        <Card className="testimonials__card">
          <Card.Body>
            <Image src={quoteUp} className="d-block mb-3 testimonials__quote" />
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div className="testimonials__footer-item">
              <Image
                src={testimonials1}
                className="testimonials__footer-img-1"
              />
              <span>Jane Cooper</span>
            </div>
            <div className="testimonials__footer-item">
              <Image src={star} className="testimonials__footer-img-2" />
              <span>4.3</span>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
};

export default Testimonials;
