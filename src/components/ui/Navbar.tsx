const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit z-10 bg-white py-2">
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Arcs</li>
        <li>Watch</li>
        <li>Latest</li>
      </ul>
    </div>
  );
};

export default Navbar;
