import React from "react";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import {
  orderId,
  phoneNumber,
  productsNotFound
} from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const SendCancelMessage = () => {
  const props = {
    phoneNumber: phoneNumber,
    href: getHref(phoneNumber).viber,
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
        inputText: "Self Cancel Request",
        message: `Можете будь ласка скасувати замовлення ${orderId} у своєму особистому кабінеті? Оскільки з нас знімається додаткова комісія за замовлення.

Як скасувати замовлення? (Prom)
https://help.prom.ua/hc/ru/articles/360008252598

Як скасувати замовлення? (Bigl)
https://help.bigl.ua/uk/article/57-jak-skasuvati-zamovlennja`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
