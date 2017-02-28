//Global varibles!!
var count=0;
var oldTotal=0;
var newTotal=0;
var total = 0;
var milk1=0.80;
var milk1count=0;
var milk2=1.30;
var milk2count=0;
var wbread=1.85;
var wbreadcount=0;
var brbread=2.20;
var brbreadcount=0;
var butter=1.25;
var buttercount=0;
var chicken=4.10;
var chickencount=0;
var mince=4.25;
var mincecount=0;
var eggs=2.50;
var eggscount=0;
var teaBags=1.99;
var teaBagscount=0;


//runs addfun function when called to add selected item value to Total
//A count for selected item is incremented and set in the h1 element in tab-account HTML
var addfun = function(element)
{
	switch($(element).attr("id"))
	{
	case "m1":
		total += parseFloat(milk1);
		milk1count++
		$("h1[id='m1']").text(milk1count);
		break;
	case "m2":
		total += parseFloat(milk2);
		milk2count++
		$("h1[id='m2']").text(milk2count);
		break;
	case "wb":
		total += parseFloat(wbread);
		wbreadcount++
		$("h1[id='wb']").text(wbreadcount);
		break;
	case "brb":
		total += parseFloat(brbread);
		brbreadcount++
		$("h1[id='brb']").text(brbreadcount);
		break;
	case "bu":
		total += parseFloat(butter);
		buttercount++
		$("h1[id='bu']").text(buttercount);
		break;
	case "ch":
		total += parseFloat(chicken);
		chickencount++
		$("h1[id='ch']").text(chickencount);
		break;
	case "min":
		total += parseFloat(mince);
		mincecount++
		$("h1[id='min']").text(mincecount);
		break;
	case "e":
		total += parseFloat(eggs);
		eggscount++
		$("h1[id='e']").text(eggscount);
		break;
	case "t":
		total += parseFloat(teaBags);
		teaBagscount++
		$("h1[id='t']").text(teaBagscount);
		break
	}
//Sets the new total value in tab-dash HTML h2 element
$(".total").text("Total = €"+total.toFixed(2));
}

//runs subfun when called to remove selected item value from Total
//The current count value for that item is decremented and set in the h1 element in tab-account HTML 
//If the items count is 0 then no action is taken to items count or value of total and user is notified.
var subfun = function(element)
{
	switch($(element).attr("id"))
	{
	case "m1":
		if(milk1count>0)
		{
			total -= parseFloat(milk1);
			milk1count--
			$("h1[id='m1']").text(milk1count);
		}
		else {alert("No more 1L Milk in cart!!")}
		break;
	case "m2":
		if(milk2count>0)
		{
			total -= parseFloat(milk2);
			milk2count--
			$("h1[id='m2']").text(milk2count);
		}
		else {alert("No more 2L Milk in cart!!")}
		break;
	case "wb":
		if(wbreadcount>0)
		{
			total -= parseFloat(wbread);
			wbreadcount--
			$("h1[id='wb']").text(wbreadcount);
		}
		else {alert("No more White Bread in cart!!")}
		break;
	case "brb":
		if(brbreadcount>0)
		{
			total -= parseFloat(brbread);
			brbreadcount--
			$("h1[id='brb']").text(brbreadcount);
		}
		else {alert("No more Brown bread in cart!!")}
		break;
	case "bu":
		if(buttercount>0)
		{
			total -= parseFloat(butter);
			buttercount--
			$("h1[id='bu']").text(buttercount);
		}
		else {alert("No more butter in cart!!")}
		break;
	case "ch":
		if(chickencount>0)
		{
			total -= parseFloat(chicken);
			chickencount--
			$("h1[id='ch']").text(chickencount);
		}
		else {alert("No more chicken in cart!!")}
		break;
	case "min":
		if(mincecount>0)
		{
			total -= parseFloat(mince);
			mincecount--
			$("h1[id='min']").text(mincecount);
		}
		else {alert("No more mince in cart!!")}
		break;
	case "e":
		if(eggscount>0)
		{
			total -= parseFloat(eggs);
			eggscount--
			$("h1[id='e']").text(eggscount);
		}
		else {alert("No more Eggs in cart!!")}
		break;
	case "t":
		if(teaBagscount>0)
		{
			total -= parseFloat(teaBags);
			teaBagscount--
			$("h1[id='t']").text(teaBagscount);
		}
		else {alert("No more teaBags in cart!!")}
		break
	}

$(".total").text("Total = €"+total.toFixed(2));

}

