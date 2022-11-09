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
import {StaticLookupCall, Widget} from '@eclipse-scout/core';

export class DisabledStyleLookupCall extends StaticLookupCall {

  constructor() {
    super();
  }

  _data() {
    return DisabledStyleLookupCall.DATA;
  }

  static DATA = [
    [Widget.DisabledStyle.DEFAULT, 'default'],
    [Widget.DisabledStyle.READ_ONLY, 'read only']
  ];
}
