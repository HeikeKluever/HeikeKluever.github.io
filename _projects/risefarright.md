---
layout: page
title: THE RISE OF THE FAR RIGHT
description: ""
img: 
importance: 2
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
    <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="float: right; margin: 0 0 10px 10px; border-radius: 10px; max-width: 100%; height: auto; width: 100px;">
  </h2>
    <p>
      The project examines how socio-economic inequality, migration, and party communication contribute to the rise of far-right parties in Europe. Its overarching hypothesis is that far-right parties have strategically exploited (perceived) inequalities and recent migration trends to mobilize voters. The research is structured around four main pillars. First, it investigates how inequality shapes voter support for far-right parties. Second, it explores the impact of migration inflows on electoral behavior. Third, it analyzes the issues emphasized in party communication, with a particular focus on the messaging strategies of far-right parties. Finally, the project examines how mainstream parties can effectively respond to the far right—both during election campaigns and in their social media engagement.
    </p>
    <p>
      Funding is provided by SCRIPTS.
    </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_risefarright=true]* %}
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