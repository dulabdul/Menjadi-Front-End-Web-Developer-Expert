import { LitElement, html, css } from 'lit';

class LoaderIndicator extends LitElement {
  static properties = {};

  static styles = css`
    .loader {
      margin: 100px auto;
      width: 70px;
      height: 40px;
      text-align: center;
      font-size: 10px;
    }

    .loader > div {
      background-color: darkred;
      height: 100%;
      width: 6px;
      display: inline-block;

      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .loader .spin2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .loader .spin3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }

    .loader .spin4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .loader .spin5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }

    .loader .spin6 {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }

    .loader .spin7 {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }

    .loader .spin8 {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }

    @-webkit-keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        -webkit-transform: scaleY(0.4);
      }
      20% {
        -webkit-transform: scaleY(1);
      }
    }

    @keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
      }
    }
  `;

  render() {
    return html`
      <div class="loader">
        <div class="spin1"></div>
        <div class="spin2"></div>
        <div class="spin3"></div>
        <div class="spin4"></div>
        <div class="spin5"></div>
        <div class="spin6"></div>
        <div class="spin7"></div>
        <div class="spin8"></div>
      </div>
    `;
  }
}

customElements.define('loader-indicator', LoaderIndicator);

export default LoaderIndicator;
