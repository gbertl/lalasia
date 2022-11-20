import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/icons/logo.svg';
import './style.scss';

const sitemap = [
  {
    id: 1,
    title: 'Product',
    links: ['New Arrivals', 'Best Selling', 'Home Decor', 'Kitchen Set'],
  },
  {
    id: 2,
    title: 'Services',
    links: ['Catalog', 'Blog', 'Faq', 'Pricing'],
  },
  {
    id: 3,
    title: 'Follow Us',
    links: ['Facebook', 'Instagram', 'Twitter'],
  },
];

const Footer = () => {
  return (
    <footer className="footer mb-4 mb-lg-5">
      <Container>
        <hr
          className="mb-4 mb-lg-6"
          style={{ borderColor: '#ECE4DE', borderWidth: 1.5 }}
        />

        <div className="d-lg-flex justify-content-lg-between">
          <div className="w-lg-25">
            <Image src={logo} className="mb-2 mb-lg-4 footer__logo" />
            <p className="mb-4 text-black">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
          </div>

          <div className="d-flex justify-content-between gap-lg-8">
            {sitemap.map((map) => (
              <div>
                <h6 className="mb-3 mb-lg-4">{map.title}</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 gap-lg-3">
                  {map.links.map((link) => (
                    <li>
                      <a href="#" className="text-black">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
