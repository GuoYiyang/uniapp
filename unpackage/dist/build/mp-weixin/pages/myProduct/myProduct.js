(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myProduct/myProduct"],{"4d3c":function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("278c")),u=a("2b1d"),c={data:function(){return{page:1,pageSize:10,product:{list:[]}}},methods:{wapperClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})},imageClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})}},onLoad:function(t){var e=this;(0,u.getProductPage)({city:"",tag:"",query:"",userId:getApp().globalData.USER_ID,page:this.page,pageSize:this.pageSize}).then((function(t){var a=(0,o.default)(t,2),n=(a[0],a[1]);e.product.list=n.data,console.log(e.product.list)}))},onReachBottom:function(){var t=this;this.page=this.page+1,(0,u.getProductPage)({userId:getApp().globalData.USER_ID,page:this.page,pageSize:this.pageSize}).then((function(e){var a=(0,o.default)(e,2),n=(a[0],a[1]);n.data.length,t.product.list=t.product.list.concat(n.data)}))}};e.default=c}).call(this,a("543d")["default"])},"4e45":function(t,e,a){},"60d1":function(t,e,a){"use strict";(function(t,e){var n=a("4ea4");a("dfdd");n(a("66fd"));var o=n(a("bba6"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(o.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},6739:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={customWaterfallsFlow:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(a.bind(null,"a310"))}},o=function(){var t=this.$createElement;this._self._c},u=[]},bba6:function(t,e,a){"use strict";a.r(e);var n=a("6739"),o=a("d472");for(var u in o)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(u);a("ce78");var c=a("f0c5"),i=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"d33a84fc",null,!1,n["a"],void 0);e["default"]=i.exports},ce78:function(t,e,a){"use strict";var n=a("4e45"),o=a.n(n);o.a},d472:function(t,e,a){"use strict";a.r(e);var n=a("4d3c"),o=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=o.a}},[["60d1","common/runtime","common/vendor"]]]);