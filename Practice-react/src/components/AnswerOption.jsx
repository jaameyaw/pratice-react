
export default function AnswerOption ({children, className, onClick, style, iconClassName}) {
  return (
    <li style={style} className={`answer-option ${className || ''}`} onClick={onClick}>
      <p>{children}</p>
      <i className={iconClassName}></i>
    </li>
  )
}