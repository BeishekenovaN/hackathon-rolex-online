import React, { useState } from 'react';
import './Payment.css'

function Payment() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    return (
        <div style={{paddingTop: '100px', display: 'flex'}}>
            <div className="credit-card-wrap">
  <div className="mk-icon-world-map"></div>
  <div className="credit-card-inner">
    <header className="header">
      <div className="credit-logo">
        <div className="shape"><span className="txt">PB</span></div> <span className="text">Public Bank of ROLEX</span>
      </div>
    </header>
    <div className="mk-icon-sim"></div>
    <div className="credit-foNant credit-card-number" data-text="4716">{number}</div>
    <footer className="footer">
      <div className="clearfix">
        <div className="pull-left">
          <div className="credit-card-date"><span className="title">Expires End</span><span className="credit-font">{expiry}</span></div>
          <div className="credit-font credit-author">{name}</div>
        </div>
        <div className="pull-right"><div className="mk-icon-visa"></div></div>
      </div>
    </footer>
  </div>
</div>

            {/* <Cards className="cards"
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            /> */}
            <form>
                <input type='tel' 
                name='number' 
                placeholder='Card Number' 
                value={number} 
                onChange={e => setNumber(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type='text' 
                name='name' 
                placeholder='Name' 
                value={name} 
                onChange={e => setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type='text' 
                name='expiry' 
                placeholder='MM/YY Expiry' 
                value={expiry} 
                onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type='tel' 
                name='cvc' 
                placeholder='CVC' 
                value={cvc} 
                onChange={e => setCvc(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
            </form> 
             
            
        </div>
    );
};

export default Payment;