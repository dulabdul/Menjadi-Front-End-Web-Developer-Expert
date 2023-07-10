import RestaurantFavIdb from '../src/scripts/data/favorite-restaurant';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';

describe('Searching a restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;
  const searchRestaurants = (query) => {
    const queryElement = document.querySelector('#query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const contructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(RestaurantFavIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };
  beforeEach(() => {
    setRestaurantSearchContainer();
    contructPresenter();
  });
  describe('When query is not empty', () => {
    it('Should be able to capture the query typed by the user', () => {
      searchRestaurants('restaurant a');

      expect(presenter.latestQuery).toEqual('restaurant a');
    });
    it('Should ask the model to search for liked restaurants', () => {
      searchRestaurants('restaurant a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith(
        'restaurant a'
      );
    });

    it('Should show - when the restaurant returned does not contain a name', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          const restaurantNames = document.querySelectorAll('.menu_name');
          expect(restaurantNames.item(0).textContent).toEqual('-');
          done();
        });
      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([{ id: 444 }]);

      searchRestaurants('restaurant a');
    });
    it('Should show the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(3);
          done();
        });
      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([
          { id: 111, name: 'restaurant abc' },
          { id: 222, name: 'ada juga restaurant abcde' },
          { id: 333, name: 'ini juga boleh restaurant a' },
        ]);
      searchRestaurants('restaurant a');
    });

    it('Should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          const restaurantName = document.querySelectorAll('.menu_name');
          expect(restaurantName.item(0).textContent).toEqual('restaurant abc');
          expect(restaurantName.item(1).textContent).toEqual(
            'ada juga restaurant abcde'
          );
          expect(restaurantName.item(2).textContent).toEqual(
            'ini juga boleh restaurant a'
          );
          done();
        });
      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([
          { id: 111, name: 'restaurant abc' },
          { id: 222, name: 'ada juga restaurant abcde' },
          { id: 333, name: 'ini juga boleh restaurant a' },
        ]);
      searchRestaurants('restaurant a');
    });
  });
  describe('When query is empty', () => {
    it('Should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('  ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
    it('Should show all favorite restaurants', () => {
      searchRestaurants('   ');
      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalled();
    });
  });
  describe('When no favorite restaurants could be found', () => {
    it('Should show the empty message', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-item__not__found').length
          ).toEqual(1);

          done();
        });
      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([]);
      searchRestaurants('restaurant a');
    });
    it('Should not show any restaurant', (done) => {
      document
        .getElementById('menu')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(0);
          done();
        });
      favoriteRestaurants.searchRestaurants
        .withArgs('restaurant a')
        .and.returnValues([]);

      searchRestaurants('restaurant a');
    });
  });
});
