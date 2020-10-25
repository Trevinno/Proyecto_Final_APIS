import React, { Component } from 'react';
import "../css/billing.css"

const BuyItem = () => {
    return (  
        <React.Fragment>
        <section className="wrap">
            <section>
                <section className="wrap">
                <h1>Self-Responsive Order Form</h1>
                <h2>With Responsive Styles Powered by Element Queries</h2>
                <h2>Default Theme</h2>
                <form>
                <h3>Billing Information</h3>
                <fieldset id="billingAddress">
                <input type="text" name="cc_first_name" id="firstName" placeholder="First Name" autocorrect="off" />
                <input type="text" name="cc_last_name" id="lastName" placeholder="Last Name" autocorrect="off" />
                <input type="text" name="cc_street1" id="address" class="three-quarters" placeholder="Street" autocorrect="off" />
                <input type="text" name="cc_street2" id="address2" class="quarter" placeholder="Apt/Suite" autocorrect="off" /> 
                <input type="text" name="cc_city" id="city" placeholder="City" autocorrect="off" />
                <input type="text" name="cc_state" id="region" placeholder="State/Provinc" autocorrect="off" />
                <input type="text" name="cc_postal_code" id="postal" placeholder="Zip Code" autocorrect="off" />
                <select name="cc_country" id="country" x-autocompletetype="country">
        
                </select>
                </fieldset>
                <h3 className="lockit">Credit Card Information</h3>
                <fieldset id="cardInfo">
                <input type="tel" min="1" name="cc_number" id="cc-number" placeholder="Card Number" autocorrect="off" />
                <div className="split-input">
                <select nameName="cc_card_type" id="cardType" class="three-quarters" />
                <input type="tel" name="cvv" id="cc-csc" min="1" placeholder="CVV" autocorrect="off" class="quarter" />
                </div>
                <select name="cc_exp_month" id="expMonth">
                </select>
                <select id="expYear" name="cc_exp_year">
            
                </select>
                </fieldset>
                    <button>Complete My Order!</button>
                </form>
                </section>
            </section>
        </section>

        </React.Fragment>
    );
}
 
export default BuyItem;