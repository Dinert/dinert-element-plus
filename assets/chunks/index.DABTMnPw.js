import{T as l}from"./theme.CjdhPuVR.js";import{d as m,G as p,o as c,b,N as i,Z as f,p as e}from"./framework.frReJlQd.js";const T=m({__name:"index",setup(h){const a=new l({header:{add:{message:"新增"},delete:{}},table:{pagination:{total:50},tableColumns:[{type:"selection"},{prop:"date",label:"时间"},{prop:"name",label:"名称"},{prop:"address",label:"地址"}],data:[{date:"2016-05-03",name:"Tom",address:"广州市区"},{date:"2016-05-02",name:"Tom",address:"广州市区"},{date:"2016-05-04",name:"Tom",address:"广州市区"},{date:"2016-05-01",name:"Tom",address:"广州市区"}]},footer:!0,form:{model:{},formItem:{name:{type:"input",label:"名称",options:{}},address:{type:"input",label:"地址",options:{}},date:{type:"date",label:"时间",options:{}}}}}),{table:o,footer:r,header:s,form:n}=a;return a.getTableParams=()=>({url:"",method:"post",data:{}}),a.search(),(u,g)=>{const d=p("dinert-table-page");return c(),b(d,i({table:e(o),form:e(n),footer:e(r),header:e(s)},f({sizeChange:t=>e(a).sizeChange(t),currentChange:t=>e(a).currentChange(t),search:()=>e(a).search(),reset:()=>e(a).resetSearch()})),null,16,["table","form","footer","header"])}}});export{T as default};
