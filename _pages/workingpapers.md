---
layout: page
permalink: /workingpapers/
title: working papers
description:
nav: true
nav_order: 5
---

<!-- _pages/workingpapers.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography -f publications -q @misc %}

</div>
