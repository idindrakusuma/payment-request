import React from "react";

import PaymentButton from "./components/PaymentButton";

function App() {
  return (
    <div className="App">
      <h1>Web Payments API</h1>
      <p>
        Web Payments is an emerging web standard being developed by the W3C to
        simplify online payments and enable a broader set of players to
        participate easily in the payments ecosystem on the web.
      </p>
      <p>
        The standards are flexible; they work with various types of payment
        systems and are intended to work on any browser on any device, payment
        method, or payment service provider. This flexibility enables
        development simplicity, deployment consistency, and future
        compatibility with emerging payment technologies.
      </p>
      <p>
        For more Information
        <a
          className="elipsis"
          href="https://developers.google.com/web/fundamentals/payments/"
        >
          https://developers.google.com/web/fundamentals/payments/
        </a>
      </p>
      <PaymentButton />
    </div>
  );
}

export default App;