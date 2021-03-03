import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({ showMenu, passwordValue, setPasswordValue, emailValue, setEmailValue, manageSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <span>
      {showMenu ?
        <form
          className="settings"
          onSubmit={handleSubmit}
        >
          <input
            className="settings-input"
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={(event) => {
              setEmailValue(event.target.value);
            }}
          />
          <input
            className="settings-input"
            type="password"
            placeholder="Mot de passe"
            value={passwordValue}
            onChange={(event) => {
              setPasswordValue(event.target.value);
            }}
          />
          <button className="settings-submit" type="submit">
            Envoyer
    </button>
        </form> :
        ''}
    </span>
  )
};

Settings.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  // paramètre : nouvelle valeur
  setPasswordValue: PropTypes.func.isRequired,
  setEmailValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};


export default Settings;
