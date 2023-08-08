(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(596),n.b),l=new URL(n(802),n.b),u=c()(r()),p=s()(d),m=s()(l);u.push([e.id,`#projectCreatorHolder{\n    background-color: white;\n    height: 80px;\n    background-color: rgb(30, 40, 31);\n    padding: 15px;\n    border-radius: 5px;\n    \n}\n\n#projectCreatorHolder:hover{\n    background-color: rgb(44, 52, 49);\n}\n\n#projectCreatorHolderTop{\n    display: flex;\n    height: 32px;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n#projectCreatorHolderInput{\n    height: 32px;\n    border-radius: 5px;\n    width: 100%;\n    margin-left: 5px;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.addButton{\n    color: white;\n    background-color: rgb(60, 160, 102);\n    border: none;\n    width: 75px;\n    height: 27px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.cancelButton{\n    color: white;\n    background-color: rgb(160, 60, 68);\n    border: none;\n    width: 75px;\n    height: 27px;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 12px;\n}\n\n#projectCreatorHolderButtons{\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n}\n\n#projectCreatorHolderImage{\n    width: 28px;\n    height: 24px;\n    background-image: url(${p});\n    background-size : cover;\n    \n}\n\n.projectHolder{\n    display: flex;\n    align-items: center;\n    padding-left: 16px;\n    height: 50px;\n    cursor: pointer;\n}\n\n.projectImg{\n    height: 24px;\n    width: 24px;\n    background-image: url(${p});\n    background-size : cover;\n    margin-right: 5px;\n}\n\n.projectText{\n    font-size: 20px;\n    margin-bottom: 5px;\n    width: 260px;\n}\n\n.projectHolder:hover{\n    background-color: rgb(44, 52, 49);\n}\n\n.projectEditButtonsContainer {\n    position: absolute;\n    height: 90px;\n    width: 90px;\n    background-color: aliceblue;\n    border: 1px dotted black;\n    opacity: 0;\n    bottom: 110px;\n    right: 50px;\n    z-index: 2;\n    padding: 5px;\n    background-color: #1f2e23;\n  \n  }\n  \n\n\n.deleteButton:hover,.renameButton:hover{\n    background-color: #1e281f;\n}\n\n.renameButton,.deleteButton{\n    height: 45px;\n    width: 100%;\n    border: none;\n    color: white;\n    font-size: 17px;\n    font-weight: bold;\n    background-color: #1f2e23;\n    cursor: pointer;\n}\n\n\n#addTaskContainer{\n    display: flex;\n    align-items: center;\n    color: white;\n    border-radius: 5px;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 25px;\n}\n\n#addTaskContainer:hover{\n    background-color: #1e281f;\n}\n\n#newTaskPlus{\n    height: 25px;\n    width: 25px;\n    background-image: url(${m});\n    background-size : cover;\n    margin-left: 25px;\n}\n\n#newTaskText{\n    font-size: 20px;\n    font-weight: 500;\n    margin-left: 25px;\n    margin-top: 2px;\n}\n\n\n#formContainer{\n    background-color: #1e281f;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n\n}\n\n#formTitle,#detailsTitle,#dateTitle{\n    color: white;\n    font-size: 18px;\n    \n}\n\n#formTitleInput,#detailsInput,#dateInput{\n    width: 100%;\n    padding: 5px;\n    box-sizing: border-box;\n    font-size: 18px;\n}\n\n#detailsInput{\n    height: 65px;\n    resize: none;\n}\n\n#newTaskButtonHolder{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    margin-top: 8px;\n}\n\n.taskContainer{\n    background-color: #1f2e23;\n    border: 2px solid white;\n    border-radius: 5px;\n    height: 50px;\n    width: 100%;\n    padding-top: 5px;\n    cursor: pointer;\n}\n\n.taskContainer > div{\n    color:white;\n    \n}\n\n.checkBox{\n    height: 20px;\n    width: 20px;\n    border-radius: 150px;\n    border: 2px solid white;\n    margin-left: 5px;\n}\n\n.taskContainerTop{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n\n.taskTitle{\n    margin-left: 10px;\n    min-width: 75px;\n    width: 50%;\n    font-size: 20px;\n}\n\n\n.taskEdit{\n    height: 24px;\n    width: 24px;\n    background-size: cover;\n    \n}\n\n.taskDate{\n    border: 2px solid white;\n    padding: 1px;\n    padding-left:10px;\n    padding-right: 10px;\n    border-radius: 5px;\n\n}\n\n.taskDescription{\n    margin-left: 40px;\n    font-size: 15px;\n}\n\n.taskButtons{\n    height: 25px;\n    width: 49px;\n    display: flex;\n    margin-left: 5px;\n}\n\n.taskFavorite{\n    height: 24px;\n    width: 24px;\n    background-size: cover;\n}\n\n.taskContainerTopRight{\n    display: flex;\n}\n\n.taskContainerTopLeft{\n    display: flex;\n}`,""]);const g=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},802:(e,t,n)=>{e.exports=n.p+"e3fa568dc124f448ecff.svg"},596:(e,t,n)=>{e.exports=n.p+"547f3f113e570eb7b5b0.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;class h{addNewTaskButtonDOM(){const e=document.querySelector("#right-side"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("p");o.innerHTML="Add Task",e.appendChild(t),t.appendChild(n),t.appendChild(o),t.id="addTaskContainer",n.id="newTaskPlus",o.id="newTaskText"}newTaskPrerequisite(){const e=document.querySelector("#task-prerequisite"),t=document.createElement("form"),n=document.createElement("div"),o=document.createElement("input"),r=document.createElement("div"),a=document.createElement("textarea"),c=document.createElement("div"),i=document.createElement("input"),s=document.createElement("div"),d=document.createElement("input"),l=document.createElement("div");n.innerHTML="Title:",r.innerHTML="Details(optional):",c.innerHTML="Date:",d.type="submit",d.value="Add",l.innerHTML="Cancel",i.type="date",o.placeholder="What to do?",a.placeholder="eg: I'm just gonna procrastinate, aren't I?",e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(c),t.appendChild(i),t.appendChild(s),s.appendChild(d),s.appendChild(l),t.id="formContainer",n.id="formTitle",o.id="formTitleInput",r.id="detailsTitle",a.id="detailsInput",c.id="dateTitle",i.id="dateInput",d.className="addButton",l.className="cancelButton",l.id="taskCancel",s.id="newTaskButtonHolder"}changeCheckBox(e,t,n,o){0==t?(e.style.border="2px solid #71b771",e.style.backgroundImage="url('../imgs/checkmark.svg')",e.style.backgroundSize="cover",n.style.textDecoration="line-through",o.style.textDecoration="line-through"):(e.style.border="2px solid white",e.style.backgroundImage="none",e.style.backgroundSize="cover",n.style.textDecoration="none",o.style.textDecoration="none")}changeFavorite(e,t){e.style.backgroundImage=1==t?"url('../imgs/filledstar.png')":"url('../imgs/star.png')"}createDOMTask(e,t,n,o,r){const a=document.querySelector("#tasks"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),f=document.createElement("div"),k=document.createElement("div");a.appendChild(c),c.appendChild(i),c.appendChild(f),i.appendChild(g),i.appendChild(h),g.appendChild(s),g.appendChild(d),h.appendChild(l),h.appendChild(u),u.appendChild(p),u.appendChild(m),f.appendChild(k),c.className="taskContainer",s.className="checkBox",d.className="taskTitle",l.className="taskDate",p.className="taskFavorite",m.className="taskEdit",f.className="taskContainerBottom",k.className="taskDescription",i.className="taskContainerTop",u.className="taskButtons",h.className="taskContainerTopRight",g.className="taskContainerTopLeft",d.innerHTML=t,k.innerHTML=n,l.innerHTML=""==o?"No Due Date":o,m.style.backgroundImage="url('../imgs/edit.png')",1==e&&(s.style.border="2px solid #71b771",s.style.backgroundImage="url('../imgs/checkmark.svg')",s.style.backgroundSize="cover",d.style.textDecoration="line-through",k.style.textDecoration="line-through"),p.style.backgroundImage=1==r?"url('../imgs/filledstar.png')":"url('../imgs/star.png')"}}class f{addNewTaskButtonLogic(){new h,this.addNewTaskButton(),this.addLogicToTaskCancelBtn(),this.newTaskPrerequisiteSubmit()}cleanUpTasks(){const e=document.querySelectorAll(".taskContainer");if(null!==e)for(let t=0;t<e.length;t++)e[t].remove();const t=document.querySelector("#addTaskContainer");null!==t&&t.remove()}deleteTaskPrerequisite(){document.querySelector("#formContainer").remove()}addLogicToTaskCancelBtn(){document.querySelector("#taskCancel").addEventListener("click",this.deleteTaskPrerequisite)}spawnTaskPrerequisiteLogic(){document.querySelector("#addTaskContainer").addEventListener("click",(()=>{null===document.querySelector("#formContainer")&&((new h).newTaskPrerequisite(),this.newTaskPrerequisiteSubmit(),this.addLogicToTaskCancelBtn())}))}addNewTaskButton(){(new h).addNewTaskButtonDOM(),this.spawnTaskPrerequisiteLogic()}newTaskPrerequisiteSubmit(){document.querySelector("#formContainer").addEventListener("submit",(()=>{event.preventDefault();const e=document.querySelector("#formTitleInput").value,t=document.querySelector("#detailsInput").value,n=document.querySelector("#dateInput").value;(new k).addTaskToProject(e,t,n,localStorage.getItem("lastProjectIndexClickedOn"),!1,!1),(new h).createDOMTask(!1,e,t,n,!1),this.addLogicToTaskButtons(!0),document.querySelector("#formContainer").remove()}))}createTaskandStoreIt(e,t,n,o,r){(new h).createDOMTask(e,t,n,o,r)}checkTaskLogic(e){const t=document.querySelectorAll(".checkBox"),n=document.querySelectorAll(".taskTitle"),o=document.querySelectorAll(".taskDescription"),r=localStorage.getItem("lastProjectIndexClickedOn"),a=new h;if(1==e)for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{const c=localStorage.getItem("ProjectList"),i=JSON.parse(c);let s=i[r].tasks[e].checked;i[r].tasks[e],a.changeCheckBox(t[e],s,n[e],o[e]),i[r].tasks[e].checked=!i[r].tasks[e].checked;const d=JSON.stringify(i);localStorage.setItem("ProjectList",d)}));else if(0==e)for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{const r=localStorage.getItem("ProjectList"),c=JSON.parse(r);c&&c.forEach(((r,i)=>{r.tasks.forEach(((r,s)=>{if(e==i+s){r.checked=!r.checked,a.changeCheckBox(t[e],!r.checked,n[e],o[e]);const i=JSON.stringify(c);localStorage.setItem("ProjectList",i)}}))}))}))}favoriteTaskLogic(e){const t=document.querySelectorAll(".taskFavorite"),n=new h;if(1==e){const e=localStorage.getItem("lastProjectIndexClickedOn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",(()=>{const r=localStorage.getItem("ProjectList"),a=JSON.parse(r),c=a[e].tasks[o];c.favorite=!c.favorite,n.changeFavorite(t[o],c.favorite);const i=JSON.stringify(a);localStorage.setItem("ProjectList",i)}))}else if(0==e)for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{const o=localStorage.getItem("ProjectList"),r=JSON.parse(o);r&&r.forEach(((o,a)=>{o.tasks.forEach(((o,c)=>{if(e==a+c){o.favorite=!o.favorite,n.changeFavorite(t[e],o.favorite);const a=JSON.stringify(r);localStorage.setItem("ProjectList",a)}}))}))}))}addLogicToTaskButtons(e){this.checkTaskLogic(e),this.favoriteTaskLogic(e)}}class k{constructor(){}createProjectListArr(){if(null===localStorage.getItem("ProjectList")){const e=[],t=JSON.stringify(e);localStorage.setItem("ProjectList",t)}}createProjectAndAddToProjectList(e){const t=localStorage.getItem("ProjectList"),n=JSON.parse(t);let o={pName:e,tasks:[]};n.push(o);const r=JSON.stringify(n);localStorage.setItem("ProjectList",r);const a=localStorage.getItem("ProjectList");JSON.parse(a)}loadProjects(){const e=localStorage.getItem("ProjectList");if(e){const t=JSON.parse(e),n=new v;new y,t.forEach((e=>{n.createNewProject(e.pName,document.querySelector("#Projects"))}))}}deleteProject(e){const t=localStorage.getItem("ProjectList"),n=JSON.parse(t),o=document.querySelectorAll(".deleteButton");for(let t=0;t<o.length;t++)o[t]==e&&n.splice(t,1);const r=JSON.stringify(n);localStorage.setItem("ProjectList",r)}taskCreator(e,t,n,o,r){return{title:e,details:t,date:n,favorite:o,checked:r}}addTaskToProject(e,t,n,o,r,a){const c=document.querySelectorAll(".projectHolder"),i=localStorage.getItem("ProjectList"),s=JSON.parse(i);let d=this.taskCreator(e,t,n,r,a);for(let e=0;e<c.length;e++)e.toString()===o&&s[e].tasks.push(d);const l=JSON.stringify(s);localStorage.setItem("ProjectList",l)}loadProjectsTasks(e){const t=new h,n=localStorage.getItem("ProjectList"),o=JSON.parse(n);for(let n=0;n<o[e].tasks.length;n++){let r=o[e].tasks[n];t.createDOMTask(r.checked,r.title,r.details,r.date,r.favorite)}}loadAllTasks(){const e=localStorage.getItem("ProjectList"),t=JSON.parse(e),n=[];if(t){for(const e of t)for(const t of e.tasks)n.push(t);return n}}}class y{constructor(){}addButtonFunction(){const e=document.querySelector("#projectCreatorHolderInput").value,t=document.querySelector("#ProjectsHolder"),n=new v(t),o=document.querySelector("#projectCreatorHolder"),r=document.querySelector("#Projects"),a=new k;n.createNewProject(e,r),a.createProjectAndAddToProjectList(e),n.moveAddProjectButtonDown(),this.addLogicToProject(),this.fixEditButtonBug(),o.remove()}cancelButtonFunction(){const e=document.querySelector("#projectCreatorHolder"),t=document.querySelector("#Projects");e.remove(),new v(t),this.addLogicToEditButtons(),this.addLogicToEditDeleteButton()}addLogicToAddButton(){const e=document.querySelector("#projectCreatorHolder");e.addEventListener("submit",(e=>{e.preventDefault(),this.addButtonFunction(),this.addLogicToEditButtons(),this.addLogicToEditDeleteButton()}),!1),e.addEventListener("keydown",(e=>{"Enter"===e.key&&(this.addButtonFunction(),this.addLogicToEditButtons(),this.addLogicToEditDeleteButton())}))}addLogicToCancelButton(){document.querySelector("#projectCreatorHolderCancelButton").addEventListener("click",(()=>{this.cancelButtonFunction()}))}addNewProjectButton(){if(null===document.querySelector("#projectCreatorHolder")){const e=document.querySelector("#ProjectsHolder");let t=new v(e);t.getProjectPrerequisites(),t.moveAddProjectButtonDown(),this.addLogicToAddButton(),this.addLogicToCancelButton(),this.addLogicToEditButtons(),this.addLogicToEditDeleteButton()}}addLogicToEditButtons(){const e=document.querySelectorAll(".projectEditButton");let t=null;e.forEach((e=>{e.addEventListener("click",(n=>{n.stopPropagation();const o=new v,r=e.querySelector(".projectEditButtonsContainer");t!==r?(t&&(t.style.opacity="0",t.style.position="absolute",t.style.pointerEvents="none"),o.projectEditButtonFunction(e),t=r):(r.style.opacity="0",r.style.position="absolute",r.style.pointerEvents="none",t=null)}))})),document.addEventListener("click",(e=>{const n=e.target;document.querySelectorAll(".projectEditButtonsContainer").forEach((e=>{e.contains(n)||(e.style.opacity="0",e.style.position="absolute",e.style.pointerEvents="none",t===e&&(t=null))}))}))}fixEditButtonBug(){const e=document.querySelectorAll(".projectEditButtonsContainer");for(let t=0;t<e.length;t++)e[t].style.opacity="1",e[t].style.position="relative",e[t].style.pointerEvents="auto",e[t].style.opacity="0",e[t].style.position="absolute",e[t].style.pointerEvents="none"}addLogicToEditDeleteButton(){const e=document.querySelectorAll(".deleteButton");for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(()=>{(new k).deleteProject(n),n.parentNode.parentNode.parentNode.remove(),this.addLogicToProject()}))}}addLogicToProject(){const e=document.querySelector("#task-header"),t=document.querySelectorAll(".projectHolder"),n=document.querySelectorAll(".projectText");for(let o=0;o<t.length;o++)t[o].addEventListener("click",(()=>{e.innerHTML=n[o].textContent,localStorage.setItem("lastProjectIndexClickedOn",o);const t=new f,r=new k;t.cleanUpTasks(),t.addNewTaskButton(),r.loadProjectsTasks(o),t.addLogicToTaskButtons(!0)}))}}class v{constructor(e){this.whereToPutProject=e}getProjectPrerequisites(){const e=document.createElement("form");this.whereToPutProject.appendChild(e),e.id="projectCreatorHolder";const t=document.createElement("form");e.appendChild(t),t.id="projectCreatorHolderTop";const n=document.createElement("form");t.appendChild(n),n.id="projectCreatorHolderImage";const o=document.createElement("input");o.type="text",o.placeholder="Enter Project Name",o.maxLength="24",t.appendChild(o),o.id="projectCreatorHolderInput";const r=document.createElement("div");e.appendChild(r),r.id="projectCreatorHolderButtons";const a=document.createElement("input");a.type="submit",r.appendChild(a),a.value="Add",a.className="addButton";const c=document.createElement("div");r.appendChild(c),c.className="cancelButton",c.innerHTML="Cancel",c.id="projectCreatorHolderCancelButton"}createNewProject(e,t){const n=document.createElement("div");n.className="projectHolder",t.appendChild(n);const o=document.createElement("div");o.className="projectImg",n.appendChild(o);const r=document.createElement("p");r.className="projectText",n.appendChild(r),r.innerHTML=e;const a=document.createElement("div");a.className="projectEditButton",n.appendChild(a);const c=document.createElement("div");c.className="projectEditButtonsContainer",a.appendChild(c);const i=document.createElement("button");i.className="renameButton",c.appendChild(i),i.innerHTML="Rename";const s=document.createElement("button");s.className="deleteButton",c.appendChild(s),s.innerHTML="Delete"}moveAddProjectButtonDown(){const e=document.querySelector("#ProjectsHolder"),t=document.querySelector("#AddProjectsButton");e.appendChild(t)}projectEditButtonFunction(e){const t=e.querySelector(".projectEditButtonsContainer");1==t.style.opacity||" "==t.style.opacity?(t.style.opacity="0",t.style.position="absolute",t.style.pointerEvents="none"):(t.style.opacity="1",t.style.position="relative",t.style.pointerEvents="auto")}}const T=new k;T.createProjectListArr();const x=document.querySelector("#menubutton"),w=document.querySelector("#menuDropDown"),C=new class{constructor(e){this.menuDropDown=e}menuDropDownFunction(){1==this.menuDropDown.style.opacity||""==this.menuDropDown.style.opacity?(this.menuDropDown.style.opacity="0",this.menuDropDown.style.position="absolute",this.menuDropDown.style.pointerEvents="none"):(this.menuDropDown.style.opacity="1",this.menuDropDown.style.position="static",this.menuDropDown.style.pointerEvents="auto")}}(w),b=document.querySelector("#AddProjectsButton"),j=new y,E=(new v(document.querySelector("#ProjectsHolder")),new f),S=(new h,new class{addLogicToAllHomeButtons(e,t,n,o){const r=new f;1==e&&document.querySelector("#allTasks").addEventListener("click",(()=>{r.cleanUpTasks(),this.allTasksButton()})),1==t&&document.querySelector("#Today").addEventListener("click",(()=>{}))}allTasksButton(){const e=(new k).loadAllTasks(),t=new h,n=new f;console.log(e),e.forEach((e=>t.createDOMTask(e.checked,e.title,e.details,e.date,e.favorite))),n.addLogicToTaskButtons(!1),document.querySelector("#task-header").innerHTML="All Tasks",document.querySelector("#addTaskContainer").remove()}});x.addEventListener("click",(()=>{C.menuDropDownFunction()})),x.addEventListener("mousedown",(()=>{x.style.transform="scale(.9)"})),x.addEventListener("mouseup",(()=>{x.style.transform="scale(1)"})),b.addEventListener("click",(()=>{j.addNewProjectButton()})),document.addEventListener("click",(function(e){e.target,document.querySelector(".projectEditButton")})),T.loadProjects(),j.addLogicToEditButtons(),j.addLogicToEditDeleteButton(),j.addLogicToProject(),S.addLogicToAllHomeButtons(!0,!0,!0,!0),S.allTasksButton(),E.addNewTaskButtonLogic(),j.fixEditButtonBug(),console.log("index.js working")})()})();