import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';

class SpreadsheetView extends BaseView {

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

customElements.define('spreadsheet-view', SpreadsheetView);