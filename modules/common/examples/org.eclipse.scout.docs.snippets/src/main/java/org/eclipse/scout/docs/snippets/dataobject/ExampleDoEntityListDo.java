/*
 * Copyright (c) 2021 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.docs.snippets.dataobject;

import java.util.Collection;
import java.util.List;

import javax.annotation.Generated;

import org.eclipse.scout.rt.dataobject.DoEntity;
import org.eclipse.scout.rt.dataobject.DoList;
import org.eclipse.scout.rt.dataobject.DoValue;

//tag::class[]
public class ExampleDoEntityListDo extends DoEntity {
  public DoList<AbstractExampleEntityDo> listAttribute() {
    return doList("listAttribute");
  }

  public DoValue<AbstractExampleEntityDo> singleAttribute() {
    return doValue("singleAttribute");
  }

  /* **************************************************************************
   * GENERATED CONVENIENCE METHODS
   * *************************************************************************/

  @Generated("DoConvenienceMethodsGenerator")
  public ExampleDoEntityListDo withListAttribute(Collection<? extends AbstractExampleEntityDo> listAttribute) {
    listAttribute().updateAll(listAttribute);
    return this;
  }

  @Generated("DoConvenienceMethodsGenerator")
  public ExampleDoEntityListDo withListAttribute(AbstractExampleEntityDo... listAttribute) {
    listAttribute().updateAll(listAttribute);
    return this;
  }

  @Generated("DoConvenienceMethodsGenerator")
  public List<AbstractExampleEntityDo> getListAttribute() {
    return listAttribute().get();
  }

  @Generated("DoConvenienceMethodsGenerator")
  public ExampleDoEntityListDo withSingleAttribute(AbstractExampleEntityDo singleAttribute) {
    singleAttribute().set(singleAttribute);
    return this;
  }

  @Generated("DoConvenienceMethodsGenerator")
  public AbstractExampleEntityDo getSingleAttribute() {
    return singleAttribute().get();
  }
}
//end::class[]
