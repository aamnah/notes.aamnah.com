---
title: Deploy a .NET Core API to AWS Elastic Beanstalk using Bitbucket Pipelines
date: 2019-10-23
---

- Artifacts
- Repository Variables
- Elastic Beanstalk Pipe

Here is my `bitbucket-pipelines.yml` file:

```yaml
# Code to be added later after it has been tested
```

- I'm automatically deploying the `production` environment as soon as a change is pushed to `master`
- I'm adding a step to be able to manually trigger a deploy to `staging` when `develop` branch is updated. This is because `develop` gets frequent changes and i don't want to run out of my build minutes (free plan has 50mins/month) by triggering a deploy every time.
- For all other branches (`feature/*` etc.) i'm adding the ability to manually trigger a build and not deploy anything. This is because i'm not expecting to build feature branches much as they are usually tested locally

### Notes on Pipelines
You can run an `after-script` in your `step` based on `BITBUCKET_EXIT_CODE` (0 = success, 1 = failed) 

Links
---

- [Deploy to AWS with Elastic Beanstalk](https://confluence.atlassian.com/bitbucket/deploy-to-amazon-aws-with-elastic-beanstalk-976772710.html)
- [Using artifacts in steps](https://confluence.atlassian.com/bitbucket/using-artifacts-in-steps-935389074.html)
- [Variables in pipelines](https://confluence.atlassian.com/bitbucket/variables-in-pipelines-794502608.html)
- [Visual Studio publish profiles for ASP.NET Core app deployment](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/visual-studio-publish-profiles?view=aspnetcore-3.0)
- [After scripts now available for Bitbucket Pipelines](https://bitbucket.org/blog/after-scripts-now-available-for-bitbucket-pipelines)