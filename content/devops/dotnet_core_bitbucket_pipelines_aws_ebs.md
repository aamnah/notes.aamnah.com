---
title: Deploy a .NET Core API to AWS Elastic Beanstalk using Bitbucket Pipelines
date: 2019-10-23
lastmod: 2019-10-24
---

- Artifacts
- Repository Variables
- Elastic Beanstalk Pipe
- IAM Role

Here is my `bitbucket-pipelines.yml` file:

```yaml
# Pipelines to be updated later after it has been tested
# more code will follow
image: microsoft/dotnet:sdk

pipelines:
  default:
    
    - step:
        name: Restore packages
        caches:
          - dotnetcore
        script: 
          - dotnet restore

    - step:
        name: Build the project
        caches:
          - dotnetcore
        script: 
          - dotnet build ${PROJECT_NAME}

    - step:
        name: Run Unit Tests
        trigger: manual
        caches:
          - dotnetcore
        script:
          - dotnet test ${PROJECT_UNITTESTS_NAME}
```

- I'm automatically deploying the `production` environment as soon as a change is pushed to `master`
- I'm adding a step to be able to manually trigger a deploy to `staging` when `develop` branch is updated. This is because `develop` gets frequent changes and i don't want to run out of my build minutes (free plan has 50mins/month) by triggering a deploy every time.
- For all other branches (`feature/*` etc.) i'm adding the ability to manually trigger a build and not deploy anything. This is because i'm not expecting to build feature branches much as they are usually tested locally
- The variables are all defined under _Settings > Repository variables_

### IAM Role

Create the following policy in IAM

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:Get*",
                "s3:CreateBucket",
                "sns:Unsubscribe",
                "elasticbeanstalk:CreateApplicationVersion",
                "cloudformation:CreateChangeSet",
                "autoscaling:*",
                "s3:List*",
                "cloudwatch:Describe*",
                "sns:OptInPhoneNumber",
                "sns:CheckIfPhoneNumberIsOptedOut",
                "cloudformation:ContinueUpdateRollback",
                "s3:GetObjectAcl",
                "sns:ListEndpointsByPlatformApplication",
                "sns:SetEndpointAttributes",
                "rds:Describe*",
                "elasticbeanstalk:DescribeEnvironments",
                "sns:DeletePlatformApplication",
                "sns:SetPlatformApplicationAttributes",
                "cloudformation:Estimate*",
                "cloudformation:UpdateStack",
                "elasticloadbalancing:Describe*",
                "sns:Subscribe",
                "sns:ConfirmSubscription",
                "s3:DeleteObject",
                "cloudformation:List*",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "cloudformation:ExecuteChangeSet",
                "sns:ListSubscriptionsByTopic",
                "sns:CreateTopic",
                "sns:GetPlatformApplicationAttributes",
                "cloudformation:SignalResource",
                "elasticbeanstalk:Describe*",
                "elasticbeanstalk:DeleteApplicationVersion",
                "elasticbeanstalk:CreateStorageLocation",
                "sns:GetSubscriptionAttributes",
                "sns:DeleteEndpoint",
                "s3:PutObject",
                "s3:GetObject",
                "sns:ListPhoneNumbersOptedOut",
                "sns:GetEndpointAttributes",
                "cloudformation:DeleteStack",
                "elasticbeanstalk:List*",
                "elasticbeanstalk:UpdateEnvironment",
                "sns:GetSMSAttributes",
                "cloudformation:CreateUploadBucket",
                "elasticbeanstalk:Check*",
                "cloudformation:CancelUpdateStack",
                "sns:DeleteTopic",
                "sns:ListTopics",
                "sns:CreatePlatformEndpoint",
                "cloudformation:UpdateTerminationProtection",
                "s3:ListBucket",
                "sns:SetTopicAttributes",
                "s3:GetBucketPolicy",
                "cloudformation:DeleteChangeSet",
                "elasticbeanstalk:RequestEnvironmentInfo",
                "sns:Publish",
                "cloudwatch:Get*",
                "s3:PutObjectAcl",
                "sns:GetTopicAttributes",
                "sns:CreatePlatformApplication",
                "sns:SetSMSAttributes",
                "cloudwatch:List*",
                "sns:ListSubscriptions",
                "cloudformation:Describe*",
                "cloudformation:PreviewStackUpdate",
                "ec2:Describe*",
                "sns:SetSubscriptionAttributes",
                "cloudformation:Validate*",
                "cloudformation:CreateStack",
                "s3:PutBucketPolicy",
                "elasticbeanstalk:RetrieveEnvironmentInfo",
                "s3:GetBucketLocation",
                "sns:ListPlatformApplications",
                "cloudformation:Get*"
            ],
            "Resource": "*"
        }
    ]
}
```

Create a user with Programmatic access and assign it the policy you just created (_Attach existing policies directly_)

### Notes on Pipelines
You can run an `after-script` in your `step` based on `BITBUCKET_EXIT_CODE` (0 = success, 1 = failed) 

Links
---

- [Deploy to AWS with Elastic Beanstalk](https://confluence.atlassian.com/bitbucket/deploy-to-amazon-aws-with-elastic-beanstalk-976772710.html)
- [Using artifacts in steps](https://confluence.atlassian.com/bitbucket/using-artifacts-in-steps-935389074.html)
- [Variables in pipelines](https://confluence.atlassian.com/bitbucket/variables-in-pipelines-794502608.html)
- [Visual Studio publish profiles for ASP.NET Core app deployment](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/visual-studio-publish-profiles?view=aspnetcore-3.0)
- [After scripts now available for Bitbucket Pipelines](https://bitbucket.org/blog/after-scripts-now-available-for-bitbucket-pipelines)