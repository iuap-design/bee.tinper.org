<div class="sidebar u-col-xs-6 u-col-sm-3 u-col-md-3">
    <ul class="menu-component">
        {% for key in sidebar -%}
            {% if key.hasOwnProperty("type") %}
                <label>{{ key.title }}</label>
            {% else %}
                <li class="menu-group">
                    <div class="menu-group-title">{{ loop.key }}</div> 
                    {% for item in key -%}
                        <div class="menu-item">
                            {% if item.component!='' %}
                                <a href="/{{item.component}}" {% if item.component==docId  %}class="selected"{% endif %}>
                                    {% autoescape false %}
                                        {{ loop.key|replace('([A-Za-z]+)','<span>$1</span>') }}
                                    {% endautoescape %}
                                </a>
                            {% elseif item.url!='' %}
                                <a href="{{item.url}}" >
                                    {% autoescape false %}
                                        <label class="icon uf"> {{item.icon}}</label> {{ loop.key }}
                                    {% endautoescape %}
                                </a>
                            {% else %}
                                {% autoescape false %}
                                    <label>{{ loop.key|replace('([A-Za-z]+)','<span>$1</span>') }}</label>
                                {% endautoescape %}
                            {% endif %}
                        </div>
                    {%- endfor %}
                </li>
            {% endif %}
        {%- endfor %}
    </ul>
    <div class="el-scrollbar__bar is-vertical">
        <div class="el-scrollbar__thumb" style="transform: translateY(0%); height: 20.2947%;"></div>
    </div>
</div>
