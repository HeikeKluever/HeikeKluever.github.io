---
layout: page
title: SCRIPTS
description: "Excellence Cluster „The Contestations of the Liberal Script“"
img: assets/img/projects/scripts.jpg
importance: 3
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigator: Heike Klüver among others</li>
      <li>Funding volume: € 548,850</li>
      <li>Project period: 01/2014 - 12/2025</li>
    </ul>

  <h2>Project description</h2>
    <p>The liberal script is increasingly coming under pressure due to the perceived failure to deliver on its promises. Radicalization and polarization tend to turn criticism of the liberal script into rejection of its core principles. SCRIPTS examines this deepening of contestations from a global, comparative, and historical perspective and seeks to explain their causes and understand their consequences.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project=scripts]* %}
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