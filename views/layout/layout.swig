<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{% block title %}tinper-bee{% endblock %}</title>
    <link rel="icon" href="logos/favicon.png" type="image/png" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="tinper-bee 是基于 iuap design 的 react 组件库，包含丰富的基础组件和应用组件，支持组件的灵活调用和扩展，助力快速进行应用的组件化开发。">
    <meta name="keywords" content="tinper-bee, tinper, bee">
    <meta name="keywords" content="react, UI, framework">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit">
    <link rel="icon" href="//tinper.org/assets/images/favicon.png" type="image/png" sizes="16x16">
    {% block head%}

        <link href="//cdn.jsdelivr.net/highlight.js/9.8.0/styles/default.min.css" type="text/css" rel="stylesheet" />
        <link href="./css/atom-one-dark.css" type="text/css" rel="stylesheet" />
        <link href="./css/layout.css" type="text/css" rel="stylesheet" />

    {% endblock%}
    {% block css %}{% endblock%}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script src="http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/config.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109836800-1"></script>
    <script>
        function getCookie(name){ 
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]); 
            else 
                return null; 
        }
        let cookie = this.getCookie(window.tinperCookieId);
        if(cookie){
            document.getElementById("tinper-bee-csslink").href = (window.tinperCdnUrl+cookie);
        }
        var t1=window.setInterval(refreshCount, 1000);
        function refreshCount() {
            var ifm= document.getElementById("theme-iframe");
            if(ifm){
                ifm.height=3500;// document.documentElement.clientHeight+200;
                window.clearInterval(t1);   
            }
        }
        window.addEventListener("message", function( event ) {
            console.log("tinper.bee.org message: ",event.data);
            // document.getElementById("tinper-bee-csslink").href = (window.tinperCdnUrl+event.data);
        }, false );
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-109836800-1');
    </script>
</head>

<body>

{% include "../common/header.swig"%}
{% include "../common/nav.swig"%}
{% block content %}{% endblock %}


<script src="//cdn.jsdelivr.net/highlight.js/9.8.0/highlight.min.js"></script>
<script>
    hljs.initHighlightingOnLoad();
</script>
{% block script %}
    <!-- Jquery and Js Plugins -->
{% endblock %}
</body>
</html>

