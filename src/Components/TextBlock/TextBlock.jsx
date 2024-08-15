import { TextBlockData } from "./TextBlockData"

export default function TextBlock() {
  return (
    <>
      {TextBlockData.map((eachBlock, index) => (
        <div className="mt-8" key={index}>
          <h1 className="text-xl font-semibold mb-2 text-[#a5b4fc]">
            {eachBlock.title}
          </h1>
          <p className="mb-4 inter-title">{eachBlock.text}</p>
        </div>
      ))}
    </>
  )
}
