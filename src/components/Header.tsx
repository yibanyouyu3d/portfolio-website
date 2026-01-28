import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            我的作品集
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">关于我</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">项目</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;