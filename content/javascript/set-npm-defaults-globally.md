---
title: Set `npm init` defaults globally
tags: ['javascript', 'node', 'npm']
date: 2017-02-20
---

You can either edit the global configuration file for `npm`:

```bash
npm config edit --global
```

(it'll open the file in Vim)

Or, you can set the defaults one by one:

```bash
# npm config set <key> <value> [-g|--global]
npm config set -g init-author-name 'Aamnah'
npm config set -g init-author-email 'hello@aamnah.com'
npm config set -g init-author-url 'http://aamnah.com'
npm config set -g init-license 'CC-BY-SA-4.0'
npm config set -g init-version '0.1.0'
```

You can also use the `npm init` command with the `y` flag to initiate a project with the default values without prompting you for details.

```bash
npm init -y
```

Links
---
- [npm-config](https://docs.npmjs.com/cli/config)
