import { connect } from 'react-redux';

import { setEmail, setPassword, setUser } from 'src/actions/chat';
// on importe le composant de présentation
import Settings from 'src/components/Settings';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  showMenu: state.showMenu,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  setEmailValue: (newValue) => {
    const action = setEmail(newValue);
    dispatch(action);
  },
  setPasswordValue: (newValue) => {
    const action = setPassword(newValue);
    dispatch(action);
  },
  manageSubmit: () => {
    console.log('submit dans le container');   
    const action = setUser();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
