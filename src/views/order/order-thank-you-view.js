
import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';

class OrderThankYouView extends BaseView {

  constructor() {
    super();
    this.property = 'World';
  }

  render() {
    return html `
      <div>Your order has now been placed. You will get a confirmation by e-mail. Thank you for ordering.</div>
    `;
  }

  collapseButton() {
  }
}

customElements.define('order-thank-you-view', OrderThankYouView);