import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaHandHolding } from "react-icons/fa";
import welcomeStyles from "../css/Welcome.module.css";
import Rotas from "../api";

const Welcome = () => {
  const [counter, setCounter] = useState(0);
  const routes = new Rotas();

  const getUsers = () => {
    routes
      .get("/donation/sum-quantities")
      .then((response) => setCounter(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
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
                <span>Quantidade: {counter.soma}</span>
                </div>
            </div>
          </div>
          <div className={welcomeStyles.notify}>
            <div>
              <p>Perto da data de vencimento</p>
              <span>1</span>
            </div>
          </div>
        </div>
        <div className={welcomeStyles.basicas}>
          <div className={welcomeStyles.content}>
            {/* Icon */}
            <FaHandHolding />

            <div className={welcomeStyles.text}>
              <h4>Cestas Basicas</h4>
              <p>2 Cestas registradas</p>
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
    </div>
  );
};

export default Welcome;
