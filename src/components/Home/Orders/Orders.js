import React from "react";
import { Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const Orders = (props) => {
  let count = 0;
  const orders = props.order;
  console.log(orders);
  // const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-center pb-5">
        <h2>My orders</h2>
      </div>
      <Table responsive striped bordered hover variant="dark">
        {/* table header */}
        <thead>
          <tr className="text-center">
            <th className="fs-3 text-white">Sl</th>
            <th className="fs-3 text-white">Name</th>
            <th className="fs-3 text-white">Product Name</th>
            <th className="fs-3 text-white">Product Image</th>
            <th className="fs-3 text-white">Status</th>
            <th className="fs-3 text-white">Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* looping data */}

          {props?.order?.order?.map((od) => (
            <tr key={od._id} className="text-center">
              <td className="fs-4 text-white ">{++count}</td>
              <td className="fs-4 text-white ">{orders.name}</td>

              <td className="fs-4 text-white ">{od.name}</td>
              <td className="fs-4 text-white ">
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={od.img}
                  alt=""
                />
              </td>
              <td className="fs-4 text-white ">{orders?.status}</td>
              <td className="fs-4 text-white ">
                {orders?.payment ? (
                  "Paid"
                ) : (
                  <Button
                    variant="primary"
                    // onClick={() => navigate(`/contactInformation/${order._id}`)}
                  >
                    Pay
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
