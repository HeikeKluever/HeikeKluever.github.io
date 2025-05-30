---
layout: page
title: Interest Representation in Germany
description: "A Longitudinal Study of Interest Groups Registered at the Bundestag"
img: 
importance: 7
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by Fritz Thyssen Stiftung</li>
      <li>Principal investigator: Heike Klüver</li>
      <li>Funding volume: € 100,000</li>
      <li>Project period: 10/2013 - 09/2015</li>
    </ul>

  <h2>Project description</h2>
    <p>Interest groups are an important channel through which citizens, companies and public institutions can transmit their policy preferences to decision-makers. In order to make their voice heard, like-minded constituents have to get mobilized by establishing and maintaining interest groups that lobby decision-makers in favor of their common policy objective. However, empirical research shows that the number of interest groups varies considerably across policy domains. The bias in interest group mobilization seriously undermines political representation as some societal interests dominate the political debate while other voices are hardly heard. This research project therefore seeks to solve this empirical puzzle by explaining why interest group density varies across policy sectors. The proposed research project pursues two major goals: First, this research project will develop a theoretical framework that explains interest group density in Germany by building on previous models developed for the study of interest groups in the United States and extending these models to account for the specificities of the German political system. Second, the theoretical expectations will be tested by mapping the interest group population in Germany from 1974 until 2014 drawing on the lobbying register of the German Bundestag. Using this novel and worldwide unique longitudinal dataset, the proposed research project will test the formulated theoretical expectations to unambiguously identify the determinants of interest group density.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[project=interestrepresentation]* %}
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