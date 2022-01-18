import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getStoredCart, removeFromDb } from "../../../utilities/fakedb";

const BookingDetails = () => {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  
  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCarts(storedCart);
    }
  }, [products]);

  for (const product of carts) {
    const total = parseInt(product.price) * parseInt(product.quantity);
    product.total = total;
  }

  let totalShoppingCost = 0;
  for (const product of carts) {
    totalShoppingCost = totalShoppingCost + product.total;
  }

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
      .then((result) => {
        if (result.isConfirmed) {
          removeFromDb(id);
        }
      })
      .finally(() => {
        window.location.reload();
      });
  };
  return (
    <div className="bg-secondary p-3">
      <Row>
        <Col xs={12} md={8}>
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {carts.length && (
              <tbody>
                {carts?.map((pd) => (
                  <tr key={pd._id}>
                    <td>
                      <img width="100" height="100" src={pd.img} alt="" />
                    </td>
                    <td>
                      <p className="text-white">{pd.name}</p>
                    </td>
                    <td>
                      <p className="text-white">$ {pd.price}</p>
                    </td>
                    <td>
                      <p>{pd.quantity}</p>
                    </td>
                    <td>
                      <p className="text-white">$ {pd.total}</p>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleRemove(pd._id)}
                        variant="primary"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </Col>
        <Col xs={12} md={4}>
          <h4 className="text-black ms-4 py-2">Cart Totals</h4>
          <Row className="text-black d-flex justify-content-center">
            <Col xs={12} md={5} className="py-3 border text-white">
              Subtotal
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              $ {totalShoppingCost}
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              Total
            </Col>
            <Col xs={12} md={5} className="py-3 border text-white">
              $ {totalShoppingCost}
            </Col>
          </Row>
          {carts.length && (
            <Button
              variant="primary"
              className="ms-4 mt-3 text-white"
              onClick={() => navigate("/shipping")}
            >
              Proceed to checkout
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BookingDetails;
