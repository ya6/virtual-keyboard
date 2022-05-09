(()=>{"use strict";var e,t,a,r=((e=document.createElement("div")).className="app",e),n=((t=document.createElement("textarea")).className="use-keyboard-input",t.setAttribute("placeholder","Virtual keyboard"),t),c=((a=document.createElement("div")).className="keyboard",a),s=function(){var e=document.createElement("div");e.className="footer";var t=new DocumentFragment,a=document.createElement("div");a.className="descriptions",a.textContent="Keyboard created in the Windows operating system";var r=document.createElement("div");return r.className="descriptions",r.textContent="To switch the language press left:  ctrl + alt",t.append(a,r),e.append(t),e}(),l=[["`","~","`","~"],["1","!","1","!"],["2","@","2","@"],["3","#","3","#"],["4","$","4","$"],["5","%","5","%"],["6","^","6","^"],["7","&","7","&"],["8","*","8","*"],["9","(","9","("],["0",")","0",")"],["-","_","-","_"],["=","+","=","+"],["Back space","Back space","Back space","Back space"],["Tab","Tab","Tab","Tab"],["q","Q","й","Й"],["w","W","ц","Ц"],["e","E","у","У"],["r","R","к","К"],["t","T","е","Е"],["y","Y","н","Н"],["u","U","г","Г"],["i","I","ш","Ш"],["o","O","щ","Щ"],["p","P","з","З"],["[","{","х","Х"],["]","}","ъ","Ъ"],["Del","Del","Del","Del"],["Caps Lock","Caps Lock","Caps Lock","Caps Lock"],["a","A","ф","Ф"],["s","S","ы","Ы"],["d","D","в","В"],["f","F","а","А"],["g","G","п","П"],["h","H","р","Р"],["j","J","о","О"],["k","K","л","Л"],["l","L","д","Д"],[";",":","ж","Ж"],["'",'"',"э","Э"],["\\","|","\\","/"],["Enter","Enter","Enter","Enter"],[" Shift "," Shift "," Shift "," Shift "],["z","Z","я","Я"],["x","X","ч","Ч"],["c","C","с","С"],["v","V","м","М"],["b","B","и","И"],["n","N","т","Т"],["m","M","ь","Ь"],[",","<","б","Б"],[".",">","ю","Ю"],["/","?",".",","],["▲","▲","▲","▲"],["Shift","Shift","Shift","Shift"],[" Ctrl "," Ctrl "," Ctrl "," Ctrl "],["Win","Win","Win","Win"],[" Alt "," Alt "," Alt "," Alt "],[" "," "," "," "],["Alt","Alt","Alt","Alt"],["Ctrl","Ctrl","Ctrl","Ctrl"],["◄","◄","◄","◄"],["▼","▼","▼","▼"],["►","►","►","►"]];function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var u=function(e,t){var a,r=new DocumentFragment;Array.isArray(t)?r.append.apply(r,function(e){if(Array.isArray(e))return o(e)}(a=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):r.append(t),e.append(r)},b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"setButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=document.createElement("button");a.className="keyboard__key",a.setAttribute("type","button"),a.textContent=e;var r=document.createElement("div");return r.className="keyboard__key_addition",r.textContent=t,a.append(r),a}}],a&&i(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()),m=function(e,t){var a=document.createElement("div");a.className="keyboard__keys";var r=[],n=["Back space","Del","Enter","Shift"],c=["Back space","Tab","Del","Caps Lock","Enter"," Shift ","Shift","Ctrl"," Ctrl ","Win","Alt"," Alt ","▲","▼","►","◄"],s=0,l=null;e.forEach((function(e){if(c.some((function(a){return a===e[t]}))){var i=b.setButton(e[t]);i.classList.add("keyboard__key--wide"),i.setAttribute("data-name",e[t]),r.push(i)}else if(" "===e[t]){var o=b.setButton(e[t]);o.classList.add("keyboard__key--extra-wide"),o.setAttribute("data-name",e[t]),r.push(o)}else{var m=null;s<13?(l=e[1],m=b.setButton(e[0],l)):(l=null,m=b.setButton(e[t],l)),s+=1,m.setAttribute("data-name",e[t]),m.setAttribute("data-enName",e[0]),r.push(m)}if(n.some((function(a){return a===e[t]}))){var d=document.createElement("div");d.className="keyboard__line",u(d,r),u(a,d),r=[]}}));var i=document.createElement("div");return i.className="keyboard__line",u(i,r),u(a,i),a},d=function(e){Array.isArray(e)?e.forEach((function(e){e.remove()})):e.remove(e)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"permanent-pressed",a=document.querySelector('[data-name="'.concat(e,'"]'));a.classList.add(t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"permanent-pressed",a=document.querySelector('[data-name="'.concat(e,'"]'));a.classList.remove(t)},h=function(e,t){var a=e.value,r=e.selectionStart,n=a.slice(0,r),c=a.slice(r,a.length);e.value=n+t+c,e.setSelectionRange(r+1,r+1)},p={lang:"en",number:0,leftShift:0,rightShift:0,capsLock:0,leftCtrl:0,rightCtrl:0,leftAlt:0,rightAlt:0,leftCtrlAlt:0};if(null===window.localStorage.getItem("lang")&&null===window.localStorage.getItem("number")){var S=p.lang,g=p.number;window.localStorage.setItem("lang",S),window.localStorage.setItem("number",g)}else p.lang=window.localStorage.getItem("lang"),p.number=+window.localStorage.getItem("number");u(document.body,r),u(r,[n,c,s]);var y=m(l,p.number);u(c,y),document.body.addEventListener("keypress",(function(){n.focus()})),document.body.addEventListener("keydown",(function(e){var t=e.code,a=t[t.length-1].toLowerCase();switch(t){case"ShiftLeft":if(1===p.leftShift)break;if(1===p.rightShift)break;switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}p.leftShift=1,d(y),y=m(l,p.number),u(c,y),f(" Shift ");break;case"ShiftRight":if(1===p.rightShift)break;if(1===p.leftShift)break;switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}p.rightShift=1,d(y),y=m(l,p.number),u(c,y),f("Shift");break;case"CapsLock":if(1===p.capsLock)break;switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}p.capsLock=1,d(y),y=m(l,p.number),u(c,y),f("Caps Lock");break;case"ControlLeft":if(1===p.leftCtrl)break;p.leftCtrl=1,f(" Ctrl ");break;case"ControlRight":if(1===p.rightCtrl)break;p.rightCtrl=1,f("Ctrl");break;case"Tab":f("Tab");break;case"AltLeft":if(1===p.leftAlt)break;p.leftAlt=1,f(" Alt ");break;case"AltRight":if(1===p.rightAlt)break;p.rightAlt=1,f("Alt");break;case"Backspace":f("Back space");break;case"Delete":f("Del");break;case"Enter":f("Enter");break;case"ArrowUp":f("▲");break;case"ArrowDown":f("▼");break;case"ArrowLeft":f("◄");break;case"ArrowRight":f("►");break;default:document.querySelector('[data-enName="'.concat(a,'"]'))&&document.querySelector('[data-enName="'.concat(a,'"]')).classList.add("virtual__key--pressed")}"ControlLeft"!==e.code&&"AltLeft"!==e.code||e.altKey&&e.ctrlKey&&(p.leftCtrlAlt=1)})),document.body.addEventListener("keyup",(function(e){var t=e.code,a=t[t.length-1].toLowerCase();switch(t){case"ShiftLeft":switch(p.leftShift=0,p.leftCtrlAlt=0,p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}d(y),y=m(l,p.number),u(c,y);break;case"ShiftRight":switch(p.rightShift=0,p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}d(y),y=m(l,p.number),u(c,y);break;case"CapsLock":p.capsLock=0,k("Caps Lock");break;case"ControlLeft":if(p.leftCtrl=0,k(" Ctrl "),1===p.leftCtrlAlt){switch(p.leftCtrlAlt=0,p.lang="en"===p.lang?"ru":"en",p.number){case 0:p.number=2;break;case 2:p.number=0;break;case 1:p.number=3;break;case 3:p.number=1}d(y),y=m(l,p.number),u(c,y),1===p.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed"),1===p.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed");var r=p.lang,n=p.number;window.localStorage.setItem("lang",r),window.localStorage.setItem("number",n)}break;case"ControlRight":p.rightCtrl=0,k("Ctrl");break;case"Tab":k("Tab");break;case"AltLeft":p.leftAlt=0,k(" Alt ");break;case"AltRight":p.rightAlt=0,k("Alt");break;case"Backspace":k("Back space");break;case"Delete":k("Del");break;case"Enter":k("Enter");break;case"ArrowUp":k("▲");break;case"ArrowDown":k("▼");break;case"ArrowLeft":k("◄");break;case"ArrowRight":k("►");break;default:document.querySelector('[data-enName="'.concat(a,'"]'))&&document.querySelector('[data-enName="'.concat(a,'"]')).classList.remove("virtual__key--pressed")}})),c.addEventListener("click",(function(e){var t=e.target.dataset.name;if("BUTTON"===e.target.tagName){var a=n.value,r=n.selectionStart,s=n.selectionEnd,i=a.slice(0,r),o=a.slice(s,a.length);switch(t){case" Shift ":switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}p.leftShift=1===p.leftShift?0:1,1===p.leftShift&&(p.rightShift=0),d(y),y=m(l,p.number),u(c,y),1===p.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed");break;case"Shift":switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}p.rightShift=1===p.rightShift?0:1,1===p.rightShift&&(p.leftShift=0),d(y),y=m(l,p.number),u(c,y),1===p.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed");break;case"Caps Lock":switch(p.number){case 0:p.number=1;break;case 1:p.number=0;break;case 2:p.number=3;break;case 3:p.number=2}d(y),y=m(l,p.number),u(c,y),1===p.leftShift&&document.querySelector('[data-name=" Shift "]').classList.add("virtual__key--permanent-pressed"),1===p.rightShift&&document.querySelector('[data-name="Shift"]').classList.add("virtual__key--permanent-pressed");break;case"Tab":h(n,t="\t");break;case"Enter":h(n,t="\r\n");break;case"◄":n.selectionStart>0&&n.setSelectionRange(n.selectionStart-1,n.selectionStart-1);break;case"►":n.setSelectionRange(n.selectionStart+1,n.selectionStart+1);break;case"▲":h(n,"▲");break;case"▼":h(n,"▼");break;case"Back space":r===s?(i=i.slice(0,i.length-1),n.value=i+o,n.setSelectionRange(r-1,r-1)):(n.value=i+o,n.setSelectionRange(r,r));break;case"Del":r===s?(o=o.slice(1,o.length),n.value=i+o):n.value=i+o,n.setSelectionRange(r,r);break;case" Alt ":case"Alt":case"Win":case" Ctrl ":case"Ctrl":break;default:h(n,t)}n.focus()}else n.focus()}))})();
//# sourceMappingURL=main.bundle.js.map