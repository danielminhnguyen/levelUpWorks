import React from "react";
import EmailClient1 from "assets/img/gmail.png";
import EmailClient2 from "assets/img/othersEmail.png";

export default function Message() {
  return (
    <div>
      <img src={EmailClient1} alt="" />
      <img src={EmailClient2} alt="" />
    </div>
  );
}
