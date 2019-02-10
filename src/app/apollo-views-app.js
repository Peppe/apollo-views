import {
  html
} from 'lit-element';
import '../views/todo/todo-view';
import {
  BaseView
} from '../components/base-view.js';
import '@vaadin/vaadin-button';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '../components/apollo-menu.js';
import {
  router
} from '../index';

class ApolloViewsApp extends BaseView {

  render() {
    return html `
      <style>
        :host {
          width: 100%;
          height:100%;
          display: flex;
          flex-direction: column;
        }

        #main-layout {
          display: flex;
          flex-direction: row;
          flex:1;
        }

        #router-output {
          flex: 1;
          padding: var(--spacing);
          overflow: auto;
        }
      </style>
      <div id="main-layout">
        <apollo-menu views="${this.views}"></apollo-menu>
        <div id="router-output"></div>
      </div>
    `;
  }

  firstUpdated() {
    router.setOutlet(this.shadowRoot.getElementById('router-output'));
  }
}

customElements.define('apollo-views-app', ApolloViewsApp);