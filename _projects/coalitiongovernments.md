---
layout: page
title: COALITION GOVERNMENTS
description: ""
img: assets/img/projects/project_coalitiongovernments.jpg
importance: 9
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
  </h2>
  
  <p>
    A summary will be added in due time.
  </p>
  <p>
    Research in this area has been (partly) funded by:
  </p>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_coalitiongovernments=true]* %}
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