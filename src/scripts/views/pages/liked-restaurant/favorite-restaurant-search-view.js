/* eslint-disable implicit-arrow-linebreak */
import { CreateRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return /* html */ `
  <section class="menu_section">
    <div class="container">
      <div class="wrap_search">
          <div class="search">
            <input type="text" id="query" class="searchTerm" placeholder="Cari Restaurant">
            <button class="search-btn"><i class="fas fa-search"></i></button>
          </div>
      </div>
        <div class="restaurant-result-container">
          <div class="restaurants menu_wrapper" id="menu"></div>
          <div id="notFound">
            </div>
        </div>
      </div>
    </div>
  </section>
      `;
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants?.length > 0) {
      html = restaurants?.reduce(
        (carry, restaurant) =>
          carry.concat(CreateRestaurantItemTemplate(restaurant), ''),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.restaurants').innerHTML = html;
    document
      .getElementById('menu')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (e) => {
      callback(e.target.value);
    });
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Restaurant Tidak Ditemukan</div>';
  }
}

export default FavoriteRestaurantSearchView;
