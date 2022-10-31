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
    iconClass: "las la-times",
    buttonText: "Send Cancel Message",
    inputNameGroup: "SendCancelMessage",
    options: [
      {
        checked: true,
        href: getHref(phoneNumber).viber,
        inputText: "Out of Stock",
        message: `Доброго дня
${productsNotFound}
на жаль немає в наявності, база даних сайту не встигла оновитись, просимо вибачення за незручності.`
      },
      {
        checked: true,
        href: getHref(phoneNumber).viber,
        inputText: "Expired Date",
        message: `Доброго дня, склад виявив проблему, що нажаль у ${productsNotFound} сплив строк придатності.
Ми не можемо відправити товар зі строками, перепрошуємо за цю проблему.`
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: `Якщо замовлення ${orderId} вже неактуальне, будь ласка скасуйте його`,
        message: `Якщо замовлення ${orderId} вже неактуальне, будь ласка скасуйте його у своєму особистому кабінеті.
Оскільки з нас знімається додаткова комісія за замовлення.
Дякуємо заздалегідь.

Як скасувати замовлення? (Prom)
https://help.prom.ua/hc/ru/articles/360008252598

Як скасувати замовлення? (Bigl)
https://help.bigl.ua/uk/article/57-jak-skasuvati-zamovlennja`
      },
      {
        checked: false,
        href: getHref(phoneNumber).viber,
        inputText: `Можете будь ласка скасувати замовлення ${orderId} у своєму особистому кабінеті?`,
        message: `Можете будь ласка скасувати замовлення ${orderId} у своєму особистому кабінеті?
Оскільки з нас знімається додаткова комісія за замовлення.
Дякуємо заздалегідь.

Як скасувати замовлення? (Prom)
https://help.prom.ua/hc/ru/articles/360008252598

Як скасувати замовлення? (Bigl)
https://help.bigl.ua/uk/article/57-jak-skasuvati-zamovlennja`
      }
    ]
  };

  return <ButtonWithOptions {...props} />;
};
