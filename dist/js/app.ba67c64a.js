(function(t){function e(e){for(var a,l,i=e[0],s=e[1],c=e[2],p=0,v=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},r={app:0},n=[];function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/calculapreco/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("85ec"),r=o.n(a);r.a},2872:function(t,e,o){"use strict";var a=o("bf21"),r=o.n(a);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],l=(o("034f"),o("2877")),i={},s=Object(l["a"])(i,r,n,!1,null,null,null),c=s.exports,u=o("9483");Object(u["a"])("".concat("/calculapreco/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var p=o("8c4f"),v=o("4396"),f=o.n(v),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),a("p"),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}}),o("form",{on:{submit:t.formSubmit}},[o("label",{attrs:{for:"valor"}},[t._v("Valor do Produto")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.price,expression:"price",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:t.money,expression:"money"}],staticClass:"valor",attrs:{type:"tel",name:"valor"},domProps:{value:t.price},on:{keyup:t.inputChanged,change:function(e){t.price=e.target.value}}}),o("br"),o("label",{attrs:{for:"peso"}},[t._v("Peso do Produto")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.peso,expression:"peso"}],attrs:{type:"tel",id:"peso",name:"peso",placeholder:"gramas"},domProps:{value:t.peso},on:{input:function(e){e.target.composing||(t.peso=e.target.value)}}}),o("br"),o("label",{attrs:{for:"tipo"}},[t._v("Categoria")]),o("br"),o("select",{directives:[{name:"model",rawName:"v-model",value:t.tipo,expression:"tipo"}],attrs:{id:"tipo",name:"tipo"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tipo=e.target.multiple?o:o[0]}}},[o("br"),o("option",{attrs:{value:"1"}},[t._v("Celulares Recondicionados")]),o("option",{attrs:{value:"2"}},[t._v("Celulares Novos")]),o("option",{attrs:{value:"3"}},[t._v("Relógios")]),o("option",{attrs:{value:"4"}},[t._v("Perfumes")]),o("option",{attrs:{value:"5"}},[t._v("TV Box")]),o("option",{attrs:{value:"6"}},[t._v("Notebook")]),o("option",{attrs:{value:"7"}},[t._v("Caixas JBL")]),o("option",{attrs:{value:"8"}},[t._v("Informática")]),o("option",{attrs:{value:"9"}},[t._v("Cosméticos")])]),o("br"),o("input",{attrs:{type:"submit",value:"Calcular"}})]),o("br"),o("div",[o("table",{staticClass:"tabela"},[o("tr",[o("td",{staticClass:"col_l"},[t._v("Valor Dolar Hoje:")]),o("td",{staticClass:"col_r"},[t._v("R$ "+t._s(t.output.valor_dolar_hoje))])]),o("tr",[o("td",{staticClass:"col_l"},[t._v("Valor IOF:")]),o("td",{staticClass:"col_r"},[t._v("R$ "+t._s(t.output.valor_iof))])]),o("tr",[o("td",{staticClass:"col_l"},[t._v("Valor da Taxa: ")]),o("td",{staticClass:"col_r"},[t._v("R$ "+t._s(t.output.valor_taxa))])]),o("tr",[o("td",{staticClass:"col_l"},[t._v("Valor do Produto:")]),o("td",{staticClass:"col_r"},[t._v("R$ "+t._s(t.output.valor_produto_real))])]),o("tr",[o("td",{staticClass:"col_l"},[t._v("Valor Final:")]),o("td",{staticClass:"col_r"},[t._v("R$ "+t._s(t.output.valor_final))])])])])])},b=[],h=(o("ac1f"),o("5319"),o("716b")),g={name:"ValorFinal",props:["valor_final"],data:function(){return{price:0,money:{decimal:",",thousands:".",prefix:"$ ",precision:2,masked:!0},valor:"",peso:"",tipo:"",output:""}},methods:{formSubmit:function(t){t.preventDefault();var e=this,o=this.price.replace("$","");o=o.replace(",","."),this.axios.get("http://calculaprecofinal.herokuapp.com/dolar?valor="+o+"&peso="+this.peso+"&tipo="+this.tipo).then((function(t){e.output=t.data.data})).catch((function(t){e.output=t}))},inputChanged:function(){var t=this;function e(t){var e=t;return e}t.price=e(t.price)}},directives:{money:h["VMoney"]}},y=g,w=(o("a3db"),Object(l["a"])(y,_,b,!1,null,"31535f60",null)),C=w.exports,x={name:"Home",components:{HelloWorld:C},data:function(){return{result:""}}},j=x,O=Object(l["a"])(j,d,m,!1,null,null,null),V=O.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component"},[o("h1",[t._v("Calculo de Valor")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-12 col-sm-6"},[o("ValorFinal",{attrs:{valor_final:t.valor}})],1)])])},$=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("p",[o("b",[t._v("Valor Final: ")]),t._v(t._s(t.valor_final))]),t._m(0)])},F=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"/#/"}},[o("input",{attrs:{type:"submit",value:"Voltar"}})])}],N={name:"ValorFinal",props:["valor_final"],mounted:function(){console.log(this.valor_final)}},S=N,A=(o("2872"),Object(l["a"])(S,k,F,!1,null,"f26505a8",null)),E=A.exports,R={name:"About",components:{ValorFinal:E},data:function(){return{valor:this.valor_final}}},H=R,M=Object(l["a"])(H,P,$,!1,null,null,null),T=M.exports,B=o("bc3a"),J=o.n(B),W=o("a7fe"),z=o.n(W);a["a"].use(z.a,J.a),a["a"].use(p["a"],z.a,J.a),a["a"].component("masked-input",f.a);var D=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:T,props:{header:!0,content:!0}}],I=new p["a"]({routes:D}),q=I;a["a"].config.productionTip=!1,new a["a"]({router:q,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,o){},9737:function(t,e,o){},a3db:function(t,e,o){"use strict";var a=o("9737"),r=o.n(a);r.a},bf21:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.1a1fc263.png"}});
//# sourceMappingURL=app.ba67c64a.js.map