---
title: ✈️ Praxis
layout: default
type: primary
order: 4
---

# ✈️ Praxis 

All experience blog

<hr style="height:2px;border:none;color:#333;background-color:#333;" />

<ul style="padding-left: 0;">
{% assign posts = site.posts | where: "category", "praxis" %}
{% for post in posts %}
<img style="width: 130px; float: right;" src="{{ post.cover }}">
    <h3 style="margin : 0"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small style="margin : 0">{{ post.date | date: "%B %-d %Y"}}</small>
    <t style="margin : 0">{{ post.excerpt }} </t>
    <hr/>
{% endfor %}
</ul>