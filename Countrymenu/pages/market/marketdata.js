// 静态模拟数据
const firstData = [
  {
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/18939938-31f6-4da6-98f9-264a919e37fa.jpeg"
  },
  {
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/960ee8e6-a42e-43dd-af9d-b3972c625515.jpeg"
  },
  {
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/a9f5703f-626f-4dfe-8506-3c34f028af32.jpeg"
  }
  
]

const secondData = [
  {
    guide_name: "蔬菜豆制品",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/6ef9a9fd-a18e-422c-9526-b6e5adcbc890.png"
  },
  {
    guide_name: "肉禽蛋",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/b31d209d-ebb3-4d29-ada2-160cd4bd7259.png"
  },
  {
    guide_name: "海鲜水产",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/e76c6a41-6a0e-48a1-ab1a-668f4e7fdcc0.png"
  },
  {
    guide_name: "水果鲜花",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/1bcee70b-86d0-4e8d-9f16-930208c6113d.png"
  },
  {
    guide_name: "乳品",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/0f1f5bea-6774-4529-9005-36f932f28462.png"
  },
  {
    guide_name: "粮油调味",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/d1386554-5453-4a17-8b5c-9f98dabb82d5.png"
  },
  {
    guide_name: "酒水饮料",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/5f183e59-6548-45be-8660-a0d3758d822a.png"
  },
  {
    guide_name: "熟食预制菜",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/13/982aeee6-6a68-4408-8c54-65d0e52fda10.png"
  }
  
]

const thirdData = [
  {
    goods_name: "妃子笑荔枝 250g",
    goods_describe:"甜蜜多汁|核小肉厚",
    goods_price:"￥13.89",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/9f90fa9a-302f-4340-944c-e85a0a7a0b08.jpg"
  },
  {
    goods_name: "春雪蜜桃 300g",
    goods_describe:"入口清脆|清新桃味入口清脆|清新桃味入口清脆|清新桃味",
    goods_price:"￥6.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/71c726ce-4a5f-48b4-87d7-8e363eb11ca9.jpg"
  },
  {
    goods_name: "千禧小番茄 500g",
    goods_describe:"酸甜可口|可以带皮吃",
    goods_price:"￥9.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/2fb89f4d-1d39-4101-813e-148882118812.jpg"
  },
  {
    goods_name: "妃子笑荔枝 250g",
    goods_describe:"甜蜜多汁|核小肉厚",
    goods_price:"￥13.89",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/9f90fa9a-302f-4340-944c-e85a0a7a0b08.jpg"
  },
  {
    goods_name: "春雪蜜桃 300g",
    goods_describe:"入口清脆|清新桃味入口清脆|清新桃味入口清脆|清新桃味",
    goods_price:"￥6.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/71c726ce-4a5f-48b4-87d7-8e363eb11ca9.jpg"
  },
  {
    goods_name: "千禧小番茄 500g",
    goods_describe:"酸甜可口|可以带皮吃",
    goods_price:"￥9.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/2fb89f4d-1d39-4101-813e-148882118812.jpg"
  },
  {
    goods_name: "妃子笑荔枝 250g",
    goods_describe:"甜蜜多汁|核小肉厚",
    goods_price:"￥13.89",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/9f90fa9a-302f-4340-944c-e85a0a7a0b08.jpg"
  },
  {
    goods_name: "春雪蜜桃 300g",
    goods_describe:"入口清脆|清新桃味入口清脆|清新桃味入口清脆|清新桃味",
    goods_price:"￥6.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/71c726ce-4a5f-48b4-87d7-8e363eb11ca9.jpg"
  },
  {
    goods_name: "千禧小番茄 500g",
    goods_describe:"酸甜可口|可以带皮吃",
    goods_price:"￥9.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/2fb89f4d-1d39-4101-813e-148882118812.jpg"
  },
  {
    goods_name: "妃子笑荔枝 250g",
    goods_describe:"甜蜜多汁|核小肉厚",
    goods_price:"￥13.89",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/9f90fa9a-302f-4340-944c-e85a0a7a0b08.jpg"
  },
  {
    goods_name: "春雪蜜桃 300g",
    goods_describe:"入口清脆|清新桃味入口清脆|清新桃味入口清脆|清新桃味",
    goods_price:"￥6.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/71c726ce-4a5f-48b4-87d7-8e363eb11ca9.jpg"
  },
  {
    goods_name: "千禧小番茄 500g",
    goods_describe:"酸甜可口|可以带皮吃",
    goods_price:"￥9.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/2fb89f4d-1d39-4101-813e-148882118812.jpg"
  },
  {
    goods_name: "妃子笑荔枝 250g",
    goods_describe:"甜蜜多汁|核小肉厚",
    goods_price:"￥13.89",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/9f90fa9a-302f-4340-944c-e85a0a7a0b08.jpg"
  },
  {
    goods_name: "春雪蜜桃 300g",
    goods_describe:"入口清脆|清新桃味入口清脆|清新桃味入口清脆|清新桃味",
    goods_price:"￥6.9",
    id: "62",
    funcPhoto: "https://dcdn.it120.cc/2022/05/11/71c726ce-4a5f-48b4-87d7-8e363eb11ca9.jpg"
  }
  
]

// 加载数据
const pushData = [
]

 
export {
  pushData,
  firstData,
  secondData,
  thirdData
}