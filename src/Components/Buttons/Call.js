import React from "react";
import SimpleButton from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";

export default (props) => {
  const href = `tel:${phoneNumber}`;
  const iconClass = "las la-phone";
  return (
    <SimpleButton href={href} iconClass={iconClass}>
      Call
    </SimpleButton>
  );
};
