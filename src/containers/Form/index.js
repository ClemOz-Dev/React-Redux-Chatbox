import { connect } from 'react-redux';

import { updateInputMessage, addMessage } from 'src/actions/chat';

// on importe le composant de présentation
import Form from 'src/components/Form';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.inputMessage,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (newValue) => {
    // console.log(`container de Form, newValue=${newValue}`);
    // on dispatch une action qui modifiera la valeur de inputMessage dans le state
    const action = updateInputMessage(newValue);
    dispatch(action);
  },
  manageSubmit: () => {
    console.log('submit dans le container');
    // on dispatch une action qui va ajouter le contenu de l'input dans un nouveau
    // message
    const action = addMessage();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Form);

/*
const ConnectedForm = () => (
  --- interactions avec le store
  --- construire le composant Forme en injectant des valeurs pour les props concernées
  return (
    <Form
      value={state.inputMessage}
      setValue={(newValue) => {
        console.log('xxxx');
      }}
    />
  )
)
*/
