import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-rich-text-editor';

class ContentView extends BaseView {

  constructor() {
    super();
    this.items = [
      {name: 'Home', id: 'home', created: '2018-05-20 18:52', modified: '2018-05-20 19:03',
        content: '[{\"insert\":\"LogiTech SonarPlugs 3000\"},{\"attributes\":{\"align\":\"center\",\"header\":1},\"insert\":\"\\n\"},{\"insert\":\"Let your vibes resonate in your bones\"},{\"attributes\":{\"align\":\"center\",\"header\":2},\"insert\":\"\\n\"},{\"insert\":\"The new SonarPlugs 3000 from LogiTech is unlike anything you have experienced so far. Experience music in a new level of immersion never heard before. Experience the crystal clear sound not reproducible with other technology.\\nBuy now at selected resellers for $58.90!\\n\"}]',
        html: '<h1 style="text-align: center">LogiTech SonarPlugs 3000</h1><h2 style="text-align: center">Let your vibes resonate in your bones</h2><p>The new SonarPlugs 3000 from LogiTech is unlike anything you have experienced so far. Experience music in a new level of immersion never heard before. Experience the crystal clear sound not reproducible with other technology.</p><p>Buy now at selected resellers for $58.90!</p>'
      },
      {name: 'Product', id: 'product', created: '2018-03-15 12:48', modified: '2018-03-15 12:48', 
        content: "[{\"attributes\":{\"bold\":true},\"insert\":\"Gandalf the gray foo bar\"},{\"insert\":\"\\n\"}]",
        html: ''},
      {name: 'Who are we?', id: 'company', created: '2018-08-12 22:14', modified: '2018-08-13 09:42', content: '[{\"attributes\":{\"bold\":true},\"insert\":\"Gandalf\"}]'},
      {name: 'Mission', id: 'mission', created: '2018-12-05 04:20', modified: '2019-01-02 10:20', content: '[{\"attributes\":{\"bold\":true},\"insert\":\"Gandalf\"}]'},
      {name: 'Contact us', id: 'contact', created: '2019-02-08 19:01', modified: '2019-02-08 19:01', content: '[{\"attributes\":{\"bold\":true},\"insert\":\"Gandalf\"}]'},
    ];
    this.item = null;
    this.selectedItems = [];
    this.htmlValue = null;
  }

  render() {
    return html `
      <style>
        :host {
          height:100%;
          display:flex;
          flex-direction: column; 
        }

        #list {
          height:auto;
          flex:1;
        }

        #list.selected {
          height:150px;
          flex: none;
        }

        #form {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        #form[hidden] {
          display:none;
        }

        #fields {
          display:flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        #view {
          flex: 1;
          display:flex;
          flex-direction: row;
          padding: 16px 0;
        }

        #editor {
          flex:1;
          margin-right:8px;
        }

        #preview {
          flex:1;
          margin-left:8px;
          border: 1px solid var(--lumo-contrast-20pct);
        }

        #name, #id, #created {
          margin-right: 16px;
        }

        #buttons {
          display:flex;
          flex-direction:row;
          justify-content: flex-end;
        }

        #discard {
          margin-right:16px;
        }
      </style>
      <h1>Content management</h1>
      <vaadin-grid id='list' .items=${this.items} @active-item-changed=${this.activeItem}>
        <vaadin-grid-column path='name' header='Content name'></vaadin-grid-column>
        <vaadin-grid-column path='id' header='Content id'></vaadin-grid-column>
        <vaadin-grid-column path='created' header='Created on'></vaadin-grid-column>
        <vaadin-grid-column path='modified' header='Modified on'></vaadin-grid-column>
      </vaadin-grid>
      <div id='form' hidden>
        <div id='fields'>
          <vaadin-text-field id='name' label='Content name' value='${this.item ? this.item.name : null}'></vaadin-text-field>
          <vaadin-text-field id='id' label='Identifier' value='${this.item ? this.item.id : null}'></vaadin-text-field>
          <vaadin-text-field id='created' label='Created on' readonly value='${this.item ? this.item.created : null}'></vaadin-text-field>
          <vaadin-text-field id='modified' label='Modified on' readonly value='${this.item ? this.item.modified : null}'></vaadin-text-field>
        </div>
        <div id='view'>
          <vaadin-rich-text-editor id='editor' value='${this.item ? this.item.content : ''}' @value-changed='${this.editorUpdated}'></vaadin-rich-text-editor>
          <div id='preview'></div>
        </div>
        <div id='buttons'>
          <vaadin-button id='discard' @click=${this.discard}>Discard</vaadin-button>
          <vaadin-button id='save' theme='primary'  @click=${this.save}>Save</vaadin-button>
        </div>
      </div>
    `;
  }

  editorUpdated(event) {
    this.htmlValue = this.shadowRoot.getElementById('editor').htmlValue;
    this.shadowRoot.getElementById('preview').innerHTML = this.htmlValue;
  }

  activeItem(event) {
    const item = event.detail.value;
    this.updateEditorStatus(item);
  }

  updateEditorStatus(item) {
    this.item = item;
    this.shadowRoot.getElementById('list').selectedItems = item ? [this.item] : [];
    this.requestUpdate();
    if (item) {
      this.shadowRoot.getElementById('form').removeAttribute('hidden');
      this.shadowRoot.getElementById('list').classList.add('selected');
      this.shadowRoot.getElementById('list')._scrollToIndex(this.items.indexOf(item));
    } else {
      this.shadowRoot.getElementById('form').setAttribute('hidden', '');
      this.shadowRoot.getElementById('list').classList.remove('selected');
    }
  }

  discard() {
    this.updateEditorStatus([]);
  }

  save() {
    const editor = this.shadowRoot.getElementById('editor');
    const value = JSON.stringify(editor.value);
    const html = editor.htmlValue;
    console.log(value);
    console.log(html);
    this.updateEditorStatus(null);
  }
}

customElements.define('content-view', ContentView);