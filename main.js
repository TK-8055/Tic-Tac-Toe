let count=0;
let odd="x";
let eve="o";
let ans="";
let arr =new Array(9).fill("");

const wins=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3]
];
document.querySelector('.hole_con').addEventListener('click',function(e){
   
        let clickedId=e.target.id;
        let el=document.getElementById(clickedId);
    if (count % 2 === 0  && el && el.innerHTML.trim() ==="" ) {
                el.innerHTML = odd;
                el.style.color="red";
                arr[clickedId]="x";
                count++;
            } else if(el && el.innerHTML.trim() ==="" ){
                el.innerHTML = eve;
                el.style.color="blue";

                arr[clickedId]="0";
                count++; 
            }

    if(count>=5){
        for(let [a,b,c] of wins){
            if(arr[a]!=="" && arr[a]===arr[b] && arr[a]===arr[c]){
                document.querySelectorAll("button").forEach(btn=>{
                    btn.disabled=true;
                });
            document.getElementById("relode").disabled=false;

                ans=arr[a];
                document.getElementById("wi").innerText= `${ans} Win the game !...`;
            }
        }
    }
    if(count==9 && ans===""){
                document.getElementById("wi").innerText= "The match get Draw";
    }

});


function relode(){
location.reload();

}