import RestaurantFavIdb from '../../data/favorite-restaurant';
import {
  CreateRestaurantItemTemplate,
  createNotFoundTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return /* html */ `
    <section class="menu_section">
    <div class="container">
    <loader-indicator></loader-indicator>

          <div class="menu_wrapper" id="menu"></div>

          <div id="notFound">
          
          </div>
          </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantFavIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#menu');
    const notFoundFavoriteContainer = document.querySelector('#notFound');
    const loader = document
      .querySelector('loader-indicator')
      .shadowRoot.querySelector('.loader');
    try {
      if (restaurants.length === 0) {
        loader.style.display = 'none';
        notFoundFavoriteContainer.innerHTML += createNotFoundTemplate();
      } else {
        restaurants.forEach((resto) => {
          loader.style.display = 'none';
          restaurantsContainer.innerHTML += CreateRestaurantItemTemplate(resto);
        });
      }
    } catch (error) {
      console.log(error);
      restaurantsContainer.innerHTML = '<error-tag></error-tag>';
    }
  },
};

export default Favorite;
