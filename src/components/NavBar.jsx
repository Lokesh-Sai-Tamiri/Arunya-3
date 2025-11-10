const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 m-3 sm:m-5 md:m-7 lg:m-9 rounded-md px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-milk/80 backdrop-blur-md shadow-sm">
      <img
        src="/images/nav-logo.svg"
        alt="Aarunya Villas - Greenrich Highlands"
        className="w-16 sm:w-18 md:w-20 lg:w-24 h-auto"
      />
    </nav>
  );
};

export default NavBar;
