let componentCart = {
  data: function () {
    return {
      newAdd: []
    }
  },
  mounted() {
    //將儲存的商品資訊(add)取出，由newAdd渲染畫面
    let add = localStorage.getItem('add')
      if(add !=null){
        this.newAdd = JSON.parse(add)
        }
      },
  methods:{
        //減少購買數量
        minusOne (item) {
          item.amountShow--
          item.amountShow = (item.amountShow < 1) ? 1 : item.amountShow
          this.sum(item)
          this.updataCart()
        },
        //增加購買數量
        addOne (item) {
          item.amountShow++
          item.amountShow = (item.amountShow > 9) ? 9 : item.amountShow
          
          this.sum(item)
          this.updataCart()
        },
        //刪除商品
        remove (item){
          let index = this.newAdd.indexOf(item)
          this.newAdd.splice(index,1)
          this.updataCart()
        },
        //儲存新資訊到舊的key
        updataCart() {
          localStorage.setItem("add", JSON.stringify(this.newAdd))
        },
        //小計
        sum(item){
          item.sum = item.amountShow * item.price
          return item
        },
        
  },
  computed:{
    //目前購買的總金額
    total: function () {
      let total=0;
      for(let i in this.newAdd){
        total+=this.newAdd[i].price*this.newAdd[i].amountShow;
      }
      return total;
    },
  },
  template:
        `<table>
         <div class="item" v-for="item of newAdd">
        <img :src="item.src" alt="圖片失效" class="img">
            <p class="itemName">{{ item.shop }}<br>{{ item.title }}</p>
                <div class="formPrice">
                    <button class="round" @click="minusOne(item)">-</button>
                    <span>{{ item.amountShow }}</span>
                    <button class="round" @click="addOne(item)">+</button>
                    <p class="price">NT.{{ item.price }}</p>
                    
                    <button class="buttonDel" @click="remove(item)">×</button>
                </div>  
        </div>

        <div class="radio">
        
            <label>
                <input type="checkbox" value="cupon">
                <span style="font-weight: 600; color:#A18559;">使用折價券 (請先打勾，於下一步輸入序號)</span>
            </label>
            
            <p class="total"><span>總共 NT.</span>{{ total }}</p>
            <a href="???" class="buttonNext">下一步 ▶</a>
            </div>
            
            </table>`,
      
  }

