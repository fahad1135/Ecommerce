import "../../GlobalCss/CollectionCard.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CollectionCard({ id, image, price, pName }) {
  const dispatch = useDispatch();

  return (
    <div className="collection-card">
      <div className="card-img">{<img src={image} alt={pName} />}</div>
      <div className="category">
        <p>category</p>
        <div className="p-name">
          <p>{pName}</p>
        </div>
        <div className="price">
          <p>
            ${price} <span>$990.00</span>
          </p>
        </div>
        <div className="stars">
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="heart">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className=" arrow">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div className="eye">
            <i className="fa-regular fa-eye"></i>
          </div>
        </div>
      </div>
      <div className="add-btn">
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id,
                pName,
                image,
                price,
              })
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
