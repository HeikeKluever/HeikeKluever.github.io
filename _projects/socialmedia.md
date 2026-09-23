---
layout: page
title: SOCIAL MEDIA & YOUNG VOTERS
description: ""
img: assets/img/projects/project_socialmedia.jpg
importance: 7
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    Young people increasingly encounter politics in digital environments that differ fundamentally from the traditional channels through which previous generations were politically socialized. My research examines <strong>how these changing information environments shape young citizens’ political attitudes and electoral behavior—and how young voters can be effectively engaged and equipped to navigate them</strong>.
  </p>
  <p>
    One strand of this research examines the <strong>political behavior of younger generations</strong>, including the growing gender gap in far-right support. Our research shows that the recent electoral success of far-right parties among young Europeans is particularly pronounced among young men, pointing to important changes in the political attitudes and voting behavior of younger generations.
  </p>
  <p>
    A second strand focuses on the changing ways in which young citizens encounter and engage with politics. We study the growing role of <strong>social media and digital opinion leaders</strong> in electoral politics, including whether social influencers can affect election outcomes. At the same time, we examine whether <strong>traditional campaign tools can still mobilize first-time voters</strong> in an increasingly digital political environment. A large-scale field experiment during the 2024 European Parliament election found no evidence that partisan direct mail increased turnout or support for the sending party among young voters.
  </p>
  <p>
    Finally, we investigate <strong>how democratic resilience in digital environments can be strengthened</strong>. In a large preregistered experiment during the 2025 German federal election, we tested a brief digital literacy intervention designed to help users recognize emotional manipulation in political short-form videos. The intervention reduced liking and increased reporting of emotionally manipulative political content in the short term, while encouraging more attentive engagement with political videos. These findings suggest that brief and scalable digital literacy interventions can help citizens respond more critically to manipulative political communication, although the behavioral effects did not systematically persist over time.
  </p>
  <p>
    Together, these projects seek to understand <strong>how digital transformation is reshaping the political development of younger generations and which strategies can strengthen their informed and resilient participation in democratic politics</strong>.
  </p>
  <p>
    Research in this area has been (partly) funded by:
  </p>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
    <img src="{{ '/assets/img/projects/logo_vws.png' | relative_url }}" alt="logo_vws" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_socialmedia=true]* %}
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
