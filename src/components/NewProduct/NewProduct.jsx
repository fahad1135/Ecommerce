import "../../GlobalCss/NewProduct.css";
import headPhoneImage from "../../assets/headPhone.jpg";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

function NewProduct() {
  return (
    <div className="new-productsection">
      <div className="new-product-nav">
        <div className="title">
          <h3>New Products</h3>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Laptops</a>
            </li>
            <li>
              <a href="">SamertPhones</a>
            </li>
            <li>
              <a href="">Cameras</a>
            </li>
            <li>
              <a href="">Assesories</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-section">
        <CollectionCard
          id={1}
          image={headPhoneImage}
          price={980.0}
          pName={"Samsung Head Phones"}
        />
        <CollectionCard
          id={2}
          image={headPhoneImage}
          price={880.0}
          pName={" Head Phone"}
        />
        <CollectionCard
          id={3}
          image={headPhoneImage}
          price={780.0}
          pName={" Sony Head Phone"}
        />
        <CollectionCard
          id={4}
          image={headPhoneImage}
          price={680.0}
          pName={" Hair Head Phone"}
        />
      </div>
    </div>
  );
}

export default NewProduct;
