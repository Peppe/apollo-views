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

class ApolloViewsApp extends BaseView {

  render() {
    return html `
      <div id="main-layout">
        <apollo-menu views="${this.views}"></apollo-menu>
        <div id="router-output"></div>
      </div>
    `;
  }
}

customElements.define('apollo-views-app', ApolloViewsApp);