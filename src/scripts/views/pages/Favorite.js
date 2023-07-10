/* eslint-disable no-new */
import RestaurantFavIdb from '../../data/favorite-restaurant';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: RestaurantFavIdb,
    });
    new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants: RestaurantFavIdb,
    });
  },
};

export default Favorite;
