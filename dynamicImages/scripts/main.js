//  window.onload = ()=>{
//  Best way to delay content loaded is to use DOMContentLoaded instead of window onload
function showImage(path){
    const dialogImage = document.querySelector(".dialog .gigantic")
    dialogImage.src=path;

    document.querySelector(".dialog").classList.remove("hidden")
}

document.addEventListener("DOMContentLoaded", () => {

    const tbody = document.querySelector("#list tbody")

    const year = document.getElementById("year")
    const image_list = document.getElementById("image_list")
    const output = document.getElementById("output")
    const clear = document.getElementById("clear")


    image_list.innerHTML = "<option>Make a Slection</option> "
    images.forEach(image => {
        let option = document.createElement("option");
        option.innerHTML = image.title;
        option.value = image.name;
        image_list.appendChild(option);
    }); //END Images for each


    function addMovieImageRow(image) {
        let row = tbody.insertRow(-1) // end of rows

        let cellYear = row.insertCell(0);
        cellYear.innerHTML = image.year;

        let cellTitle = row.insertCell(1)
        cellTitle.innerHTML = image.title;

        let fullPath= "images/" +image.name;

        let cellThumb = row.insertCell(2);
        cellThumb.innerHTML = image.name;
        cellThumb.innerHTML = `<img src="${fullPath}" class="thumb" onclick="showImage('${fullPath}')">`;

            // <a href= "${fullPath}" target="_blank">
            // <img src="${fullPath}" class="thumb">
            // </a>
            

    }

    year.addEventListener("change", () => {
        tbody.innerHTML = "";
        let selectedYear = year.selectedOptions[0].value;
        //alert(selectedYear);
        images.filter((i) => i.year == selectedYear).forEach(addMovieImageRow)

    }) //END YEAR CHANGE EVENT

    image_list.addEventListener("change", e => {
        if (image_list.selectedIndex == 0) { //IS FIRST ITEM "make a selection" e.g 0,or no items e.g -1
            return; //DO NOTHING
        }
        let name = image_list.selectedOptions[0].value;
        // alert(name);
        let img = document.createElement("img");
        img.src = "images/" + name;
        output.appendChild(img);
        // end on change image list

    })

    clear.addEventListener("click", () => {
        output.innerHTML = "";
        image_list.selectedIndex = 0; //set select to first item, -1 for blank

    })// end clear button

    // window onload ends}

}) //DOMContentLoaded ENDS