const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "PEN STAND",
    price: 199,
    description:"Our recyclable penstand is a testament to sustainable design and eco-conscious living. Made from 100% recycled materials, each pen stand is crafted through a meticulous process that transforms discarded plastics and paper into a stylish and functional desk accessory. The materials are cleaned, processed, and molded into a sleek shape that not only holds your pens and pencils but also adds a touch of elegance to your workspace. By opting for products made from recycled materials, you help reduce landfill waste and conserve natural resources. Make a responsible choice today and support a greener future with our recyclable pen stand!",
    colors: [
      {
        code: "black",
        img: "/static/penstand.jpg",
      },
      {
        code: "darkblue",
        img: "/static/penstand2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "FLOWER VASE",
    price: 499,
    description: "Elevate your home decor with our stunning recyclable flower vase,a perfect fusion of artistry and sustainability. Each vase is crafted from 100% recycled materials,including repurposed plastics and glass,which are carefully cleaned,processed, and molded into beautiful,functional designs. This eco-friendly approach not only reduces waste but also transforms discarded materials into a striking centerpiece for your living space. Its unique design complements any decor style, making it an ideal gift for eco-conscious friends or a stylish addition to your own home. Embrace sustainability and bring a touch of nature indoors with our recyclable flower vase—where beauty meets responsibility!",
    colors: [
      {
        code: "lightgray",
        img: "/static/flowervass.jpg",
      },
      {
        code: "green",
        img: "/static/vass.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "BAGS",
    price: 99,
    description:"Discover the perfect blend of style and sustainability with our recyclable bag, designed for the eco-conscious consumer. Made from 100% recycled materials, each bag is crafted through a careful process that transforms discarded plastics and textiles into durable, fashionable accessories. The materials are cleaned, processed, and woven into a sturdy fabric that can withstand daily use, making it an ideal choice for shopping, travel, or everyday errands. This bag is lightweight, reusable, and easy to clean, ensuring that you can use it time and time again without compromising on style. Make a positive change today—choose our recyclable bag and carry your values with you wherever you go!",
    colors: [
      {
        code: "lightgray",
        img: "/static/paperbags.jpg",
      },
      {
        code: "green",
        img: "/static/bag.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "FANCY CHAIR",
    price: 1499,
    description: "Transform your living space with our exquisite recyclable fancy chair, a perfect blend of elegance and eco-friendliness. Each chair is meticulously crafted from 100% recycled materials, including repurposed plastics and reclaimed wood, which are thoughtfully processed and designed to create a stunning piece of furniture. The innovative manufacturing process not only reduces waste but also ensures that each chair is both stylish and durable, providing comfort and sophistication to any room. Its unique aesthetic makes it a standout piece for any setting, whether it is a cozy reading book or a modern dining area. Elevate your space with style and sustainability—make this chair a part of your home today!",
    colors: [
      {
        code: "black",
        img: "/static/fancychair.jpg",
        
      },
      {
        code: "lightgray",
        img: "/static/chairinjsnew.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "TABLE LAMP",
    price: 699,
    description: "Illuminate your space with our stunning recyclable table lamp, a perfect fusion of modern design and environmental consciousness. Each lamp is crafted from 100% recycled materials, including repurposed plastics and metals, which are carefully processed and transformed into a stylish lighting solution. The innovative design not only enhances the aesthetic of any room but also reflects a commitment to sustainability, making it a responsible choice for eco-minded consumers. Its unique design complements various interior styles, from contemporary to rustic, making it a versatile addition to your home or office. Illuminate your life sustainably—choose our recyclable table lamp and brighten your space with purpose!",
    colors: [
      {
        code: "gray",
        img: "/static/tablelamp.jpg",
      },
      {
        code: "black",
        img: "/static/lamp.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDescription = document.querySelector(".productDescription");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDescription.textContent = choosenProduct.description;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
