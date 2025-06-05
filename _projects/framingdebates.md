---
layout: page
title: Framing of Public Policy Debates
description: "Affiliated with the INTEREURO Project Funded by the European Science Foundation"
img: 
importance: 8
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics
    <img src="{{ '/assets/img/projects/logo_nsf.png' | relative_url }}" alt="logo_dfg" style="float: right; margin: 0 10px 10px 0; border-radius: 10px; max-width: 100%; height: 90px; width: auto;">
  </h2>
    <ul>
      <li>Research grant awarded by the American National Science Foundation</li>
      <li>Collaborative research project with Frank Baumgartner and Christine Mahoney</li>
      <li>Funding volume: $ 300,000</li>
      <li>Project period: 08/2011 - 06/2014</li>
    </ul>

  <h2>Project description</h2>
    <p>The project seeks to enhance the study of framing and policy processes in the EU. Framing can determine which interests mobilize, how many actors mobilize and getting everyone to debate an issue "on your terms" can dramatically improve one's chances of reaching one's policy objectives. Interest groups and policy-makers therefore often try to shift attention to the dimension or frame that strengthens their position on an issue, but they cannot single-handedly redefine an issue since all other actors are simultaneously trying to do the same. We hypothesize that framing success varies according to variables located on two different levels: On the interest group level, we assume that the type of frame put forward and the resources of actors strongly affect the success of individual framing efforts. On the issue level, framing success is expected to vary according to the number of actors employing the same frame, the heterogeneity of those actors and their aggregated resources. Drawing on new quantitative text analysis techniques, we will analyze interest group framing across 120 randomly selected policy issues based on their press releases and submissions in consultations. We will be able to identify major frames brought up by interest groups and to examine to what degree the European institutions have taken up the different frames. By doing so, we can assess which frames were successful in shaping the legislative debates. Drawing on scaling techniques, we will furthermore be able to determine the dimensionality of policy debates and to draw conclusions about the linkage between the number of dimensions and the likelihood of negotiated settlement. Our project will be conducted in coordination with the INTEREURO research project which is a collaborative research project in which 17 scholars from various European universities are involved to study interest group politics in the European Union. We will thus contribute to a large and growing infrastructure for the study of interest groups and policy-making in the EU.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project=framingdebates]* %}
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