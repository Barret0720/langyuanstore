import{a as l}from"./axios-L6U4YIEh.js";import{S as P}from"./sweetalert2.all-LHpgrSOc.js";import{L}from"./LangyuanLoading-ukyNieKr.js";import{P as x}from"./PaginationComponent-wonO-UPQ.js";import{_ as V,c as g,d as p,b as t,C as d,y as c,F as f,u as F,s as k,r as u,o as m,w as E,t as h,e as M}from"./index-dI7y6B7l.js";import"./commonjsHelpers-4gQjN7DL.js";var N={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:v,VITE_APP_API_NAME:_}=N,w={data(){return{isLoading:!0,pages:{},products:[],category:"",tempProduct:{},carts:{},status:{addCartLoading:"",changeCartNumLoading:""}}},methods:{getProduct(o=1,s=""){l.get(`${v}/v2/api/${_}/products?page=${o}&category=${s}`).then(a=>{this.products=a.data.products,this.pages=a.data.pagination,this.category=s,this.isLoading=!1}).catch(a=>{console.log(a.data.message)})},openModal(o){this.tempProduct=o,this.$refs.userModal.open()},addCart(o,s=1){const a={product_id:o,qty:s};this.status.addCartLoading=o,l.post(`${v}/v2/api/${_}/cart`,{data:a}).then(n=>{this.status.addCartLoading="",P.fire(n.data.message),this.$refs.userModal.close()}).catch(n=>{console.log(n)})},changeCartNum(o,s=1){const a={product_id:o.product_id,qty:s};this.status.changeCartNumLoading=o.id,l.put(`${v}/v2/api/${_}/cart/${o.id}`,{data:a}).then(n=>{this.status.changeCartNumLoading="",this.getCart()}).catch(n=>{console.log(n.response.data.message)})}},components:{LangyuanLoading:L,PaginationComponent:x},mounted(){this.getProduct()}},B=k('<div class="container"></div><div class="position-relative d-flex align-items-center justify-content-center" style="min-height:400px;"><div class="position-absolute" style="background-size:cover;top:0;bottom:0;left:0;right:0;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709404618785.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=oo2yt95kfXo6GVgQ%2FszSqGyOV0LZVCpDbF7Fa80OFYm44h9nnCRT7GzLlM3LGCenWNzb4H7TQHi29aYWxCV7Y0kUJb2qEhviyeMbV0i%2FWBZR5YrQ%2BtNvBQOXDZvp6Ffb27GEEVcs1%2F8SzCTMWVJxux7qi7DauVKsEM47RhsdpWNznsJW6m58Sr3iYpIuZsmdp0EfZGlqoPngkbIQFGMNFj%2B7D%2BtphUUm2x7iqgICnxFoaGo6%2FMhBhztbND3uFymwMU4CPMB0g%2FoZmeGmsyeTOE9qsCxKJCOvZSWHcVY%2FPRuFV%2B3yALgn%2BtfzQKFtmh%2FiPd9XdYBQ0cMi3cLQvghxMw%3D%3D);opacity:0.4;"></div><h2 class="fw-bold">愛牠，所以給牠最好的</h2></div><div class="bg-light py-4"><div class="container"><div class="row d-flex justify-content-end"><div class="col-md-3"><div class="input-group w-md-50 mt-md-0 mt-3"><input type="text" class="form-control rounded-0 border-primary" placeholder="要找什麼商品呢?"><div class="input-group-append"><button class="btn btn-primary rounded-0" type="button" id="search"><i class="bi bi-search-heart"></i></button></div></div></div></div></div></div>',3),A={class:"container mt-md-5 mt-3 mb-7"},I={class:"row"},S={class:"col-md-3 mb-sm-4"},z={class:"list-group list-group-flush"},D={class:"col-md-8"},G={class:"row"},T={class:"card product-card mb-sm-4 ms-md-5"},R=["src"],U={class:"card-body"},Q={class:"badge rounded-pill bg-primary mb-2"},$={class:"card-title fs-6 fw-bold"},O={class:"card-text"},W=["onClick"],Y=t("i",{class:"bi bi-cart-plus-fill me-2"},null,-1);function Z(o,s,a,n,i,r){const y=u("LangyuanLoading"),b=u("router-link"),C=u("PaginationComponent");return m(),g(f,null,[p(y,{active:i.isLoading,"onUpdate:active":s[0]||(s[0]=e=>i.isLoading=e)},null,8,["active"]),B,t("div",A,[t("div",I,[t("div",S,[t("div",z,[t("a",{href:"#",class:d(["list-group-item list-group-item-action",{active:i.category===""}]),onClick:s[1]||(s[1]=c(e=>r.getProduct("",""),["prevent"]))}," 全部商品 ",2),t("a",{href:"#",class:d(["list-group-item list-group-item-action",{active:i.category==="貓狗通用"}]),onClick:s[2]||(s[2]=c(e=>r.getProduct("","貓狗通用"),["prevent"]))},"貓狗通用",2),t("a",{href:"#",class:d(["list-group-item list-group-item-action",{active:i.category==="狗狗專用"}]),onClick:s[3]||(s[3]=c(e=>r.getProduct("","狗狗專用"),["prevent"]))},"狗狗專用",2),t("a",{href:"#",class:d(["list-group-item list-group-item-action",{active:i.category==="貓貓專用"}]),onClick:s[4]||(s[4]=c(e=>r.getProduct("","貓貓專用"),["prevent"]))},"貓貓專用",2)])]),t("div",D,[t("div",G,[(m(!0),g(f,null,F(i.products,e=>(m(),g("div",{class:"col-md-4 col-sm-6",key:e.id},[t("div",T,[p(b,{to:`/product/${e.id}`,class:"card-product-link"},{default:E(()=>[t("img",{src:e.imageUrl,class:"card-product-img"},null,8,R)]),_:2},1032,["to"]),t("div",U,[t("span",Q,h(e.category),1),t("h5",$,h(e.title),1),t("p",O,"NT$ "+h(e.price),1),t("a",{class:"btn btn-primary d-flex justify-content-center text-white",onClick:c(j=>r.addCart(e.id),["prevent"])},[Y,M("加入購物車")],8,W)])])]))),128))]),p(C,{pages:i.pages,onChangePages:r.getProduct,class:"d-flex justify-content-center mb-4 mb-md-6"},null,8,["pages","onChangePages"])])])])],64)}const st=V(w,[["render",Z]]);export{st as default};
