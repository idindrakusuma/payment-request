import React, { Fragment, useEffect, useState } from "react";
import canUseDOM from "can-use-dom";

function PaymentButton(props) {
  const [isSupportWebPayment, setSupportWebPayment] = useState(true);

  useEffect(() => {
    if (window.PaymentRequest) {
      console.log('[Browser Supported for Web Payment]...');
      setSupportWebPayment(true);
    } else {
      console.log("[Browser Unsuported for Web Payment]...");
      setSupportWebPayment(false);
    }
  }, []);

  const payNow = () => {
    if (canUseDOM) {
      if (window.PaymentRequest) {
        const supportedPaymentMethods = [
          {
            supportedMethods: "basic-card",
            data: {
              supportedNetworks: ["visa", "mastercard", "amex"]
            }
          }
        ];
        const paymentDetails = {
          displayItems: [
            {
              label: "Anvil L/S Crew Neck - Grey M x1",
              amount: { currency: "USD", value: "22.15" }
            }
          ],
          total: {
            label: "Total due",
            amount: { currency: "USD", value: "22.15" }
          }
        };

        const options = {
          requestShipping: true,
          requestPayerEmail: true,
          requestPayerPhone: true,
          requestPayerName: true,
          shippingType: "delivery"
        };

        // PaymentRequest Constructor
        const request = new PaymentRequest(
          supportedPaymentMethods,
          paymentDetails,
          options
        );

        request
          .show()
          .then(res => {
            console.log("[PaymentRequest] ", res);
            res.complete("success");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("[Unsupported] Browser not Support Payment Request..");
        console.log("[Unsupported] Please do traditional payment");
      }
    } else {
      console.log("Cannot use DOM");
    }
  };

  if (!isSupportWebPayment) {
    return (
      <span className="not-support-webpayment">Your browser not supported Web Request Payment</span>
    )
  }

  return (
    <Fragment>
      <button className="btn" onClick={payNow}> Web Payment Demo </button>
    </Fragment>
  );
}

export default PaymentButton;
