---
layout: page
title: GENDER & POLITICS
description: ""
img: assets/img/projects/project_genderpolitics.jpg
importance: 4
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    This research project investigates the interplay between gender and political behaviour in Europe, focusing on representation, electoral outcomes, and the politicization of gender and sexuality. One study examines the impact of nominating female top candidates on electoral performance, revealing that such nominations positively influence voter perceptions and support. Another study analyzes the electoral effects of state-sponsored homophobia in Poland, finding that anti-LGBTQ resolutions increased turnout for the incumbent party while suppressing opposition mobilization. A third paper explores the youth gender gap in support for far-right parties across Europe, demonstrating that young men are more inclined towards far-right ideologies compared to young women, with this gap being particularly pronounced among Millennials and Generation Z. Collectively, these studies contribute to a deeper understanding of how gender-related factors influence political landscapes and voter behaviour in contemporary European democracies.
  </p>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_genderpolitics=true]* %}
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