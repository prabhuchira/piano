



// document.getElementById("c").addEventListener('click',()=>{
//     console.log('windows')
//     var audio = new Audio("./sounds/c_major.wav");
//     audio.play();
    
// })

const playEvent = (ev) =>{
    var audio = new Audio(`./sounds/` + ev).play();
}

(()=>{
    var array = [
        {key:"c_major.wav",keyCode:"a"},
        {key:"csharp_major.wav",keyCode:"w"},
        {key:"d_major.wav",keyCode:"s"},
        {
            key:"dsharp_major.wav",
            keyCode:"e"
        },
        {
            key:"e_major.wav",
            keyCode:"d"
        },
        {
            key:"f_major.wav",
            keyCode:"r"
        },  
        {
            key:"fsharp_major.wav",
            keyCode:"f"
        },
        {
            key:"g_major.wav",
            keyCode:"t"
        },
        {
            key:"gsharp_major.wav",
            keyCode:"g"
        },
        {
            key:"a_major.wav",
            keyCode:"y"
        },
        {
            key:"asharp_major.wav",
            keyCode:"h"
        },
        {
            key:"b_major.wav",
            keyCode:"u"
        },

       ]
    array.forEach(item=>{
        console.log(item.key.replace("_major.wav",""))
        // console.log(item)

        
        document.getElementById((item.key).replace("_major.wav","")).addEventListener("mousedown",async()=>{
            console.log(item.key.replace("_major.wav",""))
            playEvent(item.key)
            console.log(item,"this is the item")
            
            
        })

        
    
    })
    
    
    window.addEventListener("keypress",(e)=>{
        
       array.forEach(item=>{
           
        if(e.key == item.keyCode){
          
           playEvent(item.key)
        }

       })
    }
        
        
    )

})()
