import React , {useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(7) ;
  const update = () => {
    setCounter(counter+1);
  }
  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>ตัวเดียวอันเดียว ย่าง !</h1>
      <hr />
      <h3>ราคาไม้ละ {counter} บาท
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      </h3>
      
      <hr />
      <p>5ไม้  {counter*5}  บาท</p>
      <p>10ไม้ {counter*10} บาท</p>
      <p>20ไม้ {counter*20} บาท</p>
      <p>30ไม้ {counter*30} บาท</p>
    </div>
  )
}

export default App