var submenuLink=document.querySelector(".header-catalog-link"),submenu=document.querySelector(".header-catalog-list");submenu.classList.remove("submenu-show"),submenuLink&&submenuLink.addEventListener("keydown",function(e){"Space"===e.code&&(e.preventDefault(),submenu.classList.toggle("submenu-show"))});var timer,link=document.querySelector(".write-us-link"),popup=document.querySelector(".modal-feedback"),close=document.querySelector(".modal-feedback .modal-close"),name_input=document.querySelector("[name=name]"),email_input=document.querySelector("[name=e-mail]"),message_input=document.querySelector(".message"),form=document.querySelector(".modal-feedback-form"),isStorageSupport=!0,storage_name="",storage_email="";try{storage_name=localStorage.getItem("name",name_input.value),storage_email=localStorage.getItem("email",email_input.value)}catch(e){isStorageSuport=!1}link&&link.addEventListener("click",function(e){e.preventDefault(),clearTimeout(timer),popup.classList.remove("modal-close-animation"),popup.classList.add("modal-show"),popup.classList.add("modal-open-animation"),storage_name&&storage_email?(name_input.value=storage_name,email_input.value=storage_email,message_input.focus()):name_input.focus()}),close&&close.addEventListener("click",function(){timer=setTimeout('popup.classList.remove("modal-show")',5e3),popup.classList.remove("modal-open-animation"),popup.classList.add("modal-close-animation"),popup.classList.remove("modal-error")}),form&&form.addEventListener("submit",function(e){name_input.value&&email_input.value&&message_input.value?isStorageSupport&&(localStorage.setItem("name",name_input.value),localStorage.setItem("email",email_input.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){"Escape"===e.code&&(e.preventDefault(),popup.classList.contains("modal-show")&&(timer=setTimeout('popup.classList.remove("modal-show")',5e3),popup.classList.remove("modal-open-animation"),popup.classList.add("modal-close-animation"),popup.classList.remove("modal-error")))});var mapTimer,mapLink=document.querySelector(".map-content"),mapPopup=document.querySelector(".modal-map"),mapClose=document.querySelector(".modal-map .modal-close");mapLink&&mapLink.addEventListener("click",function(e){e.preventDefault(),clearTimeout(timer),mapPopup.classList.remove("modal-close-animation"),mapPopup.classList.add("modal-show"),mapPopup.classList.add("modal-open-animation")}),mapClose&&mapClose.addEventListener("click",function(){mapTimer=setTimeout('mapPopup.classList.remove("modal-show")',5e3),mapPopup.classList.remove("modal-open-animation"),mapPopup.classList.add("modal-close-animation")}),window.addEventListener("keydown",function(e){"Escape"===e.code&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&(mapTimer=setTimeout('mapPopup.classList.remove("modal-show")',5e3),mapPopup.classList.remove("modal-open-animation"),mapPopup.classList.add("modal-close-animation")))});
