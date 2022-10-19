import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import arrowRight from '../assets/images/cta/arrow-right.svg';
import PrimaryBlock from './Buttons/PrimaryBlock';

const Cta = () => {
  return (
    <section className="cta section-margin">
      <Container className="d-flex justify-content-between flex-column flex-lg-row align-items-start">
        <h1 className="mb-4">Join with me to get special discount</h1>
        <PrimaryBlock className="d-inline-flex gap-2 gap-lg-3 align-items-center w-auto">
          Learn More
          <Image src={arrowRight} />
        </PrimaryBlock>
      </Container>
    </section>
  );
};

export default Cta;
