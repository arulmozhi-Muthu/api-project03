document.querySelector("button").addEventListener("click",result);

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result()
{
    row.innerHTML=" ";
    try{
    var test=document.getElementById("search").value 
    var data1=await fetch(`https://api.nationalize.io/?name=${test}`)
    var res=await data1.json();
    console.log(res);
  for(var i in res.country)
    var col=document.createElement("div");
    col.className="col-lg-4";
    col.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text"><b>Count:${res.count}</b></p>
    <p class="card-text"><b>Name:${res.name}</b></p>
    <p class="card-text"><b>Country Length:${res.country.length}</b></p>
   <p class="card-text"><b>Country:${res.country[i].country_id}:${res.country[i].probability}</b></p>
     
  </div>
</div>`
    row.append(col);
     container.append(row);
     document.body.append(container)
    
    }
    catch(error)
    {
        console.log(error);

    }
}