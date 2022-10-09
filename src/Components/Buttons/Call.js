import React from "react";
import { SimpleButton } from "./button-templates/Simple-Button";
import { phoneNumber } from "../../read-url-parameters";

export const Call = (props) => {
  const href = `tel:${phoneNumber}`;
  const iconClass = "las la-phone";
  const buttonText = "Call";
  return (
    <SimpleButton href={href} iconClass={iconClass} buttonText={buttonText} />
  );
};
