import React from "react";
import SimpleButton from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";

export default (props) => {
  const href = `https://wa.me/%2B38$${phoneNumber}`;
  const iconClass = "lab la-whatsapp";
  return (
    <SimpleButton href={href} iconClass={iconClass}>
      Open Whatsapp Chat
    </SimpleButton>
  );
};
