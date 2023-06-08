import { LitElement, html, css } from 'lit';

class Error extends LitElement {
  static properties = {};

  static styles = css``;

  render() {
    return html`
      <section>
        <div class="error">
          <h1>sorry, failed to load page!!!</h1>
          <p>please check your connection!!</p>
        </div>
      </section>
    `;
  }
}

customElements.define('error-tag', Error);

export default Error;
