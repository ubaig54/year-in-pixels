import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [color, setColor] = useState('')
  const [janMonth, setjanMonth] = useState([])
  const [febMonth, setfebMonth] = useState([])
  const [marchMonth, setmarchMonth] = useState([])
  const [aprilMonth, setaprilMonth] = useState([])
  const [mayMonth, setmayMonth] = useState([])
  const [junMonth, setjunMonth] = useState([])
  const [julMonth, setjulMonth] = useState([])
  const [augMonth, setaugMonth] = useState([])
  const [sepMonth, setsepMonth] = useState([])
  const [octMonth, setoctMonth] = useState([])
  const [novMonth, setnovMonth] = useState([])
  const [decMonth, setdecMonth] = useState([])
  const [colorPopup, setColorPopup] = useState(false)

 

  const getDays = (month) => {
    const year = new Date().getFullYear()
    return new Date(year, month, 0).getDate();
  };

  console.log(getDays())

  // console.log(getMonth('jan'))


  const popupHandle = (e) => {
    const popup = e.target.parentNode.childNodes[1];
    console.log(e.target.parentNode.childNodes)
    if(colorPopup){
      setColorPopup(false)
      popup.style.display = 'none' 
    }else{
      setColorPopup(true)
       popup.style.display = 'flex'
    }
  }

  const boxColorHandle = (e, boxColor) => {
    const box = e.target.parentNode.parentNode.parentNode.childNodes[0]
    
    console.log(box)
    setColor(boxColor)
    if(boxColor === 'green'){
      box.classList.add(boxColor)
      box.classList.remove('yellow')
      box.classList.remove('orange')
      box.classList.remove('red')
    }
    if(boxColor === 'yellow'){
      box.classList.add(boxColor)
      box.classList.remove('green')
      box.classList.remove('orange')
      box.classList.remove('red')
    }
    if(boxColor === 'orange'){
      box.classList.add(boxColor)
      box.classList.remove('yellow')
      box.classList.remove('green')
      box.classList.remove('red')
    }
    if(boxColor === 'red'){
      box.classList.add(boxColor)
      box.classList.remove('yellow')
      box.classList.remove('green')
      box.classList.remove('orange')
    }

    if(boxColor === ''){
      box.classList.remove('red')
      box.classList.remove('yellow')
      box.classList.remove('green')
      box.classList.remove('orange')
      setColorPopup(false)
    }
  }

  console.log(color)
  
// jan month 
  useEffect(() => {
    axios.get('http://localhost:5000/api/janstatus').then(res=>{
        setjanMonth(res.data.color)
        
    })
    .catch(err => {
        console.log(err)
    })
}, [])


const handleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");
  console.log(colorID, 'asdf')

  if(colorID != 1) {
    axios.put("http://localhost:5000/jan/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/janstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// feb month 

useEffect(() => {
  axios.get('http://localhost:5000/api/febstatus').then(res=>{
    setfebMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const febHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");
  console.log(colorID, 'asdf')

  if(colorID != 1) {
    axios.put("http://localhost:5000/feb/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/febstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// march month 

useEffect(() => {
  axios.get('http://localhost:5000/api/marchstatus').then(res=>{
    setmarchMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const marchHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/march/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/marchstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// april month 

useEffect(() => {
  axios.get('http://localhost:5000/api/aprilstatus').then(res=>{
    setaprilMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const aprilHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/april/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/aprilstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}

// may month 

useEffect(() => {
  axios.get('http://localhost:5000/api/maystatus').then(res=>{
    setmayMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const mayHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/may/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/maystatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}

// jun month 

useEffect(() => {
  axios.get('http://localhost:5000/api/junstatus').then(res=>{
    setjunMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const junHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/jun/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/junstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// jul month 

useEffect(() => {
  axios.get('http://localhost:5000/api/julstatus').then(res=>{
    setjulMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const julHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/jul/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/julstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// aug month 

useEffect(() => {
  axios.get('http://localhost:5000/api/augstatus').then(res=>{
    setaugMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const augHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/aug/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/augstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// sep month 

useEffect(() => {
  axios.get('http://localhost:5000/api/sepstatus').then(res=>{
    setsepMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const sepHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/sep/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/sepstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}

// oct month 

useEffect(() => {
  axios.get('http://localhost:5000/api/octstatus').then(res=>{
    setoctMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const octHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/oct/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/octstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// nov month 

useEffect(() => {
  axios.get('http://localhost:5000/api/novstatus').then(res=>{
    setnovMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const novHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/nov/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/novstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}


// dec month 

useEffect(() => {
  axios.get('http://localhost:5000/api/decstatus').then(res=>{
    setdecMonth(res.data.color)
      
  })
  .catch(err => {
      console.log(err)
  })
}, [])

const decHandleClick = (e) => {

  const closePopup = e.target.parentNode.parentNode
  closePopup.style.display = "none" 

  const colorID = e.target.parentNode.parentNode.parentNode.childNodes[0].getAttribute("data-id");

  if(colorID != 1) {
    axios.put("http://localhost:5000/dec/update", {
      id: colorID,
      color: color
    })
  } else {
    axios.post('http://localhost:5000/api/decstatus', {
      color: color
    })
  
    .then((res) => {
      console.log('dsa', res.color)
    })
    .catch(err => {
      console.log(err, "error")
    })
  } 
}







const closePopup = (e) => {
  setColorPopup(false)
  const closePopup = e.target.parentNode.parentNode
   closePopup.style.display = "none" 
}

  return (
    <div className="App">
      <div className="wrapper">
        <div className="all-year">
          <div>JAN</div>
          <div>FEB</div>
          <div>MAR</div>
          <div>APR</div>
          <div>MAY</div>
          <div>JUN</div>
          <div>JUL</div>
          <div>AUG</div>
          <div>SEP</div>
          <div>OCT</div>
          <div>NOV</div>
          <div>DEC</div>
        </div>
    <div className='year-all-days'>
        {/* {

       [...Array(12)].map((q, k) =>  */}

       {/* jan month  */}
        <div className="days">
          { 
            [...Array(getDays(1))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ janMonth[i] ? "day-status-box" + ' ' + janMonth[i].color : "day-status-box" } data-id={ janMonth[i] ? janMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>handleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
            
        </div>

        {/* feb month  */}
        <div className="days">
          { 
            [...Array(getDays(2))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ febMonth[i] ? "day-status-box" + ' ' + febMonth[i].color : "day-status-box" } data-id={ febMonth[i] ? febMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>febHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
            
        </div>

        {/* march month  */}
        <div className="days">
          { 
            [...Array(getDays(3))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ marchMonth[i] ? "day-status-box" + ' ' + marchMonth[i].color : "day-status-box" } data-id={ marchMonth[i] ? marchMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>marchHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
            
        </div>

        {/* april month  */}
        <div className="days">
          { 
            [...Array(getDays(4))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ aprilMonth[i] ? "day-status-box" + ' ' + aprilMonth[i].color : "day-status-box" } data-id={ aprilMonth[i] ? aprilMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>aprilHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
            
        </div>

        {/* may month  */}
        <div className="days">
          { 
            [...Array(getDays(5))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ mayMonth[i] ? "day-status-box" + ' ' + mayMonth[i].color : "day-status-box" } data-id={ mayMonth[i] ? mayMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>mayHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* jun month  */}
        <div className="days">
          { 
            [...Array(getDays(6))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ junMonth[i] ? "day-status-box" + ' ' + junMonth[i].color : "day-status-box" } data-id={ junMonth[i] ? junMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>junHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* jul month  */}
        <div className="days">
          { 
            [...Array(getDays(7))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ julMonth[i] ? "day-status-box" + ' ' + julMonth[i].color : "day-status-box" } data-id={ julMonth[i] ? julMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>julHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* aug month  */}
        <div className="days">
          { 
            [...Array(getDays(8))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ augMonth[i] ? "day-status-box" + ' ' + augMonth[i].color : "day-status-box" } data-id={ augMonth[i] ? augMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>augHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* sep month  */}
        <div className="days">
          { 
            [...Array(getDays(9))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ sepMonth[i] ? "day-status-box" + ' ' + sepMonth[i].color : "day-status-box" } data-id={ sepMonth[i] ? sepMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>sepHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* oct month  */}
        <div className="days">
          { 
            [...Array(getDays(10))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ octMonth[i] ? "day-status-box" + ' ' + octMonth[i].color : "day-status-box" } data-id={ octMonth[i] ? octMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>octHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* nov month  */}
        <div className="days">
          { 
            [...Array(getDays(11))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ novMonth[i] ? "day-status-box" + ' ' + novMonth[i].color : "day-status-box" } data-id={ novMonth[i] ? novMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>novHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>

        {/* dec month  */}
        <div className="days">
          { 
            [...Array(getDays(12))].map((e, i) => 
            
              <div className="day" key={i} >
                <div className={ decMonth[i] ? "day-status-box" + ' ' + decMonth[i].color : "day-status-box" } data-id={ decMonth[i] ? decMonth[i]._id : '1'} onClick={(e)=>popupHandle(e)} ></div>
                 <div className="choose-color">
                    <div className="color"><span  className="green"   onClick={(e)=>boxColorHandle(e, 'green')}></span>green</div>
                    <div className="color"><span  className="yellow"  onClick={(e)=>boxColorHandle(e, 'yellow')}></span>yellow</div>
                    <div className="color"><span  className="orange"  onClick={(e)=>boxColorHandle(e, 'orange')}></span>orange</div>
                    <div className="color"><span  className="red"     onClick={(e)=>boxColorHandle(e, 'red')}></span>Red</div>
                    <div className='okay-cancel-button'>
                      <div className='cancel' onClick={(e)=>closePopup(e)}>CANCEL</div>
                      <div className='okay'   onClick={(e)=>decHandleClick(e)}>OK</div>
                    </div>
                  </div>
               </div>
              )
            }
        </div>




          {/* )
        } */}

        </div>
      </div>
    </div>
  );
}

export default App;
