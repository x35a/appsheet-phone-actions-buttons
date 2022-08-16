// test url
// https://blizju.csb.app/?phone=0984111972&tracking=20450575092217&orderId=203457487&saleTotal=344&saleTotalPlusFee=346&prepay30PlusFee=104&products=%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%20Cachet%20(%D0%9A%D0%B0%D1%88%D0%B5%D1%82)%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%2054%%20%D0%BA%D0%B0%D0%BA%D0%B0%D0%BE%20%D1%81%20%D1%84%D1%83%D0%BD%D0%B4%D1%83%D0%BA%D0%BE%D0%BC%20(%D0%BB%D0%B5%D1%81%D0%BD%D0%BE%D0%B9%20%D0%BE%D1%80%D0%B5%D1%85)%20300%D0%B3&productsNotFound=

import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Components/Container";
import { OpenWhatsappChat } from "./Components/Buttons/Open-Whatsapp-Chat";
import { OpenViberChat } from "./Components/Buttons/Open-Viber-Chat";
import { Call } from "./Components/Buttons/Call";
import { SendTrackingNumberViberButton } from "./Components/Buttons/Send-tracking-number-viber";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <div>
        {/* <button onClick={() => this.setState({ liked: true })}>
          Мені подобається
        </button> */}
        <Container>
          <OpenWhatsappChat />
          <OpenViberChat />
          <Call />
          <SendTrackingNumberViberButton />
        </Container>
      </div>
    );
  }
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
