
import React, { useState } from "react";
import Cards from 'react-credit-cards-2';
// import "react-credit-cards-2/es/styles-compiled.css";
import 'react-credit-cards-2/dist/es/styles-compiled.css';




import "./stylecopm.css";
let inidata = {
  cvc: "",
  expiry: "",
  name: "",
  focus: "",
  number: "",
  issuer: "",
};

const Card = () => {
  const [data, setdata] = useState(inidata);
  const [flipped, setFlipped] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "number") {
      const numericValue = value.replace(/\D/g, "");
      setdata({ ...data, [name]: numericValue });
    } else {
      setdata({ ...data, [name]: value });
    }
  }

  function handleFocus(e) {
    if (e.target.name === "cvc") {
      setFlipped(true);
    }
    setdata({ ...data, focus: e.target.name });
  }

  function handleBlur() {
    setFlipped(false);
    setdata({ ...data, focus: "" });
  }

  const handleCallback = (isValid) => {
    if (isValid) {
      setdata({ ...data, issuer: isValid });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "500px",
        width: "80%",
        margin: "auto",
        background: "linear-gradient(25deg, #FFC0CB, #FF69B4)",
      }}
    >
      <div>
        < Cards
          cvc={Number(data.cvc)}
          expiry={data.expiry}
          focused={data.focus}
          name={data.name}
          number={data.number}
          callback={handleCallback}
          flipped={flipped}
         
        />
      </div>

      <div className="inputBox">
        <h3>Payment Details</h3>
        <input
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="expiry"
          placeholder="Enter expiry"
          type="text"
          onChange={handleChange}
          maxLength={4}
        />
        <input
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="number"
          placeholder="Enter CardNumber"
          type="tel"
          onChange={handleChange}
          value={data.number}
          maxLength={16}
        />
        <input
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="cvc"
          placeholder="Enter CVC"
          type="text"
          onChange={handleChange}
          maxLength={3}
        />
      </div>
    </div>
  );
};

export default Card;
