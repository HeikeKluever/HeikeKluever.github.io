---
layout: page
title: DYNAMICS
description: "Research Training Group “The Dynamics of Demography, Democratic Processes and Public Policy”"
img: /assets/img/projects/project_dynamics.jpg
importance: 3
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics
    <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="float: right; margin: 0 10px 10px 0; border-radius: 10px; max-width: 100%; height: 40px; width: auto;">
  </h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigator:</li>
      <li>Funding volume:</li>
      <li>Project period:</li>
    </ul>

  <h2>Project description</h2>
    <p>Western societies are challenged by massive demographic changes. Migration, population aging as well as changing family patterns challenge many democracies. First, they contribute to changing societal needs and problem pressures in policy areas such as health, pension and education policy. Second, they reconfigure the political landscape by introducing new lines of conflict and thus changing the relationship between voters, political parties, interest groups and governments. Traditional research conceptions, such as welfare regimes, varieties of capitalism and class-based voting no longer do justice to current trends and have left policy-makers unprepared. DYNAMICS systematically studies the relationship between demographic change, democratic processes and public policy. Our research program is divided into three pillars: First, we investigate how demographic changes affect democratic processes, most notably preference formation, political behavior and government responsiveness. Second, we study how policy decisions targeting demographic shifts are actually made and how interest groups, institutional and partisan veto players and international developments affect policy responses. Third, we examine how public policies in turn affect demographic development by studying the effect of public policies on family and employment behavior, old age poverty, old age care, retirement behavior as well as the societal integration of migrants. While we concentrated on studying the relationship between demographic change, democratic processes and public policy within countries during the first funding phase, we seek to extend the research agenda by systematically studying how transboundary crises have affected these demographic and political transformations during the second funding phase. Even though demographic changes are long-term trends, they have been dramatically exacerbated by recent international crises. The Global financial crisis, the European migration crisis, the COVID-19 pandemic, the Russian invasion of Ukraine, the climate crisis, and the digital transformation of the labor market showcased not only the global interconnectedness of societies, but they have also exposed their vulnerabilities and increased life course uncertainties. Many of the aforementioned crises and developments have exacerbated each other, amplifying their effect on Western societies. In order to address these challenges, DYNAMICS provides Ph.D. students with a unique and internationally competitive curriculum in cutting-edge quantitative methods and advanced theories of demography, political science and public policy taught and supervised by leading experts of Political Science, Demography, Public Policy and International Politics in the second funding period. DYNAMICS fosters interdisciplinary exchange to enable Ph.D. students to conduct innovative research that sheds much needed light on how demographic shifts affect and interact with democratic processes and public policy.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project=dynamics]* %}
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