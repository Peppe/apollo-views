import {
  html
} from 'lit-element';
import {
  BaseView
} from './base-view';

// TODO Update this when copying
class ComponentTemplate extends BaseView {

  constructor() {
    super();
    this.property = 'World';
  }

  render() {
    return html `
      <div>Hello ${this.property}</div>
    `;
  }

  collapseButton() {
  }
}

// TODO Update this when copying
customElements.define('component-template', ComponentTemplate);