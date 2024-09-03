---
title: 'My First Sports Article'
date: 2024-08-15T20:13:09+05:30
draft: false
params:
  subtitle: 'Let us meet the sports personalities of the year'

categories: ['Sports']
tags: ['sports', 'celebrities']
slug: 'my-first-sports-article'
---

Poison is a **clean, professional** Hugo theme designed to captivate your readers.

It’s also **tiny** and **privacy conscious**. No JavaScript frameworks, icon packs, or Google fonts. No ads or trackers polluting your console window. We kept things simple. A little vanilla JavaScript, a dash of CSS, and the power of Hugo.

All the static assets for the site (JS files, CSS, and fonts) are located within the theme’s /assets/ directory. **That way you know exactly what’s going onto your site**.

Check out our demo site’s analytics [here](https://www.google.com) to gauge community interest in the theme.

## Features
In addition to the standard Built-in templates and shortcodes that come with Hugo, Poison offers some unique features of its own.

### Light & Dark Mode
Give readers the choice to read in light or dark mode. The user’s preference is remembered and saved in local storage. Light mode is the default for first time visitors, but you can change this in your config file.

### Table of Contents
Provide a floating table of contents for readers with large enough screens (i.e. *screen-width > 1600 pixels*).

If you prefer not to display a table of contents, you can disable them site-wide in your config.toml file.

>
>   `[param]`
>       `hideToc: true`
>

### Comments
Facilitate discourse by allowing users to comment on your posts. Poison currently supports two different commenting engines for this purpose – Disqus and Remark42.

**Note**: *Enabling comments will add external dependencies*.
- Disqus Demo Site
- Remark42 Demo Site

Disqus is free and easy to use. Checkout the Hugo docs to get started. Once you’ve created a Disqus account, you can activate it in the Poison theme by adding a single line to your `config.toml` file.