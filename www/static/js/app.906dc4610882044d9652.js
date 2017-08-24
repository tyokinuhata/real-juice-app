webpackJsonp([0],{0:function(t,e,n){"use strict";var s=n(23),a=n.n(s),i=n(24),o=n.n(i),r=n(26),c=n.n(r),l=n(25),u=n.n(l);e.a={Landing:a.a,Login:o.a,TodoList:c.a,PostForm:u.a}},105:function(t,e,n){"use strict";var s=n(107),a=n.n(s),i=n(108),o=n.n(i),r=n(87),c=n.n(r),l="https://real-juice.herokuapp.com/api/",u=function(){function t(e){a()(this,t),this.request=c.a.create({baseURL:l,headers:{"Access-Token":e}})}return o()(t,[{key:"auth",value:function(t,e){return this.request.post("auth/token",{email:t,password:e})}},{key:"feachTodos",value:function(){return this.request.get("todos")}},{key:"feachMeTodos",value:function(){return this.request.get("me/todos")}},{key:"postPost",value:function(t){return this.request.post("me/posts",t)}}]),t}();e.a=u},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);e.default={name:"app",data:function(){return{pageStack:[s.a.Landing]}},created:function(){var t=localStorage.getItem("token");null!==t&&this.$store.commit("setToken",t)}}},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2);n(0);e.default={name:"landing",mixins:[s.a],mounted:function(){this.$store.getters.isAuth?this.pushPage(this.Page.TodoList):this.pushPage(this.Page.Login)}}},121:function(t,e,n){"use strict";var s=n(105),a=n(2),i=n(0);e.a={mixins:[a.a],data:function(){return{api:null}},created:function(){var t=this;if(this.$store.getters.isAuth){var e=this.$store.getters.token;this.api=new s.a(e)}else this.$ons.notification.alert({message:"ログインしてください",callback:function(){t.$parent.pageStack=[i.a.Landing,i.a.Login]}})}}},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=(n(0),n(105));e.default={mixins:[s.a],data:function(){return{api:new a.a,email:"test@test.jp",password:"testtest"}},methods:{login:function(){var t=this;this.validate()&&this.api.auth(this.email,this.password).then(function(e){var n=e.data.token;t.$store.dispatch("setToken",n),t.pushPage(t.Page.TodoList)}).catch(function(e){console.log(e),t.$ons.notification.alert({title:"ログインエラー",message:"メールアドレスとパスワードを確認してください"})})},validate:function(){var t=this.$data,e=t.email,n=t.password;return""===e&&""===n?(this.$ons.notification.alert("メールアドレスとパスワードを入力してください"),!1):""===e?(this.$ons.notification.alert("メールアドレスを入力してください"),!1):""!==n||(this.$ons.notification.alert("パスワードを入力してください"),!1)}},created:function(){}}},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(121),a=(n(0),n(58)),i=n.n(a);e.default={mixins:[s.a],data:function(){return{selectTodo:{},todos:[{id:1,name:"花火大会",base_point:"300"},{id:2,name:"手持ち花火",base_point:"100"},{id:3,name:"夏祭り",base_point:"300"},{id:4,name:"虫取り",base_point:"50"},{id:5,name:"キャンプ",base_point:"300"},{id:6,name:"キャンプファイヤー",base_point:"700"},{id:7,name:"BBQ",base_point:"100"},{id:8,name:"肝試し",base_point:"100"},{id:9,name:"プール",base_point:"50"},{id:10,name:"ナイトプール",base_point:"1000"},{id:11,name:"海水浴",base_point:"150"},{id:12,name:"ビーチバレー",base_point:"100"},{id:13,name:"サーフィン",base_point:"100"},{id:14,name:"川遊び",base_point:"150"},{id:15,name:"スイカ割り",base_point:"400"},{id:16,name:"夏フェス",base_point:"300"},{id:17,name:"流しそうめん",base_point:"100"},{id:18,name:"天体観測",base_point:"100"}],imageSrc:"https://placehold.jp/cccccc/989898/240x200.png?text=No%20Image",postingWait:!1,postResultShow:!0,postResult:{image_path:"https://real-juice.s3-ap-northeast-1.amazonaws.com/posts-1503450265.png",point:"1000",todo:{name:"ナイトプール",base_point:"1000"},total_point:1240,getBonuses:[{name:"異性と一緒ボーナス",point:"200"},{name:"アウトドアボーナス",point:"10"},{name:"青春ボーナス",point:"30"}],getTitle:[{name:"リア充への第一歩",point:"100"}]}}},methods:{selectImage:function(t){var e=this,n=t.target.files[0],s=new FileReader;s.onload=function(t){e.imageSrc=t.target.result},s.readAsDataURL(n)},post:function(){var t=this;this.postingWait=!0,this.api.postPost({image_base64:this.imageSrc,todo_id:this.selectTodo.id,text:""}),setTimeout(function(){t.postingWait=!1,t.postResultShow=!0},5e3)}},components:{PostResult:i.a}}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(121);e.default={mixins:[s.a],data:function(){return{userTodos:[],query:"",unachieved:!1}},computed:{todos:function(){var t=this;return this.userTodos.filter(function(e){return-1!=e.name.indexOf(t.query)}).filter(function(e){return!t.unachieved||0==e.achievement})}},created:function(){var t=this;this.api.feachMeTodos().then(function(e){t.userTodos=e.data})}}},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),a=(n.n(s),n(7)),i=(n.n(a),n(3)),o=n(10),r=n.n(o),c=n(6),l=n(9),u=n.n(l);i.a.config.productionTip=!1,i.a.use(r.a),new i.a({el:"#app",store:c.a,template:"<App/>",components:{App:u.a}})},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e,n){"use strict";var s=n(0);e.a={data:function(){return{Page:s.a}},methods:{pushPage:function(t){this.$parent.pageStack.push(t)}}}},23:function(t,e,n){var s=n(1)(n(12),n(27),null,null,null);t.exports=s.exports},24:function(t,e,n){function s(t){n(18)}var a=n(1)(n(13),n(30),s,"data-v-51be4ad7",null);t.exports=a.exports},25:function(t,e,n){function s(t){n(19)}var a=n(1)(n(14),n(31),s,"data-v-a6cae5f4",null);t.exports=a.exports},26:function(t,e,n){function s(t){n(63)}var a=n(1)(n(15),n(64),s,"data-v-408859a6",null);t.exports=a.exports},27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-page",{attrs:{id:"landing"}})},staticRenderFns:[]}},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack}})},staticRenderFns:[]}},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"landing"}},[n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("div",{staticClass:"center"},[n("h1",[t._v("LOGIN")]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("メールアドレス")]),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"example@yahoo.co.jp"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("パスワード")]),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"100px"}},[n("button",{staticClass:"login-btn",on:{click:t.login}},[t._v("ログイン")])]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.window.open("http://google.com","_system")}}},[t._v("アカウント作成")])])])])])},staticRenderFns:[]}},31:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"post-form"}},[n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("リア充っぽい投稿")]),t._v(" "),n("form",{staticStyle:{padding:"0 20px"}},[n("div",{staticClass:"row"},[n("label",{attrs:{for:"todo"}},[t._v("やったリア充っぽいこと")]),n("br"),t._v(" "),n("v-ons-select",{attrs:{id:"todo"},model:{value:t.selectTodo,callback:function(e){t.selectTodo=e},expression:"selectTodo"}},t._l(t.todos,function(e){return n("option",{domProps:{value:e}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))],1),t._v(" "),n("div",{staticClass:"row",attrs:{id:"input-image"}},[n("label",{attrs:{for:""}},[t._v("リア充っぽい写真")]),n("br"),t._v(" "),n("div",{staticClass:"display-image"},[n("img",{attrs:{src:t.imageSrc,alt:""}})]),t._v(" "),n("label",{attrs:{for:"select-image",id:"select-image-label"}},[t._v("写真を選ぶ")]),t._v(" "),n("input",{attrs:{type:"file",id:"select-image"},on:{change:function(e){t.selectImage(e)}}})]),t._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("button",{attrs:{type:"button",id:"post-button"},on:{click:t.post}},[t._v("投稿")])])]),t._v(" "),n("v-ons-modal",{attrs:{visible:t.postingWait,id:"post-wait"}},[n("p",{staticStyle:{"text-align":"center"}},[t._v("\n                投稿中 "),n("v-ons-icon",{attrs:{icon:"fa-spinner",spin:""}})],1)]),t._v(" "),n("v-ons-modal",{attrs:{visible:t.postResultShow,options:{animation:"fade"},id:"result-modal"}},[n("post-result",{attrs:{result:t.postResult}}),t._v(" "),n("button",{attrs:{type:"button",id:"close-result-button"},on:{click:function(e){t.postResultShow=!1}}},[t._v("閉じる")])],1)],1)])])},staticRenderFns:[]}},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(68),a=n.n(s);e.default={props:["result"],computed:{totalBonusPoint:function(){return 0==this.result.getBonuses.length?0:this.result.getBonuses.reduce(function(t,e){return t+parseInt(e.point)},0)},totalTitlePoint:function(){return 0==this.result.getTitle.length?0:this.result.getTitle.reduce(function(t,e){return t+parseInt(e.point)},0)}},mounted:function(){for(var t=0;t<=100;t++){var e=Math.ceil(50*Math.random()),n=Math.ceil(50*Math.random()),s=Math.ceil(10*Math.random()),i=Math.ceil(5*Math.random()),o=Math.ceil(5*Math.random());a()(this.$el).append('<div class="bubble move'+e+" pos"+n+'"><div class="scale'+s+'"><div class="shake'+o+'"><span class="item stretch'+i+'"></span></div></div>')}}}},58:function(t,e,n){function s(t){n(69)}var a=n(1)(n(57),n(59),s,null,null);t.exports=a.exports},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-result"},[n("h2",{staticStyle:{margin:"0","text-align":"center"}},[t._v("投稿結果")]),t._v(" "),n("div",[n("h3",{staticStyle:{margin:"0"}},[t._v("獲得リア充度")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"20px"}},[n("div",[t._v("\n                獲得リア充度："+t._s(t.result.total_point)+"ml\n            ")]),t._v(" "),n("div",[t._v("\n                累計リア充度："+t._s(t.result.total_point)+"ml\n            ")])]),t._v(" "),n("div",[n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("投稿リア充度")]),t._v(" "),n("div",{staticClass:"point-info"},[n("table",[n("tr",[n("td",[t._v(t._s(t.result.todo.name))]),n("td",[t._v("+"+t._s(t.result.todo.base_point)+"ml")])])])])]),t._v(" "),n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("獲得リア充ボーナス")]),t._v(" "),n("div",{staticClass:"point-info"},[t._l(t.result.getBonuses,function(e){return 0!=t.result.getBonuses.length?n("table",[n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v("+"+t._s(e.point)+"ml")])])]):n("div",[t._v("\n                        獲得したボーナスなし\n                    ")])}),t._v(" "),n("div",{staticClass:"point-total"},[t._v("\n                        合計ボーナスリア充度： "+t._s(t.totalBonusPoint)+"ml\n                    ")])],2)]),t._v(" "),n("section",{staticClass:"point-section"},[n("h3",{staticClass:"point-title"},[t._v("獲得称号")]),t._v(" "),n("div",{staticClass:"point-info"},[t._l(t.result.getTitle,function(e){return 0!=t.result.getTitle.length?n("table",[n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v("+"+t._s(e.point)+"ml")])])]):n("div",[t._v("\n                        獲得した称号なし\n                    ")])}),t._v(" "),n("div",{staticClass:"point-total"},[t._v("\n                        合計称号リア充度： "+t._s(t.totalTitlePoint)+"ml\n                    ")])],2)])])])])},staticRenderFns:[]}},6:function(t,e,n){"use strict";var s=n(3),a=n(33);s.a.use(a.a),e.a=new a.a.Store({state:{token:null},mutations:{setToken:function(t,e){return t.token=e}},actions:{setToken:function(t,e){var n=t.commit;localStorage.setItem("token",e),n("setToken",e)}},getters:{isAuth:function(t){return null!=t.token},token:function(t){return t.token}}})},63:function(t,e){},64:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",{attrs:{id:"todo-list"}},[n("v-ons-toolbar",{staticStyle:{backgroundColor:"#4282cc"}},[n("div",{staticClass:"center"},[t._v("リア充っぽいことリスト")])]),t._v(" "),n("div",{staticClass:"bg"},[n("div",{staticClass:"bg-over"},[n("p",{staticStyle:{padding:"0 10px"}},[n("v-ons-search-input",{attrs:{placeholder:"Search"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"bottom"}},[n("v-ons-checkbox",{attrs:{"input-id":"unachieved"},model:{value:t.unachieved,callback:function(e){t.unachieved=e},expression:"unachieved"}}),t._v(" "),n("label",{attrs:{for:"unachieved"}},[t._v("未達成のみ")])],1)],1),t._v(" "),n("v-ons-list",[t._l(t.todos,function(e){return[n("v-ons-list-header",[n("v-ons-icon",{attrs:{icon:"zmdi-star, material:md-zmdi-star"}}),t._v("\n                        "+t._s(e.name)+"\n                    ")],1),t._v(" "),n("v-ons-list-item",[n("div",{staticClass:"left"},[t._v("\n                            投稿数"+t._s(e.posts.length)+"回\n                        ")]),t._v(" "),n("div",{staticClass:"right"},[n("span",{staticStyle:{"text-align":"right",width:"100%"}},[t._v("合計"+t._s(e.total_point)+"ml")])])])]})],2)],1)]),t._v(" "),n("v-ons-fab",{staticStyle:{backgroundColor:"#4282cc"},attrs:{position:"bottom right"},on:{click:function(e){t.pushPage(t.Page.PostForm)}}},[n("v-ons-icon",{attrs:{icon:"md-edit"}})],1)],1)},staticRenderFns:[]}},69:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e,n){function s(t){n(17)}var a=n(1)(n(11),n(28),s,"data-v-2e70f31a",null);t.exports=a.exports}},[16]);
//# sourceMappingURL=app.906dc4610882044d9652.js.map