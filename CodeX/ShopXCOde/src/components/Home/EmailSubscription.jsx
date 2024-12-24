import React from 'react';
import './EmailSubscription.css';

const EmailSubscription = () => {
    return (
        <div className="email-subscription">

            <h1>Sign Up Hurry For Future Updates!!!</h1>

            <div className="email-input-container">
                <span className="email-label">Get Email Updates:</span>
                <label className="email-input-label">
                    <span className="input-title">Email</span>
                    <input
                        type="text"
                        name="email-module-input"
                        placeholder="Email Address"
                        maxLength="256"
                        autoComplete="off"
                        aria-invalid="false"
                    />
                </label>
                <button className="sign-up-button">Sign up</button>
            </div>
        </div>
    );
};

export default EmailSubscription;