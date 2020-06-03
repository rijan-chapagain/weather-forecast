function validateForm()
{
   
    var yearTxt = document.forms["myForm"]["year"].value;
    var sMonthTxt = document.forms["myForm"]["sMonthTxt"].value;
    var eMonthTxt = document.forms["myForm"]["eMonthTxt"].value;

    var years = document.getElementById("year");
    var sMonth = document.getElementById("sMonth");
    var eMonth = document.getElementById("eMonth");

    
    var value = [];
    var smvalue = [];
    var emvalue = [];

    for (var i = 0; i < years.options.length; i++) {
        value[i] = years.options[i].value;
    }
    
    console.log(sMonth.options[0].length);
    for (var j = 0; j < sMonth.options.length; j++) {
        smvalue[j] = sMonth.options[j].value;
    }
    
    for (var k = 0; k < eMonth.options.length; k++) {
        emvalue[k] = eMonth.options[k].value;
    }

    // console.log(typeof(value[0]));
    console.log(smvalue);
  
    if( yearTxt != value[0] && yearTxt != value[1] && yearTxt != value[2] && yearTxt != value[3] && yearTxt != value[4] && yearTxt != value[5] && yearTxt != value[6] && yearTxt != value[7] && yearTxt != value[8] && yearTxt != value[9])
    {
        // alert(yearTxt + value);
        document.getElementById("message").innerHTML = "*Invalid";
        document.getElementById("messageDetail").innerHTML = "*Please enter valid date from dropdown list";
        return false;
    }
   
    if( sMonthTxt != smvalue[0] && sMonthTxt != smvalue[1] && sMonthTxt != smvalue[2] && sMonthTxt != smvalue[3] && sMonthTxt != smvalue[4] && sMonthTxt != smvalue[5] && sMonthTxt != smvalue[6] && sMonthTxt != smvalue[7] && sMonthTxt != smvalue[8] && sMonthTxt != smvalue[9] && sMonthTxt != smvalue[10] && sMonthTxt != smvalue[11])
    {
        // alert(sMonthTxt + smvalue);
        document.getElementById("sMessage").innerHTML = "*Invalid";
        document.getElementById("sMessageDetail").innerHTML = "*Please enter valid starting month from dropdown list";
        return false;
    }
    
    for(var i=0; i<smvalue.length; i++)
    {
        if(sMonthTxt === smvalue[i])
        {
            for(var j=0; j<i; j++)
            {
                delete emvalue[j];
            }
        }
    }

    if( eMonthTxt != emvalue[0] && eMonthTxt != emvalue[1] && eMonthTxt != emvalue[2] && eMonthTxt != emvalue[3] && eMonthTxt != emvalue[4] && eMonthTxt != emvalue[5] && eMonthTxt != emvalue[6] && eMonthTxt != emvalue[7] && eMonthTxt != emvalue[8] && eMonthTxt != emvalue[9] && eMonthTxt != emvalue[10] && eMonthTxt != emvalue[11])
    {
        // alert(eMonthTxt + emvalue);
        
        document.getElementById("eMessage").innerHTML = "*Invalid";
        document.getElementById("eMessageDetail").innerHTML = "*Please enter valid ending month from dropdown list <br>*End Month cannot be before start";
        return false;
    }
    else
    {
        alert("congrats");
        return true;
    }


   

}

