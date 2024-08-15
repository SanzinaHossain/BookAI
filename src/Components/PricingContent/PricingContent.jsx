import ApiPricing from "../ApiPricing/ApiPricing"
import { pricingData } from "../PricingTable/PricingData"
import PricingTable from "../PricingTable/PricingTable"
import TextBlock from "../TextBlock/TextBlock"
import { PricingContentStyle } from "./PricingContentStyle"

export default function PricingContent() {
  return (
    <div className={PricingContentStyle.mainContainer}>
      <div className={PricingContentStyle.pricingContainer}>
        {/* Api Pricing Content */}
        <ApiPricing />

        {/* pricing table content  */}
        <PricingTable pricingData={pricingData} />

        {/* Pricing - Token Estimation and Billing Section */}
        <TextBlock />
      </div>
    </div>
  )
}
