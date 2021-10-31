import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { user } = useAuth();
  const history = useHistory();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`https://tour-planners.herokuapp.com/myBooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const onSubmit = data => {
    data.order = orders
    fetch(`https://tour-planners.herokuapp.com/addOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Order processed Successfully');
          handleDelete()
        }
      }).finally(() => {
        reset();
        history.push('/myOrders')
        // window.location.reload();
      })
  };

  const handleDelete = () => {
    const url = `https://tour-planners.herokuapp.com/deleteTours`
    console.log(url);
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2 className="py-3">Please File up your information</h2>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

          <input defaultValue={user.displayName} {...register("name")} />

          <input defaultValue={user.email} {...register("email", { required: true })} />

          <input required placeholder="Address"  {...register("address")} />
          <input required placeholder="City" {...register("city")} />
          <input required placeholder="phone number"  {...register("phone")} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;