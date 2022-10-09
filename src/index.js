import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Components/Container";
import { OpenWhatsappChat } from "./Components/Buttons/Open-Whatsapp-Chat";
import { OpenViberChat } from "./Components/Buttons/Open-Viber-Chat";
import { Call } from "./Components/Buttons/Call";
import { SendTrackingNumberViberButton } from "./Components/Buttons/Send-Tracking-Number";
import { SendConfirmationRequest } from "./Components/Buttons/Send-Confirmation-Request";
import { SendPaymentDetails } from "./Components/Buttons/Send-Payment-Details";
import { SendCancelMessage } from "./Components/Buttons/Send-Cancel-Message";
import { SendReminder } from "./Components/Buttons/Send-Reminder";
import { SendConfirmationMessage } from "./Components/Buttons/Send-Confirmation-Message";
import { SendViberGroupInvite } from "./Components/Buttons/Send-Viber-Group-Invite";
import { RequestCardNumber } from "./Components/Buttons/Request-Card-Number";
import { SendPromocode } from "./Components/Buttons/Send-Promocode";
import { RespondToComplaint } from "./Components/Buttons/Respond-to-Complaint";

const App = React.createElement(() => {
  return (
    <Container>
      <OpenWhatsappChat />
      <OpenViberChat />
      <Call />
      <SendConfirmationMessage />
      <SendPaymentDetails />
      <SendTrackingNumberViberButton />
      <SendConfirmationRequest />
      <SendReminder />
      {/* <SendViberGroupInvite /> */}
      <RequestCardNumber />
      <SendPromocode />
      <SendCancelMessage />
      <RespondToComplaint />
    </Container>
  );
});

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(App);
