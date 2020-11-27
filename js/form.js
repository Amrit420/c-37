class Form{
    constructor(){
        this.input= createInput("name")
        this.button= createButton("Play Game")
        this.greeting = createElement("h2")
    }


 display(){
    var title= createElement('h2')
    title.html("racing")
    title.position(130,0)
   
    this.input.position(130,160)
    
    this.button.position(250,200)

    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
         player.name=this.input.value()
        playerCount +=1;
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello"+ player.name);
       this.greeting.position(130,160)

        
    })
}

hide(){
    this.button.hide()
    this.greeting.hide() 
    this.input.hide()
}

}