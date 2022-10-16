import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeading from '../SectionHeading';
import showcase1 from '../../assets/images/showcase/showcase-1.jpg';
import showcase2 from '../../assets/images/showcase/showcase-2.jpg';
import showcaseDesktop1 from '../../assets/images/showcase/showcase-desktop-1.jpg';
import showcaseDesktop2 from '../../assets/images/showcase/showcase-desktop-2.jpg';
import './style.scss';

const Showcase = () => {
  return (
    <section className="showcase section-margin">
      <Container>
        <Row className="gx-5">
          <Col xs={12} lg={6}>
            <SectionHeading
              subheading="Our Product"
              heading="Crafted by talented and high quality material"
              bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
            />
            <Button variant="primary" className="w-100 w-lg-auto mb-4 mb-lg-5">
              Learn More
            </Button>
            <img
              src={showcaseDesktop1}
              alt=""
              className="showcase__img showcase__img--desktop-1 d-none d-lg-block"
            />
          </Col>
          <Col xs={12} lg={6}>
            <div className="d-flex flex-column h-100">
              <ul className="w-100 list-unstyled d-flex justify-content-between justify-content-lg-end gap-4 gap-lg-5 order-lg-2 mt-lg-4 mb-5 mb-lg-6">
                <li className="d-flex flex-column">
                  <span className="fs-6 fs-lg-1 fw-bold text-black">20+</span>
                  <span className="text-muted">Years Experience</span>
                </li>
                <li className="d-flex flex-column">
                  <span className="fs-6 fs-lg-1 fw-bold text-black">483</span>
                  <span className="text-muted">Happy Client</span>
                </li>
                <li className="d-flex flex-column">
                  <span className="fs-6 fs-lg-1 fw-bold text-black">150+</span>
                  <span className="text-muted">Project Finished</span>
                </li>
              </ul>
              <img
                src={showcase1}
                alt=""
                className="mb-4 showcase__img order-lg-1 d-lg-none"
              />
              <picture className="order-lg-3">
                <source media="(min-width: 992px)" srcSet={showcaseDesktop2} />
                <img src={showcase2} alt="" className="showcase__img" />
              </picture>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Showcase;
