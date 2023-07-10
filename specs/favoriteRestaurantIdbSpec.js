import itActsAsFavoriteRestaurantModel from './contract/favoriteRestaurantContract';
import RestaurantFavIdb from '../src/scripts/data/favorite-restaurant';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await RestaurantFavIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantFavIdb);
});
