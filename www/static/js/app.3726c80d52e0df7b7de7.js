webpackJsonp([0],[function(t,n,a){"use strict";var e=a(23),o=a.n(e),s=a(24),i=a.n(s),p=a(26),r=a.n(p),c=a(25),l=a.n(c);n.a={Landing:o.a,Login:i.a,TodoList:r.a,PostForm:l.a}},,function(t,n,a){"use strict";var e=(a(3),a(0));n.a={data:function(){return{Page:e.a}},methods:{pushPage:function(t){this.$parent.pageStack.push(t)}}}},,,,function(t,n,a){"use strict";var e=a(3),o=a(33);e.a.use(o.a),n.a=new o.a.Store({state:{},mutations:{}})},function(t,n){},function(t,n){},function(t,n,a){function e(t){a(17)}var o=a(1)(a(11),a(28),e,"data-v-2e70f31a",null);t.exports=o.exports},,function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(0);n.default={name:"app",data:function(){return{pageStack:[e.a.PostForm]}}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(2),o=a(0);n.default={name:"landing",mixins:[e.a],mounted:function(){var t=this;console.log(this),setTimeout(function(){t.pushPage(o.a.Login)},100)}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(2),o=a(0);n.default={mixins:[e.a],methods:{login:function(){this.pushPage(o.a.TodoList)}}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(68),o=a.n(e),s=a(2),i=(a(0),a(58)),p=a.n(i);n.default={mixins:[s.a],data:function(){return{selectTodo:{},todos:[{id:1,name:"花火大会",base_point:"300"},{id:2,name:"手持ち花火",base_point:"100"},{id:3,name:"夏祭り",base_point:"300"},{id:4,name:"虫取り",base_point:"50"},{id:5,name:"キャンプ",base_point:"300"},{id:6,name:"キャンプファイヤー",base_point:"700"},{id:7,name:"BBQ",base_point:"100"},{id:8,name:"肝試し",base_point:"100"},{id:9,name:"プール",base_point:"50"},{id:10,name:"ナイトプール",base_point:"1000"},{id:11,name:"海水浴",base_point:"150"},{id:12,name:"ビーチバレー",base_point:"100"},{id:13,name:"サーフィン",base_point:"100"},{id:14,name:"川遊び",base_point:"150"},{id:15,name:"スイカ割り",base_point:"400"},{id:16,name:"夏フェス",base_point:"300"},{id:17,name:"流しそうめん",base_point:"100"},{id:18,name:"天体観測",base_point:"100"}],imageSrc:"https://placehold.jp/cccccc/989898/240x200.png?text=No%20Image",postingWait:!1,postResultShow:!0,postResult:{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503450265.png",point:"1000",todo:{name:"ナイトプール",base_point:"1000"},total_point:1240,getBonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],getTitle:[{name:"リア充への第一歩",point:"100"}]}}},mounted:function(){for(var t=0;t<=100;t++){var n=Math.ceil(50*Math.random()),a=Math.ceil(50*Math.random()),e=Math.ceil(10*Math.random()),s=Math.ceil(5*Math.random()),i=Math.ceil(5*Math.random());o()(this.$el).find("#post-wait").append('<div class="bubble move'+n+" pos"+a+'"><div class="scale'+e+'"><div class="shake'+i+'"><span class="item stretch'+s+'"></span></div></div>')}},methods:{selectImage:function(t){var n=this,a=t.target.files[0],e=new FileReader;e.onload=function(t){n.imageSrc=t.target.result},e.readAsDataURL(a)},post:function(){var t=this;this.postingWait=!0,setTimeout(function(){t.postingWait=!1,t.postResultShow=!0},5e3)}},components:{PostResult:p.a}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(2);n.default={mixins:[e.a],data:function(){return{userTodos:[{id:1,name:"花火大会",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:2,name:"手持ち花火",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:3,name:"夏祭り",base_point:"300",achievement:!1,total_point:0,posts:[]},{id:4,name:"虫取り",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:5,name:"キャンプ",base_point:"300",achievement:!0,total_point:1800,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388753.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388791.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388856.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388980.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389155.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389188.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350}]},{id:6,name:"キャンプファイヤー",base_point:"700",achievement:!0,total_point:700,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"700",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:720}]},{id:7,name:"BBQ",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:8,name:"肝試し",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:9,name:"プール",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:10,name:"ナイトプール",base_point:"1000",achievement:!0,total_point:8e3,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386633.png",point:"1000",bonuses:[{name:"アウトドアボーナス",point:"10"}],contributor:{id:1,name:"近藤 美加子"},total_point:1010},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386741.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386834.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386914.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386933.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387086.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387143.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387157.png",point:"1000",bonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],contributor:{id:1,name:"近藤 美加子"},total_point:1240}]},{id:11,name:"海水浴",base_point:"150",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170}]},{id:12,name:"ビーチバレー",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:13,name:"サーフィン",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:14,name:"川遊び",base_point:"150",achievement:!1,total_point:0,posts:[]},{id:15,name:"スイカ割り",base_point:"400",achievement:!1,total_point:0,posts:[]},{id:16,name:"夏フェス",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:17,name:"流しそうめん",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:18,name:"天体観測",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]}],query:"",unachieved:!1}},computed:{todos:function(){var t=this;return this.userTodos.filter(function(n){return-1!=n.name.indexOf(t.query)}).filter(function(n){return!t.unachieved||0==n.achievement})}}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(8),o=(a.n(e),a(7)),s=(a.n(o),a(3)),i=a(10),p=a.n(i),r=a(6),c=a(9),l=a.n(c);s.a.config.productionTip=!1,s.a.use(p.a),new s.a({el:"#app",store:r.a,template:"<App/>",components:{App:l.a}})},function(t,n){},function(t,n){},,,,,function(t,n,a){var e=a(1)(a(12),a(27),null,null,null);t.exports=e.exports},function(t,n,a){function e(t){a(18)}var o=a(1)(a(13),a(30),e,"data-v-51be4ad7",null);t.exports=o.exports},function(t,n,a){function e(t){a(71)}var o=a(1)(a(14),a(72),e,null,null);t.exports=o.exports},function(t,n,a){function e(t){a(63)}var o=a(1)(a(15),a(64),e,"data-v-408859a6",null);t.exports=o.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("v-ons-page",{attrs:{id:"landing"}})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack}})},staticRenderFns:[]}},,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-ons-page",{attrs:{id:"landing"}},[a("div",{staticClass:"bg"},[a("div",{staticClass:"bg-over"},[a("div",{staticClass:"center"},[a("h1",[t._v("LOGIN")]),t._v(" "),a("div",{staticClass:"input"},[a("label",[t._v("メールアドレス")]),a("br"),t._v(" "),a("input",{attrs:{type:"text",placeholder:"example@yahoo.co.jp"}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",[t._v("パスワード")]),a("br"),t._v(" "),a("input",{attrs:{type:"password"}})]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"100px"}},[a("button",{staticClass:"login-btn",on:{click:t.login}},[t._v("ログイン")])]),t._v(" "),a("span",{staticClass:"link",on:{click:function(n){t.window.open("http://google.com","_system")}}},[t._v("アカウント作成")])])])])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(68),o=a.n(e);n.default={props:["result"],computed:{totalBonusPoint:function(){return 0==this.result.getBonuses.length?0:this.result.getBonuses.reduce(function(t,n){return t+parseInt(n.point)},0)},totalTitlePoint:function(){return 0==this.result.getTitle.length?0:this.result.getTitle.reduce(function(t,n){return t+parseInt(n.point)},0)}},mounted:function(){for(var t=0;t<=100;t++){var n=Math.ceil(50*Math.random()),a=Math.ceil(50*Math.random()),e=Math.ceil(10*Math.random()),s=Math.ceil(5*Math.random()),i=Math.ceil(5*Math.random());o()(this.$el).append('<div class="bubble move'+n+" pos"+a+'"><div class="scale'+e+'"><div class="shake'+i+'"><span class="item stretch'+s+'"></span></div></div>')}}}},function(t,n,a){function e(t){a(69)}var o=a(1)(a(57),a(59),e,null,null);t.exports=o.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"post-result"},[a("h2",{staticStyle:{margin:"0","text-align":"center"}},[t._v("投稿結果")]),t._v(" "),a("div",[a("h3",{staticStyle:{margin:"0"}},[t._v("獲得リア充度")]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("div",[t._v("\n                獲得リア充度："+t._s(t.result.total_point)+"ml\n            ")]),t._v(" "),a("div",[t._v("\n                累計リア充度："+t._s(t.result.total_point)+"ml\n            ")])]),t._v(" "),a("div",[a("section",{staticClass:"point-section"},[a("h3",{staticClass:"point-title"},[t._v("投稿リア充度")]),t._v(" "),a("div",{staticClass:"point-info"},[a("table",[a("tr",[a("td",[t._v(t._s(t.result.todo.name))]),a("td",[t._v("+"+t._s(t.result.todo.base_point)+"ml")])])])])]),t._v(" "),a("section",{staticClass:"point-section"},[a("h3",{staticClass:"point-title"},[t._v("獲得リア充ボーナス")]),t._v(" "),a("div",{staticClass:"point-info"},[t._l(t.result.getBonuses,function(n){return 0!=t.result.getBonuses.length?a("table",[a("tr",[a("td",[t._v(t._s(n.name))]),t._v(" "),a("td",[t._v("+"+t._s(n.point)+"ml")])])]):a("div",[t._v("\n                        獲得したボーナスなし\n                    ")])}),t._v(" "),a("div",{staticClass:"point-total"},[t._v("\n                        合計ボーナスリア充度： "+t._s(t.totalBonusPoint)+"ml\n                    ")])],2)]),t._v(" "),a("section",{staticClass:"point-section"},[a("h3",{staticClass:"point-title"},[t._v("獲得称号")]),t._v(" "),a("div",{staticClass:"point-info"},[t._l(t.result.getTitle,function(n){return 0!=t.result.getTitle.length?a("table",[a("tr",[a("td",[t._v(t._s(n.name))]),t._v(" "),a("td",[t._v("+"+t._s(n.point)+"ml")])])]):a("div",[t._v("\n                        獲得した称号なし\n                    ")])}),t._v(" "),a("div",{staticClass:"point-total"},[t._v("\n                        合計称号リア充度： "+t._s(t.totalTitlePoint)+"ml\n                    ")])],2)])])])])},staticRenderFns:[]}},,,,function(t,n){},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-ons-page",{attrs:{id:"todo-list"}},[a("v-ons-toolbar",{staticStyle:{backgroundColor:"#4282cc"}},[a("div",{staticClass:"center"},[t._v("リア充っぽいことリスト")])]),t._v(" "),a("div",{staticClass:"bg"},[a("div",{staticClass:"bg-over"},[a("p",{staticStyle:{padding:"0 10px"}},[a("v-ons-search-input",{attrs:{placeholder:"Search"},model:{value:t.query,callback:function(n){t.query=n},expression:"query"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"bottom"}},[a("v-ons-checkbox",{attrs:{"input-id":"unachieved"},model:{value:t.unachieved,callback:function(n){t.unachieved=n},expression:"unachieved"}}),t._v(" "),a("label",{attrs:{for:"unachieved"}},[t._v("未達成のみ")])],1)],1),t._v(" "),a("v-ons-list",[t._l(t.todos,function(n){return[a("v-ons-list-header",[a("v-ons-icon",{attrs:{icon:"zmdi-star, material:md-zmdi-star"}}),t._v("\n                        "+t._s(n.name)+"\n                    ")],1),t._v(" "),a("v-ons-list-item",[a("div",{staticClass:"left"},[t._v("\n                            投稿数"+t._s(n.posts.length)+"回\n                        ")]),t._v(" "),a("div",{staticClass:"right"},[a("span",{staticStyle:{"text-align":"right",width:"100%"}},[t._v("合計"+t._s(n.total_point)+"ml")])])])]})],2)],1)]),t._v(" "),a("v-ons-fab",{staticStyle:{backgroundColor:"#4282cc"},attrs:{position:"bottom right"},on:{click:function(n){t.pushPage(t.Page.PostForm)}}},[a("v-ons-icon",{attrs:{icon:"md-edit"}})],1)],1)},staticRenderFns:[]}},,,,,function(t,n){},,function(t,n){},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-ons-page",{attrs:{id:"post-form"}},[a("div",{staticClass:"bg"},[a("div",{staticClass:"bg-over"},[a("h1",{staticStyle:{"text-align":"center"}},[t._v("リア充っぽい投稿")]),t._v(" "),a("form",{staticStyle:{padding:"0 20px"}},[a("div",{staticClass:"row"},[a("label",{attrs:{for:"todo"}},[t._v("やったリア充っぽいこと")]),a("br"),t._v(" "),a("v-ons-select",{attrs:{id:"todo"},model:{value:t.selectTodo,callback:function(n){t.selectTodo=n},expression:"selectTodo"}},t._l(t.todos,function(n){return a("option",{domProps:{value:n.id}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])}))],1),t._v(" "),a("div",{staticClass:"row",attrs:{id:"input-image"}},[a("label",{attrs:{for:""}},[t._v("リア充っぽい写真")]),a("br"),t._v(" "),a("div",{staticClass:"display-image"},[a("img",{attrs:{src:t.imageSrc,alt:""}})]),t._v(" "),a("label",{attrs:{for:"select-image",id:"select-image-label"}},[t._v("写真を選ぶ")]),t._v(" "),a("input",{attrs:{type:"file",id:"select-image"},on:{change:function(n){t.selectImage(n)}}})]),t._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("button",{attrs:{type:"button",id:"post-button"},on:{click:t.post}},[t._v("投稿")])])]),t._v(" "),a("v-ons-modal",{attrs:{visible:t.postingWait,id:"post-wait"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("\n                投稿中 "),a("v-ons-icon",{attrs:{icon:"fa-spinner",spin:""}})],1)]),t._v(" "),a("v-ons-modal",{attrs:{visible:t.postResultShow,options:{animation:"fade"},id:"result-modal"}},[a("post-result",{attrs:{result:t.postResult}}),t._v(" "),a("button",{attrs:{type:"button",id:"close-result-button"},on:{click:function(n){t.postResultShow=!1}}},[t._v("閉じる")])],1)],1)])])},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.3726c80d52e0df7b7de7.js.map