{% extends 'layout/layout.swig' %}

{% block css %}
<link href="//design.yonyoucloud.com/static/tinper-bee/2.0.2/assets/tinper-bee.css" id="tinper-bee-csslink" rel="stylesheet" media="screen" />
    {% if docId && isComponent==1 && tag %}
        <link href="//design.yonyoucloud.com/static/tinper-bee/components/{{docId}}/dist/{{tag}}/demo.css" type="text/css" rel="stylesheet" />
    {% elseif docId && isComponent==1 %}
        <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
    {% elseif (docId.indexOf('ac-')>-1 || docId.indexOf('ref-')>-1) && isComponent==0 %}
        <link href="https://tinper-acs.github.io/{{docId}}/styles.css" type="text/css" rel="stylesheet" />
    {% endif %}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" /> 
    <link href="/css/md.css" type="text/css" rel="stylesheet" />
    <link href="/css/doc-search.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}

        <script src="//design.yonyoucloud.com/static/react/16.6.0/umd/react.development.js"></script>
        <script src="//design.yonyoucloud.com/static/react/16.6.0/umd/react-dom.development.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script> 
        <script>
             docsearch({ 
                apiKey: 'd388a4977faabf821db64112c8abdcf7', 
                indexName: 'bee_tinper', 
                inputSelector: '#componentSearch', 
                debug: false // Set debug to true if you want to inspect the dropdown 
            }); 
        </script>
        
    <script src="//design.yonyoucloud.com/static/prop-types/15.6.0/prop-types.min.js"></script>
    {% if docId && isComponent==1 && tag %}
        <script src="//design.yonyoucloud.com/static/tinper-bee/components/{{docId}}/dist/{{tag}}/demo.js"></script>
    {% elseif docId && isComponent==1 %}
        <script src="/{{docId}}/dist/demo.js"></script>
    {% elseif (docId.indexOf('ac-')>-1 || docId.indexOf('ref-')>-1)  && isComponent==0 %}
        {% for key, val in jsList %}
            <script src="{{val}}"></script>
        {% endfor %}
    {% endif %}

        <script>
            var select = document.getElementById('tagSelect');
            if(select){
                select.onchange=function(){
                    var selectTag = select.value;
                    window.location.search='?tag='+selectTag;
                }
            }
        </script>
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

