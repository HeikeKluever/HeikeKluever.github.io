---
layout: page
title: PARTY COMPETITION
description: ""
img: assets/img/projects/project_partycompetition.jpg
importance: 6
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    Summary
  </h2>
  
  <p>
    This research project investigates the strategic behavior of political parties within European multiparty systems, focusing on how parties respond to electoral incentives, coalition dynamics, and voter preferences. The project examines how electoral contexts influence party competition, revealing that parties adjust their issue emphasis and positioning based on the institutional environment and voter polarization. It also explores the impact of coalition participation on party responsiveness and electoral outcomes, highlighting the challenges junior coalition partners face in maintaining voter support. Additionally, the research delves into the phenomenon of party convergence and its role in the decline of mainstream parties, demonstrating that ideological similarity among major parties can lead voters to seek alternatives on the political fringes. Through a combination of quantitative analyses and comparative case studies, this project contributes to a deeper understanding of the evolving dynamics of party competition and voter behavior in contemporary European politics.
  </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_partycompetition=true]* %}
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