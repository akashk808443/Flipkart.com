let images= [
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_446_desktop_summer_200323_01_new.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_96.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/11042023-UHP-D-Main-P7-DNMXTS-Under299.jpg",
    ]
    
    let slideshow=document.querySelector("#slideshow");
    let id;
    let i=0;
    
    id=setInterval(function(){
        if(i===images.length){
            i=0;
        }
    
        slideshow.innerHTML=null;
    
        let img=document.createElement("img");
        img.src=images[i];
    
        slideshow.append(img);
    
        i++;
    
    },2000)

    let electronicsData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const appendData=(electronicsData)=>{

        electronicsData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxA").append(div);
        })
    }
    appendData(electronicsData);


    let beutyData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append2Data=(beutyData)=>{

        beutyData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxB").append(div);
        })
    }
    append2Data(beutyData);

    
    let fationData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append3Data=(fationData)=>{

        fationData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxC").append(div);
        })
    }
    append3Data(fationData);

   
    let sportsData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append4Data=(sportsData)=>{

        sportsData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxD").append(div);
        })
    }
    append4Data(sportsData);

   
    let womenData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append5Data=(womenData)=>{

        womenData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxE").append(div);
        })
    }
    append5Data(womenData);

   
    let tvData =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append6Data=(tvData)=>{

        tvData.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxF").append(div);
        })
    }
    append6Data(tvData);

   
    let Data =[
        {
            name: "Mirrorless cameras",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            details:"NCEMI | Prod. & more",
        },
        {
            name: "Apple iPhone (Purple 128GB)",
            price:"Now ₹1,19,999",
            image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
            details:"3500 mAh Battery",
        },
        {
            name: "Best of shaver",
            price:"From ₹1,649",
            image:"https://rukminim1.flixcart.com/image/400/400/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            details:"Havells & Phillips",
        },
        {
            name: "Projectors",
            price:"From ₹9,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
            details:"Zebronics",
        },
        {
            name: "Best of Trimmer",
            price:"From ₹336",
            image:"https://rukminim1.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70",
            details:"MI,REALME & more",
        },
        {
            name: "Monitor",
            price:"From ₹8,279",
            image:"https://rukminim1.flixcart.com/image/400/400/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            details:"DELL",
        },
        {
            name: "Power Banks",
            price:"From ₹57,999",
            image:"https://rukminim1.flixcart.com/image/400/400/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70",
            details:"MI,Realme & more",
        },
    ]
     
   
    const append7Data=(Data)=>{

        Data.forEach(function(el){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let name=document.createElement("h6");
            name.innerText=el.name;
            let price=document.createElement("a");
            price.innerText=el.price;
            let detail=document.createElement("p");
            detail.innerText=el.details;
            div.append(img,name,price,detail);
            document.querySelector("#firstboxG").append(div);
        })
    }
    append7Data(Data);

   

   