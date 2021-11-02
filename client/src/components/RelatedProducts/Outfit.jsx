import axios from '../../../../config/config.js';
import './styles/style.css';

const Outfit = {};

Outfit.add = (id) => {
  this.setState({
    outfit: [...this.state.outfit, id]
  });
  Outfit.save();
};

Outfit.save = () => {
  localStorage.setItem('outfit', JSON.stringify(this.state.outfit));
};

Outfit.delete = (id) => {
  var outfit = this.state.outfit.filter(fit => fit !== id);
  this.setState({
    outfit: outfit
  });
  localStorage.removeItem('outfit');
  outfit.length && Outfit.save();
};


export default Outfit;



// export const UserContext = React.createContext();


// export const UserContextProvider = (children) => {

//   var [outfit, setOutfit] = React.useState([]);

//   var initialState = {
//     outfit: outfit,
//     currentProduct: null
//   };


//   return (
//     <UserContext.Provider value={ initialState, setOutfit }>
//       {children}
//     </UserContext.Provider>
//   );
// };