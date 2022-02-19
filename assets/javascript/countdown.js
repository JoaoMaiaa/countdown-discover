function times(){
    setInterval(()=>{

        let date = new Date()
        let day = date.getDate() 
        let hours = date.getHours() 
        let minutes = date.getMinutes() 
        let seconds = date.getSeconds() 

        let clock = document.getElementById('clock')
    
        clock.innerText = `${day} : ${hours} : ${minutes} : ${seconds}`

    }, 1000)
}

times()
