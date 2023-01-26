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
package org.eclipse.scout.contacts.events.client.person;

import org.eclipse.scout.contacts.client.person.PersonTablePage.Table;
import org.eclipse.scout.contacts.events.shared.person.PersonTablePageDataExtension;
import org.eclipse.scout.rt.client.dto.Data;
import org.eclipse.scout.rt.client.extension.ui.basic.table.AbstractTableExtension;
import org.eclipse.scout.rt.client.ui.basic.table.columns.AbstractLongColumn;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.text.TEXTS;

@Data(PersonTablePageDataExtension.class)
public class PersonTablePageExtension extends AbstractTableExtension<Table> {

  public PersonTablePageExtension(Table owner) {
    super(owner);
  }

  @Order(10)
  @ClassId("23b6527b-976c-4bf2-bee3-2ae906049b9e")
  public class EventsColumn extends AbstractLongColumn {

    @Override
    protected String getConfiguredHeaderText() {
      return TEXTS.get("Events");
    }

    @Override
    protected int getConfiguredWidth() {
      return 100;
    }
  }
}
