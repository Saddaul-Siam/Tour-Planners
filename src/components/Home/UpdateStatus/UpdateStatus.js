// import React from 'react';
// // import React, { useEffect, useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { useParams } from 'react-router';

// const UpdateStatus = () => {
//   /*   const { statusId } = useParams();
//     const [status, setStatus] = useState([]);

//     console.log(status);
//     // const result = status?.order[0].status
//     // console.log(result);

//     useEffect(() => {
//       fetch(`http://localhost:5000/order/${statusId}`)
//         .then(res => res.json())
//         .then(data => {
//           setStatus(data.order[0].status);
//           // setStatus(data)
//         })
//     }, [statusId])
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => {
//       console.log(data)

//       fetch(`http://localhost:5000/update/${statusId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       })
//         .then(res => res.json())
//         .then(result => console.log(result))
//     }; */

//   return (
//     <div className="py-5">
//       <h2>This is a status Update {/* {status.name} */}</h2>
//       <p>Onek try korchi kintu kono vabei korte pari nai 😢😢😢</p>
//       {/*  <form onSubmit={handleSubmit(onSubmit)}>
//         <input defaultValue={status} {...register("status")} />

//         {errors.exampleRequired && <span>This field is required</span>}

//         <input type="submit" />
//       </form> */}
//     </div>
//   );
// };

// export default UpdateStatus;
