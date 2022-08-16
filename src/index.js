// test url
// https://blizju.csb.app/?phone=0977700168&tracking=&orderId=1973485630&saleTotal=3053&saleTotalPlusFee=3068&prepay30PlusFee=921&products=%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0%20%D0%BE%D1%81%D1%8C%D0%BC%D0%B8%D0%BD%D0%BE%D0%B3%D0%B0%20%D1%87%D0%B8%D0%BB%D0%B8,%20%D1%81%D0%BD%D0%B5%D0%BA%20%D0%BA%20%D0%BF%D0%B8%D0%B2%D1%83%201%D0%BA%D0%B3%20(632986)%20-%201x839%20%E2%89%A1%20839;%20%D0%9A%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0%D1%80%20%D0%BA%D1%83%D0%B1%D0%B8%D0%BA%D0%B8%20%D1%81%D0%BD%D0%B5%D0%BA%201%D0%BA%D0%B3%20(601854)%20-%201x734%20%E2%89%A1%20734;%20%D0%A2%D1%80%D0%B5%D1%81%D0%BA%D0%B0%20%D0%B2%D1%8F%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BE%20%D1%88%D0%B0%D0%BD%D1%85%D0%B0%D0%B9%D1%81%D0%BA%D0%B8,%20...&productsNotFound=

import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Components/Container";
import OpentWhatsappChat from "./Components/Buttons/Open-Whatsapp-Chat";
import OpenViberappChat from "./Components/Buttons/Open-Viber-Chat";
import Call from "./Components/Buttons/Call";
import { ButtonWithOptions } from "./Components/Buttons/Button-with-options";

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
          <OpentWhatsappChat></OpentWhatsappChat>
          <OpenViberappChat></OpenViberappChat>
          <Call></Call>
          <ButtonWithOptions></ButtonWithOptions>
        </Container>
      </div>
    );
  }
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
