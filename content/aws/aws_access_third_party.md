---
title: Giving an account access to your AWS resources
date: 2018-12-14
---

tl;dr
---
- Create an **IAM Role** for _Another AWS account_. Attach permission policies to tailor the level of access you want that account to have.
- Create an **IAM Policy** that allows switching roles and assign it to the IAM Role you create
  - The user must be logged in with an IAM account in order to switch role. (Root AWS accounts don't even show the option to switch roles)
  - If an _External ID_ is required as part of the role, you can not switch roles using the management console
- Copy the **link that the user can use to switch** to the role and share it with the other account `https://signin.aws.amazon.com/switchrole?account=account_id_number&roleName=role_name&displayName=text_to_display`

---

# Stuff you need:
- 12-digit `Account ID` of the your own AWS account
- 12-digit `Account ID` of the user you want to give access to
- Role ARN (to be used in the IAM policy, will be created)
- Switch Role link (to share with the other account, will be created)

# IAM Policy (Grant a user permission to switch to the IAM Role)

NOTES:

- **You can only switch roles when you sign in as an _IAM User_**, not when you sign in as the _AWS Account root user_
- You cannot switch roles in the AWS Management Console to a role that requires an `ExternalId` value. 

For the user to be able to switch roles and manage your account they must be specifically allowed to do so. This is done by creating a policy that allows swithing roles and assigning it to the role.

_IAM Console > Policies > Create policy > JSON_

Add the following code and click _Review policy_

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Resource": "arn:aws:iam::848078208591:role/Aamnah-FullAccess"
    }
}
```

Give it a name, let's call it 'SwitchRole', and click _Create policy_

Add this policy to the IAM Role you create. Now copy the link for switching roles and share them with the user. The user who wants to login has to create an IAM account and login with that instead of logging in with their root AWS acconut

# IAM Role
You can add an _IAM Role_ to allow access to another _Account ID_. This _Account ID_ is the 12-digit account ID of an AWS account, which isn't necessarily part of your organization.

- Create an IAM role for granting another AWS account the access you want to your account's resources.

_IAM console > Roles > Create Role > Another AWS Account_

- Enter the `Account ID` of the account you want to give access to.
- Leave the _Require external ID_ bit unchecked. It's not possible to switch roles in the AWS Management Console when it requires an external ID.
- Attach the permission policies you want the role to have. Make sure you attach the `SwitchRole` policy we just created
- Last step is to enter a Role name and click _Create role_

Links
--- 
- [AWS Docs - How to Use an External ID When Granting Access to Your AWS Resources to a Third Party](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html?icmpid=docs_iam_console)
- [AWS Docs - Granting a User Permissions to Switch Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html)
- [AWS Docs - Switching to a Role (Console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-console.html?icmpid=docs_iam_console)
- [AWS Docs - Providing Access to AWS Accounts Owned by Third Parties](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html)
- [AWS Docs - Tutorial: Delegate Access Across AWS Accounts Using IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html?icmpid=docs_iam_console)