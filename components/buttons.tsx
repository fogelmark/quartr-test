import { FaArrowRight } from "react-icons/fa"

export default function Buttons() {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="flex items-center gap-2 rounded-3xl bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
      >
        Enroll
        <FaArrowRight />
      </button>
      <button
        type="button"
        className="flex items-center gap-2 rounded-3xl border border-indigo-600 bg-white px-6 py-2 text-indigo-600 hover:border-indigo-700 hover:bg-slate-100"
      >
        Try for free!
        <FaArrowRight />
      </button>
    </div>
  )
}
