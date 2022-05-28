const humanScore=document.querySelector("#humanScore")
const computerScore =document.querySelector("#computerScore")
const but = document.querySelectorAll(".but")
const statuss = document.querySelector("#status")
const stattte= document.querySelector("#status2")
const options=["Rock","Scissors","Paper"]
const deletee = document.querySelector(".delete")
console.log(deletee.textContent)
let aa=0;
let bb=0; 

but.forEach(element => {
        element.addEventListener("click",()=>{
                const bottt=bot()
                const choice = element.textContent
                console.log(bottt)
                console.log(choice)
                compare(bottt,choice)
        })
});



deletee.addEventListener("click",()=>{
        aa=0;
        bb=0;
        stattte.textContent=""
        statuss.textContent=""
        humanScore.textContent="0"
        computerScore.textContent="0"
})


function compare(bot1,user1){
        if(bot1==user1){
                statuss.textContent="You played rock. The bot played rock."
                stattte.textContent="You tied. :|"
        }else{
                if(bot1=="Rock"){
                        if(user1=="Scissors"){
                         stattuer(user1,bot1)
                         aa+=1
                         computerScore.textContent=aa
                         stattte.textContent="You lose. :("
                        }else if(user1=="Paper"){
                                
                               stattuer(user1,bot1)
                               stattte.textContent="You win! :)"
                               bb+=1
                               humanScore.textContent=bb

                        }
                }

               else if(bot1=="Scissors"){
                        if(user1=="Rock"){
                                bb+=1
                                stattte.textContent="You win! :)"
                               humanScore.textContent=bb
                         stattuer(user1,bot1)
                        }else if(user1=="Paper"){
                               stattuer(user1,bot1)
                               stattte.textContent="You lose. :("

                               aa+=1
                         computerScore.textContent=aa

                        }
                }

                else if(bot1=="Paper"){
                        if(user1=="Rock"){
                                aa+=1
                                stattte.textContent="You lose. :("

                         computerScore.textContent=aa
                         stattuer(user1,bot1)
                        }else if(user1=="Scissors"){
                                stattte.textContent="You win! :)"

                               stattuer(user1,bot1)
                               bb+=1
                               humanScore.textContent=bb

                        }
                }
        }
}
function bot(){
        let random = Math.floor((Math.random() * 3));
        const botOpt=options[random]
        return botOpt
}

function stattuer(a,b){
        statuss.textContent=`You played ${a} . The bot played ${b}.`
}


