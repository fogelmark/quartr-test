export default function Navbar() {
  return (
    <nav className="mb-36 flex w-full items-center justify-between gap-2 bg-slate-50 p-4 shadow-lg">
      <a href="#" className="text-xl font-semibold text-slate-800">
        DevMaster Academy
      </a>
      <ul className="flex items-center gap-4">
        <li>
          <a href="#" className="text-slate-500 hover:text-slate-900">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-500 hover:text-slate-900">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-500 hover:text-slate-900">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-slate-500 hover:text-slate-900">
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
          >
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  )
}
