import React from 'react'
import state from '@/store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '@/config/helpers'

function CustomButton({title, customStyles , type , handleClick}) {
    const snap = useSnapshot(state)
    const generateStyle  = (type) => {
        if(type === "filled") {
            return{
                backgroundColor: snap.color,
                color:getContrastingColor(snap.color),
            }
        } else if (type === "outline") {
            return{
                borderWidth:"1px",
                borderColor:snap.color,
                color: snap.color
            }
        }
    }
    return (
    <button className={`px-2 ${customStyles} rounded-xl`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton