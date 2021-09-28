function show(ele)
        {
            var el=document.getElementById(ele);
            if (el!=null){
                if(el.style.display=="block"){
                    el.style.display="none";
                }
                else{
                    el.style.display="block";
                }
                return false;
            }
        }

        
        function show1(ele)
        {
            var el=document.getElementById(ele);
            if (el!=null){
                if(el.style.display=='none'){
                    el.style.display="block";
                }
                return false;
            }
        }
        function show2(ele){
            var el=document.getElementById(ele);
            if (el!=null){
                if(el.style.display=="block"){
                    el.style.display="none";
                }
               
                return false;
            }
        }
        function getname(){
            var el=document.getElementById('name').innerHTML;
            return el;

        }
        function getname1(){
            var el=document.getElementById('name1').innerHTML;
            return el;

        }

        function getname2(){
            var el=document.getElementById('name2').innerHTML;
            return el;

        }
        function getname3(){
            var el=document.getElementById('name4').innerHTML;
            return el;

        }
        function getname4(){
            var el=document.getElementById('name5').innerHTML;
            return el;

        }

        function getname5(){
            var el=document.getElementById('name6').innerHTML;
            return el;

        }
        function getname6(){
            var el=document.getElementById('name7').innerHTML;
            return el;

        }
        function getname7(){
            var el=document.getElementById('name8').innerHTML;
            return el;

        }

        function getname8(){
            var el=document.getElementById('name9').innerHTML;
            return el;

        }
        
        function vanish(ele)
        {
            var el=document.getElementById(ele);
            if(el!=null)
            {
                if(el.style.display=='block')
                {
                    el.style.display='none';
                }
                return True;
            }
        }
        function button1(btn){
            document.getElementById(btn).disabled=true;

        }
        function enable1(ele){
            document.getElementById(ele).disabled=false;

        }