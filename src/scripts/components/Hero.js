import { LitElement, html, css } from 'lit';

class Hero extends LitElement {
  static properties = {};

  static styles = css`
    .anchor_link {
      padding: 0 2em;
      align-items: center;
      display: flex;
      text-decoration: none;
      background-color: #b7bca9;
      border: none;
      min-width: 44px;
      min-height: 44px;
      border-radius: 6px;
      transition: all 0.2;
      cursor: pointer;
      color: #36392d;
      font-weight: 600;
      font-size: 1em;
      font-family: 'Raleway', sans-serif;
    }

    .anchor_link:hover {
      background-color: #9fa68c;
    }
    .hero_section {
      background-image: url('/images/hero-image_4-large.webp');
      width: 100%;
      height: 700px;
      object-fit: cover;
      object-position: center;
      display: flex;
      align-items: center;

      background-repeat: no-repeat;
      background-size: cover;
    }
    .container {
      width: 1140px;
      margin: 0 auto;
    }
    .heading_wrapper {
      margin: auto 1em;
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
    }
    .hero_section_heading {
      color: #fff;
      font-size: 4em;
      font-family: 'Montserrat', sans-serif;
    }

    @media screen and (max-width: 768px) {
      .hero_section_heading {
        font-size: 3em;
        text-align: center;
      }
      .heading_wrapper {
        align-items: center;
        justify-content: center;
      }
      .hero_section {
        background-image: url('/images/hero-image_4-small.webp');
      }
    }
  `;

  render() {
    return html`
      <section class="hero_section">
        <div class="container">
          <div class="heading_wrapper">
            <h1 class="hero_section_heading">
              Made By Italians. <br />
              Enjoyed by Everyone
            </h1>

            <a
              class="anchor_link"
              href="#menu"
              aria-label="explore now">
              Explore Now
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-bar', Hero);

export default Hero;
