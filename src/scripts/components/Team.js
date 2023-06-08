import { LitElement, html, css } from 'lit';

class Team extends LitElement {
  static properties = {};

  static styles = css`
    .container {
      margin: 0 auto;
      width: 90%;
    }
    .team_section {
      padding: 4em 0;
      overflow: hidden;
      background-color: #b7bca9;
    }
    .heading_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .heading_wrapper h2 {
      font-size: 4em;
      color: #36392d;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
    }
    .heading_wrapper p {
      font-size: 1em;
      color: #36392d;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
    }
    .ourteam_wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2em 1em;
      align-items: center;
      justify-content: center;
    }
    .ourteam_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .ourteam_content img {
      width: 100%;
      height: auto;
      background-position: cover;
      background-size: cover;
    }
    .ourteam_content h4 {
      margin: 4px 0;
      color: #36392d;
      font-size: 1.5em;
      font-weight: 500;
      text-align: center;

      font-family: 'Montserrat', sans-serif;
    }
    .ourteam_content h5 {
      margin: 4px 0;
      font-family: 'Raleway', sans-serif;
      font-size: 1.2em;
      color: #36392d;
      text-align: center;
    }
    .ourteam_content p {
      margin: 0;
      font-family: 'Raleway', sans-serif;
      font-size: 0.9em;
      color: #36392d;
      font-size: 300;
      text-align: center;
    }
    @media screen and (max-width: 576px) {
      .container {
        width: 90%;
      }
      .team_section {
        padding: 2em 0;
      }
      .heading_wrapper {
        flex-direction: column;
      }
      .heading_wrapper h2 {
        text-align: center;
        margin: 0;
        font-size: 2em;
      }
      .heading_wrapper p {
        margin: 10px 0;
        text-align: center;
      }
      .ourteam_wrapper {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media screen and (min-width: 577px) and (max-width: 992px) {
      .ourteam_wrapper {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  constructor() {
    super();
    this.listTeam = [
      {
        name: 'Jonathan Demario',
        job: 'Founder',
        description:
          'In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.',
        imageUrl: '/images/design/team-2.png',
      },
      {
        name: 'Bryhan Machado',
        job: 'Chef',
        description:
          'In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.',
        imageUrl: '/images/design/team-1.png',
      },
      {
        name: 'Adam Joshep',
        job: 'Chef',
        description:
          'In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.',
        imageUrl: '/images/design/team-3.png',
      },
      {
        name: 'Putin Desque',
        job: 'Chef',
        description:
          'In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.',
        imageUrl: '/images/design/team-4.png',
      },
    ];
  }

  render() {
    return html`
      <section class="team_section">
        <div class="container">
          <div class="heading_wrapper">
            <h2>Our Team</h2>
            <p>
              In velit auctor non auctor in. Id pellentesque facilisis at lectus
              sed in sit tellus mauris.
            </p>
          </div>
          <div class="ourteam_wrapper">
            ${this.listTeam.map(
              (item) => html`
                <div class="ourteam_content">
                  <img
                    src=${item.imageUrl}
                    alt=${item.name} />
                  <h4>${item.name}</h4>
                  <h5>${item.job}</h5>
                  <p>${item.description}</p>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('team-element', Team);

export default Team;
