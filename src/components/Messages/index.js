import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import './messages.scss';

const Messages = ({ messages }) => {
  console.log('rendu de Messages');

  // référence : si on a besoin de manipuler à un élément du DOM, en React on ne
  // fait pas getElementById ou querySelector => conflits avec le DOM virtuel
  const refMessagesContainer = useRef(null);

  // application d'un effet chaque fois que Messages est rendu (chaque fois que
  // la prop messages change de valeur)
  useEffect(() => {
    // on scrolle sur le conteneur des messages pour afficher le bas du conteneur

    // scrollTo : permet de scroller vers des coordonnées
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
    refMessagesContainer.current.scrollTo({
      // scrollHeight : hauteur d'un élément, y compris la partie non visible si
      // overflow
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      // scroll progressif
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="messages" ref={refMessagesContainer}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
