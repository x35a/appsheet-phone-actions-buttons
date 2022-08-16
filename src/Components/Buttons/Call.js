import React from "react";
import { SimpleButton } from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";

export const Call = (props) => {
  const href = `tel:${phoneNumber}`;
  const iconClass = "las la-phone";
  const message = "Call";
  return <SimpleButton href={href} iconClass={iconClass} message={message} />;
};
