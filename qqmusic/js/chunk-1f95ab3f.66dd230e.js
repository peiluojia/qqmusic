(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f95ab3f"],{"4e62":function(e,t,s){"use strict";var i=s("9fc4"),r=s.n(i);r.a},"7c58":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"recommend",staticClass:"recommend"},[s("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[s("div",[e.recommends.length?s("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[s("slider",e._l(e.recommends,function(t){return s("div",[s("a",{attrs:{href:t.linkUrl}},[s("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}),0)],1):e._e(),s("div",{staticClass:"recommend-list"},[s("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),s("ul",e._l(e.discList,function(t){return s("li",{staticClass:"item",on:{click:function(s){e.selectItem(t)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),s("div",{staticClass:"text"},[s("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),s("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[s("loading")],1)]),s("router-view")],1)},r=[],n=s("cebc"),l=(s("cadf"),s("551c"),s("097d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"slider",staticClass:"slider"},[s("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),s("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return s("span",{staticClass:"dot",class:{active:e.currentPageIndex===i}})}),0)])}),a=[],c=(s("c5f6"),s("3e2c")),o=s("1fba"),d={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},threshold:{type:Number,default:.3},speed:{type:Number,default:400},interval:{type:Number,default:3e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},destroyed:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(e){console.log(1),this.children=this.$refs.sliderGroup.children;for(var t=0,s=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var r=this.children[i];Object(c["a"])(r,"slider-item"),r.style.width=s+"px",t+=s}this.loop&&!e&&(t+=2*s),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new o["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:this.threshold,speed:this.speed}}),this.slider.on("scrollEnd",function(){e.currentPageIndex=e.slider.getCurrentPage().pageX,e.autoPlay&&(clearTimeout(e.timer),e._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this;this.timer=setTimeout(function(){e.slider.next()},this.interval)}}},u=d,h=(s("c569"),s("2877")),f=Object(h["a"])(u,l,a,!1,null,"59f0bd01",null);f.options.__file="slider.vue";var m=f.exports,p=s("1cb8"),v=s("e9fc"),_=s("42ba"),g=s("510f"),b=s("da71"),w=s("2f62"),y={mixins:[g["b"]],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:Object(n["a"])({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())},selectItem:function(e){this.$router.push({path:"/recommend/".concat(e.dissid)}),this.setDisc(e)},_getRecommend:function(){var e=this;Object(_["b"])().then(function(t){t.code===b["a"]&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;Object(_["a"])().then(function(t){t.code===b["a"]&&(e.discList=t.data.list)})}},Object(w["d"])({setDisc:"SET_DISC"})),components:{Slider:m,Loading:p["a"],Scroll:v["a"]}},C=y,x=(s("4e62"),Object(h["a"])(C,i,r,!1,null,"5e2eb94d",null));x.options.__file="recommend.vue";t["default"]=x.exports},"9fc4":function(e,t,s){},c569:function(e,t,s){"use strict";var i=s("f8f6"),r=s.n(i);r.a},f8f6:function(e,t,s){}}]);
//# sourceMappingURL=chunk-1f95ab3f.66dd230e.js.map