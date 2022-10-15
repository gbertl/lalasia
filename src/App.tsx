import Benifits from './components/Benifits';
import Hero from './components/Hero';
import Product from './components/Product';
import Showcase from './components/Showcase';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Benifits />
      <Product />
      <Showcase />
    </Layout>
  );
};

export default App;
