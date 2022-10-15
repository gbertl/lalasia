import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import SectionHeading from '../SectionHeading';
import showcase1 from '../../assets/images/showcase/showcase-1.jpg';
import showcase2 from '../../assets/images/showcase/showcase-2.jpg';
import './style.scss';

const Showcase = () => {
  return (
    <section className="showcase">
      <Container>
        <SectionHeading
          subheading="Our Product"
          heading="Crafted by talented and high quality material"
          bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
        <Button variant="primary" className="w-100 mb-4">
          Learn More
        </Button>
        <ul className="w-100 list-unstyled d-flex justify-content-between gap-4 mb-5">
          <li>
            <h6>20+</h6>
            <span className="text-muted">Years Experience</span>
          </li>
          <li>
            <h6>483</h6>
            <span className="text-muted">Happy Client</span>
          </li>
          <li>
            <h6>150+</h6>
            <span className="text-muted">Project Finished</span>
          </li>
        </ul>
        <img src={showcase1} alt="" className="mb-4 showcase__img" />
        <img src={showcase2} alt="" className="showcase__img" />
      </Container>
    </section>
  );
};

export default Showcase;
