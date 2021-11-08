import React, {useState, useContext} from 'react';
import Carousel from './RelatedProducts/Carousel.jsx';
import Related from './RelatedProducts/Related.jsx';
import Wrapper from './RelatedProducts/Wrapper.jsx';
import UserContext from './RelatedProducts/UserContext.jsx';
import Modal from './RelatedProducts/Modal/Modal.jsx';
import { products, styles } from './RelatedProducts/Data.js';

const Carousels = () => {


  let [currentProduct, setCurrentProduct] = useState(61590);
  let [relatedProducts, setRelatedProducts] = useState(products);
  // let [userOutfit, setUserOutfit] = useState(products);
  let [userOutfit, setUserOutfit] = useState([products[0]]);
  let [modal, setModal] = useState(false);

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
    },
    update: (id) => setCurrentProduct(id)
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
        <Related />
        <ComparisonModal />
        <RelatedProductsCarousel />
        <UserOutfitCarousel />
      </>
    </UserContext.Provider>
  );
};

export default Carousels;

