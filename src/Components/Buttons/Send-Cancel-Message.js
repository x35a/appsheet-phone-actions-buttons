import React from "react";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import {
  orderId,
  phoneNumber,
  productsNotFound
} from "../../read-url-parameters";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendCancelMessage = () => {
  const props = {
    phoneNumber: phoneNumber,
    href: `${viberChatByNumber}${phoneNumber}`,
    iconClass: "las la-window-close",
    buttonText: "Send Cancel Message",
    inputNameGroup: "SendCancelMessage",
    options: [
      {
        checked: true,
        inputText: "Out of Stock",
        message: `Доброго дня
${productsNotFound}
даного товару поки що немає в наявності, очікуємо на поставку, вибачте за незручності.`
      },
      {
        checked: false,
        inputText: "Self Cancel Request (Prom)",
        message: `Можете будь ласка скасувати замовлення ${orderId} у своєму особістому кабінеті Prom ?`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
