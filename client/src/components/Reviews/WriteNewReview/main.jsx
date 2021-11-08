import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
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
        <h2>Write A Review!</h2>

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

        <fieldset>
          <legend>Size</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="size"
              value={1}
              onChange={handleChange}
              checked={formData.size === '1'}
              />
              <span>A Size Too Small</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="size"
              value={2}
              onChange={handleChange}
              checked={formData.size === '2'}
              />
              <span>1/2 A Size Too Small</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="size"
              value={3}
              onChange={handleChange}
              checked={formData.size === '3'}
              />
              <span>Perfect</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="size"
              value={4}
              onChange={handleChange}
              checked={formData.size === '4'}
              />
              <span>1/2 A Size Too Large</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="size"
              value={5}
              onChange={handleChange}
              checked={formData.size === '5'}
              />
              <span>A Size Too Large</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Width</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="width"
              value={1}
              onChange={handleChange}
              checked={formData.width === '1'}
              />
              <span>Too Narrow</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="width"
              value={2}
              onChange={handleChange}
              checked={formData.width === '2'}
              />
              <span>Slightly Narrow</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="width"
              value={3}
              onChange={handleChange}
              checked={formData.width === '3'}
              />
              <span>Perfect</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="width"
              value={4}
              onChange={handleChange}
              checked={formData.width === '4'}
              />
              <span>Slightly Wide</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="width"
              value={5}
              onChange={handleChange}
              checked={formData.width === '5'}
              />
              <span>Too Wide</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Comfort</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="comfort"
              value={1}
              onChange={handleChange}
              checked={formData.comfort === '1'}
              />
              <span>Uncomfortable</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="comfort"
              value={2}
              onChange={handleChange}
              checked={formData.comfort === '2'}
              />
              <span>Slightly Uncomfortable</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="comfort"
              value={3}
              onChange={handleChange}
              checked={formData.comfort === '3'}
              />
              <span>Ok</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="comfort"
              value={4}
              onChange={handleChange}
              checked={formData.comfort === '4'}
              />
              <span>Comfortable</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="comfort"
              value={5}
              onChange={handleChange}
              checked={formData.comfort === '5'}
              />
              <span>Perfect</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Quality</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="quality"
              value={1}
              onChange={handleChange}
              checked={formData.quality === '1'}
              />
              <span>Poor</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="quality"
              value={2}
              onChange={handleChange}
              checked={formData.quality === '2'}
              />
              <span>Below Average</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="quality"
              value={3}
              onChange={handleChange}
              checked={formData.quality === '3'}
              />
              <span>What I Expected</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="quality"
              value={4}
              onChange={handleChange}
              checked={formData.quality === '4'}
              />
              <span>Pretty Great</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="quality"
              value={5}
              onChange={handleChange}
              checked={formData.quality === '5'}
              />
              <span>Perfect</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Length</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="length"
              value={1}
              onChange={handleChange}
              checked={formData.length === '1'}
              />
              <span>Runs Short</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="length"
              value={2}
              onChange={handleChange}
              checked={formData.length === '2'}
              />
              <span>Runs Slightly Short</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="length"
              value={3}
              onChange={handleChange}
              checked={formData.length === '3'}
              />
              <span>Perfect</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="length"
              value={4}
              onChange={handleChange}
              checked={formData.length === '4'}
              />
              <span>Runs Slightly Long</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="length"
              value={5}
              onChange={handleChange}
              checked={formData.length === '5'}
              />
              <span>Runs Long</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Fit</legend>
          <div className="field">
            <label>
              <input
              type="radio"
              name="fit"
              value={1}
              onChange={handleChange}
              checked={formData.fit === '1'}
              />
              <span>Runs Tight</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="fit"
              value={2}
              onChange={handleChange}
              checked={formData.fit === '2'}
              />
              <span>Runs Slightly Tight</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="fit"
              value={3}
              onChange={handleChange}
              checked={formData.fit === '3'}
              />
              <span>Perfect</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="fit"
              value={4}
              onChange={handleChange}
              checked={formData.fit === '4'}
              />
              <span>Runs Slightly Long</span>
            </label>
          </div>
          <div className="field">
            <label>
              <input
              type="radio"
              name="fit"
              value={5}
              onChange={handleChange}
              checked={formData.fit === '5'}
              />
              <span>Runs Long</span>
            </label>
          </div>
        </fieldset>

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