{% extends 'layout/layout.swig' %}

{% block css %}
  <link href="//design.yonyoucloud.com/static/tinper-bee/1.2.9/assets/tinper-bee.css" rel="stylesheet" media="screen">
    {% if docId && isComponent==1 %}
        <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
    {% endif %}
    <link href="/css/md.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}

        <script src="//design.yonyoucloud.com/static/react/15.3.2/react.js"></script>
        <script src="//design.yonyoucloud.com/static/react/15.3.2/react-dom.js"></script>

    <script src="//design.yonyoucloud.com/static/prop-types/15.6.0/prop-types.min.js"></script>
    {% if docId && isComponent==1 %}
        <script src="/{{docId}}/dist/demo.js"></script>
    {% endif %}
{% endblock %}

{% block content %}
<div class="page-container u-container example">
    <div class="u-row content-container">
        {% include "common/sidebar.swig"%}
        <div class="u-col-xs-12 u-col-sm-9 u-col-md-9 demo-container">
            {% autoescape false %}
                {{ doc| }}
            {% endautoescape %}
        </div>
    </div>
</div>
{% endblock %}
