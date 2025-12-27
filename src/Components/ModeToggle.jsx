import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import { useState } from 'react'

function ModeToggle() {

    const [timeOfDay, setTimeOfDay] = useState(false)

  return (
    <div 
       className='py-10'
       
       style={{
        display: 'flex', 
        border: '1px solid black',
        borderRadius: '20px',
        alignItems: 'center',
        padding: '2px',
        paddingLeft: '5px', 
        paddingRight: '5px',
        width: '60px',
        height: '35px',
        justifyContent: `${timeOfDay? 'flex-start' : 'flex-end'}`
        }} >
            <img onClick={() => setTimeOfDay(!timeOfDay)} src={`${timeOfDay ? sun : moon}`} alt=""
            className='h-5'/>
        </div>
  )
}

export default ModeToggle