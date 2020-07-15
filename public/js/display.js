var a=document.getElementById("Student").id;
var b=document.getElementById("ADD BOOK");
var c=document.getElementById("ADD AUTHOR");
if(a==="Student")
          {
            var deletes =document.getElementsByClassName('btnd');
            for(var i=0;i<deletes.length;i++)
            {
              deletes[i].style.display="none";
            }
            var edits =document.getElementsByClassName('btne');
            for(var i=0;i<edits.length;i++)
            {
              edits[i].style.display="none";
            }
            b.style.display="none";
            c.style.display="none";
          
        
        }



        function we(i)
        {
          var data=i;
          var dis=document.getElementById(data);
          dis.style.display= "block";

        }

        
          