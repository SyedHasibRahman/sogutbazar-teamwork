import React from "react";

const SingleOrder = ({ order }) => {
  const { _id, category, name, price, placedAt, orderStatus } = order;

  // handle Cancel/delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are sure, want to cancell?");
    if (proceed) {
      //   dispatch(cancellAnOrder(id));
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <small>
          #1 Id: <a href="#">{_id}</a>
        </small>
      </div>
      <div className="card-body">
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Category:</th>
              <td>{category}</td>
            </tr>
            <tr>
              <th scope="row">Product Name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th scope="row">Price:</th>
              <td>{price}</td>
            </tr>
            <tr>
              <th scope="row">Placed At:</th>
              <td>{placedAt}</td>
            </tr>
            <tr>
              <th scope="row">Order Status:</th>
              <td>{orderStatus}</td>
            </tr>
            <tr>
              <th scope="row">Action:</th>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleDeleteOrder()}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleOrder;
