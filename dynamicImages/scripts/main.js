//  window.onload = ()=>{
//  Best way to delay content loaded is to use DOMContentLoaded instead of window onload
document.addEventListener("DOMContentLoaded", ()=>{

    const image_list = document.getElementById("image_list")
    const output = document.getElementById("output")
    const clear = document.getElementById("clear")
    
image_list.innerHTML = "<option>Make a Slection</option> "
images.forEach(image=>{
    let option =document.createElement("option");
    option.innerHTML=image.title;
    option.value = image.name;
    image_list.appendChild(option);
})

image_list.addEventListener("change", e=>{
    if(image_list.selectIndex==0){ //IS FIRST ITEM "make a selection" e.g 0,or no items e.g -1
        return; //DON NOTHING
    }
    let name=image_list.selectedOptions[0].value;
    // alert(name);
    let img= document.createElement("img");
    img.src = "images/" + name;
    output.appendChild(img);
    // end on change image list

})

clear.addEventListener("click",()=> {
output.innerHTML="";
image_list.selectIndex=0; //set select to first item, -1 for blank

})// end clear button

// window onload ends}

}) //DOMContentLoaded ENDS