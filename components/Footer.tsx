import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800 text-white fixed bottom-0 left-64 right-0">
      <p className="text-center">&copy; {new Date().getFullYear()} FPT University SWD Team Bá Trung. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
