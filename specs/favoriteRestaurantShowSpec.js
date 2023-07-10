import RestaurantFavIdb from '../src/scripts/data/favorite-restaurant';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';

describe('Showing all favorite restaurants', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });
  describe('When no restaurants have been liked', () => {
    it('Should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(RestaurantFavIdb);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
    it('Should show the information that no restaurants have been liked', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-item__not__found').length
          ).toEqual(1);
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(RestaurantFavIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
  describe('When favorite restaurants exist', () => {
    it('Should show the restaurants', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          expect(
            document.querySelectorAll('.card_menu-wrapper').length
          ).toEqual(2);
          done();
        });
      const favoriteRestaurants = spyOnAllFunctions(RestaurantFavIdb, false);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: 11,
          name: 'A',
          ratimg: 5,
          description: 'sebuah restaurant a',
        },
        {
          id: 22,
          name: 'B',
          ratimg: 3,
          description: 'sebuah restaurant B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
