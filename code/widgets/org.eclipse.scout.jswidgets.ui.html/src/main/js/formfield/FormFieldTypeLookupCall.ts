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
import {StaticLookupCall} from '@eclipse-scout/core';

export class FormFieldTypeLookupCall extends StaticLookupCall<string> {

  constructor() {
    super();
  }

  protected override _data(): any[] {
    return FormFieldTypeLookupCall.DATA;
  }

  static DATA = [
    ['StringField', 'String Field'],
    ['NumberField', 'Number Field'],
    ['DateField', 'Date Field'],
    ['CheckBoxField', 'Checkbox'],
    ['LabelField', 'Label Field']
  ];
}
