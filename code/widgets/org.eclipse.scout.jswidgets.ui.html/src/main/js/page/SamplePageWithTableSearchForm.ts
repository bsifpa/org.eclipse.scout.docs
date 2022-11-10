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
import {Form, models, Table} from '@eclipse-scout/core';
import SamplePageWithTableSearchFormModel from './SamplePageWithTableSearchFormModel';

export class SamplePageWithTableSearchForm extends Form {

  constructor() {
    super();
  }

  _init(model) {
    super._init(model);
    this._initListeners();
  }

  _jsonModel() {
    return models.get(SamplePageWithTableSearchFormModel);
  }

  _initListeners() {
    let parentTable = this.parent.table;
    this.widget('SearchButton').on('action', parentTable.reload.bind(parentTable), Table.ReloadReason.SEARCH);
  }

  exportData() {
    return {
      stringField: this.widget('StringField').value
    };
  }
}
