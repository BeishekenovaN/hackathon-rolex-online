import { useState, useRef, useEffect } from "react";
import Cards from 'react-credit-cards'
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import './Payment.css'

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <div className="cards">
      <div style={{paddingTop: '200px', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form style={{paddingTop: '20px'}}>
          <input
            type="tel"
            name="number"
            maxLength="16"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />
          <input
            type="tel"
            maxLength="4"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            maxLength="4"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
        <Link to='/'>
          <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
