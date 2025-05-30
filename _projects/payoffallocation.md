---
layout: page
title: Bringing Policies Back In
description: "Explaining Payoff Allocation in Coalition Governments"
img: 
importance: 6
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigator: Heike Klüver</li>
      <li>Cooperation partner: Hanna Bäck</li>
      <li>Funding volume: € 334,394</li>
      <li>Project period: 10/2014 - 09/2017</li>
    </ul>

  <h2>Project description</h2>
    <p>How do coalition parties allocate payoffs? To what extent do political parties get what they want in terms of their programmatic stance and with regard to ministerial portfolios when they enter a coalition government? Political parties forming a coalition government join forces for the purpose of entering government, but they pursue different policy objectives and compete for offices. Coalition parties therefore have to come to an agreement with regard to policies that should be implemented during the time of office and with regard to the allocation of ministerial posts. At the beginning of the legislative term, coalition parties therefore engage in intensive bargaining. They negotiate the allocation of ministerial posts and formulate a coalition agreement that sets out the policy priorities for the upcoming term. While the literature on coalition governments has devoted considerable attention to explaining which parties are likely to form coalitions and to predicting the allocation of ministerial portfolios, the allocation of policy payoffs has largely been neglected. Since understanding how policies and offices are distributed in coalition governments has crucial implications for political representation and the responsiveness of policy-makers to citizens, we aim at filling this important gap in the literature. We pursue two major goals in this research project: First, we will develop a theoretical framework that conceptualizes coalition negotiations as a two-dimensional process in which parties simultaneously bargain about the allocation of policy benefits and ministerial portfolios. Second, we will empirically test our theoretical expectations by compiling a novel dataset on policy payoff allocation that is based on a content analysis of coalition agreements negotiated by more than 400 coalition governments in 27 West and East European countries and by combining this new dataset with information on portfolio allocation, cabinet and party characteristics.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[project=payoffallocation]* %}
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