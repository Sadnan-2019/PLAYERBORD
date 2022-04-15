const Tops = document.getElementsByClassName("top");
for (const top of Tops) {
  top.style.color = "dimgray	";
}

const Players = document.getElementById("players");

Players.style.backgroundColor = "rgba(255,50,50,0.2)";
Players.style.border = "10px";
Players.style.borderRadius = "20px";

document.getElementById("add-item").addEventListener("click", function () {
  //   console.log("now ok");

  const li = document.createElement("li");
  li.innerText = "blog - 4";

  const ulAdd = document.getElementById("uls");
  // console.log(ulAdd,"ull")

  ulAdd.appendChild(li);
});

document.getElementById("uls").addEventListener("click", function (event) {
  // console.log("tumia ")
  event.target.parentNode.removeChild(event.target);
});


document.getElementById('add-number').addEventListener('click',function(){

  // console.log("aso tumi button")
  let Result =  1;
  const Numbers = document.getElementById('number');
  const NumbersValue = parseInt(Numbers.value);
  Result = Result + NumbersValue;
    Numbers.value = Result;

    if(Result == 5){

      // const Add = document.getElementById('add-number');
      const Add =  document.getElementById("add-number").disabled = true;
      // console.log("button now disabled ")
      Add.innerText = "disabled"

      // Add.style.display ="none";
    }

 
  console.log(Result);



});
