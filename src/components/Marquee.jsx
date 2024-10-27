import React from 'react'
import { AiOutlineSound } from 'react-icons/ai'
 
const Marquee = () => {
  return (
    <div className="d-flex align-items-center gap-2 btn2 py-1 px-2">
        <AiOutlineSound size={22} />
        <marquee  direction="left">
            <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio pariatur dolores earum dolore ipsa possimus numquam soluta aspernatur explicabo dolorem provident incidunt natus enim a aperiam, quae iure labore!</small>
        </marquee>
    </div>
  )
}

export default Marquee
