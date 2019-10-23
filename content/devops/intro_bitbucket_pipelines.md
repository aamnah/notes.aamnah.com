---
title: 'Bitbucket Pipelines: Overview and Notes'
date: 2019-10-23
---

So far i have used pipelines in 2 different projects. One is a .NET Core API that gets deployed to AWS Elastic Beanstalk and the other is a React Native app that gets deployed to Expo.

Here's the **tl;dr**

- Every build is run inside a Docker container. You can use any `image` you want, and you can have seperate `image`s for separate steps in your pipeline.
- You get 50 mins per month with the free Bitbucket plan. Use caches and manual triggers to save up on build times.
- While commands like `dotnet build` and `npm install` may not require installing your packages from scratch, it is recommended to run `dotnet restore` and `npm ci` to do fresh installs of packages in CI/CD pipelines


### Overview

Here's a quick overview of most of the stuff i had to look up.

- You can:
  - Run different steps for different branches
  - Manually or automatically `trigger` a deploy
  - Use `pipe`s to use 3rd-party integration. For example: send a notification to Slack channel, deploy to AWS Elastic Beanstalk, transfer files to S3 etc.
  - Use [variables][variables] in your scripts and save their values in settings and not directly inside the pipeline.
  - Run individual commands inside a `script` or you can run a pre-written script. For example `./cleanup.sh` 
  - It is possible to figure out if a `script` was [successful or not][after-script] by using `$BITBUCKET_EXIT_CODE` (0 = success, 1 = failed)  in the `after-script`

- You save your configuration, written in YAML, in a file called `bitbucket-pipelines.yml` in the root of your repo. Pipelines, Deployments, and Repository variables will not work until you have that file in place. Bitbucket will automatically pick it up once it's there. Easiest way to get started is to generate a config file online by going to Pipelines in Bitbucket.
- The [configuration][[configuration] page is elaborate and has examples for most of the stuff you need
- You can have [variables][variables] in your pipelines. Those are saved under _Settings > Repository varaibles_, and referenced as `$SECRET_KEY` or `${SECRET_KEY}`.
- You can [save dependency caches][caching] to speed up build times. There are a bunch of pre-defined caches available (e.g: `node`, `dotnetcore` etc.). You can also define custom caches under `definitions` (e.g. `node_modules`)
- If you provide a `deployment` value, the builds will show on the [Deployments][deployments] page for that enviornment. You can setup custom deployment environments under _Settings > Deployments_. By default `production`, `staging` and `test` are available


[configuration]: https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html
[variables]: https://confluence.atlassian.com/bitbucket/variables-in-pipelines-794502608.html
[caching]: https://confluence.atlassian.com/bitbucket/caching-dependencies-895552876.html
[deployments]: https://confluence.atlassian.com/bitbucket/set-up-bitbucket-deployments-968683907.html
[after-script]: (https://bitbucket.org/blog/after-scripts-now-available-for-bitbucket-pipelines)