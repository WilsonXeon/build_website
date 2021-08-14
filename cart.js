let apps = new Vue({
    el: '#app',
    data: {
        col:'',
        show:"all",
        isShowingCart: false,
        item:'',
        cols: [
            {src:"../build_website/testimg/【霧峰區農會】五甲地香米.jpg",itemId:"001",
            shop:"【霧峰區農會】", title: "五甲地香米", price:280, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰區農會】越光米.jpg",itemId:"002",
            shop:"【霧峰區農會】", title: "越光米", price:230, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰區農會】五甲地香米2KG.jpg",itemId:"003",
            shop:"【霧峰區農會】", title: "香米2KG", price:300, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰區農會】五甲地香米5KG.jpg",itemId:"004",
            shop:"【霧峰區農會】", title: "香米5KG", price:320, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【麻營農夫】越光米-白米.jpg",itemId:"005",
            shop:"【麻營農夫】", title: "越光米-白米", price:100, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【麻營農夫】越光米-糙米.jpg",itemId:"006",
            shop:"【麻營農夫】", title: "越光米-糙米", price:100, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【久盛農場】胚芽糙米.jpg",itemId:"007",
            shop:"【久盛農場】", title: "胚芽糙米10入", price:1000, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【久盛農場】黑糯紫米.jpg",itemId:"008",
            shop:"【久盛農場】", title: "黑糯紫米10入", price:1200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】金蕉米1.8KG.jpg",itemId:"009",
            shop:"【旗山農會】", title: "金蕉米1.8KG", price:150, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【小農之家】益全白米.jpg",itemId:"010",
            shop:"【小農之家】", title: "益全白米", price:250, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【小農之家】益全糙米.jpg",itemId:"011",
            shop:"【小農之家】", title: "益全糙米", price:200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【小農之家】益全胚芽米.jpg",itemId:"012",
            shop:"【小農之家】", title: "益全胚芽米", price:200, type:"rice", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【古坑合作社】有機蔬菜箱.jpg",itemId:"013",
            shop:"【古坑合作社】", title: "有機蔬菜箱", price:850, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【合家歡農物】山葵葉.jpg",itemId:"014",
            shop:"【合家歡農物】", title: "山葵葉", price:100, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【合家歡農物】韓國芝麻葉.jpg",itemId:"015",
            shop:"【合家歡農物】", title: "韓國芝麻葉", price:300, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【好好農場】愛文芒果一箱.jpg",itemId:"016",
            shop:"【好好農場】", title: "愛文芒果一箱", price:1360, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【埔心鄉農會】金蜜芒果.jpg",itemId:"017",
            shop:"【埔心鄉農會】", title: "金蜜芒果", price:350, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【大甲區農會】鮮芋塊.jpg",itemId:"018",
            shop:"【大甲區農會】", title: "鮮芋塊", price:100, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【我家農場】無毒栽種無花果.jpg",itemId:"019",
            shop:"【我家農場】", title: "無毒栽種無花果1斤", price:780, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【農舞台】柚蜂蜜禮盒.jpg",itemId:"020",
            shop:"【農舞台】", title: "柚蜂蜜禮盒", price:1250, type:"vegetable", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【一夫水產】無刺虱目魚肚.png",itemId:"021",
            shop:"【一夫水產】", title: "無刺虱目魚肚", price:140, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【一夫水產】野生船凍透抽.png",itemId:"022",
            shop:"【一夫水產】", title: "野生船凍透抽", price:200, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【一夫水產】鑽石水午仔魚.png",itemId:"023",
            shop:"【一夫水產】", title: "鑽石水午仔魚2尾", price:240, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【粿家幫】玉桂黑豬肉香腸.jpg",itemId:"024",
            shop:"【粿家幫】", title: "玉桂黑豬肉香腸", price:350, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【萬金畜牧場】元氣雞湯.jpg",itemId:"025",
            shop:"【萬金畜牧場】", title: "元氣雞湯", price:850, type:"meat", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【柳營農會】蝦米餅.jpg",itemId:"026",
            shop:"【柳營農會】", title: "蝦米餅", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【柳營農會】牛奶酥棒.jpg",itemId:"027",
            shop:"【柳營農會】", title: "牛奶酥棒", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【池上農會】池上米餅-醬燒.jpg",itemId:"028",
            shop:"【池上農會】", title: "池上米餅-醬燒", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【池上農會】池上米餅-起司.jpg",itemId:"029",
            shop:"【池上農會】", title: "池上米餅-起司", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】手工千層酥.jpg",itemId:"030",
            shop:"【旗山農會】", title: "手工千層酥", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】香蕉蛋捲.jpg",itemId:"031",
            shop:"【旗山農會】", title: "香蕉蛋捲", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】好蕉情千層酥禮盒.jpg",itemId:"032",
            shop:"【旗山農會】", title: "好蕉情千層酥禮盒", price:350, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰農會】酒粕香米捲盒裝.jpg",itemId:"033",
            shop:"【霧峰農會】", title: "酒粕香米捲盒裝", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰農會】黑芝麻酒粕香米捲盒裝.jpg",itemId:"034",
            shop:"【霧峰農會】", title: "黑芝麻酒粕香米捲盒裝", price:120, type:"snake", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【國姓農會】梅精錠.jpeg",itemId:"035",
            shop:"【國姓農會】", title: "梅精錠", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【國姓農會】甘梅潤喉片.jpeg",itemId:"036",
            shop:"【國姓農會】", title: "甘梅潤喉片", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【國姓農會】香梅片.jpeg",itemId:"037",
            shop:"【國姓農會】", title: "香梅片", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【國姓農會】黑糖薑錠.jpeg",itemId:"038",
            shop:"【國姓農會】", title: "黑糖薑錠", price:39, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】原味香蕉脆片.jpg",itemId:"039",
            shop:"【旗山農會】", title: "原味香蕉脆片", price:120, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【旗山農會】焦糖香蕉脆片.jpg",itemId:"040",
            shop:"【旗山農會】", title: "焦糖香蕉脆片", price:120, type:"candy", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰農會】南美濾掛咖啡.jpg",itemId:"041",
            shop:"【霧峰農會】", title: "南美濾掛咖啡", price:160, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【霧峰農會】哥倫比亞濾掛咖啡.jpg",itemId:"042",
            shop:"【霧峰農會】", title: "哥倫比亞濾掛咖啡", price:280, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【雅谷咖啡莊園】綜合濾掛咖啡-2盒組.jpg",itemId:"043",
            shop:"【雅谷咖啡莊園】", title: "綜合濾掛咖啡-2盒組", price:700, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【雅谷咖啡莊園】綜合咖啡豆組─濾掛.jpg",itemId:"044",
            shop:"【雅谷咖啡莊園】", title: "綜合咖啡豆組─濾掛", price:1200, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【臺中市農會】螢火蟲咖啡-水洗-10入掛耳包.jpg",itemId:"045",
            shop:"【臺中市農會】", title: "螢火蟲咖啡-水洗-10入掛耳包", price:360, type:"coffee", 
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【峰田小町】龍眼花茶.jpg",itemId:"046",
            shop:"【峰田小町】", title: "龍眼花茶", price:250, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【樸作良食】蘿勒花草茶.jpg",itemId:"047",
            shop:"【樸作良食】", title: "蘿勒花草茶", price:750, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            {src:"../build_website/testimg/【連記茶莊】有機蜜香紅茶.jpg",itemId:"048",
            shop:"【連記茶莊】", title: "有機蜜香紅茶", price:660, type:"tea",
            amount: 0, amountShow: 1, showingIcon: false},
            ],
        
    },
    methods:{
      
        addToCart (item) {
          item.amount += item.amountShow
            item.showingIcon = true
            setTimeout(() => {
                item.showingIcon = false
            }, 800)
        },

        minusOne (item) {
          item.amountShow--
          item.amountShow = (item.amountShow < 1) ? 1 : item.amountShow
          item.amount = item.amountShow
      },
      addOne (item) {
        item.amountShow++
        item.amountShow = (item.amountShow > 9) ? 9 : item.amountShow
        item.amount = item.amountShow
      },
    },
    computed:{
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
              return item.type != "rice" && item.type != "vegetable" && item.type != "meat"
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
          productsInCart () {
            
            return this.cols
                // 只顯示購買數量 > 0 的項目
                .filter(item => item.amount>0)
                // 算出每個產品的小計
                .map(item => {
                  item.sum = item.amount * item.price
                    return item
                })
        },
        // 目前購買的總金額
        total: function () {
          return this.productsInCart
              .reduce((sum, item) => (sum + item.sum), 0)
      }
      },
        
    
    });

