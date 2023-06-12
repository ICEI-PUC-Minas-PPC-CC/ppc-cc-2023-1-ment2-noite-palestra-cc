import React from "react";
import { BiCamera } from "react-icons/bi";
import { AiOutlineRedo } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
import notificationStyles from "../css/Notifications.module.css";

const Notifications = () => {
  return (
    <div className={notificationStyles.notifications}>
      <h3>Notificações</h3>
      <div className={notificationStyles.notificationsContent}>
        {/* Venomentos */}
        <div className={notificationStyles.venomentos}>
          <h4>Vencimentos</h4>
          <div className={notificationStyles.venomentosContent}>
            <div className={notificationStyles.link}>
              <div className={notificationStyles.circle}></div>
              <div className={notificationStyles.line}></div>
            </div>
            <div className={notificationStyles.vline}></div>
            <div className={notificationStyles.redContent}>
              <p>
              Alimento Arroz - Perto de vencimento dia 01/04/2023   [ Mensagem sistema]{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Log de messagens */}
        <div className={notificationStyles.logWrapper}>
          <div className={notificationStyles.log}>
            <h4>Log de Mensagens</h4>
            <div className={notificationStyles.venomentosContent}>
              <div className={notificationStyles.link}>
                <div className={notificationStyles.circle}></div>
                <div className={notificationStyles.line}></div>
              </div>
              <div className={notificationStyles.vline}></div>
              <div className={notificationStyles.shadedContentWrapper}>
                <div className={notificationStyles.shadedContent}>
                  <header>
                    <h6>Ana Maria</h6>
                    <h6>01/04/23</h6>
                  </header>
                  <p>Alimentos perto do vencimento</p>
                </div>
              </div>
            </div>
          </div>

          {/* sForm */}
          <div className={notificationStyles.sForm}>
            <AiOutlineRedo />
            <BiCamera />
            <BsEyeglasses />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
