import {
  LitElement,
  html
} from 'lit-element';
import '../views/todo/todo-view';

class ApolloViewsApp extends LitElement {
  render() {
    return html `
      <style>
        :host {
          display: flex;
          flex-direction: row;
        }

        div {
          color: red;
        } 
      </style>
      <div>hello</div>
      <todo-view></todo-view>
    `;
  }
}

customElements.define('apollo-views-app', ApolloViewsApp); //