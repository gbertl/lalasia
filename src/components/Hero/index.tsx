import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './style.scss';
import arrowDown from '../../assets/images/hero/spiral-down.png';
import arrowDownDesktop from '../../assets/images/hero/spiral-down-desktop.png';
import stars from '../../assets/images/hero/stars-plus-wink-filled.png';
import starsDesktop from '../../assets/images/hero/stars-plus-wink-filled-desktop.png';
import searchIcon from '../../assets/images/icons/search.svg';
import searchIconDesktop from '../../assets/images/icons/search-desktop.svg';
import showcase from '../../assets/images/hero/showcase.jpg';
import showcaseDesktop from '../../assets/images/hero/showcase-desktop.jpg';

const Hero = () => {
  return (
    <section className="hero text-center section-margin">
      <Container>
        <div className="mt-5 mt-md-2 mt-lg-6 mb-4 mb-lg-0 position-relative hero__text-wrapper">
          <picture>
            <source media="(min-width: 992px)" srcSet={arrowDownDesktop} />
            <Image
              src={arrowDown}
              className="position-absolute top-10 top-lg-30 hero__arrow-down"
            />
          </picture>
          <h1 className="hero__title">
            Discover Furniture With High Quality Wood
            <picture>
              <source media="(min-width: 992px)" srcSet={starsDesktop} />
              <Image src={stars} className="hero__stars" />
            </picture>
          </h1>
          <p className="mt-4">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
          <InputGroup className="mt-5 bg-white hero__search-input">
            <InputGroup.Text className="bg-white border-0 px-3 px-4 py-2">
              <picture>
                <source
                  media="(min-width: 992px)"
                  srcSet={searchIconDesktop}
                ></source>
                <Image src={searchIcon} />
              </picture>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search property"
              aria-label="Search property"
              aria-describedby="basic-addon2"
              className="border-0 ps-0 shadow-none bg-transparent"
            />
            <Button
              variant="primary"
              className="hero__search-btn my-2 me-2 my-lg-3 me-lg-3"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
        <picture>
          <source media="(min-width: 768px)" srcSet={showcaseDesktop} />
          <Image src={showcase} fluid />
        </picture>
      </Container>
    </section>
  );
};

export default Hero;
