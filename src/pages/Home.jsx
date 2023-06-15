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
