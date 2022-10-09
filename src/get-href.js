export const getHref = (phoneNumber) => {
  return {
    viber: `viber://chat?number=%2B38${phoneNumber}`,
    whatsapp: `https://wa.me/%2B38${phoneNumber}`
  };
};
