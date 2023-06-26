!function(e,t){"use strict";window.JetPopupElementorFrontend={init:function(){if(!t)return!1;t.hooks.addAction("frontend/element_ready/widget",JetPopupElementorFrontend.elementorWidget);const p={"jet-popup-action-button.default":JetPopupElementorFrontend.widgetPopupActionButton,"jet-popup-mailchimp.default":JetPopupElementorFrontend.widgetPopupMailchimp};e.each(p,(function(e,p){t.hooks.addAction("frontend/element_ready/"+e,p)}))},elementorWidget:function(p){p.data("id"),p.data("element_type");let o=p.data("jet-popup")||!1;if(o){let i=o["trigger-type"],n=o["trigger-custom-selector"],a={popupId:o["attached-popup"]};if(p.hasClass("jet-popup-attach-event-inited"))return!1;switch(p.addClass("jet-popup-attach-event-inited"),i){case"click-self":p.addClass("jet-popup-cursor-pointer"),p.on("click.JetPopup",(function(i){i.preventDefault();e(this);return t.hooks&&(a=t.hooks.applyFilters("jet-popup/widget-extensions/popup-data",a,o,p,i)),e(window).trigger({type:"jet-popup-open-trigger",popupData:a,triggeredBy:p}),!1}));break;case"click":p.on("click.JetPopup",".elementor-button, .jet-button__instance .jet-popup-action-button__instance",(function(i){return i.preventDefault(),t.hooks&&(a=t.hooks.applyFilters("jet-popup/widget-extensions/popup-data",a,o,p,i)),e(window).trigger({type:"jet-popup-open-trigger",popupData:a,triggeredBy:e(this)}),!1}));break;case"click-selector":""!==n&&(e(n).addClass("jet-popup-cursor-pointer"),p.on("click.JetPopup",n,(function(i){i.preventDefault();var n=e(i.currentTarget);return n.addClass("jet-popup-cursor-pointer"),t.hooks&&(a=t.hooks.applyFilters("jet-popup/widget-extensions/popup-data",a,o,p,i)),e(window).trigger({type:"jet-popup-open-trigger",popupData:a,triggeredBy:n}),!1})));break;case"hover":p.on("mouseenter.JetPopup",(function(i){t.hooks&&(a=t.hooks.applyFilters("jet-popup/widget-extensions/popup-data",a,o,p,i)),e(window).trigger({type:"jet-popup-open-trigger",popupData:a,triggeredBy:p})}));break;case"scroll-to":t.waypoint(p,(function(i){t.hooks&&(a=t.hooks.applyFilters("jet-popup/widget-extensions/popup-data",a,o,p,i)),e(window).trigger({type:"jet-popup-open-trigger",popupData:a,triggeredBy:p})}),{offset:"bottom-in-view"})}}},widgetPopupActionButton:function(t){var p=e(".jet-popup-action-button__instance",t),o=p.data("settings")["action-type"];window.JetPopupFrontend.actionButtonHandle(p,o)},widgetPopupMailchimp:function(t){var p=t.find(".jet-popup-mailchimp"),o=t.data("id"),i=p.data("settings"),n=e(".jet-popup-mailchimp__form",p),a=(e(".jet-popup-mailchimp__fields",p),e(".jet-popup-mailchimp__mail-field",p)),r=a.data("instance-data"),s=e(".jet-popup-mailchimp__submit",p),u=e(".jet-popup-mailchimp__message",p),l=null,d=p.closest(".jet-popup");a.on("focus",(function(){a.removeClass("mail-invalid")})),e(document).keydown((function(e){if(13===e.keyCode&&a.is(":focus"))return subscribeHandle(),!1})),s.on("click",(function(){return subscribeHandle(),!1})),self.subscribeHandle=function(){var t=a.val(),c={email:t,target_list_id:i.target_list_id||"",data:r},m=n.serializeArray(),g={};/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?(e.each(m,(function(e,t){"email"===t.name?c[t.name]=t.value:g[t.name]=t.value})),c.additional=g,l=jQuery.ajax({type:"POST",url:window.jetPopupData.ajax_url,data:{action:"jet_popup_mailchimp_ajax",data:c},beforeSend:function(e,t){null!==l&&l.abort()},error:function(e,t){},success:function(t,n,a){var l=t.type,c=t.message||"",m="jet-popup-mailchimp--response-"+l;if(s.removeClass("loading"),p.removeClass("jet-popup-mailchimp--response-error"),p.addClass(m),e("span",u).html(c),u.css({visibility:"visible"}),setTimeout((function(){u.css({visibility:"hidden"}),p.removeClass(m)}),1e4),i.redirect&&(window.location.href=i.redirect_url),e(window).trigger({type:"jet-popup/mailchimp",elementId:o,successType:l,inputData:r}),!0===i.close_popup_when_success&&d[0]&&"success"===l){var g=d.attr("id");setTimeout((function(){e(window).trigger({type:"jet-popup-close-trigger",popupData:{popupId:g,constantly:!1}})}),3e3)}}}),s.addClass("loading")):(a.addClass("mail-invalid"),p.addClass("jet-popup-mailchimp--response-error"),e("span",u).html("Please specify a valid email"),u.css({visibility:"visible"}),setTimeout((function(){p.removeClass("jet-popup-mailchimp--response-error"),u.css({visibility:"hidden"}),a.removeClass("mail-invalid")}),1e4))}}},e(window).on("elementor/frontend/init",(()=>{window.JetPopupElementorFrontend.init()}))}(jQuery,window.elementorFrontend);