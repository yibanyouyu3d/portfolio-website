const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              我的作品集
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © 2024 个人作品集. 保留所有权利.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              首页
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              关于我
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              项目
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              联系我
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            使用 React + TypeScript + Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;