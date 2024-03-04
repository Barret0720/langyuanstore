import{a as i}from"./axios-L6U4YIEh.js";import{S as a}from"./sweetalert2.all-kdo4UVoD.js";import{L as w}from"./LangyuanFooter-IqsE0acB.js";import{_ as v,c as _,b as t,F as f,u as B,d as h,w as x,t as r,s as N,r as y,o as b,x as P,A,B as T,e as $}from"./index-AeMHqpyA.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./bootstrap.esm-owtkFIww.js";var V={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:c,VITE_APP_API_NAME:l}=V,k={data(){return{isLoading:!0,carts:{},status:{changeCartNumLoading:""}}},methods:{getCart(){i.get(`${c}/v2/api/${l}/cart`).then(e=>{this.carts=e.data.data}).catch(e=>{console.log(e.response.data.message)})},changeCartNum(e,s=1){const n={product_id:e.product_id,qty:s};this.status.changeCartNumLoading=e.id,i.put(`${c}/v2/api/${l}/cart/${e.id}`,{data:n}).then(u=>{this.status.changeCartNumLoading="",this.getCart()}).catch(u=>{console.log(u.response.data.message)})},deleteCartItem(e){a.fire({title:"確定刪除該品項?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{s.isConfirmed&&(i.delete(`${c}/v2/api/${l}/cart/${e}`).then(n=>{this.getCart()}).catch(n=>{console.log(n.response.data.message)}),a.fire({title:"已刪除成功",icon:"success"}))})},deleteCartAll(){a.fire({title:"確定清空購物車?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(e=>{e.isConfirmed&&i.delete(`${c}/v2/api/${l}/carts`).then(s=>{this.getCart(),a.fire({title:"已清空購物車",icon:"success"})}).catch(s=>{console.log(s),a.fire({icon:"error",title:s.response.data.message})})})}},components:{LangyuanFooter:w},mounted(){this.getCart()}},I={class:"container mt-5"},L={class:"mt-3"},E={class:"row"},S={class:"col-md-8"},R={class:"table"},U=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0",style:{width:"300px"}},"品名"),t("th",{scope:"col",class:"border-0",style:{width:"200px"}},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"小計"),t("th",{scope:"col",class:"border-0"})])],-1),D={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},M={class:"mb-0 fw-bold my-3 d-inline-block"},q={class:"border-0 align-middle"},F={class:"input-group input-group-sm"},z={class:"input-group mb-3"},O=["onUpdate:modelValue","disabled","onChange"],j={class:"input-group-text bg-secondary3",id:"basic-addon2"},G={class:"border-0 align-middle",style:{"max-width":"160px"}},H={class:"mb-0 ms-auto text-end"},J={class:"border-0 align-middle text-center"},K=["onClick"],Q=N('<div class="input-group w-50 mb-3"><input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-primary border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><i class="bi bi-send-fill"></i></button></div></div>',1),W=t("button",{type:"button",class:"btn btn-outline-primary mb-5 mt-3"},[t("i",{class:"bi bi-chevron-compact-left"}),$(" 回到商品專區 ")],-1),X={class:"col-md-4"},Y={class:"border p-4 mb-4"},Z=t("h4",{class:"fw-bold mb-4"},"購物明細",-1),tt={class:"table text-muted border-bottom"},et=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),ot={class:"text-end border-0 px-0 pt-4"},st=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),nt={class:"d-flex justify-content-between mt-4"},at=t("p",{class:"mb-0 h4 fw-bold"},"Total",-1),rt={class:"mb-0 h4 fw-bold"},dt=t("button",{type:"submit",class:"btn btn-primary w-100 mt-4"},"輸入訂購人資訊",-1);function it(e,s,n,u,d,m){const g=y("router-link"),C=y("langyuan-footer");return b(),_(f,null,[t("div",I,[t("div",L,[t("div",E,[t("div",S,[t("table",R,[U,t("tbody",null,[(b(!0),_(f,null,B(d.carts.carts,o=>(b(),_("tr",{class:"border-bottom border-top",key:o.id},[t("th",D,[t("td",{style:P([{width:"72px",height:"72px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4),t("p",M,r(o.product.title),1)]),t("td",q,[t("div",F,[t("div",z,[A(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":p=>o.qty=p,disabled:o.id===d.status.changeCartNumLoading,onChange:p=>m.changeCartNum(o,o.qty)},null,40,O),[[T,o.qty]]),t("span",j,r(o.product.unit),1)])])]),t("td",G,[t("p",H,"NT$"+r(o.total),1)]),t("td",J,[t("i",{type:"button",class:"bi bi-trash3 text-danger fs-5",onClick:p=>m.deleteCartItem(o.id)},null,8,K)])]))),128))])]),Q,h(g,{to:"/products"},{default:x(()=>[W]),_:1})]),t("div",X,[t("div",Y,[Z,t("table",tt,[t("tbody",null,[t("tr",null,[et,t("td",ot,"NT$"+r(d.carts.final_total),1)]),st])]),t("div",nt,[at,t("p",rt,"NT$"+r(d.carts.final_total),1)]),h(g,{to:"/order-confirmation"},{default:x(()=>[dt]),_:1})])])])])]),h(C)],64)}const bt=v(k,[["render",it]]);export{bt as default};
