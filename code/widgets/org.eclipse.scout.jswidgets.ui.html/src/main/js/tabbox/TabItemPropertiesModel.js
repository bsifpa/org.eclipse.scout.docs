import {CheckBoxField, SmartField, TabItem} from '@eclipse-scout/core';
import {FormFieldPropertiesBox, GridDataBox, GroupBoxPropertiesBox} from '../index';
export default () => ({
  id: 'jswidgets.TabItemProperties',
  objectType: TabItem,
  label: 'Tab Item Properties',
  fields: [
    {
      id: 'TabItemProperties.TargetField',
      objectType: SmartField,
      label: 'Target Item'
    },
    {
      id: 'TabItemProperties.MarkedField',
      objectType: CheckBoxField,
      label: 'Marked',
      labelVisible: false
    },
    {
      id: 'TabItemProperties.GroupBoxPropertiesBox',
      objectType: GroupBoxPropertiesBox
    },
    {
      id: 'TabItemProperties.FormFieldPropertiesBox',
      objectType: FormFieldPropertiesBox
    },
    {
      id: 'TabItemProperties.GridDataBox',
      objectType: GridDataBox,
      label: 'Grid Data Hints'
    }
  ]
});
