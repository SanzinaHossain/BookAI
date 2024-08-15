import { TextBlockData } from "./TextBlockData"
import { TextBlockStyle } from "./TextBlockStyle"

export default function TextBlock() {
  return (
    <>
      {TextBlockData.map((eachBlock, index) => (
        <div className={TextBlockStyle.container} key={index}>
          <h1 className={TextBlockStyle.titleStyle}>{eachBlock.title}</h1>
          <p className={TextBlockStyle.textStyle}>{eachBlock.text}</p>
        </div>
      ))}
    </>
  )
}
