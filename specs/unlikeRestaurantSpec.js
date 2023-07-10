/* eslint-disable no-undef */
import RestaurantFavIdb from '../src/scripts/data/favorite-restaurant';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addLikeButtonContainer();

    await RestaurantFavIdb.putRestaurant({ id: 1 });
  });
  afterEach(async () => {
    await RestaurantFavIdb.deleteRestaurant(1);
  });
  it('Should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label = "unlike this restaurant"]')
    ).toBeTruthy();
  });
  it('Should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label ="like this restaurat"]'));
  });
  it('Should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label ="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
  });
  it('Shoukd not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus restaurant terlebih dahulu
    await RestaurantFavIdb.deleteRestaurant(1);
    // user click likeButton
    document
      .querySelector('[aria-label = "unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await RestaurantFavIdb.getAllRestaurant()).toEqual([]);
  });
});
