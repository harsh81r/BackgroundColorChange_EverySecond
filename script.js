const randomcolor = function(){

    const hex='012456789ABCDEF';
    let color='#';
    
    for(let i=0;i<6;i++)
        {
         
        color += hex[Math.floor(Math.random() * 16)];

        }

        return color;
        
        
        }


let interval;
const startcolor = function(){
if(!interval)
    {
interval=setInterval(randomcolorfun,1000)
    }
// interval=null;

function randomcolorfun (){

    document.body.style.backgroundColor=randomcolor();

}
};

const StopInterval = function()
{

    clearInterval(interval)
    interval=null;
}
document.querySelector('#start').addEventListener('click',startcolor);

document.querySelector('#stop').addEventListener('click',StopInterval);


// console.log(randomcolor()


// color tap to color change list

// const color2= function(){

//       const Red='#F00000';
//     const Green ='#008000';
//     const  Blue='#0000FF';
//    const Voilet='#8F00FF';
    
//     let color='#';
    
    
//   color+=Red;
       
//    return color;
          
// }

//onclick
// function redchange()

// {


//     document.body.style.backgroundColor='red';

//     };






// document.body.style.backgroundColor='#008000';//green
// document.body.style.backgroundColor='#0000FF';//blue
// document.body.style.backgroundColor='#8F00FF';//voilet



document.querySelectorAll('.color_ch').forEach( li => {
       li.addEventListener('click', (event) => {
           const color = event.target.getAttribute('datacolor');

           switch (color) {
               case 'Red':
                   document.body.style.backgroundColor = 'red';
                   break;
               case 'Blue':
                   document.body.style.backgroundColor = 'blue';
                   break;
               case 'Voilet':
                   document.body.style.backgroundColor = 'violet';
                   break;

               case 'Green':

                   document.body.style.backgroundColor='green';
                   break;
             case 'Orange':

                    document.body.style.backgroundColor='Orange';
                       break;

             case 'purple':

                       document.body.style.backgroundColor='purple';
                           break;
        

               default:
                   document.body.style.backgroundColor = 'white';
           }
       });
   });
        



