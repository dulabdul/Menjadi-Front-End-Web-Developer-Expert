/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';
import RestaurantFavIdb from '../data/favorite-restaurant';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    (this._likeButtonContainer = likeButtonContainer),
      (this._restaurant = restaurant);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavIdb.getRestaurant(id);
    console.log(restaurant);
    return !!restaurant;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
