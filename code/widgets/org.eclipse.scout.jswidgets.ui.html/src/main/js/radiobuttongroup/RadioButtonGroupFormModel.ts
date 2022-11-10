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
import {CheckBoxField, GroupBox, NumberField, RadioButton, RadioButtonGroup, SmartField, StringField, TabBox, TabItem} from '@eclipse-scout/core';
import {EventsTab, FormFieldActionsBox, FormFieldPropertiesBox, GridDataBox, LogicalGridLayoutConfigBox, ValueFieldPropertiesBox, WidgetActionsBox} from '../index';

export default () => ({
  id: 'jswidgets.RadioButtonGroupForm',
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
            id: 'RadioButtonGroup',
            objectType: RadioButtonGroup,
            label: 'Radio Button Group',
            gridDataHints: {
              h: 3,
              weightY: 0
            },
            fields: [
              {
                id: 'RadioButton1',
                objectType: RadioButton,
                label: 'Radio Button 1',
                radioValue: 1
              },
              {
                id: 'RadioButton2',
                objectType: RadioButton,
                label: 'Radio Button 2',
                radioValue: 2
              },
              {
                id: 'RadioButton3',
                objectType: RadioButton,
                label: 'Radio Button 3',
                radioValue: 3
              }
            ]
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
            label: 'Group Properties',
            fields: [
              {
                id: 'PropertiesBox',
                objectType: GroupBox,
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'SelectedButtonField',
                    objectType: SmartField,
                    label: 'Selected Button'
                  },
                  {
                    id: 'GridColumnCountField',
                    objectType: NumberField,
                    label: 'Grid Column Count'
                  }
                ]
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
              },
              {
                id: 'LayoutConfigBox',
                objectType: LogicalGridLayoutConfigBox,
                expanded: false
              }
            ]
          },
          {
            id: 'RadioButtonPropertiesTab',
            objectType: TabItem,
            label: 'Button Properties',
            fields: [
              {
                id: 'Button.TargetField',
                objectType: SmartField,
                label: 'Target'
              },
              {
                id: 'Button.PropertiesBox',
                objectType: GroupBox,
                label: 'Properties',
                fields: [
                  {
                    id: 'Button.SelectedField',
                    objectType: CheckBoxField,
                    label: 'Selected',
                    labelVisible: false
                  },
                  {
                    id: 'Button.WrapTextField',
                    objectType: CheckBoxField,
                    label: 'Wrap Text',
                    labelVisible: false
                  },
                  {
                    id: 'Button.KeyStrokeField',
                    objectType: StringField,
                    label: 'Key Stroke'
                  }
                ]
              },
              {
                id: 'Button.FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox
              },
              {
                id: 'Button.GridDataBox',
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
