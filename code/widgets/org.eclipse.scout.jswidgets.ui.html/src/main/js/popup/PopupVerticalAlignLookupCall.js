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
import {Popup, StaticLookupCall} from '@eclipse-scout/core';

export class PopupVerticalAlignLookupCall extends StaticLookupCall {

  constructor() {
    super();
  }

  _data() {
    return PopupVerticalAlignLookupCall.DATA;
  }

  static DATA = [
    [Popup.Alignment.TOP, 'top'],
    [Popup.Alignment.TOPEDGE, 'topedge'],
    [Popup.Alignment.CENTER, 'center'],
    [Popup.Alignment.BOTTOM, 'bottom'],
    [Popup.Alignment.BOTTOMEDGE, 'bottomedge']
  ];
}
