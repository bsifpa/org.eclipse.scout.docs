import {GroupBox, NumberField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.SmartColumnPropertiesBox',
  objectType: GroupBox,
  gridColumnCount: 2,
  label: 'SmartColumn Properties',
  expandable: true,
  fields: [
    {
      id: 'BrowseMaxRowCountField',
      objectType: NumberField,
      label: 'Brows Max Row Count'
    }
  ]
});
