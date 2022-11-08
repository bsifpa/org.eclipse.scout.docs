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
import {GreenAreaPosition, SpeedoChartRenderer} from '@eclipse-scout/chart';

export default class SpeedoGreenAreaPositionLookupCall extends StaticLookupCall<GreenAreaPosition> {

  constructor() {
    super();
  }

  protected override _data(): any[] {
    return SpeedoGreenAreaPositionLookupCall.DATA;
  }

  static DATA = [
    [SpeedoChartRenderer.Position.LEFT, 'Left'],
    [SpeedoChartRenderer.Position.CENTER, 'Center'],
    [SpeedoChartRenderer.Position.RIGHT, 'Right']
  ];
}
