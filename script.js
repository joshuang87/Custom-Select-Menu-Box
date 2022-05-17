var select_box = document.querySelector('.select_box');
var select_item = document.querySelectorAll('.select_item');

select_box.addEventListener('click',() =>{
    select_box.classList.toggle('active');
})

select_item.forEach((item) =>{
    item.addEventListener('click',() =>{
        var saveTheName = item.children[1].innerHTML;
        // console.log(saveTheName);
        document.querySelector('.select_name').innerHTML = saveTheName;
        select_box.classList.remove('active');
    })
})