import React from "react";

const Brokerage = () => {
  return (
    <div className="container py-5 border-top">
      <div className="row">
        <div className="col-12 col-lg-8 p-4">
          <a
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            className="text-decoration-none"
          >
            <h4 className="text-center text-lg-start">Brokerage calculator</h4>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
              className="text-muted"
            >
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </a>
        </div>
        <div className="col-12 col-lg-4 p-4 text-center text-lg-start">
          <a href="" className="text-decoration-none">
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
