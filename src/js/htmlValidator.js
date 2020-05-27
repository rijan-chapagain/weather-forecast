function valid()
{
    // alert ("valid is called");
//    console.log("value is called");
    var val = document.getElementById("txt").value;
    // document.getElementById("demo").innerHTML = val;

    alert("value is : ", val);

    var obj = $("#year").find("option[value='" + val + "']");

    console.log("val are: ", val);
    console.log("val are: ", val);

    if(obj != null && obj.length > 0)
        alert("valid");  // allow form submission
    else
        alert("invalid"); // don't allow form submission
}