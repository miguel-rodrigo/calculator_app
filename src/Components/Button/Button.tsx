import './Button.scss'

interface ButtonProps {
  text: string
  type: "light" | "dark" | "main"
  action: () => void
}

const Button = function(props: ButtonProps) {
  return (
    <button className={"button " + props.type} onClick={props.action}>
      <span>{props.text}</span>
    </button>
  )
}

export default Button
