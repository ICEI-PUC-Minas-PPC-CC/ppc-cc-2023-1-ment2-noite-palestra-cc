import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaHandHolding } from "react-icons/fa";
import { Button, CircularProgress, Stack } from "@mui/material";
import welcomeStyles from "../css/Welcome.module.css";
import Rotas from "../api";

const Welcome = () => {
  const [counter, setCounter] = useState(0);
  const [counterValidade, setCounterValidade] = useState(0);
  const [configExpiration, setConfigExpiration] = useState(0);
  const [configStock, setConfigStock] = useState(0);
  const [config, setConfig] = useState([]);
  const [loading, setLoading] = useState(true);

  const routes = new Rotas();

  const getConfig = () => {
    routes
      .get("/config/all")
      .then((response) => {
        setConfig(response.data);
        setConfigExpiration(response.data[0].expirationDays);
        setConfigStock(response.data.stock);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllDonations = () => {
    routes
      .get("/donation/sum-quantities")
      .then((response) => setCounter(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllExpirationDonate = () => {
    routes
      .get(`/donation/expiring-products/${configExpiration}`)
      .then((res) => setCounterValidade(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getConfig();
    getAllDonations();
    getAllExpirationDonate();
  }, []);

  return (
    <div className={welcomeStyles.welcome}>
      <div className={welcomeStyles.welcomeNotifications}>
        <div className={welcomeStyles.almentos}>
          <div className={welcomeStyles.content}>
            {/* Icon */}
            <FaHandHoldingHeart />

            <div className={welcomeStyles.text}>
              <h4>Alimentos em estoque</h4>
              <div className={welcomeStyles.counter}>
                {loading ? (
                  <CircularProgress size={20} style={{ color: "#eb268f" }} />
                ) : (
                  <span>{counter.soma}</span>
                )}
              </div>
            </div>
          </div>
          <div className={welcomeStyles.notify}>
            <div>
              <p>Perto da data de vencimento</p>
              {loading ? (
                <CircularProgress size={20} style={{ color: "#eb268f" }} />
              ) : (
                <span>{counterValidade.count}</span>
              )}
            </div>
          </div>
        </div>
        <div className={welcomeStyles.notify}>
          <div>
            <p>Estoque mínimo</p>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
