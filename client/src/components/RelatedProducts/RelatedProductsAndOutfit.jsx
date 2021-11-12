
import React from 'react';
import Related from './Related.jsx';
import Carousel from './Carousel.jsx';
import Card from './Card.jsx';
import Wrapper from './Wrapper.jsx';
import UserContext from './UserContext.jsx';
import Modal from './Modal/Modal.jsx';
import Products from '../../../../fakeData/product.js';
let { info, styles } = Products;


const App = () => {

  let [currentProduct, setCurrentProduct] = React.useState(61590);
  let [relatedProducts, setRelatedProducts] = React.useState(info);
  let [userOutfit, setUserOutfit] = React.useState([]);
  let [modal, setModal] = React.useState(false);

  var carouselMethods = {
    outfit: {
      click: (product) => setUserOutfit(userOutfit.filter(prod => prod.id !== product.id))
    },
    related: {
      click: () => setModal(modal = !modal)
    },
    addToOutfit: {
      click: (product) => {
        setUserOutfit([...userOutfit, product]);
      }
    }
  };
  console.log;

  let RelatedProductsCarousel = Wrapper(Carousel, relatedProducts, {method: carouselMethods, label: 'related', title: 'Related Products', list: info});

  let UserOutfitCarousel = Wrapper(Carousel, userOutfit, {method: carouselMethods, label: 'outfit', title: 'Create Your Outfit', list: info});

  let ComparisonModal = Wrapper(Modal, modal, {toggle: setModal});

  let initialState = {
    currentProduct,
    setCurrentProduct,
    userOutfit,
    setUserOutfit,
    relatedProducts,
    setRelatedProducts,
  };

  return (
    <UserContext.Provider value={ initialState }>
      <div id='related'>
        <ComparisonModal />
        <RelatedProductsCarousel />
        <UserOutfitCarousel />
      </div>
    </UserContext.Provider>
  );
};

export default App;
