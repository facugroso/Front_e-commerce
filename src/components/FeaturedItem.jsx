import "./FeaturedItem.css";

function FeaturedItem() {
  return (
    <>
      <div className="d-flex">
        <div className="d-flex flex-column justify-content-center">
          <div>
            <p className=" fw-semibold">
              Immersive Sound Featuring DTS Headphone:X
            </p>
            <h2 className="fw-bold fs-1 w-50">Cloud Stinger 2 Wireless</h2>
            <p className="fs-5 w-75">
              Enjoy signature Cloud comfort paired with the freedom of a
              reliable 2.4GHZ wireless connection.
            </p>
            <button className="btn rounded-0 btn-danger">LEARN MORE</button>
          </div>
        </div>
        <div>
          <img
            className="featuredItemImage"
            src="https://row.hyperx.com/cdn/shop/files/HyperX_Cloud_Stinger_2_Wireless_1_main_540x.png?v=1677182589"
            alt="Cloud Stinger 2 Wireless image"
          />
          <div className="itemDivShape"></div>
          <div className="itemBackground"></div>
          <div className="itemDivShapeVariant"></div>
        </div>
      </div>

      <div className="d-flex secondItemDiv">
        <div className="featuredItemDescription">
          <img
            className="featuredItemImageVariant"
            src="https://row.hyperx.com/cdn/shop/files/Haste_top_image_540x.png?v=1632720552"
            alt="Pulsefire Haste image"
          />
          <div className="secondItemDivShape"></div>
          <div className="secondItemBackground"></div>
          <div className="secondDivShapeVariant"></div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div>
            <p className="fw-semibold">Ultra-light hex shell design</p>
            <h2 className="fw-bold fs-1 w-50">Pulsefire Haste</h2>
            <p className="fs-5 w-75">
              Aim quicker, game better. With the help of this full-featured
              gaming mouse, weighing in at 59 grams.
            </p>
            <button className="btn rounded-0 btn-danger">LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedItem;
