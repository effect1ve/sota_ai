try{/**
 * blankshield - Prevent reverse tabnabbing phishing attacks caused by _blank
 *
 * @version   0.6.0
 * @link      https://github.com/danielstjules/blankshield
 * @author    Daniel St. Jules <danielst.jules@gmail.com>
 * @license   MIT
 */
!function(e){"use strict";function n(e){if("undefined"==typeof e.length)o(e,"click",t);else if("string"!=typeof e&&!(e instanceof String))for(var n=0;n<e.length;n++)o(e[n],"click",t)}function t(e){var t,o,i,d;return e=e||window.event,t=e.currentTarget||e.srcElement,i=t.getAttribute("href"),i&&(d=e.ctrlKey||e.shiftKey||e.metaKey,o=t.getAttribute("target"),d||o&&!r(o))?(n.open(i),e.preventDefault?e.preventDefault():e.returnValue=!1,!1):void 0}function o(e,n,t){var o,i;return e.addEventListener?e.addEventListener(n,t,!1):(o="on"+n,e.attachEvent?e.attachEvent(o,t):e[o]?(i=e[o],e[o]=function(){t(),i()}):e[o]=t,void 0)}function i(e,n,t){var o,i,r,d,u;return o=document.createElement("iframe"),o.style.display="none",document.body.appendChild(o),i=o.contentDocument||o.contentWindow.document,d='"'+e+'"',n&&(d+=', "'+n+'"'),t&&(d+=', "'+t+'"'),r=i.createElement("script"),r.type="text/javascript",r.text="window.parent = null; window.top = null;window.frameElement = null; var child = window.open("+d+");child.opener = null",i.body.appendChild(r),u=o.contentWindow.child,document.body.removeChild(o),u}function r(e){return"_top"===e||"_self"===e||"_parent"===e}var d=-1!==navigator.userAgent.indexOf("MSIE"),u=window.open;n.open=function(e,n,t){var o;return r(n)?u.apply(window,arguments):d?(o=u.apply(window,arguments),o.opener=null,o):i(e,n,t)},n.patch=function(){window.open=function(){return n.open.apply(this,arguments)}},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports?module.exports=n:exports.blankshield=n),"function"==typeof define&&"object"==typeof define.amd&&define("blankshield",[],function(){return n}),e.blankshield=n}(this)}catch(e){console.log(e)}try{document.addEventListener("DOMContentLoaded",function(){function n(r,e){var i=e.match(r);return i&&i.length>0&&i[1]||""}function a(r,e){var i=e.match(r);return i&&i.length>1&&i[2]||""}var t=/version\/(\d+(\.?_?\d+)+)/i;var s=[{test:[/googlebot/i],i:function r(r){var e={name:"Googlebot"};var i=n(/googlebot\/(\d+(\.\d+))/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/opera/i],i:function r(r){var e={name:"Opera"};var i=n(t,r)||n(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/opr\/|opios/i],i:function r(r){var e={name:"Opera"};var i=n(/(?:opr|opios)[\s/](\S+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/SamsungBrowser/i],i:function r(r){var e={name:"Samsung Internet for Android"};var i=n(t,r)||n(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/Whale/i],i:function r(r){var e={name:"NAVER Whale Browser"};var i=n(t,r)||n(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/MZBrowser/i],i:function r(r){var e={name:"MZ Browser"};var i=n(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/focus/i],i:function r(r){var e={name:"Focus"};var i=n(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/swing/i],i:function r(r){var e={name:"Swing"};var i=n(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/coast/i],i:function r(r){var e={name:"Opera Coast"};var i=n(t,r)||n(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/yabrowser/i],i:function r(r){var e={name:"Yandex Browser"};var i=n(t,r)||n(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/ucbrowser/i],i:function r(r){var e={name:"UC Browser"};var i=n(t,r)||n(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/Maxthon|mxios/i],i:function r(r){var e={name:"Maxthon"};var i=n(t,r)||n(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/epiphany/i],i:function r(r){var e={name:"Epiphany"};var i=n(t,r)||n(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/puffin/i],i:function r(r){var e={name:"Puffin"};var i=n(t,r)||n(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/sleipnir/i],i:function r(r){var e={name:"Sleipnir"};var i=n(t,r)||n(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/k-meleon/i],i:function r(r){var e={name:"K-Meleon"};var i=n(t,r)||n(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/micromessenger/i],i:function r(r){var e={name:"WeChat"};var i=n(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/msie|trident/i],i:function r(r){var e={name:"Internet Explorer"};var i=n(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/edg([ea]|ios)/i],i:function r(r){var e={name:"Microsoft Edge"};var i=a(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/vivaldi/i],i:function r(r){var e={name:"Vivaldi"};var i=n(/vivaldi\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/seamonkey/i],i:function r(r){var e={name:"SeaMonkey"};var i=n(/seamonkey\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/sailfish/i],i:function r(r){var e={name:"Sailfish"};var i=n(/sailfish\s?browser\/(\d+(\.\d+)?)/i,r);if(i){e.version=i}return e}},{test:[/silk/i],i:function r(r){var e={name:"Amazon Silk"};var i=n(/silk\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/phantom/i],i:function r(r){var e={name:"PhantomJS"};var i=n(/phantomjs\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/slimerjs/i],i:function r(r){var e={name:"SlimerJS"};var i=n(/slimerjs\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],i:function r(r){var e={name:"BlackBerry"};var i=n(t,r)||n(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/(web|hpw)[o0]s/i],i:function r(r){var e={name:"WebOS Browser"};var i=n(t,r)||n(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/bada/i],i:function r(r){var e={name:"Bada"};var i=n(/dolfin\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/tizen/i],i:function r(r){var e={name:"Tizen"};var i=n(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/qupzilla/i],i:function r(r){var e={name:"QupZilla"};var i=n(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/firefox|iceweasel|fxios/i],i:function r(r){var e={name:"Firefox"};var i=n(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:[/chromium/i],i:function r(r){var e={name:"Chromium"};var i=n(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,r)||n(t,r);if(i){e.version=i}return e}},{test:[/chrome|crios|crmo/i],i:function r(r){var e={name:"Chrome"};var i=n(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,r);if(i){e.version=i}return e}},{test:function e(r){var e=!/like android/i.test(r);var i=/android/i.test(r);return e&&i},i:function r(r){var e={name:"Android Browser"};var i=n(t,r);if(i){e.version=i}return e}},{test:[/safari|applewebkit/i],i:function r(r){var e={name:"Safari"};var i=n(t,r);if(i){e.version=i}return e}},{test:[/.*/i],i:function r(r){return{name:n(/^(.*)\/(.*) /,r),version:a(/^(.*)\/(.*) /,r)}}}];function i(r,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=d(r);var a=d(e);var t=Math.max(n,a);var s=0;var o=f([r,e],function(r){var e=t-d(r);var i=r+new Array(e+1).join(".0");return f(i.split("."),function(r){return new Array(20-r.length).join("0")+r}).reverse()});if(i){s=t-Math.min(n,a)}t-=1;while(t>=s){if(o[0][t]>o[1][t]){return 1}if(o[0][t]===o[1][t]){if(t===s){return 0}t-=1}else if(o[0][t]<o[1][t]){return-1}}}function d(r){return r.split(".").length}function f(r,e){var i=[];var n;if(Array.prototype.map){return Array.prototype.map.call(r,e)}for(n=0;n<r.length;n+=1){i.push(e(r[n]))}return i}function o(){if(!window.navigator||!window.navigator.userAgent){return false}var r=window.navigator.userAgent;for(var e=0;e<s.length;e++){var i=s[e];if(typeof i.test==="function"){if(i.test(r)){return i.i(r)}continue}if(i.test instanceof Array){for(var n=0;n<i.test.length;n++){var a=i.test[n];if(a.test(r)){return i.i(r)}}}}return false}var u={t:"52",s:"49",o:"10.3",u:"36",v:"46",m:"67",l:"71",p:"64",h:"11.8",_:"5",g:"1.2",k:"7.12"};var c=o();var v;if(c){switch(c.name){case"Safari":v=c.version&&i(c.version,u.o)!==-1;break;case"Chrome":v=c.version&&i(c.version,"72")!==-1;break;case"Opera":v=c.version&&i(c.version,"46")!==-1;break;default:v=false;break}}if(v){var m=document.querySelectorAll("a[target=_blank]");for(var b=0;b<m.length;b++){var l=m[b];var w=l.getAttribute("rel");if(typeof w!=="string"){w=""}if(w.indexOf("noopener")!==-1){continue}if(w.length>0){w+=" noopener"}else{w+="noopener"}l.setAttribute("rel",w)}}else{blankshield(document.querySelectorAll("a[target=_blank]"))}})}catch(e){console.log(e)}try{!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(O){"use strict";var d=/\r?\n/g,v={};v.fileapi=void 0!==O('<input type="file">').get(0).files,v.formdata=void 0!==window.FormData;var X=!!O.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),O(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=O(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n=t.form;"image"===(n.clk=t).type&&(void 0!==e.offsetX?(n.clk_x=e.offsetX,n.clk_y=e.offsetY):"function"==typeof O.fn.offset?(r=r.offset(),n.clk_x=e.pageX-r.left,n.clk_y=e.pageY-r.top):(n.clk_x=e.pageX-t.offsetLeft,n.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){n.clk=n.clk_x=n.clk_y=null},100)}function C(){var e;O.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}O.fn.attr2=function(){if(!X)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},O.fn.ajaxSubmit=function(F,e,t,r){if(!this.length)return C("ajaxSubmit: skipping submit process - no element selected"),this;var L,E=this;"function"==typeof F?F={success:F}:"string"==typeof F||!1===F&&0<arguments.length?(F={url:F,data:e,dataType:t},"function"==typeof r&&(F.success=r)):void 0===F&&(F={}),L=F.method||F.type||this.attr2("method"),r=(r=(r="string"==typeof(t=F.url||this.attr2("action"))?O.trim(t):"")||window.location.href||"")&&(r.match(/^([^#]+)/)||[])[1],F=O.extend(!0,{url:r,success:O.ajaxSettings.success,type:L||O.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},F);t={};if(this.trigger("form-pre-serialize",[this,F,t]),t.veto)return C("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(F.beforeSerialize&&!1===F.beforeSerialize(this,F))return C("ajaxSubmit: submit aborted via beforeSerialize callback"),this;r=F.traditional;void 0===r&&(r=O.ajaxSettings.traditional);var M=[],a=this.formToArray(F.semantic,M,F.filtering);if(F.data&&(c=O.isFunction(F.data)?F.data(a):F.data,F.extraData=c,c=O.param(c,r)),F.beforeSubmit&&!1===F.beforeSubmit(a,this,F))return C("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[a,this,F,t]),t.veto)return C("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;t=O.param(a,r);c&&(t=t?t+"&"+c:c),"GET"===F.type.toUpperCase()?(F.url+=(0<=F.url.indexOf("?")?"&":"?")+t,F.data=null):F.data=t;var o,n,i,s=[];F.resetForm&&s.push(function(){E.resetForm()}),F.clearForm&&s.push(function(){E.clearForm(F.includeHidden)}),!F.dataType&&F.target?(o=F.success||function(){},s.push(function(e,t,r){var a=arguments,n=F.replaceTarget?"replaceWith":"html";O(F.target)[n](e).each(function(){o.apply(this,a)})})):F.success&&(O.isArray(F.success)?O.merge(s,F.success):s.push(F.success)),F.success=function(e,t,r){for(var a=F.context||this,n=0,o=s.length;n<o;n++)s[n].apply(a,[e,t,r||E,E])},F.error&&(n=F.error,F.error=function(e,t,r){var a=F.context||this;n.apply(a,[e,t,r,E])}),F.complete&&(i=F.complete,F.complete=function(e,t){var r=F.context||this;i.apply(r,[e,t,E])});var u,r=0<O("input[type=file]:enabled",this).filter(function(){return""!==O(this).val()}).length,c="multipart/form-data",t=E.attr("enctype")===c||E.attr("encoding")===c,c=v.fileapi&&v.formdata;C("fileAPI :"+c),!1!==F.iframe&&(F.iframe||(r||t)&&!c)?F.closeKeepAlive?O.get(F.closeKeepAlive,function(){u=f(a)}):u=f(a):u=(r||t)&&c?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(F.extraData){var a=function(e){var t,r,a=O.param(e,F.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(F.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}F.data=null;var n=O.extend(!0,{},O.ajaxSettings,F,{contentType:!1,processData:!1,cache:!1,type:L||"POST"});F.uploadProgress&&(n.xhr=function(){var e=O.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),F.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){F.formData?t.data=F.formData:t.data=r,o&&o.call(this,e,t)},O.ajax(n)}(a):O.ajax(F),E.removeData("jqxhr").data("jqxhr",u);for(var l=0;l<M.length;l++)M[l]=null;return this.trigger("form-submit-notify",[this,F]),this;function f(e){var t,r,c,l,f,d,p,m,h,o=E[0],v=O.Deferred();if(v.abort=function(e){p.abort(e)},e)for(r=0;r<M.length;r++)t=O(M[r]),X?t.prop("disabled",!1):t.removeAttr("disabled");(c=O.extend(!0,{},O.ajaxSettings,F)).context=c.context||c;var i="jqFormIO"+(new Date).getTime(),s=o.ownerDocument,u=E.closest("body");if(c.iframeTarget?(a=(f=O(c.iframeTarget,s)).attr2("name"))?i=a:f.attr2("name",i):(f=O('<iframe name="'+i+'" src="'+c.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),d=f[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";C("aborting upload... "+t),this.aborted=1;try{d.contentWindow.document.execCommand&&d.contentWindow.document.execCommand("Stop")}catch(e){}f.attr("src",c.iframeSrc),p.error=t,c.error&&c.error.call(c.context,p,t,e),l&&O.event.trigger("ajaxError",[p,c,t]),c.complete&&c.complete.call(c.context,p,t)}},(l=c.global)&&0==O.active++&&O.event.trigger("ajaxStart"),l&&O.event.trigger("ajaxSend",[p,c]),c.beforeSend&&!1===c.beforeSend.call(c.context,p,c))return c.global&&O.active--,v.reject(),v;if(p.aborted)return v.reject(),v;(e=o.clk)&&(a=e.name)&&!e.disabled&&(c.extraData=c.extraData||{},c.extraData[a]=e.value,"image"===e.type&&(c.extraData[a+".x"]=o.clk_x,c.extraData[a+".y"]=o.clk_y));var g=1,x=2;function y(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){C("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument||t.document}catch(e){C("cannot get iframe.contentDocument: "+e),r=t.document}return r}var e=O("meta[name=csrf-token]").attr("content"),a=O("meta[name=csrf-param]").attr("content");function n(){var e=E.attr2("target"),t=E.attr2("action"),r=E.attr("enctype")||E.attr("encoding")||"multipart/form-data";o.setAttribute("target",i),L&&!/post/i.test(L)||o.setAttribute("method","POST"),t!==c.url&&o.setAttribute("action",c.url),c.skipEncodingOverride||L&&!/post/i.test(L)||E.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),c.timeout&&(h=setTimeout(function(){m=!0,S(g)},c.timeout));var a=[];try{if(c.extraData)for(var n in c.extraData)c.extraData.hasOwnProperty(n)&&(O.isPlainObject(c.extraData[n])&&c.extraData[n].hasOwnProperty("name")&&c.extraData[n].hasOwnProperty("value")?a.push(O('<input type="hidden" name="'+c.extraData[n].name+'">',s).val(c.extraData[n].value).appendTo(o)[0]):a.push(O('<input type="hidden" name="'+n+'">',s).val(c.extraData[n]).appendTo(o)[0]));c.iframeTarget||f.appendTo(u),d.attachEvent?d.attachEvent("onload",S):d.addEventListener("load",S,!1),setTimeout(function e(){try{var t=y(d).readyState;C("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){C("Server abort: ",e," (",e.name,")"),S(x),h&&clearTimeout(h),h=void 0}},15);try{o.submit()}catch(e){document.createElement("form").submit.apply(o)}}finally{o.setAttribute("action",t),o.setAttribute("enctype",r),e?o.setAttribute("target",e):E.removeAttr("target"),O(a).remove()}}a&&e&&(c.extraData=c.extraData||{},c.extraData[a]=e),c.forceSync?n():setTimeout(n,10);var b,T,j,w=50;function S(t){if(!p.aborted&&!j){if((T=y(d))||(C("cannot access response document"),t=x),t===g&&p)return p.abort("timeout"),void v.reject(p,"timeout");if(t===x&&p)return p.abort("server abort"),void v.reject(p,"error","server abort");if(T&&T.location.href!==c.iframeSrc||m){d.detachEvent?d.detachEvent("onload",S):d.removeEventListener("load",S,!1);var r,t="success";try{if(m)throw"timeout";var e="xml"===c.dataType||T.XMLDocument||O.isXMLDoc(T);if(C("isXml="+e),!e&&window.opera&&(null===T.body||!T.body.innerHTML)&&--w)return C("requeing onLoad callback, DOM not available"),void setTimeout(S,250);var a=T.body||T.documentElement;p.responseText=a?a.innerHTML:null,p.responseXML=T.XMLDocument||T,e&&(c.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":c.dataType}[e.toLowerCase()]},a&&(p.status=Number(a.getAttribute("status"))||p.status,p.statusText=a.getAttribute("statusText")||p.statusText);var n,o,i,s=(c.dataType||"").toLowerCase(),u=/(json|script|text)/.test(s);u||c.textarea?(n=T.getElementsByTagName("textarea")[0])?(p.responseText=n.value,p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText):u&&(o=T.getElementsByTagName("pre")[0],i=T.getElementsByTagName("body")[0],o?p.responseText=o.textContent||o.innerText:i&&(p.responseText=i.textContent||i.innerText)):"xml"===s&&!p.responseXML&&p.responseText&&(p.responseXML=k(p.responseText));try{b=A(p,s,c)}catch(e){t="parsererror",p.error=r=e||t}}catch(e){C("error caught: ",e),t="error",p.error=r=e||t}p.aborted&&(C("upload aborted"),t=null),"success"===(t=p.status?200<=p.status&&p.status<300||304===p.status?"success":"error":t)?(c.success&&c.success.call(c.context,b,"success",p),v.resolve(p.responseText,"success",p),l&&O.event.trigger("ajaxSuccess",[p,c])):t&&(void 0===r&&(r=p.statusText),c.error&&c.error.call(c.context,p,t,r),v.reject(p,"error",r),l&&O.event.trigger("ajaxError",[p,c,r])),l&&O.event.trigger("ajaxComplete",[p,c]),l&&!--O.active&&O.event.trigger("ajaxStop"),c.complete&&c.complete.call(c.context,p,t),j=!0,c.timeout&&clearTimeout(h),setTimeout(function(){c.iframeTarget?f.attr("src",c.iframeSrc):f.remove(),p.responseXML=null},100)}}}var k=O.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},D=O.parseJSON||function(e){return window.eval("("+e+")")},A=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),e=n?e.responseXML:e.responseText;return n&&"parsererror"===e.documentElement.nodeName&&O.error&&O.error("parsererror"),"string"==typeof(e=r&&r.dataFilter?r.dataFilter(e,t):e)&&(("json"===t||!t)&&0<=a.indexOf("json")?e=D(e):("script"===t||!t)&&0<=a.indexOf("javascript")&&O.globalEval(e)),e};return v}},O.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&O.isFunction(O.fn.on),e.delegation||0!==this.length)return e.delegation?(O(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i);var n={s:this.selector,c:this.context};return!O.isReady&&n.s?(C("DOM not ready, queuing ajaxForm"),O(function(){O(n.s,n.c).ajaxForm(e)})):C("terminating; zero elements found by selector"+(O.isReady?"":" (DOM not ready)")),this},O.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},O.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d=this[0],p=this.attr("id"),m=(m=e||void 0===d.elements?d.getElementsByTagName("*"):d.elements)&&O.makeArray(m);if(!(m=p&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(l=O(':input[form="'+p+'"]').get()).length?(m||[]).concat(l):m)||!m.length)return a;for(n=0,u=(m=O.isFunction(r)?O.map(m,r):m).length;n<u;n++)if((f=(s=m[n]).name)&&!s.disabled)if(e&&d.clk&&"image"===s.type)d.clk===s&&(a.push({name:f,value:O(s).val(),type:s.type}),a.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y}));else if((i=O.fieldValue(s,!0))&&i.constructor===Array)for(t&&t.push(s),o=0,c=i.length;o<c;o++)a.push({name:f,value:i[o]});else if(v.fileapi&&"file"===s.type){t&&t.push(s);var h=s.files;if(h.length)for(o=0;o<h.length;o++)a.push({name:f,value:h[o],type:s.type});else a.push({name:f,value:"",type:s.type})}else null!=i&&(t&&t.push(s),a.push({name:f,value:i,type:s.type,required:s.required}));return e||!d.clk||(f=(r=(l=O(d.clk))[0]).name)&&!r.disabled&&"image"===r.type&&(a.push({name:f,value:l.val()}),a.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})),a},O.fn.formSerialize=function(e){return O.param(this.formToArray(e))},O.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=O.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),O.param(o)},O.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],n=O.fieldValue(n,e);null==n||n.constructor===Array&&!n.length||(n.constructor===Array?O.merge(t,n):t.push(n))}return t},O.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if((t=void 0===t?!0:t)&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return O(e).val().replace(d,"\r\n");n=e.selectedIndex;if(n<0)return null;for(var o=[],i=e.options,s="select-one"===a,u=s?n+1:i.length,c=s?n:0;c<u;c++){var l=i[c];if(l.selected&&!l.disabled){var f=(f=l.value)||(l.attributes&&l.attributes.value&&!l.attributes.value.specified?l.text:l.value);if(s)return f;o.push(f)}}return o},O.fn.clearForm=function(e){return this.each(function(){O("input,select,textarea",this).clearFields(e)})},O.fn.clearFields=O.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?O(this).replaceWith(O(this).clone(!0)):O(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&O(this).is(r))&&(this.value="")})},O.fn.resetForm=function(){return this.each(function(){var t=O(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=O(t.attr("for")),r=t.find("input,select,textarea");return a[0]&&r.unshift(a[0]),r.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},O.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},O.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var e=this.type;"checkbox"===e||"radio"===e?this.checked=t:"option"===this.tagName.toLowerCase()&&(e=O(this).parent("select"),t&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=t)})},O.fn.ajaxSubmit.debug=!1});
}catch(e){console.log(e)}try{var request_getlistfields = false;
var request_subscribe = false;

jQuery(document).ready(function(){
	jQuery("input[id*=checkboxall]").click(function() {
		var checked_status = this.checked;
		jQuery("input[id*=checklist]").each(function() {
			this.checked = checked_status;
		});
	});
	
	jQuery("input[id*=checkinvert]").click(function() {	
		jQuery("input[id*=checklist]").each(function() {
			var status = this.checked;
			
			if (status == true) {
				this.checked = false;
			} else {
				this.checked = true;
			}
		});
	});
});

(function($) {
	
	// Open and closing of postboxes
	$('.newsletters .postbox .hndle').on('click', function() {
		//$(this).parent().toggleClass('closed');
	});
	
	// Hook into the "notice-my-class" class we added to the notice, so
	// Only listen to YOUR notices being dismissed
	$(document).on('click', '.notice-newsletters .notice-dismiss', function () {
		// Read the "data-notice" information to track which notice
		// is being dismissed and send it via AJAX
		var type = $(this).closest('.notice-newsletters').data('notice');
		
		// Make an AJAX call
		// Since WP 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		$.ajax(newsletters_ajaxurl + 'action=newsletters_dismissed_notice', {
			type: 'POST',
			data: {
				action: 'newsletters_dismissed_notice',
				type: type,
				security: newsletters.ajaxnonce.dismissed_notice
			}
		});
	});
})(jQuery);

function newsletters_get_country(link) {
	
	var subscriber_id = jQuery(link).data('subscriber-id');	
	var get_country_link = jQuery('#newsletters_subscriber_' + subscriber_id + '_get_country');
	var country_span = jQuery('#newsletters_subscriber_' + subscriber_id + '_country');
	
	get_country_link.html('<i class="fa fa-refresh fa-spin fa-fw"></i>');
	
	if (typeof get_country_request !== 'undefined') {
		get_country_request.abort();
	}
	
	get_country_request = jQuery.ajax({
		url: newsletters_ajaxurl + 'action=newsletters_get_country&security=' + newsletters.ajaxnonce.get_country,
		data: {
			subscriber_id: subscriber_id, 
			security: newsletters.ajaxnonce.get_country
		},
		dataType: "json",
		type: 'POST',
		success: function(response) {			
			if (response.success == true) {
				country_span.html(response.flag);
				get_country_link.remove();
			} else {
				country_span.html('N/A');
				get_country_link.html('<i class="fa fa-question fa-fw"></i>');
			}
		}, 
		error: function(resposne) {
			get_country_link.html('<i class="fa fa-question fa-fw"></i>');
		}
	});
}

function newsletters_focus(element) {
	if (typeof jQuery(element) != "undefined" && jQuery(element).val() == "") {
		setTimeout(function() {
			jQuery(element).focus();
		}, 500);
	}
}

function newsletters_tinymce_content(contentid) {	
	if (jQuery("#wp-" + contentid + "-wrap").hasClass("tmce-active")) {		
		if (typeof(tinyMCE.activeEditor) == "object" && typeof(tinyMCE.activeEditor.getContent) == "function") {
			tinyMCE.triggerSave();
			return tinyMCE.activeEditor.getContent();
		}
	}
	
	return jQuery('#' + contentid).val();
}

function newsletters_tinymce_setcontent(content) {
	jQuery('.wp-editor-wrap .switch-tmce').trigger('click');	
	if (typeof(tinyMCE.activeEditor) == "object" && tinyMCE.activeEditor.setContent != null && typeof(tinyMCE.activeEditor.setContent) == "function") {
		tinyMCE.activeEditor.setContent(content);
		tinyMCE.triggerSave();
	}
	
	jQuery('textarea#content').html(content);
	return true;
}

function newsletters_change_filter(section, filter, value) {
	var expires;
	var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    expires = date.toGMTString();
    
    document.cookie = "newsletters_filter_" + section + "=1; expires=" + expires + "; path=/";
	document.cookie = "newsletters_filter_" + section + "_" + filter + "=" + value + "; expires=" + expires + "; path=/";
}

function hsl2rgb(hsl) {
    var h = hsl[0], s = hsl[1], l = hsl[2];
    var m1, m2, hue;
    var r, g, b
    h = (Math.round( 360*h )/1);
    if (s == 0)
        r = g = b = (l * 255);
    else {
        if (l <= 0.5)
            m2 = l * (s + 1);
        else
            m2 = l + s - l * s;
        m1 = l * 2 - m2;
        hue = h / 360;
        r = Math.round(HueToRgb(m1, m2, hue + 1/3));
        g = Math.round(HueToRgb(m1, m2, hue));
        b = Math.round(HueToRgb(m1, m2, hue - 1/3));
    }
    return {r: r, g: g, b: b};
}

function HueToRgb(m1, m2, hue) {
    var v;
    if (hue < 0)
        hue += 1;
    else if (hue > 1)
        hue -= 1;

    if (6 * hue < 1)
        v = m1 + (m2 - m1) * hue * 6;
    else if (2 * hue < 1)
        v = m2;
    else if (3 * hue < 2)
        v = m1 + (m2 - m1) * (2/3 - hue) * 6;
    else
        v = m1;

    return 255 * v;
}

function wpml_submitserial(form) {
	jQuery('#newsletters_submitserial_button').prop('disabled', true);
	jQuery('#wpml_submitserial_loading').show();
	var formdata = jQuery(form).serialize();

	jQuery.post(newsletters_ajaxurl + 'action=wpmlserialkey&security=' + newsletters.ajaxnonce.serialkey, formdata, function(response) {
		jQuery('#wpmlsubmitserial').html(response);
		jQuery.colorbox.resize();
	});
}

function wpml_deleteserial() {
	jQuery('#wpml_submitserial_loading').show();

	jQuery.post(newsletters_ajaxurl + 'action=wpmlserialkey&delete=1&security=' + newsletters.ajaxnonce.serialkey, false, function(response) {
		jQuery.colorbox.close(); parent.location.reload(1);
	});
}

function jqCheckAll(checker, formid, name) {					
	jQuery('input:checkbox[name="' + name + '[]"]').each(function() {
		jQuery(this).attr("checked", checker.checked);
	});
}

function wpml_scroll(selector) {
	var targetOffset = (jQuery(selector).offset().top - 50);
    jQuery('html,body').animate({scrollTop: targetOffset}, 500);
}

function newsletters_refreshfields(widgetid) {
	if (request_getlistfields) { request_getlistfields.abort(); }
	jQuery('#' + widgetid + '-loading').show();
	jQuery('#' + widgetid + '-button').prop('disabled', true);
	jQuery('#' + widgetid + ' .newsletters-fieldholder :input').attr('readonly', true);
	var formvalues = jQuery('#' + widgetid + '-form').serialize();
	
	request_getlistfields = jQuery.post(newsletters_ajaxurl + "action=wpmlgetlistfields&widget_id=" + widgetid + '&security=' + newsletters.ajaxnonce.refreshfields, formvalues, function(response) {		
		jQuery('#' + widgetid + '-loading').hide();
		jQuery('#' + widgetid + '-button').prop('disabled', false);
		jQuery('#' + widgetid + '-fields').html(response);
		jQuery('#' + widgetid + ' .newsletters-fieldholder :input').attr('readonly', false);
		
		$postpage = jQuery('.newsletters-management, .entry-content, .post-entry, .entry, .page-entry, .page-content');
		$divs = $postpage.find('#' + widgetid + '-form').find('.newsletters-fieldholder:not(.newsletters_submit, .hidden)');		
		for (var i = 0; i < $divs.length; i += 2) {
			$divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
		}
		jQuery($divs).wrap('<div class="col-md-6"></div>');
	});
}

function wpml_titletoslug(title) {
	var title = title.toLowerCase();
	var slug = title.replace(/[^0-9a-z]+/g, "");
	jQuery('#Field_slug').val(slug);	
}

function wpml_tinymcetag(tag) {
	if (typeof(tinyMCE) == "object" && typeof(tinyMCE.execCommand) == "function" && tinyMCE.activeEditor) {
		if (window.tinyMCE && tag != "") {
			window.tinyMCE.execCommand('mceInsertContent', false, tag);	
		}
	} else {
		jQuery('textarea#content').text(jQuery('textarea#content').val() + '\n\n' + tag);
	}
	
	wpml_scroll('#wp-content-editor-container');
}}catch(e){console.log(e)}try{(function($) {	
	$.fn.newsletters_subscribe_form = function() {		
		var $form = this, 
			$submit = $form.find('[type="submit"]'),
			$fields = $form.find('.newsletters-fieldholder :input'),
			$fieldholders = $form.find('.newsletters-fieldholder'),
			$selectfields = $form.find('select'),
			$filefields = $form.find(':file'),
			$filebuttons = $form.find('.btn-file'),
			$errorfields = $form.find('.has-error'),
			$errors = $form.find('.newsletters-field-error'),
			$wrapper = $form.parent(), 
			$loading = $form.find('.newsletters-loading-wrapper'),
			$scroll = $form.find('input[name="scroll"]'),
			$progress = $form.find('.newsletters-progress'),
			$progressbar = $form.find('.newsletters-progress .progress-bar'),
			$progresspercent = $form.find('.newsletters-progress .sr-only'), 
			$postpageclasses = '.newsletters-management, .entry-content, .post-entry, .entry, .page-entry, .page-content', 
			$postpagecontainer = $form.closest($postpageclasses), 
			$recaptcha_id, 
			$recaptcha_element, 
			$recaptcha_loaded = false;
			
		var on_form_submit = function() {							
			$($form).trigger('newsletters_subscribe_form_submit');

			$form.addClass('was-validated');
			
			// reCAPTCHA stuff
			if (typeof grecaptcha !== 'undefined' && newsletters.has_captcha && newsletters.captcha === 'recaptcha' && newsletters.recaptcha_type === 'invisible') {							
				if (typeof $recaptcha_id !== 'undefined') {								
					var token = grecaptcha.getResponse($recaptcha_id);
		
					if (!token) {
						grecaptcha.execute($recaptcha_id);
						return false;
					}
				}
			}
				
			$loading.show();
			if (typeof $filefields !== 'undefined' && $filefields.length > 0) {
				$progress.show();
			}
			
			if (typeof $errors !== 'undefined') { $errors.slideUp(); }
			if (typeof $errorfields !== 'undefined') { $errorfields.removeClass('has-error'); }
			$submit.prop('disabled', true);
			$fields.attr('readonly', true);
			
			if ($.isFunction($.fn.select2) && typeof $selectfields !== 'undefined' && $selectfields.length > 0) {
				$selectfields.select2('destroy');
				$selectfields.attr('readonly', true);
				$selectfields.select2();
			}
			
			$($form).trigger('newsletters_subscribe_form_submitted');
		};
		
		var do_scroll = function() {
			if (typeof $scroll !== 'undefined' && $scroll.val() == 1) {	
				var targetOffset = ($wrapper.offset().top - 50);
				$('html,body').animate({scrollTop: targetOffset}, 500);
			}
		}
		
		var on_form_error = function() {
			alert(newsletters.ajax_error);
			
			$loading.hide();
			if (typeof $filefields !== 'undefined' && $filefields.length > 0) {
				$progress.hide();
			}
			
			$submit.prop('disabled', false);
			$fields.removeAttr('readonly');
			
			if ($.isFunction($.fn.select2) && typeof $selectfields !== 'undefined' && $selectfields.length > 0) {
				$selectfields.select2('destroy');
				$selectfields.removeAttr('readonly');
				$selectfields.select2();
			}
		};
		
		if ($form.hasClass('newsletters-subscribe-form-ajax')) {
			$form.on('submit', on_form_submit);
		}
		
		$($fields, $filefields).on('focus click', function() {
			$(this).removeClass('newsletters_fielderror').nextAll('div.newsletters-field-error').slideUp().parent().removeClass('has-error');	
		});
		
		if ($.isFunction($.fn.select2) && typeof $selectfields !== 'undefined' && $selectfields.length > 0) {
			$selectfields.select2();
		}
		
		if (!$form.hasClass('form-inline') && $form.hasClass('form-twocolumns')) {	
			$form.wrap('<div class="container"></div>');					
			$divs = $postpagecontainer.find($form).find('.newsletters-fieldholder:not(.newsletters_submit, .hidden)');
			for (var i = 0; i < $divs.length; i += 2) {
				$divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
			}
			jQuery($divs).wrap('<div class="col-md-6"></div>');
			$postpagecontainer.find($form).find('.newsletters-progress').addClass('col-md-12');
		}
		
		if ($form.hasClass('newsletters-subscribe-form-ajax')) {			
			if ($.isFunction($.fn.ajaxForm)) {
				$form.ajaxForm({
					url: newsletters_ajaxurl + 'action=wpmlsubscribe&security=' + newsletters.ajaxnonce.subscribe,
					data: (function() {	
						var formvalues = $form.serialize();							
						return formvalues;
					})(),
					type: 'POST',
					cache: false,
					beforeSubmit: function() {																		
						// we can do things before the form is submitted
					},
					beforeSend: function() {
				        var percentVal = '0%';
				        $progressbar.width(percentVal);
				        $progresspercent.html(percentVal);
				        $($form).trigger('newsletters_subscribe_form_before_ajax');
				    },
				    uploadProgress: function(event, position, total, percentComplete) {
				        var percentVal = percentComplete + '%';
				        $progressbar.width(percentVal).attr('aria-valuenow', percentComplete);
				        $progresspercent.html(percentVal);
				        $($form).trigger('newsletters_subscribe_form_upload_progress');
				    },
					success: function(response) {							
						if ($('.newsletters-subscribe-form', $('<div/>').html(response)).length > 0) {			
							$wrapper.html($(response).find('.newsletters-subscribe-form'));
						} else {
							$wrapper.html(response);
						}
						
						$wrapper.find('.newsletters-subscribe-form').newsletters_subscribe_form();
						
						do_scroll();
						
						$($form).trigger('newsletters_subscribe_form_success_ajax');
					    
					},
					error: function() {
						// an error occurred
						on_form_error();
						
						$($form).trigger('newsletters_subscribe_form_error_ajax');	
					},
					complete: function() {
						var percentVal = '100%';
				        $progressbar.width(percentVal);
				        $progresspercent.html(percentVal);
				        
				        $($form).trigger('newsletters_subscribe_form_complete_ajax');
					}
				});
			}
		}
		
		var recaptcha_callback = function() {			
			if (newsletters.has_captcha && newsletters.captcha === 'recaptcha' && $recaptcha_loaded == false) {				
				$recaptcha_element = $form.find('.newsletters-recaptcha-challenge');

				if (typeof grecaptcha !== 'undefined') {					
					var recaptcha_options = {
						sitekey: newsletters.recaptcha_sitekey,
						theme: newsletters.recaptcha_theme,
						type: 'image',
						size: (newsletters.recaptcha_type === 'invisible' ? 'invisible' : 'normal'),
						callback: function() {							
							if (newsletters.recaptcha_type === 'invisible') {
								$form.submit();
							}
						},
						'expired-callback': function() {							
							if (typeof $recaptcha_id !== 'undefined') {
								grecaptcha.reset($recaptcha_id);
							}
						}
					};
					
					if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.render !== 'undefined') {						
						$recaptcha_id = grecaptcha.render($recaptcha_element[0], recaptcha_options, true);
						$recaptcha_loaded = true;
					}
				}
			}
		}
		
		$(window).on('load', recaptcha_callback);
		recaptcha_callback();
		
		$form.trigger('newsletters_subscribe_form_after_create');
		return $form;
	};
	
	$(function() {
		$('.newsletters-subscribe-form').each( function() {
			$(this).trigger('newsletters_subscribe_form_before_create');
			$(this).newsletters_subscribe_form();
		});
	});
})(jQuery)}catch(e){console.log(e)}try{/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'grab'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

}}catch(e){console.log(e)}try{/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

)}catch(e){console.log(e)}