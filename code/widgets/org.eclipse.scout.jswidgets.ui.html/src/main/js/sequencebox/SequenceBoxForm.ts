/*
 * Copyright (c) 2010, 2023 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
import {Form, FormModel, InitModelOf, models} from '@eclipse-scout/core';
import {FormFieldLookupCall, SequenceBoxFormWidgetMap} from '../index';
import SequenceBoxFormModel from './SequenceBoxFormModel';

export class SequenceBoxForm extends Form {
  declare widgetMap: SequenceBoxFormWidgetMap;

  constructor() {
    super();
  }

  protected override _jsonModel(): FormModel {
    return models.get(SequenceBoxFormModel);
  }

  // noinspection DuplicatedCode
  protected override _init(model: InitModelOf<this>) {
    super._init(model);

    let sequenceBox = this.widget('SequenceBox');

    let formFieldPropertiesBox = this.widget('FormFieldPropertiesBox');
    formFieldPropertiesBox.setField(sequenceBox);
    this.widget('GridDataBox').setField(sequenceBox);
    this.widget('LayoutConfigBox').setField(sequenceBox);
    this.widget('WidgetActionsBox').setField(sequenceBox);
    this.widget('FormFieldActionsBox').setField(sequenceBox);
    this.widget('EventsTab').setField(sequenceBox);

    // FieldProperties tab
    let targetField = this.widget('Field.TargetField');
    targetField.setLookupCall(new FormFieldLookupCall(sequenceBox));
    targetField.on('propertyChange:value', event => {
      let targetField = event.newValue;

      let fieldPropertiesBox = this.widget('Field.FormFieldPropertiesBox');
      fieldPropertiesBox.setField(targetField);
      fieldPropertiesBox.setEnabled(!!targetField);

      let fieldGridDataBox = this.widget('Field.GridDataBox');
      fieldGridDataBox.setField(targetField);
      fieldGridDataBox.setEnabled(!!targetField);
    });
    targetField.setValue(sequenceBox.fields[0]);
  }
}
