
export default function AnswerOption ({children, className, onClick, style}) {
  return (
    <li style={style} className={`answer-option ${className || ''}`} onClick={onClick}>
      <p>{children}</p>
    </li>
  )
}