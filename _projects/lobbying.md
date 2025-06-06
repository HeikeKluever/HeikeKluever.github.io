---
layout: page
title: LOBBYING
description: ""
img: assets/img/projects/project_lobbying.jpg
importance: 8
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <div style="float: right; display: flex; flex-direction: column; align-items: flex-end; gap: 10px; margin-left: 10px;">
      <img src="{{ '/assets/img/projects/logo_dfg.png' | relative_url }}" alt="logo_dfg" style="width: 20vw; max-width: 125px; height: auto; border-radius: 10px;">
      <img src="{{ '/assets/img/projects/logo_fts.png' | relative_url }}" alt="logo_fts" style="width:125px; height: auto; border-radius: 10px;">
      <img src="{{ '/assets/img/projects/logo_nsf.png' | relative_url }}" alt="logo_nsf" style="width: 20vw; max-width: 125px; height: auto; border-radius: 10px;">
  </div>

  <h2>
    Summary
  </h2>
  
  <p>
    This research project offers a comprehensive investigation into the functioning of interest representation and lobbying, focusing on both the German and European contexts. It brings together three interrelated strands of research to better understand why some interest groups wield significant political influence while others do not, how lobbying is structured and regulated, and why interest group mobilization varies across policy domains. The first strand explores the causes and consequences of lobbying and lobbying regulation in Germany. Using a combination of experimental, observational, and data-driven methods, it examines public preferences for lobbying transparency, the effects of disclosure rules on candidate emergence and voter behavior, and the professional backgrounds of lobbyists by linking LinkedIn data with the German lobbying register. It also investigates the democratic implications of “revolving door” lobbying and evaluates the effectiveness of regulatory mechanisms such as cooling-off periods. The second strand addresses the puzzle of why some policy sectors are densely populated by interest groups while others remain underrepresented. It develops a theoretical framework tailored to the German political system—building on models developed for the U.S.—and tests its predictions using a novel longitudinal dataset of registered interest groups in Germany from 1974 to 2014. This approach allows for a systematic analysis of the political, institutional, and economic factors that shape patterns of group mobilization. The third strand shifts the analytical lens to the European Union and investigates the conditions under which interest groups are able to influence EU policy-making. Drawing on an original and extensive dataset—including text analysis of European Commission consultations, a large-scale survey of interest groups, and EU legislative data—this research conceptualizes lobbying as an exchange relationship in which European institutions trade influence for valuable resources: information, citizen support, and economic power. Crucially, it demonstrates that lobbying success depends not only on individual groups but also on the capacity of issue-specific lobbying coalitions to collectively provide these resources.
  </p>
  <p>
    Funding is provided by the German Science Foundation (DFG), the Fritz Thyssen Foundation and the U.S. National Science Foundation. Collaborators are 
      <a href="https://www.wiso.uni-hamburg.de/fachbereich-sowi/professuren/schnapp/team/schnapp-kai-uwe.html">Kai-Uwe Schnapp</a>, 
      <a href="https://hartmannfelix.github.io/">Felix Hartmann</a> and 
      <a href="https://www.janstuckatz.com/">Jan Stuckatz</a>.
  </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_lobbying=true]* %}
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