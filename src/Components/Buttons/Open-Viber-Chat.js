import React from "react";
import SimpleButton from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";

export default (props) => {
  const href = `viber://chat?number=%2B38${phoneNumber}`;
  const iconClass = "lab la-viber";
  return (
    <SimpleButton href={href} iconClass={iconClass}>
      Open Viber Chat
    </SimpleButton>
  );
};
