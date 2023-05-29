---
title: 📖 Theoria
layout: default
type: primary
order: 2
---

# Theoria

Learning and truth seeking via journalism, book reviews, tech articles, and the like

<hr style="height:2px;border:none;color:#333;background-color:#333;" />

<ul style="padding-left: 0;">
{% assign posts = site.posts | where: "category", "theoria" %}
{% for post in posts %}
<div>
    <img style="width: 100px; float: right;" src="{{ post.cover }}">
    <h3 style="margin : 0"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small style="margin : 0">{{ post.date | date: "%B %-d %Y"}}</small>
    <t style="margin : 0">{{ post.excerpt }} </t>
    <hr/>
</div>
{% endfor %}
</ul>