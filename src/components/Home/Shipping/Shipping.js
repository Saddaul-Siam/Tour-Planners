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
    fetch(`http://localhost:5000/myBooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const onSubmit = data => {
    data.order = orders
    fetch(`http://localhost:5000/addOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Order processed Successfully');
          handleDelete()
          reset();
          history.push('/myOrders')
          window.location.reload();
          
        }
      });
  };

  const handleDelete = () => {
    const url = `http://localhost:5000/deleteTours`
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
          {errors.email && <span className="error">This field is required</span>}
          <input placeholder="Address" defaultValue="" {...register("address")} />
          <input placeholder="City" defaultValue="" {...register("city")} />
          <input placeholder="phone number" defaultValue="" {...register("phone")} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;