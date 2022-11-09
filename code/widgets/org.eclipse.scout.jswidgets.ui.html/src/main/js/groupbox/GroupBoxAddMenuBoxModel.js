import {Button, CheckBoxField, GroupBox, NumberField, SmartField, StringField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.GroupBoxAddMenuBox',
  objectType: GroupBox,
  label: 'Add menu',
  expandable: true,
  gridColumnCount: 2,
  fields: [
    {
      id: 'LabelField',
      objectType: StringField,
      label: 'Label'
    },
    {
      id: 'MenuBarItemType',
      objectType: SmartField,
      lookupCall: 'jswidgets.MenuBarItemTypeLookupCall',
      label: 'Type'
    },
    {
      id: 'IconIdField',
      objectType: SmartField,
      lookupCall: 'jswidgets.IconIdLookupCall',
      label: 'Icon Id'
    },
    {
      id: 'HorizontalAlignmentField',
      objectType: NumberField,
      label: 'Horizontal Alignment'
    },
    {
      id: 'StackableField',
      objectType: CheckBoxField,
      label: 'Stackable',
      labelVisible: false
    },
    {
      id: 'ShrinkableField',
      objectType: CheckBoxField,
      label: 'Shrinkable',
      labelVisible: false
    },
    {
      id: 'CreateButton',
      objectType: Button,
      label: 'Add',
      processButton: false,
      keyStroke: 'ctrl-insert'
    }
  ]
});
