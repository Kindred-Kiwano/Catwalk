export const retrieveLocalOutfit = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

export const saveLocalOutfit = (id) => {
  let outfit = retrieveLocalOutfit();
  localStorage.setItem('outfit', JSON.stringify([id, ...outfit]));
};

export const templatePrices = ({ price, sale }) => {
  price = { price, className: 'price' };

  let Prices = createElement('span', { price });

  if (sale) {
    let Sale = createElement('span', { sale, className: 'price sale' });

    Prices = createElement(
      'span',
      { price, className: 'price original' },
      <Sale />
    );
  }

  return Prices;
};


