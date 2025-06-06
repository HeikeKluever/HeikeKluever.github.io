---
layout: page
title: SOCIAL MEDIA & YOUNG VOTERS
description: ""
img: assets/img/projects/project_socialmedia.jpg
importance: 5
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    A summary will be added in due time.
  </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_socialmedia=true]* %}
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