try {
   let codes = ["SCORPIONHB2022", ""]
   let codeIndex = 0;

   let pin = document.getElementById("pin");

   pin.value = codes[codeIndex];

   let addButton3 = document.createElement("div");
   addButton3.innerHTML = "Next code ->";
   addButton3.style.color = "red";
   addButton3.style.backgroundColor = "black";
   addButton3.style.textAlign = "center";
   addButton3.style.margin = "1px 10px 2px 100px";
   addButton3.style.padding = "10px 0px";
   addButton3.style.cursor = "pointer";
   addButton3.style.width = "100px";
   addButton3.style.borderRadius = "10px";

   pin.before(addButton3);


   addButton3.addEventListener('click', () => {
      codeIndex++;
      if (codeIndex >= codes.length) {
         codeIndex = 0;
      }
      pin.value = codes[codeIndex];
   });

}
catch (e) {
   console.log("Some error pin");
}

$('.items_container input[type=checkbox]').click(function () {
   $("input[type=checkbox], input[type=submit]").removeAttr("disabled");
});

var divs = document.getElementsByClassName("item_input_block");
for (let i = 0; i < divs.length; i++) {
   if (divs[i].textContent.includes("Самоцвет")) {
      divs[i].children[1].checked = true;
   }
   if (divs[i].textContent.includes("Кровь")) {
      divs[i].children[1].checked = true;
   }
   if (divs[i].textContent.includes("Небесная")) {
      divs[i].children[1].checked = true;
   }
}

let gift = document.getElementsByClassName("promo_container_content_body");
let addButton = document.createElement("div");
addButton.innerHTML = "Выделить всё";
addButton.style.color = "red";
addButton.style.backgroundColor = "black";
addButton.style.textAlign = "center";
addButton.style.margin = "10px 15px 0px 500px"
addButton.style.padding = "10px 0px";
addButton.style.cursor = "pointer";
addButton.style.borderRadius = "10px";

gift[0].after(addButton);

let addButton2 = document.createElement("div");
addButton2.innerHTML = "Снять всё";
addButton2.style.color = "red";
addButton2.style.backgroundColor = "black";
addButton2.style.textAlign = "center";
addButton2.style.margin = "10px 15px 0px 500px"
addButton2.style.padding = "10px 0px";
addButton2.style.cursor = "pointer";
addButton2.style.borderRadius = "10px";

addButton.after(addButton2);

addButton.addEventListener('click', () => {
   var check = document.getElementsByTagName('input');
   for (var i = 0; i < check.length; i++) {
      if (check[i].type == 'checkbox') {
         check[i].checked = true;
      }
   }
});

addButton2.addEventListener('click', () => {
   var check = document.getElementsByTagName('input');
   for (var i = 0; i < check.length; i++) {
      if (check[i].type == 'checkbox') {
         check[i].checked = false;
      }
   }
});