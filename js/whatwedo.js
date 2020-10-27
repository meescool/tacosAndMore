 //Step 1: Create a variable for some element that will animate

var niceItems = $('#niceStuff p');
var menu = $('#menux');
var arrow = $('#arrow');

//Step 2: Create a TimelineMax variable

var niceOpen = new TimelineMax();

//Step 3: Define the animation for the TimelineMax variable, referring back to the elements form step 1. Pause at the end.

niceOpen
    .staggerFromTo(
        niceItems, 0.5, {
            visibility: 'hidden',
            y: 100,
            x: -100,
            opacity: 0
           
        },
        {
            visibility: 'visible',
            y: 0,
            x: 0,
            opacity: 100,
            ease: Circ.easeOut
        }, 0.1
    )
    .fromTo(
        menux, 0.5, {
            rotationX: 0,
            scale: 1,
            rotation: 0,
            opacity: 1
        }, 
        {
            rotationX: 90,
            scale: 0.8,
            rotation: 90,
            opacity: 0.5
        }, '-=0.9'
    )
    .fromTo(
        arrow, 0.5, {
            rotation: 0,
            rotationX: 90,
            opacity: 0.5
        },
        {
            rotation: 90,
            rotationX: 0,
            opacity: 1
        }, '-=0.9'
    )
    .pause()
;

//Step 4: Create an event and play the animation. 

$('#menuTitle').click(function() {
   if (niceOpen.time() > 0) {
       niceOpen.reverse();
   } else {
       niceOpen.play();
   }
});