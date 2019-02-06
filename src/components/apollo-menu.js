import {
  html
} from 'lit-element';
import {
  BaseView
} from './base-view';

class ApolloMenu extends BaseView {


  constructor() {
    super();
    this.views = [
      {href: '/', caption: 'Todos', selected: false},
      {href: '/spreadsheet', caption: 'Spreadsheet', selected: false},
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
      <div id="menu-wrapper">
        <vaadin-button id="collapse-menu" theme="icon" aria-label="Hide or show menu" @click=${this.collapseButton}>
          <iron-icon icon="vaadin:menu" slot="prefix"></iron-icon>
        </vaadin-button>
        <div class="header">Views</div>
        ${this.views.map(view => html` <a href='${view.href}' ?selected='${view.selected}'>${view.caption}</a>`)}
      </div>
    `;
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