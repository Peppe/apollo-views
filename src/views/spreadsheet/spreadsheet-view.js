import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid-pro';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';

class SpreadsheetView extends BaseView {

  constructor() {
    super();
    this.items = [
      {row: '1'},
      {row: '2'},
      {row: '3'},
      {row: '4'},
      {row: '5'},
      {row: '6'},
      {row: '7'},
      {row: '8'},
      {row: '9'},
      {row: '10'},
      {row: '11'},
      {row: '12'},
      {row: '13'},
      {row: '14'},
      {row: '15'},
      {row: '16'},
      {row: '17'},
      {row: '18'},
      {row: '19'},
      {row: '20'},
      {row: '21'},
      {row: '22'},
      {row: '23'},
      {row: '24'},
      {row: '25'},
      {row: '26'},
      {row: '27'},
      {row: '28'},
      {row: '29'},
      {row: '30'},
      {row: '31'},
      {row: '32'},
      {row: '33'},
      {row: '34'},
      {row: '35'},
      {row: '36'},
      {row: '37'},
      {row: '38'},
      {row: '39'},
      {row: '40'},
      {row: '41'},
      {row: '42'},
      {row: '43'},
      {row: '44'},
      {row: '45'},
      {row: '46'},
      {row: '47'},
      {row: '48'},
      {row: '49'},
      {row: '50'}
    ];
  }

  render() {
    return html `
      <style>
        :host {
          height:100%;
          display: flex;
          flex-direction: column;
        }

        #grid {
          flex: 1;
        }
      </style>
      <h1>Spreadsheet</h1>
      <vaadin-grid-pro id="grid" .items=${this.items} theme="compact column-borders">
        <vaadin-grid-column path="row" header=""></vaadin-grid-column>
        <vaadin-grid-pro-edit-column path="" header="A"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="B"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="C"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="D"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="E"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="F"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="G"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="H"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="I"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="J"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="K"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="" header="L"></vaadin-grid-pro-edit-column>
        
      </vaadin-grid-pro>
    `;
  }

  collapseButton() {
  }
}

customElements.define('spreadsheet-view', SpreadsheetView);