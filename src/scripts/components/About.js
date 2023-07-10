import { LitElement, html, css } from 'lit';

class About extends LitElement {
  static properties = {
    greeting: {},
    planet: {},
  };

  static styles = css`
    .about_section {
      overflow: hidden;
    }
    .container {
      margin: 0 auto;
      width: 80%;
    }
    .about_wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }
    .about_heading {
      font-size: 4em;
      font-family: 'Montserrat', sans-serif;
      color: #36392d;
    }
    .about_paragraf {
      font-size: 1em;
      color: #36392d;
      font-family: 'Raleway', sans-serif;
      line-height: 1.6;
    }
    .gallery_wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      align-items: center;
      justify-content: center;
    }
    .gallery_wrapper picture img {
      background-position: cover;
      background-repeat: no-repeat;
      object-position: center;
      overflow: hidden;
      width: 400px;
      height: auto;
    }
    @media screen and (max-width: 576px) {
      .container {
        width: 90%;
      }
      .about_section {
        padding: 1em;
      }
      .about_heading {
        font-size: 2.5em;
      }
      .about_wrapper {
        grid-template-columns: 1fr;
      }
      .gallery_wrapper {
        grid-template-columns: 1fr;
      }
      .gallery_wrapper picture img {
        width: 100%;
      }
    }
    @media screen and (min-width: 577px) and (max-width: 992px) {
      .container {
        width: 90%;
      }
      .about_heading {
        font-size: 3em;
        text-align: center;
      }
      .gallery_wrapper {
        overflow: scroll;
      }
    }
  `;

  constructor() {
    super();

    this.imageSrcSmall = [
      {
        url: '/images/gallery1-small.webp',
        default: '/images/design/gallery1.webp',
      },
      {
        url: '/images/gallery2-small.webp',
        default: '/images/design/gallery2.webp',
      },
      {
        url: '/images/hero-image_1-small.webp',
        default: '/images/design/hero-image_1.webp',
      },
    ];
  }

  render() {
    return html`
      <section class="about_section">
        <div class="container">
          <div class="about_wrapper">
            <div>
              <h2 class="about_heading">Who Are We?</h2>
            </div>
            <div>
              <p class="about_paragraf">
                Vulputate in elit tincidunt elit scelerisque massa fusce
                pharetra. Sagittis gravida lacus quisque dictum non pretium
                suspendisse porttitor. Risus adipiscing semper ornare velit.
                Sagittis consequat luctus leo arcu. Aenean nunc accumsan id
                maecenas. Tortor.
              </p>
            </div>
          </div>
          <div class="gallery_wrapper">
            ${this.imageSrcSmall.map(
              (item, index) => html`
                <picture>
                  <source
                    class="lazyload"
                    media="(max-width: 600px)"
                    srcset=${item.url} />
                  <img
                    class="lazyload"
                    src=${item.default}
                    alt=${`Gallery ${index}`} />
                </picture>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('about-element', About);

export default About;
