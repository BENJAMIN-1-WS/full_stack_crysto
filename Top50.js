
const ils=3.3;



function makeTabl(){

    
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://coinranking1.p.rapidapi.com/coins",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0958e6b13amsha1af0be4a42f302p1c183ajsndee25287ea1a",
            "x-rapidapi-host": "coinranking1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {


    var str="";
     str+="  <h1><b>Top 50</b></h1><br><br>";
     //str+=" <p> Top 50:</p>      ";      
     str+=" <table class='table table-hover'>";
     str+="   <thead>";
     str+="     <tr>";
     str+="         <th>מיקום</th>";
     str+="         <th>לוגו</th>";
     str+="         <th>שם מטבע</th>";
     str+="       <th>גרף_גרף_גרף</th>";
     str+="       <th>שינוי</th>";
     str+="       <th>מחיר</th>";
     str+="     </tr>";
     str+="   </thead>";
     str+="   <tbody>";

     for (const key in response["data"]["coins"]) {
        

        str+="     <tr>";
        str+="       <td><strong>"+response["data"]["coins"][key]["id"]+"</strong></td>"; // td 1
        
        var url_=response["data"]["coins"][key]["iconUrl"].replace("svg","png");

        str+="       <td><img class='photoTable' src='" + url_ + "'></td>";// td 2

        str+="       <td><a><b>"+response["data"]["coins"][key]["name"]+"</b></a></td>"; // td 3

            // td 4
        str+="   <td>   <button class='btn btn-success' onclick='(graphUI("+String(response["data"]["coins"][key]["name"]).replace(" ","_")+"))'>גרף</button> <canvas id='"+String(response["data"]["coins"][key]["name"]).replace(" ","_")+"' style='width:20%;max-width:80%'></canvas>  </td>";
            // td 5
            var chenge=response["data"]["coins"][key]["change"];
            if(parseInt(chenge)>0){
            
                str+="       <td  style='color: green;'> <strong> "+response["data"]["coins"][key]["change"]+" %</strong></td>";
            }
            else{

                str+="       <td style='color: red;'> <strong> "+response["data"]["coins"][key]["change"]+" %</strong></td>";
            }


        var p=parseFloat(response["data"]["coins"][key]["price"]).toFixed(2);
        var ilsP=p*ils;
        ilsP= ilsP.toFixed(2);
        
        str+="       <td>"+
        "<strong>"+
         p+" "+response["data"]["base"]['sign'] +
         "</strong>"+
            "<br>"+
         "<strong>"+
         ilsP+" "+" ₪" +
         "</strong>"+

         "</td>";// td 6

        str+="     </tr>";
       


      }

    
    
     str+="   </tbody>";
     str+=" </table>";
     document.getElementById("tt").innerHTML=str;
    }
    
);
    
}
function x(){
    
}

    function graphUI(str){
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://coinranking1.p.rapidapi.com/coins",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0958e6b13amsha1af0be4a42f302p1c183ajsndee25287ea1a",
                "x-rapidapi-host": "coinranking1.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
        

        

        var xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
        
        var ctx = document.getElementById(str["id"]).getContext('2d');
        var dataS=[];
        var borderColor_by ="";

        var na= str['id'];
        for (var k in response["data"]["coins"]){
            if (String(response["data"]["coins"][k]["name"])==na.replace("_"," ") ){
                 dataS=response['data']['coins'][k]['history'];
                console.log(response["data"]["coins"][k]["change"]);
                borderColor_by="green";
                 if(response["data"]["coins"][k]["change"]<0){borderColor_by="red";}
                 if(response["data"]["coins"][k]["change"]==0){borderColor_by="grey";}

            }
            
        }
        

        var myChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: xValues,
              datasets: [ { 
                data: dataS,
                borderColor:borderColor_by,
                fill: false
              }]
            },
            options: {
              legend: {display: false}
            }
        });
    });

    }

    makeTabl();

