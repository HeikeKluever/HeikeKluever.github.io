---
layout: page
title: COALITION GOVERNMENTS
description: ""
img: 
importance: 9
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
    <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="float: right; margin: 0 0 10px 10px; border-radius: 10px; max-width: 100%; height: auto; width: 100px;">
  </h2>
    <p>
      A summary will be added in due time.
    </p>
    <p>
      Funding is provided by the German Science Foundation (DFG).
    </p>

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