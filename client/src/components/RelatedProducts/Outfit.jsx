import axios from '../../../../config/config.js';

const Outfit = {};

Outfit.state = [];

Outfit.add = (id) => {
  let outfit = Outfit.retrieve() || Outfit.state;
  outfit.push(id);
  Outfit.state = outfit;
  Outfit.save();
  // this.setState({
  //   outfit: [...this.state.outfit, id]
  // });
};

Outfit.save = () => {
  localStorage.setItem('outfit', JSON.stringify(Outfit.state));
};

Outfit.remove = (id) => {
  let outfit = Outfit.retrieve().filter(fit => fit !== id);
  Outfit.state = outfit;
  // this.setState({
  //   outfit: outfit
  // });
  localStorage.removeItem('outfit');
  outfit.length ? Outfit.save() : Outfit.reset();
};

Outfit.reset = () => { localStorage.removeItem('outfit'); };

Outfit.retrieve = () => {
  return JSON.parse(localStorage.getItem('outfit'));
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