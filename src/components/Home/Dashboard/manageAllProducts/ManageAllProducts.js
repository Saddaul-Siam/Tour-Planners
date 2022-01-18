import React, { useState, useEffect } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

const ManageAllProducts = () => {
  const Swal = require("sweetalert2");
  const [tours, setTours] = useState([]);
  let count = 0;
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [tours]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you will Cancel never back to many",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tour-planners.herokuapp.com/deleteSingleTour/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Tours deleted successful",
              });
            }
          });
      }
    });
  };
  return (
    <Container fluid>
      <h2 className="fs-3 fw-bold text-center">
        <i class="fas fa-shopping-bag"></i> Product Information
      </h2>
      <hr className="mx-auto w-50 mb-5" />
      {tours.length ? (
        <Table responsive striped bordered hover variant="dark">
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-3 text-white">Sl</th>
              <th className="fs-3 text-white">Product Name</th>
              <th className="fs-3 text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* looping data */}

            {tours.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="fs-4 text-white ">{++count}</td>
                <td className="fs-4 text-white ">{product.name}</td>
                <td className="fs-4 text-white ">
                  <Button
                    variant="primary"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
    </Container>
  );
};

export default ManageAllProducts;
