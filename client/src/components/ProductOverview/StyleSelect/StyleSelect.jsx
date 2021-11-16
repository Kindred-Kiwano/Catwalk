import React from 'react';
import Images from './Images/Images.jsx';
import Price from './Price.jsx';
import Thumbnails from './Thumbnails.jsx';
import CartOptions from './CartOptions.jsx';
import { FakeProduct, Style, ExpandedView } from '../ProductOverview.jsx';
import decorate from '../methods/decorate.js';

export var ImagesOfSelectedStyle = React.createContext();
export var CurrentlySelectedImage = React.createContext();

var StyleSelect = () => {

  var [product, updateProduct] = React.useContext(FakeProduct);
  var [style, updateStyle] = React.useContext(Style);
  var [expand, updateExpand] = React.useContext(ExpandedView);

  var photosArray = decorate.addIndexRefs(style.photos);
  var [imageGallery, updateImageGallery] = React.useState(photosArray);

  React.useEffect(() => {
    updateImageGallery(photosArray);
  }, [JSON.stringify(photosArray)]);

  var [selected, updateSelected] = React.useState(imageGallery[0]);

  React.useEffect(() => {
    updateSelected(imageGallery[selected.index]);
  }, [JSON.stringify(imageGallery)]);

  React.useEffect(() => {
    updateSelected(imageGallery[0]);
  }, [product.info.id]);

  var proportions = expand ? '100% 0%' : '65% 35%';

  return (
    <div id="images-and-styles" style={{'gridTemplateColumns': proportions}}>
      <ImagesOfSelectedStyle.Provider value={[imageGallery, updateImageGallery]}>
        <CurrentlySelectedImage.Provider value={[selected, updateSelected]}>
          <Images />
          { expand ? <></> :
            <div id="style-select">
              <div id="style-price">
                <Price />
              </div>
              <Thumbnails />
              <hr></hr>
              <CartOptions />
            </div>
          }
        </CurrentlySelectedImage.Provider>
      </ImagesOfSelectedStyle.Provider>
    </div>
  );
};

export default StyleSelect;
