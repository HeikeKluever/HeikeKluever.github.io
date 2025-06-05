---
layout: page
title: FAR RIGHT
description: "Analyzing and Countering the Emergence of Far-Right Beliefs in the Wake of Migration"
img: /assets/img/projects/project_counterright.jpg
importance: 2
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics
    <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="float: right; margin: 0 10px 10px 0; border-radius: 10px; max-width: 100%; height: 40px; width: auto;">
  </h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigators: Anselm Hager and Heike Klüver</li>
      <li>Funding volume:</li>
      <li>Project period:</li>
    </ul>

  <h2>Project description</h2>
    <p> The project COUNTERRIGHT analyzes and counters the emergence of far-right beliefs (nativism and anti-establishmentarianism) in the wake of migration, testing both the Conflict-Abatement Hypothesis, i.e., how to abate conflicts between natives and immigrants by softening far-right beliefs, and the Conflict-Escalation Hypothesis, i.e., whether far-right parties escalate these conflicts by causing the spread of far-right beliefs. Our overarching hypothesis contextualizing the Conflict-Escalation Hypothesis is that migration is a key driver of far-right beliefs (brought about by the perceived negative social and economic externalities of migration). COUNTERRIGHT traces this specific version of the BEL-framework with two cutting-edge studies, and then explores in two further novel studies how far-right beliefs can be most effectively countered. By analyzing the spread of far-right beliefs as well as its potential mitigants, COUNTERRIGHT can significantly add to a burgeoning literature on far-right and xenophobic politics. The project’s intention is to i) distill new evidence how the spread of far-right beliefs can be explained, and ii) lay out clear theoretical mechanisms on how to reduce far-right beliefs. COUNTERRIGHT will use cutting-edge experimental as well as Natural Language Processing techniques, drawing on natural observational data from both online and offline settings as well as field experimental samples. The expected outcome of COUNTERRIGHT is a clear theoretical model for how a pertinent driver of structural change, mass migration, can threaten the legitimacy of Western democracies via the spread of far-right beliefs and how societies can best shield against this challenge.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project=counterright]* %}
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