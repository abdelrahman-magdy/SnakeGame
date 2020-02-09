import React,{useState,useEffect} from 'react';
import Snake from './components/Snake';
import SnakeFood from './components/SnakeFood';
import './App.css';


const RIGHT="RIGHT"
const DOWN="DOWN"
const UP="UP"
const LEFT="LEFT"

function App() {

  const getrandomcordinates =()=>{
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min + 1)+min)/2)*2;  
    let y = Math.floor((Math.random()*(max-min + 1)+min)/2)*2;
    return [x,y]  
  }


  const [food, setfood] = useState(getrandomcordinates());
  const [snakeDots, setSnakeDots] = useState([[0,0],[2,0]]);
  const [direction, setDirection] = useState("RIGHT");
  // const [speed, setSpeed] = useState(500);

  useEffect(()=>{
    setInterval( moveSnake , 2000 )
    // moveSnake()
    document.onkeydown = onKeyDown 
    console.log("onceeeeeeeeeeeeeeeeeeeeeee")
  },[])

    useEffect(()=>{
      // setInterval( moveSnake , 1000 )
      // document.onkeydown = onKeyDown 
      console.log("direction useEffect")
      console.log("<<<<direction useEffect>>>",direction)
    },[direction])
    
    useEffect(()=>{
      // setInterval( moveSnake , 1000 )
      // document.onkeydown = onKeyDown 
      console.log("snakeDots useEffect")
      console.log("snakeDots useEffect>>>",snakeDots)
    },[snakeDots])
  
  const onKeyDown = (e) => {
    e = e || window.event
    console.log("event key" ,typeof e.keyCode.toString())
    switch(e.keyCode.toString()){
      case '38':
        setDirection("UP");
        break;
      case '40':
        setDirection("DOWN");
        break;
      case '37':
        setDirection("LEFT");
        break;
      case '39':
        setDirection("RIGHT");
        break;
    }
    console.log("onKeyDown direction>>",direction)
  }

  const moveSnake = ()=>{
    // console.log("snake>>>>",snakeDots)
    let dots = snakeDots ;
    // console.log("dots",dots.length)
    let head = dots[ (dots.length - 1) ]; 
    // console.log("dots head head",head)
    
    switch(direction){
      case "LEFT":
        head = [ head[0] - 2 , head[1] ];
        break;
      case "DOWN":
        head = [ head[0] , head[1] + 2 ];
        break;
      case "UP":
        head = [ head[0] , head[1] - 2 ];
        break;
      case "RIGHT":
        head = [ head[0] + 2 , head[1] ];
        break;  
    }
    console.log("moveSnake direction>>",direction)
     console.log("head afte switch",head)
     dots.push([...head])
    //  console.log(" befor shift dots",dots)
     dots.shift()
    //  console.log(" afte shift dots",dots)
    setSnakeDots([...dots]);
    //  console.log(" afte dots dots>",dots);
    //  console.log(" afte dots setSnake>",snake)

  }

  return (
    <div className="snake-area" >
      <Snake snakeDots={snakeDots} />
      <SnakeFood foodLocation={food} />
    </div>
  );
}

export default App;
