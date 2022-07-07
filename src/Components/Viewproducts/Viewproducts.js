import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Cards";
import "./Viewproducts.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Slices/productSlice";
import { CartItems } from "../../Slices/cartSlice";

function Viewproducts() {
  //products from store
  let { products, isError, isSuccess, errMsg } = useSelector(
    (state) => state.product
  );
  //userObj from store
  let { userObj } = useSelector((state) => state.user);

  //dispatch fun
  let dispatch = useDispatch();

  let [books, setbooks] = useState([]);

  let newArray;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(CartItems(userObj.username));
  }, []);

  //this to be executed when either isSuccess or isError changed
  useEffect(() => {
    if (isError) {
      alert(errMsg);
    }
    if (isSuccess) {
      //console.log(products)
      // newArray = products.filter((item) => item.bookType === "books");
      setbooks(products);
    }
  }, [isSuccess, isError]);

  const handleClick = (item) => {
    //cartSlice
    dispatch(CartItems(userObj.username));

    //console.log(item)
    //console.log(Object.isExtensible(item))
    //setCartItem(item)

    const obj = {
      ...item,
    };

    //adding username to the item
    obj.username = userObj.username;

    //count of obj
    obj.count = 1;

    // delete id
    delete obj._id;
    delete obj.bookType;
    delete obj.description;
    //console.log(obj)

    //console.log(item,obj)
    // http post req
    axios
      .post("/cart-api/create-cart", obj)
      .then((response) => {
        alert(response.data.message);
        //cartSlice
        dispatch(CartItems(userObj.username));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="text-center">
      <div className="menu-items">
        {/* books */}
        <div className="mt-5 row">
          <h1 className="food" id="books">
            <span>Books</span>
          </h1>
          {books.map((item) => (
            <div className="mx-auto col-12 col-md-6 col-lg-4 container-fluid">
              <Card key={item._id} item={item} handleClick={handleClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Viewproducts;
