import React, { useState } from 'react'; // CORRECT
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // MUST be inside the function
  
  return (
    <nav>...</nav>
  );
};

export default Navbar;