import { TableHead } from "./PricingData"
import { PricingTableStyle } from "./PricingTableStyle"

export default function PricingTable({ pricingData }) {
  return (
    <div className={PricingTableStyle.container}>
      <table className={PricingTableStyle.tableStyle}>
        {/* Table Head Content */}

        <thead className={PricingTableStyle.tableHeadStyle}>
          <tr className={PricingTableStyle.tableHeadRowStyle}>
            {TableHead.map((data, index) => (
              <th key={index} className={PricingTableStyle.tableDataStyle}>
                {data.headTitle}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body Content */}

        <tbody className={PricingTableStyle.tableBodyStyle}>
          {pricingData.map((item, index) => (
            <tr
              key={index}
              className={`dark:border-borderColor border-light_borderColor ${
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
