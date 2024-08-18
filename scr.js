var imgbox = document.getElementsByClassName('changeimg');
let  electronics=[
   {"name":"noise smart watches",
   "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
   "price":999
   },
   {"name":"camera",
    "img":"https://images.unsplash.com/photo-1495121553079-4c61bcce1894?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price":22000
    },
    {"name":"pixel ear buds",
        "img":"https://images.unsplash.com/photo-1590658058105-af4b65f8871b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price":5000
        },
        {"name":"noise smart watches",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
            "price":999
            },
            {"name":"noise smart watches",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                "price":999
                },
                {"name":"noise smart watches",
                    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                    "price":999
                    },
                    {"name":"noise smart watches",
                        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                        "price":999
                        },
                        {"name":"noise smart watches",
                            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                            "price":999
                            },
                            {"name":"noise smart watches",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                                "price":999
                                },
    ];
     let beauty=[
        {"name":"noise smart watches",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
            "price":999
            },
            {"name":"noise smart watches",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                "price":999
                },
                {"name":"noise smart watches",
                    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                    "price":999
                    },
                    {"name":"noise smart watches",
                        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                        "price":999
                        },
                        {"name":"noise smart watches",
                            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                            "price":999
                            },
                            {"name":"noise smart watches",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                                "price":999
                                },
    ];
    let kitchen=[
        {"name":"noise smart watches",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
            "price":999
            },
            {"name":"noise smart watches",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                "price":999
                },
                {"name":"noise smart watches",
                    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                    "price":999
                    },
                    {"name":"noise smart watches",
                        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                        "price":999
                        },
                        {"name":"noise smart watches",
                            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                            "price":999
                            },
                            {"name":"noise smart watches",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                                "price":999
                                },
    ];
    let grooming=[
        {"name":"noise smart watches",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
            "price":999
            },
        ];
        let fashion=[
            {"name":"noise smart watches",
                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                "price":999
                },
            ];
            let topdeals=[
                {"name":"noise smart watches",
                    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                    "price":999
                    },
                ];
                let books=[
                    {"name":"noise smart watches",
                        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHlCYyGqEiRKlvUyXnLdLqcjLWs3eIgL7DA&s",
                        "price":999
                        },
                    ];
// **************************************************************************




function changeimg()
{
imgbox.style.transform= `translateX(100%)`;
                
}
            // let currentSlide = -1;
            
            // const slides = document.querySelectorAll('.slide');
            
            // function showSlide(){
                 
                
                
            //      slides[currentSlide].style.transform= `translateX(${(-100*currentSlide)-currentSlide}%)`;
                 
             
            // }
            // function rshowSlide(){
                 
                 
            //     slides[currentSlide].style.transform= `translateX(${(100*currentSlide)+currentSlide}%)`;
                 
              
            //  }
            
            
            // function nextSlide() {
                
            //     currentSlide = (currentSlide + 1 ) % (slides.length);

            //     showSlide();
            //     setTimeout(prevSlide,3000);
            
             
            // }
            // function prevSlide() {
            //     if(currentSlide==4)
            //     {
            //         currentSlide = 2;
            //     }
            //     else{
            //     currentSlide = (currentSlide + 1 ) % (slides.length);
            //     }
            //     rshowSlide();
                
            
             
            // }

            // setInterval(nextSlide, 3000);

let search=document.querySelector("#searchbar");
search.addEventListener('focus',function(){
    search.style.outline="none";
});



// ***********************************************************************************
let electronicsctr=document.querySelector(".secitems");

let info="";
electronics.forEach((elem,index)=>{
    info+=`<div catagory="electronics" key="${index}" class="pdts sec-l-items"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
electronicsctr.innerHTML=info;
// **************************************************************************
info="";
let beautyctr=document.querySelector(".secitems2");
beauty.forEach((elem,index)=>{
    info+=`<div catagory="beauty" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
beautyctr.innerHTML=info.trim();
 // **************************************************************************
info="";
let kitchenctr=document.querySelectorAll(".secitems2")[1];
kitchen.forEach((elem,index)=>{
    info+=`<div catagory="kitchen" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
kitchenctr.innerHTML=info.trim();
  // **************************************************************************
info="";
let groomingctr=document.querySelectorAll(".secitems2")[2];
grooming.forEach((elem,index)=>{
    info+=`<div catagory="grooming" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
groomingctr.innerHTML=info.trim();
  // **************************************************************************
info="";
let fashionctr=document.querySelectorAll(".secitems2")[3];
fashion.forEach((elem,index)=>{
    info+=`<div catagory="fashion" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
fashionctr.innerHTML=info.trim();
  // **************************************************************************
info="";
let topdealsctr=document.querySelectorAll(".secitems2")[4];
topdeals.forEach((elem,index)=>{
    info+=`<div catagory="topdeals" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
topdealsctr.innerHTML=info.trim();
  // **************************************************************************
info="";
let booksctr=document.querySelectorAll(".secitems2")[5];
books.forEach((elem,index)=>{
    info+=`<div catagory="books" key="${index}" class="pdts sec-l-items2"><img src="${elem.img}" alt=""><span>${elem.name}</span><p>${elem.price}</p><button class="atc">add to cart</button></div>`;
});
booksctr.innerHTML=info.trim();
//  ******************************************************************************

let cartsarr=JSON.parse(localStorage.getItem("cartitems"));
let cartbtn=document.querySelector(".cart");

let pdts=document.getElementsByClassName("pdts");
let btns=document.getElementsByClassName("atc");
let itemnsnum=document.getElementsByClassName("itemsnum");
let flag=0;
for(let i=0;i<pdts.length;i++)
{
pdts[i].addEventListener('click',(e)=>{
    e.preventDefault();
   
    if(`${e.target}`==`${btns[0]}`)
            {
                let id=e.target.parentElement.getAttribute("key");
                let ctg= e.target.parentElement.getAttribute("catagory");
                let vari=eval(ctg);
                
                
                cartsarr.forEach((elem)=>{
                    if(vari[id].name==elem.name)
                    {
                        flag++;

                    }
                });
                if(flag>0){
                    alert("item already present");
                    flag=0;
                }
                else{
                    cartsarr.push(vari[id]);
                    itemnsnum[0].innerText=`${cartsarr.length}`;
                   alert("item added");
                    localStorage.setItem("cartitems",JSON.stringify(cartsarr));
                }
               
            }
})
itemnsnum[0].innerText=`${ JSON.parse(localStorage.getItem("cartitems")).length}`;
}
cartbtn.addEventListener('click',()=>{
    location.href = "cart.html";

})

