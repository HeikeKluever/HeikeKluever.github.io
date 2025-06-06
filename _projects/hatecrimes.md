---
layout: page
title: HATE CRIMES
description: ""
img: assets/img/projects/project_hatecrime.jpg
importance: 3
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
  </h2>
  
  <p>
    Many societies have witnessed a dramatic rise of hate crimes against minorities. Western societies have witnessed a dramatic surge of hate crimes. The NSU murders, the Hanau shootings or the attack against the Jewish community in Halle are sadly just the tip of the iceberg of a more general trend towards radicalization in Western societies. In January 2021, the OSCE Office for Democratic Institutions and Human Rights recorded a new all-time record high in hate crimes across 39 democracies. COUNTERHATE aims to address this alarming trend by pursuing three key goals: (1) compiling a comprehensive disaggregated and geo-coded dataset on hate crimes in Germany, (2) explaining the rise of hate crimes and (3) developing counter strategies to provide policy-makers with evidence-based policy recommendations how to mitigate hate crimes.
  </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_hatecrimes=true]* %}
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