import { LitElement, html, css } from 'lit';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
class Footer extends LitElement {
  static styles = css`
    footer {
      overflow: hidden;
      padding: 6em 2em 3em 2em;
    }
    .container {
      width: 90%;
      margin: 0 auto;
    }
    .footer_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer_menu ul {
      display: inline;
    }
    .footer_menu ul li {
      display: inline;
      margin: 0 1em;
      list-style-type: none;
    }
    .footer_menu ul li a {
      font-family: 'Raleway', sans-serif;
      color: #36392d;
      text-decoration: none;
      display: block;
      min-width: 44px;
      min-height: 44px;
    }
    .footer_menu ul li a:hover {
      color: #11120e;
      text-decoration: underline;
    }
    .footer_copyright {
      font-family: 'Raleway', sans-serif;
      color: #36392d;
      font-size: 1em;
      font-weight: 300;
      text-align: center;
    }
    @media screen and (max-width: 576px) {
      footer {
        padding: 2em;
      }
      .footer_wrapper {
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
      }
      .footer_menu ul li {
        display: block;
        text-align: center;
      }
    }
  `;

  constructor() {
    super();
    this.list = [
      {
        name: 'Home',
        url: '#home',
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
        url: '#',
      },
    ];
  }

  render() {
    return html`
      <footer>
        <div class="container">
          <div class="footer_wrapper">
            <div class="footer_menu">
              <ul>
                ${this.list.map(
                  (item) => html`
                    <li>
                      <a
                        target=${item.name === 'About Us' ? '_blank' : ''}
                        href=${item.url}
                        >${item.name}</a
                      >
                    </li>
                  `
                )}
              </ul>
            </div>
            <div class="footer_info">
              <h3>Food App</h3>
              <div class="footer_medsos">
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p class="footer_copyright">
          Copyright © ${currentYear} - Food App. All Right Reversed
        </p>
      </footer>
    `;
  }
}
customElements.define('footer-element', Footer);

export default Footer;
