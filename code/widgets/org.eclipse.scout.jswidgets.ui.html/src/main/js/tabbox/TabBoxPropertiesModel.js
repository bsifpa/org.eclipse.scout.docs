import {CheckBoxField, SmartField, TabItem} from '@eclipse-scout/core';
import {FormFieldPropertiesBox, GridDataBox} from '../index';
export default () => ({
  id: 'jswidgets.TabBoxProperties',
  objectType: TabItem,
  label: 'Tab Box Properties',
  fields: [
    {
      id: 'TabBoxProperties.SelectedTabField',
      objectType: SmartField,
      label: 'Selected Tab Item'
    },
    {
      id: 'TabBoxProperties.TabAreaStyleField',
      objectType: SmartField,
      lookupCall: 'jswidgets.TabAreaStyleLookupCall',
      label: 'Tab Area Style'
    },
    {
      id: 'TabBoxProperties.ShowMenus',
      objectType: CheckBoxField,
      label: 'Show Menus'
    },
    {
      id: 'TabBoxProperties.FormFieldPropertiesBox',
      objectType: FormFieldPropertiesBox
    },
    {
      id: 'TabBoxProperties.GridDataBox',
      objectType: GridDataBox,
      label: 'Grid Data Hints'
    }
  ]
});
