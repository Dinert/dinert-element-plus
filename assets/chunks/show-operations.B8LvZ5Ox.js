import{d as l,h as n,G as r,o as d,b as c,w as t,a as s}from"./framework.OWterPJr.js";const b=l({__name:"show-operations",setup(p){const a=n({table:{pagination:{},tableColumns:[{prop:"date",label:"时间",show(){return!0}},{prop:"name",label:"名称",checked:!1},{prop:"address",label:"地址",children:[{prop:"address1",label:"地址1",checked:!1},{prop:"address2",label:"地址2"}]},{prop:"operations",label:"操作",setting:!0,operations:{edit:{message:"编辑",click:(o,m,e)=>{console.log(e,"itemmmmmmmmmmmmmmm")}},second1:{message:"二次确认",second:!0,click:(o,m,e)=>{console.log(e,"itemmmmmmmmmmmmmmm")},confirm:{title:"二次确认框...."}}}}],data:[{date:"2016-05-03",name:"Tom",address:"广州市区"},{date:"2016-05-02",name:"Tom",address:"广州市区"},{date:"2016-05-04",name:"Tom",address:"广州市区"},{date:"2016-05-01",name:"Tom",address:"广州市区"}]},footer:!1});return(o,m)=>{const e=r("dinert-table");return d(),c(e,{table:a.value.table,footer:a.value.footer},{column_name:t(()=>[s(" 自定义的名字 ")]),column_header_name:t(()=>[s(" 自定义的头部名称 ")]),_:1},8,["table","footer"])}}});export{b as default};
