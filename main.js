class Drink{
    constructor(name,price,image){
        this.name=name;
        this.price=price;
        this.image=image;
    }
}

let drinks=[
    new Drink("OrangeJuice","120","https://cdn.pixabay.com/photo/2020/04/02/18/01/glass-4996146_1280.png"), new Drink("AppleJuice","130","https://cdn.pixabay.com/photo/2016/08/10/22/22/juice-1584424_1280.jpg"),　new Drink("Soda","150","https://cdn.pixabay.com/photo/2021/12/02/18/46/soda-water-6841140_1280.jpg"), new Drink("Coke","160","https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_1280.jpg"), new Drink("GreenTea","90","https://cdn.pixabay.com/photo/2022/04/27/21/09/green-tea-7161333_1280.jpg"), new Drink("coffee","150","https://cdn.pixabay.com/photo/2020/02/19/16/27/coffee-4862622_1280.jpg"), new Drink("Beer","200","https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293_1280.jpg"), new Drink("Whisky","400","https://cdn.pixabay.com/photo/2014/04/05/11/20/whiskey-315178_1280.jpg")
];

let name = document.getElementById("name");
let price = document.getElementById("price");

// ボタン要素の作成
const btnsDiv = document.getElementById("buttons");
for (let i = 0; i < drinks.length; i++) {
    let div = document.createElement("div");
    div.classList.add("col-3", "p-2");
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-secondary", "col-12");
    btn.innerHTML = i + 1;
    div.append(btn);
    btnsDiv.append(div);
    btn.addEventListener("click", function() {
        name.innerHTML = "Name : " + drinks[i].name;
        price.innerHTML = "Price : $" + drinks[i].price;
        changeImg(i);
    })
}

// 切り替え画像と差し込み画像の要素取得
let main = document.getElementById("main");
let extra = document.getElementById("extra");

// 画像の移動を作成
const sliderDiv = document.getElementById("slider");
let mainImg = document.createElement("img");
let extraImg = document.createElement("img");

function changeImg(index) {
    // mainとextraを初期化
    mainImg.innerHTML = "";
    extraImg.innerHTML = "";

    // sliderDivのセットしたkeyの値を取得
    let current = parseInt(sliderDiv.getAttribute("data-index"));

    // main, extraに画像要素を追加
    mainImg.src = drinks[index].image;
    main.innerHTML = "";
    main.append(mainImg);
    main.classList.add("expand-animation");

    extra.innerHTML = "";
    extraImg.src = drinks[current].image;
    extra.append(extraImg);
    extra.classList.add("deplete-animation");

    // ボタン番号の大小で動きを変える
    sliderDiv.innerHTML = "";
    if (current > index) {
        sliderDiv.append(main);
        sliderDiv.append(extra);
    }
    else {
        sliderDiv.append(extra);
        sliderDiv.append(main);
    }

    // sliderDivに値を再設定
    sliderDiv.setAttribute("data-index", index);
}