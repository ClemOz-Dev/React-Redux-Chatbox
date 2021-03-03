import {
  UPDATE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_MENU,
  SET_PASSWORD,
  SET_EMAIL,
  SET_USER,
} from 'src/actions/chat';

const initialState = {
  // messages à afficher
  messages: [{
    id: 1,
    username: 'Super Chat',
    content: 'Salut ça va ?',
  },
  {
    id: 2,
    username: 'Super Chat',
    content: 'T\'as pas des super croquettes ?',
  },
  {
    id: 3,
    username: 'Super Chat',
    content: 'Stp',
  },
  ],
  // contenu de l'input pour saisir un message
  inputMessage: '',
  // menu ouvert ou non
  showMenu: false,
  // input email
  inputEmail: '',
  //input password
  inputPassword: '',
  // tableau des utilisateurs
  users: [{
    id: 1,
    username: 'Super Chat',
    email: 'superchat@oclock.io',
    password: 'miaou',
  },
  {
    id: 2,
    username: 'Super Chien',
    email: 'superchien@oclock.io',
    password: 'waouf',
  },
  ],
  currentUser: [],
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      // on retourne un nouveau state
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        inputMessage: action.value,
      };

    case ADD_MESSAGE: {
      // on prépare le nouveau message
      const maxId = state.messages.reduce(
        (max, message) => (message.id > max ? message.id : max),
        state.messages[0].id
      );
      const newMessage = {
        id: maxId + 1,
        username: state.currentUser[0].username,
        content: state.inputMessage,
      }
      // on récupère tout les messages dans un nouveau tableau.
      // on y ajoute le nouveau message, le tout est retourné dans "messages"
      const updatedMessages = [...state.messages, newMessage];
      return {
        ...state,
        messages: updatedMessages,
        inputMessage: '',
      }
    };
    case TOGGLE_MENU: {
      return {
        ...state,
        showMenu: !state.showMenu,
      }
    };
    case SET_PASSWORD:
    
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        inputPassword: action.value,
      };
    case SET_EMAIL:
      
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        inputEmail: action.value,
      };
    case SET_USER:
      for (let user of state.users) {
        if (user.email === state.inputEmail && user.password === state.inputPassword) {          
          // "Object.assign"
          state.currentUser.push(user);
        };
        console.log('nope');
      }
      console.log(state.currentUser);
      return {
        // en déversant les informations du state actuel
        ...state,
        inputEmail: '',
        inputPassword: '',
        // définir un utilisateur
      };
    default:
      return state;
  }
}

export default chatReducer;
