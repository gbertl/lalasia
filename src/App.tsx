import Benifits from './components/Benifits';
import Hero from './components/Hero';
import Product from './components/Product';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Benifits />
      <Product />
      <Showcase />
      <Testimonials />
    </Layout>
  );
};

export default App;
