webpackJsonp([0],[function(t,n,e){"use strict";var a=e(23),o=e.n(a),s=e(24),i=e.n(s),p=e(26),r=e.n(p),c=e(25),l=e.n(c);n.a={Landing:o.a,Login:i.a,TodoList:r.a,PostForm:l.a}},,function(t,n,e){"use strict";var a=(e(3),e(0));n.a={data:function(){return{Page:a.a}},methods:{pushPage:function(t){this.$parent.pageStack.push(t)}}}},,,,function(t,n,e){"use strict";var a=e(3),o=e(33);a.a.use(o.a),n.a=new o.a.Store({state:{},mutations:{}})},function(t,n){},function(t,n){},function(t,n,e){function a(t){e(17)}var o=e(1)(e(11),e(28),a,"data-v-2e70f31a",null);t.exports=o.exports},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(0);n.default={name:"app",data:function(){return{pageStack:[a.a.Landing]}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),o=e(0);n.default={name:"landing",mixins:[a.a],mounted:function(){var t=this;console.log(this),setTimeout(function(){t.pushPage(o.a.Login)},100)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),o=e(0);n.default={mixins:[a.a],methods:{login:function(){this.pushPage(o.a.TodoList)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),o=(e(0),e(58)),s=e.n(o);n.default={mixins:[a.a],data:function(){return{selectTodo:{},todos:[{id:1,name:"花火大会",base_point:"300"},{id:2,name:"手持ち花火",base_point:"100"},{id:3,name:"夏祭り",base_point:"300"},{id:4,name:"虫取り",base_point:"50"},{id:5,name:"キャンプ",base_point:"300"},{id:6,name:"キャンプファイヤー",base_point:"700"},{id:7,name:"BBQ",base_point:"100"},{id:8,name:"肝試し",base_point:"100"},{id:9,name:"プール",base_point:"50"},{id:10,name:"ナイトプール",base_point:"1000"},{id:11,name:"海水浴",base_point:"150"},{id:12,name:"ビーチバレー",base_point:"100"},{id:13,name:"サーフィン",base_point:"100"},{id:14,name:"川遊び",base_point:"150"},{id:15,name:"スイカ割り",base_point:"400"},{id:16,name:"夏フェス",base_point:"300"},{id:17,name:"流しそうめん",base_point:"100"},{id:18,name:"天体観測",base_point:"100"}],imageSrc:"https://placehold.jp/cccccc/989898/240x200.png?text=No%20Image",postingWait:!1,postResultShow:!0,postResult:{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503450265.png",point:"1000",todo:{name:"ナイトプール",base_point:"1000"},total_point:1240,getBonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],getTitle:[{name:"リア充への第一歩",point:"100"}]}}},methods:{selectImage:function(t){var n=this,e=t.target.files[0],a=new FileReader;a.onload=function(t){n.imageSrc=t.target.result},a.readAsDataURL(e)},post:function(){var t=this;this.postingWait=!0,setTimeout(function(){t.postingWait=!1,t.postResultShow=!0},5e3)}},components:{PostResult:s.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2);n.default={mixins:[a.a],data:function(){return{userTodos:[{id:1,name:"花火大会",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:2,name:"手持ち花火",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:3,name:"夏祭り",base_point:"300",achievement:!1,total_point:0,posts:[]},{id:4,name:"虫取り",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:5,name:"キャンプ",base_point:"300",achievement:!0,total_point:1800,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388753.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388791.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388856.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388980.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389155.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389188.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350}]},{id:6,name:"キャンプファイヤー",base_point:"700",achievement:!0,total_point:700,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"700",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:720}]},{id:7,name:"BBQ",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:8,name:"肝試し",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:9,name:"プール",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:10,name:"ナイトプール",base_point:"1000",achievement:!0,total_point:8e3,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386633.png",point:"1000",bonuses:[{name:"アウトドアボーナス",point:"10"}],contributor:{id:1,name:"近藤 美加子"},total_point:1010},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386741.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386834.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386914.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386933.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387086.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387143.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387157.png",point:"1000",bonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],contributor:{id:1,name:"近藤 美加子"},total_point:1240}]},{id:11,name:"海水浴",base_point:"150",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170}]},{id:12,name:"ビーチバレー",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:13,name:"サーフィン",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:14,name:"川遊び",base_point:"150",achievement:!1,total_point:0,posts:[]},{id:15,name:"スイカ割り",base_point:"400",achievement:!1,total_point:0,posts:[]},{id:16,name:"夏フェス",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:17,name:"流しそうめん",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:18,name:"天体観測",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]}],query:"",unachieved:!1}},computed:{todos:function(){var t=this;return this.userTodos.filter(function(n){return-1!=n.name.indexOf(t.query)}).filter(function(n){return!t.unachieved||0==n.achievement})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(8),o=(e.n(a),e(7)),s=(e.n(o),e(3)),i=e(10),p=e.n(i),r=e(6),c=e(9),l=e.n(c);s.a.config.productionTip=!1,s.a.use(p.a),new s.a({el:"#app",store:r.a,template:"<App/>",components:{App:l.a}})},function(t,n){},function(t,n){},function(t,n){},,,,function(t,n,e){var a=e(1)(e(12),e(27),null,null,null);t.exports=a.exports},function(t,n,e){function a(t){e(18)}var o=e(1)(e(13),e(30),a,"data-v-51be4ad7",null);t.exports=o.exports},function(t,n,e){function a(t){e(19)}var o=e(1)(e(14),e(31),a,"data-v-a6cae5f4",null);t.exports=o.exports},function(t,n,e){function a(t){e(63)}var o=e(1)(e(15),e(64),a,"data-v-408859a6",null);t.exports=o.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("v-ons-page",{attrs:{id:"landing"}})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack}})},staticRenderFns:[]}},,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",{attrs:{id:"landing"}},[e("div",{staticClass:"bg"},[e("div",{staticClass:"bg-over"},[e("div",{staticClass:"center"},[e("h1",[t._v("LOGIN")]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("メールアドレス")]),e("br"),t._v(" "),e("input",{attrs:{type:"text",placeholder:"example@yahoo.co.jp"}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("パスワード")]),e("br"),t._v(" "),e("input",{attrs:{type:"password"}})]),t._v(" "),e("div",{staticStyle:{"margin-bottom":"100px"}},[e("button",{staticClass:"login-btn",on:{click:t.login}},[t._v("ログイン")])]),t._v(" "),e("span",{staticClass:"link",on:{click:function(n){t.window.open("http://google.com","_system")}}},[t._v("アカウント作成")])])])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",{attrs:{id:"post-form"}},[e("div",{staticClass:"bg"},[e("div",{staticClass:"bg-over"},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("リア充っぽい投稿")]),t._v(" "),e("form",{staticStyle:{padding:"0 20px"}},[e("div",{staticClass:"row"},[e("label",{attrs:{for:"todo"}},[t._v("やったリア充っぽいこと")]),e("br"),t._v(" "),e("v-ons-select",{attrs:{id:"todo"},model:{value:t.selectTodo,callback:function(n){t.selectTodo=n},expression:"selectTodo"}},t._l(t.todos,function(n){return e("option",{domProps:{value:n.id}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])}))],1),t._v(" "),e("div",{staticClass:"row",attrs:{id:"input-image"}},[e("label",{attrs:{for:""}},[t._v("リア充っぽい写真")]),e("br"),t._v(" "),e("div",{staticClass:"display-image"},[e("img",{attrs:{src:t.imageSrc,alt:""}})]),t._v(" "),e("label",{attrs:{for:"select-image",id:"select-image-label"}},[t._v("写真を選ぶ")]),t._v(" "),e("input",{attrs:{type:"file",id:"select-image"},on:{change:function(n){t.selectImage(n)}}})]),t._v(" "),e("div",{staticStyle:{"margin-top":"40px"}},[e("button",{attrs:{type:"button",id:"post-button"},on:{click:t.post}},[t._v("投稿")])])]),t._v(" "),e("v-ons-modal",{attrs:{visible:t.postingWait}},[e("p",{staticStyle:{"text-align":"center"}},[t._v("\n                投稿中 "),e("v-ons-icon",{attrs:{icon:"fa-spinner",spin:""}})],1)]),t._v(" "),e("v-ons-modal",{attrs:{visible:t.postResultShow,options:{animation:"fade"},id:"result-modal"}},[e("post-result",{attrs:{result:t.postResult}}),t._v(" "),e("button",{attrs:{type:"button",id:"close-result-button"},on:{click:function(n){t.postResultShow=!1}}},[t._v("閉じる")])],1)],1)])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["result"],computed:{totalBonusPoint:function(){return 0==this.result.getBonuses.length?0:this.result.getBonuses.reduce(function(t,n){return t+parseInt(n.point)},0)},totalTitlePoint:function(){return 0==this.result.getTitle.length?0:this.result.getTitle.reduce(function(t,n){return t+parseInt(n.point)},0)}}}},function(t,n,e){function a(t){e(60)}var o=e(1)(e(57),e(61),a,"data-v-442cd422",null);t.exports=o.exports},,function(t,n){},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-result"},[e("h2",[t._v("投稿結果")]),t._v(" "),e("div",[e("h3",[t._v("獲得リア充度")]),t._v(" "),e("div",{staticStyle:{"margin-bottom":"20px"}},[e("div",[t._v("\n                獲得リア充度："+t._s(t.result.total_point)+"ml\n            ")]),t._v(" "),e("div",[t._v("\n                累計リア充度："+t._s(t.result.total_point)+"ml\n            ")])]),t._v(" "),e("div",[e("section",{staticClass:"point-section"},[e("h3",{staticClass:"point-title"},[t._v("投稿リア充度")]),t._v(" "),e("div",{staticClass:"point-info"},[e("table",[e("tr",[e("td",[t._v(t._s(t.result.todo.name))]),e("td",[t._v("+"+t._s(t.result.todo.base_point)+"ml")])])])])]),t._v(" "),e("section",{staticClass:"point-section"},[e("h3",{staticClass:"point-title"},[t._v("獲得リア充ボーナス")]),t._v(" "),e("div",{staticClass:"point-info"},[t._l(t.result.getBonuses,function(n){return 0!=t.result.getBonuses.length?e("table",[e("tr",[e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v("+"+t._s(n.point)+"ml")])])]):e("div",[t._v("\n                        獲得したボーナスなし\n                    ")])}),t._v(" "),e("div",{staticClass:"point-total"},[t._v("\n                        合計ボーナスリア充度： "+t._s(t.totalBonusPoint)+"ml\n                    ")])],2)]),t._v(" "),e("section",{staticClass:"point-section"},[e("h3",{staticClass:"point-title"},[t._v("獲得称号")]),t._v(" "),e("div",{staticClass:"point-info"},[t._l(t.result.getTitle,function(n){return 0!=t.result.getTitle.length?e("table",[e("tr",[e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v("+"+t._s(n.point)+"ml")])])]):e("div",[t._v("\n                        獲得した称号なし\n                    ")])}),t._v(" "),e("div",{staticClass:"point-total"},[t._v("\n                        合計称号リア充度： "+t._s(t.totalTitlePoint)+"ml\n                    ")])],2)])])])])},staticRenderFns:[]}},,function(t,n){},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",{attrs:{id:"todo-list"}},[e("v-ons-toolbar",{staticStyle:{backgroundColor:"#4282cc"}},[e("div",{staticClass:"center"},[t._v("リア充っぽいことリスト")])]),t._v(" "),e("div",{staticClass:"bg"},[e("div",{staticClass:"bg-over"},[e("p",{staticStyle:{padding:"0 10px"}},[e("v-ons-search-input",{attrs:{placeholder:"Search"},model:{value:t.query,callback:function(n){t.query=n},expression:"query"}}),t._v(" "),e("span",{staticStyle:{"vertical-align":"bottom"}},[e("v-ons-checkbox",{attrs:{"input-id":"unachieved"},model:{value:t.unachieved,callback:function(n){t.unachieved=n},expression:"unachieved"}}),t._v(" "),e("label",{attrs:{for:"unachieved"}},[t._v("未達成のみ")])],1)],1),t._v(" "),e("v-ons-list",[t._l(t.todos,function(n){return[e("v-ons-list-header",[e("v-ons-icon",{attrs:{icon:"zmdi-star, material:md-zmdi-star"}}),t._v("\n                        "+t._s(n.name)+"\n                    ")],1),t._v(" "),e("v-ons-list-item",[e("div",{staticClass:"left"},[t._v("\n                            投稿数"+t._s(n.posts.length)+"回\n                        ")]),t._v(" "),e("div",{staticClass:"right"},[e("span",{staticStyle:{"text-align":"right",width:"100%"}},[t._v("合計"+t._s(n.total_point)+"ml")])])])]})],2)],1)]),t._v(" "),e("v-ons-fab",{staticStyle:{backgroundColor:"#4282cc"},attrs:{position:"bottom right"},on:{click:function(n){t.pushPage(t.Page.PostForm)}}},[e("v-ons-icon",{attrs:{icon:"md-edit"}})],1)],1)},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.ace5f6cce805a8cd1224.js.map