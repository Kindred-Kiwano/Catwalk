const retrieve = () => {
  return JSON.parse(localStorage.getItem('outfit')) || [];
};

const save = (id) => {
  let outfit = retrieve();
  localStorage.setItem('outfit', JSON.stringify([id, ...outfit]));
};

export {save, retrieve};