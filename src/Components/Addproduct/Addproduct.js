import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import addProduct from "../../images/addproduct.svg";
import { MdAddTask } from "react-icons/md";

function Addproduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // //state for image
  // let [img, setImg] = useState(null);

  // //on image select
  // const onImageSelect = (event) => {
  //   setImg(event.target.files[0]);
  // };

  //submit form
  const onFormSubmit = (productObj) => {
    //console.log(productObj)
    //create Formdata object
    //let formData = new FormData();
    // // //append values to it
    // formData.append("productObj", JSON.stringify(productObj));
    // formData.append("Bookphoto", img);
    //http post req
    axios
      .post("/product-api/create-product", productObj)
      .then((response) => {
        //console.log(response)
        alert(response.data.message);
        //if user create
        // if (response.data.message === "New Product created Successfully!") {
        //   //navigate to login page
        //   navigate("/admindashboard/products");
        // }
      })
      .catch((error) => {
        console.log(error.message);
        alert("Something went wrong....", error.message);
      });
  };

  return (
    <>
      <div className="text-light">
        <h1 className="text-warning text-center">Add Product</h1>
        <img
          src={addProduct}
          alt="signup image"
          width="300px"
          className="mx-auto d-none d-sm-block border border-2 border-light p-3 m-3"
        />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              {/* BookItem */}
              <Form.Group className="mb-3">
                <Form.Label>BookItem </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter BookItem"
                  {...register("Book", { required: true })}
                />
                {/* validation error message for Bookitem */}
                {errors.Book && (
                  <p className="text-danger">*Username is required</p>
                )}
              </Form.Group>

              {/* Cost */}
              <Form.Group className="mb-3">
                <Form.Label>Cost </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Cost"
                  {...register("cost", { required: true })}
                />
                {/* validation error message for cost */}
                {errors.cost && (
                  <p className="text-danger">*Cost is required</p>
                )}
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  {...register("description", { required: true })}
                />
                {/* validation error message for description */}
                {errors.description && (
                  <p className="text-danger">*Description is required</p>
                )}
              </Form.Group>

              {/* BookItem image
              <Form.Group className="mb-3">
                <Form.Label>BookItem Image</Form.Label>
                <Form.Control
                  type="file"
                  {...register("Bookphoto", { required: true })}
                  onChange={(event) => onImageSelect(event)}
                />
                {/* validation error message for photo */}
              {/* {errors.Bookphoto && (
                  <p className="text-danger">*BookItem Image is required</p>
                )} */}
              {/* </Form.Group> */}

              {/* submit button */}
              <Button variant="primary" type="submit">
                ADD ITEM <MdAddTask />
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
