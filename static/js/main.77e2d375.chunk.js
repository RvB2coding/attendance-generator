(window["webpackJsonpattendance-generator"]=window["webpackJsonpattendance-generator"]||[]).push([[0],{11:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),o=t.n(c),i=(t(17),t(7)),u=t(8),l=t(6),d=t(2),s=t(5),m=t.n(s),f=t(1),b="1.0.0";function p(e){return m()(e).format("YYYYMMDD")}var O=t(4);function g(){var e=Object(d.a)(["\n          margin: 10px auto 0 auto;\n          display: flex;\n          justify-content: space-around;\n        "]);return g=function(){return e},e}function j(){var e=Object(d.a)(["\n            margin: 0 auto;\n            display: flex;\n            width: 100%;\n            flex-direction: column;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            align-content: center;\n            @media screen and (min-width: 640px) {\n              width: 640px;\n              flex-direction: row;\n            }\n          "]);return j=function(){return e},e}function v(){var e=Object(d.a)(["\n            display: flex;\n            justify-content: center;\n          "]);return v=function(){return e},e}function h(){var e=Object(d.a)(["margin-top: 10px;"]);return h=function(){return e},e}function E(){var e=Object(d.a)(["margin-top: 10px;"]);return E=function(){return e},e}function x(){var e=Object(d.a)(["margin-top: 0; margin-bottom: 5px;"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["font-size: 1.5em; margin-bottom: 5px;"]);return y=function(){return e},e}function w(){var e=Object(d.a)(["\n          background-color: #222;\n          height: 100px;\n          padding: 20px;\n          color: white;\n        "]);return w=function(){return e},e}function N(){var e=Object(d.a)(["text-align: center;"]);return N=function(){return e},e}function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(t,!0).forEach(function(n){Object(i.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function I(){var e=Object(d.a)(["\n    margin: 5px;\n    box-sizing: border-box;\n    flex: 1 0 45%;\n  "]);return I=function(){return e},e}function A(){var e=Object(d.a)(["\nwidth: 100%;\nheight: 30px;\nbackground: #00d1b2;\nborder-radius: 4px;\nbox-shadow: none;\nborder: 1px solid transparent;\n:hover {\n  background: #00c4a7;\n}\n:active {\n  background: #00b89c;\n}\n"]);return A=function(){return e},e}function k(){var e=Object(d.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return k=function(){return e},e}function S(){var e=Object(d.a)(["\nwidth: 45%;\nheight: 250px;\n"]);return S=function(){return e},e}function Y(){var e=Object(d.a)(["\nwidth: 127px;\n"]);return Y=function(){return e},e}function M(){var e=Object(d.a)(["\npadding: 5px;\nborder: 1px solid rgba(0,0,0,0.2);\nmargin: 0 5px 0 5px;\nwidth: 65px;\n"]);return M=function(){return e},e}function P(){var e=Object(d.a)(["\npadding-top: 2px;\npadding-bottom: 2px;\nmargin: 5px;\n"]);return P=function(){return e},e}var R=Object(f.a)(P()),G=Object(f.a)(M()),J=Object(f.a)(Y()),U=Object(f.a)(S()),z=Object(f.a)(k()),B=Object(f.a)(A()),T=function(e){return r.a.createElement("div",{className:Object(f.a)(I())},r.a.createElement("label",null,"Day ",e.index+1," ID"),r.a.createElement("input",{className:G,type:"number",value:e.entry.itemId,onChange:function(n){return e.changeItem(n.target.value,e.index)}}),r.a.createElement("label",null,"Amount"),r.a.createElement("input",{className:G,type:"number",value:e.entry.amount,onChange:function(n){return e.changeAmount(n.target.value,e.index)}}))};function V(e,n){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}var F=function(){var e=m()(),n=Object(a.useState)(e.format("YYYY-MM-DD")),t=Object(l.a)(n,2),c=t[0],o=t[1],d=Object(a.useState)(e.format("YYYY-MM-DD")),s=Object(l.a)(d,2),C=s[0],I=s[1],A=Object(a.useState)([]),k=Object(l.a)(A,2),S=k[0],Y=k[1],M=Object(a.useCallback)(function(e,n,t){Y([].concat(Object(u.a)(S.slice(0,t)),[D({},S[t],Object(i.a)({},e,n))],Object(u.a)(S.slice(t+1))))},[S]);Object(a.useEffect)(function(){if("undefined"!==typeof Storage){var e=localStorage.getItem("savedItems"),n=localStorage.getItem("saveVersion");try{null!==n&&"1"===n&&(e=JSON.parse(e))}catch(t){e=Array(20).fill({itemId:501,amount:1})}Y(null!==e?e:Array(20).fill({itemId:501,amount:1}))}},[]),Object(a.useEffect)(function(){localStorage.setItem("saveVersion","1"),localStorage.setItem("savedItems",JSON.stringify(S))},[S]);var P=Object(a.useMemo)(function(){return function(e,n,t){return"-- Generated with Secret's Attendance Generator version ".concat(b,"\nConfig = { StartDate = ").concat(p(n),", EndDate = ").concat(p(t)," }\nReward = {\n    ").concat(e.map(function(e,n){return"{ ".concat(n+1,", ").concat(e.itemId,", ").concat(e.amount," }")}).join(",\n    "),'\n}\n\nmain = function()\n    result, msg = InsertCheckAttendanceConfig(Config.EvendOnOff, Config.StartDate, Config.EndDate)\n    if not result == true then\n        return false, msg\n    end\n    for k, rewardtbl in pairs(Reward) do\n        result, msg = InsertCheckAttendanceReward(rewardtbl[1], rewardtbl[2], rewardtbl[3])\n        if not result == true then\n            return false, msg\n        end\n    end\n    return true, "success"\nend\n')}(S,c,C)},[S,c,C]),F=Object(a.useMemo)(function(){return function(e,n,t){return"# Generated with Secret's Attendance Generator version ".concat(b,"\nHeader:\n  Type: ATTENDANCE_DB\n  Version: 1\n  \nBody:\n  - Start: ").concat(p(n),"\n    End: ").concat(p(t),"\n    Rewards:\n").concat(e.map(function(e,n){return"      - Day: ".concat(n+1,"\n        ItemId: ").concat(e.itemId,"\n        Amount: ").concat(e.amount,"\n")}).join(""),"\n")}(S,c,C)},[S,c,C]),L=Object(a.useCallback)(function(){O.a.event({category:"User",action:"Downloaded Lua file"}),V("CheckAttendance.lub",P)},[P]),H=Object(a.useCallback)(function(){O.a.event({category:"User",action:"Downloaded YAML file"}),V("attendance.yml",F)},[F]);return r.a.createElement("div",{className:Object(f.a)(N())},r.a.createElement("header",{className:Object(f.a)(w())},r.a.createElement("h1",{className:Object(f.a)(y())},"Attendance Generator v.",b),r.a.createElement("h5",{className:Object(f.a)(x())},"for rAthena and RO Client"),r.a.createElement("h6",{className:Object(f.a)(E())},"\xa9 2018-2019 Jittapan P. All rights reserved.")),r.a.createElement("div",{className:Object(f.a)(h())},r.a.createElement("div",{className:Object(f.a)(v())},r.a.createElement("div",{className:R},r.a.createElement("label",{htmlFor:"start"},"Start date:"),r.a.createElement("input",{className:Object(f.b)(G,J),type:"date",id:"start",onChange:function(e){return o(e.target.value)},value:c})),r.a.createElement("div",{className:R},r.a.createElement("label",{htmlFor:"end"},"End date:"),r.a.createElement("input",{className:Object(f.b)(G,J),type:"date",id:"end",onChange:function(e){return I(e.target.value)},min:c,value:C}))),r.a.createElement("div",{className:Object(f.a)(j())},S.map(function(e,n){return r.a.createElement(T,{changeItem:function(e,n){return M("itemId",e,n)},changeAmount:function(e,n){return M("itemId",e,n)},index:n,entry:e})}))),r.a.createElement("div",{className:Object(f.a)(g())},r.a.createElement("div",{className:U},r.a.createElement("h2",null,"CheckAttendance.lub"),r.a.createElement("textarea",{className:z,value:P}),r.a.createElement("button",{className:B,onClick:L},"Download")),r.a.createElement("div",{className:U},r.a.createElement("h2",null,"attendance.yml"),r.a.createElement("textarea",{className:z,value:F}),r.a.createElement("button",{className:B,onClick:H},"Download"))))};O.a.initialize("UA-145842310-1"),O.a.pageview("/"),o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.77e2d375.chunk.js.map