// text-[#e2e8f0]
// primary-[#6366f1]
// bg-[#0f172a]
//section-bg-[#1e293b]
//border-color-[#334155]
import "./App.css"
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
          <div className="rounded-lg  border border-[#334155] text-[#e2e8f0] inter-title max-w-[100vw]">
            <table className="w-full text-left ">
              <thead className="bg-[#6366f1] text-sm text-white">
                <tr>
                  <th className="p-4">API</th>
                  <th className="p-4">MODEL</th>
                  <th className="p-4">PRICE PER 1K TOKENS</th>
                </tr>
              </thead>
              <tbody className="inter-title p-5">
                <tr className="border-b border-[#334155]">
                  <td className="p-4">OpenAI</td>
                  <td className="p-4">GPT-3.5</td>
                  <td className="p-4">$0.002</td>
                </tr>
                <tr className="border-b border-[#334155]">
                  <td className="p-4">OpenAI</td>
                  <td className="p-4">GPT-4</td>
                  <td className="p-4">$0.03</td>
                </tr>
                <tr className="border-b border-[#334155]">
                  <td className="p-4">Together AI</td>
                  <td className="p-4">Llama-2-70b</td>
                  <td className="p-4">$0.0008</td>
                </tr>
                <tr>
                  <td className="p-4">Together AI</td>
                  <td className="p-4">Llama-2-13b</td>
                  <td className="p-4">$0.0006</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-[#a5b4fc]">
              Token Estimation
            </h3>
            <p className="mb-4 inter-title">
              On average, 1 token is approximately 4 characters or 0.75 words.
              For precise pricing, we recommend using our token calculator tool.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-[#a5b4fc] ">
              Billing
            </h3>
            <p className="inter-title">
              You will only be charged for the tokens used in generating the
              book. The API tracks token usage and bills accordingly. Detailed
              usage reports are available in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
