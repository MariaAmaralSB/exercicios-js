function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa 