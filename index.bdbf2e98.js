let e,t;function n(e){return e&&e.__esModule?e.default:e}var i,s,r,a,o,l,c,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={};h=function(){function e(){return Math.random().toString(36).substring(2,10)}function t(e,t=50,n=!1){let i;return function(...s){let r=self,a=n&&!i;clearTimeout(i),i=setTimeout(()=>{i=null,n||e.apply(r,s)},t),a&&e.apply(r,s)}}function n(e,t){return JSON.stringify(e)===JSON.stringify(t)}class i{constructor(t){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,t||(t={}),this.id="ss-"+e(),this.style=t.style||"",this.class=t.class||[],this.disabled=void 0!==t.disabled&&t.disabled,this.alwaysOpen=void 0!==t.alwaysOpen&&t.alwaysOpen,this.showSearch=void 0===t.showSearch||t.showSearch,this.searchPlaceholder=t.searchPlaceholder||"Search",this.searchText=t.searchText||"No Results",this.searchingText=t.searchingText||"Searching...",this.searchHighlight=void 0!==t.searchHighlight&&t.searchHighlight,this.closeOnSelect=void 0===t.closeOnSelect||t.closeOnSelect,this.contentLocation=t.contentLocation||document.body,this.contentPosition=t.contentPosition||"absolute",this.openPosition=t.openPosition||"auto",this.placeholderText=void 0!==t.placeholderText?t.placeholderText:"Select Value",this.allowDeselect=void 0!==t.allowDeselect&&t.allowDeselect,this.hideSelected=void 0!==t.hideSelected&&t.hideSelected,this.showOptionTooltips=void 0!==t.showOptionTooltips&&t.showOptionTooltips,this.minSelected=t.minSelected||0,this.maxSelected=t.maxSelected||1e3,this.timeoutDelay=t.timeoutDelay||200,this.maxValuesShown=t.maxValuesShown||20,this.maxValuesMessage=t.maxValuesMessage||"{number} selected"}}class s{constructor(t){if(this.id=t.id&&""!==t.id?t.id:e(),this.label=t.label||"",this.selectAll=void 0!==t.selectAll&&t.selectAll,this.selectAllText=t.selectAllText||"Select All",this.closable=t.closable||"off",this.options=[],t.options)for(let e of t.options)this.options.push(new r(e))}}class r{constructor(t){this.id=t.id&&""!==t.id?t.id:e(),this.value=void 0===t.value?t.text:t.value,this.text=t.text||"",this.html=t.html||"",this.selected=void 0!==t.selected&&t.selected,this.display=void 0===t.display||t.display,this.disabled=void 0!==t.disabled&&t.disabled,this.mandatory=void 0!==t.mandatory&&t.mandatory,this.placeholder=void 0!==t.placeholder&&t.placeholder,this.class=t.class||"",this.style=t.style||"",this.data=t.data||{}}}class a{constructor(e,t){this.selectType="single",this.data=[],this.selectType=e,this.setData(t)}validateDataArray(e){if(!Array.isArray(e))return Error("Data must be an array");for(let t of e)if(t instanceof s||"label"in t){if(!("label"in t))return Error("Optgroup must have a label");if("options"in t&&t.options)for(let e of t.options)return this.validateOption(e)}else if(t instanceof r||"text"in t)return this.validateOption(t);else return Error("Data object must be a valid optgroup or option");return null}validateOption(e){return"text"in e?null:Error("Option must have a text")}partialToFullData(e){let t=[];return e.forEach(e=>{if(e instanceof s||"label"in e){let n=[];"options"in e&&e.options&&e.options.forEach(e=>{n.push(new r(e))}),n.length>0&&t.push(new s(e))}(e instanceof r||"text"in e)&&t.push(new r(e))}),t}setData(e){this.data=this.partialToFullData(e),"single"===this.selectType&&this.setSelectedBy("value",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(e){this.setData(this.getData().concat(new r(e)))}setSelectedBy(e,t){let n=null,i=!1;for(let a of this.data){if(a instanceof s)for(let s of a.options)n||(n=s),s.selected=!i&&t.includes(s[e]),s.selected&&"single"===this.selectType&&(i=!0);a instanceof r&&(n||(n=a),a.selected=!i&&t.includes(a[e]),a.selected&&"single"===this.selectType&&(i=!0))}"single"===this.selectType&&n&&!i&&(n.selected=!0)}getSelected(){let e=this.getSelectedOptions(),t=[];return e.forEach(e=>{t.push(e.value)}),t}getSelectedOptions(){return this.filter(e=>e.selected,!1)}getSelectedIDs(){let e=this.getSelectedOptions(),t=[];return e.forEach(e=>{t.push(e.id)}),t}getOptgroupByID(e){for(let t of this.data)if(t instanceof s&&t.id===e)return t;return null}getOptionByID(e){let t=this.filter(t=>t.id===e,!1);return t.length?t[0]:null}search(e,t){return""===(e=e.trim())?this.getData():this.filter(n=>t(n,e),!0)}filter(e,t){let n=[];return this.data.forEach(i=>{if(i instanceof s){let a=[];if(i.options.forEach(i=>{(!e||e(i))&&(t?a.push(new r(i)):n.push(new r(i)))}),a.length>0){let e=new s(i);e.options=a,n.push(e)}}i instanceof r&&(!e||e(i))&&n.push(new r(i))}),n}getSelectType(){return this.selectType}}class o{constructor(e,t,n){this.classes={main:"ss-main",placeholder:"ss-placeholder",values:"ss-values",single:"ss-single",max:"ss-max",value:"ss-value",valueText:"ss-value-text",valueDelete:"ss-value-delete",valueOut:"ss-value-out",deselect:"ss-deselect",deselectPath:"M10,10 L90,90 M10,90 L90,10",arrow:"ss-arrow",arrowClose:"M10,30 L50,70 L90,30",arrowOpen:"M10,70 L50,30 L90,70",content:"ss-content",openAbove:"ss-open-above",openBelow:"ss-open-below",search:"ss-search",searchHighlighter:"ss-search-highlight",searching:"ss-searching",addable:"ss-addable",addablePath:"M50,10 L50,90 M10,50 L90,50",list:"ss-list",optgroup:"ss-optgroup",optgroupLabel:"ss-optgroup-label",optgroupLabelText:"ss-optgroup-label-text",optgroupActions:"ss-optgroup-actions",optgroupSelectAll:"ss-selectall",optgroupSelectAllBox:"M60,10 L10,10 L10,90 L90,90 L90,50",optgroupSelectAllCheck:"M30,45 L50,70 L90,10",optgroupClosable:"ss-closable",option:"ss-option",optionDelete:"M10,10 L90,90 M10,90 L90,10",highlighted:"ss-highlighted",open:"ss-open",close:"ss-close",selected:"ss-selected",error:"ss-error",disabled:"ss-disabled",hide:"ss-hide"},this.store=t,this.settings=e,this.callbacks=n,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation.appendChild(this.content.main)}enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add("up"===this.settings.openPosition?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();let e=this.store.getSelectedOptions();if(e.length){let t=e[e.length-1].id,n=this.content.list.querySelector('[data-id="'+t+'"]');n&&this.ensureElementInView(this.content.list,n)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),""!==this.settings.style&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(let e of this.settings.class)""!==e.trim()&&(this.main.main.classList.add(e.trim()),this.content.main.classList.add(e.trim()));"relative"===this.settings.contentPosition&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var e;let t=document.createElement("div");t.dataset.id=this.settings.id,t.id=this.settings.id,t.tabIndex=0,t.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();let t=this.content.list.querySelector("."+this.classes.highlighted);return t&&t.click(),!1;case"Escape":return this.callbacks.close(),!1}},t.onclick=e=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};let n=document.createElement("div");n.classList.add(this.classes.values),t.appendChild(n);let i=document.createElement("div");i.classList.add(this.classes.deselect);let s=null===(e=this.store)||void 0===e?void 0:e.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&s&&s.length<=0?i.classList.add(this.classes.hide):i.classList.remove(this.classes.hide),i.onclick=e=>{if(e.stopPropagation(),this.settings.disabled)return;let t=!0,n=this.store.getSelectedOptions(),i=[];this.callbacks.beforeChange&&(t=!0===this.callbacks.beforeChange(i,n)),t&&(this.settings.isMultiple?(this.callbacks.setSelected([],!1),this.updateDeselectAll()):this.callbacks.setSelected([""],!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(i))};let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 100 100");let a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",this.classes.deselectPath),r.appendChild(a),i.appendChild(r),t.appendChild(i);let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add(this.classes.arrow),o.setAttribute("viewBox","0 0 100 100");let l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&o.classList.add(this.classes.hide),o.appendChild(l),t.appendChild(o),{main:t,values:n,deselect:{main:i,svg:r,path:a},arrow:{main:o,path:l}}}mainFocus(e){"click"!==e&&this.main.main.focus({preventScroll:!0})}placeholder(){let e=this.store.filter(e=>e.placeholder,!1),t=this.settings.placeholderText;e.length&&(""!==e[0].html?t=e[0].html:""!==e[0].text&&(t=e[0].text));let n=document.createElement("div");return n.classList.add(this.classes.placeholder),n.innerHTML=t,n}renderValues(){if(!this.settings.isMultiple){this.renderSingleValue();return}this.renderMultipleValues()}renderSingleValue(){let e=this.store.filter(e=>e.selected&&!e.placeholder,!1),t=e.length>0?e[0]:null;if(t){let e=document.createElement("div");e.classList.add(this.classes.single),t.html?e.innerHTML=t.html:e.innerText=t.text,this.main.values.innerHTML=e.outerHTML}else this.main.values.innerHTML=this.placeholder().outerHTML;this.settings.allowDeselect&&e.length?this.main.deselect.main.classList.remove(this.classes.hide):this.main.deselect.main.classList.add(this.classes.hide)}renderMultipleValues(){let e=this.main.values.childNodes,t=this.store.filter(e=>e.selected&&e.display,!1);if(0===t.length){this.main.values.innerHTML=this.placeholder().outerHTML;return}{let e=this.main.values.querySelector("."+this.classes.placeholder);e&&e.remove()}if(t.length>this.settings.maxValuesShown){let e=document.createElement("div");e.classList.add(this.classes.max),e.textContent=this.settings.maxValuesMessage.replace("{number}",t.length.toString()),this.main.values.innerHTML=e.outerHTML;return}{let e=this.main.values.querySelector("."+this.classes.max);e&&e.remove()}let n=[];for(let i=0;i<e.length;i++){let s=e[i],r=s.getAttribute("data-id");if(r){let e=t.filter(e=>e.id===r,!1);e.length||n.push(s)}}for(let e of n)e.classList.add(this.classes.valueOut),setTimeout(()=>{this.main.values.hasChildNodes()&&this.main.values.contains(e)&&this.main.values.removeChild(e)},100);e=this.main.values.childNodes;for(let n=0;n<t.length;n++){let i=!0;for(let s=0;s<e.length;s++)t[n].id===String(e[s].dataset.id)&&(i=!1);i&&(0===e.length?this.main.values.appendChild(this.multipleValue(t[n])):0===n?this.main.values.insertBefore(this.multipleValue(t[n]),e[n]):e[n-1].insertAdjacentElement("afterend",this.multipleValue(t[n])))}this.updateDeselectAll()}multipleValue(e){let t=document.createElement("div");t.classList.add(this.classes.value),t.dataset.id=e.id;let n=document.createElement("div");if(n.classList.add(this.classes.valueText),n.innerText=e.text,t.appendChild(n),!e.mandatory){let n=document.createElement("div");n.classList.add(this.classes.valueDelete),n.onclick=t=>{if(t.preventDefault(),t.stopPropagation(),this.settings.disabled)return;let n=!0,i=this.store.getSelectedOptions(),a=i.filter(t=>t.selected&&t.id!==e.id,!0);if((!this.settings.minSelected||!(a.length<this.settings.minSelected))&&(this.callbacks.beforeChange&&(n=!0===this.callbacks.beforeChange(a,i)),n)){let e=[];for(let t of a){if(t instanceof s)for(let n of t.options)e.push(n.value);t instanceof r&&e.push(t.value)}this.callbacks.setSelected(e,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(a),this.updateDeselectAll()}};let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100");let a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",this.classes.optionDelete),i.appendChild(a),n.appendChild(i),t.appendChild(n)}return t}contentDiv(){let e=document.createElement("div");e.dataset.id=this.settings.id,e.id=this.settings.id;let t=this.searchDiv();e.appendChild(t.main);let n=this.listDiv();return e.appendChild(n),{main:e,search:t,list:n}}moveContent(){if("relative"===this.settings.contentPosition||"down"===this.settings.openPosition){this.moveContentBelow();return}if("up"===this.settings.openPosition){this.moveContentAbove();return}"up"===this.putContent()?this.moveContentAbove():this.moveContentBelow()}searchDiv(){let e=document.createElement("div"),n=document.createElement("input"),i=document.createElement("div");e.classList.add(this.classes.search);let s={main:e,input:n};if(this.settings.showSearch||(e.classList.add(this.classes.hide),n.readOnly=!0),n.type="search",n.placeholder=this.settings.searchPlaceholder,n.tabIndex=-1,n.setAttribute("aria-label",this.settings.searchPlaceholder),n.setAttribute("autocapitalize","off"),n.setAttribute("autocomplete","off"),n.setAttribute("autocorrect","off"),n.oninput=t(e=>{this.callbacks.search(e.target.value)},100),n.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case"Enter":case" ":if(this.callbacks.addable&&e.ctrlKey)return i.click(),!1;{let e=this.content.list.querySelector("."+this.classes.highlighted);if(e)return e.click(),!1}return!0}},e.appendChild(n),this.callbacks.addable){i.classList.add(this.classes.addable);let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 100 100");let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",this.classes.addablePath),t.appendChild(n),i.appendChild(t),i.onclick=e=>{if(e.preventDefault(),e.stopPropagation(),!this.callbacks.addable)return;let t=this.content.search.input.value.trim();if(""===t){this.content.search.input.focus();return}let n=e=>{let t=new r(e);if(this.callbacks.addOption(t),this.settings.isMultiple){let e=this.store.getSelected();e.push(t.value),this.callbacks.setSelected(e,!0)}else this.callbacks.setSelected([t.value],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout(()=>{this.callbacks.close()},100)},i=this.callbacks.addable(t);!1!==i&&null!=i&&(i instanceof Promise?i.then(e=>{"string"==typeof e?n({text:e,value:e}):n(e)}):"string"==typeof i?n({text:i,value:i}):n(i))},e.appendChild(i),s.addable={main:i,svg:t,path:n}}return s}searchFocus(){this.content.search.input.focus()}getOptions(e=!1,t=!1,n=!1){let i="."+this.classes.option;return e&&(i+=":not(."+this.classes.placeholder+")"),t&&(i+=":not(."+this.classes.disabled+")"),n&&(i+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(i))}highlight(e){let t=this.getOptions(!0,!0,!0);if(0!==t.length){if(1===t.length&&!t[0].classList.contains(this.classes.highlighted)){t[0].classList.add(this.classes.highlighted);return}for(let n=0;n<t.length;n++)if(t[n].classList.contains(this.classes.highlighted)){let i=t[n];i.classList.remove(this.classes.highlighted);let s=i.parentElement;if(s&&s.classList.contains(this.classes.open)){let e=s.querySelector("."+this.classes.optgroupLabel);e&&e.click()}let r=t["down"===e?n+1<t.length?n+1:0:n-1>=0?n-1:t.length-1];r.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,r);let a=r.parentElement;if(a&&a.classList.contains(this.classes.close)){let e=a.querySelector("."+this.classes.optgroupLabel);e&&e.click()}return}t["down"===e?0:t.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,t["down"===e?0:t.length-1])}}listDiv(){let e=document.createElement("div");return e.classList.add(this.classes.list),e}renderError(e){this.content.list.innerHTML="";let t=document.createElement("div");t.classList.add(this.classes.error),t.textContent=e,this.content.list.appendChild(t)}renderSearching(){this.content.list.innerHTML="";let e=document.createElement("div");e.classList.add(this.classes.searching),e.textContent=this.settings.searchingText,this.content.list.appendChild(e)}renderOptions(e){if(this.content.list.innerHTML="",0===e.length){let e=document.createElement("div");e.classList.add(this.classes.search),e.innerHTML=this.settings.searchText,this.content.list.appendChild(e);return}for(let t of e){if(t instanceof s){let e=document.createElement("div");e.classList.add(this.classes.optgroup);let n=document.createElement("div");n.classList.add(this.classes.optgroupLabel),e.appendChild(n);let i=document.createElement("div");i.classList.add(this.classes.optgroupLabelText),i.textContent=t.label,n.appendChild(i);let s=document.createElement("div");if(s.classList.add(this.classes.optgroupActions),n.appendChild(s),this.settings.isMultiple&&t.selectAll){let e=document.createElement("div");e.classList.add(this.classes.optgroupSelectAll);let n=!0;for(let e of t.options)if(!e.selected){n=!1;break}n&&e.classList.add(this.classes.selected);let i=document.createElement("span");i.textContent=t.selectAllText,e.appendChild(i);let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 100 100"),e.appendChild(r);let a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",this.classes.optgroupSelectAllBox),r.appendChild(a);let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.optgroupSelectAllCheck),r.appendChild(o),e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();let i=this.store.getSelected();if(n){let e=i.filter(e=>{for(let n of t.options)if(e===n.value)return!1;return!0});this.callbacks.setSelected(e,!0);return}{let e=i.concat(t.options.map(e=>e.value));for(let e of t.options)this.store.getOptionByID(e.id)||this.callbacks.addOption(e);this.callbacks.setSelected(e,!0);return}}),s.appendChild(e)}if("off"!==t.closable){let i=document.createElement("div");i.classList.add(this.classes.optgroupClosable);let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 100 100"),r.classList.add(this.classes.arrow),i.appendChild(r);let a=document.createElementNS("http://www.w3.org/2000/svg","path");r.appendChild(a),t.options.some(e=>e.selected)||""!==this.content.search.input.value.trim()?(i.classList.add(this.classes.open),a.setAttribute("d",this.classes.arrowOpen)):"open"===t.closable?(e.classList.add(this.classes.open),a.setAttribute("d",this.classes.arrowOpen)):"close"===t.closable&&(e.classList.add(this.classes.close),a.setAttribute("d",this.classes.arrowClose)),n.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),e.classList.contains(this.classes.close)?(e.classList.remove(this.classes.close),e.classList.add(this.classes.open),a.setAttribute("d",this.classes.arrowOpen)):(e.classList.remove(this.classes.open),e.classList.add(this.classes.close),a.setAttribute("d",this.classes.arrowClose))}),s.appendChild(i)}for(let i of(e.appendChild(n),t.options))e.appendChild(this.option(i));this.content.list.appendChild(e)}t instanceof r&&this.content.list.appendChild(this.option(t))}}option(e){if(e.placeholder){let e=document.createElement("div");return e.classList.add(this.classes.option),e.classList.add(this.classes.hide),e}let t=document.createElement("div");return t.dataset.id=e.id,t.id=e.id,t.classList.add(this.classes.option),t.setAttribute("role","option"),e.class&&e.class.split(" ").forEach(e=>{t.classList.add(e)}),e.style&&(t.style.cssText=e.style),this.settings.searchHighlight&&""!==this.content.search.input.value.trim()?t.innerHTML=this.highlightText(""!==e.html?e.html:e.text,this.content.search.input.value,this.classes.searchHighlighter):""!==e.html?t.innerHTML=e.html:t.textContent=e.text,this.settings.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent),e.display||t.classList.add(this.classes.hide),e.disabled&&t.classList.add(this.classes.disabled),e.selected&&this.settings.hideSelected&&t.classList.add(this.classes.hide),e.selected?(t.classList.add(this.classes.selected),t.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",t.id)):(t.classList.remove(this.classes.selected),t.setAttribute("aria-selected","false")),t.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();let n=this.store.getSelected(),i=t.currentTarget,s=String(i.dataset.id);if(e.disabled||e.selected&&!this.settings.allowDeselect||this.settings.isMultiple&&this.settings.maxSelected<=n.length&&!e.selected||this.settings.isMultiple&&this.settings.minSelected>=n.length&&e.selected)return;let r=!1,a=this.store.getSelectedOptions(),o=[];this.settings.isMultiple&&(o=e.selected?a.filter(e=>e.id!==s):a.concat(e)),this.settings.isMultiple||(o=e.selected?[]:[e]),this.callbacks.beforeChange||(r=!0),this.callbacks.beforeChange&&(r=!1!==this.callbacks.beforeChange(o,a)),r&&(this.store.getOptionByID(s)||this.callbacks.addOption(e),this.callbacks.setSelected(o.map(e=>e.value),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(o))}),t}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(e,t,n){let i=RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(i))return e;let s=e.match(i).index,r=s+e.match(i)[0].toString().length,a=e.substring(s,r);return e.replace(i,`<mark class="${n}">${a}</mark>`)}moveContentAbove(){let e=this.main.main.offsetHeight,t=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);let n=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(e+t-1)+"px 0px 0px 0px",this.content.main.style.top=n.top+n.height+window.scrollY+"px",this.content.main.style.left=n.left+window.scrollX+"px",this.content.main.style.width=n.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);let e=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px","relative"!==this.settings.contentPosition&&(this.content.main.style.top=e.top+e.height+window.scrollY+"px",this.content.main.style.left=e.left+window.scrollX+"px",this.content.main.style.width=e.width+"px")}ensureElementInView(e,t){let n=e.scrollTop+e.offsetTop,i=n+e.clientHeight,s=t.offsetTop,r=s+t.clientHeight;s<n?e.scrollTop-=n-s:r>i&&(e.scrollTop+=r-i)}putContent(){let e=this.main.main.offsetHeight,t=this.main.main.getBoundingClientRect(),n=this.content.main.offsetHeight,i=window.innerHeight-(t.top+e);return i<=n&&t.top>n?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;let e=this.store.getSelectedOptions(),t=e&&e.length>0,n=this.settings.isMultiple,i=this.settings.allowDeselect,s=this.main.deselect.main,r=this.classes.hide;i&&!(n&&!t)?s.classList.remove(r):s.classList.add(r)}}class l{constructor(e){this.listen=!1,this.observer=null,this.select=e,this.select.addEventListener("change",this.valueChange.bind(this),{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(e){this.listen=e,e&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),!e&&this.observer&&this.observer.disconnect()}valueChange(e){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedValues()),!0}observeCall(e){if(!this.listen)return;let t=!1,n=!1,i=!1;for(let s of e)s.target===this.select&&("disabled"===s.attributeName&&(n=!0),"class"===s.attributeName&&(t=!0)),("OPTGROUP"===s.target.nodeName||"OPTION"===s.target.nodeName)&&(i=!0);t&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),n&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),i&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let e=[],t=this.select.childNodes;for(let n of t)"OPTGROUP"===n.nodeName&&e.push(this.getDataFromOptgroup(n)),"OPTION"===n.nodeName&&e.push(this.getDataFromOption(n));return e}getDataFromOptgroup(e){let t={id:e.id,label:e.label,selectAll:!!e.dataset&&"true"===e.dataset.selectall,selectAllText:e.dataset?e.dataset.selectalltext:"Select all",closable:e.dataset?e.dataset.closable:"off",options:[]},n=e.childNodes;for(let e of n)"OPTION"===e.nodeName&&t.options.push(this.getDataFromOption(e));return t}getDataFromOption(e){return{id:e.id,value:e.value,text:e.text,html:e.dataset&&e.dataset.html?e.dataset.html:"",selected:e.selected,display:"none"!==e.style.display,disabled:e.disabled,mandatory:!!e.dataset&&"true"===e.dataset.mandatory,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}}getSelectedValues(){let e=[],t=this.select.childNodes;for(let n of t){if("OPTGROUP"===n.nodeName){let t=n.childNodes;for(let n of t)"OPTION"===n.nodeName&&n.selected&&e.push(n.value)}"OPTION"===n.nodeName&&n.selected&&e.push(n.value)}return e}setSelected(e){this.changeListen(!1);let t=this.select.childNodes;for(let n of t){if("OPTGROUP"===n.nodeName){let t=n.childNodes;for(let n of t)"OPTION"===n.nodeName&&(n.selected=e.includes(n.value))}"OPTION"===n.nodeName&&(n.selected=e.includes(n.value))}this.changeListen(!0)}updateSelect(e,t,n){this.changeListen(!1),e&&(this.select.dataset.id=e),t&&(this.select.style.cssText=t),n&&(this.select.className="",n.forEach(e=>{""!==e.trim()&&this.select.classList.add(e.trim())})),this.changeListen(!0)}updateOptions(e){for(let t of(this.changeListen(!1),this.select.innerHTML="",e))t instanceof s&&this.select.appendChild(this.createOptgroup(t)),t instanceof r&&this.select.appendChild(this.createOption(t));this.select.dispatchEvent(new Event("change")),this.changeListen(!0)}createOptgroup(e){let t=document.createElement("optgroup");if(t.id=e.id,t.label=e.label,e.selectAll&&(t.dataset.selectAll="true"),"off"!==e.closable&&(t.dataset.closable=e.closable),e.options)for(let n of e.options)t.appendChild(this.createOption(n));return t}createOption(e){let t=document.createElement("option");return t.id=e.id,t.value=e.value,t.innerHTML=e.text,""!==e.html&&t.setAttribute("data-html",e.html),e.selected&&(t.selected=e.selected),e.disabled&&(t.disabled=!0),!1===e.display&&(t.style.display="none"),e.placeholder&&t.setAttribute("data-placeholder","true"),e.mandatory&&t.setAttribute("data-mandatory","true"),e.class&&e.class.split(" ").forEach(e=>{t.classList.add(e)}),e.data&&"object"==typeof e.data&&Object.keys(e.data).forEach(n=>{t.setAttribute("data-"+function(e){let t=e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,e=>"-"+e.toLowerCase());return e[0]===e[0].toUpperCase()?t.substring(1):t}(n),e.data[n])}),t}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange.bind(this)),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}}return class{constructor(e){var n;if(this.events={search:void 0,searchFilter:(e,t)=>-1!==e.text.toLowerCase().indexOf(t.toLowerCase()),addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=t(()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()}),this.windowScroll=t(()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()}),this.documentClick=e=>{this.settings.isOpen&&e.target&&!function(e,t){function n(e,n){return n&&e&&e.classList&&e.classList.contains(n)||n&&e&&e.dataset&&e.dataset.id&&e.dataset.id===t?e:null}return n(e,t)||function e(t,i){return t&&t!==document?n(t,i)?t:e(t.parentNode,i):null}(e,t)}(e.target,this.settings.id)&&this.close(e.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl="string"==typeof e.select?document.querySelector(e.select):e.select,!this.selectEl){e.events&&e.events.error&&e.events.error(Error("Could not find select element"));return}if("SELECT"!==this.selectEl.tagName){e.events&&e.events.error&&e.events.error(Error("Element isnt of type select"));return}this.selectEl.dataset.ssid&&this.destroy(),this.settings=new i(e.settings);let s=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(let n in e.events)e.events.hasOwnProperty(n)&&(-1!==s.indexOf(n)?this.events[n]=t(e.events[n],100):this.events[n]=e.events[n]);this.settings.disabled=(null===(n=e.settings)||void 0===n?void 0:n.disabled)?e.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new l(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=e=>{this.setSelected(e)},this.select.onClassChange=e=>{this.settings.class=e,this.render.updateClassStyles()},this.select.onDisabledChange=e=>{e?this.disable():this.enable()},this.select.onOptionsChange=e=>{this.setData(e)},this.store=new a(this.settings.isMultiple?"multiple":"single",e.data?e.data:this.select.getData()),e.data&&this.select.updateOptions(this.store.getData());let r={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new o(this.settings,this.store,r),this.render.renderValues(),this.render.renderOptions(this.store.getData());let c=this.selectEl.getAttribute("aria-label"),d=this.selectEl.getAttribute("aria-labelledby");c?this.render.main.main.setAttribute("aria-label",c):d&&this.render.main.main.setAttribute("aria-labelledby",d),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),document.addEventListener("click",this.documentClick),window.addEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(e){let t=this.store.getSelected(),i=this.store.validateDataArray(e);if(i){this.events.error&&this.events.error(i);return}this.store.setData(e);let s=this.store.getData();this.select.updateOptions(s),this.render.renderValues(),this.render.renderOptions(s),this.events.afterChange&&!n(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){return this.store.getSelected()}setSelected(e,t=!0){let i=this.store.getSelected();this.store.setSelectedBy("value",Array.isArray(e)?e:[e]);let s=this.store.getData();this.select.updateOptions(s),this.render.renderValues(),""!==this.render.content.search.input.value?this.search(this.render.content.search.input.value):this.render.renderOptions(s),t&&this.events.afterChange&&!n(i,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(e){let t=this.store.getSelected();this.store.getDataOptions().some(t=>{var n;return t.value===(null!==(n=e.value)&&void 0!==n?n:e.text)})||this.store.addOption(e);let i=this.store.getData();this.select.updateOptions(i),this.render.renderValues(),this.render.renderOptions(i),this.events.afterChange&&!n(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout(()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0)},this.settings.timeoutDelay),"absolute"===this.settings.contentPosition&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(e=null){this.settings.isOpen&&!this.settings.alwaysOpen&&(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),""!==this.render.content.search.input.value&&this.search(""),this.render.mainFocus(e),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout(()=>{this.events.afterClose&&this.events.afterClose()},this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(e){if(this.render.content.search.input.value!==e&&(this.render.content.search.input.value=e),!this.events.search){this.render.renderOptions(""===e?this.store.getData():this.store.search(e,this.events.searchFilter));return}this.render.renderSearching();let t=this.events.search(e,this.store.getSelectedOptions());if(t instanceof Promise){t.then(e=>{this.render.renderOptions(this.store.partialToFullData(e))}).catch(e=>{this.render.renderError("string"==typeof e?e:e.message)});return}Array.isArray(t)?this.render.renderOptions(this.store.partialToFullData(t)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}}}();var u=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],p={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},f={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},m=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},g=function(e){return!0===e?1:0};function v(e,t){var n;return function(){var i=this,s=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(i,s)},t)}}var b=function(e){return e instanceof Array?e:[e]};function w(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function y(e,t,n){var i=window.document.createElement(e);return t=t||"",n=n||"",i.className=t,void 0!==n&&(i.textContent=n),i}function _(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function C(e,t){var n=y("div","numInputWrapper"),i=y("input","numInput "+e),s=y("span","arrowUp"),r=y("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?i.type="number":(i.type="text",i.pattern="\\d*"),void 0!==t)for(var a in t)i.setAttribute(a,t[a]);return n.appendChild(i),n.appendChild(s),n.appendChild(r),n}function E(e){try{if("function"==typeof e.composedPath)return e.composedPath()[0];return e.target}catch(t){return e.target}}var I=function(){},T=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},S={D:I,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*g(RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var i=parseInt(t),s=new Date(e.getFullYear(),0,2+(i-1)*7,0,0,0,0);return s.setDate(s.getDate()-s.getDay()+n.firstDayOfWeek),s},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:I,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:I,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},D={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},k={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[k.w(e,t,n)]},F:function(e,t,n){return T(k.n(e,t,n)-1,!1,t)},G:function(e,t,n){return m(k.h(e,t,n))},H:function(e){return m(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[g(e.getHours()>11)]},M:function(e,t){return T(e.getMonth(),!0,t)},S:function(e){return m(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return m(e.getFullYear(),4)},d:function(e){return m(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return m(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return m(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},O=function(e){var t=e.config,n=void 0===t?p:t,i=e.l10n,s=void 0===i?f:i,r=e.isMobile,a=void 0!==r&&r;return function(e,t,i){var r=i||s;return void 0===n.formatDate||a?t.split("").map(function(t,i,s){return k[t]&&"\\"!==s[i-1]?k[t](e,r,n):"\\"!==t?t:""}).join(""):n.formatDate(e,t,r)}},M=function(e){var t=e.config,n=void 0===t?p:t,i=e.l10n,s=void 0===i?f:i;return function(e,t,i,r){if(0===e||e){var a,o=r||s;if(e instanceof Date)a=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)a=new Date(e);else if("string"==typeof e){var l=t||(n||p).dateFormat,c=String(e).trim();if("today"===c)a=new Date,i=!0;else if(n&&n.parseDate)a=n.parseDate(e,l);else if(/Z$/.test(c)||/GMT$/.test(c))a=new Date(e);else{for(var d=void 0,h=[],u=0,f=0,m="";u<l.length;u++){var g=l[u],v="\\"===g,b="\\"===l[u-1]||v;if(D[g]&&!b){m+=D[g];var w=new RegExp(m).exec(e);w&&(d=!0)&&h["Y"!==g?"push":"unshift"]({fn:S[g],val:w[++f]})}else v||(m+=".")}a=n&&n.noCalendar?new Date(new Date().setHours(0,0,0,0)):new Date(new Date().getFullYear(),0,1,0,0,0,0),h.forEach(function(e){var t=e.fn,n=e.val;return a=t(a,n,o)||a}),a=d?a:void 0}}if(!(a instanceof Date&&!isNaN(a.getTime()))){n.errorHandler(Error("Invalid date provided: "+e));return}return!0===i&&a.setHours(0,0,0,0),a}}};function A(e,t,n){return(void 0===n&&(n=!0),!1!==n)?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var L=function(e,t,n){return 3600*e+60*t+n},P=function(e){var t=Math.floor(e/3600),n=(e-3600*t)/60;return[t,n,e-3600*t-60*n]},N={DAY:864e5};function R(e){var t=e.defaultHour,n=e.defaultMinute,i=e.defaultSeconds;if(void 0!==e.minDate){var s=e.minDate.getHours(),r=e.minDate.getMinutes(),a=e.minDate.getSeconds();t<s&&(t=s),t===s&&n<r&&(n=r),t===s&&n===r&&i<a&&(i=e.minDate.getSeconds())}if(void 0!==e.maxDate){var o=e.maxDate.getHours(),l=e.maxDate.getMinutes();(t=Math.min(t,o))===o&&(n=Math.min(l,n)),t===o&&n===l&&(i=e.maxDate.getSeconds())}return{hours:t,minutes:n,seconds:i}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var i=function(t){t&&Object.keys(t).forEach(function(n){return e[n]=t[n]})},s=0;s<t.length;s++)i(t[s]);return e});var x=function(){return(x=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},F=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),s=0,t=0;t<n;t++)for(var r=arguments[t],a=0,o=r.length;a<o;a++,s++)i[s]=r[a];return i};function U(e,t){for(var n=Array.prototype.slice.call(e).filter(function(e){return e instanceof HTMLElement}),i=[],s=0;s<n.length;s++){var r=n[s];try{if(null!==r.getAttribute("data-fp-omit"))continue;void 0!==r._flatpickr&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=function(e,t){var n,i={config:x(x({},p),j.defaultConfig),l10n:f};function s(){var e;return(null===(e=i.calendarContainer)||void 0===e?void 0:e.getRootNode()).activeElement||document.activeElement}function r(e){return e.bind(i)}function a(){var e=i.config;(!1!==e.weekNumbers||1!==e.showMonths)&&!0!==e.noCalendar&&window.requestAnimationFrame(function(){if(void 0!==i.calendarContainer&&(i.calendarContainer.style.visibility="hidden",i.calendarContainer.style.display="block"),void 0!==i.daysContainer){var t=(i.days.offsetWidth+1)*e.showMonths;i.daysContainer.style.width=t+"px",i.calendarContainer.style.width=t+(void 0!==i.weekWrapper?i.weekWrapper.offsetWidth:0)+"px",i.calendarContainer.style.removeProperty("visibility"),i.calendarContainer.style.removeProperty("display")}})}function o(e){if(0===i.selectedDates.length){var t=void 0===i.config.minDate||A(new Date,i.config.minDate)>=0?new Date:new Date(i.config.minDate.getTime()),n=R(i.config);t.setHours(n.hours,n.minutes,n.seconds,t.getMilliseconds()),i.selectedDates=[t],i.latestSelectedDateObj=t}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=E(e);void 0!==i.amPM&&n===i.amPM&&(i.amPM.textContent=i.l10n.amPM[g(i.amPM.textContent===i.l10n.amPM[0])]);var s=parseFloat(n.getAttribute("min")),r=parseFloat(n.getAttribute("max")),a=parseFloat(n.getAttribute("step")),o=parseInt(n.value,10),l=o+a*(e.delta||(t?38===e.which?1:-1:0));if(void 0!==n.value&&2===n.value.length){var c=n===i.hourElement,d=n===i.minuteElement;l<s?(l=r+l+g(!c)+(g(c)&&g(!i.amPM)),d&&H(void 0,-1,i.hourElement)):l>r&&(l=n===i.hourElement?l-r-g(!i.amPM):s,d&&H(void 0,1,i.hourElement)),i.amPM&&c&&(1===a?l+o===23:Math.abs(l-o)>a)&&(i.amPM.textContent=i.l10n.amPM[g(i.amPM.textContent===i.l10n.amPM[0])]),n.value=m(l)}}(e);var s=i._input.value;l(),eC(),i._input.value!==s&&i._debouncedChange()}function l(){if(void 0!==i.hourElement&&void 0!==i.minuteElement){var e=(parseInt(i.hourElement.value.slice(-2),10)||0)%24,t=(parseInt(i.minuteElement.value,10)||0)%60,n=void 0!==i.secondElement?(parseInt(i.secondElement.value,10)||0)%60:0;void 0!==i.amPM&&(e=e%12+12*g(i.amPM.textContent===i.l10n.amPM[1]));var s=void 0!==i.config.minTime||i.config.minDate&&i.minDateHasTime&&i.latestSelectedDateObj&&0===A(i.latestSelectedDateObj,i.config.minDate,!0),r=void 0!==i.config.maxTime||i.config.maxDate&&i.maxDateHasTime&&i.latestSelectedDateObj&&0===A(i.latestSelectedDateObj,i.config.maxDate,!0);if(void 0!==i.config.maxTime&&void 0!==i.config.minTime&&i.config.minTime>i.config.maxTime){var a=L(i.config.minTime.getHours(),i.config.minTime.getMinutes(),i.config.minTime.getSeconds()),o=L(i.config.maxTime.getHours(),i.config.maxTime.getMinutes(),i.config.maxTime.getSeconds()),l=L(e,t,n);if(l>o&&l<a){var c=P(a);e=c[0],t=c[1],n=c[2]}}else{if(r){var h=void 0!==i.config.maxTime?i.config.maxTime:i.config.maxDate;(e=Math.min(e,h.getHours()))===h.getHours()&&(t=Math.min(t,h.getMinutes())),t===h.getMinutes()&&(n=Math.min(n,h.getSeconds()))}if(s){var u=void 0!==i.config.minTime?i.config.minTime:i.config.minDate;(e=Math.max(e,u.getHours()))===u.getHours()&&t<u.getMinutes()&&(t=u.getMinutes()),t===u.getMinutes()&&(n=Math.max(n,u.getSeconds()))}}d(e,t,n)}}function c(e){var t=e||i.latestSelectedDateObj;t&&t instanceof Date&&d(t.getHours(),t.getMinutes(),t.getSeconds())}function d(e,t,n){void 0!==i.latestSelectedDateObj&&i.latestSelectedDateObj.setHours(e%24,t,n||0,0),i.hourElement&&i.minuteElement&&!i.isMobile&&(i.hourElement.value=m(i.config.time_24hr?e:(12+e)%12+12*g(e%12==0)),i.minuteElement.value=m(t),void 0!==i.amPM&&(i.amPM.textContent=i.l10n.amPM[g(e>=12)]),void 0!==i.secondElement&&(i.secondElement.value=m(n)))}function h(e){var t=parseInt(E(e).value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&Z(t)}function I(e,t,n,s){return t instanceof Array?t.forEach(function(t){return I(e,t,n,s)}):e instanceof Array?e.forEach(function(e){return I(e,t,n,s)}):void(e.addEventListener(t,n,s),i._handlers.push({remove:function(){return e.removeEventListener(t,n,s)}}))}function S(){ev("onChange")}function k(e,t){var n=void 0!==e?i.parseDate(e):i.latestSelectedDateObj||(i.config.minDate&&i.config.minDate>i.now?i.config.minDate:i.config.maxDate&&i.config.maxDate<i.now?i.config.maxDate:i.now),s=i.currentYear,r=i.currentMonth;try{void 0!==n&&(i.currentYear=n.getFullYear(),i.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,i.config.errorHandler(e)}t&&i.currentYear!==s&&(ev("onYearChange"),z()),t&&(i.currentYear!==s||i.currentMonth!==r)&&ev("onMonthChange"),i.redraw()}function U(e){var t=E(e);~t.className.indexOf("arrow")&&H(e,t.classList.contains("arrowUp")?1:-1)}function H(e,t,n){var i=e&&E(e),s=n||i&&i.parentNode&&i.parentNode.firstChild,r=eb("increment");r.delta=t,s&&s.dispatchEvent(r)}function q(e,t,n,s){var r=ee(t,!0),a=y("span",e,t.getDate().toString());return a.dateObj=t,a.$i=s,a.setAttribute("aria-label",i.formatDate(t,i.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===A(t,i.now)&&(i.todayDateElem=a,a.classList.add("today"),a.setAttribute("aria-current","date")),r?(a.tabIndex=-1,ew(t)&&(a.classList.add("selected"),i.selectedDateElem=a,"range"===i.config.mode&&(w(a,"startRange",i.selectedDates[0]&&0===A(t,i.selectedDates[0],!0)),w(a,"endRange",i.selectedDates[1]&&0===A(t,i.selectedDates[1],!0)),"nextMonthDay"===e&&a.classList.add("inRange")))):a.classList.add("flatpickr-disabled"),"range"===i.config.mode&&"range"===i.config.mode&&!(i.selectedDates.length<2)&&A(t,i.selectedDates[0])>=0&&0>=A(t,i.selectedDates[1])&&!ew(t)&&a.classList.add("inRange"),i.weekNumbers&&1===i.config.showMonths&&"prevMonthDay"!==e&&s%7==6&&i.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+i.config.getWeek(t)+"</span>"),ev("onDayCreate",a),a}function V(e){e.focus(),"range"===i.config.mode&&es(e)}function B(e){for(var t=e>0?0:i.config.showMonths-1,n=e>0?i.config.showMonths:-1,s=t;s!=n;s+=e)for(var r=i.daysContainer.children[s],a=e>0?0:r.children.length-1,o=e>0?r.children.length:-1,l=a;l!=o;l+=e){var c=r.children[l];if(-1===c.className.indexOf("hidden")&&ee(c.dateObj))return c}}function W(e,t){var n=s(),r=et(n||document.body),a=void 0!==e?e:r?n:void 0!==i.selectedDateElem&&et(i.selectedDateElem)?i.selectedDateElem:void 0!==i.todayDateElem&&et(i.todayDateElem)?i.todayDateElem:B(t>0?1:-1);void 0===a?i._input.focus():r?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():i.currentMonth,s=t>0?i.config.showMonths:-1,r=t>0?1:-1,a=n-i.currentMonth;a!=s;a+=r)for(var o=i.daysContainer.children[a],l=n-i.currentMonth===a?e.$i+t:t<0?o.children.length-1:0,c=o.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=r){var h=o.children[d];if(-1===h.className.indexOf("hidden")&&ee(h.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return V(h)}i.changeMonth(r),W(B(r),0)}(a,t):V(a)}function $(){if(void 0!==i.daysContainer){_(i.daysContainer),i.weekNumbers&&_(i.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<i.config.showMonths;t++){var n=new Date(i.currentYear,i.currentMonth,1);n.setMonth(i.currentMonth+t),e.appendChild(function(e,t){for(var n=(new Date(e,t,1).getDay()-i.l10n.firstDayOfWeek+7)%7,s=i.utils.getDaysInMonth((t-1+12)%12,e),r=i.utils.getDaysInMonth(t,e),a=window.document.createDocumentFragment(),o=i.config.showMonths>1,l=o?"prevMonthDay hidden":"prevMonthDay",c=o?"nextMonthDay hidden":"nextMonthDay",d=s+1-n,h=0;d<=s;d++,h++)a.appendChild(q("flatpickr-day "+l,new Date(e,t-1,d),d,h));for(d=1;d<=r;d++,h++)a.appendChild(q("flatpickr-day",new Date(e,t,d),d,h));for(var u=r+1;u<=42-n&&(1===i.config.showMonths||h%7!=0);u++,h++)a.appendChild(q("flatpickr-day "+c,new Date(e,t+1,u%r),u,h));var p=y("div","dayContainer");return p.appendChild(a),p}(n.getFullYear(),n.getMonth()))}i.daysContainer.appendChild(e),i.days=i.daysContainer.firstChild,"range"===i.config.mode&&1===i.selectedDates.length&&es()}}function z(){if(!(i.config.showMonths>1)&&"dropdown"===i.config.monthSelectorType){i.monthsDropdownContainer.tabIndex=-1,i.monthsDropdownContainer.innerHTML="";for(var e,t=0;t<12;t++)if(e=t,!(void 0!==i.config.minDate&&i.currentYear===i.config.minDate.getFullYear()&&e<i.config.minDate.getMonth()||void 0!==i.config.maxDate&&i.currentYear===i.config.maxDate.getFullYear()&&e>i.config.maxDate.getMonth())){var n=y("option","flatpickr-monthDropdown-month");n.value=new Date(i.currentYear,t).getMonth().toString(),n.textContent=T(t,i.config.shorthandCurrentMonth,i.l10n),n.tabIndex=-1,i.currentMonth===t&&(n.selected=!0),i.monthsDropdownContainer.appendChild(n)}}}function Y(){_(i.monthNav),i.monthNav.appendChild(i.prevMonthNav),i.config.showMonths&&(i.yearElements=[],i.monthElements=[]);for(var e=i.config.showMonths;e--;){var t=function(){var e,t=y("div","flatpickr-month"),n=window.document.createDocumentFragment();i.config.showMonths>1||"static"===i.config.monthSelectorType?e=y("span","cur-month"):(i.monthsDropdownContainer=y("select","flatpickr-monthDropdown-months"),i.monthsDropdownContainer.setAttribute("aria-label",i.l10n.monthAriaLabel),I(i.monthsDropdownContainer,"change",function(e){var t=parseInt(E(e).value,10);i.changeMonth(t-i.currentMonth),ev("onMonthChange")}),z(),e=i.monthsDropdownContainer);var s=C("cur-year",{tabindex:"-1"}),r=s.getElementsByTagName("input")[0];r.setAttribute("aria-label",i.l10n.yearAriaLabel),i.config.minDate&&r.setAttribute("min",i.config.minDate.getFullYear().toString()),i.config.maxDate&&(r.setAttribute("max",i.config.maxDate.getFullYear().toString()),r.disabled=!!i.config.minDate&&i.config.minDate.getFullYear()===i.config.maxDate.getFullYear());var a=y("div","flatpickr-current-month");return a.appendChild(e),a.appendChild(s),n.appendChild(a),t.appendChild(n),{container:t,yearElement:r,monthElement:e}}();i.yearElements.push(t.yearElement),i.monthElements.push(t.monthElement),i.monthNav.appendChild(t.container)}i.monthNav.appendChild(i.nextMonthNav)}function K(){i.weekdayContainer?_(i.weekdayContainer):i.weekdayContainer=y("div","flatpickr-weekdays");for(var e=i.config.showMonths;e--;){var t=y("div","flatpickr-weekdaycontainer");i.weekdayContainer.appendChild(t)}return G(),i.weekdayContainer}function G(){if(i.weekdayContainer){var e=i.l10n.firstDayOfWeek,t=F(i.l10n.weekdays.shorthand);e>0&&e<t.length&&(t=F(t.splice(e,t.length),t.splice(0,e)));for(var n=i.config.showMonths;n--;)i.weekdayContainer.children[n].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function J(e,t){void 0===t&&(t=!0);var n=t?e:e-i.currentMonth;n<0&&!0===i._hidePrevMonthArrow||n>0&&!0===i._hideNextMonthArrow||(i.currentMonth+=n,(i.currentMonth<0||i.currentMonth>11)&&(i.currentYear+=i.currentMonth>11?1:-1,i.currentMonth=(i.currentMonth+12)%12,ev("onYearChange"),z()),$(),ev("onMonthChange"),ey())}function X(e){return i.calendarContainer.contains(e)}function Q(e){if(i.isOpen&&!i.config.inline){var t=E(e),n=X(t),s=!(t===i.input||t===i.altInput||i.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(i.input)||~e.path.indexOf(i.altInput)))&&!n&&!X(e.relatedTarget),r=!i.config.ignoredFocusElements.some(function(e){return e.contains(t)});s&&r&&(i.config.allowInput&&i.setDate(i._input.value,!1,i.config.altInput?i.config.altFormat:i.config.dateFormat),void 0!==i.timeContainer&&void 0!==i.minuteElement&&void 0!==i.hourElement&&""!==i.input.value&&void 0!==i.input.value&&o(),i.close(),i.config&&"range"===i.config.mode&&1===i.selectedDates.length&&i.clear(!1))}}function Z(e){if(!(!e||i.config.minDate&&e<i.config.minDate.getFullYear()||i.config.maxDate&&e>i.config.maxDate.getFullYear())){var t=i.currentYear!==e;i.currentYear=e||i.currentYear,i.config.maxDate&&i.currentYear===i.config.maxDate.getFullYear()?i.currentMonth=Math.min(i.config.maxDate.getMonth(),i.currentMonth):i.config.minDate&&i.currentYear===i.config.minDate.getFullYear()&&(i.currentMonth=Math.max(i.config.minDate.getMonth(),i.currentMonth)),t&&(i.redraw(),ev("onYearChange"),z())}}function ee(e,t){void 0===t&&(t=!0);var n,s=i.parseDate(e,void 0,t);if(i.config.minDate&&s&&0>A(s,i.config.minDate,void 0!==t?t:!i.minDateHasTime)||i.config.maxDate&&s&&A(s,i.config.maxDate,void 0!==t?t:!i.maxDateHasTime)>0)return!1;if(!i.config.enable&&0===i.config.disable.length)return!0;if(void 0===s)return!1;for(var r=!!i.config.enable,a=null!==(n=i.config.enable)&&void 0!==n?n:i.config.disable,o=0,l=void 0;o<a.length;o++){if("function"==typeof(l=a[o])&&l(s)||l instanceof Date&&void 0!==s&&l.getTime()===s.getTime())return r;if("string"==typeof l){var c=i.parseDate(l,void 0,!0);return c&&c.getTime()===s.getTime()?r:!r}if("object"==typeof l&&void 0!==s&&l.from&&l.to&&s.getTime()>=l.from.getTime()&&s.getTime()<=l.to.getTime())return r}return!r}function et(e){return void 0!==i.daysContainer&&-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&i.daysContainer.contains(e)}function en(e){var t=e.target===i._input,n=i._input.value.trimEnd()!==e_();t&&n&&!(e.relatedTarget&&X(e.relatedTarget))&&i.setDate(i._input.value,!0,e.target===i.altInput?i.config.altFormat:i.config.dateFormat)}function ei(t){var n=E(t),r=i.config.wrap?e.contains(n):n===i._input,a=i.config.allowInput,c=i.isOpen&&(!a||!r),d=i.config.inline&&r&&!a;if(13===t.keyCode&&r){if(a)return i.setDate(i._input.value,!0,n===i.altInput?i.config.altFormat:i.config.dateFormat),i.close(),n.blur();i.open()}else if(X(n)||c||d){var h=!!i.timeContainer&&i.timeContainer.contains(n);switch(t.keyCode){case 13:h?(t.preventDefault(),o(),eh()):eu(t);break;case 27:t.preventDefault(),eh();break;case 8:case 46:r&&!i.config.allowInput&&(t.preventDefault(),i.clear());break;case 37:case 39:if(h||r)i.hourElement&&i.hourElement.focus();else{t.preventDefault();var u=s();if(void 0!==i.daysContainer&&(!1===a||u&&et(u))){var p=39===t.keyCode?1:-1;t.ctrlKey?(t.stopPropagation(),J(p),W(B(1),0)):W(void 0,p)}}break;case 38:case 40:t.preventDefault();var f=40===t.keyCode?1:-1;i.daysContainer&&void 0!==n.$i||n===i.input||n===i.altInput?t.ctrlKey?(t.stopPropagation(),Z(i.currentYear-f),W(B(1),0)):h||W(void 0,7*f):n===i.currentYearElement?Z(i.currentYear-f):i.config.enableTime&&(!h&&i.hourElement&&i.hourElement.focus(),o(t),i._debouncedChange());break;case 9:if(h){var m=[i.hourElement,i.minuteElement,i.secondElement,i.amPM].concat(i.pluginElements).filter(function(e){return e}),g=m.indexOf(n);if(-1!==g){var v=m[g+(t.shiftKey?-1:1)];t.preventDefault(),(v||i._input).focus()}}else!i.config.noCalendar&&i.daysContainer&&i.daysContainer.contains(n)&&t.shiftKey&&(t.preventDefault(),i._input.focus())}}if(void 0!==i.amPM&&n===i.amPM)switch(t.key){case i.l10n.amPM[0].charAt(0):case i.l10n.amPM[0].charAt(0).toLowerCase():i.amPM.textContent=i.l10n.amPM[0],l(),eC();break;case i.l10n.amPM[1].charAt(0):case i.l10n.amPM[1].charAt(0).toLowerCase():i.amPM.textContent=i.l10n.amPM[1],l(),eC()}(r||X(n))&&ev("onKeyDown",t)}function es(e,t){if(void 0===t&&(t="flatpickr-day"),!(1!==i.selectedDates.length||e&&(!e.classList.contains(t)||e.classList.contains("flatpickr-disabled")))){for(var n=e?e.dateObj.getTime():i.days.firstElementChild.dateObj.getTime(),s=i.parseDate(i.selectedDates[0],void 0,!0).getTime(),r=Math.min(n,i.selectedDates[0].getTime()),a=Math.max(n,i.selectedDates[0].getTime()),o=!1,l=0,c=0,d=r;d<a;d+=N.DAY)!ee(new Date(d),!0)&&(o=o||d>r&&d<a,d<s&&(!l||d>l)?l=d:d>s&&(!c||d<c)&&(c=d));Array.from(i.rContainer.querySelectorAll("*:nth-child(-n+"+i.config.showMonths+") > ."+t)).forEach(function(t){var r,a,d,h=t.dateObj.getTime(),u=l>0&&h<l||c>0&&h>c;if(u){t.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(e){t.classList.remove(e)});return}(!o||u)&&(["startRange","inRange","endRange","notAllowed"].forEach(function(e){t.classList.remove(e)}),void 0!==e&&(e.classList.add(n<=i.selectedDates[0].getTime()?"startRange":"endRange"),s<n&&h===s?t.classList.add("startRange"):s>n&&h===s&&t.classList.add("endRange"),h>=l&&(0===c||h<=c)&&(r=h)>Math.min(a=s,d=n)&&r<Math.max(a,d)&&t.classList.add("inRange")))})}}function er(){!i.isOpen||i.config.static||i.config.inline||ec()}function ea(e){return function(t){var n=i.config["_"+e+"Date"]=i.parseDate(t,i.config.dateFormat),s=i.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(i["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),i.selectedDates&&(i.selectedDates=i.selectedDates.filter(function(e){return ee(e)}),i.selectedDates.length||"min"!==e||c(n),eC()),i.daysContainer&&(ed(),void 0!==n?i.currentYearElement[e]=n.getFullYear().toString():i.currentYearElement.removeAttribute(e),i.currentYearElement.disabled=!!s&&void 0!==n&&s.getFullYear()===n.getFullYear())}}function eo(){return i.config.wrap?e.querySelector("[data-input]"):e}function el(){"object"!=typeof i.config.locale&&void 0===j.l10ns[i.config.locale]&&i.config.errorHandler(Error("flatpickr: invalid locale "+i.config.locale)),i.l10n=x(x({},j.l10ns.default),"object"==typeof i.config.locale?i.config.locale:"default"!==i.config.locale?j.l10ns[i.config.locale]:void 0),D.D="("+i.l10n.weekdays.shorthand.join("|")+")",D.l="("+i.l10n.weekdays.longhand.join("|")+")",D.M="("+i.l10n.months.shorthand.join("|")+")",D.F="("+i.l10n.months.longhand.join("|")+")",D.K="("+i.l10n.amPM[0]+"|"+i.l10n.amPM[1]+"|"+i.l10n.amPM[0].toLowerCase()+"|"+i.l10n.amPM[1].toLowerCase()+")",void 0===x(x({},t),JSON.parse(JSON.stringify(e.dataset||{}))).time_24hr&&void 0===j.defaultConfig.time_24hr&&(i.config.time_24hr=i.l10n.time_24hr),i.formatDate=O(i),i.parseDate=M({config:i.config,l10n:i.l10n})}function ec(e){if("function"==typeof i.config.position)return void i.config.position(i,e);if(void 0!==i.calendarContainer){ev("onPreCalendarPosition");var t=e||i._positionElement,n=Array.prototype.reduce.call(i.calendarContainer.children,function(e,t){return e+t.offsetHeight},0),s=i.calendarContainer.offsetWidth,r=i.config.position.split(" "),a=r[0],o=r.length>1?r[1]:null,l=t.getBoundingClientRect(),c=window.innerHeight-l.bottom,d="above"===a||"below"!==a&&c<n&&l.top>n,h=window.pageYOffset+l.top+(d?-n-2:t.offsetHeight+2);if(w(i.calendarContainer,"arrowTop",!d),w(i.calendarContainer,"arrowBottom",d),!i.config.inline){var u=window.pageXOffset+l.left,p=!1,f=!1;"center"===o?(u-=(s-l.width)/2,p=!0):"right"===o&&(u-=s-l.width,f=!0),w(i.calendarContainer,"arrowLeft",!p&&!f),w(i.calendarContainer,"arrowCenter",p),w(i.calendarContainer,"arrowRight",f);var m=window.document.body.offsetWidth-(window.pageXOffset+l.right),g=u+s>window.document.body.offsetWidth,v=m+s>window.document.body.offsetWidth;if(w(i.calendarContainer,"rightMost",g),!i.config.static){if(i.calendarContainer.style.top=h+"px",g){if(v){var b=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];if(n.cssRules){try{n.cssRules}catch(e){continue}e=n;break}}return null!=e?e:function(){var e=document.createElement("style");return document.head.appendChild(e),e.sheet}()}();if(void 0===b)return;var y=window.document.body.offsetWidth,_=b.cssRules.length,C="{left:"+l.left+"px;right:auto;}";w(i.calendarContainer,"rightMost",!1),w(i.calendarContainer,"centerMost",!0),b.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+C,_),i.calendarContainer.style.left=Math.max(0,y/2-s/2)+"px",i.calendarContainer.style.right="auto"}else i.calendarContainer.style.left="auto",i.calendarContainer.style.right=m+"px"}else i.calendarContainer.style.left=u+"px",i.calendarContainer.style.right="auto"}}}}function ed(){i.config.noCalendar||i.isMobile||(z(),ey(),$())}function eh(){i._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(i.close,0):i.close()}function eu(e){e.preventDefault(),e.stopPropagation();var t=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(E(e),function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")});if(void 0!==t){var n=i.latestSelectedDateObj=new Date(t.dateObj.getTime()),s=(n.getMonth()<i.currentMonth||n.getMonth()>i.currentMonth+i.config.showMonths-1)&&"range"!==i.config.mode;if(i.selectedDateElem=t,"single"===i.config.mode)i.selectedDates=[n];else if("multiple"===i.config.mode){var r=ew(n);r?i.selectedDates.splice(parseInt(r),1):i.selectedDates.push(n)}else"range"===i.config.mode&&(2===i.selectedDates.length&&i.clear(!1,!1),i.latestSelectedDateObj=n,i.selectedDates.push(n),0!==A(n,i.selectedDates[0],!0)&&i.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}));if(l(),s){var a=i.currentYear!==n.getFullYear();i.currentYear=n.getFullYear(),i.currentMonth=n.getMonth(),a&&(ev("onYearChange"),z()),ev("onMonthChange")}if(ey(),$(),eC(),s||"range"===i.config.mode||1!==i.config.showMonths?void 0!==i.selectedDateElem&&void 0===i.hourElement&&i.selectedDateElem&&i.selectedDateElem.focus():V(t),void 0!==i.hourElement&&void 0!==i.hourElement&&i.hourElement.focus(),i.config.closeOnSelect){var o="single"===i.config.mode&&!i.config.enableTime,c="range"===i.config.mode&&2===i.selectedDates.length&&!i.config.enableTime;(o||c)&&eh()}S()}}i.parseDate=M({config:i.config,l10n:i.l10n}),i._handlers=[],i.pluginElements=[],i.loadedPlugins=[],i._bind=I,i._setHoursFromDate=c,i._positionCalendar=ec,i.changeMonth=J,i.changeYear=Z,i.clear=function(e,t){if(void 0===e&&(e=!0),void 0===t&&(t=!0),i.input.value="",void 0!==i.altInput&&(i.altInput.value=""),void 0!==i.mobileInput&&(i.mobileInput.value=""),i.selectedDates=[],i.latestSelectedDateObj=void 0,!0===t&&(i.currentYear=i._initialDate.getFullYear(),i.currentMonth=i._initialDate.getMonth()),!0===i.config.enableTime){var n=R(i.config);d(n.hours,n.minutes,n.seconds)}i.redraw(),e&&ev("onChange")},i.close=function(){i.isOpen=!1,i.isMobile||(void 0!==i.calendarContainer&&i.calendarContainer.classList.remove("open"),void 0!==i._input&&i._input.classList.remove("active")),ev("onClose")},i.onMouseOver=es,i._createElement=y,i.createDay=q,i.destroy=function(){void 0!==i.config&&ev("onDestroy");for(var e=i._handlers.length;e--;)i._handlers[e].remove();if(i._handlers=[],i.mobileInput)i.mobileInput.parentNode&&i.mobileInput.parentNode.removeChild(i.mobileInput),i.mobileInput=void 0;else if(i.calendarContainer&&i.calendarContainer.parentNode){if(i.config.static&&i.calendarContainer.parentNode){var t=i.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else i.calendarContainer.parentNode.removeChild(i.calendarContainer)}i.altInput&&(i.input.type="text",i.altInput.parentNode&&i.altInput.parentNode.removeChild(i.altInput),delete i.altInput),i.input&&(i.input.type=i.input._type,i.input.classList.remove("flatpickr-input"),i.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(e){try{delete i[e]}catch(e){}})},i.isEnabled=ee,i.jumpToDate=k,i.updateValue=eC,i.open=function(e,t){if(void 0===t&&(t=i._positionElement),!0===i.isMobile){if(e){e.preventDefault();var n=E(e);n&&n.blur()}void 0!==i.mobileInput&&(i.mobileInput.focus(),i.mobileInput.click()),ev("onOpen");return}if(!i._input.disabled&&!i.config.inline){var s=i.isOpen;i.isOpen=!0,s||(i.calendarContainer.classList.add("open"),i._input.classList.add("active"),ev("onOpen"),ec(t)),!0!==i.config.enableTime||!0!==i.config.noCalendar||!1!==i.config.allowInput||void 0!==e&&i.timeContainer.contains(e.relatedTarget)||setTimeout(function(){return i.hourElement.select()},50)}},i.redraw=ed,i.set=function(e,t){if(null!==e&&"object"==typeof e)for(var n in Object.assign(i.config,e),e)void 0!==ep[n]&&ep[n].forEach(function(e){return e()});else i.config[e]=t,void 0!==ep[e]?ep[e].forEach(function(e){return e()}):u.indexOf(e)>-1&&(i.config[e]=b(t));i.redraw(),eC(!0)},i.setDate=function(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=i.config.dateFormat),0!==e&&!e||e instanceof Array&&0===e.length)return i.clear(t);ef(e,n),i.latestSelectedDateObj=i.selectedDates[i.selectedDates.length-1],i.redraw(),k(void 0,t),c(),0===i.selectedDates.length&&i.clear(!1),eC(t),t&&ev("onChange")},i.toggle=function(e){if(!0===i.isOpen)return i.close();i.open(e)};var ep={locale:[el,G],showMonths:[Y,a,K],minDate:[k],maxDate:[k],positionElement:[eg],clickOpens:[function(){!0===i.config.clickOpens?(I(i._input,"focus",i.open),I(i._input,"click",i.open)):(i._input.removeEventListener("focus",i.open),i._input.removeEventListener("click",i.open))}]};function ef(e,t){var n=[];if(e instanceof Array)n=e.map(function(e){return i.parseDate(e,t)});else if(e instanceof Date||"number"==typeof e)n=[i.parseDate(e,t)];else if("string"==typeof e)switch(i.config.mode){case"single":case"time":n=[i.parseDate(e,t)];break;case"multiple":n=e.split(i.config.conjunction).map(function(e){return i.parseDate(e,t)});break;case"range":n=e.split(i.l10n.rangeSeparator).map(function(e){return i.parseDate(e,t)})}else i.config.errorHandler(Error("Invalid date supplied: "+JSON.stringify(e)));i.selectedDates=i.config.allowInvalidPreload?n:n.filter(function(e){return e instanceof Date&&ee(e,!1)}),"range"===i.config.mode&&i.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()})}function em(e){return e.slice().map(function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?i.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:i.parseDate(e.from,void 0),to:i.parseDate(e.to,void 0)}:e}).filter(function(e){return e})}function eg(){i._positionElement=i.config.positionElement||i._input}function ev(e,t){if(void 0!==i.config){var n=i.config[e];if(void 0!==n&&n.length>0)for(var s=0;n[s]&&s<n.length;s++)n[s](i.selectedDates,i.input.value,i,t);"onChange"===e&&(i.input.dispatchEvent(eb("change")),i.input.dispatchEvent(eb("input")))}}function eb(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ew(e){for(var t=0;t<i.selectedDates.length;t++){var n=i.selectedDates[t];if(n instanceof Date&&0===A(n,e))return""+t}return!1}function ey(){i.config.noCalendar||i.isMobile||!i.monthNav||(i.yearElements.forEach(function(e,t){var n=new Date(i.currentYear,i.currentMonth,1);n.setMonth(i.currentMonth+t),i.config.showMonths>1||"static"===i.config.monthSelectorType?i.monthElements[t].textContent=T(n.getMonth(),i.config.shorthandCurrentMonth,i.l10n)+" ":i.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()}),i._hidePrevMonthArrow=void 0!==i.config.minDate&&(i.currentYear===i.config.minDate.getFullYear()?i.currentMonth<=i.config.minDate.getMonth():i.currentYear<i.config.minDate.getFullYear()),i._hideNextMonthArrow=void 0!==i.config.maxDate&&(i.currentYear===i.config.maxDate.getFullYear()?i.currentMonth+1>i.config.maxDate.getMonth():i.currentYear>i.config.maxDate.getFullYear()))}function e_(e){var t=e||(i.config.altInput?i.config.altFormat:i.config.dateFormat);return i.selectedDates.map(function(e){return i.formatDate(e,t)}).filter(function(e,t,n){return"range"!==i.config.mode||i.config.enableTime||n.indexOf(e)===t}).join("range"!==i.config.mode?i.config.conjunction:i.l10n.rangeSeparator)}function eC(e){void 0===e&&(e=!0),void 0!==i.mobileInput&&i.mobileFormatStr&&(i.mobileInput.value=void 0!==i.latestSelectedDateObj?i.formatDate(i.latestSelectedDateObj,i.mobileFormatStr):""),i.input.value=e_(i.config.dateFormat),void 0!==i.altInput&&(i.altInput.value=e_(i.config.altFormat)),!1!==e&&ev("onValueUpdate")}function eE(e){var t=E(e),n=i.prevMonthNav.contains(t),s=i.nextMonthNav.contains(t);n||s?J(n?-1:1):i.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?i.changeYear(i.currentYear+1):t.classList.contains("arrowDown")&&i.changeYear(i.currentYear-1)}return i.element=i.input=e,i.isOpen=!1,function(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],s=x(x({},JSON.parse(JSON.stringify(e.dataset||{}))),t),a={};i.config.parseDate=s.parseDate,i.config.formatDate=s.formatDate,Object.defineProperty(i.config,"enable",{get:function(){return i.config._enable},set:function(e){i.config._enable=em(e)}}),Object.defineProperty(i.config,"disable",{get:function(){return i.config._disable},set:function(e){i.config._disable=em(e)}});var o="time"===s.mode;if(!s.dateFormat&&(s.enableTime||o)){var l=j.defaultConfig.dateFormat||p.dateFormat;a.dateFormat=s.noCalendar||o?"H:i"+(s.enableSeconds?":S":""):l+" H:i"+(s.enableSeconds?":S":"")}if(s.altInput&&(s.enableTime||o)&&!s.altFormat){var c=j.defaultConfig.altFormat||p.altFormat;a.altFormat=s.noCalendar||o?"h:i"+(s.enableSeconds?":S K":" K"):c+" h:i"+(s.enableSeconds?":S":"")+" K"}Object.defineProperty(i.config,"minDate",{get:function(){return i.config._minDate},set:ea("min")}),Object.defineProperty(i.config,"maxDate",{get:function(){return i.config._maxDate},set:ea("max")});var d=function(e){return function(t){i.config["min"===e?"_minTime":"_maxTime"]=i.parseDate(t,"H:i:S")}};Object.defineProperty(i.config,"minTime",{get:function(){return i.config._minTime},set:d("min")}),Object.defineProperty(i.config,"maxTime",{get:function(){return i.config._maxTime},set:d("max")}),"time"===s.mode&&(i.config.noCalendar=!0,i.config.enableTime=!0),Object.assign(i.config,a,s);for(var h=0;h<n.length;h++)i.config[n[h]]=!0===i.config[n[h]]||"true"===i.config[n[h]];u.filter(function(e){return void 0!==i.config[e]}).forEach(function(e){i.config[e]=b(i.config[e]||[]).map(r)}),i.isMobile=!i.config.disableMobile&&!i.config.inline&&"single"===i.config.mode&&!i.config.disable.length&&!i.config.enable&&!i.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var h=0;h<i.config.plugins.length;h++){var f=i.config.plugins[h](i)||{};for(var m in f)u.indexOf(m)>-1?i.config[m]=b(f[m]).map(r).concat(i.config[m]):void 0===s[m]&&(i.config[m]=f[m])}s.altInputClass||(i.config.altInputClass=eo().className+" "+i.config.altInputClass),ev("onParseConfig")}(),el(),function(){if(i.input=eo(),!i.input){i.config.errorHandler(Error("Invalid input element specified"));return}i.input._type=i.input.type,i.input.type="text",i.input.classList.add("flatpickr-input"),i._input=i.input,i.config.altInput&&(i.altInput=y(i.input.nodeName,i.config.altInputClass),i._input=i.altInput,i.altInput.placeholder=i.input.placeholder,i.altInput.disabled=i.input.disabled,i.altInput.required=i.input.required,i.altInput.tabIndex=i.input.tabIndex,i.altInput.type="text",i.input.setAttribute("type","hidden"),!i.config.static&&i.input.parentNode&&i.input.parentNode.insertBefore(i.altInput,i.input.nextSibling)),i.config.allowInput||i._input.setAttribute("readonly","readonly"),eg()}(),function(){i.selectedDates=[],i.now=i.parseDate(i.config.now)||new Date;var e=i.config.defaultDate||(("INPUT"===i.input.nodeName||"TEXTAREA"===i.input.nodeName)&&i.input.placeholder&&i.input.value===i.input.placeholder?null:i.input.value);e&&ef(e,i.config.dateFormat),i._initialDate=i.selectedDates.length>0?i.selectedDates[0]:i.config.minDate&&i.config.minDate.getTime()>i.now.getTime()?i.config.minDate:i.config.maxDate&&i.config.maxDate.getTime()<i.now.getTime()?i.config.maxDate:i.now,i.currentYear=i._initialDate.getFullYear(),i.currentMonth=i._initialDate.getMonth(),i.selectedDates.length>0&&(i.latestSelectedDateObj=i.selectedDates[0]),void 0!==i.config.minTime&&(i.config.minTime=i.parseDate(i.config.minTime,"H:i")),void 0!==i.config.maxTime&&(i.config.maxTime=i.parseDate(i.config.maxTime,"H:i")),i.minDateHasTime=!!i.config.minDate&&(i.config.minDate.getHours()>0||i.config.minDate.getMinutes()>0||i.config.minDate.getSeconds()>0),i.maxDateHasTime=!!i.config.maxDate&&(i.config.maxDate.getHours()>0||i.config.maxDate.getMinutes()>0||i.config.maxDate.getSeconds()>0)}(),i.utils={getDaysInMonth:function(e,t){return(void 0===e&&(e=i.currentMonth),void 0===t&&(t=i.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0))?29:i.l10n.daysInMonth[e]}},i.isMobile||function(){var e=window.document.createDocumentFragment();if(i.calendarContainer=y("div","flatpickr-calendar"),i.calendarContainer.tabIndex=-1,!i.config.noCalendar){if(e.appendChild((i.monthNav=y("div","flatpickr-months"),i.yearElements=[],i.monthElements=[],i.prevMonthNav=y("span","flatpickr-prev-month"),i.prevMonthNav.innerHTML=i.config.prevArrow,i.nextMonthNav=y("span","flatpickr-next-month"),i.nextMonthNav.innerHTML=i.config.nextArrow,Y(),Object.defineProperty(i,"_hidePrevMonthArrow",{get:function(){return i.__hidePrevMonthArrow},set:function(e){i.__hidePrevMonthArrow!==e&&(w(i.prevMonthNav,"flatpickr-disabled",e),i.__hidePrevMonthArrow=e)}}),Object.defineProperty(i,"_hideNextMonthArrow",{get:function(){return i.__hideNextMonthArrow},set:function(e){i.__hideNextMonthArrow!==e&&(w(i.nextMonthNav,"flatpickr-disabled",e),i.__hideNextMonthArrow=e)}}),i.currentYearElement=i.yearElements[0],ey(),i.monthNav)),i.innerContainer=y("div","flatpickr-innerContainer"),i.config.weekNumbers){var t=function(){i.calendarContainer.classList.add("hasWeeks");var e=y("div","flatpickr-weekwrapper");e.appendChild(y("span","flatpickr-weekday",i.l10n.weekAbbreviation));var t=y("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,s=t.weekNumbers;i.innerContainer.appendChild(n),i.weekNumbers=s,i.weekWrapper=n}i.rContainer=y("div","flatpickr-rContainer"),i.rContainer.appendChild(K()),i.daysContainer||(i.daysContainer=y("div","flatpickr-days"),i.daysContainer.tabIndex=-1),$(),i.rContainer.appendChild(i.daysContainer),i.innerContainer.appendChild(i.rContainer),e.appendChild(i.innerContainer)}i.config.enableTime&&e.appendChild(function(){i.calendarContainer.classList.add("hasTime"),i.config.noCalendar&&i.calendarContainer.classList.add("noCalendar");var e=R(i.config);i.timeContainer=y("div","flatpickr-time"),i.timeContainer.tabIndex=-1;var t=y("span","flatpickr-time-separator",":"),n=C("flatpickr-hour",{"aria-label":i.l10n.hourAriaLabel});i.hourElement=n.getElementsByTagName("input")[0];var s=C("flatpickr-minute",{"aria-label":i.l10n.minuteAriaLabel});if(i.minuteElement=s.getElementsByTagName("input")[0],i.hourElement.tabIndex=i.minuteElement.tabIndex=-1,i.hourElement.value=m(i.latestSelectedDateObj?i.latestSelectedDateObj.getHours():i.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),i.minuteElement.value=m(i.latestSelectedDateObj?i.latestSelectedDateObj.getMinutes():e.minutes),i.hourElement.setAttribute("step",i.config.hourIncrement.toString()),i.minuteElement.setAttribute("step",i.config.minuteIncrement.toString()),i.hourElement.setAttribute("min",i.config.time_24hr?"0":"1"),i.hourElement.setAttribute("max",i.config.time_24hr?"23":"12"),i.hourElement.setAttribute("maxlength","2"),i.minuteElement.setAttribute("min","0"),i.minuteElement.setAttribute("max","59"),i.minuteElement.setAttribute("maxlength","2"),i.timeContainer.appendChild(n),i.timeContainer.appendChild(t),i.timeContainer.appendChild(s),i.config.time_24hr&&i.timeContainer.classList.add("time24hr"),i.config.enableSeconds){i.timeContainer.classList.add("hasSeconds");var r=C("flatpickr-second");i.secondElement=r.getElementsByTagName("input")[0],i.secondElement.value=m(i.latestSelectedDateObj?i.latestSelectedDateObj.getSeconds():e.seconds),i.secondElement.setAttribute("step",i.minuteElement.getAttribute("step")),i.secondElement.setAttribute("min","0"),i.secondElement.setAttribute("max","59"),i.secondElement.setAttribute("maxlength","2"),i.timeContainer.appendChild(y("span","flatpickr-time-separator",":")),i.timeContainer.appendChild(r)}return i.config.time_24hr||(i.amPM=y("span","flatpickr-am-pm",i.l10n.amPM[g((i.latestSelectedDateObj?i.hourElement.value:i.config.defaultHour)>11)]),i.amPM.title=i.l10n.toggleTitle,i.amPM.tabIndex=-1,i.timeContainer.appendChild(i.amPM)),i.timeContainer}()),w(i.calendarContainer,"rangeMode","range"===i.config.mode),w(i.calendarContainer,"animate",!0===i.config.animate),w(i.calendarContainer,"multiMonth",i.config.showMonths>1),i.calendarContainer.appendChild(e);var r=void 0!==i.config.appendTo&&void 0!==i.config.appendTo.nodeType;if((i.config.inline||i.config.static)&&(i.calendarContainer.classList.add(i.config.inline?"inline":"static"),i.config.inline&&(!r&&i.element.parentNode?i.element.parentNode.insertBefore(i.calendarContainer,i._input.nextSibling):void 0!==i.config.appendTo&&i.config.appendTo.appendChild(i.calendarContainer)),i.config.static)){var a=y("div","flatpickr-wrapper");i.element.parentNode&&i.element.parentNode.insertBefore(a,i.element),a.appendChild(i.element),i.altInput&&a.appendChild(i.altInput),a.appendChild(i.calendarContainer)}i.config.static||i.config.inline||(void 0!==i.config.appendTo?i.config.appendTo:window.document.body).appendChild(i.calendarContainer)}(),function(){if(i.config.wrap&&["open","close","toggle","clear"].forEach(function(e){Array.prototype.forEach.call(i.element.querySelectorAll("[data-"+e+"]"),function(t){return I(t,"click",i[e])})}),i.isMobile){(function(){var e=i.config.enableTime?i.config.noCalendar?"time":"datetime-local":"date";i.mobileInput=y("input",i.input.className+" flatpickr-mobile"),i.mobileInput.tabIndex=1,i.mobileInput.type=e,i.mobileInput.disabled=i.input.disabled,i.mobileInput.required=i.input.required,i.mobileInput.placeholder=i.input.placeholder,i.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",i.selectedDates.length>0&&(i.mobileInput.defaultValue=i.mobileInput.value=i.formatDate(i.selectedDates[0],i.mobileFormatStr)),i.config.minDate&&(i.mobileInput.min=i.formatDate(i.config.minDate,"Y-m-d")),i.config.maxDate&&(i.mobileInput.max=i.formatDate(i.config.maxDate,"Y-m-d")),i.input.getAttribute("step")&&(i.mobileInput.step=String(i.input.getAttribute("step"))),i.input.type="hidden",void 0!==i.altInput&&(i.altInput.type="hidden");try{i.input.parentNode&&i.input.parentNode.insertBefore(i.mobileInput,i.input.nextSibling)}catch(e){}I(i.mobileInput,"change",function(e){i.setDate(E(e).value,!1,i.mobileFormatStr),ev("onChange"),ev("onClose")})})();return}var e=v(er,50);i._debouncedChange=v(S,300),i.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&I(i.daysContainer,"mouseover",function(e){"range"===i.config.mode&&es(E(e))}),I(i._input,"keydown",ei),void 0!==i.calendarContainer&&I(i.calendarContainer,"keydown",ei),i.config.inline||i.config.static||I(window,"resize",e),void 0!==window.ontouchstart?I(window.document,"touchstart",Q):I(window.document,"mousedown",Q),I(window.document,"focus",Q,{capture:!0}),!0===i.config.clickOpens&&(I(i._input,"focus",i.open),I(i._input,"click",i.open)),void 0!==i.daysContainer&&(I(i.monthNav,"click",eE),I(i.monthNav,["keyup","increment"],h),I(i.daysContainer,"click",eu)),void 0!==i.timeContainer&&void 0!==i.minuteElement&&void 0!==i.hourElement&&(I(i.timeContainer,["increment"],o),I(i.timeContainer,"blur",o,{capture:!0}),I(i.timeContainer,"click",U),I([i.hourElement,i.minuteElement],["focus","click"],function(e){return E(e).select()}),void 0!==i.secondElement&&I(i.secondElement,"focus",function(){return i.secondElement&&i.secondElement.select()}),void 0!==i.amPM&&I(i.amPM,"click",function(e){o(e)})),i.config.allowInput&&I(i._input,"blur",en)}(),(i.selectedDates.length||i.config.noCalendar)&&(i.config.enableTime&&c(i.config.noCalendar?i.latestSelectedDateObj:void 0),eC(!1)),a(),n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),!i.isMobile&&n&&ec(),ev("onReady"),i}(r,t||{}),i.push(r._flatpickr)}catch(e){console.error(e)}}return 1===i.length?i[0]:i}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return U(this,e)},HTMLElement.prototype.flatpickr=function(e){return U([this],e)});var j=function(e,t){return"string"==typeof e?U(window.document.querySelectorAll(e),t):e instanceof Node?U([e],t):U(e,t)};j.defaultConfig={},j.l10ns={en:x({},f),default:x({},f)},j.localize=function(e){j.l10ns.default=x(x({},j.l10ns.default),e)},j.setDefaults=function(e){j.defaultConfig=x(x({},j.defaultConfig),e)},j.parseDate=M({}),j.formatDate=O({}),j.compareDates=A,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return U(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=j);const H=new class{constructor(){this.sportCategory=new/*@__PURE__*/(n(h))({select:"#category",settings:{showSearch:!1}}),this.inputModalSpot=new/*@__PURE__*/(n(h))({select:"#spot-select",settings:{showSearch:!1}}),this.inputModalEqpt=new/*@__PURE__*/(n(h))({select:"#equipment-select",settings:{showSearch:!1}}),mobiscroll.datepicker("#date-picker",{controls:["date"],touchUi:!0}),mobiscroll.datepicker("#time-picker",{controls:["time"],timeFormat:"HH:mm",touchUi:!0});// (this.inputModalDate = flatpickr('#date-picker', {
//   disableMobile: 'true',
// })),
// (this.inputModalTime = flatpickr('#time-picker', {
//   disableMobile: 'true',
//   mode: 'range',
//   enableTime: true,
//   noCalendar: true,
//   dateFormat: 'H:i',
//   time_24hr: true,
//   allowInput: true,
// }));
}setElements(e){let t=Object.keys(e);t.forEach(t=>{this[t]=document.querySelector(e[t])})}// ------ markUp functions service --------
addSportSelector(e){let t=e.map(({sport:e,id:t})=>({text:e.toUpperCase(),value:t}));this.sportCategory.setData(t)}changeProfileButton(e){let{name:t,photo:n}=e,i=`<img class="footer-button-img" src="${n}" alt="" width="28" height="28">
              <span class="footer-icon-text">${t.toUpperCase()}</span>`;this.btnProfile.innerHTML="",this.btnProfile.insertAdjacentHTML("beforeend",i)}addSpotsSelector(e){let t=e.map(({spot:e,id:t})=>({text:e.toUpperCase(),value:t}));this.inputModalSpot.setData(t)}addEqptSelectorByUser(e){let t=e.map(({item:e,id:t})=>({text:e,value:t}));this.inputModalEqpt.setData(t)}addRequestsProposal(e){console.log(e);let{requests:t,unicOwners:n,unicEqueipments:i,unicSpots:s}=e,r=t.map(({owner:e,date:t,time:r,owner_equipment:a,spot:o})=>{let l=n.find(t=>Number(t.id)===Number(e)),c=i.filter(e=>a.includes(Number(e.id))).map(e=>e.item).join(", "),d=s.filter(e=>o.includes(Number(e.id))).map(e=>e.spot).join(", ");return` <li class="request-proposal-item">
            <div class="request-proposal-card">
              <div class="request-proposal-about">
                <div class="request-proposal-profile">
                  <img
                    class="request-proposal-profile-photo"
                    src="${l.photo}"
                    alt="profile"
                    width="40"
                    height="40"
                  />
                  <div class="request-proposal-profile-info">
                    <ul class="list">
                      <li>
                        <span class="request-proposal-profile-name">${l.name} ${l.surname}
                        </span>
                      </li>
                      <li>
                        <span class="request-proposal-profile-friends">3 mutual friends</span>
                      </li>
                      <li>
                        <span class="request-proposal-profile-experience"> 8 years experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="request-proposal-date-location">
                  <span class="request-proposal-date">${t} ${r.toUpperCase()}</span>
                  <span class="request-proposal-location">${d}</span>
                </div>
              </div>
              <div class="request-proposal-card-equipment">
                <div class="request-proposal-card-equipment-title">
                  <span class="request-proposal-card-equipment-text">For exchange</span>
                </div>
                <span class="request-proposal-card-equipment-list">${c}
                </span>
              </div>
            </div>
          </li>`}).join("");this.proposalList.insertAdjacentHTML("beforeend",r)}// micro services interface
toClearModalForm(e){e.target.reset(),this.inputModalEqpt.setSelected([]),this.inputModalSpot.setSelected("1")}isFooterButton(e){return e.target.closest(".footer-button")}isRequestButton(e){return e.target.closest(".request-menu-button")}isModalRequestActive(){return!this.modalRequest.classList.contains("is-hidden")}toDisableTimeSelect(){this.inputModalTime.element.disabled=!0,this.inputModalTime.element.value="allday"}toEnableTimeSelect(){H.inputModalTime.element.disabled=!1,H.inputModalTime.element.value="12:00"}toShowModalRequest(){this.modalRequest.classList.remove("is-hidden"),this.requestMenu.classList.add("is-hidden"),this.body.classList.add("off-scroll")}toCloseModalRequest(){this.modalRequest.classList.add("is-hidden"),this.body.classList.remove("off-scroll"),this.requestMenu.classList.remove("is-hidden"),this.toSetDefaultActiveButtonFooter()}toHiddenLogIn(){this.logInBackdrop.classList.add("is-hidden")}// activate button footer menu
toActivateBtnFooter(e){let t=this.isFooterButton(e),n=this.footerMenu.querySelector(".active-icon"),i=this.footerMenu.querySelector(".active-text");n.classList.remove("active-icon"),i.classList.remove("active-text"),t.children[0].classList.add("active-icon"),t.children[1].classList.add("active-text")}toSetDefaultActiveButtonFooter(){let e=this.footerMenu.querySelector(".active-icon"),t=this.footerMenu.querySelector(".active-text");e.classList.remove("active-icon"),t.classList.remove("active-text"),this.btnHome.children[0].classList.add("active-icon"),this.btnHome.children[1].classList.add("active-text")}// to activate section of requests by button
toShowRequestSection(e){let t=e.target.closest(".request-menu-button");if(!t)return;let n=this.requestMenu.querySelectorAll(".request-menu-button"),i=document.querySelectorAll("main > .request-section-common");n.forEach(e=>{e.classList.remove("active-btn")}),i.forEach(e=>{e.classList.add("is-hidden")}),t.classList.add("active-btn"),t.classList.contains("js-btn-goride")?this.sectionGoride.classList.remove("is-hidden"):t.classList.contains("js-btn-proposal")?this.sectionProposal.classList.remove("is-hidden"):t.classList.contains("js-btn-pending")&&this.sectionPending.classList.remove("is-hidden")}};H.setElements({body:"body",logInBackdrop:".login-section",logInForm:".login-form",selectSport:"#category",footerMenu:".footer-menu",btnProfile:".js-btn-profile",btnRequest:".js-btn-request",btnHome:".js-btn-home",requestMenu:".request-menu-list",btnGoride:".js-btn-goride",btnProposal:".js-btn-proposal",btnPending:".js-btn-pending",sectionGoride:".request-goride",sectionProposal:".request-proposal",sectionPending:".request-pending",proposalList:".js-proposal-list",modalRequest:".request-modal",formRequest:".request-form",switchAllDay:".js-request-switch-allday",btnCancelRequest:".js-request-btn-cancel",svgBtnFooter:".footer-button-icons",textBtnFooter:".footer-icon-text"});const q=new class{constructor(e){this.BASE_URL=e,this.users="users/",this.sports="sports/",this.spots="spots/",this.equeipment="equeipment/",this.requests="requests/",this.objRequest={owner:null,date:null,time:null,spot:null,owner_equipment:null,isshowphone:null,isautoaccept:null,user:null,user_time:null,user_equipment:[],user_message:null,isaccepted:null},this.GET={method:"GET",headers:{"content-type":"application/json"}}}//---------------GET block----------------
//get main User data
async fetchUserUid(e){let t=new URL(this.BASE_URL+this.users);t.searchParams.append("uid",e);let n=await fetch(t,this.GET);if(!n.ok)throw Error(n.statusText);return await n.json()}async fetchUser(e){let t=new URL(this.BASE_URL+this.users+e),n=await fetch(t,this.GET);if(!n.ok)throw Error(n.statusText);return await n.json()}//get main User Sport category
async fetchUsersSportCategory(e){let t=e.map(async e=>{let t=await fetch(this.BASE_URL+this.sports+e);if(!t.ok)throw Error(t.statusText);return t.json()});return await Promise.all(t)}//get main User Equeipment
async fetchUserEqpt(e){try{let t=await this.fetchUser(Number(e)),{equeipment:n}=t;console.log(n);let i=n.map(async e=>{let t=await fetch(this.BASE_URL+this.equeipment+e);if(!t.ok)throw Error(t.statusText);return t.json()});return await Promise.all(i)}catch(e){console.log(e)}}//get all Spots
async fetchSpots(){let e=await fetch(this.BASE_URL+this.spots);if(!e.ok)throw Error(e.statusText);return await e.json()}//get all proposal requets
async getRequestsProposal(){let e=new URL(this.BASE_URL+this.requests);e.searchParams.append("user",null);let t=await fetch(e,this.GET);if(!t.ok)throw Error(t.statusText);let n=await t.json(),i=n.map(({owner:e})=>e).filter((e,t,n)=>n.indexOf(e)===t),s=i.map(async e=>{let t=await fetch(this.BASE_URL+this.users+e);if(!t.ok)throw Error(t.statusText);return t.json()}),r=n.flatMap(({owner_equipment:e})=>e).filter((e,t,n)=>n.indexOf(e)===t),a=r.map(async e=>{let t=await fetch(this.BASE_URL+this.equeipment+e);if(!t.ok)throw Error(t.statusText);return t.json()}),o=n.flatMap(({spot:e})=>e).filter((e,t,n)=>n.indexOf(e)===t),l=o.map(async e=>{let t=await fetch(this.BASE_URL+this.spots+e);if(!t.ok)throw Error(t.statusText);return t.json()}),c=await Promise.all(s),d=await Promise.all(a),h=await Promise.all(l);return{requests:n,unicOwners:c,unicEqueipments:d,unicSpots:h}}//---------POST block---------------
async sendRequestToServer(e){let t=Object.keys(this.objRequest);t.forEach(t=>{e.hasOwnProperty(t)&&(this.objRequest[t]=e[t])});let n={method:"POST",body:JSON.stringify(this.objRequest),headers:{"Content-type":"application/json"}},i=await fetch(this.BASE_URL+this.requests,n);if(!i.ok)throw Error(i.statusText);return await i.json()}}("https://64f6ebac9d7754084952c5c5.mockapi.io/api/v1/");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var V={},B=V={};function W(){throw Error("setTimeout has not been defined")}function $(){throw Error("clearTimeout has not been defined")}function z(e){if(a===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((a===W||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return a(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return a.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:W}catch(e){a=W}try{o="function"==typeof clearTimeout?clearTimeout:$}catch(e){o=$}}();var Y=[],K=!1,G=-1;function J(){K&&l&&(K=!1,l.length?Y=l.concat(Y):G=-1,Y.length&&X())}function X(){if(!K){var e=z(J);K=!0;for(var t=Y.length;t;){for(l=Y,Y=[];++G<t;)l&&l[G].run();G=-1,t=Y.length}l=null,K=!1,function(e){if(o===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((o===$||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return o.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return o.call(this,e)}}}(e)}}// v8 likes predictible objects
function Q(e,t){this.fun=e,this.array=t}function Z(){}B.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Y.push(new Q(e,t)),1!==Y.length||K||z(X)},Q.prototype.run=function(){this.fun.apply(null,this.array)},B.title="browser",B.browser=!0,B.env={},B.argv=[],B.version="",B.versions={},B.on=Z,B.addListener=Z,B.once=Z,B.off=Z,B.removeListener=Z,B.removeAllListeners=Z,B.emit=Z,B.prependListener=Z,B.prependOnceListener=Z,B.listeners=function(e){return[]},B.binding=function(e){throw Error("process.binding is not supported")},B.cwd=function(){return"/"},B.chdir=function(e){throw Error("process.chdir is not supported")},B.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:(s<2048?t[n++]=s>>6|192:((64512&s)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(// Surrogate Pair
s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128):t[n++]=s>>12|224,t[n++]=s>>6&63|128),t[n++]=63&s|128)}return t},et=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,i=0;for(;n<e.length;){let s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){let r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){// Surrogate Pair
let r=e[n++],a=e[n++],o=e[n++],l=((7&s)<<18|(63&r)<<12|(63&a)<<6|63&o)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{let r=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&a)}}return t.join("")},en={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let s=e[t],r=t+1<e.length,a=r?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=s>>2,d=(3&s)<<4|a>>4,h=(15&a)<<2|l>>6,u=63&l;o||(u=64,r||(h=64)),i.push(n[c],n[d],n[h],n[u])}return i.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ee(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):et(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let s=n[e.charAt(t++)],r=t<e.length,a=r?n[e.charAt(t)]:0;++t;let o=t<e.length,l=o?n[e.charAt(t)]:64;++t;let c=t<e.length,d=c?n[e.charAt(t)]:64;if(++t,null==s||null==a||null==l||null==d)throw new ei;let h=s<<2|a>>4;if(i.push(h),64!==l){let e=a<<4&240|l>>2;if(i.push(e),64!==d){let e=l<<6&192|d;i.push(e)}}}return i},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class ei extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const es=function(e){let t=ee(e);return en.encodeByteArray(t,!0)},er=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return es(e).replace(/\./g,"")},ea=function(e){try{return en.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eo=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==d)return d;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,el=()=>{if(void 0===V||void 0===V.env)return;let e=void 0;if(e)return JSON.parse(e)},ec=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&ea(e[1]);return t&&JSON.parse(t)},ed=()=>{try{return eo()||el()||ec()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eh=e=>{var t,n;return null===(n=null===(t=ed())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},eu=()=>{var e;return null===(e=ed())||void 0===e?void 0:e.config},ep=e=>{var t;return null===(t=ed())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function em(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class eg extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,eg.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ev.prototype.create)}}class ev{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?s.replace(eb,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",a=`${this.serviceName}: ${r} (${i}).`,o=new eg(i,a,n);return o}}const eb=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function ew(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let s of n){if(!i.includes(s))return!1;let n=e[s],r=t[s];if(ey(n)&&ey(r)){if(!ew(n,r))return!1}else if(n!==r)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function ey(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function e_(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function eC(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function eE(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class eI{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(i=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(i.next=eT),void 0===i.error&&(i.error=eT),void 0===i.complete&&(i.complete=eT);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){// nothing
}}),this.observers.push(i),s}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(){// do nothing
}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class eD{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class eO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ef;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ek})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=ek){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ek){return this.instances.has(e)}getOptions(e=ek){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(e);n===s&&t.resolve(i)}return i}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);let r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===ek?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=ek){return this.component?this.component.multipleInstances?e:ek:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class eM{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new eO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const eA=[];(s=c||(c={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const eL={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},eP=c.INFO,eN={[c.DEBUG]:"log",[c.VERBOSE]:"log",[c.INFO]:"info",[c.WARN]:"warn",[c.ERROR]:"error"},eR=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),s=eN[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ex{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=eP,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=eR,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */eA.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?eL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,c.DEBUG,...e),this._logHandler(this,c.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c.VERBOSE,...e),this._logHandler(this,c.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c.INFO,...e),this._logHandler(this,c.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c.WARN,...e),this._logHandler(this,c.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c.ERROR,...e),this._logHandler(this,c.ERROR,...e)}}const eF=(e,t)=>t.some(t=>e instanceof t),eU=new WeakMap,ej=new WeakMap,eH=new WeakMap,eq=new WeakMap,eV=new WeakMap;let eB={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return ej.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||eH.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return eW(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eW(n){var i;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(eW(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)});return t.then(t=>{t instanceof IDBCursor&&eU.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
eV.set(t,e),t}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(eq.has(n))return eq.get(n);let s="function"==typeof(i=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
i.apply(e$(this),e),eW(eU.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return eW(i.apply(e$(this),e))}:function(e,...t){let n=i.call(e$(this),e,...t);return eH.set(n,e.sort?e.sort():[e]),eW(n)}:(i instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(ej.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)});// Cache it for later retrieval.
ej.set(e,t)}(i),eF(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,eB):i;return s!==n&&(eq.set(n,s),eV.set(s,n)),s}const e$=e=>eV.get(e),ez=["get","getKey","getAll","getAllKeys","count"],eY=["put","add","delete","clear"],eK=new Map;function eG(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eK.get(t))return eK.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,s=eY.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ez.includes(n)))return;let r=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let r=this.transaction(e,s?"readwrite":"readonly"),a=r.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),s&&r.done]))[0]};return eK.set(t,r),r}eB={...i=eB,get:(e,t,n)=>eG(e,t)||i.get(e,t,n),has:(e,t)=>!!eG(e,t)||i.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eX="@firebase/app",eQ="0.9.18",eZ=new ex("@firebase/app"),e0="[DEFAULT]",e1={[eX]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},e2=new Map,e3=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function e4(e){let t=e.name;if(e3.has(t))return eZ.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(e3.set(t,e),e2.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(n){eZ.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function e6(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const e7=new ev("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eD("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw e7.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const e9="10.3.1";function e8(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let i=Object.assign({name:e0,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw e7.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(s)});if(n||(n=eu()),!n)throw e7.create("no-options"/* AppError.NO_OPTIONS */);let r=e2.get(s);if(r){// return the existing app if options and config deep equal the ones in the existing app.
if(ew(n,r.options)&&ew(i,r.config))return r;throw e7.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:s})}let a=new eM(s);for(let e of e3.values())a.addComponent(e);let o=new e5(n,i,a);return e2.set(s,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function te(e,t,n){var i;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let s=null!==(i=e1[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);let r=s.match(/\s|\//),a=t.match(/\s|\//);if(r||a){let e=[`Unable to register library "${s}" with version "${t}":`];r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eZ.warn(e.join(" "));return}e4(new eD(`${s}-version`,()=>({library:s,version:t}),"VERSION"/* ComponentType.VERSION */))}const tt="firebase-heartbeat-store";let tn=null;function ti(){return tn||(tn=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){let a=indexedDB.open(e,1),o=eW(a);return i&&a.addEventListener("upgradeneeded",e=>{i(eW(a.result),e.oldVersion,e.newVersion,eW(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{r&&e.addEventListener("close",()=>r()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tt)}}).catch(e=>{throw e7.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),tn}async function ts(e){try{let t=await ti(),n=await t.transaction(tt).objectStore(tt).get(ta(e));return n}catch(e){if(e instanceof eg)eZ.warn(e.message);else{let t=e7.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});eZ.warn(t.message)}}}async function tr(e,t){try{let n=await ti(),i=n.transaction(tt,"readwrite"),s=i.objectStore(tt);await s.put(t,ta(e)),await i.done}catch(e){if(e instanceof eg)eZ.warn(e.message);else{let t=e7.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});eZ.warn(t.message)}}}function ta(e){return`${e.name}!${e.options.appId}`}class to{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tc(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=tl();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tl(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],i=e.slice();for(let s of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===s.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(s.date),td(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:s.agent,dates:[s.date]}),td(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=er(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i)}}function tl(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await ts(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function td(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return er(JSON.stringify({version:2,heartbeats:e})).length}function th(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)0>t.indexOf(i[s])&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function tu(e){return void 0!==e&&void 0!==e.enterprise}e4(new eD("platform-logger",e=>new eJ(e),"PRIVATE"/* ComponentType.PRIVATE */)),e4(new eD("heartbeat",e=>new to(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
te(eX,eQ,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
te(eX,eQ,"esm2017"),// Register platform SDK identifier (no version).
te("fire-js",""),te("firebase","10.3.1","app"),"function"==typeof SuppressedError&&SuppressedError;class tp{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function tf(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tm=new ev("auth","Firebase",tf()),tg=new ex("@firebase/auth");function tv(e,...t){tg.logLevel<=c.ERROR&&tg.error(`Auth (${e9}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e,...t){throw ty(e,...t)}function tw(e,...t){return ty(e,...t)}function ty(e,...t){if("string"!=typeof e){let n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return tm.create(e,...t)}function t_(e,t,...n){if(!e)throw ty(t,...n)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function tC(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw tv(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tI(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class tT{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tC("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(em())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===tI()||"https:"===tI()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e,t){e.emulator||tC("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tC("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tC("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tC("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const tk={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},tO=new tT(3e4,6e4);function tM(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tA(e,t,n,i,s={}){return tL(e,s,async()=>{let s={},r={};i&&("GET"/* HttpMethod.GET */===t?r=i:s={body:JSON.stringify(i)});let a=e_(Object.assign({key:e.config.apiKey},r)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(o["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),tD.fetch()(tN(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},s))})}async function tL(e,t,n){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},tk),t);try{let t=new tR(e),s=await Promise.race([n(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let r=await s.json();if("needConfirmation"in r)throw tx(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,r);if(s.ok&&!("errorMessage"in r))return r;{let t=s.ok?r.errorMessage:r.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===n)throw tx(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,r);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===n)throw tx(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,r);if("USER_DISABLED"/* ServerError.USER_DISABLED */===n)throw tx(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,r);let o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,n){let i=Object.assign(Object.assign({},tf()),{[t]:n}),s=new ev("auth","Firebase",i);return s.create(t,{appName:e.name})}(e,o,a);tb(e,o)}}catch(t){if(t instanceof eg)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
tb(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function tP(e,t,n,i,s={}){let r=await tA(e,t,n,i,s);return"mfaPendingCredential"in r&&tb(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:r}),r}function tN(e,t,n,i){let s=`${t}${n}?${i}`;return e.config.emulator?tS(e.config,s):`${e.config.apiScheme}://${s}`}class tR{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tw(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),tO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tx(e,t,n){let i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);let s=tw(e,t,i);return(// We know customData is defined on error because errorParams is defined
s.customData._tokenResponse=n,s)}async function tF(e,t){return tA(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,tM(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(e,t){return tA(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function tj(e,t){return tA(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tH(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function tq(e,t=!1){let n=eS(e),i=await n.getIdToken(t),s=tB(i);t_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r="object"==typeof s.firebase?s.firebase:void 0,a=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:tH(tV(s.auth_time)),issuedAtTime:tH(tV(s.iat)),expirationTime:tH(tV(s.exp)),signInProvider:a||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}function tV(e){return 1e3*Number(e)}function tB(e){let[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return tv("JWT malformed, contained fewer than 3 sections"),null;try{let e=ea(n);if(!e)return tv("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tv("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tW(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof eg&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tH(this.lastLoginAt),this.creationTime=tH(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tY(e){var t;let n=e.auth,i=await e.getIdToken(),s=await tW(e,tj(n,{idToken:i}));t_(null==s?void 0:s.users.length,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r=s.users[0];e._notifyReloadListener(r);let a=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map(e=>{var{providerId:t}=e,n=th(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],o=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,a),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(null==o?void 0:o.length),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new tz(r.createdAt,r.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,d)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function tK(e){let t=eS(e);await tY(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tG(e,t){let n=await tL(e,{},async()=>{let n=e_({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=tN(e,i,"/v1/token"/* Endpoint.TOKEN */,`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",tD.fetch()(r,{method:"POST"/* HttpMethod.POST */,headers:a,body:n})});// The response comes back in snake_case. Convert to camel:
return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class tJ{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){t_(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t_(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t_(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=tB(e);return t_(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t_(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t_(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(t_(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:s}=await tG(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new tJ;return n&&(t_("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),r.refreshToken=n),i&&(t_("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),r.accessToken=i),s&&(t_("number"==typeof s,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tJ,this.toJSON())}_performRefresh(){return tC("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tX(e,t){t_("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class tQ{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=th(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new t$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tz(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await tW(this,this.stsTokenManager.getToken(this.auth,e));return t_(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tq(this,e)}reload(){return tK(this)}_assign(e){this!==e&&(t_(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new tQ(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
t_(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tY(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await tW(this,tU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,a,o,l,c;let d=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:y,providerData:_,stsTokenManager:C}=t;t_(b&&C,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let E=tJ.fromJSON(this.name,C);t_("string"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tX(d,e.name),tX(h,e.name),t_("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t_("boolean"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tX(u,e.name),tX(p,e.name),tX(f,e.name),tX(m,e.name),tX(g,e.name),tX(v,e.name);let I=new tQ({uid:b,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:y,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(I.providerData=_.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,n=!1){let i=new tJ;i.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let s=new tQ({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return(// Updates the user info and data and resolves with a user instance.
await tY(s),s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tZ=new Map;function t0(e){e instanceof Function||tC("Expected a class definition");let t=tZ.get(e);return t?t instanceof e||tC("Instance stored in cache mismatched with class"):(t=new e,tZ.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(e,t,n){return`firebase:${e}:${t}:${n}`}t1.type="NONE";class t3{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:s}=this.auth;this.fullUserKey=t2(this.userKey,i.apiKey,s),this.fullPersistenceKey=t2("persistence"/* KeyName.PERSISTENCE_USER */,i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tQ._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new t3(t0(t1),e,n);// Eliminate any persistences that are not available
let i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),s=i[0]||t0(t1),r=t2(n,e.config.apiKey,e.name),a=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let n of t)try{let t=await n._get(r);if(t){let i=tQ._fromJSON(e,t);// throws for unparsable blob (wrong format)
n!==s&&(a=i),s=n;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let o=i.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&o.length&&(s=o[0],a&&// we'll just let it bubble to surface the error.
await s._set(r,a.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new t3(s,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function t4(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(t9(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(t6(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(ne(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(nt(t))return"Webos"/* BrowserName.WEBOS */;if(t7(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||t5(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(t8(t))return"Android"/* BrowserName.ANDROID */;let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"/* BrowserName.OTHER */}function t6(e=em()){return/firefox\//i.test(e)}function t7(e=em()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t5(e=em()){return/crios\//i.test(e)}function t9(e=em()){return/iemobile/i.test(e)}function t8(e=em()){return/android/i.test(e)}function ne(e=em()){return/blackberry/i.test(e)}function nt(e=em()){return/webos/i.test(e)}function nn(e=em()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ni(e=em()){// TODO: implement getBrowserName equivalent for OS.
return nn(e)||t8(e)||nt(e)||ne(e)||/windows phone/i.test(e)||t9(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function ns(e,t=[]){let n;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
n=t4(em());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
n=`${t4(em())}-${e}`;break;default:n=e}let i=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${n}/JsCore/${e9}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let n=t=>new Promise((n,i)=>{try{let i=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    n(i)}catch(e){// Sync callback throws.
    i(e)}});// Attach the onAbort if present
n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function na(e,t={}){return tA(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,tM(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class no{constructor(e){var t,n,i,s;// Only include custom strength options defined in the response.
let r=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=r.minPasswordLength)&&void 0!==t?t:6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=e.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,r,a;let o={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),// Combine the status into single isValid property.
o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsLowercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsUppercaseLetter)||void 0===s||s),o.isValid&&(o.isValid=null===(r=o.containsNumericCharacter)||void 0===r||r),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let n;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */n>="a"&&n<="z",/* containsUppercaseCharacter= */n>="A"&&n<="Z",/* containsNumericCharacter= */n>="0"&&n<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(n))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nc(this),this.idTokenSubscription=new nc(this),this.beforeStateQueue=new nr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=t0(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await t3.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let n=await this.assertedPersistence.getCurrentUser(),i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!n||n===r)&&(null==a?void 0:a.user)&&(i=a.user,s=!0)}// If no user in persistence, there is no current user. Set to null.
if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(t_(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tY(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?eS(e):null;return t&&t_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&t_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(t0(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await na(this),t=new no(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ev("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&t0(e)||this._popupRedirectResolver;t_(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await t3.create(this,[t0(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let s="function"==typeof t?t:t.next.bind(t),r=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(t_(a,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
a.then(()=>{r||s(this.currentUser)}),"function"==typeof t){let s=e.addObserver(t,n,i);return()=>{r=!0,s()}}{let n=e.addObserver(t);return()=>{r=!0,n()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return t_(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=ns(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=n);// If the App Check service exists, add the App Check token in the headers
let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=i),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){tg.logLevel<=c.WARN&&tg.warn(`Auth (${e9}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let n=new eI(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return t_(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function nd(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,n)=>{var i,s;let r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{let t=tw("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})}function nh(e){return`__${e}${Math.floor(1e6*Math.random())}`}class nu{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=eS(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{tF(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(i=>{if(void 0===i.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new tp(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function i(t,n,i){let s=window.grecaptcha;tu(s)?s.enterprise.ready(()=>{s.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,s)=>{n(this.auth).then(n=>{if(!t&&tu(window.grecaptcha))i(n,e,s);else{if("undefined"==typeof window){s(Error("RecaptchaVerifier is only supported in browser"));return}nd("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{i(n,e,s)}).catch(e=>{s(e)})}}).catch(e=>{s(e)})})}}async function np(e,t,n,i=!1){let s;let r=new nu(e);try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}let a=Object.assign({},t);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),a}function nf(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nm(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class ng{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return tC("not implemented")}/** @internal */_getIdTokenResponse(e){return tC("not implemented")}/** @internal */_linkToIdToken(e,t){return tC("not implemented")}/** @internal */_getReauthenticationResolver(e){return tC("not implemented")}}async function nv(e,t){return tA(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(e,t){return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,tM(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(e,t){return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tM(e,t))}async function ny(e,t){return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tM(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class n_ extends ng{/** @internal */constructor(/** @internal */e,/** @internal */t,n,/** @internal */i=null){super("password"/* ProviderId.PASSWORD */,n),this._email=e,this._password=t,this._tenantId=i}/** @internal */static _fromEmailAndPassword(e,t){return new n_(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,n=null){return new n_(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,n)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return nb(e,n).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await np(e,n,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return nb(e,t)}});{let t=await np(e,n,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return nb(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return nw(e,{email:this._email,oobCode:this._password});default:tb(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return nv(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return ny(e,{idToken:t,email:this._email,oobCode:this._password});default:tb(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(e,t){return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,tM(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class nE extends ng{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new nE(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tb("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=th(t,["providerId","signInMethod"]);if(!n||!i)return null;let r=new nE(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return nC(e,t)}/** @internal */_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,nC(e,n)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,nC(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=e_(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(e,t){return tA(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,tM(e,t))}async function nT(e,t){return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tM(e,t))}async function nS(e,t){let n=await tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tM(e,t));if(n.temporaryProof)throw tx(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,n);return n}const nD={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function nk(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tP(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tM(e,n),nD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class nO extends ng{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new nO({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new nO({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return nT(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return nS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return nk(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new nO({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class nM{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,n,i,s,r,a;let o=eC(eE(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,d=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(i=o.mode)&&void 0!==i?i:null);// Validate API key, code and mode.
t_(l&&c&&d,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(s=o.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=o.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=eC(eE(e)).link,n=t?eC(eE(t)).deep_link_id:null,i=eC(eE(e)).deep_link_id,s=i?eC(eE(i)).link:null;return s||i||n||t||e}(e);try{return new nM(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class nA{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=nA.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return n_._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let n=nM.parseLink(t);return t_(n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n_._fromEmailAndCode(e,n.code,n.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */nA.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */nA.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */nA.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class nL{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class nP extends nL{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nN extends nP{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return nE._fromParams({providerId:nN.PROVIDER_ID,signInMethod:nN.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nN.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nN.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */nN.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */nN.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nR extends nP{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return nE._fromParams({providerId:nR.PROVIDER_ID,signInMethod:nR.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nR.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nR.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nR.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */nR.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */nR.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class nx extends nP{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return nE._fromParams({providerId:nx.PROVIDER_ID,signInMethod:nx.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nx.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nx.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */nx.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */nx.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class nF extends nP{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return nE._fromParams({providerId:nF.PROVIDER_ID,signInMethod:nF.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nF.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nF.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nF.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.TWITTER. */nF.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */nF.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){let s=await tQ._fromIdTokenResponse(e,n,i),r=nj(n),a=new nU({user:s,providerId:r,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,/* reload */!0);let i=nj(n);return new nU({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function nj(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH extends eg{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,nH.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new nH(e,t,n,i)}}function nq(e,t,n,i){let s="reauthenticate"/* OperationType.REAUTHENTICATE */===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nH._fromErrorAndOperation(e,n,t,i);throw n})}async function nV(e,t,n=!1){let i=await tW(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nU._forOperation(e,"link"/* OperationType.LINK */,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nB(e,t,n=!1){let{auth:i}=e,s="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let r=await tW(e,nq(i,s,t,e),n);t_(r.idToken,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=tB(r.idToken);t_(a,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:o}=a;return t_(e.uid===o,i,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),nU._forOperation(e,s,r)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tb(i,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nW(e,t,n=!1){let i="signIn"/* OperationType.SIGN_IN */,s=await nq(e,i,t),r=await nU._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function n$(e,t){return nW(eS(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function nz(e){let t=eS(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}new WeakMap;const nY="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class nK{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(nY,"1"),this.storage.removeItem(nY),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nG extends nK{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=em();return t7(e)||nn(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=ni(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let i=this.storage.getItem(n);// Value not synchronized, synchronize manually.
if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let i=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);/** Detects Internet Explorer. */(function(){let e=em();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nG.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ extends nK{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}nJ.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class nX{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new nX(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:n,data:i}=e.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:n});let r=Array.from(s).map(async t=>t(e.origin,i)),a=await Promise.all(r.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:n,response:a})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nQ(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}nX.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class nZ{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,n=50/* _TimeoutDuration.ACK */){let i,s;let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((a,o)=>{let l=nQ("",20);r.port1.start();let c=setTimeout(()=>{o(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},n);s={messageChannel:r,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(c),i=setTimeout(()=>{o(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(i),a(e.data.response);break;default:clearTimeout(c),clearTimeout(i),o(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function n0(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){return void 0!==n0().WorkerGlobalScope&&"function"==typeof n0().importScripts}async function n2(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3="firebaseLocalStorageDb",n4="firebaseLocalStorage",n6="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class n7{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function n5(e,t){return e.transaction([n4],t?"readwrite":"readonly").objectStore(n4)}function n9(){let e=indexedDB.open(n3,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(n4,{keyPath:n6})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(n4)?t(n):(// Need to close the database or else you get a `blocked` event
n.close(),await function(){let e=indexedDB.deleteDatabase(n3);return new n7(e).toPromise()}(),t(await n9()))})})}async function n8(e,t,n){let i=n5(e,!0).put({[n6]:t,value:n});return new n7(i).toPromise()}async function ie(e,t){let n=n5(e,!1).get(t),i=await new n7(n).toPromise();return void 0===i?null:i.value}function it(e,t){let n=n5(e,!0).delete(t);return new n7(n).toPromise()}class ii{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await n9()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return n1()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=nX._getInstance(n1()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await n2(),!this.activeServiceWorker)return;this.sender=new nZ(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let n=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await n9();return await n8(e,nY,"1"),await it(e,nY),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>n8(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ie(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>it(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=n5(e,!1).getAll();return new n7(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function is(e,t,n){var i,s,r;let a=await n.verify();try{let o;if(t_("string"==typeof a,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t_("recaptcha"===n.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){t_("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=await (s={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,tM(e,s)));return n.phoneSessionInfo.sessionInfo}{t_("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;t_(n,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let s=await (r={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,tM(e,r)));return s.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await nI(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}ii.type="LOCAL",nh("rcb"),new tT(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class ir{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=ir.PROVIDER_ID,this.auth=eS(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return is(this.auth,e,eS(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return nO._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?nO._fromTokenResponse(t,n):null}}/** Always set to {@link ProviderId}.PHONE. */ir.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */ir.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends ng{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return nC(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nC(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nC(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function io(e){return nW(e.auth,new ia(e),e.bypassAuthState)}function il(e){let{auth:t,user:n}=e;return t_(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nB(n,new ia(e),e.bypassAuthState)}async function ic(e){let{auth:t,user:n}=e;return t_(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nV(n,new ia(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class id{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:a}=e;if(r){this.reject(r);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return io;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return ic;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return il;default:tb(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||tC("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tC("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new tT(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class iu extends id{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,iu.currentPopupAction&&iu.currentPopupAction.cancel(),iu.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return t_(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||tC("Popup operations only handle one event");let e=nQ();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tw(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tw(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,iu.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tw(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,ih.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
iu.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const ip=new Map;class im extends id{constructor(e,t,n=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,n),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=ip.get(this.auth._key());if(!e){try{let t=await ig(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ip.set(this.auth._key(),e)}return this.bypassAuthState||ip.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ig(e,t){let n=t2("pendingRedirect",t.config.apiKey,t.name),i=t0(e._redirectPersistence);if(!await i._isAvailable())return!1;let s=await i._get(n)==="true";return await i._remove(n),s}function iv(e,t){ip.set(e._key(),t)}async function ib(e,t,n=!1){let i=eS(e),s=t?t0(t):(t_(i._popupRedirectResolver,i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),i._popupRedirectResolver),r=new im(i,s,n),a=await r.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return i_(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!i_(e)){let i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(tw(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(iy(e))}saveEventToCache(e){this.cachedEventUids.add(iy(e)),this.lastProcessedEventTime=Date.now()}}function iy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function i_({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(e,t={}){return tA(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iI=/^https?/;async function iT(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await iC(e);for(let e of t)try{if(function(e){let t=tE(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){let s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!iI.test(n))return!1;if(iE.test(e))// only contain the IP, no extra character.
return i===e;// Dots in pattern should be escaped.
let s=e.replace(/\./g,"\\."),r=RegExp("^(.+\\."+s+"|"+s+")$","i");return r.test(i)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
tb(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new tT(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function iD(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=n0().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let ik=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new tT(5e3,15e3),iM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iA=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function iL(e){let t=await (ik=ik||new Promise((t,n)=>{var i,s,r;// Function to run when gapi.load is ready.
function a(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
iD(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
iD(),n(tw(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:iS.get()})}if(null===(s=null===(i=n0().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else if(null===(r=n0().gapi)||void 0===r?void 0:r.load)a();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=nh("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
n0()[t]=()=>{gapi.load?a():n(tw(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},nd(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
ik=null,e)})),n=n0().gapi;return t_(n,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;t_(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let n=t.emulator?tS(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:e9},s=iA.get(e.config.apiHost);s&&(i.eid=s);let r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${e_(i).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iM,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let s=tw(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),r=n0().setTimeout(()=>{i(s)},iO.get());// Clear timer and resolve pending iframe ready promise.
    function a(){n0().clearTimeout(r),n(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(a).then(a,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iN{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const iR=encodeURIComponent("fac");async function ix(e,t,n,i,s,r){t_(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),t_(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:e9,eventId:s};if(t instanceof nL)// TODO set additionalParams from the provider as well?
for(let[n,i]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(r||{})))a[n]=i;if(t instanceof nP){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}for(let t of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[t]&&delete a[t];// Sets the App Check token to pass to the widget
let o=await e._getAppCheckToken(),l=o?`#${iR}=${encodeURIComponent(o)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?tS(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${e_(a).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const iF="webStorageSupport",iU=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nJ,this._completeRedirectFn=ib,this._overrideRedirectResult=iv}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,n,i){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||tC("_initialize() not called before _openPopup()");let r=await ix(e,t,n,tE(),i);return function(e,t,n,i=500,s=600){let r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString(),o="",l=Object.assign(Object.assign({},iP),{width:i.toString(),height:s.toString(),top:r,left:a}),c=em().toLowerCase();n&&(o=t5(c)?"_blank":n),t6(c)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let d=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=em()){var t;return nn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}(t||"",o),new iN(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let h=window.open(t||"",o,d);t_(h,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{h.focus()}catch(e){}return new iN(h)}(e,r,nQ())}async _openRedirect(e,t,n,i){await this._originValidation(e);let s=await ix(e,t,n,tE(),i);return n0().location.href=s,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||tC("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await iL(e),n=new iw(e);return t.register("authEvent",t=>{t_(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let i=n.onEvent(t.authEvent);return{status:i?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(iF,{type:iF},n=>{var i;let s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[iF];void 0!==s&&t(!!s),tb(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return ni()||t7()||nn()}};class ij{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,n);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return tC("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class iH extends ij{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new iH(e)}/** @internal */_finalizeEnroll(e,t,n){return tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tM(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class iq extends ij{constructor(e,t,n){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=n}/** @internal */static _fromSecret(e,t){return new iq(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new iq(t,e)}/** @internal */async _finalizeEnroll(e,t,n){return t_(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tM(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){t_(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let n={verificationCode:this.otp};return tA(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tM(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class iV{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,n,i,s,r,a){this.sessionInfo=r,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new iV(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var n;let i=!1;return(iB(e)||iB(t))&&(i=!0),i&&(iB(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),iB(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function iB(e){return void 0===e||(null==e?void 0:e.length)===0}var iW="@firebase/auth",i$="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){t_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const iY=ep("authIdTokenMaxAge")||300;let iK=null;const iG=e=>async t=>{let n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>iY)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let s=null==n?void 0:n.token;iK!==s&&(iK=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};r="Browser"/* ClientPlatform.BROWSER */,e4(new eD("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;t_(a&&!a.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:n.name});let l={apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:ns(r)},c=new nl(n,i,s,l);return function(e,t){let n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(t0);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,n)=>{let i=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);i.initialize()})),e4(new eD("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=eS(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new iz(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),te(iW,i$,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(r)),te(iW,i$,"esm2017");const iJ=new class{constructor(e){this.config=e,this.auth=null}initializeAuth(){let e=e8(this.config);this.auth=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(e=e0){let t=e2.get(e);if(!t&&e===e0&&eu())return e8();if(!t)throw e7.create("no-app"/* AppError.NO_APP */,{appName:e});return t}()){let t=e6(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let n=e6(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),i=n.getOptions();if(ew(i,null!=t?t:{}))return e;tb(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let i=n.initialize({options:t});return i}(e,{popupRedirectResolver:iU,persistence:[ii,nG,nJ]}),i=ep("authTokenSyncURL");if(i){let e=iG(i);eS(n).beforeAuthStateChanged(e,()=>e(n.currentUser)),eS(n).onIdTokenChanged(t=>e(t),void 0,void 0)}let s=eh("auth");return s&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,n){let i=eS(e);t_(i._canInitEmulator,i,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),t_(/^https?:\/\//.test(t),i,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let s=!!(null==n?void 0:n.disableWarnings),r=nf(t),{host:a,port:o}=function(e){let t=nf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);// Strip out "username:password@".
if(s){let e=s[1];return{host:e,port:nm(i.substr(e.length+1))}}{let[e,t]=i.split(":");return{host:e,port:nm(t)}}}(t),l=null===o?"":`:${o}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
i.config.emulator={url:`${r}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${s}`),n}(e)}async logIn(e,t){var n;let i=await n$(eS(n=this.auth),nA.credential(e,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&nz(n),e});return i.user.uid;//     const user = userCredential.user;
}}({apiKey:"AIzaSyCiXMzfM6sGC7JIhwb6dEEMC4enpw-63b8",authDomain:"exchange-try.firebaseapp.com",projectId:"exchange-try",storageBucket:"exchange-try.appspot.com",messagingSenderId:"193175234432",appId:"1:193175234432:web:1b1d8b93987dbf58380365",measurementId:"G-GX65J7E1M8"});iJ.initializeAuth();const iX={userOnline:null,ModalRequest:null,requestProposal:null};// switch off kit listener for modal request form
function iQ(){H.switchAllDay.removeEventListener("change",i3),H.btnCancelRequest.removeEventListener("click",i2),H.formRequest.removeEventListener("submit",i1)}// load main data to home page
async function iZ(e){e.preventDefault();let{email:t,password:n}=e.currentTarget.elements;try{let e=await iJ.logIn(t.value,n.value),i=await q.fetchUserUid(e);iX.userOnline=i[0];let s=iX.userOnline,r=await q.fetchUsersSportCategory(s.sports),a=await q.getRequestsProposal();H.addRequestsProposal(a),H.changeProfileButton(s),H.addSportSelector(r),H.toHiddenLogIn(),H.footerMenu.addEventListener("click",i0),H.requestMenu.addEventListener("click",i4),iX.requestProposal=!0,H.logInForm.removeEventListener("submit",iZ)}catch(e){console.log("Wrong login or password",e)}}// ---------------footer menu handler----------------
async function i0(e){let t=H.isFooterButton(e);if(t){// catch click on button Request
if(t!==H.btnRequest||H.isModalRequestActive())t===H.btnHome&&(iQ(),H.toCloseModalRequest());else{if(!iX.ModalRequest)try{let e=iX.userOnline.id,t=await q.fetchSpots(),n=await q.fetchUserEqpt(e);H.addSpotsSelector(t),H.addEqptSelectorByUser(n),iX.ModalRequest=!0}catch(e){console.log(e)}H.toShowModalRequest(),H.switchAllDay.addEventListener("change",i3),H.btnCancelRequest.addEventListener("click",i2),H.formRequest.addEventListener("submit",i1);// catch click on button Home
}H.toActivateBtnFooter(e)}}// ---------------Form request services----------------
function i1(e){e.preventDefault();let{date:t,time:n,isshowphone:i,isautoaccept:s}=e.currentTarget.elements,r=H.inputModalSpot.getSelected().map(e=>Number(e)),a=H.inputModalEqpt.getSelected().map(e=>Number(e));if(!a.length){alert("Select eqpt");return}let o={owner:iX.userOnline.id,date:t.value,time:n.value,spot:r,owner_equipment:a,isshowphone:i.checked,isautoaccept:s.checked};q.sendRequestToServer(o).then(t=>{console.log(t),H.toClearModalForm(e),H.toCloseModalRequest(),iQ()}).catch(e=>console.log(e))}function i2(){H.toCloseModalRequest(),iQ()}function i3(e){let t=e.currentTarget.checked;t?H.toDisableTimeSelect():H.toEnableTimeSelect()}// ---------------Request menu handler----------------
async function i4(e){let t=H.isRequestButton(e);t&&H.toShowRequestSection(e)}//# sourceMappingURL=index.bdbf2e98.js.map
H.logInForm.addEventListener("submit",iZ);
//# sourceMappingURL=index.bdbf2e98.js.map
