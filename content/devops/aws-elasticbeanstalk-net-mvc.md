---
title: Deploying a .NET MVC app on AWS Elastic Beanstalk
date: 2019-04-08
lastmod: 2019-04-19
status: draft
tags:
- aws
---

- Create IAM and user roles with EBS related permissions
- Setup custom domain
- Request SSL for custom domain
- Change the app to use Load Balancer instead of a signe instance
- Add a listener for the SSL port and specify the SSL cert

### User
- Create a user with the right access roles to be able to deploy an Elastic Beanstalk appication

	- aws-elasticbeanstalk-ec2-role
	- aws-elasticbeanstalk-service-role



### Roles

The automatically created roles when using Visual Studio extension ends up with errors.. 

```
....upload complete
....creating application 'ForcesPenpalsWeb'
...created EC2 security group for allowing access to RDS instances 'ForcesPenpalsWeb-test-rds-associations'
Caught AmazonIdentityManagementServiceException whilst setting up role: User: arn:aws:iam:: 123458208591:user/beanstalkDeploy is not authorized to perform: iam:GetInstanceProfile on resource: instance profile aws-elasticbeanstalk-ec2-role
Caught Exception whilst setting up service role: User: arn:aws:iam:: 123458208591:user/beanstalkDeploy is not authorized to perform: iam:PutRolePolicy on resource: role aws-elasticbeanstalk-service-role
....creating environment 'ForcesPenpalsWeb-test' with application version 'v20190408010801-test'
...Determining current configuration
...Saving configuration file to C:\Users\Aamnah\Downloads\aws-beanstalk-deploy.txt
Publish to AWS Elastic Beanstalk environment 'ForcesPenpalsWeb-test' completed successfully
```

The environment will keep getting terminated until you fix these permission errors.

In order to get rid of the errors, you need to add a customm policy to the user you created for deployments

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetInstanceProfile",
                "iam:PutRolePolicy"
            ],
            "Resource": [
                "arn:aws:iam::*:role/*",
                "arn:aws:iam::*:instance-profile/*"
            ]
        }
    ]
}
```

If you have already created the roles, you can be more specific with your ARNs

- `arn:aws:iam:: 123458208591:role/aws-elasticbeanstalk-service-role`
- `arn:aws:iam:: 123458208591:instance-profile/aws-elasticbeanstalk-ec2-role`

### SSL

- The default port for SSL in IIS is `44300`
- If SSL is not installed, the site will not load and the connection will time out on `https`
- To setup an SSL, you need to use a load balancer for your app instead of a single instance. _Configguration > Capacity > Modify > Instances_. Change `max` to `2` (or how many you prefer). Keep in mind that this will cost you in terms of resources.
- ACM is only available in [certain regions][acm-regions]

### HTTPS

- For Listener port, type the incoming traffic port, typically `44300`.
- For Listener protocol, choose `HTTPS`.
- For Instance port, type `80`.
- For Instance protocol, choose `HTTP`. (notice the lack of an S at the end)
- For SSL certificate, choose your certificate.


### DNS

- In order to setup the SSL you need to be able to verify that your own the domain. To be able to do that, you need to setup a custom domain. Link your auto-generated EBS app link to the domain by creating a `CNAME` record.
- After you have requested an SSL in ACM for your custom domain, you'll need to verify ownership by adding additional `CNAME` records.


### Config files

- You can save your apps configuration in text files and can commit them with a code. They go inside a folder called
`.ebextensions` and can be YAML or JSON formatted. I prefer YAML because YAML supports comments.


```yaml
# file: .ebextensions/securelistener-clb.config
# Use this example when your environment has a Classic Load Balancer. 
# The example uses options in the aws:elb:listener namespace to configure an HTTPS listener on port 443 with the
# specified certificate, and to forward the decrypted traffic to the instances in your environment on port 80.

option_settings:
  aws:elb:listener:443:
    SSLCertificateId: arn:aws:acm:us-east-2:1234567890123:certificate/####################################
    ListenerProtocol: HTTPS
    InstancePort: 80
    InstanceProtocol: HTTP
  aws:elb:listener:80:
    ListenerEnabled: false
```

### Elastic Load Balancers (ELB)

- Application Load Balancers cost $0.0252 per hour.
- Classic Load Balancers cost $0.028 per hour


Migrating to a load balanced environment will replace all instances and recreate the environment

```
aws:elasticbeanstalk:environment:EnvironmentType "SingleInstance" => "LoadBalanced"
```

NOTES
---

- If a configuration change fails, EBS automatically reverts back to the last working config.
- Every time you make a change to your environment configuration, it's going to update the environment and that takes a few minutes, 3-6.
- To make sure your app is available during the updates, enable [rolling updates][ebs-rolling-updates]
- To deploy versions with zero downtime, look into [swapping environment URLs][ebs-cname-swap]
- You need to add a _listener_ for port `44300` if you want to enable SSL and HTTPS. 44300 is the default SSL port of IIS. There is no way of updating the default port from the EBS Console (or atleast i couldn't find any). And hard coding the port in your .NET app's config files is not really a good idea. So you would end up setting up a load balancer and then adding a listener for port `44300` that'd go to the instance port `80` and protocol `HTTP` (note the absence of an S, it's insecure HTTP port).


- Beware of Elastic Beanstalk also removing all the resource it cerated when you rebuild or terminate the environment. If you made any changes to any of the automatically created resources for the EBS environment, it'll fail to terminate. In my case it was migrating a CLB to an ALB.. In the end had to create a new CLB using the same name it was trying to find and then tried termination again. [stackoverflow ref](https://stackoverflow.com/a/50819873/890814)

```
2019-04-08 17:08:37 UTC+0500	INFO	terminateEnvironment is starting.
2019-04-08 17:05:29 UTC+0500	ERROR	Stack deletion failed: The following resource(s) failed to delete: [AWSEBLoadBalancerSecurityGroup].
2019-04-08 17:05:29 UTC+0500	ERROR	Deleting security group named: sg-0270b9c66a92bdeff failed Reason: resource sg-0270b9c66a92bdeff has a dependent object (Service: AmazonEC2; Status Code: 400; Error Code: DependencyViolation; Request ID: 404a8ca3-4ef8-4057-a255-b3be4c3762dc)
```

Links
---

- [Configuring your Elastic Beanstalk App for SSL](https://medium.com/@jameshamann/configuring-your-elastic-beanstalk-app-for-ssl-9065ca091f49)
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https.html
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-elb.html
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html
- [How to cut AWS ELB costs by 90% using Application Load Balancers.](https://medium.com/cognitoiq/how-cognitoiq-are-using-application-load-balancers-to-cut-elastic-load-balancing-cost-by-90-78d4e980624b)
- [Configuring End-to-End Encryption in a Load-Balanced Elastic Beanstalk Environment](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-endtoend.html)




[acm-regions]: https://docs.aws.amazon.com/general/latest/gr/rande.html#acm_region
[ebs-rolling-updates]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.html
[ebs-cname-swap]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html