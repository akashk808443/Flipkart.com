const Fetch = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const appendData = (data, parent) => {
  data.map((el) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.img;
    let price = document.createElement("p");
    price.innerText = "₹" + el.price;
    let name = document.createElement("p");
    name.innerText = el.displayName;

    div.append(img, price, name);
    parent.append(div);
  });
};
const appendData2 = (data, parent) => {
  data.map((el) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    let price = document.createElement("p");
    price.innerText = "₹" + el.price;
    let name = document.createElement("p");
    name.innerText = el.name;

    div.append(img, price, name);
    parent.append(div);
  });
};

export { Fetch, appendData, appendData2 };
