---
layout: page
title: COVIDEU
description: "The impact of COVID-19 on public support for the European Union"
img: /assets/img/projects/covideu.jpg
importance: 1
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <p>On 6 April 2020, Angela Merkel declared that the “COVID-19 pandemic is the biggest challenge for the European Union in its entire history”. While the pandemic is a truly transnational challenge that can best be dealt with jointly, it has the potential to divide the Union. Governments’ initial responses were uncoordinated, domestically focused and nationalistic, resorting to extraordinary measures, such as mobility restrictions, social distancing requirements and border closures. For the European Union (EU) in particular, the challenge was stark as the early measures taken in response to the crisis - closing borders and restricting travel - could be seen to roll back core aspects of European integration. In addition, the prominent role of the EU in vaccine procurement has resulted in harsh criticism as EU vaccine approval came comparatively late, and the EU is blamed for having bought too little, too late and at times from the wrong producers. Moreover, as the economic consequences of the pandemic are becoming more apparent, the crisis puts greater pressures on the EU’s ability to coordinate an effective response to the economic downturn. This raises important questions about how an exogenous shock, such as this pandemic, affects public support for the EU. In this project, we therefore investigate how this crisis has influenced Eurosceptic attitudes, solidarity with fellow Europeans and the electoral performance of Eurosceptic parties.</p>

  <p>To study how the COVID-19 pandemic has influenced EU support, we develop an innovative theoretical framework that combines insights from political behaviour, social psychology and political communication. The core idea is that people compare national and EU responses and take cues from domestic governments, political parties and the media when forming opinions about the EU. We study the impact of the pandemic through six work packages that are clustered into three pillars. In the first pillar, we investigate how the policy measures adopted by national governments and EU institutions have affected eurosceptic attitudes, European solidarity and the performance of Eurosceptic parties. In the second pillar, we examine how political actors, namely governments, political parties and social movements have influenced EU support. Finally, in pillar three, we study how media framing and fake news have influenced public support. To answer these questions, the interdisciplinary team of leading scholars from political science, sociology and economics relies on an original multi-method approach combining survey, observational and geocoded data with natural, survey and field experiments as well as innovative natural language processing technologies. The team covers expertise from Central, Eastern, Southern and Northern European countries which allows for studying the effect of the pandemic across the EU.</p>

  <p>Studying how the corona crisis has affected EU support is important for two reasons. First, our project will generate important insights into how the EU can be made more resilient in future crises. Questions of how to design policy instruments to address a crisis, how to coordinate policy responses among member states and how to communicate to the public are questions that are of utmost relevance to any future crisis. Our project will therefore allow us to provide policy-makers with evidence-based recommendations on how to maintain and even increase popular support for the EU in times of crises and to ultimately ensure the future viability of the EU. Second, studying public opinion towards the EU in response to COVID-19 provides a unique opportunity to theorize and empirically test expectations on what drives EU support. In contrast to previous crises, the pandemic has hit all European countries, albeit to a different extent and at different time points. While all countries took extraordinary measures, there is important variation in the policy instruments and the responses by political actors across EU countries and over time. The pandemic therefore constitutes an opportunity that allows for applying innovative causal inference designs which promise important insights for better understanding what drives EU support.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[covideu=true]* %}
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