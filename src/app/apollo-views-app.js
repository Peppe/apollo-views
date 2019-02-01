import { LitElement, html } from 'lit-element';
import '../views/todo/todo-view'

class ApolloViewsApp extends LitElement { 
  render() {
    return html` 
      <p>My app</p>
      <todo-view></todo-view>
    `;
  }
}

customElements.define('apollo-views-app', ApolloViewsApp); //