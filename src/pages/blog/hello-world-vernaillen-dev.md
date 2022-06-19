---
title: Hello World Vernaillen.dev
desc: Happy to introduce the rewrite of my professional website, now built with Vue 3, Vite, Tailwind and Markdown
pageName: Hello World
date: 06/11/2022
tag:
- website
- vue
- vite
- netlify
- circleci
- markdown
category: Vue
author: Wouter Vernaillen
location: Zottegem, Belgium
thumbnail_dark: /hello-world_dark.png
thumbnail_light: /hello-world_light.png
---

## Sunset of Vernaillen.com

To be honest the most important reason I wanted to make a new website is because [Vernaillen.com](https://www.vernaillen.com) was made in Liferay and I didn't want to keep a Liferay server running only for my personal website.
Also, my main focus as a freelance consultant is not on Liferay any more lately, but more on full stack development with Spring micro-services, Angular or Vue.js, as well as on DevOps with Kubernetes, Jenkins, Sonar, etc.

I wanted to become more skilled in Vue.js anyway, so I decided to rewrite my website using Vue 3, Vite, Tailwind and Markdown:

## Hello World for Vernaillen.dev

For the design I decided to use this [Startup Tailwind CSS Template](https://tailwindtemplates.co/templates/startup), cause I'm a developer, not a designer :D
It was fun to port into the Vue app. And after changing the main colors to match my company branding and logo (design by my sister, [Anneleen Vernaillen](https://www.anneleenvernaillen.com)), I thought the result was quite nice.

Most of the fun for me was in learning the new features of Vue 3, learning how to use Vite and Tailwind, and  create blog functionality based on markdown files.
The result is a website that is very easy to edit and publish content updates,cause as a developer I'm obviously familiar with git and markdown anway.

## Website Features

* Built with [Vue 3](https://vuejs.org/), [TypeScript](https://vuejs.org/guide/typescript/overview.html), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)
* Static Site Generation with [vite-ssg](https://github.com/antfu/vite-ssg), so search indexes can crawl the content
* [Markdown](https://daringfireball.net/projects/markdown/) support with [vite-plugin-md](https://github.com/antfu/vite-plugin-md) and [markdown-it](https://markdown-it.github.io/)
* SVG support in Vue with [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader), used for the background graphics
* <font-awesome-icon :icon="['fas', 'rss']" /> [RSS](https://vernaillen.dev/feed.xml) & [Atom](https://vernaillen.dev/feed.xml) for newreaders.  And yes, I still use a [newsreader](https://feedly.com) myself too ;)
* Dark and Light style: <dark-toggler inline/>
* [Tone.js](https://tonejs.github.io/) and audio visualisation with [vue-audiomotion-analyzer](https://vue-audiomotion-analyzer.dev/):
 <player-controls extended />
* [Pinia](https://pinia.vuejs.org/) is used to keep track of the audio player state
* Automated deployments / auto publishing on [Netlify](https://www.netlify.com/)
* Continous integration with [CircleCI](https://app.circleci.com/pipelines/github/vernaillen/vernaillen.dev?filter=all)
* Code quality check with [SonarCloud](https://sonarcloud.io/summary/new_code?id=vernaillen.dev)
* Unit tests with [vitest](https://vitest.dev/)
