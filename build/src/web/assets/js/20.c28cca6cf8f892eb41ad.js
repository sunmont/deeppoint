webpackJsonp([20,36],{509:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(675),a=c.n(i);t.default={components:{VbSwitch:a.a},data:function(){return{value:!1,text:""}},watch:{value:function(e){this.text=e?"Right":"Wrong"}}}},536:function(e,t,c){"use strict";function i(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{disabled:Boolean,isFullwidth:Boolean,type:String,size:String,checked:Boolean},data:function(){return{value:this.checked}},mounted:function(){this.$emit("input",this.value=!!this.checked)},computed:{classObject:function(){var e,t=this.type,c=this.size,a=this.value;return e={},i(e,"is-"+t,t),i(e,"is-"+c,c),i(e,"checked",a),e}},watch:{value:function(e){this.$emit("input",e)}}}},565:function(e,t,c){t=e.exports=c(71)(),t.push([e.i,".button[data-v-1cc5ba96]{margin:5px 0 0}p[data-v-1cc5ba96]{margin-bottom:20px}.tooltip-value[data-v-1cc5ba96]{width:100%}","",{version:3,sources:["/./client/views/components/Switch.vue"],names:[],mappings:"AACA,yBAAyB,cAAc,CACtC,AACD,mBAAmB,kBAAkB,CACpC,AACD,gCAAgC,UAAU,CACzC",file:"Switch.vue",sourcesContent:["\n.button[data-v-1cc5ba96]{margin:5px 0 0\n}\np[data-v-1cc5ba96]{margin-bottom:20px\n}\n.tooltip-value[data-v-1cc5ba96]{width:100%\n}\n"],sourceRoot:"webpack://"}])},591:function(e,t,c){t=e.exports=c(71)(),t.push([e.i,'.switch{--height:22px;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;outline:0;border-radius:calc(.8 * var(--height));width:calc(1.625 * var(--height));height:var(--height);background-color:#dbdbdb;border:1px solid #dbdbdb;box-sizing:border-box;-webkit-tap-highlight-color:transparent}.switch,.switch input{cursor:pointer;display:inline-block}.switch input{opacity:0;width:100%;height:100%;position:absolute;z-index:1}.switch:after,.switch:before{content:" ";position:absolute;top:0;left:0;height:calc(var(--height) - 2px);border-radius:calc((var(--height) - 2px) / 2);transition:.233s}.switch:before{width:calc(1.625 * var(--height) - 2px);background-color:#dbdbdb}.switch:after{width:calc(var(--height) - 2px);background-color:#fff;box-shadow:0 2px 3px hsla(0,0%,7%,.1)}.switch.checked{border-color:#4a4a4a;background-color:#4a4a4a}.switch.checked:before{-ms-transform:scale(0);transform:scale(0)}.switch.checked:after{-ms-transform:translateX(calc(.625 * var(--height)));transform:translateX(calc(.625 * var(--height)))}.switch.is-#fff.checked{border-color:#fff;background-color:#fff}.switch.is-#000.checked{border-color:#0a0a0a;background-color:#0a0a0a}.switch.is-light.checked{border-color:#f5f5f5;background-color:#f5f5f5}.switch.is-dark.checked{border-color:#363636;background-color:#363636}.switch.is-primary.checked{border-color:#00d1b2;background-color:#00d1b2}.switch.is-info.checked{border-color:#3273dc;background-color:#3273dc}.switch.is-success.checked{border-color:#23d160;background-color:#23d160}.switch.is-warning.checked{border-color:#ffdd57;background-color:#ffdd57}.switch.is-danger.checked{border-color:#ff3860;background-color:#ff3860}.switch.is-small{--height:12px}.switch.is-medium{--height:28px}.switch.is-large{--height:32px}',"",{version:3,sources:["/./node_modules/vue-bulma-switch/src/Switch.vue"],names:[],mappings:"AACA,QAAQ,cAAc,wBAAwB,qBAAqB,gBAAgB,kBAAkB,UAAU,uCAAwC,kCAAkC,qBAAqB,yBAAyB,yBAAyB,AAAe,sBAAsB,AAAqB,uCAAuC,CAChW,AACD,sBAFgQ,eAAe,AAAsB,oBAAqB,CAGzT,AADD,cAAc,UAAU,AAAqB,WAAW,YAAY,kBAAkB,SAAU,CAC/F,AACD,6BAA6B,YAAY,kBAAkB,MAAM,OAAO,iCAAiC,8CAA8C,gBAAgB,CACtK,AACD,eAAe,wCAAwC,wBAAwB,CAC9E,AACD,cAAc,gCAAgC,sBAAsB,qCAAuC,CAC1G,AACD,gBAAgB,qBAAqB,wBAAwB,CAC5D,AACD,uBAAuB,uBAAuB,kBAAkB,CAC/D,AACD,sBAAsB,qDAAsD,gDAAiD,CAC5H,AACD,wBAAwB,kBAAkB,qBAAqB,CAC9D,AACD,wBAAwB,qBAAqB,wBAAwB,CACpE,AACD,yBAAyB,qBAAqB,wBAAwB,CACrE,AACD,wBAAwB,qBAAqB,wBAAwB,CACpE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,wBAAwB,qBAAqB,wBAAwB,CACpE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,0BAA0B,qBAAqB,wBAAwB,CACtE,AACD,iBAAiB,aAAa,CAC7B,AACD,kBAAkB,aAAa,CAC9B,AACD,iBAAiB,aAAa,CAC7B",file:"Switch.vue",sourcesContent:['\n.switch{--height:22px;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;outline:0;border-radius:calc(0.8 * var(--height));width:calc(1.625 * var(--height));height:var(--height);background-color:#dbdbdb;border:1px solid #dbdbdb;cursor:pointer;box-sizing:border-box;display:inline-block;-webkit-tap-highlight-color:transparent\n}\n.switch input{opacity:0;display:inline-block;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer\n}\n.switch:before,.switch:after{content:" ";position:absolute;top:0;left:0;height:calc(var(--height) - 2px);border-radius:calc((var(--height) - 2px) / 2);transition:.233s\n}\n.switch:before{width:calc(1.625 * var(--height) - 2px);background-color:#dbdbdb\n}\n.switch:after{width:calc(var(--height) - 2px);background-color:#FFF;box-shadow:0 2px 3px rgba(17,17,17,0.1)\n}\n.switch.checked{border-color:#4a4a4a;background-color:#4a4a4a\n}\n.switch.checked:before{-ms-transform:scale(0);transform:scale(0)\n}\n.switch.checked:after{-ms-transform:translateX(calc(0.625 * var(--height)));transform:translateX(calc(0.625 * var(--height)))\n}\n.switch.is-#fff.checked{border-color:#fff;background-color:#fff\n}\n.switch.is-#000.checked{border-color:#0a0a0a;background-color:#0a0a0a\n}\n.switch.is-light.checked{border-color:#f5f5f5;background-color:#f5f5f5\n}\n.switch.is-dark.checked{border-color:#363636;background-color:#363636\n}\n.switch.is-primary.checked{border-color:#00d1b2;background-color:#00d1b2\n}\n.switch.is-info.checked{border-color:#3273dc;background-color:#3273dc\n}\n.switch.is-success.checked{border-color:#23d160;background-color:#23d160\n}\n.switch.is-warning.checked{border-color:#ffdd57;background-color:#ffdd57\n}\n.switch.is-danger.checked{border-color:#ff3860;background-color:#ff3860\n}\n.switch.is-small{--height:12px\n}\n.switch.is-medium{--height:28px\n}\n.switch.is-large{--height:32px\n}\n'],sourceRoot:"webpack://"}])},606:function(e,t,c){var i=c(565);"string"==typeof i&&(i=[[e.i,i,""]]);c(72)(i,{});i.locals&&(e.exports=i.locals)},632:function(e,t,c){var i=c(591);"string"==typeof i&&(i=[[e.i,i,""]]);c(72)(i,{});i.locals&&(e.exports=i.locals)},675:function(e,t,c){var i,a;c(632),i=c(536);var o=c(730);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="Switch"),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=i},692:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"tile is-ancestor"},[c("div",{staticClass:"tile is-parent is-4"},[c("article",{staticClass:"tile is-child box"},[c("h1",{staticClass:"title"},[e._v("Styles")]),e._v(" "),c("div",{staticClass:"block styles-box"},[c("p",[c("vb-switch",{attrs:{checked:""}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{checked:"",type:"primary"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{checked:"",type:"info"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{checked:"",type:"success"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{checked:"",type:"warning"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{checked:"",type:"danger"}})],1)])])]),e._v(" "),c("div",{staticClass:"tile is-parent is-4"},[c("article",{staticClass:"tile is-child box"},[c("h1",{staticClass:"title"},[e._v("Sizes")]),e._v(" "),c("div",{staticClass:"block"},[c("p",[c("vb-switch",{attrs:{size:"small"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{size:""}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{size:"medium"}})],1),e._v(" "),c("p",[c("vb-switch",{attrs:{size:"large"}})],1)])])]),e._v(" "),c("div",{staticClass:"tile is-parent is-4"},[c("article",{staticClass:"tile is-child box"},[c("h1",{staticClass:"title"},[e._v("Dynamics")]),e._v(" "),c("div",{staticClass:"block"},[c("p",[c("vb-switch",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"success",size:"large",checked:""},domProps:{value:e.value},on:{input:function(t){e.value=t}}})],1),e._v(" "),c("p",[e._v("\n            "+e._s(e.text)+"\n          ")])])])])])])},staticRenderFns:[]}},730:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("label",{staticClass:"switch",class:e.classObject},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{click:function(t){var c=e.value,i=t.target,a=!!i.checked;if(Array.isArray(c)){var o=null,r=e._i(c,o);a?r<0&&(e.value=c.concat(o)):r>-1&&(e.value=c.slice(0,r).concat(c.slice(r+1)))}else e.value=a}}})])},staticRenderFns:[]}},96:function(e,t,c){var i,a;c(606),i=c(509);var o=c(692);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="Switch"),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-1cc5ba96",e.exports=i}});
//# sourceMappingURL=20.c28cca6cf8f892eb41ad.js.map