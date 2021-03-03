import { connect } from 'react-redux';

import { toggleMenu } from 'src/actions/chat';

// on importe le composant de présentation
import CustomButton from 'src/components/CustomButton';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.inputMessage,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
   
  handleToggler: () => {
    console.log('click toggler');
    const action = toggleMenu();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
