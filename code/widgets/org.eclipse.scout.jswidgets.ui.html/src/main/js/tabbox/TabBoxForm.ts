/*
 * Copyright (c) 2010, 2023 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
import {Form, FormModel, InitModelOf, MessageBoxes, models} from '@eclipse-scout/core';
import TabBoxFormModel from './TabBoxFormModel';
import {TabBoxAddTabItemBox, TabBoxDeleteTabItemBox, TabBoxFormWidgetMap} from '../index';

export class TabBoxForm extends Form {
  declare widgetMap: TabBoxFormWidgetMap;

  dynamicTabCounter: number;
  addTabItemBox: TabBoxAddTabItemBox;
  deleteTabItemBox: TabBoxDeleteTabItemBox;

  constructor() {
    super();
    this.dynamicTabCounter = 0;
  }

  protected override _jsonModel(): FormModel {
    return models.get(TabBoxFormModel);
  }

  protected override _init(model: InitModelOf<this>) {
    super._init(model);
    let tabBox = this.widget('TabBox');

    this.widget('Properties.TabBox').setTabBox(tabBox);
    this.widget('WidgetActionsBox').setField(tabBox);
    this.widget('FormFieldActionsBox').setField(tabBox);
    this.widget('EventsTab').setField(tabBox);
    this.widget('Properties.TabItem').setTabBox(tabBox);
    this.addTabItemBox = this.widget('ActionBox.AddTabItem');
    this.addTabItemBox.setTabBox(tabBox);
    this.deleteTabItemBox = this.widget('ActionBox.DeleteTabItem');
    this.deleteTabItemBox.setTabBox(tabBox);

    let addTabMenu = this.widget('AddTabMenu');
    addTabMenu.on('action', () => {
      this.addTabItemBox.addTabItem();
    });

    let deleteMenu = this.widget('DeleteTabMenu');
    deleteMenu.on('action', () => {
      this.deleteTabItemBox.deleteTabItem(tabBox.selectedTab);
    });

    this.widget('SettingsMenu').on('action', () => {
      MessageBoxes.createOk(this)
        .withBody('This is a menu added to the Tab Box with horizontal alignment set to 1.')
        .buildAndOpen();
    });
  }
}
