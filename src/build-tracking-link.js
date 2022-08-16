import { trackingNumber } from "./read-url-parameters";

const novaposhtaTrackingLink = `https://novaposhta.ua/tracking/?cargo_number=${trackingNumber}`;
const ukrposhtaTrackingLink = `https://track.ukrposhta.ua/tracking_UA.html?barcode=${trackingNumber}`;
const justinTrackingLink = `https://justin.ua/tracking?number=${trackingNumber}`;

let trackingLink;

if (!trackingNumber) {
  trackingLink = "trackingNumber is not defined";
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
    default:
      trackingLink = "unknown";
  }
}

export { trackingLink };
