// ==UserScript==
// @name         IMW/BIS Debugger
// @namespace    https://github.com/madobon/MyTamperMonkey
// @version      0.1
// @description  shows how to use babel compiler
// @author       madobon
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        http://*/*/user/*/*list*
// @match        http://*/*/reference/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */
    $(function(){
        let $list = $('.ui-jqgrid-btable');
        $list.on('jqGridAfterGridComplete', function(){
            $list.find('input[type=hidden]').each(function() {
                let $self = $(this);
                $self.parent().find('.tm').remove();
                $self.parent().prepend($self.clone(true).attr('type', 'text').addClass('tm').mouseover(function(){
                    $(this).select();
                }));
            });
        });
    });
    //# sourceURL=us.js
/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
