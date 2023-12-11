import { NotificationManager } from "react-notifications";

const createNotification = (type, msg) => {
  const TIMER = 5000;
  switch (type) {
    case "info":
      NotificationManager.info(msg);
      break;
    case "success":
      NotificationManager.success(msg);
      break;
    case "warning":
      NotificationManager.warning(msg, "Warning", TIMER);
      break;
    case "error":
      NotificationManager.error(msg, "Error", TIMER);
      break;
  }
};
export default createNotification;
