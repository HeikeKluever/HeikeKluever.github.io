---
layout: page
title: DEMO-AIM
description: ""
img: assets/img/projects/project_demoaim.jpg
importance: 2
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>
    summary
  </h2>
  
  <p>
    Democratic backsliding in contemporary democracies has increasingly unfolded through micro-level processes, including far-right voting, declining trust in democratic institutions, and rising outgroup hostility. While existing research has made substantial progress in diagnosing these dynamics, robust, theory-driven evidence on <strong>which interventions can effectively strengthen democratic resilience</strong> is still lacking.
  </p>
  <p>
    This project addresses this gap by introducing <strong>AI-mediated interactive Holocaust survivor testimonies</strong> as a novel and scalable democratic resilience intervention. The project theorises that interactive encounters with Holocaust survivors foster perspective-taking, humanisation, and a re-evaluation of the risks associated with authoritarianism. By transforming abstract historical knowledge into emotionally engaging, dialogical experiences, AI-mediated testimonies are expected to <strong>reduce outgroup hostility, increase trust in democratic institutions, and weaken electoral support for far-right parties</strong>.
  </p>
  <p>
    Methodologically, the project combines cutting-edge AI technology with a multi-stage research design that integrates large-scale survey experiments with focus groups, as well as field experiments in schools and on social media platforms. In doing so, the project directly advances SCRIPTS’ second-phase agenda by moving from diagnosing democratic erosion to experimentally testing scalable strategies for countering it from within. It contributes both theoretical innovation and actionable evidence on <strong>how digital memory interventions can strengthen democratic resilience</strong> in contemporary democracies.
  </p>
  <dl class="project-details">
    <dt>Project title:</dt>
    <dd>Strengthening democratic resilience with AI: The democratic potential of digital holocaust testimonies (DEMO-AIM)</dd>
    <dt>Principal investigators:</dt>
    <dd>Heike Klüver, <a href="https://www.scripts-berlin.eu/people/giesecke/index.html" target="_blank">Johannes Giesecke</a>, <a href="https://www.scripts-berlin.eu/career-development/bgts/bgts_people/faculty-members/humphreys.html" target="_blank">Macartan Humphreys</a></dd>
    <dt>Funding:</dt>
    <dd>German Research Foundation (SCRIPTS Cluster), 01/2027–12/2029</dd>
  </dl>

  <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 1.5em;">
    <img src="{{ '/assets/img/projects/logo_scripts.png' | relative_url }}" alt="logo_scripts" style="max-width: 30vw; width: auto; max-height: 70px; border-radius: 10px;">
  </div>

</div>

{%- capture pubs_output -%}
  {% bibliography --query @*[project_demoaim=true]* %}
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
