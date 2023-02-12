import { trackingNumber, orderId } from "./read-url-parameters";

const novaposhtaTrackingLink = `https://novaposhta.ua/tracking/?cargo_number=${trackingNumber}`;
const ukrposhtaTrackingLink = `https://track.ukrposhta.ua/tracking_UA.html?barcode=${trackingNumber}`;
const justinTrackingLink = `https://justin.ua/tracking?number=${trackingNumber}`;
const promLinkToOrder = `https://my.prom.ua/ua/cabinet/user/orders/${orderId}`;

let trackingLink;

if (!trackingNumber) {
  trackingLink = undefined;
} else {
  switch (trackingNumber.slice(0, 2)) {
    case "20":
    case "59":
      trackingLink = novaposhtaTrackingLink;
      break;
    case "05":
      trackingLink = ukrposhtaTrackingLink;
      break;
    case "42":
      trackingLink = justinTrackingLink;
      break;
    case "PR":
      trackingLink = promLinkToOrder;
      break;
    default:
      trackingLink = undefined;
  }
}

const isRozetkaTrackingNumber = /PRM/i.test(trackingNumber) ? true : false;

export { trackingLink, isRozetkaTrackingNumber };
