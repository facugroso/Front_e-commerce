import Header from "../components/Header";
import NewProducts from "../components/NewProducts";
import TopCategories from "../components/TopCategories";
import FeaturedItem from "../components/FeaturedItem";
import "./Home.css";

function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="defaultSection">
        <NewProducts />
      </section>
      <section className="defaultSection">
        <TopCategories />
      </section>
      <section className="defaultSection">
        <FeaturedItem />
      </section>
    </>
  );
}

export default Home;
