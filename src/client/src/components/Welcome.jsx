import React from "react";
import { FaHandHoldingHeart, FaHandHolding } from "react-icons/fa";
import welcomeStyles from "../css/Welcome.module.css";

const Welcome = () => {
  return (
    <div className={welcomeStyles.welcome}>
      <h3>Olá Ana Maria!</h3>
      <div className={welcomeStyles.welcomeNotifications}>
        <div className={welcomeStyles.almentos}>
          <div className={welcomeStyles.content}>
            {/* Icon */}
            <FaHandHoldingHeart />

            <div className={welcomeStyles.text}>
              <h4>Alimentos</h4>
              <p>2 Alimentos registrados</p>
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
