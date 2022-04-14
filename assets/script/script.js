let dropDown=document.querySelectorAll('.listeAll');  
let liste_product=document.querySelectorAll('.listeAll_element');
let Body=document.querySelector("body");
for(let i=0 ; i<dropDown.length ; i++){
    dropDown[i].addEventListener('click',function (){
        if(liste_product[i].style.display!=="block"){
            liste_product[i].style.display="block";
            dropDown[i].style.fontWeight="bold";

        }
        else liste_product[i].style.display="none";
    })
    Body.addEventListener('click', function(e){
        if(e.target!==dropDown[i]){
            liste_product[i].style.display="none";
            dropDown[i].style.fontWeight="normal"; 
        }
    })
}

