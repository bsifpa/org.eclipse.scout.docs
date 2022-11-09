import {GroupBox, NumberField, StringField, TabBox, TabItem} from '@eclipse-scout/core';
import {
  EventsTab,
  FormFieldActionsBox,
  FormFieldPropertiesBox,
  GridDataBox,
  ValueFieldPropertiesBox,
  WidgetActionsBox
} from '../index';

export default () => ({
  id: 'jswidgets.NumberFieldForm',
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
            id: 'NumberField',
            objectType: NumberField,
            label: '${textKey:NumberField}'
          },
          {
            id: 'CalculatorField',
            objectType: NumberField,
            label: '${textKey:Calculator}',
            tooltipText: '${textKey:NumberFieldCalculatorHint}'
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
                    id: 'MinValueField',
                    objectType: NumberField,
                    label: 'Min Value'
                  },
                  {
                    id: 'MaxValueField',
                    objectType: NumberField,
                    label: 'Max Value'
                  },
                  {
                    id: 'FormatField',
                    objectType: StringField,
                    label: 'Format'
                  },
                  {
                    id: 'MultiplierField',
                    objectType: NumberField,
                    label: 'Multiplier'
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
