---
layout: page
title: COVID
description: ""
img: assets/img/projects/project_covid.jpg
importance: 10
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    This project explores how the COVID-19 pandemic has shaped public opinion and political behavior. Combining two complementary strands of research, the project investigates how citizens navigate complex policy trade-offs during crises and how these experiences have affected Euroscepticism, European solidarity, and support for international cooperation. Using a multi-method approach—including large-scale surveys, survey experiments, geocoded data, and natural language processing—the project examines both cross-national variation and in-depth evidence from Germany. Key areas of inquiry include the impact of policy measures and political communication on public trust, attitudes toward vaccination and civil liberties, and preferences for global vaccine distribution. The findings reveal that citizens are more supportive of restrictive and international measures when framed as effective, fair, and solidarity-based. This project offers critical insights into crisis governance, democratic resilience, and the evolving legitimacy of supranational institutions in times of uncertainty.
  </p>
  <p>
    Research in this area has been (partly) funded by:
  </p>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_vws.png' | relative_url }}" alt="logo_vws" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
    <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_covid=true]* %}
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