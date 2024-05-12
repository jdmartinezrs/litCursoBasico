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
    height: 700px;
    background-color: red;
    padding: 20px;
    color: black; 
}

.top-chart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.album {
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  row-gap: 20px;
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
  background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__1__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}


.album__2{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  

}

.album__2__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__3{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  

}

.album__3__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__4{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__4__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}










  
  
  
  
  `
 
  render(){
    return html`
<body>
<div class="music-container"> 

    <header>
        <h1>Discover New music</h1>
        <div class="top-chart">
            <span>Top-chart</span>
            <select>
                <option>Week</option>
            </select>
        </div>
    </header>



  <div class="album">
 
  

    <div class="album__1">
    <ul class="album__1__list">
        <li>OK Computer</li>
        <li><small>Radiohead, 1997</small></li>
    </ul>
  </div>



  <div class="album__2">
  <img src="path/to/in-rainbows.jpg" alt="In Rainbows">
  <ul class="album__2__list">
      <li>In Rainbows</li>
      <li><small>Radiohead, 2004</small></li>
  </ul>
  </div>


  <div class="album__3">
  <img src="path/to/in-rainbows.jpg" alt="In Rainbows">
  <ul class="album__3__list">
      <li>The Division Bell</li>
      <li><small>Pink Floyd, 1994</small></li>
  </ul>
  </div>


  <div class="album__4">
  <img src="path/to/in-rainbows.jpg" alt="In Rainbows">
  <ul class="album__4__list">
      <li>Crystal Castles I</li>
      <li><small>Crystal Castles, 2008</small></li>
  </ul>
  </div>




  </div>
</div>
</body>
    `
  }


  

    


    
    
    
  }

customElements.define("my-element", Myelement);
