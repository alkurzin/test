let arr = new Array();

function choice(element, event){
    if( event.ctrlKey){
        if(!arr.includes(element.id)){
            element.style.background = "rgba(66,170,255,0.5)";
            arr.push(element.id);
            let btns = document.querySelectorAll(".btn");
            for(let btn of btns){
                btn.style.display = "inline-block";
            }
        }else{
            element.style.background = "white";
            let index = arr.indexOf(element.id);
            let tmp = arr[0];
            arr[0] = arr[index];
            arr[index] = tmp;
            arr.shift();
            console.log(arr);
        }
    }
    console.log(arr);
}

function update(){
    alert(arr);
}

function cancel(){
    let btns = document.querySelectorAll(".btn");
    for(let btn of btns){
        btn.style.display = "none";
    }

    arr.length = 0;

    let divs = document.querySelectorAll(".test-div");
    for(let div of divs){
        div.style.background = "white";
    }
}