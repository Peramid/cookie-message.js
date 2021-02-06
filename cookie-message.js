
(function (root, factory) {
	"use strict";
	if (typeof define === 'function' && define.amd) {
		define([], factory)
	} else if (typeof exports === 'object') {
		module.exports = factory()
	} else {
		root.CookieMessage = factory()
	}
}(this, function () {
	"use strict";
	var CookieMessage = function (options) {
		this.message = options.message;
		this.color = options.color;
		this.position = options.position;
		this.showCookies();
	};
  
	CookieMessage.prototype = {
		showCookies: function () {
			document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div id="cookie-notice" class="cookie-notification">
	<div class="container">
		
		<div class="wp-block-column cookie-content">
			<div class="ct-cookies-content">${this.message}</div></div>
			<button id="ct-accept" class="ct-accept" onclick="acceptCookie();">Ok</button>
  </div>
</div>`);

			this.setStyle('#cookie-notice');
			console.log(this.message);
			this.acceptCookie();
		},
		acceptCookie:function(){
			               // document.cookie = "cookieaccepted=1; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/", ;

			    document.getElementById("ct-accept").addEventListener("click",function () {
			    				 document.getElementById("cookie-notice").style.visibility = "hidden"

			    });


		},
		setStyle:function(target){
			var container = document.querySelector(target);
			if(this.position == 'left'){
				container.setAttribute("style", `left:0;`);
			}else{
				container.setAttribute("style", `right:0`);

			}


		}

	};
	return CookieMessage
}))



