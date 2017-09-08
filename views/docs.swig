{% extends 'layout/layout.swig' %}

{% block css %}
  <link href="//design.yonyoucloud.com/static/tinper-bee/0.6.2/assets/tinper-bee.min.css" rel="stylesheet" media="screen">
    {% if docId && isComponent==1 %}
        <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
    {% endif %}
    <link href="/css/md.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}
    <script src="/console-polyfill/index.js"></script>
    <script src="/es5-shim/es5-shim.min.js"></script>
    <script src="/es5-shim/es5-sham.min.js"></script>
    <script src="http://design.yonyoucloud.com/static/react/15.3.2/react.js"></script>
    <script src="http://design.yonyoucloud.com/static/react/15.3.2/react-dom.js"></script>
    {% if docId && isComponent==1 %}
        <script src="/{{docId}}/dist/demo.js"></script>
    {% endif %}
{% endblock %}

{% block content %}
<div class="page-container u-container example">
    <div class="u-row">
        {% include "common/sidebar.swig"%}
        <div class="u-col-xs-12 u-col-sm-9 u-col-md-9">
            {% autoescape false %}
                {{ doc| }}
            {% endautoescape %}
        </div>
    </div>
</div>
{% endblock %}
