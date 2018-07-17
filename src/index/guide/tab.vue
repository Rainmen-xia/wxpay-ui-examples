<template>
<article class="wepay-article" id="tab">
    <h1>
        Tab
        <span class="subtitle">标签</span>
    </h1>
    <p>选项卡切换组件，提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
    <section>
        <h2>
            <span>何时使用</span>
        </h2>
        <ul class="wepay-article-cir">
            <li>卡片式的页签，常用于容器顶部</li>
            <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs</li>
            <li>RadioButton可作为更次级的页签来使用</li>
        </ul>
        <h2>
            <span>代码示例</span>
        </h2>
        <blockquote>
            <p>演示</p>
        </blockquote>
        <div class="code-wrap">
            <div class="content-hd">
                <div class="title-tab">
                    <ul class="clr">
                        <li class="first selected"><a href="javascript:;">支付申请</a></li>
                        <li><a href="javascript:;">数据概览</a></li>
                        <li><a href="javascript:;">商户信息</a></li>
                        <li><a href="javascript:;">开发配置</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <blockquote>
            <p>结构</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs html">&lt;div class=&quot;title-tab&quot;&gt;
    &lt;ul class=&quot;clr&quot;&gt;
        &lt;li class=&quot;first selected&quot;&gt;&lt;a href=&quot;javascript:;&quot;&gt;支付申请&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;javascript:;&quot;&gt;数据概览&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;javascript:;&quot;&gt;商户信息&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;javascript:;&quot;&gt;开发配置&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div class="mark-wrap">
            <dl>
                <dt>title-tab li扩展类</dt>
                <dd>第一个tab,给li添加类first</dd>
                <dd>选中时，给li添加selected</dd>
            </dl>
        </div>
        
        <blockquote>
            <p>样式</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs css">.title-tab{margin-top:-14px;}
.title-tab ul{line-height:40px;border-bottom:1px solid #e7e7eb;}
.title-tab li{float:left;margin-bottom:-1px;}
.title-tab li:hover{border-bottom:3px solid #a0a3ab;}
.title-tab li.first a{padding-left:30px;}
.title-tab li.selected{border-bottom:3px solid #44b549;}
.title-tab li a{display:block;padding:0 22px;color:#222222;}
.title-tab li a:hover{text-decoration:none;}
</code></pre>
        </div>
        
        <blockquote>
            <p>演示</p>
        </blockquote>
        <div class="code-wrap">
            <div class="section-box">
                <div class="section-tab">
                    <ul class="clr">
                        <li class="selected"><a href="javascript:;">企业红包</a></li>
                        <li><a href="javascript:;">现金红包</a></li>
                        <li><a href="javascript:;">代金券</a></li>
                    </ul>
                </div>
                <div class="section-cnt"></div>
            </div>
        </div>
        
        <blockquote>
            <p>结构</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs html">&lt;div class=&quot;section-box&quot;&gt;
    &lt;div class=&quot;section-tab&quot;&gt;
        &lt;ul class=&quot;clr&quot;&gt;
            &lt;li class=&quot;selected&quot;&gt;&lt;a href=&quot;javascript:;&quot;&gt;企业红包&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:;&quot;&gt;现金红包&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:;&quot;&gt;代金券&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class=&quot;section-cnt&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div class="mark-wrap">
            <dl>
                <dt>section-tab li扩展类</dt>
                <dd>选中时，给li添加selected</dd>
            </dl>
        </div>
        
        <blockquote>
            <p>样式</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs css">.section-tab{line-height:36px;}
.section-tab ul{margin-bottom:-10px;border-bottom:1px solid #e7e7eb;}
.section-tab li{float:left;margin-bottom:-1px;}
.section-tab li a{display:block;padding:0 22px;color:#222222;border:1px solid transparent;border-width:3px 1px 1px;}
.section-tab li a:hover{text-decoration:none;background:#f4f5f9;}
.section-tab li.selected a{border-color:#44b549 #e7e7eb #ffffff;background:#ffffff;}</code></pre>
        </div>
        
        <blockquote>
            <p>演示</p>
        </blockquote>
        <div class="code-wrap">
            <div class="button-group">
                <a class="btn btn-default" href="javascript:;">普通商户</a>
                <a class="btn btn-default selected" href="javascript:;">服务商</a>
            </div>
        </div>
                    
        <blockquote>
            <p>结构</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs html">&lt;div class=&quot;button-group&quot;&gt;
    &lt;a class=&quot;btn btn-default&quot; href=&quot;javascript:;&quot;&gt;普通商户&lt;/a&gt;
    &lt;a class=&quot;btn btn-default selected&quot; href=&quot;javascript:;&quot;&gt;服务商&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </div>
        <div class="mark-wrap">
            <dl>
                <dt>btn扩展类</dt>
                <dd>selected：选中效果</dd>
            </dl>
        </div>
        
        <blockquote>
            <p>样式</p>
        </blockquote>
        <div class="copy-wrap">
        <a href="javascript:;" class="copy-text">复制代码</a>
        <pre><code class="auto hljs css">.button-group{font-size:0;}
.button-group .btn{margin-right:-1px;*margin-right:-2px;vertical-align:top;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}
.button-group .btn.selected{background:#576477!important;border-color:#576477;color:#ffffff;}
.button-group .dropdown{font-size:14px;}
.button-group.with-space .cbx-label{margin:0 20px!important;font-size:14px;}
.button-group.with-space .btn{padding:0 10px;margin-right:8px;}
.button-group.inside-info-box{margin-right:-14px;}
.button-group.inside-info-box .btn{height:38px;line-height:38px;border-width:0 1px;background:transparent;}
.button-group.inside-info-box .dropdown-list{font-size:14px;}</code></pre>
        </div>
    </section>
    </article>
</template>
<script type="text/javascript">
    
</script>