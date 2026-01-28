const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景渐变效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/30"></div>
      
      {/* 浮动粒子效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-25 animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 头像区域 */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-1.5 animate-gradient-x">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* 实际项目中可以替换为真实的头像图片 */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            {/* 头像装饰环 */}
            <div className="absolute -inset-4 rounded-full border-2 border-blue-400/30 animate-spin-slow"></div>
            <div className="absolute -inset-2 rounded-full border border-purple-400/20"></div>
          </div>
          
          {/* 大标题 */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                创意开发者
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {/* 简介 */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 leading-relaxed font-light">
              将创意转化为
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium mx-2">
                数字体验
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              专注于现代Web技术，热爱创造优雅、高效的用户界面
              <br />
              致力于将复杂问题转化为简洁的解决方案
            </p>
          </div>
          
          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#projects" 
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">探索作品</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
            
            <a 
              href="#contact" 
              className="group px-10 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-white hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                开始合作
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;