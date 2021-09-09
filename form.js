class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("PLAY")
        this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("CAR RACING GAME")
        title.position(displayWidth/2-50,0)

       
        this.input.position(displayWidth/2-50,displayHeight/2-100)

        
        this.button.position(displayWidth/2-50,displayHeight/2-20)

        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWidth/2-50,displayHeight/4)
        })
    }
}