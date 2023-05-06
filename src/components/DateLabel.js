function DateLabel ({ ...props }) {
  if (!props.children) return null

  const dateString = new Date(props.children)
    .toLocaleDateString('es', { ...props.options, timeZone: 'UTC' })

  return (
    <time
      className={props.className}
    >
      {props.callback ? props.callback(dateString) : dateString}
    </time>
  )
}

export default DateLabel
