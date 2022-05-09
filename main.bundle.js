(()=>{"use strict";var e,t=function(){var e=document.createElement("div");return e.className="app",e}(),a=((e=document.createElement("textarea")).className="use-keyboard-input",e.setAttribute("placeholder","Virtual keyboard"),e),r=function(){var e=document.createElement("div");return e.className="keyboard",e}(),n=function(){var e=document.createElement("div");e.className="footer";var t=new DocumentFragment,a=document.createElement("div");a.className="descriptions",a.textContent="Keyboard created in the Windows operating system";var r=document.createElement("div");return r.className="descriptions",r.textContent="To switch the language press left:  ctrl + alt",t.append(a,r),e.append(t),e}(),c=[["`","~","`","~"],["1","!","1","!"],["2","@","2","@"],["3","#","3","#"],["4","$","4","$"],["5","%","5","%"],["6","^","6","^"],["7","&","7","&"],["8","*","8","*"],["9","(","9","("],["0",")","0",")"],["-","_","-","_"],["=","+","=","+"],["Back space","Back space","Back space","Back space"],["Tab","Tab","Tab","Tab"],["q","Q","й","Й"],["w","W","ц","Ц"],["e","E","у","У"],["r","R","к","К"],["t","T","е","Е"],["y","Y","н","Н"],["u","U","г","Г"],["i","I","ш","Ш"],["o","O","щ","Щ"],["p","P","з","З"],["[","{","х","Х"],["]","}","ъ","Ъ"],["Del","Del","Del","Del"],["Caps Lock","Caps Lock","Caps Lock","Caps Lock"],["a","A","ф","Ф"],["s","S","ы","Ы"],["d","D","в","В"],["f","F","а","А"],["g","G","п","П"],["h","H","р","Р"],["j","J","о","О"],["k","K","л","Л"],["l","L","д","Д"],[";",":","ж","Ж"],["'",'"',"э","Э"],["\\","|","\\","/"],["Enter","Enter","Enter","Enter"],[" Shift "," Shift "," Shift "," Shift "],["z","Z","я","Я"],["x","X","ч","Ч"],["c","C","с","С"],["v","V","м","М"],["b","B","и","И"],["n","N","т","Т"],["m","M","ь","Ь"],[",","<","б","Б"],[".",">","ю","Ю"],["/","?",".",","],["▲","▲","▲","▲"],["Shift","Shift","Shift","Shift"],[" Ctrl "," Ctrl "," Ctrl "," Ctrl "],["Win","Win","Win","Win"],[" Alt "," Alt "," Alt "," Alt "],[" "," "," "," "],["Alt","Alt","Alt","Alt"],["Ctrl","Ctrl","Ctrl","Ctrl"],["◄","◄","◄","◄"],["▼","▼","▼","▼"],["►","►","►","►"]];function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var i=function(e,t){var a,r=new DocumentFragment;Array.isArray(t)?r.append.apply(r,function(e){if(Array.isArray(e))return l(e)}(a=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):r.append(t),e.append(r)},o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"setButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=document.createElement("button");a.className="keyboard__key",a.setAttribute("type","button"),a.textContent=e;var r=document.createElement("div");return r.className="keyboard__key_addition",r.textContent=t,a.append(r),a}}],a&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()),u=function(e,t){var a=document.createElement("div");a.className="keyboard__keys";var r=[],n=["Back space","Del","Enter","Shift"],c=["Back space","Tab","Del","Caps Lock","Enter"," Shift ","Shift","Ctrl"," Ctrl ","Win","Alt"," Alt ","▲","▼","►","◄"],s=0,l=null;e.forEach((function(e){if(c.some((function(a){return a===e[t]}))){var u=o.setButton(e[t]);u.classList.add("keyboard__key--wide"),c.some((function(a){return a===e[t]})),u.setAttribute("data-name",e[t]),r.push(u)}else if(" "===e[t]){var b=o.setButton(e[t]);b.classList.add("keyboard__key--extra-wide"),b.setAttribute("data-name",e[t]),r.push(b)}else{var m=null;s<13?(l=e[1],m=o.setButton(e[0],l)):(l=null,m=o.setButton(e[t],l)),s++,m.setAttribute("data-name",e[t]),m.setAttribute("data-enName",e[0]),r.push(m)}if(n.some((function(a){return a===e[t]}))){var f=document.createElement("div");f.className="keyboard__line",i(f,r),i(a,f),r=[]}}));var u=document.createElement("div");return u.className="keyboard__line",i(u,r),i(a,u),a},b=function(e){Array.isArray(e)?e.forEach((function(e){e.remove()})):e.remove(e)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"permanent-pressed",a=document.querySelector('[data-name="'.concat(e,'"]'));a.classList.add(t)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"permanent-pressed",a=document.querySelector('[data-name="'.concat(e,'"]'));a.classList.remove(t)},d=function(e,t){var a=e.value,r=e.selectionStart,n=a.slice(0,r),c=a.slice(r,a.length);e.value=n+t+c,e.setSelectionRange(r+1,r+1)},k={lang:"en",number:0,leftShift:0,rightShift:0,capsLock:0,leftCtrl:0,rightCtrl:0,leftAlt:0,rightAlt:0,leftCtrlAlt:0};if(null===window.localStorage.getItem("lang")&&null===window.localStorage.getItem("number")){var h=k.lang,p=k.number;window.localStorage.setItem("lang",h),window.localStorage.setItem("number",p)}else k.lang=window.localStorage.getItem("lang"),k.number=+window.localStorage.getItem("number");i(document.body,t),i(document.body,t),i(t,[a,r,n]);var S=u(c,k.number);i(r,S),document.body.addEventListener("keypress",(function(){a.focus()})),document.body.addEventListener("keydown",(function(e){var t=e.code,a=t[t.length-1].toLowerCase();switch(t){case"ShiftLeft":if(1===k.leftShift)break;if(1===k.rightShift)break;switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}k.leftShift=1,b(S),S=u(c,k.number),i(r,S),m(" Shift ");break;case"ShiftRight":if(1===k.rightShift)break;if(1===k.leftShift)break;switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}k.rightShift=1,b(S),S=u(c,k.number),i(r,S),m("Shift");break;case"CapsLock":if(1===k.capsLock)break;switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}k.capsLock=1,b(S),S=u(c,k.number),i(r,S),m("Caps Lock");break;case"ControlLeft":if(1===k.leftCtrl)break;k.leftCtrl=1,m(" Ctrl ");break;case"ControlRight":if(1===k.rightCtrl)break;k.rightCtrl=1,m("Ctrl");break;case"Tab":m("Tab");break;case"AltLeft":if(1===k.leftAlt)break;k.leftAlt=1,m(" Alt ");break;case"AltRight":if(1===k.rightAlt)break;k.rightAlt=1,m("Alt");break;case"Backspace":m("Back space");break;case"Delete":m("Del");break;case"Enter":m("Enter");break;case"ArrowUp":m("▲");break;case"ArrowDown":m("▼");break;case"ArrowLeft":m("◄");break;case"ArrowRight":m("►");break;default:document.querySelector('[data-enName="'.concat(a,'"]'))&&document.querySelector('[data-enName="'.concat(a,'"]')).classList.add("virtual__key--pressed")}"ControlLeft"!==e.code&&"AltLeft"!==e.code||e.altKey&&e.ctrlKey&&(k.leftCtrlAlt=1)})),document.body.addEventListener("keyup",(function(e){var t=e.code,a=t[t.length-1].toLowerCase();switch(t){case"ShiftLeft":switch(k.leftShift=0,k.leftCtrlAlt=0,k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}b(S),S=u(c,k.number),i(r,S);break;case"ShiftRight":switch(k.rightShift=0,k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}b(S),S=u(c,k.number),i(r,S);break;case"CapsLock":k.capsLock=0,f("Caps Lock");break;case"ControlLeft":if(k.leftCtrl=0,f(" Ctrl "),1===k.leftCtrlAlt){switch(k.leftCtrlAlt=0,k.lang="en"===k.lang?"ru":"en",k.number){case 0:k.number=2;break;case 2:k.number=0;break;case 1:k.number=3;break;case 3:k.number=1}b(S),S=u(c,k.number),i(r,S),1===k.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed"),1===k.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed");var n=k.lang,s=k.number;window.localStorage.setItem("lang",n),window.localStorage.setItem("number",s)}break;case"ControlRight":k.rightCtrl=0,f("Ctrl");break;case"Tab":f("Tab");break;case"AltLeft":k.leftAlt=0,f(" Alt ");break;case"AltRight":k.rightAlt=0,f("Alt");break;case"Backspace":f("Back space");break;case"Delete":f("Del");break;case"Enter":f("Enter");break;case"ArrowUp":f("▲");break;case"ArrowDown":f("▼");break;case"ArrowLeft":f("◄");break;case"ArrowRight":f("►");break;default:document.querySelector('[data-enName="'.concat(a,'"]'))&&document.querySelector('[data-enName="'.concat(a,'"]')).classList.remove("virtual__key--pressed")}})),r.addEventListener("click",(function(e){var t=e.target.dataset.name;if("BUTTON"===e.target.tagName){var n=a.value,s=a.selectionStart,l=a.selectionEnd,o=n.slice(0,s),m=n.slice(l,n.length);switch(t){case" Shift ":switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}k.leftShift=1===k.leftShift?0:1,1===k.leftShift&&(k.rightShift=0),b(S),S=u(c,k.number),i(r,S),1===k.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed");break;case"Shift":switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}k.rightShift=1===k.rightShift?0:1,1===k.rightShift&&(k.leftShift=0),b(S),S=u(c,k.number),i(r,S),1===k.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed");break;case"Caps Lock":switch(k.number){case 0:k.number=1;break;case 1:k.number=0;break;case 2:k.number=3;break;case 3:k.number=2}b(S),S=u(c,k.number),i(r,S),1===k.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed"),1===k.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed");break;case"Tab":d(a,t="\t");break;case"Enter":d(a,t="\r\n");break;case"◄":a.selectionStart>0&&a.setSelectionRange(a.selectionStart-1,a.selectionStart-1);break;case"►":a.setSelectionRange(a.selectionStart+1,a.selectionStart+1);break;case"▲":d(a,"▲");break;case"▼":d(a,"▼");break;case"Back space":s===l?(o=o.slice(0,o.length-1),a.value=o+m,a.setSelectionRange(s-1,s-1)):(a.value=o+m,a.setSelectionRange(s,s));break;case"Del":s===l?(m=m.slice(1,m.length),a.value=o+m):a.value=o+m,a.setSelectionRange(s,s);break;case" Alt ":case"Alt":case"Win":case" Ctrl ":case"Ctrl":break;default:d(a,t)}a.focus()}else a.focus()}))})();
//# sourceMappingURL=main.bundle.js.map