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
import {DisplayHint, Form, StaticLookupCall} from '@eclipse-scout/core';

export class FormDisplayHintLookupCall extends StaticLookupCall<DisplayHint> {

  constructor() {
    super();
  }

  protected override _data(): any[] {
    return FormDisplayHintLookupCall.DATA;
  }

  static DATA = [
    [Form.DisplayHint.DIALOG, 'dialog'],
    [Form.DisplayHint.VIEW, 'view'],
    [Form.DisplayHint.POPUP_WINDOW, 'popupWindow']
  ];
}
