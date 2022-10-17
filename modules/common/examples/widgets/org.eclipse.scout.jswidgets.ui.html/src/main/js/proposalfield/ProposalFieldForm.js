/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {Form, models} from '@eclipse-scout/core';
import ProposalFieldFormModel from './ProposalFieldFormModel';

export default class ProposalFieldForm extends Form {

  constructor() {
    super();
  }

  _jsonModel() {
    return models.get(ProposalFieldFormModel);
  }

  // noinspection DuplicatedCode
  _init(model) {
    super._init(model);

    this.proposalField = this.widget('ProposalField');

    this.widget('ProposalFieldPropertiesBox').setField(this.proposalField);
    this.widget('ValueFieldPropertiesBox').setField(this.proposalField);
    this.widget('FormFieldPropertiesBox').setField(this.proposalField);
    this.widget('GridDataBox').setField(this.proposalField);
    this.widget('WidgetActionsBox').setField(this.proposalField);
    this.widget('FormFieldActionsBox').setField(this.proposalField);
    this.widget('EventsTab').setField(this.proposalField);
  }
}
