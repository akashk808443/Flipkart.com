let images = [
  "https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_446_desktop_summer_200323_01_new.jpg",
  "https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_96.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/11042023-UHP-D-Main-P7-DNMXTS-Under299.jpg",
];

let slideshow = document.querySelector("#slideshow");
let id;
let i = 0;

id = setInterval(function () {
  if (i === images.length) {
    i = 0;
  }

  slideshow.innerHTML = null;

  let img = document.createElement("img");
  img.src = images[i];

  slideshow.append(img);

  i++;
}, 2000);

let electronicsData = [
  {
    name: "Mirrorless cameras",
    price: "From ₹57,999",
    img:
      "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
    details: "NCEMI | Prod. & more",
  },
  {
    name: "Apple iPhone (Purple 128GB)",
    price: "Now ₹1,19,999",
    img:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
    details: "3500 mAh Battery",
  },
  {
    name: "Best of shaver",
    price: "From ₹1,649",
    img:
      "https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
    details: "Havells & Phillips",
  },
  {
    name: "Projectors",
    price: "From ₹9,999",
    img:
      "https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
    details: "Zebronics",
  },
  {
    name: "Best of Trimmer",
    price: "From ₹336",
    img:
      "https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
    details: "MI,REALME & more",
  },
  {
    name: "Monitor",
    price: "From ₹8,279",
    img:
      "https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
    details: "DELL",
  },
  {
    name: "Power Banks",
    price: "From ₹57,999",
    img:
      "https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
    details: "MI,Realme & more",
  },
];

const appendData = (electronicsData) => {
  electronicsData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    let detail = document.createElement("p");
    detail.innerText = el.details;
    div.append(img, name, price, detail);
    document.querySelector("#firstboxA").append(div);
  });
};
appendData(electronicsData);

let beautyData=[
    {
        name:"Top selling stationary",
        img:"https://rukminim1.flixcart.com/image/612/612/khkvukw0-0/pen/6/s/c/8901765126245-hauser-original-imafxkck3g75whwf.jpeg?q=70",
        price:"From ₹ 49"
    },
    {
        name:"Remote control toys",
        img:"https://rukminim1.flixcart.com/image/612/612/kcrzki80/remote-control-toy/s/n/f/3d-led-light-sound-car-toy-with-remote-control-toy-for-kids-boy-original-imaftu23pyhvpewj.jpeg?q=70",
        price:"Up to 70% off"
    },
    {
        name:"Yoga Mat",
        img:"https://rukminim1.flixcart.com/image/612/612/xif0q/sport-mat/i/l/o/yoga-mat-for-men-women-fitness-mat-for-home-gym-workout-anti-original-imagnarf9jhmu2hp.jpeg?q=70",
        price:"From ₹ 159"
    },
    {
        name:"Soft Toys",
        img:"https://rukminim1.flixcart.com/image/612/612/k62i5jk0/stuffed-toy/m/3/w/6-feet-teddy-bear-jumbo-with-lovable-and-hug-able-teddy-180-cm-original-imafzmdukfzkkhfz.jpeg?q=70",
        price:"From 70% off"
    },
    {
        name:"Studio Headphones",
        img:"https://rukminim1.flixcart.com/image/612/612/kc3p30w0/headphone/i/h/z/k52-akg-original-imaftb5hptnuajfu.jpeg?q=70",
        price:"Up to 80% off"
    },
    {
        name:"Dry Fruits",
        img:"https://rukminim1.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70",
        price:"Up to 75% off"
    },
    {
        name:"Microphones",
        img:"https://rukminim1.flixcart.com/image/200/200/jwqpocw0/microphone-accessory/8/j/s/easy-way-wireless-handheld-bluetooth-mic-with-speaker-bluetooth-original-imafgtg9zgcwcdzg.jpeg?q=70",
        price:"Up to 70% off"
    }
]
const append2Data = (beautyData) => {
  beautyData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    div.append(img, name, price);
    document.querySelector("#firstboxB").append(div);
  });
};
append2Data(beautyData);

let fashionData=[
    {
        name:"Lehenga chowlis & Gowns",
        img:"https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/lehenga-choli/m/k/z/free-3-4-sleeve-puspar-lh-001-divastri-original-imagbarzwpevcr5e.jpeg?q=70",
        price:"Buy 3 get 30% off"
    },
    {
        name:"Kurta sets & more",
        img:"https://rukminim1.flixcart.com/image/200/200/l111lzk0/kurta/t/r/c/m-dafksp22daterracota-max-original-imagczshpt7mamjd.jpeg?q=70",
        price:"Up to 70% off"
    },
    {
        name:"Plazzos",
        img:"https://rukminim1.flixcart.com/image/200/200/kpu3frk0/trouser/n/i/k/30-foilcombo9661-trend-level-original-imag3zggwyrwtbz9.jpeg?q=70",
        price:"From ₹ 199"
    },
    {
        name:"Kids shorts & Jeans",
        img:"https://rukminim1.flixcart.com/image/200/200/kzsqykw0/kids-track-pant/4/u/g/6-9-months-gobs20-2470-white-babygo-original-imagbq8fuhu7dqyj.jpeg?q=70",
        price:"From ₹ 199"
    },
    {
        name:"Best selling styles",
        img:"https://rukminim1.flixcart.com/fk-p-flap/200/200/image/5aa98b7cee183286.jpg?q=70",
        price:"Up to 40% off"
    },
    {
        name:"Kids cothing",
        img:"https://rukminim1.flixcart.com/flap/200/200/image/4398b53c0596430f.jpg?q=70",
        price:"min.60% off"
    },
    {
        name:"Lavie,Capree allen solly",
        img:"https://rukminim1.flixcart.com/image/200/200/ksez24w0/hand-messenger-bag/w/z/z/amy-plus-md-satchel-ladies-handbag-hgge016022m3-satchel-lavie-original-imag5zj5aqrwgcdz.jpeg?q=70",
        price:"40% to 70% off"
    }
]

