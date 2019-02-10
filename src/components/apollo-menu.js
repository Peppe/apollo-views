import {
  html
} from 'lit-element';
import {
  BaseView
} from './base-view';
import {
  router
} from '../index';

class ApolloMenu extends BaseView {


  constructor() {
    super();
    this.views = [
      {href: '/', caption: 'Todos', selected: false},
      {href: '/spreadsheet', caption: 'Spreadsheet', selected: false},
      {href: '/order', caption: 'Order form', selected: false},
      {href: '/foo', caption: 'Lost', selected: false},
    ];
    this.collapsed = false;
    window.addEventListener('vaadin-router-location-changed', (event) => {
      console.log(event);
      this.views.map(item => {
        item.selected = false;
        if (item.href === event.detail.location.pathname) {
          item.selected = true;
        }
      });
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
        <vaadin-button id="collapse-menu" theme="icon" aria-label="Hide or show menu" @click=${this.collapseButton}>
          <iron-icon icon="vaadin:menu" slot="prefix"></iron-icon>
        </vaadin-button>
        <div class="header">Views</div>
        ${this.views.map(view => html` <a href='${this.__getUrlForHome(view.href)}' ?selected='${view.selected}'>${view.caption}</a>`)}
      </div>
    `;
  }

  __getUrlForHome(path) {
    const url = router.urlForPath(path);
    return url;
  }
  
  collapseButton() {
    if (!this.collapsed) {
      this.setAttribute('collapsed', '');
      this.collapsed = true;
    } else {
      this.removeAttribute('collapsed');
      this.collapsed = false;
    }
  }
}

customElements.define('apollo-menu', ApolloMenu);