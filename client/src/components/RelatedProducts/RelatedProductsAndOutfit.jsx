
import React, { useEffect, useState, useContext } from 'react';
// import Related from './Related.jsx';
import Carousel from './Carousel.jsx';
// import Card from './Card.jsx';
import Wrapper from './Wrapper.jsx';
import UserContext from './UserContext.jsx';
import Modal from './Modal/Modal.jsx';
import Products from '../../../../fakeData/product.js';
import { fakeProductList } from './data.js'
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';
import { retrieveLocalOutfit, saveLocalOutfit } from './utils/methods.js';
// import cors from 'cors';

import axios from 'axios';

const productEndpoint = axios.create({baseURL: 'http://localhost:3000/products', headers: {'Access-Control-Allow-Origin': true}})


const RelatedProductsAndOutfit = () => {


  let [currentProduct, setCurrentProduct] = useState(fakeProductList[0]); //not using this
  let [currentProductId, setCurrentProductId] = useState(61594)
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [userOutfit, setUserOutfit] = useState(retrieveLocalOutfit());
  let [modal, setModal] = useState(false);

  useEffect(() => {
    productEndpoint.get(`/related/all/${currentProductId}`)
      .then(results => setRelatedProducts(results.data))
      .catch(() => setRelatedProducts(fakeProductList))
  }, []);

  // Fix second argument

  
  let toggle = () => setModal(modal = !modal);

  var methods = {
    outfit: {
      click: (product) => setUserOutfit(userOutfit.filter(prod => prod.id !== product.id))
    },
    related: {
      click: toggle
    },
    addToOutfit: {
      click: (product) => {
        setUserOutfit([...userOutfit, product]);
      }
    }
  };

  let RelatedProductsCarousel = Wrapper(Carousel, relatedProducts, { method: methods, label: 'related', title: 'Related Products', list: relatedProducts, utils: relatedProps });

  let UserOutfitCarousel = Wrapper(Carousel, userOutfit, { method: methods, label: 'outfit', title: 'Create Your Outfit', list: userOutfit, utils: outfitProps });

  let ComparisonModal = Wrapper(Modal, modal, { toggle: toggle });

  let initialState = {
    currentProduct,
    setCurrentProduct,
    currentProductId,
    setCurrentProductId,
    userOutfit,
    setUserOutfit,
    relatedProducts,
    setRelatedProducts,
    modal,
    setModal
  };

  return (
    <UserContext.Provider value={initialState}>
      <div id='related'>
        <ComparisonModal />
        <RelatedProductsCarousel />
        <UserOutfitCarousel />
      </div>
    </UserContext.Provider>
  );
};

export default RelatedProductsAndOutfit;