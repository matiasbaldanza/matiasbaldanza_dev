import clsx from "clsx"

function PaginationButton({ disabled = false, onClick, ...props }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={props.className}
    >
      {props.children}
    </button> 
  )
}

export default PaginationButton