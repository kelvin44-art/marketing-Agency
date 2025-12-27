import React, { useState } from 'react'

function NavBarLists({listName}) {
 const [onMouseHover, setOnMouseHover] = useState(false);
  return (
    <ul className="flex gap-10">
        <li class='list-names' onMouseEnter={() => setOnMouseHover(true)} onMouseLeave={()=>setOnMouseHover(false)}>{listName}
          <div className={` ${onMouseHover? 'w-full bg-amber-500 h-0.5 visible'  : 'w-full bg-amber-500 h-0.5 invisible'}`}></div>
        </li>
   
    </ul>
  )
}

export default NavBarLists