import "./TopCategories.css";

function TopCategories() {
  return (
    <>
      <div>
        <h2 className="text-center mb-4 fs-3 fw-bold">Top Categories</h2>
      </div>
      <div className="d-flex">
        <div className="categoryCard">
          <div className="mb-2 mx-2">
            <img
              width={291}
              src="https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_monitors_360x.jpg?v=1674118027"
              alt=""
            />
            <p className="fs-6 mt-1 mb-0">GAMING MONITORS</p>
          </div>
        </div>
        <div className="categoryCard">
          <div className="mb-2 mx-2">
            <img
              width={291}
              src="https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_headsets_360x.jpg?v=1674118026"
              alt=""
            />
            <p className="fs-6 mt-1 mb-0">GAMING HEADSETS</p>
          </div>
        </div>
        <div className="categoryCard">
          <div className="mb-2 mx-2">
            <img
              width={291}
              src="https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_keyboards_360x.jpg?v=1674118027"
              alt=""
            />
            <p className="fs-6 mt-1 m-0">GAMING KEYBOARDS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCategories;
