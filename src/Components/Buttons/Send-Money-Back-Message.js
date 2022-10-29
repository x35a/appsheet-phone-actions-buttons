import React from "react";
import {
  orderId,
  phoneNumber,
  comments,
  productsNotFound
} from "../../read-url-parameters";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import { getHref } from "../../get-href";

export const SendMoneyBackMessage = () => {
  const props = {
    comments: comments,
    iconClass: "las la-undo",
    buttonText: "Money Back",
    inputNameGroup: "sendMoneyBackMessage",
    options: [
      {
        checked: true,
        href: getHref(phoneNumber).viber,
        inputText: "Request Card Number",
        message: `Доброго дня
${productsNotFound}
на жаль не було в наявності, база даних сайту не встигла оновитись, просимо вибачення за незручності.
Напишіть будь ласка номер своєї картки, ми зробимо повернення передоплати.`
      },
      {
        check: false,
        href: getHref("0677722166").viber,
        inputText: "Send r card number",
        message: `${comments}
orderId ${orderId}`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
