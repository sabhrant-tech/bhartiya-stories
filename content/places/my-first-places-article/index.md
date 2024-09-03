---
title: 'My First Places Article'
date: 2024-08-17T13:32:38+05:30
draft: false
params:
  subtitle: 'Introducting the most beautiful and mesmerizing places from India'

categories: ['Places']
tags: ['places', 'indian']  
slug: 'my-first-places-article'
---

This is a great option for people that don’t want to bother with self-hosting their own commenting engine. However, it has some drawbacks. Because Disqus provides this service for free, they recoup any financial loss by injecting third-party ad trackers onto your website. These trackers help to collect and sell information about your users, while also negatively affecting your site’s speed.

Even still, Disqus may be the best solution depending on your situation (we use it on this demo site). The above paragraph is only meant to highlight its trade-offs and not meant to discourage its use entirely.

***Remark42*** is a lightweight, open source commenting engine that doesn’t spy on your users. The downside is that you must host it yourself. Checkout the Remark42 [documentation](http://www.amazon.in) to get started. I also found this blog post helpful when setting it up on my site.

Once everything is set up, you can activate it in the Poison theme by including the following in the `[params]` section of your `config.toml` file.

## Analytics

Gain insights on your users. Poison currently supports Plausible which is available via a paid service or by self-hosting.

**Note**: *Enabling analytics will add external dependencies*.

**Check out our demo site’s Plausible analytics here**!

Once you’ve established your Plausible instance, you can activate it by adding three lines to your `config.toml` file.

This will insert the necessary code in the `<head>` on each page and will allow your Plausible instance to collect a limited set of data on your users.

For reference, the configuration above would add the following code to each page. Adjust according to your specific environment.

### Email Newsletters

Allow users to subscribe to your blog newsletters via email. Poison currently supports Listmonk which is available via self-hosting. Listmonk is a standalone, self-hosted, newsletter and mailing list manager. The downside is that you must host it yourself. Checkout the Listmonk documentation to get started.

Once you’ve established your Listmonk instance, activate it by adding these lines to your config.toml file.

This will insert a form at the bottom of each post’s content. The user will be subscribed to the newsletter specified in the listmonk_subscription_list_uiid parameter.