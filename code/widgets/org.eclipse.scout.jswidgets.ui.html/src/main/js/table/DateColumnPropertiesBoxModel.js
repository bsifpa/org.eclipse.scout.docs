import {CheckBoxField, GroupBox, StringField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.DateColumnPropertiesBox',
  objectType: GroupBox,
  gridColumnCount: 2,
  label: 'DateColumn Properties',
  expandable: true,
  fields: [
    {
      id: 'FormatField',
      objectType: StringField,
      label: 'Format'
    },
    {
      id: 'GroupFormatField',
      objectType: StringField,
      label: 'Group Format'
    },
    {
      id: 'HasDateField',
      objectType: CheckBoxField,
      label: 'Has Date',
      labelVisible: false
    },
    {
      id: 'HasTimeField',
      objectType: CheckBoxField,
      label: 'Has Time',
      labelVisible: false
    }
  ]
});
