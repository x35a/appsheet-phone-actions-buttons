import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const RespondToComplaint = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
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