//runs the chgfun to change the price of an item.
//the total of (old value)*(amount of selected item) taken from total 
//(New value*amount item) is then added to total
var chgfun = function(element)
{
	var newp = parseFloat(prompt("Enter a new price for this Item"));
	if (!isNaN(newp)) //if user enters a char/invalid input no change is made and user is alerted.
	{
	switch($(element).attr("id"))
	{
	case "m1":
		//Get oldtotal by item value * its number in cart
		oldTotal = milk1count*milk1
		//subtract this from total variable
		total-=oldTotal
		//set item to new price
		milk1 = newp.toFixed(2);
		//Get newtotal by new item value * itrs number in cart
		newTotal = milk1count*milk1
		//Add this to total variable
		total+=newTotal
		//Set new item value as text in the button Element with matching attr in tab-dash HTML
		$("[id='m1'][class='button button-positive']").text("€"+milk1);
		break;
	case "m2":
		oldTotal = milk2count*milk2
		total-=oldTotal
		milk2 = newp.toFixed(2);
		newTotal = milk2count*milk2
		total+=newTotal
		$("[id='m2'][class='button button-positive']").text("€"+milk2);
		break;
	case "wb":
		oldTotal = wbreadcount*wbread
		total-=oldTotal
		wbread = newp.toFixed(2);
		newTotal = wbreadcount*wbread
		total+=newTotal
		$("[id='wb'][class='button button-positive']").text("€"+wbread);
		break;
	case "brb":
		oldTotal = brbreadcount*brbread
		total-=oldTotal
		brbread = newp.toFixed(2);
		newTotal = brbreadcount*brbread
		total+=newTotal
		$("[id='brb'][class='button button-positive']").text("€"+brbread);
		break;
	case "bu":
		oldTotal = buttercount*butter
		total-=oldTotal
		butter = newp.toFixed(2);
		newTotal = buttercount*butter
		total+=newTotal
		$("[id='bu'][class='button button-positive']").text("€"+butter);
		break;
	case "ch":
		oldTotal = chickencount*chicken
		total-=oldTotal
		chicken = newp.toFixed(2);
		newTotal = chickencount*chicken
		total+=newTotal
		$("[id='ch'][class='button button-positive']").text("€"+chicken);
		break;
	case "min":
		oldTotal = mincecount*mince
		total-=oldTotal
		mince = newp.toFixed(2);
		newTotal = mincecount*mince
		total+=newTotal
		$("[id='min'][class='button button-positive']").text("€"+mince);
		break;
	case "e":
		oldTotal = eggscount*eggs
		total-=oldTotal
		eggs = newp.toFixed(2);
		newTotal = eggscount*eggs
		total+=newTotal
		$("[id='e'][class='button button-positive']").text("€"+eggs);
		break;
	case "t":
		oldTotal = teaBagscount*teaBags
		total-=oldTotal
		teaBags = newp.toFixed(2);
		newTotal = teaBagscount*teaBags
		total+=newTotal
		$("[id='t'][class='button button-positive']").text("€"+teaBags);
		break
	}
	//set total in text node of element id total
	$(".total").text("Total = €"+total.toFixed(2));
	}
	else {
		//Gives an alert to let user know input was invalid and no action was taken
		alert("Invalid input! Please enter number and decimal if needed. EX 1.45");
		}

}