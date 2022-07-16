import "./Screen.scss"

interface ScreenProps {
  currentNumbers: string
  currentOp: string
}

const Screen = ({currentNumbers, currentOp}: ScreenProps) => {
  return (
    <div className="screen">
      <div className="text">
        <p className="currentOp">{ currentOp }</p>
        <p className="currenNumbers">{ currentNumbers }</p>
      </div>
    </div>
  )
}

export default Screen;
