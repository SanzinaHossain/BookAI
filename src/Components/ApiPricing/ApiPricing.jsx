import { apiPricingData } from "./ApiPricingData"

export default function ApiPricing() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[#a5b4fc]">
        {apiPricingData.title}
      </h2>
      <p className="mb-4 ">{apiPricingData.text}</p>
    </>
  )
}
