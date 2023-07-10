/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
import itActsAsFavoriteRestaurantModel from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line eqeqeq
    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },
  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    // id blm ada dalam daftar favorite
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id != id
    );
  },
  searchRestaurants(query) {
    return this.getAllRestaurant().filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
