/* eslint-disable no-underscore-dangle */
import { html, css, LitElement } from 'lit';
import UrlParser from '../../routes/url-parser';

class Navbar extends LitElement {
  static styles = css`
    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
    .header {
      position: absolute;
      width: 100%;
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      font-family: 'Raleway', sans-serif;
    }

    .hamburger {
      display: none;
    }

    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: #101010;
    }

    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-item {
      margin-left: 5rem;
    }

    .nav-link {
      font-size: 1.2rem;
      font-weight: 400;
      color: #36392d;
      display: block;
      min-width: 44px;
      min-height: 44px;
    }
    .nav-link.home {
      color: #fff;
    }

    .nav-link:hover {
      color: #b7bca9;
    }

    .nav-logo {
      font-size: 2.1rem;
      font-weight: 500;
      display: block;
      min-height: 44px;
      min-width: 44px;
      color: #36392d;
    }
    .nav-logo.home {
      color: #fff;
    }
    .nav-logo:hover {
      color: #b7bca9;
    }
    @media only screen and (max-width: 900px) {
      .nav-menu {
        display: block;
        position: fixed;
        left: -120%;
        top: 5rem;
        padding: 0;
        flex-direction: column;
        background-color: rgb(26 20 20 / 64%);
        backdrop-filter: blur(4px);
        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s linear;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
      }
      .nav-link {
        color: #fff;
      }

      .nav-menu.active {
        left: 0%;
      }

      .nav-item {
        margin: 2.5rem 0;
      }

      .hamburger {
        min-height: 44px;
        min-width: 44px;
        display: block;
        cursor: pointer;
      }

      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }

      .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Food App';
    this.url = UrlParser.parseActiveUrlWithoutCombiner();
    this.list = [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About Us',
        url: 'http://ar-portofolio.my.id/',
      },
      {
        name: 'Menu',
        url: '#menu',
      },
      {
        name: 'Favorite',
        url: '#/favorite',
      },
    ];
  }

  get hamburger() {
    return this.renderRoot?.querySelector('.hamburger') ?? null;
  }

  get navMenu() {
    return this.renderRoot?.querySelector('.nav-menu') ?? null;
  }

  get navLink() {
    return this.renderRoot?.querySelector('.nav-link') ?? null;
  }

  render() {
    return html`
      <header
        class="header"
        id="navigation-menu">
        <nav class="navbar">
          <a
            href="/"
            class="js-anchor-link nav-logo ${this.url.resource === null
              ? 'home'
              : ''}">
            ${this.name}</a
          >
          <button
            aria-label="hamburger button"
            @click=${this._hamburgerButton}
            class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <ul class="nav-menu">
            ${this.list.map(
              (item) => html`
                <li class="nav-item ">
                  <a
                    href=${item.url}
                    target=${item.name === 'About Us' ? '_blank' : ''}
                    class="nav-link ${this.url.resource === null
                      ? 'home'
                      : ''} js-anchor-link"
                    >${item.name}</a
                  >
                </li>
              `
            )}
          </ul>
        </nav>
      </header>
    `;
  }

  _hamburgerButton() {
    this.hamburger.classList.toggle('active');
    this.navMenu.classList.toggle('active');
  }
}
customElements.define('nav-bar', Navbar);

export default Navbar;
