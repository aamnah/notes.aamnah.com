---
title: Deploy to separate Expo release channels based on Bitbucket feature branches
date: 2020-02-26
lastmod: 2020-02-27
---

What i need is to test multiple feature branches at the same time by deploying it to Expo. And i can't be bothered with doing that manually.

- `$BITBUCKET_BRANCH` is [available](https://confluence.atlassian.com/bitbucket/variables-in-pipelines-794502608.html), but it can not be used in custom pipelines (triggered from a commit) or used against tags. If you use it under the `branches:` block, it'll fail, because those are run on commits. 
- You can only use it in a step that is manually triggered, inside a custom pipeline. Otherwise `$BITBUCKET_BRANCH` is not set. It outputs nothing in `default:` pipeline or `branches:`  pipelines
- First step in a pipeline can not be [manually triggered](https://confluence.atlassian.com/bitbucket/run-pipelines-manually-861242583.html)
- A trigger can only be executed if the previous step has successfully completed
- If you use **git-flow** and have `/` in branch names (e.g. `feature/profile`), it will fail to work. Because _Release channel name can only contain lowercase letters, numbers and special characters . _ and -_

Here's working code

```yaml
# This is the build configuration for React Native Expo project using Bitbucket Pipelines.
# Configuration options: https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html
# Only use spaces to indent your .yml configuration.
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
---
image: node:latest

definitions:
  caches: # configure caches to speed up builds. more: https://confluence.atlassian.com/bitbucket/caching-dependencies-895552876.html
    npm: ~/.npm

pipelines: # contains all your pipeline definitions. you can define multiple pipelines in the configuration file

  custom:
    Deploy to Expo:
        - step:
            name: Getting started
            script:
              - echo "--- Added this step just so i could manually trigger the next step (first step can not be manual) ---"
              - echo "--- Run the next step in Pipeline! ---"
        - step:
            name: Deploy to Expo
            trigger: manual
            deployment: feature
            caches:
              - npm
            script:
              - unset NPM_CONFIG_USER
              - npm ci
              - npm i -g --unsafe-perm expo-cli
              - echo -e "Deploying ${BITBUCKET_BRANCH}" to Expo
              - expo login -u ${EXPO_USERNAME} -p ${EXPO_PASSWORD} # Use variables defined in Repository Settings
              - expo publish --non-interactive --clear --release-channel ${BITBUCKET_BRANCH}
              # WOULDN'T WORK if you have of / in branch name (e.g. feature/profile. if using gitflow there'll always be a /)
              # Maybe use regex to replace it? 
```