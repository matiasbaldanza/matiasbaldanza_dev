import React from 'react'

function DateLabel({ ...props }) {
  if (!props.children) return null

  return (
    <time
        className={props.className}
    > 
        {new Date(props.children).toLocaleDateString('es', props.options)}
    </time>
  )
}

export default DateLabel