---
layout: page
title: Party Competition
description: "Lorem ipsum dolor"
img: /assets/img/projects/project_partycompetition.jpg
importance: 1
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Lorem</li>
      <li>ipsum</li>
      <li>dolor</li>
      <li>sit</li>
    </ul>

  <h2>Project description</h2>
    <p>Lorem ipsum dolor.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project=party_competition]* %}
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