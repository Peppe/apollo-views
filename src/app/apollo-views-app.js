import {
  html
} from 'lit-element';
import '../views/todo/todo-view';
import {
  BaseView
} from '../components/base-view.js';
import '../components/apollo-menu.js';
import {
  router
} from '../index';
import '@vaadin/vaadin-app-layout';

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
      <vaadin-app-layout>
        <div slot="navbar">
          <vaadin-drawer-toggle></vaadin-drawer-toggle>
        </div>
        <apollo-menu slot="drawer"></apollo-menu>
        <div id="router-output"></div>
      </vaadin-app-layout>
      <!--<div id="main-layout"></div>-->
    `;
  }

  firstUpdated() {
    router.setOutlet(this.shadowRoot.getElementById('router-output'));
  }
}

customElements.define('apollo-views-app', ApolloViewsApp);