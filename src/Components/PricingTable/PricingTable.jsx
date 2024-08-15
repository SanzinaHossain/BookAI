export default function PricingTable({ pricingData }) {
  return (
    <div className="rounded-lg border border-[#334155] text-[#e2e8f0] inter-title w-full overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-[#6366f1] text-sm text-white rounded-t-lg">
          <tr className="rounded-t-lg">
            <th className="p-4">API</th>
            <th className="p-4">MODEL</th>
            <th className="p-4">PRICE PER 1K TOKENS</th>
          </tr>
        </thead>
        <tbody className="inter-title p-5">
          {pricingData.map((item, index) => (
            <tr
              key={index}
              className={`border-b border-[#334155] ${
                index === pricingData.length - 1 ? "" : "border-b"
              }`}
            >
              <td className="p-4">{item.api}</td>
              <td className="p-4">{item.model}</td>
              <td className="p-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
