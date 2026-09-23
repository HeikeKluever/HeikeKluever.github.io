---
layout: page
title: STATEWORK
description: ""
img: assets/img/projects/project_statework.jpg
importance: 3
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    <strong>Can better public services strengthen democracy?</strong> STATEWORK examines whether improving citizens’ everyday experiences with the state can increase political trust, strengthen democratic resilience, and reduce support for far-right and other anti-system parties. The project starts from a simple premise: citizens experience the state not only through elections and political debates, but also through <strong>public services in their everyday lives</strong>—from roads and public transport to youth facilities and interactions with local administrations. When these services work well, citizens may perceive the state as more capable, responsive, and fair.
  </p>
  <p>
    But investments alone may not be enough. We therefore examine when improvements in public services translate into democratic support: whether they produce tangible improvements, whether citizens actually perceive these changes, and whether they attribute them to political actors and institutions.
  </p>
  <p>
    Empirically, STATEWORK combines <strong>quasi-experimental analyses, surveys, and field experiments</strong> across three domains: large-scale infrastructure investments, targeted investments in services and facilities for young people, and everyday interactions with public administration. By studying these different settings, we aim to identify <strong>whether, when, and why making the state work better can strengthen democratic resilience and reduce support for the far right</strong>.
  </p>
  <dl class="project-details">
    <dt>Project title:</dt>
    <dd>Making the State Work? The Effects of Public Service Investments on Democratic Resilience (STATEWORK)</dd>
    <dt>Principal investigators:</dt>
    <dd>Heike Klüver, <a href="https://markus-kollberg.net" target="_blank">Markus Kollberg</a></dd>
    <dt>Funding:</dt>
    <dd>Fritz Thyssen Foundation, 01/2027–12/2028</dd>
  </dl>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_fts.png' | relative_url }}" alt="logo_fts" style="max-width: 30vw; width: auto; max-height: 80px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_statework=true]* %}
{%- endcapture -%}

{% if pubs_output contains "<li>" %}
  <div>
    <h2>
      <a href="{{ '/publications/' | relative_url }}" style="color: inherit">
        related publications
      </a>
    </h2>
    <div class="publications">
      {{ pubs_output }}
    </div>
  </div>
{% endif %}
