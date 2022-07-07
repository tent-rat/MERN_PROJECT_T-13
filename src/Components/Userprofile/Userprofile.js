import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Userprofile() {
  //get userObj from store
  let { userObj } = useSelector((state) => state.user);

  return (
    <>
      <h1 className="m-4 text-center text-warning">Profile</h1>
      <Card style={{ width: "18rem" }} className="mx-auto mt-5 ">
        <Card.Body>
          <Card.Title>{userObj.username}</Card.Title>
          <Card.Text>{userObj.email}</Card.Text>
          <Card.Text>{userObj.city}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Userprofile;
