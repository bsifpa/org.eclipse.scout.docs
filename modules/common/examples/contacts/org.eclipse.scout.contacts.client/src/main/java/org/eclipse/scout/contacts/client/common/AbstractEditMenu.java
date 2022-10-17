/*
 * Copyright (c) 2015 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.contacts.client.common;

import org.eclipse.scout.contacts.client.Icons;
import org.eclipse.scout.rt.client.ui.action.menu.AbstractMenu;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.text.TEXTS;

@ClassId("4b0e3cbd-94db-482e-962d-89c4c9bf2e67")
public class AbstractEditMenu extends AbstractMenu {

  @Override
  protected String getConfiguredText() {
    return TEXTS.get("Edit");
  }

  @Override
  protected String getConfiguredIconId() {
    return Icons.Pencil;
  }

  @Override
  protected String getConfiguredKeyStroke() {
    return "alt-e";
  }
}
