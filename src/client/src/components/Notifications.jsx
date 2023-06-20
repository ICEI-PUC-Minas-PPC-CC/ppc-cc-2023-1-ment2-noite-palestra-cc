import React from "react";
import notificationStyles from "../css/Notifications.module.css";
import TimeLine from "./TimeLine";

const Notifications = () => {
  return (
    <div className={notificationStyles.notifications}>
      <h3>Notificações</h3>
      <div style={{ maxHeight: '800px', overflow: 'auto' }}>
        <TimeLine />
      </div>
    </div>
  );
};

export default Notifications;
