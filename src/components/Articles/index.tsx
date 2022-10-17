import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import SectionHeading from '../SectionHeading';
import article1 from '../../assets/images/articles/article-1.jpg';
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
    authorAvatar: author2,
    authorName: 'Jeremy Jean',
  },
  {
    id: 3,
    image: article3,
    subtitle: 'Design Inspiration',
    title: 'How to make your interiors cooler and more stylish',
    authorAvatar: author3,
    authorName: 'Michaela Augus',
  },
  {
    id: 4,
    image: article4,
    subtitle: 'Tips and Trick',
    title: 'Elements to add character to your space',
    authorAvatar: author4,
    authorName: 'Kim Gurameh',
  },
];

const Articles = () => {
  return (
    <section className="articles section-margin">
      <Container>
        <SectionHeading
          subheading="Articles"
          heading="The best furniture comes
from Lalasia"
          bodyText="Pellentesque etiam blandit in tincidunt at donec."
        />

        <Card className="text-white mb-4">
          <Card.Img src={article1}></Card.Img>
          <Card.ImgOverlay className="articles__card-overlay">
            <h2 className="fs-6 text-white text-opacity-75">Tips and Trick</h2>
            <Card.Title className="text-reset">
              Create Cozy Dinning Room Vibes
            </Card.Title>
            <Card.Text className="text-truncate text-white text-opacity-75">
              Decorating with neutrals brings balance to the dining room. With
              eclectic decoration on the sides, Caruso Dining Table and Cyrillo
              Dining Chairs elevate the tonal base of the room. The modern
              furniture set gives personality to any space in all types of
              architecture. The wide volume enables everyone to sit back and
              relax, be it in the dining room, conference, or office.
            </Card.Text>
            <Card.Link href="#" className="text-reset fw-bold">
              Read More
            </Card.Link>
          </Card.ImgOverlay>
        </Card>

        <div className="d-flex flex-column gap-4">
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
                    <Card.Footer className="d-flex align-items-center gap-1 articles__card-footer text-black">
                      <Image
                        src={article.authorAvatar}
                        className="articles__author-avatar"
                      />
                      <span className="fw-bold">{article.authorName}</span>
                    </Card.Footer>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Articles;
