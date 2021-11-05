import React from 'react';
// import Related from './RelatedProducts/Related.jsx';
import Carousel from './RelatedProducts/Carousel.jsx';
import {outfit, related} from './RelatedProducts/Outfit.jsx';
import Wrapper from './RelatedProducts/Wrapper.jsx';
import UserContext from './RelatedProducts/UserContext.jsx';
import Modal from './RelatedProducts/Modal/Modal.jsx';
import { products, styles } from './RelatedProducts/Data.js';

let { getRelatedIds, getFeatures, getStyles, populateAsync, modal, getData, updateModalFeatures, updateRelatedProducts } = related;

const Carousels = () => {


  let [currentProduct, setCurrentProduct] = React.useState(61590);
  let [relatedProducts, setRelatedProducts] = React.useState(products);
  // let [userOutfit, setUserOutfit] = React.useState(products);
  let [userOutfit, setUserOutfit] = React.useState([]);
  let [modal, setModal] = React.useState(false);

  var methods = {
    outfit: {
      click: (product) => setUserOutfit(userOutfit.filter(prod => prod.id !== product.id))
    },
    related: {
      click: () => setModal(modal = !modal)
    },
    addToOutfit: {
      click: () => {
        console.log('hello');
        setUserOutfit([...userOutfit, products[0]]);
      }
    }
  };

  let RelatedProductsCarousel = Wrapper(Carousel, relatedProducts, {method: methods, label: 'related', title: 'Related Products'});

  let UserOutfitCarousel = Wrapper(Carousel, userOutfit, {method: methods, label: 'outfit', title: 'Create Your Outfit'});

  let ComparisonModal = Wrapper(Modal, modal, {toggle: setModal});

  let initialState = {
    currentProduct,
    setCurrentProduct,
    userOutfit,
    setUserOutfit,
    relatedProducts,
    setRelatedProducts
  };

  return (
    <UserContext.Provider value={ initialState }>
      <>
        <ComparisonModal />
        <RelatedProductsCarousel />
        <UserOutfitCarousel />
      </>
    </UserContext.Provider>
  );
};

export default Carousels;

