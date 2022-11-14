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
import {GroupBox, Menu, SmartField, StatusMenuMapping, TabBox, TabItem} from '@eclipse-scout/core';
import {EventsTab, FormFieldActionsBox, FormFieldPropertiesBox, GridDataBox, SmartFieldPropertiesBox, ValueFieldPropertiesBox, WidgetActionsBox} from '../index';

export default () => ({
  id: 'jswidgets.SmartFieldForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    fields: [
      {
        id: 'DetailBox',
        objectType: GroupBox,
        gridColumnCount: 1,
        fields: [
          {
            id: 'SmartField',
            objectType: SmartField,
            lookupCall: 'jswidgets.LocaleLookupCall',
            label: 'Smart Field',
            menus: [
              {
                id: 'NewLanguageMenu',
                text: '${textKey:NewLanguageMenu}',
                objectType: Menu
              }
            ],
            statusMenuMappings: [
              {
                id: 'NewLanguageMenuStatusMapping',
                objectType: StatusMenuMapping,
                menu: 'NewLanguageMenu',
                codes: [
                  2
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: TabBox,
        cssClass: 'jswidgets-configuration',
        gridColumnCount: 1,
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: TabItem,
            label: 'Properties',
            fields: [
              {
                id: 'SmartFieldPropertiesBox',
                objectType: SmartFieldPropertiesBox,
                label: 'Smart Field Properties',
                labelVisible: false,
                borderVisible: false
              },
              {
                id: 'ValueFieldPropertiesBox',
                objectType: ValueFieldPropertiesBox
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox
              },
              {
                id: 'GridDataBox',
                objectType: GridDataBox,
                label: 'Grid Data Hints'
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: TabItem,
            label: 'Actions',
            fields: [
              {
                id: 'FormFieldActionsBox',
                objectType: FormFieldActionsBox
              },
              {
                id: 'WidgetActionsBox',
                objectType: WidgetActionsBox
              }
            ]
          },
          {
            id: 'EventsTab',
            objectType: EventsTab
          }
        ]
      }
    ]
  }
});
