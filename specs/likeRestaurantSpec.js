/* eslint-disable no-undef */
import RestaurantFavIdb from '../src/scripts/data/favorite-restaurant';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addLikeButtonContainer();
  });
  it('Should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });
  it('Should not show unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });
  it('Should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await RestaurantFavIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    RestaurantFavIdb.deleteRestaurant(1);
  });

  // negatif scenario
  it('Should not add a restaurant again when already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    // tambahkan resto dengan id 1 ke daftar film yang disukai
    await RestaurantFavIdb.putRestaurant({ id: 1 });

    // simulasi pengguna click like button

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
  });
  it('Should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantFavIdb.getAllRestaurant()).toEqual([]);
  });
});
