import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            联系我
          </span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            如果您对我的工作感兴趣，或者有任何合作机会，
            欢迎通过以下方式与我联系。
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold mb-2">邮箱</h3>
              <a 
                href="mailto:your.email@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                your.email@example.com
              </a>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                github.com/username
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">💼</span>
            </a>
            <a 
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">🐦</span>
            </a>
            <a 
              href="https://weibo.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">📱</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;