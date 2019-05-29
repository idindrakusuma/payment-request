import React, { Fragment, useEffect, useState } from "react";
import canUseDOM from "can-use-dom";

import {
  methodData,
  paymentInvoices,
  paymentOptions
} from "../mocks/config-payments";

function PaymentButton(props) {
  const [isSupportWebPayment, setSupportWebPayment] = useState(true);

  useEffect(() => {
    if (window.PaymentRequest) {
      console.log("[Browser Supported for Web Payment]...");
      setSupportWebPayment(true);
    } else {
      console.log("[Browser Unsuported for Web Payment]...");
      setSupportWebPayment(false);
    }
  }, []);

  const payNow = () => {
    if (canUseDOM) {
      if (window.PaymentRequest) {
        const request = new PaymentRequest(
          methodData,
          paymentInvoices,
          paymentOptions
        );

        request
          .show()
          .then(res => {
            res.complete("success");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("[Unsupported] Please do traditional payment");
      }
    }
  };

  if (!isSupportWebPayment) {
    return (
      <span className="not-support-webpayment">
        Your browser not supported Web Request Payment
      </span>
    );
  }

  return (
    <Fragment>
      <button className="btn" onClick={payNow}>
        Web Payment Demo
      </button>
    </Fragment>
  );
}

export default PaymentButton;
