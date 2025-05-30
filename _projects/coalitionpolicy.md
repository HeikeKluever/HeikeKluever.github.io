---
layout: page
title: COALITIONPOLICY
description: "Policy-Making in Coalition Governments: The Enactment of Coalition Agreements"
img: /assets/img/projects/coalitionpolicy.jpg
importance: 5
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2>Basics</h2>
    <ul>
      <li>Research grant awarded by the German Science Foundation (DFG)</li>
      <li>Principal investigator: Heike Klüver</li>
      <li>Cooperation Partner: Hanna Bäck</li>
      <li>Funding volume: € 500,900</li>
      <li>Project period: 10/2018 - 09/2021</li>
    </ul>
  
  <h2>Project description</h2>
    <p> Why do coalition governments (not) comply with the policy commitments they have made in coalition agreements? Before coalition governments take over executive offices, they typically engage in intensive coalition negotiations and publish a comprehensive coalition agreement in which they provide a detailed account of the policy reforms they plan to enact in government. Even though these coalition agreements are not legally binding, they importantly constrain the behaviour of cabinet parties as coalition parties can be publicly blamed for not complying with the promises they have made in the coalition agreement. However, previous case study evidence shows that only about two thirds of all the policy reforms promised in coalition agreements were actually enacted. Despite the central importance of coalition agreements for the legislative behaviour of multiparty cabinets during their time of office, the literature has been primarily devoted to studying the formation and the survival of coalition cabinets while our knowledge about policy-making in multiparty cabinets during their time of office is still scarce. We therefore aim to close this important gap in the literature by pursuing two major objectives. First, we will develop a comprehensive theoretical framework that conceptualizes the enactment of coalition agreements as a process that is simultaneously affected by internal cabinet factors (salience, conflict, preference tangentiality, bargaining power) and external factors (public opinion, economic performance, institutional veto-players). Second, we will test our theoretical expectations by compiling a new and comprehensive dataset on the enactment of more than 100 coalition agreements negotiated by multiparty cabinets in 24 West and East European countries from 2000 until 2015 and by combining this novel dataset with information on cabinet features, public opinion, economic performance and institutional characteristics. Understanding the reasons for (non) compliance with the policy commitments made in coalition agreements does not only have important implications for understanding how policy-making in multiparty cabinets - which are the most frequent type of government across European countries - works, but also for political representation more generally as voters evaluate governments to a large extent based on their performance in office.</p>

</div>

{%- capture pubs_output -%}
  {% bibliography --group_by none --query @*[counterright=true]* %}
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