import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <vaadin-text-field></vaadin-text-field>
    `
  }
}

window.customElements.define('my-app', MyApp);