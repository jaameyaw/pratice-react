

export default function QuestionOption ({children, isSelected, ...rest}) {
  return (
    <button className= {isSelected? 'active' : null}  {...rest}>{children}</button>
  )
}