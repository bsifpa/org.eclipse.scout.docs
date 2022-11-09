/*
 * Copyright (c) 2022 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {StaticLookupCall} from '@eclipse-scout/core';

export class FormFieldMenuLookupCall extends StaticLookupCall {

  constructor(formField) {
    super();
    this._rebuildDataHandler = this._rebuildData.bind(this);
    this.data = [];
    this.setFormField(formField);
  }

  _data() {
    return this.data;
  }

  setFormField(formField) {
    if (this.formField) {
      this.formField.off('propertyChange:menus', this._rebuildDataHandler);
      this.formField.menus.forEach(function(menu) {
        menu.off('propertyChange:text', this._rebuildDataHandler);
      }, this);
    }
    this.formField = formField;
    this.formField.on('propertyChange:menus', this._rebuildDataHandler);
    this.formField.menus.forEach(function(menu) {
      menu.on('propertyChange:text', this._rebuildDataHandler);
    }, this);
    this._rebuildData();
  }

  _rebuildData() {
    this.data = this.formField.menus.map(menu => {
      return [menu, menu.text];
    });
  }
}
