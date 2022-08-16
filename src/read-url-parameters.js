const uriParams = new URLSearchParams(window.location.search);

export const phoneNumber = uriParams.get("phone");
export const trackingNumber = uriParams.get("tracking");
export const orderId = uriParams.get("orderId");
export const saleTotal = uriParams.get("saleTotal");
export const saleTotalPlusFee = uriParams.get("saleTotalPlusFee");
export const prepay30PlusFee = uriParams.get("prepay30PlusFee");
export const products = uriParams.get("products");
export const productsNotFound = uriParams.get("productsNotFound");
