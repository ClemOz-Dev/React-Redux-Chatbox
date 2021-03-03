// == Import npm
import React from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import CustomButton from 'src/containers/CustomButton';
import Settings from 'src/containers/Settings';

import './styles.scss';

// == Composant
const Chat = () => (
  <div className="chat">
    <CustomButton />  
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chat;
