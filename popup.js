
    function TIME (){
        const time=document.getElementById("t");
        time.innerHTML=`${new Date().toLocaleTimeString()}`;
        }
        setInterval(TIME,1000)
        
        const date=document.getElementById("d")
        date.innerHTML=`${new Date().toLocaleDateString()}`;
        
        document.querySelector(".fa-redo-alt").addEventListener("click",()=>{
            location.reload()})
        
            document.querySelector(".fa-window-maximize").addEventListener("click",()=>{
                window.open()})
        
                document.querySelector(".fa-window-restore").addEventListener("click",()=>{
                    resizeWindow()
                    console.log("clicked")
        
                })
                    function resizeWindow(){ 
                   window.open(" ", "", "width=300, height=200")
                    }
        
            
        const body = document.querySelector("body")
        const Toggle = document.querySelector(".toggle");
        const topsearch = document.querySelector("#Top_search");   
            Toggle.onclick = function (){
                body.classList.toggle("light");
                topsearch.classList.toggle("light");
            }



              

                