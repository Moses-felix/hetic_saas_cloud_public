// source --> http://localhost/wp-includes/blocks/navigation/view.min.js?ver=e3d6f3216904b5b42831 
"use strict";(self.__WordPressPrivateInteractivityAPI__=self.__WordPressPrivateInteractivityAPI__||[]).push([[3],{932:function(e,n,o){var t=o(754);const a=["a[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];document.addEventListener("click",(()=>{}));const i=(e,n)=>{const{context:o,selectors:t}=e;t.core.navigation.menuOpenedBy(e)[n]=!0,"overlay"===o.core.navigation.type&&document.documentElement.classList.add("has-modal-open")},c=(e,n)=>{const{context:o,selectors:t}=e;t.core.navigation.menuOpenedBy(e)[n]=!1,t.core.navigation.isMenuOpen(e)||(o.core.navigation.modal?.contains(window.document.activeElement)&&o.core.navigation.previousFocus?.focus(),o.core.navigation.modal=null,o.core.navigation.previousFocus=null,"overlay"===o.core.navigation.type&&document.documentElement.classList.remove("has-modal-open"))};(0,t.h)({effects:{core:{navigation:{initMenu:e=>{const{context:n,selectors:o,ref:t}=e;if(o.core.navigation.isMenuOpen(e)){const e=t.querySelectorAll(a);n.core.navigation.modal=t,n.core.navigation.firstFocusableElement=e[0],n.core.navigation.lastFocusableElement=e[e.length-1]}},focusFirstElement:e=>{const{selectors:n,ref:o}=e;n.core.navigation.isMenuOpen(e)&&o.querySelector(".wp-block-navigation-item > *:first-child").focus()}}}},selectors:{core:{navigation:{roleAttribute:e=>{const{context:n,selectors:o}=e;return"overlay"===n.core.navigation.type&&o.core.navigation.isMenuOpen(e)?"dialog":null},ariaModal:e=>{const{context:n,selectors:o}=e;return"overlay"===n.core.navigation.type&&o.core.navigation.isMenuOpen(e)?"true":null},ariaLabel:e=>{const{context:n,selectors:o}=e;return"overlay"===n.core.navigation.type&&o.core.navigation.isMenuOpen(e)?n.core.navigation.ariaLabel:null},isMenuOpen:({context:e})=>Object.values(e.core.navigation["overlay"===e.core.navigation.type?"overlayOpenedBy":"submenuOpenedBy"]).filter(Boolean).length>0,menuOpenedBy:({context:e})=>e.core.navigation["overlay"===e.core.navigation.type?"overlayOpenedBy":"submenuOpenedBy"]}}},actions:{core:{navigation:{openMenuOnHover(e){const{navigation:n}=e.context.core;"submenu"===n.type&&0===Object.values(n.overlayOpenedBy||{}).filter(Boolean).length&&i(e,"hover")},closeMenuOnHover(e){c(e,"hover")},openMenuOnClick(e){const{context:n,ref:o}=e;n.core.navigation.previousFocus=o,i(e,"click")},closeMenuOnClick(e){c(e,"click"),c(e,"focus")},openMenuOnFocus(e){i(e,"focus")},toggleMenuOnClick:e=>{const{selectors:n,context:o,ref:t}=e;window.document.activeElement!==t&&t.focus();const a=n.core.navigation.menuOpenedBy(e);a.click||a.focus?(c(e,"click"),c(e,"focus")):(o.core.navigation.previousFocus=t,i(e,"click"))},handleMenuKeydown:e=>{const{context:n,selectors:o,event:t}=e;if(o.core.navigation.menuOpenedBy(e).click){if("Escape"===t?.key)return c(e,"click"),void c(e,"focus");"overlay"===n.core.navigation.type&&"Tab"===t.key&&(t.shiftKey&&window.document.activeElement===n.core.navigation.firstFocusableElement?(t.preventDefault(),n.core.navigation.lastFocusableElement.focus()):t.shiftKey||window.document.activeElement!==n.core.navigation.lastFocusableElement||(t.preventDefault(),n.core.navigation.firstFocusableElement.focus()))}},handleMenuFocusout:e=>{const{context:n,event:o}=e;(null===o.relatedTarget||!n.core.navigation.modal?.contains(o.relatedTarget)&&o.target!==window.document.activeElement)&&(c(e,"click"),c(e,"focus"))}}}}})}},function(e){var n;n=932,e(e.s=n)}]);