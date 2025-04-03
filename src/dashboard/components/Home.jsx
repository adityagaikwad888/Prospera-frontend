import React from "react";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomeContext } from "./HomeContext";
import { useNavigate } from "react-router-dom";
import "../../index.css";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState("");
  const [UID, setUID] = useState(localStorage.getItem("id"));
  const [wallet, setWallet] = useState(0);
  const [personalholdings, setPersonalHoldings] = useState([]);
  const [watchlist, setWatchlist] = useState(localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : []);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      try {

        const { data } = await axios.post(
          `${VITE_BACKEND_URL}`,
          {},
          { withCredentials: true }
        );

        const { status, user, id, wallet } = data;

        console.log("status", status, "cookie", cookies.token);

        if (status === false) {
          removeCookie("token");
          navigate("/frontend");
          return;
        }

        setUser(user);
        setUID(id);
        setWallet(wallet);
        localStorage.setItem("id", id);
      } catch (error) {
        console.error("Error verifying cookie:", error);
      }
    };

    verifyCookie();
  }, [cookies.token, removeCookie, navigate]);

  useEffect(() => {
    if (UID) {
      // Only fetch holdings if UID is not null
      axios
        .get(`${VITE_BACKEND_URL}/allHoldings/${UID}`)
        .then((res) => {
          setPersonalHoldings(res.data);
        })
        .catch((error) => {
          console.error("Error fetching holdings:", error);
        });
    }
  }, [UID]);

  useEffect(() => {
    axios
      .get(`${VITE_BACKEND_URL}/api/Stockdata`)
      .then((res) => {
        setWatchlist(res.data);
        localStorage.setItem("watchlist", JSON.stringify(res.data));
      })
      .catch((error) => console.error("Error fetching stock data:", error));
  }, []); // ✅ Properly closed brackets

  const Logout = () => {
    removeCookie("token");
    localStorage.removeItem("id");
    localStorage.removeItem("watchlist");
    navigate("/frontend");
  };

  return (
    <>
      <HomeContext.Provider
        value={{
          logOut: Logout,
          user: user,
          id: UID,
          wallet: wallet,
          perHoldings: personalholdings,
          watchlist: watchlist,
        }}
      >
        <TopBar />
        <Dashboard />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
