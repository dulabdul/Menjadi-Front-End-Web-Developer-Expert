import RestaurantDataSource from '../../data/restaurantsource';
import { CreateRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /* html */ `
    <hero-bar></hero-bar>
    <about-element id="maincontent"></about-element>
    <loader-indicator></loader-indicator>
    <section class="menu_section">
    <div class="container">
          <h2 class="menu_heading">Our Menu</h2>
          <div class="menu_wrapper" id="menu"></div>
          </div>
      </section>
    <team-element></team-element>
        `;
  },

  async afterRender() {
    const restaurantsContainer = await document.querySelector('#menu');
    const loader = document
      .querySelector('loader-indicator')
      .shadowRoot.querySelector('.loader');

    restaurantsContainer.innerHTML = '';
    try {
      const restaurants = await RestaurantDataSource.getAllData();
      loader.style.display = 'none';
      restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += CreateRestaurantItemTemplate(resto);
      });
    } catch (error) {
      console.log(error);

      restaurantsContainer.innerHTML = '<error-tag></error-tag>';
    }
  },
};

export default Home;
