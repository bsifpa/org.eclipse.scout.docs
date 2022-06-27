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

const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');
module.exports = (env, args) => {
  args.resDirArray = [];
  const config = baseConfig(env, args);
  config.entry = {
    'contrib': './src/main/js/Contribution'
  };
  config.target = 'es6';
  config.output.library = {
    type: 'module'
  };
  config.output.chunkFormat = 'module';
  config.experiments = {
    outputModule: true
  };
  config.externalsType = 'window';
  Object.assign(config.externals, {
    '@eclipse-scout/core': 'scout'
  });

  return config;
};
