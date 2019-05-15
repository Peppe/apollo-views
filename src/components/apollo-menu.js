import {
  html
} from 'lit-element';
import {
  BaseView
} from './base-view';
import {
  router,
  menu
} from '../index';
import '@vaadin/vaadin-button';
import '@polymer/iron-icon';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js';

class ApolloMenu extends BaseView {
  constructor() {
    super();
    this.collapsed = false;
    window.addEventListener('vaadin-router-location-changed', (event) => {
      // De-select all menu items
      menu.forEach((item) => {
        item.selected = false;
      });
      // Find the one element that should be selected
      const selectMenu = menu.find((item) => {
        return item.href === event.detail.location.getUrl();
      });
      // Select it and inform of an update to the template
      selectMenu.selected = true;
      this.requestUpdate();
    });

    this.addEventListener('mouseenter', () => {
      if (this.collapsed) {
        this.setAttribute('hover', '');
      }
    });
    this.addEventListener('mouseleave', () => {
      this.removeAttribute('hover');
    });

    this.addEventListener('touchend', () => {
      if (this.collapsed) {
        this.removeAttribute('collapsed');
        this.collapsed = false;
      }
    });
  }

  render() {
    return html `
      <style>
        :host {
          width: 250px;
          box-shadow: 0 3px 18px -2px hsla(214, 53%, 23%, 0.16), 0 12px 48px -6px hsla(214, 47%, 21%, 0.38);
          line-height: 1.5em;
          overflow: hidden;
          height: 100%;
          transition:200ms ease;
          padding-right: var(--spacing);
        }

        :host([collapsed]) {
          width: 0;
        }

        :host([collapsed][hover]) {
          width: 250px;
        }

        #menu-wrapper {
          display:flex;
          flex-direction: column;
          padding: var(--spacing);
          min-width: 100px;
        }

        #collapse-menu {
          align-self: flex-end;
        }

        #collapse-menu iron-icon {
          fill:var(--shade-color);
        }

        :host([collapsed]) #collapse-menu iron-icon {
          fill: var(--primary-color);
        }

        .header {
          text-transform: uppercase;
          color: black;
          font-weight: bold;
          margin: var(--spacing) 0;
        }

        a,
        a:visited,
        a:active {
          display:block;
          color: var(--dark-color);
          text-decoration: none;
        }

        a[selected],
        a[selected]:visited,
        a[selected]:active {
          color: var(--primary-color);
        }
      </style>
      <div id="menu-wrapper">
        <div class="header">Views</div>
        ${menu.map(view => html`
          <a href='${router.urlForPath(view.href)}' ?selected='${view.selected}'>${view.caption}</a>
        `)}
      </div>
    `;
  }
}

customElements.define('apollo-menu', ApolloMenu);