let app = new Vue({
    el: '#app',
    components: {
      'component-cart': componentCart
    },
    data:{
        add:[],
        show:"all",
        cols: [
            {src:"../../testimg/【霧峰區農會】五甲地香米.jpg",itemId:"001",
            shop:"【霧峰區農會】", title: "五甲地香米", price:280, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰區農會】越光米.jpg",itemId:"002",
            shop:"【霧峰區農會】", title: "越光米", price:230, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰區農會】五甲地香米2KG.jpg",itemId:"003",
            shop:"【霧峰區農會】", title: "香米2KG", price:300, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰區農會】五甲地香米5KG.jpg",itemId:"004",
            shop:"【霧峰區農會】", title: "香米5KG", price:320, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【麻營農夫】越光米-白米.jpg",itemId:"005",
            shop:"【麻營農夫】", title: "越光米-白米", price:100, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【麻營農夫】越光米-糙米.jpg",itemId:"006",
            shop:"【麻營農夫】", title: "越光米-糙米", price:100, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【久盛農場】胚芽糙米.jpg",itemId:"007",
            shop:"【久盛農場】", title: "胚芽糙米10入", price:1000, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【久盛農場】黑糯紫米.jpg",itemId:"008",
            shop:"【久盛農場】", title: "黑糯紫米10入", price:1200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】金蕉米1.8KG.jpg",itemId:"009",
            shop:"【旗山農會】", title: "金蕉米1.8KG", price:150, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【小農之家】益全白米.jpg",itemId:"010",
            shop:"【小農之家】", title: "益全白米", price:250, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【小農之家】益全糙米.jpg",itemId:"011",
            shop:"【小農之家】", title: "益全糙米", price:200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【小農之家】益全胚芽米.jpg",itemId:"012",
            shop:"【小農之家】", title: "益全胚芽米", price:200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【古坑合作社】有機蔬菜箱.jpg",itemId:"013",
            shop:"【古坑合作社】", title: "有機蔬菜箱", price:850, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【合家歡農物】山葵葉.jpg",itemId:"014",
            shop:"【合家歡農物】", title: "山葵葉", price:100, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【合家歡農物】韓國芝麻葉.jpg",itemId:"015",
            shop:"【合家歡農物】", title: "韓國芝麻葉", price:300, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【好好農場】愛文芒果一箱.jpg",itemId:"016",
            shop:"【好好農場】", title: "愛文芒果一箱", price:1360, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【埔心鄉農會】金蜜芒果.jpg",itemId:"017",
            shop:"【埔心鄉農會】", title: "金蜜芒果", price:350, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【大甲區農會】鮮芋塊.jpg",itemId:"018",
            shop:"【大甲區農會】", title: "鮮芋塊", price:100, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【我家農場】無毒栽種無花果.jpg",itemId:"019",
            shop:"【我家農場】", title: "無毒栽種無花果1斤", price:780, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【農舞台】柚蜂蜜禮盒.jpg",itemId:"020",
            shop:"【農舞台】", title: "柚蜂蜜禮盒", price:1250, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【一夫水產】無刺虱目魚肚.png",itemId:"021",
            shop:"【一夫水產】", title: "無刺虱目魚肚", price:140, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【一夫水產】野生船凍透抽.png",itemId:"022",
            shop:"【一夫水產】", title: "野生船凍透抽", price:200, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【一夫水產】鑽石水午仔魚.png",itemId:"023",
            shop:"【一夫水產】", title: "鑽石水午仔魚2尾", price:240, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【粿家幫】玉桂黑豬肉香腸.jpg",itemId:"024",
            shop:"【粿家幫】", title: "玉桂黑豬肉香腸", price:350, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【萬金畜牧場】元氣雞湯.jpg",itemId:"025",
            shop:"【萬金畜牧場】", title: "元氣雞湯", price:850, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【柳營農會】蝦米餅.jpg",itemId:"026",
            shop:"【柳營農會】", title: "蝦米餅", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【柳營農會】牛奶酥棒.jpg",itemId:"027",
            shop:"【柳營農會】", title: "牛奶酥棒", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【池上農會】池上米餅-醬燒.jpg",itemId:"028",
            shop:"【池上農會】", title: "池上米餅-醬燒", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【池上農會】池上米餅-起司.jpg",itemId:"029",
            shop:"【池上農會】", title: "池上米餅-起司", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】手工千層酥.jpg",itemId:"030",
            shop:"【旗山農會】", title: "手工千層酥", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】香蕉蛋捲.jpg",itemId:"031",
            shop:"【旗山農會】", title: "香蕉蛋捲", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】好蕉情千層酥禮盒.jpg",itemId:"032",
            shop:"【旗山農會】", title: "好蕉情千層酥禮盒", price:350, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰農會】酒粕香米捲盒裝.jpg",itemId:"033",
            shop:"【霧峰農會】", title: "酒粕香米捲盒裝", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰農會】黑芝麻酒粕香米捲盒裝.jpg",itemId:"034",
            shop:"【霧峰農會】", title: "黑芝麻酒粕香米捲盒裝", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【國姓農會】梅精錠.jpeg",itemId:"035",
            shop:"【國姓農會】", title: "梅精錠", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【國姓農會】甘梅潤喉片.jpeg",itemId:"036",
            shop:"【國姓農會】", title: "甘梅潤喉片", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【國姓農會】香梅片.jpeg",itemId:"037",
            shop:"【國姓農會】", title: "香梅片", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【國姓農會】黑糖薑錠.jpeg",itemId:"038",
            shop:"【國姓農會】", title: "黑糖薑錠", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】原味香蕉脆片.jpg",itemId:"039",
            shop:"【旗山農會】", title: "原味香蕉脆片", price:120, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【旗山農會】焦糖香蕉脆片.jpg",itemId:"040",
            shop:"【旗山農會】", title: "焦糖香蕉脆片", price:120, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰農會】南美濾掛咖啡.jpg",itemId:"041",
            shop:"【霧峰農會】", title: "南美濾掛咖啡", price:160, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【霧峰農會】哥倫比亞濾掛咖啡.jpg",itemId:"042",
            shop:"【霧峰農會】", title: "哥倫比亞濾掛咖啡", price:280, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【雅谷咖啡莊園】綜合濾掛咖啡-2盒組.jpg",itemId:"043",
            shop:"【雅谷咖啡莊園】", title: "綜合濾掛咖啡-2盒組", price:700, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【雅谷咖啡莊園】綜合咖啡豆組─濾掛.jpg",itemId:"044",
            shop:"【雅谷咖啡莊園】", title: "綜合咖啡豆組─濾掛", price:1200, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【臺中市農會】螢火蟲咖啡-水洗-10入掛耳包.jpg",itemId:"045",
            shop:"【臺中市農會】", title: "螢火蟲咖啡-水洗-10入掛耳包", price:360, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【峰田小町】龍眼花茶.jpg",itemId:"046",
            shop:"【峰田小町】", title: "龍眼花茶", price:250, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【樸作良食】蘿勒花草茶.jpg",itemId:"047",
            shop:"【樸作良食】", title: "蘿勒花草茶", price:750, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../../testimg/【連記茶莊】有機蜜香紅茶.jpg",itemId:"048",
            shop:"【連記茶莊】", title: "有機蜜香紅茶", price:660, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            ],
    },
    mounted() {

      let add = localStorage.getItem('add')
        if(add !=null){
          this.add = JSON.parse(add)
          }
        },
    methods:{
      //加入購物車
        addToCart (item) {
          //動畫
          item.amount += item.amountShow
            item.showingIcon = true
            setTimeout(() => {
                item.showingIcon = false
            }, 800)
            //計算小計
            this.sum(item)
            //更新到localstorage
            this.updataCart()
            //處理重複加入商品
            let findProduct = this.add.find(o => o.itemId === item.itemId)
            let rel = true
            if(findProduct){
              this.addOne (item)
              rel = false
              return;
            }
            else{
              this.add=[...this.add, item]
              localStorage.setItem('add', JSON.stringify(this. add));
            }
        },
        //商品數量減一
          minusOne (item) {
            item.amountShow--
            item.amountShow = (item.amountShow < 1) ? 1 : item.amountShow
            this.sum(item)
            this.updataCart()
          },
          //商品數量加一
          addOne (item) {
            item.amountShow++
            item.amountShow = (item.amountShow > 100) ? 100 : item.amountShow
            
            this.sum(item)
            this.updataCart()
          },
          //儲存更新後的購物資訊
          updataCart() {
            localStorage.setItem("add", JSON.stringify(this.add))
          },
          sum(item){
            item.sum = item.amountShow * item.price
            return item
          },
          
    },
    computed:{
      //左側菜單篩選商品種類
        filterList(){
        if(this.show === "food"){
            return this.cols.filter((item)=>{
                return item.type != "snake" && item.type != "candy"
                && item.type != "coffee" && item.type != "tea"
              })
          }else if(this.show === "rice"){
            return this.cols.filter((item)=>{
              return item.type === "rice"
            })
          }else if(this.show === "vegetable"){
            return this.cols.filter((item)=>{
              return item.type === "vegetable"
            })
          }else if(this.show === "meat"){
            return this.cols.filter((item)=>{
              return item.type === "meat"
                    })
          }else if(this.show === "dessert"){
            return this.cols.filter((item)=>{
              return item.type != "rice" && item.type != "vegetable"
               && item.type != "meat"
                    })
          }else if(this.show === "snake"){
            return this.cols.filter((item)=>{
              return item.type === "snake"
                })
          }else if(this.show === "candy"){
            return this.cols.filter((item)=>{
              return item.type === "candy"
                })  
          }else if(this.show === "coffee"){
            return this.cols.filter((item)=>{
              return item.type === "coffee"
                }) 
          }else if(this.show === "tea"){
            return this.cols.filter((item)=>{
              return item.type === "tea"
                })               
          }else{
            return this.cols
          }
        },
    //目前購買的總金額
    total: function () {
      let total=0;
      for(let i in this.add){
        total+=this.add[i].price*this.add[i].amountShow;
      }
      return total;
    },
        
        
      },
        
    
    });

   