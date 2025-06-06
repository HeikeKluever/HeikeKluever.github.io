---
layout: page
title: COUNTERRIGHT
description: ""
img: assets/img/projects/project_counterright.jpg
importance: 1
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <div style="float: right; display: flex; flex-direction: column; align-items: flex-end; gap: 10px; margin-left: 10px;">
      <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="width: 20vw; max-width: 125px; height: auto; border-radius: 10px;">
      <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="width: 20vw; max-width: 125px; height: auto; border-radius: 10px;">
  </div>

  <h2>
    Summary
  </h2>
  
  <p>
    A summary will be added in due time.
  </p>
  <p>
    Funding is provided by the German Science Foundation (DFG) and SCRIPTS.
  </p>

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