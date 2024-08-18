let data =JSON.parse(localStorage.getItem("cartitems"));
let cartbox=document.querySelector(".cartbox");
let itemsbox=document.querySelector(".itemsbox");
let ftotal=document.querySelector(".ftotal");
let finalp=0;
let quantity=[];

function getcart(){
    
 let subprice=[];   
data.forEach((element ,idx)=> {
   quantity.push(1);
   subprice.push(quantity[idx]*element.price);
    cartbox.innerHTML +=`  <div key="${idx}"  class="cartitems">
          <div class="pimg">
            <img
              src="${element.img}"
              alt=""
            />
            <span>${element.name} </span>
          </div>
          <p class="price">${element.price}</p>
          <div class="changes">
            <span class="rmquant material-symbols-outlined"> remove </span>
            <span class="quants">${quantity[idx]}</span>
              <span class="addquant material-symbols-outlined"> add </span>
          
          </div>
          <div class="subtotal">${subprice[idx]}</div>
           <div class=><button class="remove">remove</button> </div>  
        </div>       
             `;
             itemsbox.innerHTML +=`  <div class="titems">
          <p>${idx+1}</p>
          <p>${element.name}</p>
          <p classname="quantity">${quantity[idx]}</p>
          <p>${subprice[idx]}</p>
        </div>`;

             for(let i=0;i<removebtn.length;i++)
                {
                removebtn[i].addEventListener('click',(e)=>{
                   
                   
                 
                  data.splice(e.target.parentElement.parentElement.getAttribute("key"),1);
              
                localStorage.setItem("cartitems",JSON.stringify(data));
                })
            };
            for(let i=0;i<addquant.length;i++)
                {
                addquant[i].addEventListener('click',(e)=>{
                  ++quantity[ e.target.parentElement.parentElement.getAttribute("key")];
                  subprice*=quantity[idx];
                  
                })
            };
            for(let i=0;i<rmquant.length;i++)
                {
                rmquant[i].addEventListener('click',(e)=>{
                 
       if(quantity[i]>1)
                 {   
                    --quantity[ e.target.parentElement.parentElement.getAttribute("key")];
                    subprice*=quantity[idx];
                 }
                 else{
                  console.error("cannot decrease quanity");
                  alert("cannot decrease quanity less than 1");
                 
                }
                }
)}
                


finalp+=subprice[idx];


});
ftotal.innerText=`Total:${finalp}`;
};
let logo=document.querySelector(".logo");
logo.addEventListener('click',()=>{
    location.href = "index.html";

})
let itemnsnum=document.getElementsByClassName("itemsnum");
itemnsnum[0].innerText=`${data.length}`;
let removebtn=document.getElementsByClassName("remove");
let addquant=document.getElementsByClassName("addquant");
let rmquant=document.getElementsByClassName("rmquant");


setInterval(()=>{cartbox.innerHTML="";itemsbox.innerHTML="";finalp=0;
    let quantity=1;
    
    getcart();},500);

