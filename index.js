
const search = () =>{
    const searchbox=document.querySelector(".input1").value.toUpperCase();
const products=document.getElementById("product-list1")
const product=document.querySelectorAll(".product")
const head=products.getElementsByTagName("h3")

    for (var i=0;i<head.length;i++){
        let match= product[i].getElementsByTagName('h3')[0];

        if(match){
            let value=match.textContent||match.innerHTML;
            
            if(value.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";

            }else{
                product[i].style.display="none";
            }
        }
    }

}