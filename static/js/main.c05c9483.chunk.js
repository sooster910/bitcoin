(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(253)},106:function(e,t,a){},107:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(54),l=a.n(r),i=(a(58),a(9)),s=a(11),o=a(17),u=a(18),m=a(21),h=a(19),d=a(15),p=a(20),g=(a(106),function(e){var t=e.height,a=e.width;return c.a.createElement("div",{className:"loading",style:{height:t,width:a}})});g.defaultProps={width:"30px",height:"30px"};var E=g,f="https://api.udilia.com/coins/v1",v=function(e){return e.json().then(function(t){return e.ok?t:Promise.reject(t)})},b=function(e){return e>0?c.a.createElement("span",{className:"percent-raised"},e,"% \u2191"):e<0?c.a.createElement("span",{className:"percent-fallen"},e,"% \u2193"):c.a.createElement("span",null,e)},N=(a(107),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={loading:!1,searchTerm:"",searchResult:[]},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleRedirect=e.handleRedirect.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleRedirect",value:function(e){this.setState(function(){return{searchTerm:"",searchResult:[]}}),this.props.history.push("/currency/".concat(e))}},{key:"handleChange",value:function(e){var t=this,a=e.target.value;if(console.log("input",a),this.setState(function(){return{searchTerm:a}}),!a)return"";this.setState(function(){return{loading:!0}}),fetch("".concat(f,"/autocomplete?searchQuery=").concat(a)).then(v).then(function(e){console.log("Success searchTerm",e),t.setState(function(){return{loading:!1,searchResult:e}})}).catch(function(e){console.log("Error",e)}),console.log("state",this.state)}},{key:"renderSearchResults",value:function(){var e=this,t=this.state,a=t.searchResult;return t.searchTerm?a.length>0?c.a.createElement("div",{className:"search-result-container"},a.map(function(t){return c.a.createElement("div",{key:t.id,className:"search-result",onClick:function(){return e.handleRedirect(t.id)}},t.name,"(",t.symbol,")")})):c.a.createElement("div",{className:"search-result-container"},c.a.createElement("div",{className:"search-no-result"},"No results found.")):""}},{key:"render",value:function(){return c.a.createElement("div",{className:"search-container"},c.a.createElement("span",{className:"search-icon"}," ",c.a.createElement("ion-icon",{name:"search"})," "),c.a.createElement("input",{className:"search-input",type:"text",placeholder:"Currency name",value:this.state.searchTerm,onChange:this.handleChange}),this.state.loading&&c.a.createElement("div",{className:"search-loading"},c.a.createElement(E,{width:"12px",height:"12px"})),this.renderSearchResults())}}]),t}(c.a.Component)),y=Object(s.f)(N);a(112);var k=function(){return c.a.createElement("header",null,c.a.createElement(i.b,{to:"/",className:"header-logo"},c.a.createElement("img",{src:"/image/bitcoin_logo.png",alt:"bitcoin_logo",className:"bitcoin-logo"}),c.a.createElement("div",{className:"header-title"},"CoinTracker")),c.a.createElement(y,null))},C=(a(113),Object(s.f)(function(e){return c.a.createElement("div",{className:"table-container"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"table-head"},c.a.createElement("tr",null,c.a.createElement("th",null,"Rank"),c.a.createElement("th",null,"Crypto currency"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Market Cap"),c.a.createElement("th",null,"24Hr Change"))),c.a.createElement("tbody",{className:"table-body"},e.currencies.map(function(t){return c.a.createElement("tr",{className:"table-body-row",key:t.id,onClick:function(){return e.history.push("/currency/".concat(t.id))}},c.a.createElement("td",{className:"table-rank"},t.rank),c.a.createElement("td",null,t.name),c.a.createElement("td",null,c.a.createElement("span",{className:"table-dollar"},"$"),t.price),c.a.createElement("td",null,c.a.createElement("span",{className:"table-market"},"$"),t.marketCap),c.a.createElement("td",null,b(t.percentChange24h)))}))))})),j=(a(114),function(e){return c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{className:"pagination-button",onClick:function(){return e.handlePaginationClick("prev")},disabled:e.page<=1},"\u2190"),c.a.createElement("span",{className:"pagination-info"},c.a.createElement("b",null,e.page)," of ",c.a.createElement("b",null,e.totalPages)),c.a.createElement("button",{className:"pagination-button",onClick:function(){return e.handlePaginationClick("next")},disabled:e.page>=e.totalPages},"\u2192"))}),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={loading:!1,currencies:[],error:null,totalPages:0,page:1},e.handlePaginationClick=e.handlePaginationClick.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrencies()}},{key:"fetchCurrencies",value:function(){var e=this;this.setState(function(){return{loading:!0}});var t=this.state.page;fetch("".concat(f,"/cryptocurrencies?page=").concat(t,"&perPage=20")).then(v).then(function(t){console.log(t),e.setState(function(){return{currencies:t.currencies,loading:!1,totalPages:t.totalPages}})}).catch(function(t){e.setState(function(){return{error:t.errorMessage,loading:!1}}),console.log("Error",t)})}},{key:"handlePaginationClick",value:function(e){var t=this,a=this.state.page;a="next"===e?a+1:a-1,this.setState({page:a},function(){t.fetchCurrencies()})}},{key:"render",value:function(){return this.state.loading?c.a.createElement(E,null):this.state.error?c.a.createElement("div",{className:"error"},this.state.error):c.a.createElement("div",null,c.a.createElement(C,{currencies:this.state.currencies}),c.a.createElement(j,{handlePaginationClick:this.handlePaginationClick,page:this.state.page,totalPages:this.state.totalPages}))}}]),t}(c.a.Component),P=(a(115),function(){return c.a.createElement("div",{className:"notfound"},c.a.createElement("h1",{className:"notfount-title"},"Oops! Page not found"),c.a.createElement(i.b,{to:"/",className:"notfound-link"},"Go to homepage"))}),w=(a(116),a(117),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={currency:{},loading:!1,error:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("didmount");var e=this.props.match.params.id;this.fetchCurrency(e)}},{key:"componentWillReceiveProps",value:function(e){if(console.log("didupdate"),this.props.location.pathname!==e.location.pathname){console.log("if state working",this.props.location.pathname);var t=e.match.params.id;this.fetchCurrency(t)}}},{key:"fetchCurrency",value:function(e){var t=this;fetch("".concat(f,"/cryptocurrencies/").concat(e)).then(v).then(function(e){console.log("currency",e),t.setState(function(){return{currency:e,loading:!1,error:null}})}).catch(function(e){console.log("error",e),t.setState(function(){return{loading:!1,error:e.errorMessage}})})}},{key:"render",value:function(){return console.log("currency",this.state.currency),this.state.loading?c.a.createElement("div",{className:"loading-container"},c.a.createElement(E,null)):this.state.error?c.a.createElement("div",{className:"error"},this.state.error):c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"detail-heading-container"},c.a.createElement(i.b,{to:"/",className:"back-page"},c.a.createElement("ion-icon",{name:"arrow-round-back"})),c.a.createElement("h1",{className:"detail-heading"},this.state.currency.name,"(",this.state.currency.symbol,")")),c.a.createElement("div",{className:"detail-container"},c.a.createElement("div",{className:"detail-item"},"Price"," ",c.a.createElement("span",{className:"detail-value"},"$",this.state.currency.price)),c.a.createElement("div",{className:"detail-item"},"Rank"," ",c.a.createElement("span",{className:"detail-value"},this.state.currency.rank)),c.a.createElement("div",{className:"detail-item"},"24H change"," ",c.a.createElement("span",{className:"detail-value"},"$",b(this.state.currency.percentChange24h))),c.a.createElement("div",{className:"detail-item"},c.a.createElement("span",{className:"detail-title"},"Market cap"),c.a.createElement("span",{className:"detail-dollar"},"$"),this.state.currency.marketCap),c.a.createElement("div",{className:"detail-item"},c.a.createElement("span",{className:"detail-title"},"Total supply"),c.a.createElement("span",{className:"detail-dollar"},"$"),this.state.currency.totalSupply),c.a.createElement("div",{className:"detail-item"},c.a.createElement("span",{className:"detail-title"},"volume24h"),c.a.createElement("span",{className:"detail-dollar"},"$"),this.state.currency.volume24h)))}}]),t}(c.a.Component));var S=function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",component:O,exact:!0}),c.a.createElement(s.a,{path:"/currency/:id",component:w,exact:!0}),c.a.createElement(s.a,{component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.c05c9483.chunk.js.map