onmessage = (data) => {
    console.log('recebido!', data)
    setTimeout(() => {
        self.postMessage({        
            status: 'done' 
        })        
    }, 2000)
}