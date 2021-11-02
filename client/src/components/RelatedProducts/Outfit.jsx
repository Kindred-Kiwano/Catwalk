import axios from '../../../../config/config.js';

const Outfit = {};

Outfit.state = [];

Outfit.add = (id) => {
  Outfit.state.push(id)
  Outfit.save(id);
  // this.setState({
  //   outfit: [...this.state.outfit, id]
  // });
};

Outfit.save = (id) => {
  localStorage.setItem('outfit', JSON.stringify(Outfit.state));
};

Outfit.remove = (id) => {
  var outfit = this.state.outfit.filter(fit => fit !== id);
  this.setState({
    outfit: outfit
  });
  localStorage.removeItem('outfit');
  outfit.length && Outfit.save();
};

Outfit.retrieve = () => {

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