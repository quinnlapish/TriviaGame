//set up//

var rightanswers = 0;
var wronganswers =0;
var wins =0;
var fails =0;
var answerstowin=6;

//game rules and start game//

function startgame ()

{


var useranswer = `input[name="answer"]:checked`;
$(useranswer).val() (edited);



}

//game rules //


if (rightanswers == answerstowin)
    {
     wins++;
    console.log(rightanswers)
    $("#wins").text(wins);
    alert ("You Win!");
    startgame();
    }
    else if (rightanswers > answerstowin)
    {
        failures ++; 
        $("#failures").text(failures);
        startgame();
    }
    

//timer//


