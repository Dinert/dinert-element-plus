import{d as l,h as n,G as r,o as c,b as p,w as t,a as s}from"./framework.frReJlQd.js";const g=l({__name:"slot-use",setup(d){const a=n({table:{pagination:{},tableColumns:[{prop:"date",label:"时间",show(){return!0}},{prop:"name",label:"名称"},{prop:"name2",label:"format名称",formatter(m,o,e,i){return"<span>false</span>"}},{prop:"address",label:"地址"},{prop:"operations",label:"操作",setting:!0,operations:{edit:{message:"编辑",click:(m,o,e)=>{console.log(e,"itemmmmmmmmmmmmmmm")}},delete:{message:"删除",click:(m,o,e)=>{console.log(e,"itemmmmmmmmmmmmmmm")}},other1:{message:"操作1",type:"danger",click:(m,o,e)=>{console.log(m,o,e,"itemmmmmmmmmmmmmmm")}},other2:{message:"操作2",type:"danger",click:(m,o,e)=>{console.log(e,"itemmmmmmmmmmmmmmm")}},other3:{message:"下发",second:"messageBox",click(m){console.log(m,"scopeeeeeeee")}}}}],data:[{date:"2016-05-03",name:"Tom",address:"广州市区"},{date:"2016-05-02",name:"Tom",address:"广州市区"},{date:"2016-05-04",name:"Tom",address:"广州市区"},{date:"2016-05-01",name:"Tom",address:"广州市区"}]},footer:!1});return(m,o)=>{const e=r("dinert-table");return c(),p(e,{table:a.value.table,footer:a.value.footer},{column_name:t(()=>[s(" 自定义的名字 ")]),column_header_name:t(()=>[s(" 自定义的头部名称 ")]),_:1},8,["table","footer"])}}});export{g as default};
