import {GroupBox, SequenceBox, SmartField, StringField, TabBox, TabItem} from '@eclipse-scout/core';
import {
  EventsTab,
  FormFieldActionsBox,
  FormFieldPropertiesBox,
  GridDataBox,
  LogicalGridLayoutConfigBox,
  WidgetActionsBox
} from '../index';

export default () => ({
  id: 'jswidgets.SequenceBoxForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    fields: [
      {
        id: 'TopBox',
        objectType: GroupBox,
        fields: [
          {
            id: 'SequenceBox',
            objectType: SequenceBox,
            label: 'Sequence Box',
            gridDataHints: {
              w: 2
            },
            fields: [
              {
                id: 'StringField1',
                objectType: StringField,
                label: 'String Field 1'
              },
              {
                id: 'StringField2',
                objectType: StringField,
                label: 'String Field 2'
              },
              {
                id: 'StringField3',
                objectType: StringField,
                label: 'String Field 3'
              },
              {
                id: 'StringField4',
                objectType: StringField,
                label: 'String Field 4'
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
                label: 'Sequence Box Properties',
                fields: [
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
                id: 'FieldPropertiesTab',
                objectType: TabItem,
                label: 'Field Properties',
                fields: [
                  {
                    id: 'Field.TargetField',
                    objectType: SmartField,
                    label: 'Target'
                  },
                  {
                    id: 'Field.FormFieldPropertiesBox',
                    objectType: FormFieldPropertiesBox
                  },
                  {
                    id: 'Field.GridDataBox',
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
    ]
  }
});
