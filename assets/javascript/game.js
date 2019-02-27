var userText = document.getElementById("user-text");
var guess_letter = document.getElementById("guess_letters");
var alphabet_check = [".","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
var guess_word = [];
var word = "namenamea";
var check_guess_booleen = false;
var wrong_guess = [];
var multi_index = [];
var guess_remaining_count = 9;
var reduce_count_boo = true;
var final_word = ""
var display_loss = document.getElementById("display_loss");
var display_win = document.getElementById("display_win");
var Answer = document.getElementById("Answer");
var losscount = 0
var wincount = 0
var html_background = document.getElementById("background");
var background = [{
    image: "assets/images/background.jpg"
},
{
    image: "assets/images/background2.jpg"
},
{
    image: "assets/images/background3.jpg"
},
{
    image: "assets/images/background4.jpg"
},
{
    image: "assets/images/background5.jpg"
},
{
    image: "assets/images/background6.jpg"
},
{
    image: "assets/images/background7.jpg"
},
{
    image: "assets/images/background8.jpg"
},
{
    image: "assets/images/background9.jpg"
},
{
    image: "assets/images/background10.jpg"
},
{
    image: "assets/images/background11.jpg"
},
{
    image: "assets/images/background12.jpg"
},
{
    image: "assets/images/background13.jpg"
},
{
    image: "assets/images/background14.jpg"
}
]

var LeagueArray = [
    {
        word: "warwick",
        image: "assets/images/warwick.png"
    },
    {
        word: "udyr",
        image: "assets/images/udyr.png"
    },
    {
        word: "tryndamere",
        image: "assets/images/tryndamere.png"
    },
    {
        word: "yasuo",
        image: "assets/images/yasuo.png"
    },
    {
        word: "viktor",
        image: "assets/images/Viktor.png"
    },
    {
        word: "taric",
        image: "assets/images/taric.png"
    },
    {
        word: "singed",
        image: "assets/images/Singed.png"
    },
    {
        word: "shen",
        image: "assets/images/shen.png"
    },
    {
        word: "sejuani",
        image: "assets/images/Sejuani.png"
    },
    {
        word: "renekton",
        image: "assets/images/Renekton.png"
    },
    {
        word: "quinn",
        image: "assets/images/Quinn.png"
    },
    {
        word: "nidalee",
        image: "assets/images/nidalee.png"
    },
    {
        word: "nasus",
        image: "assets/images/nasus.png"
    },
    {
        word: "maokai",
        image: "assets/images/Maokai.png"
    },
    {
        word: "malzahar",
        image: "assets/images/malzahar.png"
    },
    {
        word: "malphite",
        image: "assets/images/malphite.png"
    },
    {
        word: "lissandra",
        image: "assets/images/Lissandra.png"
    },
    {
        word: "kassadin",
        image: "assets/images/kassadin.png"
    },
    {
        word: "jhin",
        image: "assets/images/Jhin.png"
    },
    {
        word: "jax",
        image: "assets/images/Jax.png"
    },
    {
        word: "draven",
        image: "assets/images/Draven.png"
    },
    {
        word: "mordekaiser",
        image: "assets/images/mordekaiser.png"
    },
    {
        word: "teemo",
        image: "assets/images/teemo.png"
    },
    {
        word: "aatrox",
        image: "assets/images/aatrox.png"
    },
    {
        word: "lee sin",
        image: "assets/images/lee sin.png"
    },
    {
        word: "brand",
        image: "assets/images/brand.png"
    },
    {
        word: "amumu",
        image: "assets/images/amumu.png"
    },
    {
        word: "anivia",
        image: "assets/images/anivia.png"
    },
    {
        word: "annie",
        image: "assets/images/annie.png"
    },
    {
        word: "blitzcrank",
        image: "assets/images/Blitzcrank.png"
    },
    {
        word: "chogath",
        image: "assets/images/ChoGath.gif"
    },
    {
        word: "azir",
        image: "assets/images/Azir.gif"
    },
    {
        word: "darius",
        image: "assets/images/darius.png"
    },
    {
        word: "rengar",
        image: "assets/images/Rengar.png"
    },
    {
        word: "zed",
        image: "assets/images/zed.png"
    },
    {
        word: "ahri",
        image: "assets/images/ahri.png"
    },
    {
        word: "tristana",
        image: "assets/images/Tristana.png"
    },
    {
        word: "vi",
        image: "assets/images/vi.png"
    },
    {
        word: "vladimir",
        image: "assets/images/vladimir.png"
    },
    {
        word: "hecarim",
        image: "assets/images/hecarim.png"
    },
    {
        word: "ekko",
        image: "assets/images/ekko.png"
    },
    {
        word: "fiddlesticks",
        image: "assets/images/fiddlesticks.png"
    },
    {
        word: "nami",
        image: "assets/images/Nami.png"
    },
    {
        word: "corki",
        image: "assets/images/corki.png"
    },
    {
        word: "diana",
        image: "assets/images/diana.png"
    },
    {
        word: "poppy",
        image: "assets/images/poppy.png"
    },
    {
        word: "wukong",
        image: "assets/images/wukong.png"
    },
    {
        word: "riven",
        image: "assets/images/riven.png"
    },
    {
        word: "veigar",
        image: "assets/images/veigar.png"
    },
    {
        word: "volibear",
        image: "assets/images/volibear.png"
    },
    {
        word: "ezreal",
        image: "assets/images/ezreal.png"
    },
    {
        word: "urgot",
        image: "assets/images/urgot.png"
    },
    {
        word: "vayne",
        image: "assets/images/vayne.png"
    },
    {
        word: "yorick",
        image: "assets/images/yorick.png"
    },
    {
        word: "varus",
        image: "assets/images/varus.png"
    },
    {
        word: "zoe",
        image: "assets/images/zoe.png"
    },
    {
        word: "trundle",
        image: "assets/images/trundle.png"
    },
    {
        word: "thresh",
        image: "assets/images/thresh.png"
    },
    {
        word: "skarner",
        image: "assets/images/skarner.png"
    },
    {
        word: "jinx",
        image: "assets/images/jinx.png"
    },
    {
        word: "sion",
        image: "assets/images/sion.png"
    },
    {
        word: "ryze",
        image: "assets/images/ryze.png"
    },
    {
        word: "pantheon",
        image: "assets/images/pantheon.png"
    },
    {
        word: "gnar",
        image: "assets/images/gnar.png"
    },
    {
        word: "gangplank",
        image: "assets/images/gangplank.png"
    },
    {
        word: "fizz",
        image: "assets/images/fizz.png"
    },
    {
        word: "gragas",
        image: "assets/images/gragas.png"
    }


]

var randombackground = Math.floor(Math.random() * background.length);
var set_background_random = background[randombackground].image;

var randomNumber = Math.floor(Math.random() * LeagueArray.length -1);
//var randomNumber = LeagueArray.length -1;
//var randomNumber = 0;
var champion = LeagueArray[randomNumber].word;
var championimage = LeagueArray[randomNumber].image;

function set_image_background(){
    
    randombackground = Math.floor(Math.random() * background.length);
    set_background_random = background[randombackground].image;
    console.log(set_background_random + "set_background_random")
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('"+set_background_random+"')";
    document.body.style.backgroundSize = "1390px 782px";
  }
  set_image_background()
// function set_image_background(randombackground) {   
//     var sethtmlBack = 
//     set_background_random = background[randombackground].image;//////////////") no-repeat right top";
//     console.log(set_background_random+" set_background_random")
//     document.body.style.background = "#f3f3f3 url("+set_background_random+") ";
//     document.html_background = "#f3f3f3 url("+set_background_random+")";
//     set_background_size()
//   }

//   function set_background_size() {
//     console.log(set_background_size+" set_background_size")
//     document.getElementById("js_background_id").style.backgroundSize = "500px 300px;";
//   }


function set_image() {
    var setimage = document.querySelector("#displayimage");
    setimage.src = championimage;
}
 set_image()
function set_word(){
    for (i =0;i <champion.length;i++){
        if (champion[i]==" "){
            guess_word.push(".");
        }else{
            guess_word.push("_");
        }
       
        
    }
}
set_word()

function get_multi_index (var1,var2){//if a letter occurs more that one time return the indexes
    multi_index = [];
    for(i = 0;i <var1.length; i++ ){
        if(var1[i] === var2){
            multi_index.push(i);
        }
    }
return multi_index;
}

function set_guess_word (){
    for(i =0;i<champion.length;i++){

    }
}

function add_letter (evet_key){
    check_guess(evet_key);
    // if(check_guess_booleen){
        console.log(champion+" add_letter")
        var letter_index = get_multi_index(champion,evet_key);
        
        for(j = 0; j <letter_index.length;j++){//add letters if it occurs mora than one time
            for (i =0;i <champion.length;i ++){
                
                if (i == letter_index[j]){//add a letter to the index position
                    guess_word[i] = evet_key;
                }else if(alphabet_check.indexOf(guess_word[i]) == -1){
                    guess_word[i] = "_";
                    
                }else if (champion[i] == " "){
                    guess_word[i] = " ";
                }
                

            }
        }
    // }
//    }else{
//             for (i =0;i <word.length;i ++){
//                 guess_word[i] = guess_word[i];
//             }
   }
//   }



function check_guess(someLetter){
    if(champion.indexOf(someLetter) > -1){
        check_guess_booleen = true;
        reduce_count_boo = false;
    }else{
        check_guess_booleen = false;
        // guess_remaining_count -=1;      
       
        if(wrong_guess.indexOf(someLetter) > -1){
            console.log("check_guess_booleen = false")
            wrong_guess = wrong_guess;
            reduce_count_boo = false;
        }else{
            wrong_guess.push(someLetter);
            console.log("check_guess_booleen = false ELSE")
            console.log(wrong_guess)
            reduce_count_boo = true;
            reduce_count();
            //add_letter (someLetter)
        }
        
    }
}

function reduce_count (){
    if(reduce_count_boo){
        guess_remaining_count -=1;
    }

}

function rest(){
    guess_remaining_count = 9;
    wrong_guess =[];
    guess_word = [];
    console.log(guess_word+"rest")
    final_word = "";
    
    // set_image_background()
    // html_background.textContent = set_background_random;
    randomNumber = Math.floor(Math.random() * LeagueArray.length);
    // randomNumber = randomNumber + 1;
    champion = LeagueArray[randomNumber].word;
    championimage = LeagueArray[randomNumber].image;
    set_image()
    set_word()
    set_image_background()
}

function check_for_win(check_guess_word){
    var x = 0;
    for(i = 0; i < check_guess_word.length; i++){
        if(alphabet_check.indexOf(check_guess_word[i]) > -1){
            x ++;
        }
        
    }
    if (x==check_guess_word.length){
        return true;
    }else{
        return false;
    }    
}

final_word = guess_word.join(" ") 
    console.log(final_word +" final_word"); 
    guess_letter.textContent = final_word;

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {

//   userText.textContent = event.key;
//   guess_letter.textContent = guess_word;


//   check_guess(event.key);
  add_letter(event.key);
//   if(check_guess_booleen){
    console.log(guess_word +" guess_word"); 
    final_word = guess_word.join(" ") 
    console.log(final_word +" final_word"); 
    guess_letter.textContent = final_word;
    // console.log("guess_word_after")
    // console.log(guess_word_after + " A")    
//   }
    final_word = guess_word.join(" ") 
    // console.log("A"+ guess_word+ "A")     
    guess_letter.textContent = final_word;
  
  var wrong_guess1 = wrong_guess.join(" ") 
  userText.textContent = wrong_guess1;

  
  guess_remaining.textContent = "Guess Remaining: " + guess_remaining_count;
  if (check_for_win(guess_word)){
    wincount = wincount+1;
    display_win.textContent = "Wins: " + wincount;
    rest()
    userText.textContent = wrong_guess1;
  }
  
  if (guess_remaining_count == 0){
    losscount = losscount + 1;
    display_loss.textContent = "Losses: " + losscount;
    Answer.textContent = "Answer: " +champion.split().join(" ")
    rest()
  }else{
    Answer.textContent = "";
    display_loss.textContent = "Losses: " + losscount;
  }
  display_loss.textContent = "Losses: " + losscount;
  
//   guess_remaining.textContent = "Guess Remaining: " + guess_remaining_count;
};





