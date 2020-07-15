var a=document.getElementById("fname");
var b=document.getElementById("lname");
var c=document.getElementById("gender1");
var d=document.getElementById("gender2");
var e=document.getElementById("gender3");
var f=document.getElementById("dob");
var g=document.getElementById("add");
var h=document.getElementById("email");
var i=document.getElementById("phone");
var j=document.getElementById("uname");
var k=document.getElementById("pass");
var m=document.getElementById("cpass");

var flag=0;


var regex1=/^([a-zA-Z]+)$/;
var regex2=/^([0-9]{4,4})-([0-9]{2,2})-([0-9]{2,2})$/;
var regex3=/^([a-zA-Z0-9\s]+)$/;
var regex4=/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var regex5=/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
var regex6=/^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
var regex7=/^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
var regex8=/^([0-9]{10,10})$/;
var regex9=/^([a-zA-Z0-9]+)$/;
var regex10=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
var regex11=/^[A-Za-z\s]+$/;
var regex12=/^([a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)$/;
var regex13=/^[A-Za-z0-9\s]+$/;

var count=0;

function validate()
{
    
    count=0;

if(a.value.trim()!="")
{
    if((regex1.test(a.value.trim())))
    {
       count++;
        document.getElementById("val1").innerHTML="";
        a.style.border="";
    }
    else
    {
        document.getElementById("val1").innerHTML="<h5>Characters only</h5>";
        a.style.border="5px solid red";
    }
    
}
else{
    document.getElementById("val1").innerHTML="<h5>First name is mandatory</h5>";
    a.style.border="5px solid red";
    }

    if(b.value.trim()!="")
    {
        if((regex1.test(b.value.trim())))
        {
            count++;
            document.getElementById("val2").innerHTML="";
            b.style.border="";
        }
        else
        {
            document.getElementById("val2").innerHTML="<h5>Characters only</h5>";
            b.style.border="5px solid red";
        }
        
    }
    else{
        document.getElementById("val2").innerHTML="<h5>Last name is mandatory</h5>";
        b.style.border="5px solid red";
        }


        if(c.checked==true || d.checked==true || e.checked==true)
        {
            document.getElementById("val3").innerHTML="";
            count++;
            document.getElementById("ge").style.border="";
        }
        else
        {
            document.getElementById("val3").innerHTML="<h5>Please select gender</h5>";
            document.getElementById("ge").style.border="5px solid red";
            
        }

if(f.value.trim()!="")
{
    if(regex2.test(f.value.trim()))
    {
        document.getElementById("val4").innerHTML="";
        count++;
        f.style.border="";
    }
    else
    {
        document.getElementById("val4").innerHTML="<h5>Enter a valid Year</h5>";
        f.style.border="5px solid red";
    }
}
else
{
    document.getElementById("val4").innerHTML="<h5>Please select DOB</h5>";
    f.style.border="5px solid red";
}

if(g.value.trim()!="")
{
    if(regex3.test(g.value.trim()))
    {
        document.getElementById("val5").innerHTML="";
        count++;
        g.style.border="";
    }
    else
    {
        document.getElementById("val5").innerHTML="<h5>Special Characters not allowed</h5>";
        g.style.border="5px solid red";
    }
}
else
{
    document.getElementById("val5").innerHTML="<h5>Address is mandatory Field</h5>";
    g.style.border="5px solid red";
}


console.log(k.value);
console.log(m.value);
if(h.value.trim()!="")
{
    if(regex4.test(h.value.trim()))
    {
        document.getElementById("val6").innerHTML="";
        count++;
        h.style.border="";
    }
    else
    {
        document.getElementById("val6").innerHTML="<h5>Enter a valid Email id</h5>";
        h.style.border="5px solid red";
    }
}
else
{
    document.getElementById("val6").innerHTML="<h5>Email id is mandatory field</h5>";
    h.style.border="5px solid red";
}
if(i.value.trim()!="")
{
    if(regex5.test(i.value.trim()) || regex6.test(i.value.trim()) || regex7.test(i.value.trim()) ||  regex8.test(i.value.trim()))
    {
        document.getElementById("val7").innerHTML="";
        count++;
        i.style.border="";
    }
    else
    {
        document.getElementById("val7").innerHTML="<h5>Phone number must be in the format xxxxxxxxxx or xxx-xxx-xxxx or xxx.xxx.xxxx or xxx xxx xxxx</h5>";
        i.style.border="5px solid red";
    }
}
else
{
    document.getElementById("val7").innerHTML="<h5>Phone number is a mandatory field</h5>";
    i.style.border="5px solid red";
}
if(j.value.trim()!="")
{
    if(regex9.test(j.value.trim()))
    {
        document.getElementById("val8").innerHTML="";
        count++;
        j.style.border="";
    }
    else
    {
        document.getElementById("val8").innerHTML="<h5>Characters and numbers only allowed</h5>";
        j.style.border="5px solid red";
    }
}
else
{
    document.getElementById("val8").innerHTML="<h5>User name is a mandatory field</h5>";
    j.style.border="5px solid red";
}
if(k.value.trim()!="")
{

    count++;
    document.getElementById("val9").innerHTML="";
    k.style.border="";
    if(regex10.test(k.value.trim()))
    {
        flag=1;
        
    }
    else
    {
        document.getElementById("val9").innerHTML="<h5>Password contains minimum 8 Characters at least one uppercase,at least one lowercase, at least one number and at least one special character</h5>";
        k.style.border="5px solid red";
        flag=0;
    }
}
else
{
    flag=0;
    document.getElementById("val10").innerHTML="";
    document.getElementById("val9").innerHTML="<h5>Password cannot be blank</h5>";
    k.style.border="5px solid red";
}
if(m.value.trim()!="")
{
    //no count inside
    document.getElementById("val10").innerHTML="";
    k.style.border="";
    if(((k.value)==(m.value)) && flag==1)
        {
            document.getElementById("val10").innerHTML="";
            count++;
            m.style.border="";
        }
        else if(((k.value)==(m.value)) && flag==0)
        {
            document.getElementById("val10").innerHTML="<h5>Password matches but Password field not met the Requirement</h5>";
            m.style.border="5px solid red";
        }
        else
        {
            document.getElementById("val10").innerHTML="<h5>Password entered not matches</h5>";
            m.style.border="5px solid red";
        }
    console.log(count);
   
}
else
{
    document.getElementById("val10").innerHTML="<h5>Confirm Password cannot be blank</h5>";
    m.style.border="5px solid red";
}



if(count==10)
{
    return true;
}
else
{
    return false;
}

}






var x=document.getElementById("luname");
var y=document.getElementById("lpass");
var count2=0;


function validate2()
{
    var user=document.getElementById("user");
    var userValue=user.value;
    count2=0;
    if(x.value.trim()!="")
    {
        if(regex9.test((x.value.trim())))
        {
            count2++;
            document.getElementById("val11").innerHTML="";
            x.style.border="";
        }
        else
        {
            document.getElementById("val11").innerHTML="<h5>User name contains characters and numbers only </h5>"
            x.style.border="5px solid red";
        }
    }
    else
    {
        document.getElementById("val11").innerHTML="<h5>User name can not be blank</h5>";
        x.style.border="5px solid red";
    }
    if(y.value.trim()!="")
    {
        if(regex10.test((y.value.trim())))
        {
            count2++;
            document.getElementById("val12").innerHTML="";
            y.style.border="";
        }
        else
        {
            document.getElementById("val12").innerHTML="<h5>Password contains minimum 8 Characters at least one uppercase,at least one lowercase, at least one number and at least one special character</h5>"
            y.style.border="5px solid red";
        }
    }
    else
    {
        document.getElementById("val12").innerHTML="<h5>Password can not be blank</h5>";
        y.style.border="5px solid red";
    }
    
    if(count2==2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var st=document.getElementById("str");
function data()
{
    if (k.value.trim().length==0)
        {
            st.innerHTML="<div></div>";
        }
        else
        {
    if(k.value.trim().length < 8)
        {
            
            st.innerHTML="<div class='container1'> <div class='skills poor'>Poor</div></div>";
        }
        else if ((k.value.trim().length >= 8)&&(k.value.trim().length <= 12) )
        {
            
            st.innerHTML="<div class='container1'> <div class='skills medium'>Medium</div></div>";
        }

        else
        {
            
            st.innerHTML="<div class='container1'> <div class='skills strong'>Strong</div></div>";
        }
    }
}

var countbook=0;
function validateBook()
{
    if(title.value.trim()!="")
{
    if((regex13.test(title.value.trim())))
    {
       countbook++;
        document.getElementById("tit").innerHTML="";
        title.style.border="";
    }
    else
    {
        document.getElementById("tit").innerHTML="<h5>Characters only</h5>";
        title.style.border="5px solid red";
    }
    
}
else{
    document.getElementById("tit").innerHTML="<h5>Book title name is mandatory</h5>";
    title.style.border="5px solid red";
    }


    if(author.value.trim()!="")
{
    if((regex11.test(author.value.trim())))
    {
       countbook++;
        document.getElementById("aut").innerHTML="";
        author.style.border="";
    }
    else
    {
        document.getElementById("aut").innerHTML="<h5>Characters only</h5>";
        author.style.border="5px solid red";
    }
    
}
else{
    document.getElementById("aut").innerHTML="<h5>Author name is mandatory</h5>";
    author.style.border="5px solid red";
    }
    
    if(genre.value.trim()!="")
    {
        if((regex11.test(genre.value.trim())))
        {
           countbook++;
            document.getElementById("gen").innerHTML="";
            genre.style.border="";
        }
        else
        {
            document.getElementById("gen").innerHTML="<h5>Characters only</h5>";
            genre.style.border="5px solid red";
        }
        
    }
    else{
        document.getElementById("gen").innerHTML="<h5>Book Genre is mandatory</h5>";
        genre.style.border="5px solid red";
        }


        if(file.value!= "")
        {
        
           countbook++;
           file.style.border="";
           document.getElementById("fil").innerHTML="";
        }
    else{
        document.getElementById("fil").innerHTML="<h5>Author or book image is mandatory</h5>";
        file.style.border="5px solid red";
        }
        if(countbook===4)
        {
            return true;
        }
        else{
            return false;
        }
}




var countauthor=0;
function validateAuthor()
{
    var author=document.getElementById("author");
    var about=document.getElementById("about");
    var works=document.getElementById("works");
    var file=document.getElementById("file");
    if(author.value.trim()!="")
{
    if((regex11.test(author.value.trim())))
    {
       countauthor++;
        document.getElementById("tit").innerHTML="";
        author.style.border="";
    }
    else
    {
        document.getElementById("tit").innerHTML="<h5>Characters only</h5>";
        author.style.border="5px solid red";
    }
    
}
else{
    document.getElementById("tit").innerHTML="<h5>Author name is mandatory</h5>";
    author.style.border="5px solid red";
    }


    if(about.value.trim()!="")
{
    if((regex12.test(about.value.trim())))
    {
       countauthor++;
        document.getElementById("aut").innerHTML="";
        about.style.border="";
    }
    else
    {
        document.getElementById("aut").innerHTML="<h5>Characters only</h5>";
        about.style.border="5px solid red";
    }
    
}
else{
    document.getElementById("aut").innerHTML="<h5>About Author is mandatory</h5>";
    about.style.border="5px solid red";
    }
    
    if(works.value.trim()!="")
    {
        if((regex12.test(works.value.trim())))
        {
           countauthor++;
            document.getElementById("gen").innerHTML="";
            works.style.border="";
        }
        else
        {
            document.getElementById("gen").innerHTML="<h5>Characters only</h5>";
            works.style.border="5px solid red";
        }
        
    }
    else{
        document.getElementById("gen").innerHTML="<h5>Famous works is mandatory</h5>";
        works.style.border="5px solid red";
        }


        if(file.value!= "")
        {
        
           countauthor++;
           file.style.border="";
           document.getElementById("fil").innerHTML="";
        }
    else{
        document.getElementById("fil").innerHTML="<h5>Author image is mandatory</h5>";
        file.style.border="5px solid red";
        }
        if(countauthor===4)
        {
            return true;
        }
        else{
            return false;
        }
}