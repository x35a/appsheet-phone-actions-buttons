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
import { ButtonWithOptions } from "./button-templates/Button-with-options";
import { getHref } from "../../get-href";

export const SendPaymentDetails = () => {
  const privatCard = "5168745609194805";
  const monoCard = "4441114441300165";

  const props = {
    trackingNumber: trackingNumber,
    trackingLink: trackingLink,
    iconClass: "lab la-cc-apple-pay",
    buttonText: "Send Payment Details",
    inputNameGroup: "SendPaymentDetails",
    options: [
      {
        checked: true,
        href: getHref(phoneNumber).viber,
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
        href: getHref(phoneNumber).viber,
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
        href: getHref(phoneNumber).viber,
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
        href: getHref(phoneNumber).viber,
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
        href: getHref(phoneNumber).viber,
        inputText: "tilda потеряшки",
        message: `Доброго дня, це інтернет магазин SmartFood, ми отримали сповіщення про Ваше замовлення на
${products}
Нажаль оплата через платіжну систему Wayforpay не пройшла.
Якщо замовлення актуальне, можете зробити переказ на картку
${privatCard}
сума ${saleTotal} грн
отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: "remind payment details",
        message: `Доброго дня, якщо замовлення актуально, ми би могли відправити його в найближчий робочий день.
Переказ можете зробити на картку
*${privatCard}*
сума ${prepay30PlusFee} грн (це 30% від суми замовлення) або можете сплатити всю суму відразу ${saleTotal} грн.
отримувач Яковенко Роман
Напишіть будь ласка у чат після того як зробите переказ, заздалегідь дякуємо.`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
