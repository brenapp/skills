webpackJsonp([0],{"0FW+":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return f});var i=n("EBst"),a=(n.n(i),n("ZAL5")),u=n.n(a),c=n("vsei"),l=n.i(i.h)("h1",null,"Home"),s=n.i(i.h)("p",null,"This is the Home component."),p=n.i(i.h)(c.a,{type:2,program:"VRC"}),f=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(){return n.i(i.h)("div",{class:u.a.home},l,s,p)},e}(i.Component)},"6b5n":function(){},"7OxD":function(){},ZAL5:function(t){t.exports={home:"home__2Q5nZ"}},u5aD:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n("EBst"),a=(n.n(i),n("jM6C")),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list",e._mdcProps=["dense","two-line"],e}return o(e,t),e.prototype.materialDom=function(t){var e=this;return t.interactive?n.i(i.h)("nav",u({ref:function(t){return e.control=t}},t),t.children):n.i(i.h)("ul",u({},t,{ref:function(t){return e.control=t}}),t.children)},e}(a.a),l=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-item",e}return o(e,t),e.prototype.materialDom=function(t){var e=this;return n.i(i.h)("li",u({role:"option"},t,{ref:function(t){return e.control=t}}),t.children)},e}(a.a),s=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-item",e}return o(e,t),e.prototype.componentDidMount=function(){t.prototype.attachRipple.call(this)},e.prototype.materialDom=function(t){var e=this;return n.i(i.h)("a",u({role:"option"},t,{ref:function(t){return e.control=t}}),t.children)},e}(a.a),p=function(t){function e(){var e=r(this,t.call(this));return e.componentName="mdc-list-item__icon",e}return o(e,t),e.prototype.getProxyClassName=function(t){var e=[];return t["start-detail"]=t["start-detail"]||!0,t["end-detail"]?e.push("mdc-list-item__end-detail"):t["start-detail"]&&e.push("mdc-list-item__start-detail"),e.join(" ")},e.prototype.materialDom=function(t){var e=this,r="material-icons "+this.getProxyClassName(t);return n.i(i.h)("i",u({className:r,"aria-hidden":"true"},t,{ref:function(t){return e.control=t}}),t.children)},e}(a.a),f=function(t){function e(){var e=r(this,t.call(this));return e.componentName="mdc-list-item__avatar",e}return o(e,t),e.prototype.materialDom=function(e){var r=this;return n.i(i.h)("img",u({},e,{className:t.prototype.getProxyClassName.call(this,e)},e,{ref:function(t){return r.control=t},width:e.width||"56",height:e.height||"56",alt:e.alt||""}))},e}(p),h=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-divider",e._mdcProps=["inset"],e}return o(e,t),e.prototype.materialDom=function(t){var e=this;return n.i(i.h)("li",u({role:"separator"},t,{ref:function(t){return e.control=t}}))},e}(a.a),m=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-item__text",e}return o(e,t),e.prototype.materialDom=function(t){var e=this;return n.i(i.h)("span",u({},t,{ref:function(t){return e.control=t}}),t.children)},e}(a.a),d=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-item__text__primary",e}return o(e,t),e}(m),y=function(t){function e(){var e=r(this,t.call(this));return e.componentName="list-item__text__secondary",e}return o(e,t),e}(m);c.Item=l,c.LinkItem=s,c.ItemIcon=p,c.ItemAvatar=f,c.Divider=h,c.TextContainer=m,c.PrimaryText=d,c.SecondaryText=y,e.a=c},vsei:function(t,e,n){"use strict";function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return p});var a=n("EBst"),u=(n.n(a),n("6b5n")),c=(n.n(u),n("u5aD")),l=n("7OxD"),s=(n.n(l),n.i(a.h)("p",null,"Loading....")),p=function(t){function e(){for(var e,n,r,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(a))),n.state={loaded:!1},r=e,o(n,r)}return i(e,t),e.prototype.makeAPICall=function(t){var e=t.type,n=t.season;return fetch("https://api.vexdb.io/v1/get_skills?type="+e+"&season="+n).then(function(t){return t.json()})},e.prototype.componentDidMount=function(){var t=this,e=this.props,n=e.type,r=void 0===n?2:n,o=e.program,i=void 0===o?"VRC":o,a=e.season;this.makeAPICall({type:r,program:i,season:void 0===a?"In The Zone":a}).then(function(e){console.log(e),t.setState({list:e.result,loaded:!0})})},e.prototype.render=function(t,e){var o=e.loaded,i=e.list;return r(t),o?n.i(a.h)("div",null,n.i(a.h)(c.a,null,i.map(function(t){return n.i(a.h)(c.a.Item,{ripple:!0},t.score)}))):s},e}(a.Component)}});
//# sourceMappingURL=0.chunk.02cb7.js.map