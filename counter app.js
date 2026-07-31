let counter=0;
let choice;
while(choice!=="4"){
    choice=prompt("enter the choice\n"+
        " 1.increase\n"+
         "2.decrease\n"+
         "3.reset\n"+
          "4.exit")

    switch(choice){
        case"1":
        counter++
        console.log(`counter=${counter}`)
        break;
        case "2":
            counter--
        console.log(`counter=${counter}`)
        break;
        case "3":
        counter=0;
        console.log(`counter=${counter}`)
        break;
        case "4":
        console.log(`exit..final counter==${counter}`)
        break;
        default:
            console.log("invalid input")
    
    }
}