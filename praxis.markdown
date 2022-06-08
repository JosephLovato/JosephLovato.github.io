---
title: Praxis
layout: default
type: primary
order: 4
---

# Praxis 

*All-experience blog*

<ul style="padding-left: 0;">
{% assign posts = site.posts | where: "category", "praxis" %}
{% for post in posts %}
    <h3 style="margin : 0"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small style="margin : 0">{{ post.date | date: "%B %-d %Y"}}</small>
    <t style="margin : 0">{{ post.excerpt }} </t>
{% endfor %}
</ul>