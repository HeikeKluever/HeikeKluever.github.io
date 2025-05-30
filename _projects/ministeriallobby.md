---
layout: page
title: MINISTERIAL​LOBBY
description: "Interest Groups and the Ministerial Bureaucracy in Germany: Studying lobbying success at the administrative stage"
img: /assets/img/projects/ministeriallobby.jpg
importance: 4
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigator: Heike Klüver and Kai-Uwe Schnapp</li>
      <li>Funding volume: € 363,800</li>
      <li>Project period: 09/2021 - 08/2024</li>
    </ul>

  <h2>Project description</h2>
    <p>Ministries are central players in German policy-making as one of their major tasks is drafting legislative proposals. It is therefore no surprise that they are an important lobbying target for interest groups that seek to influence legislation in Germany. Even though ministries regularly interact with interest groups, there is no systematic research on the extent to which interest groups are able to successfully lobby the drafting of legislative proposals in Germany. In this research project, we therefore aim to close this important gap in the literature by pursuing two major objectives. First, we will develop a comprehensive theoretical framework in order to explain lobbying success. We conceptualize lobbying as an exchange process in which the minister, as the central political actor in a ministerial department, trades influence on policies for information, public, especially electoral support, and economic resources, while bureaucrats trade openness first and foremost for information. We expect that interest groups that can deliver these goods are in a particularly good position to successfully lobby policy-making. In addition, we argue that the decisive level of analysis is not an individual interest group. Instead, lobbying success can only be understood if we take into account the aggregated supply of these goods by issue-specific lobbying coalitions. Finally, we theorize that the issue context affects the exchange relationship as the effect of information supply is expected to increase with the complexity of policy proposals. Second, we will test our theoretical expectations by compiling a new dataset on the lobbying success of interest groups with regard to 50 selected policy proposals introduced to the Bundestag throughout the year 2019. We will measure the preferences of interest groups and the location of the policy output before and after the agenda-setting and policy formulation stage, in order to draw conclusions about the winners and losers of decision-making processes at the ministerial stage. Our findings will have major implications for our understanding of policy-making and political representation in Germany.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[ministeriallobby=true]* %}
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