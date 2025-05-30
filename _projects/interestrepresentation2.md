---
layout: page
title: Citizen Interests, Interest Groups and Legislative Activity
description: "A Longitudinal Study of Interest Representation in Germany"
img: 
importance: 9
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by the British Academy</li>
      <li>Principal investigator: Heike Klüver</li>
      <li>Funding volume: £ 7,124</li>
      <li>Project period: 09/2011 - 08/2012</li>
    </ul>

  <h2>Project description</h2>
    <p>Even though interest groups are important transmission belts that link citizen interests with governmental policy, we still know little about the determinants of interest group formation. The literature is characterized by competing hypotheses: Whereas some argue that interest group formation is caused by citizen preferences and governmental activity, others by contrast suggest that interest groups in fact influence citizen interests and the legislative agenda. Unfortunately, most studies rely on cross-sectional data which do not allow to judge the direction of the effects. Drawing on a new longitudinal dataset that combines data about the German interest group population from 1973 until 2010 with information about citizen interests and legislative activity, I am able to determine the direction of the relationship between citizens, interest groups and governmental activity and to thereby shed light on the role of organized interests in democratic politics.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[project=interestrepresentation2]* %}
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