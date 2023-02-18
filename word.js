const word = "GRAINS"
let chance = 7
let correct = 0
let btnAll = document.querySelectorAll(".btn-letter")
const guess = (evt) =>
{
    document.getElementById("lbl-results").innerHTML = `<p id="lbl-results"></p>` //makes the sorry wrong letter message go away
    let x = evt.target.innerText
    let span =""

    //check if user got the correct letter
    for(i = 0; i < word.length; i ++)
    {
        if (x === word[i])
        {
            span = `<span id="${x}">${x}</span>`
            document.getElementById(x).innerHTML = span
            correct++
            console.log(evt)
            break
        }
    }

    //subtract chances
    if(x != word[i])
    {
        chance--
        document.getElementById("lbl-results").innerHTML = `<p id="lbl-results">Sorry, this letter is not in the word</p>`
    }

    //display chances
    document.querySelector(".chn").innerHTML = `<h2>Chances remaining: ${chance}</h2>`

    //disable button
    const btn = evt.target
    btn.disabled = true


    if(correct === word.length)  //you win sequence
    { 
        for(i = 0; i < btnAll.length; i++)
        {
            btnAll[i].disabled = true
        }
        document.getElementById("msg").innerHTML = "alert(`YOU WIN!`);"
    }
    else if(chance === 0)  //you lose sequence
    {
    
        for(i = 0; i < btnAll.length; i++)
        {
            btnAll[i].disabled = true
        }
        document.getElementById("msg").innerHTML = "alert(`YOU LOSE!`);"
    }
}

const reset = () =>
{
    //reset scores
    chance = 7
    correct = 0

    let html, id

    //add back the blanks in the UI
    for(i=0; i < word.length; i++)
    {
        id = word[i]
        html = `<span id="${id}">_</span>`
        document.getElementById(id).innerHTML = html
    }

    document.getElementById("msg").innerHTML = ""

    //reset to 0 in the UI
    document.querySelector(".chn").innerHTML = `<h2>Chances remaining: ${chance}</h2>`

    //enable all button again
    for(i = 0; i < btnAll.length; i++)
        {
            btnAll[i].disabled = false
        }
}

//letter button listener
document.getElementById("letters").addEventListener("click", guess)
//reset button listener
document.querySelector("button").addEventListener("click", reset)