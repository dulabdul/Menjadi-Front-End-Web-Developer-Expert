/* eslint-disable operator-linebreak */
import RestaurantFavIdb from '../../data/favorite-restaurant';
import RestaurantDataSource from '../../data/restaurantsource';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/LikeButtonPresenter';
import reviewInitiator from '../../utils/reviewInitiator';
import {
  CreateRestaurantDetailTemplate,
  createReviewListTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return /* html */ `
        <section class="detail_section">
        <div class="container">
        <loader-indicator></loader-indicator>
        <div id="detail"></div>
        <div class="detail-form">
        <h2 class="add-review-title">Tambahkan review</h2>
        <div id="formReviewContainer" class="detail-form-card"></div>
        </div>
        <div class="review_container" id="reviewContainer">
        
        </div>
      
        </div>
    <div id="likeButtonContainer"></div>

        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantDataSource.getDetailRestaurant(
      url.id
    );
    const loader = document
      .querySelector('loader-indicator')
      .shadowRoot.querySelector('.loader');
    const RestaurantContainer = document.querySelector('#detail');
    const reviewContainerList = document.querySelector('#reviewContainer');
    try {
      detailRestaurant.restaurant.customerReviews.forEach((review) => {
        reviewContainerList.innerHTML += createReviewListTemplate(review);
      });
      RestaurantContainer.innerHTML += CreateRestaurantDetailTemplate(
        detailRestaurant.restaurant
      );
      loader.style.display = 'none';
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: RestaurantFavIdb,
        restaurant: {
          id: detailRestaurant.restaurant.id,
          name: detailRestaurant.restaurant.name,
          description: detailRestaurant.restaurant.description,
          city: detailRestaurant.restaurant.city,
          rating: detailRestaurant.restaurant.rating,
          pictureId: detailRestaurant.restaurant.pictureId,
        },
      });
      reviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: detailRestaurant.restaurant.id,
      });
    } catch (error) {
      console.log(error);
      loader.style.display = 'none';

      RestaurantContainer.innerHTML = '<error-tag></error-tag>';
    }
  },
};

export default Detail;
