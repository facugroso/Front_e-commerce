import Header from "../components/home/Header";
import NewProducts from "../components/home/NewProducts";
import TopCategories from "../components/home/TopCategories";
import FeaturedItem from "../components/home/FeaturedItem";
import "./Home.css";

function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="container defaultSection">
        <NewProducts />
      </section>
      <section className="container defaultSection">
        <TopCategories />
      </section>
      <section className="container defaultSection">
        <FeaturedItem />
      </section>
    </>
  );
}

export default Home;
