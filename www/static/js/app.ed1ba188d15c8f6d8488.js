webpackJsonp([0],[function(t,e,n){"use strict";var a=n(23),o=n.n(a),s=n(24),i=n.n(s),p=n(26),r=n.n(p),l=n(25),c=n.n(l);e.a={Landing:o.a,Login:i.a,TodoList:r.a,PostForm:c.a}},,function(t,e,n){"use strict";var a=(n(3),n(0));e.a={data:function(){return{Page:a.a}},methods:{pushPage:function(t){this.$parent.pageStack.push(t)}}}},,,,function(t,e,n){"use strict";var a=n(3),o=n(33);a.a.use(o.a),e.a=new o.a.Store({state:{},mutations:{}})},function(t,e){},function(t,e){},function(t,e,n){function a(t){n(17)}var o=n(1)(n(11),n(28),a,"data-v-2e70f31a",null);t.exports=o.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0);e.default={name:"app",data:function(){return{pageStack:[a.a.PostForm]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n(0);e.default={name:"landing",mixins:[a.a],mounted:function(){var t=this;console.log(this),setTimeout(function(){t.pushPage(o.a.Login)},100)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n(0);e.default={mixins:[a.a],methods:{login:function(){this.pushPage(o.a.TodoList)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=(n(0),n(58)),s=n.n(o);e.default={mixins:[a.a],data:function(){return{selectTodo:{},todos:[{id:1,name:"花火大会",base_point:"300"},{id:2,name:"手持ち花火",base_point:"100"},{id:3,name:"夏祭り",base_point:"300"},{id:4,name:"虫取り",base_point:"50"},{id:5,name:"キャンプ",base_point:"300"},{id:6,name:"キャンプファイヤー",base_point:"700"},{id:7,name:"BBQ",base_point:"100"},{id:8,name:"肝試し",base_point:"100"},{id:9,name:"プール",base_point:"50"},{id:10,name:"ナイトプール",base_point:"1000"},{id:11,name:"海水浴",base_point:"150"},{id:12,name:"ビーチバレー",base_point:"100"},{id:13,name:"サーフィン",base_point:"100"},{id:14,name:"川遊び",base_point:"150"},{id:15,name:"スイカ割り",base_point:"400"},{id:16,name:"夏フェス",base_point:"300"},{id:17,name:"流しそうめん",base_point:"100"},{id:18,name:"天体観測",base_point:"100"}],imageSrc:"https://placehold.jp/cccccc/989898/240x200.png?text=No%20Image",postingWait:!1,postResultShow:!0,postResult:{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503450265.png",point:"1000",todo:{name:"ナイトプール",base_point:"1000"},total_point:1240,getBonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],getTitle:[{name:"リア充への第一歩",point:"100"}]}}},methods:{selectImage:function(t){var e=this,n=t.target.files[0],a=new FileReader;a.onload=function(t){e.imageSrc=t.target.result},a.readAsDataURL(n)},post:function(){var t=this;this.postingWait=!0,setTimeout(function(){t.postingWait=!1,t.postResultShow=!0},5e3)}},components:{PostResult:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2);e.default={mixins:[a.a],data:function(){return{userTodos:[{id:1,name:"花火大会",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:2,name:"手持ち花火",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:3,name:"夏祭り",base_point:"300",achievement:!1,total_point:0,posts:[]},{id:4,name:"虫取り",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:5,name:"キャンプ",base_point:"300",achievement:!0,total_point:1800,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388753.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388791.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388856.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503388980.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389155.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503389188.png",point:"300",bonuses:[{name:"ポージングボーナス",point:"50"}],contributor:{id:1,name:"近藤 美加子"},total_point:350}]},{id:6,name:"キャンプファイヤー",base_point:"700",achievement:!0,total_point:700,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"700",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:720}]},{id:7,name:"BBQ",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:8,name:"肝試し",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:9,name:"プール",base_point:"50",achievement:!0,total_point:50,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"50",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:70}]},{id:10,name:"ナイトプール",base_point:"1000",achievement:!0,total_point:8e3,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386633.png",point:"1000",bonuses:[{name:"アウトドアボーナス",point:"10"}],contributor:{id:1,name:"近藤 美加子"},total_point:1010},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386741.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386834.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386914.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503386933.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387086.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387143.png",point:"1000",bonuses:[],contributor:{id:1,name:"近藤 美加子"},total_point:1e3},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503387157.png",point:"1000",bonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],contributor:{id:1,name:"近藤 美加子"},total_point:1240}]},{id:11,name:"海水浴",base_point:"150",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170},{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"150",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:170}]},{id:12,name:"ビーチバレー",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:13,name:"サーフィン",base_point:"100",achievement:!1,total_point:0,posts:[]},{id:14,name:"川遊び",base_point:"150",achievement:!1,total_point:0,posts:[]},{id:15,name:"スイカ割り",base_point:"400",achievement:!1,total_point:0,posts:[]},{id:16,name:"夏フェス",base_point:"300",achievement:!0,total_point:300,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"300",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:320}]},{id:17,name:"流しそうめん",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]},{id:18,name:"天体観測",base_point:"100",achievement:!0,total_point:100,posts:[{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503024992.png",point:"100",bonuses:[{name:"カラフルボーナス",point:"20"}],contributor:{id:1,name:"近藤 美加子"},total_point:120}]}],query:"",unachieved:!1}},computed:{todos:function(){var t=this;return this.userTodos.filter(function(e){return-1!=e.name.indexOf(t.query)}).filter(function(e){return!t.unachieved||0==e.achievement})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),o=(n.n(a),n(7)),s=(n.n(o),n(3)),i=n(10),p=n.n(i),r=n(6),l=n(9),c=n.n(l);s.a.config.productionTip=!1,s.a.use(p.a),new s.a({el:"#app",store:r.a,template:"<App/>",components:{App:c.a}})},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){var a=n(1)(n(12),n(27),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(18)}var o=n(1)(n(13),n(30),a,"data-v-51be4ad7",null);t.exports=o.exports},function(t,e,n){function a(t){n(19)}var o=n(1)(n(14),n(31),a,"data-v-a6cae5f4",null);t.exports=o.exports},function(t,e,n){function a(t){n(63)}var o=n(1)(n(15),n(64),a,"data-v-408859a6",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-page",{attrs:{id:"landing"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack}})},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"landing"}},[n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("div",{staticClass:"center"},[n("h1",[t._v("LOGIN")]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("メールアドレス")]),n("br"),t._v(" "),n("input",{attrs:{type:"text",placeholder:"example@yahoo.co.jp"}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("パスワード")]),n("br"),t._v(" "),n("input",{attrs:{type:"password"}})]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"100px"}},[n("button",{staticClass:"login-btn",on:{click:t.login}},[t._v("ログイン")])]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.window.open("http://google.com","_system")}}},[t._v("アカウント作成")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"post-form"}},[n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("リア充っぽい投稿")]),t._v(" "),n("form",{staticStyle:{padding:"0 20px"}},[n("div",{staticClass:"row"},[n("label",{attrs:{for:"todo"}},[t._v("やったリア充っぽいこと")]),n("br"),t._v(" "),n("v-ons-select",{attrs:{id:"todo"},model:{value:t.selectTodo,callback:function(e){t.selectTodo=e},expression:"selectTodo"}},t._l(t.todos,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))],1),t._v(" "),n("div",{staticClass:"row",attrs:{id:"input-image"}},[n("label",{attrs:{for:""}},[t._v("リア充っぽい写真")]),n("br"),t._v(" "),n("div",{staticClass:"display-image"},[n("img",{attrs:{src:t.imageSrc,alt:""}})]),t._v(" "),n("label",{attrs:{for:"select-image",id:"select-image-label"}},[t._v("写真を選ぶ")]),t._v(" "),n("input",{attrs:{type:"file",id:"select-image"},on:{change:function(e){t.selectImage(e)}}})]),t._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("button",{attrs:{type:"button",id:"post-button"},on:{click:t.post}},[t._v("投稿")])])]),t._v(" "),n("v-ons-modal",{attrs:{visible:t.postingWait}},[n("p",{staticStyle:{"text-align":"center"}},[t._v("\n                投稿中 "),n("v-ons-icon",{attrs:{icon:"fa-spinner",spin:""}})],1)]),t._v(" "),n("v-ons-modal",{attrs:{visible:t.postResultShow,options:{animation:"fade"},id:"result-modal"}},[n("post-result",{attrs:{result:t.postResult}}),t._v(" "),n("button",{attrs:{type:"button",id:"close-result-button"},on:{click:function(e){t.postResultShow=!1}}},[t._v("閉じる")])],1)],1)])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["result"],computed:{totalBonusPoint:function(){return 0==this.result.getBonuses.length?0:this.result.getBonuses.reduce(function(t,e){return t+parseInt(e.point)},0)},totalTitlePoint:function(){return 0==this.result.getTitle.length?0:this.result.getTitle.reduce(function(t,e){return t+parseInt(e.point)},0)}}}},function(t,e,n){function a(t){n(66)}var o=n(1)(n(57),n(61),a,"data-v-442cd422",null);t.exports=o.exports},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-result"},[n("h2",[t._v("投稿結果")]),t._v(" "),n("div",[n("h3",[t._v("獲得リア充度")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"20px"}},[n("div",[t._v("\n                獲得リア充度："+t._s(t.result.total_point)+"ml\n            ")]),t._v(" "),n("div",[t._v("\n                累計リア充度："+t._s(t.result.total_point)+"ml\n            ")])]),t._v(" "),n("div",[n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("投稿リア充度")]),t._v(" "),n("div",{staticClass:"point-info"},[n("table",[n("tr",[n("td",[t._v(t._s(t.result.todo.name))]),n("td",[t._v("+"+t._s(t.result.todo.base_point)+"ml")])])])])]),t._v(" "),n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("獲得リア充ボーナス")]),t._v(" "),n("div",{staticClass:"point-info"},[t._l(t.result.getBonuses,function(e){return 0!=t.result.getBonuses.length?n("table",[n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v("+"+t._s(e.point)+"ml")])])]):n("div",[t._v("\n                        獲得したボーナスなし\n                    ")])}),t._v(" "),n("div",{staticClass:"point-total"},[t._v("\n                        合計ボーナスリア充度： "+t._s(t.totalBonusPoint)+"ml\n                    ")])],2)]),t._v(" "),n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("獲得称号")]),t._v(" "),n("div",{staticClass:"point-info"},[t._l(t.result.getTitle,function(e){return 0!=t.result.getTitle.length?n("table",[n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v("+"+t._s(e.point)+"ml")])])]):n("div",[t._v("\n                        獲得した称号なし\n                    ")])}),t._v(" "),n("div",{staticClass:"point-total"},[t._v("\n                        合計称号リア充度： "+t._s(t.totalTitlePoint)+"ml\n                    ")])],2)])])]),t._v(" "),t._l(100,function(e){return n("div",[t._m(0,!0)])})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"scale'+scaleVal+'"},[n("div",{staticClass:"item shake'+shakeVal+'"})])])}]}},,function(t,e){},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"todo-list"}},[n("v-ons-toolbar",{staticStyle:{backgroundColor:"#4282cc"}},[n("div",{staticClass:"center"},[t._v("リア充っぽいことリスト")])]),t._v(" "),n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("p",{staticStyle:{padding:"0 10px"}},[n("v-ons-search-input",{attrs:{placeholder:"Search"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"bottom"}},[n("v-ons-checkbox",{attrs:{"input-id":"unachieved"},model:{value:t.unachieved,callback:function(e){t.unachieved=e},expression:"unachieved"}}),t._v(" "),n("label",{attrs:{for:"unachieved"}},[t._v("未達成のみ")])],1)],1),t._v(" "),n("v-ons-list",[t._l(t.todos,function(e){return[n("v-ons-list-header",[n("v-ons-icon",{attrs:{icon:"zmdi-star, material:md-zmdi-star"}}),t._v("\n                        "+t._s(e.name)+"\n                    ")],1),t._v(" "),n("v-ons-list-item",[n("div",{staticClass:"left"},[t._v("\n                            投稿数"+t._s(e.posts.length)+"回\n                        ")]),t._v(" "),n("div",{staticClass:"right"},[n("span",{staticStyle:{"text-align":"right",width:"100%"}},[t._v("合計"+t._s(e.total_point)+"ml")])])])]})],2)],1)]),t._v(" "),n("v-ons-fab",{staticStyle:{backgroundColor:"#4282cc"},attrs:{position:"bottom right"},on:{click:function(e){t.pushPage(t.Page.PostForm)}}},[n("v-ons-icon",{attrs:{icon:"md-edit"}})],1)],1)},staticRenderFns:[]}},,function(t,e){throw new Error('Module build failed: ModuleBuildError: Module build failed: \n    }\n^\n      Invalid CSS after "}": expected 1 selector or at-rule, was "\x3c!--@for $i from 0 "\n      in /Users/user/development/real-juice-app/src/components/PostResult.vue (line 164, column 2)\n    at runLoaders (/Users/user/development/real-juice-app/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/user/development/real-juice-app/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/user/development/real-juice-app/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/user/development/real-juice-app/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/user/development/real-juice-app/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/Users/user/development/real-juice-app/node_modules/async/dist/async.js:2244:31)\n    at Object.callback (/Users/user/development/real-juice-app/node_modules/async/dist/async.js:906:16)\n    at options.error (/Users/user/development/real-juice-app/node_modules/node-sass/lib/index.js:294:32)')}],[16]);
//# sourceMappingURL=app.ed1ba188d15c8f6d8488.js.map