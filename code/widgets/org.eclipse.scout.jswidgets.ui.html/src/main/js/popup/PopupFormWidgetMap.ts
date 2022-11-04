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
import {Button, CheckBoxField, GroupBox, PopupAlignment, SmartField, StringField, TabItem} from '@eclipse-scout/core';
import {ConfigurationBox, EventsTab, EventsTabWidgetMap, WidgetActionsBox, WidgetActionsBoxWidgetMap, WidgetPopupPropertiesBox, WidgetPopupPropertiesBoxWidgetMap} from '../index';

export type PopupFormWidgetMap = {
  MainBox: GroupBox;
  DetailBox: GroupBox;
  OpenPopupButton: Button;
  ConfigurationBox: ConfigurationBox;
  PropertiesTab: TabItem;
  PropertiesBox: GroupBox;
  UseButtonAsAnchorField: CheckBoxField;
  AnchorBoundsField: StringField;
  ModalField: CheckBoxField;
  CloseOnAnchorMouseDownField: CheckBoxField;
  CloseOnMouseDownOutsideField: CheckBoxField;
  CloseOnOtherPopupOpenField: CheckBoxField;
  HorizontalSwitchField: CheckBoxField;
  VerticalSwitchField: CheckBoxField;
  TrimWidthField: CheckBoxField;
  TrimHeightField: CheckBoxField;
  WithArrowField: CheckBoxField;
  WithGlassPaneField: CheckBoxField;
  HorizontalAlignmentField: SmartField<PopupAlignment>;
  VerticalAlignmentField: SmartField<PopupAlignment>;
  WidgetPopupPropertiesBox: WidgetPopupPropertiesBox;
  ActionsTab: TabItem;
  WidgetActionsBox: WidgetActionsBox;
  EventsTab: EventsTab;
} & WidgetPopupPropertiesBoxWidgetMap & WidgetActionsBoxWidgetMap & EventsTabWidgetMap;
