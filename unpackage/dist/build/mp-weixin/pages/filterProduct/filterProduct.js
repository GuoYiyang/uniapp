(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/filterProduct/filterProduct"],{"61dc":function(t,e,n){"use strict";(function(t){var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("278c")),o=n("2b1d"),a={data:function(){return{page:1,pageSize:10,city:"",tag:"",query:"",product:{list:[]},cityList:[{value:"0",text:"深圳"},{value:"1",text:"北京"},{value:"2",text:"上海"},{value:"3",text:"广州"}]}},methods:{wapperClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})},imageClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})}},onLoad:function(t){var e=this,n=this;this.city=t.city,null!=t.tag&&(this.tag=t.tag),null!=t.query&&(this.query=t.query),(0,o.getProductPage)({city:this.city,tag:this.tag,query:this.query,page:this.page,pageSize:this.pageSize}).then((function(t){var u=(0,i.default)(t,2),o=(u[0],u[1]);n.product.list=o.data,console.log(e.product.list)}))},onReachBottom:function(){var t=this;this.page=this.page+1,(0,o.getProductPage)({city:this.city,tag:this.tag,query:this.query,page:this.page,pageSize:this.pageSize}).then((function(e){var n=(0,i.default)(e,2),u=(n[0],n[1]);u.data.length,t.product.list=t.product.list.concat(u.data)}))}};e.default=a}).call(this,n("543d")["default"])},"6f7c":function(t,e,n){},"717b":function(t,e,n){"use strict";(function(t,e){var u=n("4ea4");n("dfdd");u(n("66fd"));var i=u(n("9d16"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},8460:function(t,e,n){"use strict";var u=n("6f7c"),i=n.n(u);i.a},"8d28":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var u={uRow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-row/u-row")]).then(n.bind(null,"9ff0"))},uCol:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-col/u-col")]).then(n.bind(null,"2839"))},uniDataPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(n.bind(null,"1af9"))},uLine:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-line/u-line")]).then(n.bind(null,"19d9"))},customWaterfallsFlow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(n.bind(null,"a310"))}},i=function(){var t=this.$createElement;this._self._c},o=[]},"9d16":function(t,e,n){"use strict";n.r(e);var u=n("8d28"),i=n("f6d6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8460");var a=n("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"1cc59c7a",null,!1,u["a"],void 0);e["default"]=c.exports},f6d6:function(t,e,n){"use strict";n.r(e);var u=n("61dc"),i=n.n(u);for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a}},[["717b","common/runtime","common/vendor"]]]);