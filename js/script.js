const 
  start = document.getElementById('start'),
  reset = document.getElementById('reset'),
  boliLive = document.querySelector('.boli-live'),
  xisLive = document.querySelector('.xis-live'),
  hidden = document.querySelectorAll('.init-live span'),
  click = document.querySelectorAll('.clicksp')

let 
  pass = 1
  stat = true
  c = 0
  ix = []
  ib = []
 
start.addEventListener('click', () => startGame())
reset.addEventListener('click', () => resetGame())

// START

function startGame()
{   
    if(stat === true)
    {
        playerTurn()
        click.forEach((item,index) => item.addEventListener('click', () =>addItem(index)))
        stat = false
    }
    else
    {
        alert('O jogo já iniciou')
    }
 
}

// RESET

function resetGame()
{
    document.location.reload(true)
}

// TURN

function playerTurn()
{
    if(pass % 2 == 1 && pass <= 9)
    {
        boliLive.id = "boli-act"
        xisLive.id = ""
        pass += 1
    }
    else if(pass % 2 == 0 && pass <= 9)
    {
        xisLive.id = "xis-act"
        boliLive.id = ""
        pass += 1
    }
    
}

// ADD

function addItem(i)
{
    if(pass % 2 == 1)
    {
        click[i].classList.add('xis')
        checkGame()
        playerTurn()
        c += 1
    }
    else
    {
        click[i].classList.add('boli')
        checkGame()
        playerTurn()
        c += 1
    }
}

// CHECK


function checkGame()
{
    click.forEach((item,index)=>{
        if(item.classList.contains('xis'))
        {
            ix[index] = index.toString()

            finishGame(ix,"xis")
    
        }
        else if(item.classList.contains('boli'))
        {
            
            ib[index] = index.toString()

           finishGame(ib,"boli")
            
        }
    })
}

function finishGame(i,s)
{
  
    if(s ==='xis' && ((i.includes('0')  && i.includes('1') && i.includes('2'))
    ||(i.includes('3')  && i.includes('4') && i.includes('5'))
    ||(i.includes('6')  && i.includes('7') && i.includes('8'))
    ||(i.includes('0')  && i.includes('3') && i.includes('6'))
    ||(i.includes('1')  && i.includes('4') && i.includes('7'))
    ||(i.includes('2')  && i.includes('5') && i.includes('8'))
    ||(i.includes('0')  && i.includes('4') && i.includes('8'))
    ||(i.includes('2')  && i.includes('4') && i.includes('6'))))
    {
        hidden.forEach((item) => {
            item.classList.add('hidden')
            hidden[0].innerHTML = "! VITORIA !"
            hidden[0].classList.remove('hidden')
        })
               
        document.querySelector('head').innerHTML += "<style>.boli,.boli::after{border-color:#df8169;}</style>"
            
        window.setTimeout(resetGame,800)
        return
    }
    else if (s === 'boli' && ((i.includes('0') && i.includes('1') && i.includes('2'))
    ||(i.includes('3')  && i.includes('4') && i.includes('5'))
    ||(i.includes('6')  && i.includes('7') && i.includes('8'))
    ||(i.includes('0')  && i.includes('3') && i.includes('6'))
    ||(i.includes('1')  && i.includes('4') && i.includes('7'))
    ||(i.includes('2')  && i.includes('5') && i.includes('8'))
    ||(i.includes('0')  && i.includes('4') && i.includes('8'))
    ||(i.includes('2')  && i.includes('4') && i.includes('6'))))
    {
        hidden.forEach((item) => {
            item.classList.add('hidden')
            hidden[0].innerHTML = "! VITORIA !"
            hidden[0].classList.remove('hidden')
        })
        document.querySelector('head').innerHTML += "<style>.xis,.xis::after{background-color:#df8169;}</style>"     
        window.setTimeout(resetGame,800)
        return
    }
    else if (c === 8)
    {
        hidden.forEach((item) => {
            item.classList.add('hidden')
            hidden[0].innerHTML = "! EMPATE !"
            hidden[0].classList.remove('hidden')
            window.setTimeout(resetGame,800)
        })
    }
}