const append3Data = (fashionData) => {
  fashionData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    div.append(img, name, price);
    document.querySelector("#firstboxC").append(div);
  });
};
append3Data(fashionData);
let sportsData=[
    {
        name:"Fiction Books",
        img:"https://rukminim1.flixcart.com/image/200/200/l45xea80/book/s/x/j/the-canterville-ghost-original-imagf4kcadhzkhfd.jpeg?q=70",
        price:"Up to 70% off"
    },
    {
        name:"Tricycle and Rideones",
        img:"https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
        price:"Up to 60% off"
    },
    {
        name:"Puzzles and cubes",
        img:"https://rukminim1.flixcart.com/image/200/200/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70",
        price:"From ₹ 79"
    },
    {
        name:"Tea Powder",
        img:"https://rukminim1.flixcart.com/image/200/200/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=70",
        price:"Up to 75% off"
    },
    {
        name:"Academic Book",
        img:"https://rukminim1.flixcart.com/image/200/200/kqidx8w0/book/l/f/x/relativity-original-imag4hs7wfgwhphw.jpeg?q=70",
        price:"Under ₹ 250"
    },
    {
        name:"Breakfast Cereal",
        img:"https://rukminim1.flixcart.com/image/200/200/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=70",
        price:"Up to 75% off"
    },
    {
        name:"Carrom",
        img:"https://rukminim1.flixcart.com/image/612/612/xif0q/board/t/v/q/carrom-board-32-inch-full-size-best-seller-waterproof-for-original-imaggp5zegwgh9g6.jpeg?q=70",
        price:"From ₹ 200"
    }
]

const append4Data = (sportsData) => {
  sportsData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    div.append(img, name, price);
    document.querySelector("#firstboxD").append(div);
  });
};
append4Data(sportsData);
let homeData=[
    {
        name:"Hammers",
        img:"https://rukminim1.flixcart.com/image/200/200/k0y6cnk0/hammer/a/7/t/hmmr-488-comodo-original-imafkmdsxht96cqk.jpeg?q=70",
        price:"From ₹ 139"
    },
    {
        name:"Wall Decore Items",
        img:"https://rukminim1.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70",
        price:"Up to 80% off"
    },
    {
        name:"Mosqito Nets",
        img:"https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70",
        price:"From ₹ 139"
    },
    {
        name:"Live Plants",
        img:"https://rukminim1.flixcart.com/image/200/200/k0e66q80/plant-sapling/c/e/7/air-purifying-pothos-money-plant-with-imported-pot-1-water-original-imafk747aczgq6ze.jpeg?q=70",
        price:"From ₹ 149"
    },
    {
        name:"Mattress Protectors",
        img:"https://rukminim1.flixcart.com/image/200/200/l1jmc280/mattress-protector/w/g/e/shmp723612gy-sleepyhead-original-imagd37rhpjqngzk.jpeg?q=70",
        price:"From ₹ 150"
    },
    {
        name:"Artificials Plants",
        img:"https://rukminim1.flixcart.com/image/200/200/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70",
        price:"Up to 80% off"
    },
    {
        name:"Table Covers",
        img:"https://rukminim1.flixcart.com/image/200/200/kj36ky80-0/table-cover/a/s/2/circles-1-tc-circles-maroon-weavers-villa-original-imafyqmaamqrzyhb.jpeg?q=70",
        price:"From ₹ 199"
    }
]
const append5Data = (homeData) => {
  homeData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    div.append(img, name, price);
    document.querySelector("#firstboxE").append(div);
  });
};
append5Data(homeData);

let topdealsData=[
    {
        name:"Double Door Refrigerator",
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/refrigerator-new/t/x/s/-original-imaghtghjcf67haj.jpeg?q=70",
        price:"From ₹ 16,999"
    },
    {
        name:"Godrej Refrigerator",
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/refrigerator-new/i/r/g/-original-imagmrsabfmqmh5n.jpeg?q=70",
        price:"From ₹ 7,240"
    },
    {
        name:"Front Load Washing",
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/washing-machine-new/l/2/6/-original-imagqgajhsvwphz6.jpeg?q=70",
        price:"Buy Now"
    },
    {
        name:"Semi Automatic Washing",
        img:"https://rukminim1.flixcart.com/image/200/200/ku1k4280/washing-machine-new/r/t/x/mqsa60h5m-marq-by-flipkart-original-imag793fghyygmbg.jpeg?q=70",
        price:"Buy Now"
    },
    {
        name:"Single Door Refrigerator",
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/refrigerator-new/d/k/c/-original-imagpegp4kgx56kk.jpeg?q=70",
        price:"From ₹ 9,990"
    },
    {
        name:"Motorola Refrigerator",
        img:"https://rukminim1.flixcart.com/image/200/200/kg15ocw0/refrigerator-new/p/t/m/592hsmtb-na-motorola-original-imafwcn8yynzypvv.jpeg?q=70",
        price:"From ₹ 23,990"
    },
    {
        name:"Top Load Washing Machine",
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/washing-machine-new/y/v/5/-original-imagqjcnypg9czh7.jpeg?q=70",
        price:"Buy Now"
    }
]

const append6Data = (topdealsData) => {
  topdealsData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h6");
    name.innerText = el.name;
    let price = document.createElement("a");
    price.innerText = el.price;
    div.append(img, name, price);    document.querySelector("#firstboxF").append(div);
  });
};
append6Data(topdealsData);

