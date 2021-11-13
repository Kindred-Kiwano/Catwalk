import React from 'react';

import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from './UserContext.jsx';
import {getReviewsMeta} from '../../../../Shared/makeRequest.js';



import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';


let imgSrc = 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Card = (props) => {
  // console.log(props, 'card props')
  let { product, label, click, update } = props;
  let { setUserOutfit, userOutfit} = React.useContext(UserContext);

  const addProductToOutfit = (product) => {
    setUserOutfit(userOutfit = [product, ...userOutfit])
  };

  let { img, images, name, price, sale, thumbnails, description, slogan, category, id } = product;

  return (
    <div className={`card ${label}`}
      aria-description={description}
      title={slogan} >
      <header className='card'>
        <CardButton buttonText={'★'} click={() => addProductToOutfit(product)} id={id}/>
        {
          img ?
            <CardImage img={img} click={update} id={id}/>
            :
            <img src='assets/loading.gif' />
        }
      </header>
      <CardInfo product={product} {...update}/>
    </div>
  );
};

export default Card;

