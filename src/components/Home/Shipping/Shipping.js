import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../../utilities/fakedb";
import "./Shipping.css";

const Shipping = () => {
  const Swal = require("sweetalert2");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://tour-planners.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  useEffect(() => {
    if (tours.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = tours.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCarts(storedCart);
    }
  }, [tours]);

  const onSubmit = (data) => {
    data.order = carts;
    data.status = "pending";
    fetch(`https://tour-planners.herokuapp.com/addOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to cart successful",
          }).then((result) => {
            if (result.isConfirmed) {
              reset();
              clearTheCart();
              navigate("/dashboard/myOrders");
            }
          });
        }
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2 className="py-3">Please File up your information</h2>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />

          <input required placeholder="Address" {...register("address")} />
          <input required placeholder="City" {...register("city")} />
          <input required placeholder="phone number" {...register("phone")} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
