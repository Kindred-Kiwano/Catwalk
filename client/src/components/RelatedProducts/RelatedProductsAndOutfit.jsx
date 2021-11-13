
import React, { useEffect, useState, useContext } from 'react';
import Carousel from './Carousel.jsx';
import Wrapper from './Wrapper.jsx';
import UserContext from './UserContext.jsx';
import Modal from './Modal/Modal.jsx';
import Products from '../../../../fakeData/product.js';
import { fakeProductList } from './data.js'
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';
import { retrieveLocalOutfit, saveLocalOutfit } from './utils/methods.js';

import axios from 'axios';

const productEndpoint = axios.create({ baseURL: 'http://localhost:3000/products', headers: { 'Access-Control-Allow-Origin': true } })

const RelatedProductsAndOutfit = (props) => {

  let { updateGlobalId, productId } = props;
  let [currentProductId, setCurrentProductId] = useState(props.productId);
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [userOutfitIds, setUserOutfitIds] = useState(retrieveLocalOutfit());
  let [userOutfit, setUserOutfit] = useState([]);
  let [modal, setModal] = useState(false);

  useEffect(productId => {
    setCurrentProductId(props.productId)
    productEndpoint.get(`/related/all/${productId}`)
      .then(results => setRelatedProducts(results.data))
      .then(console.log)
      .catch(() => setRelatedProducts(fakeProductList));
  }, [currentProductId]); //getting debounced by API

  let updateOutfit = (product) => {
    setUserOutfit([...userOutfit, product])
    setUserOutfitIds([...userOutfitIds, product.id])
  }

  if (userOutfitIds.length) {
    useEffect(userOutfitIds.map(id => {
      productEndpoint.get(`/all/${id}`)
        .then(results => updateOutfit(resuts.data))
    }), [currentProductId]);
  }


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
        setUserOutfit([...userOutfit, product.id]);
        saveLocalOutfit(userOutfit.map(product => product.id)) //not being used
      }
    }
  };

  let RelatedProductsCarousel = Wrapper(Carousel, relatedProducts, { method: methods, label: 'related', title: 'Related Products', list: relatedProducts, utils: relatedProps, update: updateGlobalId });

  let UserOutfitCarousel = Wrapper(Carousel, userOutfit, { method: methods, label: 'outfit', title: 'Create Your Outfit', list: userOutfit, utils: outfitProps, update: updateGlobalId });

  let ComparisonModal = Wrapper(Modal, modal, { toggle: toggle });

  let initialState = {
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