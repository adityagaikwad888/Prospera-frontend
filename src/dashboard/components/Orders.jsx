import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HomeContext } from "./HomeContext";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Orders = () => {
  let [orders, setOrders] = useState([]);
  let { id } = useContext(HomeContext);

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/allOrders/${id}`).then((res) => {
      setOrders(res.data);
    });
  }, [id]);

  return (
    <div className="orders-container">
      {orders.length > 0 ? (
        <>
          <h3 className="section-title">
            Orders <span className="holdings-count">{orders.length}</span>
          </h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "even" : "odd"}
                    >
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td
                        style={{
                          fontSize: "0.8rem",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 10px",
                            backgroundColor:
                              order.mode === "BUY"
                                ? "rgb(0,170,0,0.4)"
                                : "rgb(255,0,0,0.4)",
                          }}
                        >
                          {order.mode}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today hover over stocks</p>

          <Link to={"/"} className="dashboardbtn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
