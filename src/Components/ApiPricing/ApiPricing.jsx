import { apiPricingData } from "./ApiPricingData"
import { ApiPricingStyle } from "./ApiPricingStyle"

export default function ApiPricing() {
  return (
    <>
      <h2 className={ApiPricingStyle.titleStyle}>{apiPricingData.title}</h2>
      <p className={ApiPricingStyle.textStyle}>{apiPricingData.text}</p>
    </>
  )
}
