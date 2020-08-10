



// document.getElementById("c").addEventListener('click',()=>{
//     console.log('windows')
//     var audio = new Audio("./sounds/c_major.wav");
//     audio.play();
    
// })

(()=>{
    var array = ["c_major.wav","csharp_major.wav","d_major.wav","dsharp_major.wav","e_major.wav","f_major.wav","fsharp_major.wav","g_major.wav","gsharp_major.wav","a_major.wav","asharp_major.wav","b_major.wav"]
    array.forEach(item=>{
        console.log(item.replace("_major.wav",""))
        console.log(item)

        
        document.getElementById(item.replace("_major.wav","")).addEventListener("mousedown",async()=>{
            console.log(item.replace("_major.wav",""))
            // console.log('windows')
            var audio = new Audio(`./sounds/` + item).play();
            console.log(item,"this is the item")
            
            
        })
        
    
    })
    


})()
