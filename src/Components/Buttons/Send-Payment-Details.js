import React from "react";
import {
  phoneNumber,
  trackingNumber,
  orderId,
  saleTotal,
  products,
  saleTotalPlusFee,
  prepay30PlusFee
} from "../../read-url-parameters";
import { trackingLink } from "../../build-tracking-link";
import { ButtonWithOptions } from "./Button-with-options";
import { viberChatByNumber } from "../../viber-url-scheme";

export const SendPaymentDetails = () => {
  const privatCard = "5168745609194805";
  const monoCard = "4441114441300165";

  const props = {
    phoneNumber: phoneNumber,
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    href: `${viberChatByNumber}${phoneNumber}`,
    iconClass: "lab la-cc-apple-pay",
    buttonText: "Send Payment Details",
    inputNameGroup: "SendPaymentDetails",
    options: [
      {
        checked: true,
        inputText: "privat prepay 30% plus fee",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Переказ можете зробити на картку
*${privatCard}*
сума ${prepay30PlusFee} грн (це 30% від суми замовлення) або можете сплатити всю суму відразу.
отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      },
      {
        checked: false,
        inputText: "privat prepay 100% plus fee",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${products}
Переказ можете зробити на картку
*${privatCard}*
сума ${saleTotalPlusFee} грн, отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      },
      {
        checked: false,
        inputText: "privat",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${products}
Переказ можете зробити на картку
*${privatCard}*
сума ${saleTotal} грн, отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      },
      {
        checked: false,
        inputText: "mono",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${products}
Переказ можете зробити на картку
*${monoCard}*
сума ${saleTotal} грн, отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      },
      {
        checked: false,
        inputText: "privat prepay 10%",
        message: `Дякуємо за ваше чудове замовлення!
${orderId}
${saleTotal} грн
${products}
Хочемо Вас проінформувати про те, що якщо замовлення більше 2000грн або якщо у замовленні присутні від 10 однакових позицій, таке замовлення ми можемо надіслати післяплатою, при умові часткової передоплати 10% від суми замовлення, яка складає не менше 100грн, це описано в умовах доставки https://smartfood.org.ua/delivery
Напишіть будь ласка, якщо Вам підходить, ми надішлемо реквізити для переказу, дякуємо.`
      },
      {
        checked: false,
        inputText: "tilda потеряшки",
        message: `Доброго дня, це інтернет магазин SmartFood, ми отримали сповіщення про Ваше замовлення на
${products}
Нажаль оплата через платіжну систему Wayforpay не пройшла.
Якщо замовлення актуальне, можете зробити переказ на картку
${privatCard}
сума ${saleTotal} грн
отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
