```javascript
'use strict';

// Whitelist of trusted plugin paths
const TRUSTED_PLUGINS = {
  'conditionallyCheckColorNamed': './plugin-conditionally-check-color-named.cjs',
  'warnAboutFoo': './plugin-warn-about-foo.cjs'
};

// Validate and load plugins from trusted paths only
const conditionallyCheckColorNamed = require(TRUSTED_PLUGINS.conditionallyCheckColorNamed);
const warnAboutFoo = require(TRUSTED_PLUGINS.warnAboutFoo);

// Only export validated plugins
module.exports = [conditionallyCheckColorNamed, warnAboutFoo];
```