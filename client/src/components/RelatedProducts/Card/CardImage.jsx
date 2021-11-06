import React from 'react';
// class CardImage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       images: props.images,
//       image: props.img || this.state.images[0]
//     }
//   }

//   render() {
//     let {img} = props;
//     return(
//       <>
//         {
//         img ?
//         <img src={props.img}
//           role='img'
//           title={props.description}
//           onClick={() => props.click(props.id)}
//         /> : null
//         }
//       </>
//     )
//   }
// }

const CardImage = (props) => {
  let {images, img} = props;
  if (images) {
    console.log(images.length)
  }

  return (
    <>
      {
        props.img ?
          <img src={img}
            role='img'
            title={props.description}
            onClick={props.click}
          />
          : <img src={'assets/loading.gif'} />
      }
    </>
  );
};


export default CardImage;
