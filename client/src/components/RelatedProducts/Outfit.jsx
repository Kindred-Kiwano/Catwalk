import axios from '../../../../config/config.js';
import './styles/style.css';



export const UserContext = React.createContext();


export const UserContextProvider = (children) => {

  var [outfit, setOutfit] = React.useState([]);

  var initialState = {
    outfit: outfit,
    currentProduct: null
  };


  return (
    <UserContext.Provider value={ initialState, setOutfit }>
      {children}
    </UserContext.Provider>
  );
};