/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
const notFoundResto = 'Restaurant Tidak Ditemukan';
Scenario('Showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see(notFoundResto, '.restaurant-item__not__found');
});
Scenario('Liking one restaurant', async ({ I }) => {
  // saya melihat element dengan Id Query
  I.seeElement('#query');
  // saya berada di homepage
  I.amOnPage('/');
  // waiting 1s untuk element .menu_content a
  I.waitForElement('.menu_content a', 1);
  // saya melihat elemeen .menu_content a
  I.seeElement('.menu_content a');
  // tekan elemenet pertama menuju detail
  const firstRestaurant = locate('.menu_content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  // saya melihat element dengan Id likeButton detail
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  // simpan film yang disukai
  I.click('#likeButton');
  // saya berada di favorite page
  I.amOnPage('/#/favorite');
  // pastikan item yang disukai ada di favorite page
  I.waitForElement('.card_menu-wrapper', 1);
  I.seeElement('.card_menu-wrapper');
  const likedRestaurantName = await I.grabTextFrom('.menu_name');
  // bandingkan judul restaurant
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.menu_content a');

  I.seeElement('.menu_content a');
  const firstRestaurant = locate('.menu_content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card_menu-wrapper');
  const likedRestaurantName = await I.grabTextFrom('.menu_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item__not__found');
  const unlikedRestaurantName = await I.grabTextFrom(
    '.restaurant-item__not__found'
  );
  assert.strictEqual(unlikedRestaurantName, notFoundResto);
});
Scenario('Searching restaurants', async ({ I }) => {
  I.see(notFoundResto, '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.menu_content a');

  I.seeElement('.menu_content a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.menu_content a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.detail_title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestauratns = names.filter(
    (name) => name.indexOf(searchQuery) !== -1
  );
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements(
    '.card_menu-wrapper'
  );
  assert.strictEqual(matchingRestauratns.length, visibleLikedRestaurants);

  matchingRestauratns.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate('.menu_name').at(index + 1)
    );
    assert.strictEqual(name, visibleName);
  });
});
Scenario('Review Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.menu_content a');
  I.seeElement('.menu_content a');

  I.click(locate('.menu_content a').first());

  I.seeElement('#formReviewContainer');
  I.seeElement('form');

  I.fillField('nama', 'Abdul');
  I.fillField('review', 'e2e Testing');

  I.seeElement(locate('.review_detail').last());
});
