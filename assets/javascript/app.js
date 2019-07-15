//set up//

var rightanswers = 0;
var wronganswers =0;
var wins =0;
var fails =0;
var answerstowin=6;

var t=60;
var inter;


//game rules and start game//
$("#startgame").on("click",startgame);
function startgame ()
{

    inter = setInterval(timer,1000);

$("#Parent").append(
    ` <div class="questionbox">       What is the scientific name of a pear?                             

    <form action="">
        <input type="radio" name="0" value="True"> Pyrus<br>
        <input type="radio" name="0" value="false"> Peraculous<br>
        <input type="radio" name="0" value="false"> Pearabola<br>
        <input type="radio" name="0" value="False"> Prunence
      </form>

    </div>
    <br>
    <div class="questionbox">       Where do pears grow?                              

        <form action="">
            <input type="radio" name="1" value="false"> Plants <br>
            <input type="radio" name="1" value="false"> In the ground <br>
            <input type="radio" name="1" value="false"> In animals <br>
            <input type="radio" name="1" value="true"> On trees
          </form>
    
        </div>
        <br>
        <div class="questionbox">       How many varieties of pears are there worldwide?                             

            <form action="">
                <input type="radio" name="2" value="false"> 267 <br>
                <input type="radio" name="2" value="false"> 2100 <br>
                <input type="radio" name="2" value="true"> 3000 <br>
                <input type="radio" name="2" value="false"> 12
              </form>
        
            </div>
            <br>
            <div class="questionbox">       What did pears used to be called?                              

                <form action="">
                    <input type="radio" name="3" value="false"> Bobas<br>
                    <input type="radio" name="3" value="true"> Butter fruit<br>
                    <input type="radio" name="3" value="false"> Peety Weetys<br>
                    <input type="radio" name="3" value="false"> Carepears
                  </form>
            
                </div>
                <br>
                <div class="questionbox">       What is pear wood used for?                              

                    <form action="">
                        <input type="radio" name="4" value="false"> Constructing shoes<br>
                        <input type="radio" name="4" value="true"> Constructing instruments <br>
                        <input type="radio" name="4" value="false"> Constructing yarn<br>
                        <input type="radio" name="4" value="false"> Constructing coasters
                      </form>
                
                    </div>

                    <br>

                    <div class="questionbox">       Does a pear care if you sit on a chair and brush it's hair?                           

                        <form action="">
                            <input type="radio" name="5" value="false"> No, but a bear cares if you sit on a chair and brush it's hair<br>
                            <input type="radio" name="5" value="false"> sometimes<br>
                            <input type="radio" name="5" value="false"> Not even a little bit<br>
                            <input type="radio" name="5" value="true"> Always
                          </form>
                    
                        </div>`
            )



}

//submit button//

$("#submit").on("click", gameover);



//game rules //




if (rightanswers == answerstowin)
    {
     wins++;
    console.log(right0s)
    $("#wins").text(wins);
    alert ("You Win!");
    startgame();
    }
    else if (rightanswers < answerstowin)
    {
        fails ++; 
        $("#failures").text(failures);
        startgame();
    }
    

//timer//

function timer (){

    t--;
$("#time-left").html("time left " + t);
    if (t == 0) {
gameover();
fails ++; 

    }
}


function gameover(){

    for (var i=0; i < 6; i ++){

        var useranswers = `input[name=` +i +`]:checked `;
        if ($(useranswers).val() == "true")
        {
            rightanswers ++;
    
        }
      else {
    
        wronganswers ++;
      }
    
    }
    
    $("#wins").text("Right answers " + rightanswers);
    $("#fails").text("Wrong answers " + wronganswers);

    
clearInterval (inter);

$("#Parent").html("  ");


 
}