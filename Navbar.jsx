<nav className="flex items-center gap-8">
  {["Home", "All Appointment", "Dashboard"].map((link) => (
    <a
      key={link}
      href={`/${link.toLowerCase().replace(" ", "")}`}
      className="group relative py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {link}
      {/* Dynamic Animated Sliding Underline */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-full" />
    </a>
  ))}
</nav>