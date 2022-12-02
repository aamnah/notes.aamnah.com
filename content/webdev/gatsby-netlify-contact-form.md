---
title: Setting up a contact form on Gatsby using Netlify Forms
date: 2020-03-29
---

- You need to give your form a `name`. This name will identify your Form in Netlify 
- Add the `data-netlify="true"` and `data-netlify-honeypot="bot-field"` to the `<form>`
- You also need to add a hidden input field with a `value` attribute that matches your form `name`
- Every input field must have a `name`. This will show up in form submissions.

```jsx
<form name="Contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="Contact" />
  ...
</form>
```

The issues i had were:

- It wasn't sending me email notifications
- It wasn't sending me data from all the input fields, was getting just one


To fix not getting email notifications, just edit the notification and set the Form value to _Any form_. That fixed it for me.

![email-notification-settings](images/notes/email-notification-settings.png)

The not sending all input fields seems to have been a known bug since March 2018, when Scott Tolinski made [this video](https://www.youtube.com/watch?v=hF7xJhzrr9s). The workaround is to **rename your form** to something else (essentially making Netlify detect it as a new form). If you add fields to an existing form, they'll not show up.

![netlify-contact-submission-response](images/notes/netlify-contact-submission-response.png)

Links
---

- [How to Integrate Netlify’s Form Handling in a React App](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/)
- [Building a Contact Form](https://www.gatsbyjs.org/docs/building-a-contact-form/)
- [How to make a Contact Form in Gatsby with Netlify](https://www.youtube.com/watch?v=hF7xJhzrr9s)