


var arr = {


}




function clean(){
    document.getElementById("table").innerHTML="";
}
function Table(){
    var nameCoin = document.getElementById('coin').value;
    clean();
    var str="";
    str+="  <h1><b>Where To Buy "+nameCoin+"</b></h1>";
    

    str+=" <br><table class='table table-hover'>";
    str+="<thead>";
    str+="<tr>";
    str+="<th>שם חברה</th>";
    str+="<th>לוגו</th>";
    str+="<th>מדינת מוצא</th>";
    str+="<th>מחיר</th>";
    str+="<th></th>";
    str+="</tr>";
    str+="</thead>";
    str+="<tbody>";

    for (const key in arr) {
       str+="<tr>";
       str+="<td><strong>"+arr[key]['name']+"</strong></td>"; // td 1
       str+="<td><strong>"+arr[key]['iconUrl']+"</strong></td>"; // td 2
       str+="<td><strong>"+arr[key]['country']+"</strong></td>"; // td 3
       str+="<td><strong>"+arr[key]['price']+"</strong></td>"; // td 4
       str+="</tr>";
     }
    str+="</tbody>";
    str+=" </table>";
    document.getElementById("table").innerHTML=str;
}



function func(){

    var nameCoin = document.getElementById('coin').value;

    arr={   Coinbase:{
        name:"Coinbase",
        iconUrl:"null.png",
        country:"null",
        price:"null"
    },
Kraken:{
        name:"Kraken",
        iconUrl:"null.png",
        country:"null",
        price:"null"
    }};


Table();
    console.log(nameCoin);
}


