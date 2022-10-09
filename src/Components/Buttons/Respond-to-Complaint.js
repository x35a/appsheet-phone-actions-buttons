import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const RespondToComplaint = (props) => {
  const href = getHref(phoneNumber).viber;
  const iconClass = "las la-poo";
  const buttonText = "Respond to Complaint";
  const message = `Дякуємо що повідомили про цю проблему. Передали інформацію на склад для з'ясування обставин.`;

  return (
    <SimpleButton
      href={href}
      iconClass={iconClass}
      buttonText={buttonText}
      message={message}
    />
  );
};
