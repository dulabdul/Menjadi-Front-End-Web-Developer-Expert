import { LitElement, html, css } from 'lit';
import RestaurantDataSource from '../data/restaurantsource';

class Menu extends LitElement {
  static styles = css`
    .menu_section {
      padding: 8em 0;
      overflow: hidden;
    }
    .container {
      margin: 0 auto;
      width: 80%;
    }
    .menu_heading {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      color: #36392d;
      font-size: 4em;
      text-align: center;
    }
    .menu_wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: center;
      gap: 32px 14px;
    }
    .menu_wrapper-img img {
      background-position: center;
      background-size: cover;
      width: 100%;
      overflow: hidden;
      transition: all 0.3s;
      height: 300px;
    }
    .menu_wrapper img:hover {
      transform: scale(1.1);
    }
    .card_menu-wrapper {
      background-color: #b7bca9;
      border: none;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    .menu_content {
      padding: 0.5em 1em;
      display: flex;
      flex-direction: column;
    }
    .menu_content h3 {
      margin: 0;
      font-size: 2.2em;
      font-family: 'Montserrat', sans-serif;
      color: #36392d;
    }
    .menu_wrapper .menu_wrapper_info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Raleway', sans-serif;
      margin: 0;
    }
    .menu_wrapper .menu_wrapper_info h4,
    p {
      font-size: 1.2em;
      color: #36392d;
    }
    .menu_wrapper .menu_wrapper_info p {
      font-weight: 600;
    }
    .menu_content .menu_description {
      font-family: 'Raleway', sans-serif;
      color: #36392d;
      font-size: 1em;
      margin: 0;
      font-weight: 300;
      margin-bottom: 1.2em;
      line-height: 1.6;
    }
    @media screen and (max-width: 576px) {
      .menu_section {
        padding: 2em 0;
      }
      .container {
        width: 90%;
      }
      .menu_heading {
        font-size: 2.5em;
        text-align: center;
      }
      .menu_wrapper {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5em 0;
      }
      .menu_wrapper-img img {
        height: 100%;
      }
      .menu_content h3 {
        font-size: 1.8em;
      }
    }
    @media screen and (min-width: 577px) and (max-width: 992px) {
      .container {
        width: 90%;
      }
      .menu_wrapper {
        grid-template-columns: repeat(1, 1fr);
      }
      .menu_wrapper-img img {
        height: auto;
      }
    }
  `;

  constructor() {
    super();
    this.data = RestaurantDataSource.getAllData();
  }

  async render() {
    return html`
      <section class="menu_section">
        <div class="container">
          <h2 class="menu_heading">Our Menu</h2>
          <div class="menu_wrapper">
            ${this.data.map(
              (item) => html`
                <div class="card_menu-wrapper">
                  <div class="menu_wrapper-img">
                    <img
                      src=${item.pictureId}
                      alt=${item.name} />
                  </div>
                  <div class="menu_content">
                    <h3 class="menu_title">${item.name}</h3>
                    <div class="menu_wrapper_info">
                      <h4>${item.city}</h4>
                      <p>${item.rating}</p>
                    </div>
                    <p class="menu_description">${item.description}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('menu-element', Menu);

export default Menu;
