/*
 * Copyright (c) 2010, 2023 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
import TagFieldFormModel from './TagFieldFormModel';
import {TagFieldFormWidgetMap} from '../index';
import {DesktopNotification, Form, FormModel, InitModelOf, models, scout, Status, TagBarTagClickEvent} from '@eclipse-scout/core';

export class TagFieldForm extends Form {
  declare widgetMap: TagFieldFormWidgetMap;

  constructor() {
    super();
  }

  protected override _jsonModel(): FormModel {
    return models.get(TagFieldFormModel);
  }

  // noinspection DuplicatedCode
  protected override _init(model: InitModelOf<this>) {
    super._init(model);

    let tagField = this.widget('TagField');
    tagField.tagBar.on('tagClick', this._onTagClick.bind(this));

    let clickableField = this.widget('ClickableField');
    clickableField.setValue(tagField.tagBar.clickable);
    clickableField.on('propertyChange:value', event => tagField.tagBar.setClickable(event.newValue));

    let enabledField = this.widget('EnabledField');
    enabledField.setValue(tagField.tagBar.enabled);
    enabledField.on('propertyChange:value', event => tagField.tagBar.setEnabled(event.newValue));

    this.widget('ValueField').setEnabled(true);
    this.widget('ValueFieldPropertiesBox').parseValue = newValue => {
      if (!newValue) {
        return newValue;
      }
      return newValue.split(',');
    };
    this.widget('ValueFieldPropertiesBox').setField(tagField);
    this.widget('FormFieldPropertiesBox').setField(tagField);
    this.widget('GridDataBox').setField(tagField);
    this.widget('WidgetActionsBox').setField(tagField);
    this.widget('FormFieldActionsBox').setField(tagField);
    this.widget('EventsTab').setField(tagField);
  }

  protected _onTagClick(event: TagBarTagClickEvent) {
    scout.create(DesktopNotification, {
      parent: this,
      duration: 7000,
      status: {
        severity: Status.Severity.OK,
        message: this.session.text('TagClickMessage', event.tag)
      }
    }).show();
  }
}
