import Benifits from './components/Benifits';
import Hero from './components/Hero';
import Product from './components/Product';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Benifits />
      <Product />
    </Layout>
  );
};

export default App;
