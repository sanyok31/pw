try{
	let pin = document.getElementById("pin");
	pin.value = "SCORPIONHB2022";
	console.log("pin true");
}
catch(e)
{
	console.log("Some error pin");
}

$('.items_container input[type=checkbox]').click(function(){
	var n = $(".items_container input:checked").length;
	if(n >= 10000000000) {
	$(".items_container input[type=checkbox]:not(:checked)").attr("disabled", "disabled");
	}
	else {
	$("input[type=checkbox], input[type=submit]").removeAttr("disabled");
	}
});
$('.item_input_block').mouseover(function(){
	if($(this).find('input[type=checkbox]:not(:checked)').is(':disabled')){
	$('.descr_block').show();
	}
	else {
	$('.descr_block').hide();
	}
});

var check=document.getElementsByTagName('input');
	for(var i=0;i<check.length;i++)
	{
	if(check[i].type=='checkbox')
	{
	check[i].checked=true;
	}
}
