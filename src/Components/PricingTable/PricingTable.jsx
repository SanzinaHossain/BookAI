import { TableHead } from "./PricingData"
import { PricingTableStyle } from "./PricingTableStyle"

export default function PricingTable({ pricingData }) {
  return (
    <div className={PricingTableStyle.container}>
      <table className={PricingTableStyle.tableStyle}>
        <thead className={PricingTableStyle.tableHeadStyle}>
          <tr className={PricingTableStyle.tableHeadRowStyle}>
            {TableHead.map((data, index) => (
              <th key={index} className={PricingTableStyle.tableDataStyle}>
                {data.headTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={PricingTableStyle.tableBodyStyle}>
          {pricingData.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-[#334155] ${
                index === pricingData.length - 1 ? "" : "border-b"
              }`}
            >
              <td className={PricingTableStyle.tableDataStyle}>{item.api}</td>
              <td className={PricingTableStyle.tableDataStyle}>{item.model}</td>
              <td className={PricingTableStyle.tableDataStyle}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
