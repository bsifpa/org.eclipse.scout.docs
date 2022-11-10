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
import {CheckBoxField, GroupBox, Mode, ModeSelector, ModeSelectorField, SmartField, StringField, TabBox, TabItem} from '@eclipse-scout/core';
import {EventsTab, FormFieldActionsBox, FormFieldPropertiesBox, GridDataBox, WidgetActionsBox} from '../index';

export default () => ({
  id: 'jswidgets.ModeSelectorForm',
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
            id: 'ModeSelectorField',
            objectType: ModeSelectorField,
            labelVisible: false,
            statusVisible: false,
            modeSelector: {
              id: 'ModeSelector',
              objectType: ModeSelector,
              selectedMode: 'Mode1',
              modes: [{
                id: 'Mode1',
                objectType: Mode,
                text: 'Mode 1'
              }, {
                id: 'Mode2',
                objectType: Mode,
                text: 'Mode 2'
              }, {
                id: 'Mode3',
                objectType: Mode,
                text: 'Mode 3'
              }]
            }
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: TabBox,
        cssClass: 'jswidgets-configuration',
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: TabItem,
            label: 'Properties',
            fields: [
              {
                id: 'PropertiesBox',
                objectType: GroupBox,
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'TargetField',
                    objectType: SmartField,
                    label: 'Target'
                  },
                  {
                    id: 'TextField',
                    objectType: StringField,
                    label: 'Text'
                  },
                  {
                    id: 'IconIdField',
                    objectType: SmartField,
                    lookupCall: 'jswidgets.IconIdLookupCall',
                    label: 'Icon Id'
                  },
                  {
                    id: 'SelectedField',
                    objectType: CheckBoxField,
                    label: 'Selected',
                    labelVisible: false
                  },
                  {
                    id: 'EnabledField',
                    objectType: CheckBoxField,
                    label: 'Enabled',
                    labelVisible: false
                  },
                  {
                    id: 'VisibleField',
                    objectType: CheckBoxField,
                    label: 'Visible',
                    labelVisible: false
                  }
                ]
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
