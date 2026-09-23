---
layout: page
title: COUNTERRIGHT
description: ""
img: assets/img/projects/project_counterright.jpg
importance: 1
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    A central focus of my current research is how democratic resilience can be strengthened and support for the far right reduced. Rather than only diagnosing the causes of far-right support and democratic backsliding, we aim to identify <strong>evidence-based strategies that can effectively counter these developments</strong>. Using field and survey experiments as well as comparative causal inference, our research currently focuses on three main approaches.
  </p>
  <p>
    First, we study whether <strong>correcting false beliefs and widespread misperceptions</strong> can reduce grievances that fuel far-right support. In a large-scale experiment in East Germany, we show that citizens substantially overestimate how many fellow East Germans feel like “second-class citizens.” Correcting these misperceptions reduces collective grievances and ingroup identification, increases trust toward out-groups, and lowers support for the AfD.
  </p>
  <p>
    Second, we examine <strong>institutional strategies toward the far right</strong>. In particular, our comparative research tests the widespread argument that allowing far-right parties into government may “tame” them by exposing their inability to govern. We find the opposite: government participation strengthens rather than weakens far-right parties electorally, while providing little evidence of systematic ideological moderation.
  </p>
  <p>
    Third, we investigate whether <strong>historical and civic education can strengthen democratic resilience among young people</strong>. In cooperation with ZWEITZEUGEN, we evaluate an intervention built around survivor testimonies and encounters with the experiences of victims of National Socialism. A multi-country school field experiment examines whether these interventions can reduce xenophobia, antisemitism, and susceptibility to far-right appeals, and whether their effects extend beyond participating students to their families.
  </p>
  <p>
    Together, these projects examine interventions at different levels—from <strong>individual beliefs and historical learning to the institutional treatment of far-right parties</strong>—with the overarching goal of identifying which strategies can effectively strengthen democratic resilience and reduce support for the far right.
  </p>
  <dl class="project-details">
    <dt>Project title:</dt>
    <dd>Counteracting the far-right (COUNTERRIGHT)</dd>
    <dt>Principal investigators:</dt>
    <dd>Heike Klüver, <a href="https://www.sowi.hu-berlin.de/en/lehrbereiche-en/international-politics/Team/staff/1692381" target="_blank">Anselm Hager</a></dd>
    <dt>Funding:</dt>
    <dd>German Research Foundation (DFG), 04/2024–03/2028</dd>
  </dl>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_counterright=true]* %}
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
