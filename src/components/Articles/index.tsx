import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeading from '../SectionHeading';
import article1 from '../../assets/images/articles/article-1.jpg';
import articleDesktop1 from '../../assets/images/articles/article-desktop-1.jpg';
import article2 from '../../assets/images/articles/article-2.jpg';
import article3 from '../../assets/images/articles/article-3.jpg';
import article4 from '../../assets/images/articles/article-4.jpg';
import author2 from '../../assets/images/articles/author-2.png';
import author3 from '../../assets/images/articles/author-3.png';
import author4 from '../../assets/images/articles/author-4.png';
import './style.scss';

const articles = [
  {
    id: 2,
    image: article2,
    subtitle: 'Tips and Trick',
    title: '6 ways to give your home minimalistic vibes',
    text: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .',
    authorAvatar: author2,
    authorName: 'Jeremy Jean',
    createdBy: 'Friday, 1 April 2022',
  },
  {
    id: 3,
    image: article3,
    subtitle: 'Design Inspiration',
    title: 'How to make your interiors cooler and more stylish',
    text: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .',
    authorAvatar: author3,
    authorName: 'Michaela Augus',
    createdBy: 'Thursday, 3 March 2022',
  },
  {
    id: 4,
    image: article4,
    subtitle: 'Tips and Trick',
    title: 'Elements to add character to your space',
    text: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .',
    authorAvatar: author4,
    authorName: 'Kim Gurameh',
    createdBy: 'Monday, 17 January 2022',
  },
];

const Articles = () => {
  return (
    <section className="articles section-margin">
      <Container>
        <Row className="gx-lg-5">
          <Col xs={12} lg={6}>
            <SectionHeading
              subheading="Articles"
              heading="The best furniture comes
from Lalasia"
              bodyText="Pellentesque etiam blandit in tincidunt at donec."
            />

            <Card className="text-white mb-4 mb-lg-0">
              <picture>
                <source media="(min-width: 996px)" srcSet={articleDesktop1} />
                <Card.Img src={article1} />
              </picture>
              <Card.ImgOverlay className="articles__card-overlay">
                <h2 className="fs-6 text-white text-opacity-75">
                  Tips and Trick
                </h2>
                <Card.Title className="text-reset">
                  Create Cozy Dinning Room Vibes
                </Card.Title>
                <Card.Text className="text-truncate text-white text-opacity-75">
                  Decorating with neutrals brings balance to the dining room.
                  With eclectic decoration on the sides, Caruso Dining Table and
                  Cyrillo Dining Chairs elevate the tonal base of the room. The
                  modern furniture set gives personality to any space in all
                  types of architecture. The wide volume enables everyone to sit
                  back and relax, be it in the dining room, conference, or
                  office.
                </Card.Text>
                <Card.Link href="#" className="text-reset fw-bold">
                  Read More
                </Card.Link>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col xs={12} lg={6}>
            <div className="d-flex flex-column gap-4 justify-content-lg-between h-100">
              {articles.map((article) => {
                return (
                  <Card key={article.id}>
                    <div className="d-grid align-items-center articles__horizontal-card">
                      <Card.Img
                        src={article.image}
                        className="h-100 articles__horizontal-card-img"
                      />

                      <div>
                        <h2 className="fs-6 text-reset">{article.subtitle}</h2>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text className="text-truncate d-none d-lg-block">
                          {article.text}
                        </Card.Text>
                        <Card.Footer className="d-flex align-items-center articles__card-footer text-black justify-content-between">
                          <div className="d-flex align-items-center gap-1 gap-lg-2">
                            <Image
                              src={article.authorAvatar}
                              className="articles__author-avatar"
                            />
                            <span className="fw-bold">
                              {article.authorName}
                            </span>
                          </div>
                          <span className="text-body d-none d-lg-inline-block">
                            {article.createdBy}
                          </span>
                        </Card.Footer>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Articles;
