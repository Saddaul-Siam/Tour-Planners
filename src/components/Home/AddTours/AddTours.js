import React from 'react';
import { useForm } from "react-hook-form";

const AddTours = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    fetch(`https://mighty-scrubland-09980.herokuapp.com/addTours`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          reset();
          // window.location.reload()
        }
      });
  };
  return (
    <div>
      <h2 className="py-3">Add Tours</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Tours Name"
        />
        <input
          className="p-2 m-2"
          {...register("location")}
          required
          placeholder="Location"
        />
        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          required
          placeholder="Price"
        />
        <input
          className="p-2 m-2"
          type="img"
          {...register("img", { required: true })}
          required
          placeholder="img url"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder="Description"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="p-1 mb-5 mt-3 btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddTours;