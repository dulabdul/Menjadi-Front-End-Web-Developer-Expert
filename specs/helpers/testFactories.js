import RestaurantFavIdb from '../../src/scripts/data/favorite-restaurant';
import LikeButtonPresenter from '../../src/scripts/utils/LikeButtonPresenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestaurantFavIdb,
    restaurant,
  });
};
export default createLikeButtonPresenterWithRestaurant;
