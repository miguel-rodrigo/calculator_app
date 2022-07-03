import './Button.scss'

interface ButtonProps {
  text: string
  type: "light" | "dark" | "main"
  action: () => void
}

const Button = function(props: ButtonProps) {
  return (
    <div className={"button " + props.type} onClick={props.action}>
      <span>{props.text}</span>
    </div>
  )
}

export default Button
