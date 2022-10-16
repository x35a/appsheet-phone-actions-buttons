import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Components/Container";
import { OpenWhatsappChat } from "./Components/Buttons/Open-Whatsapp-Chat";
import { OpenViberChat } from "./Components/Buttons/Open-Viber-Chat";
import { Call } from "./Components/Buttons/Call";
import { SendTrackingNumber } from "./Components/Buttons/Send-Tracking-Number";
import { SendPaymentDetails } from "./Components/Buttons/Send-Payment-Details";
import { SendCancelMessage } from "./Components/Buttons/Send-Cancel-Message";
import { SendConfirmationMessage } from "./Components/Buttons/Send-Confirmation-Message";
// import { SendViberGroupInvite } from "./Components/Buttons/Send-Viber-Group-Invite";
import { RequestCardNumber } from "./Components/Buttons/Request-Card-Number";
import { SendPromocode } from "./Components/Buttons/Send-Promocode";
import { RespondToComplaint } from "./Components/Buttons/Respond-to-Complaint";
import { ReplyOnFeedback } from "./Components/Buttons/Reply-on-Feedback";

const App = React.createElement(() => {
  return (
    <Container>
      <OpenWhatsappChat />
      <OpenViberChat />
      <Call />
      <SendConfirmationMessage />
      <SendPaymentDetails />
      <SendTrackingNumber />
      {/* <SendViberGroupInvite /> */}
      <RequestCardNumber />
      <SendCancelMessage />
      <SendPromocode />
      <RespondToComplaint />
      <ReplyOnFeedback />
    </Container>
  );
});

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(App);
