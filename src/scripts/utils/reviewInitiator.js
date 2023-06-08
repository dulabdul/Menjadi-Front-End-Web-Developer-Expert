/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import RestaurantDataSource from '../data/restaurantsource';
import { createReviewTemplate } from '../views/templates/template-creator';

const reviewInitiator = {
  async init({ formReviewContainer, id }) {
    (this._formReviewContainer = formReviewContainer), (this._id = id);

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createReviewTemplate();
    const btnSubmit = document.querySelector('.btnSubmit');
    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();
      const addName = document.querySelector('.addName');
      const addReview = document.querySelector('.addReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: addName.value,
        review: addReview.value,
      };

      if (addName.value === '') {
        alert('Name Cannot be empty');
      } else if (addReview.value === '') {
        alert('Review cannot be empy');
      } else {
        await RestaurantDataSource.addReview(reviewData);
        form.reset();
        this._renderReview(reviewData.review, reviewData.name);
      }
    });
  },
  _renderReview(review, name) {
    const reviewContainer = document.querySelector('#reviewContainer');
    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const dataReview = /* html */ `
    <div class="review_detail"> <h6 class="review_detail-name">${name}</h6>
<p class="review_detail-date">${date}</p>
<p class="review_detail-content">${review}</p> </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default reviewInitiator;
