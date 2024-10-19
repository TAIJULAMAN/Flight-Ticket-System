import { useState } from "react";
import Swal from "sweetalert2";

const useAlert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("error");

  const showAlert = (type: any, text: any) => {
    setAlertType(type);
    setAlertText(text);
    setIsAlertVisible(true);
    Swal.fire({
      icon: type,
      title: type === "error" ? "Error" : "Success",
      text: text,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const hideAlertMessage = () => {
    setIsAlertVisible(false);
  };

  return {
    showAlert,
    hideAlertMessage,
    alertText,
    alertType,
  };
};

export default useAlert;
