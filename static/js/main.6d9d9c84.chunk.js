(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),s=n.n(r),c=(n(21),n(12)),o=n(7),l=n(8),u=n(2),m=n(14),d=n(13),h=(n(22),n(23),n(9)),p=n.n(h),v=n(11);var f=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(p.a,{className:"deleteicon",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))," "))}));return i.a.createElement("div",null,i.a.createElement(v.a,{duration:500,easing:"ease-in-out"},t)," ")},k=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.setUpdate=a.setUpdate.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6d9d9c84.chunk.js.map