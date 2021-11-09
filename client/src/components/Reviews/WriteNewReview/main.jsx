import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import Characteristics from './Characteristics.jsx';
import productChar from './productChar.js';
import CharList from './CharList.jsx';
import '../styles/style.css';


// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// const axios = require('axios').default;

const AddReview = () => {

  const [formData, setFormData] = useState({
    overallRating: '',
    recommendProduct: '',
    size: '',
    width: '',
    comfort: '',
    quality: '',
    length: '',
    fit: '',
    reviewSummary: '',
    reviewBody: '',
    nickname: '',
    email: ''
  });

  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    });
    console.log(formData);
  }

  const validate = formData => {
    const { overallRating, recommendProduct, size, width, comfort, quality, length, fit, reviewSummary, reviewBody, nickname, email } = formData;
    const errors = {};

    if (!reviewSummary) errors.reviewSummary = "Please fill out Review Summary";
    if (!reviewBody) errors.reviewBody = "Please fill out review body.";
    if (!nickname) errors.nickname = "Please fill out nickname.";
    if (!email) errors.email = "Please fill out email.";
    return errors;
  }

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0])
  }

  // axios.post('http://localhost:3000/api/groceries', {
  //       product_id: props.productId,
  //       rating: Number(formData.overallRating),
  //       summary: formData.reviewSummary,
  //       body: formData.reviewBody,
  //       recommend: formData.recommendProduct,
  //       name: formData.nickname,
  //       email: formData.email,
  //       photos: [],
  //       characteristics: {
  //         Size: {
  //           id: 14,
  //           value: formData.size
  //         },
  //         Width: {
  //           id: 15,
  //           value: formData.width
  //         },
  //         Comfort: {
  //           id: 16,
  //           value: formData.comfort
  //         },
  //         Quality: {
  //           id: 17,
  //           value: formData.quality
  //         },
  //         Length: {
  //           id: 18,
  //           value: formData.length
  //         },
  //         Fit: {
  //           id: 19,
  //           value: formData.fit
  //         }
  //       }
  //     })
  //     .then((response) => {
  //       console.log('Axios Post.');
  //       console.log(response)
  //       this.props.summonGet();
  //     })
  //     .catch((error) => {
  //       console.log('ERROR: on Axios Post.')
  //       console.log(error);
  //     });

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    if(Object.keys(errors).length === 0) {
      console.log('Form is now submitted...HTTP call to server.');
      console.log(formData);
      setFormData({
        overallRating: '',
        recommendProduct: '',
        size: '',
        width: '',
        comfort: '',
        quality: '',
        length: '',
        fit: '',
        reviewSummary: '',
        reviewBody: '',
        nickname: '',
        email: ''
      });
      setFeedback('Thanks for your review!');
    }
  }

  return (
    <div className="new-review">
      <form className="new-review-form" onSubmit={handleFormSubmission}>
        {Object.values(errors).map(error => (
          <h6 key={error}>{error}</h6>
        ))}
        <h1>Write A Review!</h1>

        <h2 className="center deep-purple-text">{feedback}</h2>

        <fieldset>
          <legend>Overall Rating</legend>
          <div className="field">
            <StarRating handleChange={handleChange} />
          </div>
          <div className="field">
          <p>Would you recommend this product to others?</p>
            <label>
              <input
              type="radio"
              name="recommendProduct"
              value={true}
              onChange={handleChange}
              checked={formData.recommendProduct === 'true'}
              />
              <span>Yes</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="recommendProduct"
              value={false}
              onChange={handleChange}
              checked={formData.recommendProduct === 'false'}
              />
              <span>No</span>
            </label>
          </div>
        </fieldset>
        <div>
          <CharList handleChange={handleChange} char={productChar} />
        </div>
        <fieldset>
          <legend>Review Message</legend>
          <div className="field">
            <label htmlFor="reviewSummary">Review Summary</label>
            <textarea
              name="reviewSummary"
              id="reviewSummary"
              className="materialize-textarea"
              value={formData.reviewSummary}
              placeholder="Example: Best purchase ever!"
              onChange={handleChange}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="reviewBody">Review Summary</label>
            <textarea
              name="reviewBody"
              id="reviewBody"
              className="materialize-textarea"
              value={formData.reviewBody}
              placeholder="Why did you like the product or not?"
              onChange={handleChange}>
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>Your Info</legend>
          <div className="field">
            <label htmlFor="nickname">What is your Nickname?</label>
            <textarea
              name="nickname"
              id="nickname"
              className="materialize-textarea"
              value={formData.nickname}
              placeholder="Example: jackson11!"
              onChange={handleChange}>
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="email">What is your Email?</label>
            <textarea
              name="email"
              id="email"
              className="materialize-textarea"
              value={formData.email}
              placeholder="Example: jackson11@email.com"
              onChange={handleChange}>
            </textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>Upload Photos</legend>
          <div className="field">
            <input
            type="file"
            onChange={fileSelectedHandler} />
          </div>
        </fieldset>

        <div className="submit-field">
          <button className="submit-button">Submit Review</button>
        </div>
      </form>
    </div>
  )
}
export default AddReview;