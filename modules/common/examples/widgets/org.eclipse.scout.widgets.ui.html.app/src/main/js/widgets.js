/*
 * Copyright (c) 2019 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {RemoteApp} from '@eclipse-scout/core';
import * as ref0 from '@eclipse-scout/svg';
import * as ref1 from '@eclipse-scout/chart';
import * as ref2 from '@eclipse-scout/demo-widgets';
import * as ref3 from '@eclipse-scout/demo-widgets-heatmap';

Object.assign({}, ref0, ref1, ref2, ref3); // workaround so that the imports are not unused

new RemoteApp().init({
  bootstrap: {
    textsUrl: 'res/texts.json'
  }
});
