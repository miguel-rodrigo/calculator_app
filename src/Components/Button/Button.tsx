import './Button.scss'

interface ButtonProps {
  text: string
  action: () => void
}

const Button = function(props: ButtonProps) {
  return (
    <div className="button" onClick={props.action}>
      <span>{props.text}</span>
    </div>
  )
}

export default Button
