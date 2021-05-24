let root=document.getElementById("root");
console.log(root)
let loading=document.getElementById("loading");
getBlog();
getBlog();
window.addEventListener("scroll",() =>{
    const{scrollTop,scrollHeight,clientHeight}=document.documentElement;
    if ((clientHeight+scrollTop)>=scrollHeight-5){
        loading.classList.add('show');
        setTimeout(getBlog,1000);
    }
})
async function getBlog(){
    randomNumber=Math.ceil(Math.random()*100);
    options={
       
        method:"GET",  
    }
     const response=await fetch(`http://jsonplaceholder.typicode.com/posts/${randomNumber}`);
     const data1=await response.json()
     const response2=await fetch("https://randomuser.me/api");
     const data2=await response2.json()
     const data={
         post:data1,user:data2.results[0]
     };
     addBlog(data)
    
}
function addBlog(x){
    let container2=document.createElement("div");
    container2.classList.add("col-12","col-md-6","mr-3","mb-3","d-flex","flex-row","justify-content-center","cow");
    root.appendChild(container2);

    let cardContainer=document.createElement("div");
    cardContainer.classList.add("card-container","p-2");
    container2.appendChild(cardContainer);
    
    let heading=document.createElement("h1");
    heading.classList.add("card-heading","mb-3","mt-3");
    cardContainer.appendChild(heading);
    heading.textContent=x.post.title


    let text=document.createElement("p");
    text.classList.add("text");
    cardContainer.appendChild(text);
    text.textContent=x.post.body
     
    let container3=document.createElement("div");
    container3.classList.add("mb-3");
    cardContainer.appendChild(container3);

    let pic=document.createElement("img");
    pic.classList.add("pic");
    container3.appendChild(pic);
    pic.src=x.user.picture.large

    loading.classList.remove("show");
}
