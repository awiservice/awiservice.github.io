const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion-title");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".accordion-description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            description.style.borderBottom = "1px solid #d8d8d8";
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            description.style.borderBottom = "none";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".accordion-description");
            des.style.height = "0px";
            des.style.borderBottom = "none";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}