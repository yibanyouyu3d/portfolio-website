import React from 'react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/30 to-gray-900/10">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              项目作品
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            探索我精心打造的数字作品，每一行代码都承载着对技术的热爱
          </p>
        </div>
        
        {/* 项目网格 */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* 项目截图区域 */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-500/10"></div>
                
                {/* 截图占位符 - 实际项目中可替换为真实截图 */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <span className="text-5xl mb-2 block">📱</span>
                    <span className="text-gray-400 text-sm">项目截图</span>
                  </div>
                </div>
                
                {/* 悬停覆盖层 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-lg font-semibold mb-2 block">查看详情</span>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
                  </div>
                </div>
                
                {/* 项目类型标签 */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm">
                    Web应用
                  </span>
                </div>
              </div>
              
              {/* 项目内容 */}
              <div className="p-6">
                {/* 项目标题 */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                {/* 项目描述 */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-300 rounded-full text-xs font-medium border border-blue-500/20 hover:border-blue-400/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* 操作按钮 */}
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300 group/btn"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        代码
                      </span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        演示
                      </span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* 装饰性边框光效 */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* 底部提示 */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            持续更新中... 更多精彩项目即将呈现
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;