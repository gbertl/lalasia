import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import SectionHeading from '../SectionHeading';
import testimonials1 from '../../assets/images/testimonials/testimonials-1.png';
import testimonials2 from '../../assets/images/testimonials/testimonials-2.png';
import testimonials3 from '../../assets/images/testimonials/testimonials-3.png';
import star from '../../assets/images/testimonials/star.svg';
import quoteUp from '../../assets/images/testimonials/quote-up.svg';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { Autoplay } from 'swiper';

const testimonials = [
  {
    id: 1,
    message:
      'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    image: testimonials1,
    name: 'Jane Cooper',
    rating: 4.3,
  },
  {
    id: 2,
    message:
      'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    name: 'Cobocannaeru',
    image: testimonials2,
    rating: 3.5,
  },
  {
    id: 3,
    message:
      'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    image: testimonials3,
    name: 'Berry Gunawan',
    rating: 3.4,
  },
];

const Testimonials = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <section className="testimonials section-margin">
      <SectionHeading
        subheading="Testimonials"
        heading="What our customer say"
        bodyText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        centered
        withContainerPadding
      />

      <Swiper
        slidesPerView="auto"
        spaceBetween={isDesktop ? 30 : 20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide className="testimonials__slide">
              <Card className="testimonials__card">
                <Card.Body>
                  <Image
                    src={quoteUp}
                    className="d-block mb-3 mb-lg-4 testimonials__quote"
                  />
                  {testimonial.message}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center testimonials__card-footer">
                  <div className="testimonials__footer-item">
                    <Image
                      src={testimonial.image}
                      className="testimonials__footer-img-1"
                    />
                    <span>{testimonial.name}</span>
                  </div>
                  <div className="testimonials__footer-item">
                    <Image src={star} className="testimonials__footer-img-2" />
                    <span>{testimonial.rating}</span>
                  </div>
                </Card.Footer>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
