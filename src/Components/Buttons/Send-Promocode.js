import React from "react";
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import { orderId, phoneNumber } from "../../read-url-parameters";
import { getHref } from "../../get-href";

export const SendPromocode = () => {
  const props = {
    href: getHref(phoneNumber).viber,
    iconClass: "las la-percent",
    options: [
      {
        checked: true,
        inputText: "smartfood promo with expire date",
        message: `Пропонуємо промокод на знижку 3%
Ваш промокод: ${orderId}
Скористатися знижкою можна на сайті https://smartfood.org.ua/
Термід дії промокоду складає один місяць.`
      },
      {
        checked: false,
        inputText: "smartfood promo no limits",
        message: `Пропонуємо промокод на знижку 3%
Ваш промокод: ${orderId}
Скористатися знижкою можна на сайті https://smartfood.org.ua/`
      },
      {
        checked: false,
        inputText: "homemarket promo with expire date",
        message: `Пропонуємо промокод на знижку 3%
Ваш промокод: ${orderId}
Скористатися знижкою можна на сайті https://homemarket.org.ua/
Термід дії промокоду складає один місяць.`
      },
      {
        checked: false,
        inputText: "homemarket promo no limit",
        message: `Пропонуємо промокод на знижку 3%
Ваш промокод: ${orderId}
Скористатися знижкою можна на сайті https://homemarket.org.ua/`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
