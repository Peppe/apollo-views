import {
  html
} from 'lit-element';
import {
  BaseView
} from '../components/base-view.js';

class NotFoundView extends BaseView {
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
      <div>Can't find the page that you are looking for.</div>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);