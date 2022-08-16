import React from "react";
import SimpleButton from "./Simple-Button";
import { phoneNumber } from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const OpenViberChat = (props) => {
  const href = `${viberChatByNumber}${phoneNumber}`;
  const iconClass = "lab la-viber";
  const message = "Open Viber Chat";
  return <SimpleButton href={href} iconClass={iconClass} message={message} />;
};
