import { skills, skillCategories } from '../data/skills';

const About = () => {
  const getSkillsByCategory = (category: 'frontend' | 'backend' | 'tools' | 'other') => {
    return skills.filter(skill => skill.category === category);
  };

  const getLevelStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            关于我
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">个人简介</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              我是一名充满热情的前端开发者，拥有3年以上的Web开发经验。
              专注于使用现代技术栈构建用户友好的应用程序。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              我热爱学习新技术，注重代码质量和用户体验。
              在团队合作中，我善于沟通，能够快速适应新环境。
            </p>
            <p className="text-gray-300 leading-relaxed">
              目前主要专注于React生态系统，包括TypeScript、Next.js等现代前端技术。
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">技能栈</h3>
            {Object.entries(skillCategories).map(([key, label]) => (
              <div key={key} className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-blue-400">{label}</h4>
                <div className="space-y-2">
                  {getSkillsByCategory(key as any).map(skill => (
                    <div key={skill.id} className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-yellow-400 text-sm">{getLevelStars(skill.level)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;