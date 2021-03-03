import React from 'react';
import PropTypes from 'prop-types';
// react-feather : icônes sous forme de composants React
import { Send } from 'react-feather';

import './form.scss';

/*
Mise en place d'un champ contrôlé :
x mettre en place un emplacement dans le state pour stocker la valeur de l'input
x contrôle en lecture, l'input lit la valeur du state et l'affiche => mise en
place d'un container et utilisation de mapStateToProps pour transmettre la valeur.
A ce stade, on ne peut pas saisir de caractères dans l'input, et un warning
"You provided a `value` prop to a form field without an `onChange` handler" est
normal, il disparaitra à l'étape suivante.
Pour vérifier : changer temporairement la valeur dans le state => l'input doit
afficher cette valeur
- contrôle en écriture => sur l'événement 'change', l'input demande une modification
de la valeur dans le state
*/

const Form = ({ value, setValue, manageSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
    >
    <input
      className="form-input"
      type="text"
      placeholder="Saisissez un message"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
    <button className="form-submit" type="submit">
      <Send size={46} />
    </button>
  </form>)
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur
  setValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default Form;
