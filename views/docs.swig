{% extends 'layout/layout.swig' %}

{% block css %}
  <link href="//design.yonyoucloud.com/static/tinper-bee/1.6.3/assets/tinper-bee.css" rel="stylesheet" media="screen">
    {% if docId && isComponent==1 %}
        <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
    {% elseif (docId.indexOf('ac-')>-1 || docId.indexOf('ref-')>-1) && isComponent==0 %}
        <link href="https://tinper-acs.github.io/{{docId}}/styles.css" type="text/css" rel="stylesheet" />
    {% endif %}
    <link href="/css/md.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}

        <script src="//design.yonyoucloud.com/static/react/16.6.0/umd/react.development.js"></script>
        <script src="//design.yonyoucloud.com/static/react/16.6.0/umd/react-dom.development.js"></script>

    <script src="//design.yonyoucloud.com/static/prop-types/15.6.0/prop-types.min.js"></script>
    {% if docId && isComponent==1 %}
        <script src="/{{docId}}/dist/demo.js"></script>
    {% elseif (docId.indexOf('ac-')>-1 || docId.indexOf('ref-')>-1)  && isComponent==0 %}
        {% for key, val in jsList %}
            <script src="{{val}}"></script>
        {% endfor %}
    {% endif %}
{% endblock %}

{% block content %}
<div class="page-container example">
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
