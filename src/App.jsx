// text-[#e2e8f0]
// primary-[#6366f1]
// bg-[#0f172a]
//section-bg-[#1e293b]
//border-color-[#334155]
import "./App.css"
import { pricingData } from "./Components/PricingTable/PricingData"
import PricingTable from "./Components/PricingTable/PricingTable"
import TextBlock from "./Components/TextBlock/TextBlock"

export default function App() {
  return (
    <div>
      <div className="bg-[#6366f1] h-40 justify-center flex text-white items-center font-bold lg:text-5xl md:text-5xl text-3xl">
        <h1>Book Generator API</h1>
      </div>
      <div className="bg-[#0f172a] flex justify-center items-center p-10 h-[100%] ">
        <div className="bg-[#1e293b] text-[#e2e8f0] p-6 rounded-md max-w-4xl w-[90vw] mx-auto  border-2 border-[#334155] inter-title ">
          <h2 className="text-2xl font-bold mb-4 text-[#a5b4fc]">
            API Pricing
          </h2>
          <p className="mb-4 ">
            Our API pricing is based on the model used and the number of tokens
            processed.Here a breakdown of the costs:
          </p>

          {/* pricing table content  */}
          <PricingTable pricingData={pricingData} />

          {/* Pricing - Token Estimation and Billing Section */}
          <TextBlock />
        </div>
      </div>
    </div>
  )
}
