import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';

import SectionHeading from '../SectionHeading';
import showcase1 from '../../assets/images/products/showcase-1.jpg';
import showcase2 from '../../assets/images/products/showcase-2.jpg';
import showcase3 from '../../assets/images/products/showcase-3.jpg';
import showcase4 from '../../assets/images/products/showcase-4.jpg';
import './style.scss';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const products = [
  {
    image: showcase1,
    subheading: 'Living Room',
    title: 'Wooden Bookshelf',
    description: 'Combination of wood and wool',
    price: 62.23,
  },
  {
    image: showcase2,
    subheading: 'Chair',
    title: 'White Aesthetic Chair',
    description: 'Combination of wood and wool',
    price: 63.47,
  },
  {
    image: showcase3,
    subheading: 'Lamp',
    title: 'Bardono Smart Lamp',
    description: 'Using kapuk randu material',
    price: 58.39,
  },
  {
    image: showcase4,
    subheading: 'Sofa',
    title: 'Sofa Empuk Banget',
    description: 'Using kapuk randu material',
    price: 58.39,
  },
];

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <Button
      variant="dark"
      onClick={() => swiper.slidePrev()}
      className="product__prev"
    >
      <img src={arrowLeft} alt="" />
    </Button>
  );
};

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button
      variant="dark"
      onClick={() => swiper.slideNext()}
      className="product__next"
    >
      <img src={arrowLeft} alt="" style={{ transform: 'rotate(180deg)' }} />
    </Button>
  );
};

const Product = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <section className="product section-margin">
      <Container fluid>
        <SectionHeading
          subheading="Product"
          heading="Our popular product"
          bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
          centered
        />
        <Swiper
          spaceBetween={isDesktop ? 29 : 20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          navigation={true}
          className="mb-10"
        >
          {products.map((product) => (
            <SwiperSlide className="product__slide">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <h4 className="fs-small text-body mb-lg-3">
                    {product.subheading}
                  </h4>
                  <Card.Title className="fs-lg-4">{product.title}</Card.Title>
                  <Card.Text className="mb-lg-4">
                    {product.description}
                  </Card.Text>
                  <span className="text-black fw-bold fs-6 fs-lg-5">
                    ${product.price}
                  </span>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
          {isDesktop && <SwiperButtonPrev />}
          {isDesktop && <SwiperButtonNext />}
        </Swiper>
      </Container>
    </section>
  );
};

export default Product;
