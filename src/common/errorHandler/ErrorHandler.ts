import { notification } from "antd";

export default class ErrorHandler {
  handleError(errorCode: string, errorMessage: string) {
    this.showNotification("Ups something went wrong...", "");
  }

  showNotification(message: string, description: string) {
    notification.error({
      message,
      description,
      placement: "bottomRight",
    });
  }
}
