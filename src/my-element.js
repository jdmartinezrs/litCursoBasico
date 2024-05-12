import { LitElement, html,css} from "lit";

class Myelement extends LitElement{
  static properties = {
    

  }

  constructor(){
    super();
    
  }

  static styles = css`

  * {
    font-family: Arial;
  }

  .music-container {
    
    width: 300px;
    height: 800px;
    background-color: lightgray;
    padding: 20px;
    color: black; 
    
}

.top-chart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  //background: yellow;
 
}

.album {
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  row-gap: 10px;
  flex-wrap: wrap;
}


.albums{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.album__1{

  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__1__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__1 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 

  }

.album__2{
  
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
 //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 

}

.album__2__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__2 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 
  
  }

.album__3{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__3__list{
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__3 img{
width: 115px;
height:115px;
border-radius: 10px; 

}

.album__4{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
}

.album__4__list{
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__4 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 

  }

.lista__canciones{
  width: 300px;
    display:flex;
    flex-direction:row;
    //background: blue;
    justify-content: space-beetween;
    
  }

.lista__canciones img{
  width: 50px;
  height:50px;
  border-radius: 5px; 
}

.lista__canciones__li{
  list-style: none;
  line-height: 2px;
  width: 190px;
  padding-left:10px;

 
}

.lista__canciones1{
  width: 300px;
    display:flex;
    //background: blue;
    justify-content: space-beetween;
    
  }

.lista__canciones__li1{
    list-style:none;
    padding-top:8px;
    padding-left:3px;
  }





.titleyml{
  width:
  display:flex;
  //background: green;
  width: 300px;
}

.lista_canciones__a img{
  width: 50px;
  height:50px;
  border-radius: 5px;
}

.carrusell{
  //background: orange;
  width:400px;
  height:82px;
  overflow-y: auto;
  
}




  
   
  
  `
 
  render(){
    return html`
<body>
<div class="music-container"> 

    <header>
        <h1>Discover New music</h1>
        <div class="top-chart">
            <h4>Top-chart</h4>
            <select>
                <option>Week</option>
            </select>
        </div>
    </header>



  <div class="album">
 
  

    <div class="album__1">
    <ul class="album__1__list">
    <img src="/img/com.png">
        <li>OK Computer</li>
        <li><small>Radiohead, 1997</small></li>
    </ul>
  </div>



  <div class="album__2">
  <ul class="album__2__list">
  <img src="/img/rain.png">
      <li>In Rainbows</li>
      <li><small>Radiohead, 2004</small></li>
  </ul>
  </div>


  <div class="album__3">
<ul class="album__3__list">
  <img src="/img/bell.png">
      <li>The Division Bell</li>
      <li><small>Pink Floyd, 1994</small></li>
  </ul>
  </div>


  <div class="album__4">
  
  <ul class="album__4__list">
  <img src="/img/cc.png">
      <li>Crystal Castles I</li>
      <li><small>Crystal Castles, 2008</small></li>
  </ul>
  </div>


  <div class="titleyml">
  <h4>You may like</h4>
  </div>


<div class="carrusell">

  <div class="lista__canciones"> 
  <img src="/img/uno.png">
  <div class= "lista__canciones__li">  
  <li><p>Static</p></li>
  <li><p><small>Godspeed You, Black Emperor</small></p></li>
    </div>
    <div class=lista__canciones__li1>
  <li>22:36</li>
  <li><small>2001<small></li>
    </div>
  </div>

  <div class="lista__canciones"> 
  <img src="/img/hem.png">
  <div class= "lista__canciones__li">  
  <li><p>Static</p></li>
  <li><p><small>Godspeed You, Black Emperor</small></p></li>
    </div>
    <div class=lista__canciones__li1>
  <li>22:36</li>
  <li><small>2001<small></li>
    </div>
  </div>




 




  
 
 
  
  
  <div class="lista_canciones__a">
  <img src="/img/hem.png">
  </div>
  </div>
     

     



</body>
    `
  }


  

    


    
    
    
  }

customElements.define("my-element", Myelement);
