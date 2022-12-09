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
import '@eclipse-scout/svg';
import '@eclipse-scout/chart';
import '@eclipse-scout/demo-widgets';
import '@eclipse-scout/demo-widgets-heatmap';

new RemoteApp().init({
  bootstrap: {
    textsUrl: 'res/texts.json'
  }
});
