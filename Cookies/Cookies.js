import React from 'react';
import CookieConsent from 'react-cookie-consent';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to My Website</h1>
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default App;
