---
layout: page
title: COVID
description: ""
img: 
importance: 10
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
    <img src="{{ '/assets/img/projects/logo_vws.png' | relative_url }}" alt="logo_vws" style="float: right; margin: 0 0 10px 10px; border-radius: 10px; max-width: 100%; height: auto; width: 100px;">
    <br style = "clear: right;">
    <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="float: right; margin: 0 0 10px 10px; border-radius: 10px; max-width: 100%; height: auto; width: 100px;">
  </h2>
    <p>
      This project explores how the COVID-19 pandemic has shaped public opinion and political behavior. Combining two complementary strands of research, the project investigates how citizens navigate complex policy trade-offs during crises and how these experiences have affected Euroscepticism, European solidarity, and support for international cooperation. Using a multi-method approach—including large-scale surveys, survey experiments, geocoded data, and natural language processing—the project examines both cross-national variation and in-depth evidence from Germany. Key areas of inquiry include the impact of policy measures and political communication on public trust, attitudes toward vaccination and civil liberties, and preferences for global vaccine distribution. The findings reveal that citizens are more supportive of restrictive and international measures when framed as effective, fair, and solidarity-based. This project offers critical insights into crisis governance, democratic resilience, and the evolving legitimacy of supranational institutions in times of uncertainty.
    </p>
    <p>
      Funding is provided by the the VolkswagenStiftung and SCRIPTS. Collaborators are
      <a href="https://hobolt.com/">Sara Hobolt</a>,
      <a href="https://theresakuhn.eu/">Theresa Kuhn</a>,
      <a href="https://tonirodon.cat/">Toni Rodon</a> and
      <a href="http://coin.wne.uw.edu.pl/mkrawczyk/">Michal Krawczyk</a>. You can find The COVIDEU Project website
      <a href="https://sites.google.com/view/covideuproject/home">here</a>.
    </p>

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