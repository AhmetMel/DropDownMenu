var i=0;
        function OpenMenu()
        {
            var dropDown=document.getElementById("dropDown");
            var dropDownIn=document.getElementById("dropDownIn");
            var UpDown=document.getElementById("upDown");
            if(i==0)
            {
                dropDownIn.style.opacity="1"; 
                dropDownIn.style.display="block";
                UpDown.style.transform="rotate(-180deg)";
                UpDown.style.transition="0.5s";
                dropDown.style.borderBottomRightRadius="0px";
                dropDown.style.borderBottomLeftRadius="0px";
                i=1;
            }
            else if(i==1)
            {
                dropDownIn.style.opacity="0";
                dropDownIn.style.display="none";
                UpDown.style.transform="rotate(0deg)";
                UpDown.style.transition="0.5s";
                dropDown.style.borderBottomRightRadius="10px";
                dropDown.style.borderBottomLeftRadius="10px";
                i=0;
            }
        }
        function slide(index)
        {
            var slide=document.getElementById("slider");
            if(index==0)
            {
                slide.style.top="0px";
                slide.style.display="block";
            }
            if(index==1)
            {
                slide.style.top="40px";
                slide.style.display="block";
            }
            if(index==2)
            {
                slide.style.top="80px";
                slide.style.display="block";
            }
            if(index==3)
            {
                slide.style.top="120px";
                slide.style.display="block";
            }
            if(index==4)
            {
                slide.style.top="160px";
                slide.style.display="block";
            }
        }
        function slideOut()
        {
            var slide=document.getElementById("slider");
            slide.style.display="none";
        }
        function selectedOption(number)
        {
            var text=document.getElementById("text"); 
            var textIn=document.getElementsByClassName('text-In')[number];
            for(j=0;j<5;j++)
            {
                var icons=document.getElementsByClassName('icon')[j];
                icons.style.opacity="0";
            }
            text.innerHTML=textIn.innerHTML;
            var icon=document.getElementsByClassName('icon')[number];
            icon.style.opacity="1";
            OpenMenu();
        }