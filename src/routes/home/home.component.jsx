import Categories from '../../components/categories/categories.component';

const Home = () => {
  return (
    <div>
      <h1> 1 + {process.env.REACT_APP_TEST_ENV}</h1>
      <Categories />
    </div>
  );
};

export default Home;
