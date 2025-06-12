---
layout: page
title: data
permalink: /data/
description: 
nav: true
nav_order: 5
---

<div style="border: 1px solid #ccc; border-radius: 5px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2 style="margin-top: 0;">PARTYPRESS</h2>
  
  <img src="{{ '/assets/img/data/partypress.jpg' | relative_url }}" alt="PARTYPRESS" style="float: left; margin: 0 10px 10px 0; border-radius: 10px; max-width: 100%; height: auto; width: 300px;">

  <p>The <strong>PARTYPRESS</strong> <strong>dataset</strong> compiles more than 250,000 published press releases from 68 parties in 9 European countries. The dataset covers the press releases of the most relevant political parties in these countries from 2010 onward. It provides a supervised machine learning classification of press releases into 21 unique issue categories according to a general codebook. The PARTYPRESS dataset can be used to study parties’ issue agendas comparatively and over time. The Partypress dataset has been compiled with the generous support of the German Research Foundation (Grants KL 2692/1-1 and KL 2692/3-1).</p>

  <h3>data access</h3>
  <p>The dataset, accompanying codebooks and citation information are published on the Harvard Dataverse. You can download the data <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/OINX7Q">here</a>.</p>

{%- capture pubs_output -%}
  {% bibliography --query @*[dataset=partypress]* %}
{%- endcapture -%}

{% if pubs_output contains "<li>" %}
  <div>
    <h3>
      <a href="{{ '/publications/' | relative_url }}" style="color: inherit">
        related publications
      </a>
    </h3>
    <div class="publications">
      {{ pubs_output }}
    </div>
  </div>
{% endif %}

</div>

<div style="border: 1px solid #ccc; border-radius: 10px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2 style="margin-top: 0;">COALITIONAGREE</h2>
  
  <img src="{{ '/assets/img/data/coalitionagree.jpg' | relative_url }}" alt="COALITIONAGREE" style="float: left; margin: 0 10px 10px 0; border-radius: 5px; max-width: 100%; height: auto; width: 300px;">

  <p>The <strong>COALITIONAGREE</strong> <strong>dataset</strong> maps the content of 229 coalition agreements that have been negotiated by 189 parties between 1945 and 2015 in 24 West and East European countries. Our dataset is not only much more comprehensive than previous datasets, but most importantly, we also provide the first content analysis that allows for studying which policies are settled in coalition agreements. The dataset is based on a comprehensive content analysis of coalition treaties that draws on human coders to analyze the content of coalition agreements and can be easily linked to existing datasets on the content of election manifestos (e.g. Manifestos Project) and on parties, elections and cabinets (e.g. the ParlGov or ERDDA datasets). The COALITIONAGREE dataset has been compiled with the generous support of the German Research Foundation (Grants KL 2692/1-1 and KL 2692/3-1).</p>

  <h3>data access</h3>
  <p>The dataset, accompanying codebooks and citation information are published on the Harvard Dataverse. You can download the data <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/XM5A08">here</a>.</p>

{%- capture pubs_output -%}
  {% bibliography --query @*[dataset=coalitionagree]* %}
{%- endcapture -%}

{% if pubs_output contains "<li>" %}
  <div>
    <h3>
      <a href="{{ '/publications/' | relative_url }}" style="color: inherit">
        related publications
      </a>
    </h3>
    <div class="publications">
      {{ pubs_output }}
    </div>
  </div>
{% endif %}

</div>

<div style="border: 1px solid #ccc; border-radius: 10px; padding: 1.5em; margin: 2em 0; background-color: #f9f9f9;">

  <h2 style="margin-top: 0;">LOBBYLIST</h2>
  
  <img src="{{ '/assets/img/data/lobbylist.jpg' | relative_url }}" alt="LOBBYLIST" style="float: left; margin: 0 10px 10px 0; border-radius: 5px; max-width: 100%; height: auto; width: 300px;">

  <p>The <strong>LOBBYLIST</strong> <strong>dataset</strong> contains all the interest groups that registered at the German Bundestag from 1974 until 2014. On 21 September 1972, the Bundestag adopted a law that obliges all interest groups that lobby the Bundestag to officially register. The first register was published in 1974 and the Bundestag has released annual lobbying registers ever since. All interest groups have to provide informStoetzeration about the interest they represent, their members, their leadership structure, their affiliated organizations and their contact details. Interest groups can only enter the Bundestag and participate in hearings or consultations if they are officially registered. The Bundestag lobbying register thus provides a worldwide unique data source to study interest group activity over time. In a research project generously funded by the British Academy (Grant SG111433) and the Fritz Thyssen Foundation (Grant Az. 10.13.2.109) awarded to Heike Klüver, Heike Klüver and Elisabeth Zeidler have compiled a longitudinal dataset based on the yearly lobby lists. The dataset covers all registered interest groups, their members, their organizational structure, the policy areas and economic sections in which they are active coded based on the Policy Agendas Codebook and the ISIC Classification.</p>

  <h3>data access</h3>
  <p>The dataset, accompanying codebooks and citation information are published on the Harvard Dataverse. You can download the data <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/Q5GGCF">here</a>.</p>

{%- capture pubs_output -%}
  {% bibliography --query @*[dataset=lobbylist]* %}
{%- endcapture -%}

{% if pubs_output contains "<li>" %}
  <div>
    <h3>
      <a href="{{ '/publications/' | relative_url }}" style="color: inherit">
        related publications
      </a>
    </h3>
    <div class="publications">
      {{ pubs_output }}
    </div>
  </div>
{% endif %}

</div>