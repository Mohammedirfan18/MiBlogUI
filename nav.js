const menu = document.querySelector('.menu')
const mob_nav = document.querySelector('.mob_navbar')
const Close = document.querySelector('.close_btn')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

const imgPos1 = document.querySelector('.imgpos1')
const imgPos2 = document.querySelector('.imgpos2')
const imgPos3 = document.querySelector('.imgpos3')

const topicsP1 = document.querySelector('.topicsp1')
const topicsP2 = document.querySelector('.topicsp2')
const topicsP3 = document.querySelector('.topicsp3')

const articlesP1 = document.querySelector('.articlesp1')
const articlesP2 = document.querySelector('.articlesp2')
const articlesP3 = document.querySelector('.articlesp3')

const mobileBreakpoint = window.matchMedia("(max-width: 420px)");

const imgs=[1,2,3,4,5]
const topics=["Sports","Travel","Design","Movie","Lifestyle"]
const articles = [38,63,78,125,78]


let pos1=0;
let pos2=1;
let pos3=2;


const handleMenu = ()=>{
    mob_nav.classList.remove('hide')
}
const handleClose = ()=>{
    mob_nav.classList.add('hide')
}
const handleLeftArrMob = () => {
    if(pos1<=0)
    {
        pos1=4;
    }else{
        pos1=(pos1-1);
    }
    imgPos1.src=`/Assets/Hot-topics/topic-${imgs[pos1]}.png`
    topicsP1.innerText=topics[pos1];
    articlesP1.innerText=`${articles[pos1]} Articles`;
}

const handleRightArrMob = () => {
    if(pos1>=4)
    {
        pos1=0;
    }else{
        pos1=(pos1+1);
    }
    imgPos1.src=`/Assets/Hot-topics/topic-${imgs[pos1]}.png`
    topicsP1.innerText=topics[pos1];
    articlesP1.innerText=`${articles[pos1]} Articles`;
    console.log("mobile")
}

const handleLeftArr = () => {
    if(pos1<=0)
    {
        pos1=2;
        pos2=3;
        pos3=4;
    }else{
        pos1=(pos1-1);
        pos2=(pos2-1);
        pos3=(pos3-1);
    }
    imgPos1.src=`/Assets/Hot-topics/topic-${imgs[pos1]}.png`
    imgPos2.src=`/Assets/Hot-topics/topic-${imgs[pos2]}.png`
    imgPos3.src=`/Assets/Hot-topics/topic-${imgs[pos3]}.png`

    topicsP1.innerText=topics[pos1];
    topicsP2.innerText=topics[pos2];
    topicsP3.innerText=topics[pos3];

    articlesP1.innerText=`${articles[pos1]} Articles`;
    articlesP2.innerText=`${articles[pos2]} Articles`;
    articlesP3.innerText=`${articles[pos3]} Articles`;
}

const handleRightArr = () => {
    if(pos3>=4)
    {
        pos1=0;
        pos2=1;
        pos3=2; 
    }else{
        pos1=(pos1+1);
        pos2=(pos2+1);
        pos3=(pos3+1);
    }
    imgPos1.src=`/Assets/Hot-topics/topic-${imgs[pos1]}.png`
    imgPos2.src=`/Assets/Hot-topics/topic-${imgs[pos2]}.png`
    imgPos3.src=`/Assets/Hot-topics/topic-${imgs[pos3]}.png`

    topicsP1.innerText=topics[pos1];
    topicsP2.innerText=topics[pos2];
    topicsP3.innerText=topics[pos3];

    articlesP1.innerText=`${articles[pos1]} Articles`;
    articlesP2.innerText=`${articles[pos2]} Articles`;
    articlesP3.innerText=`${articles[pos3]} Articles`;
    console.log("desktop")

}

menu.addEventListener("click",handleMenu)
Close.addEventListener("click",handleClose)
leftArrow.addEventListener("click",mobileBreakpoint.matches?handleLeftArrMob:handleLeftArr)
rightArrow.addEventListener("click",mobileBreakpoint.matches?handleRightArrMob:handleRightArr)
