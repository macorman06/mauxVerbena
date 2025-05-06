import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { motion } from 'framer-motion';

export default function Home() {
  const sections = [
    { title: 'Menú', path: '/menu', color: 'bg-secondary' },
    { title: 'Bingo', path: '/bingo', color: 'bg-secondary' },
    { title: 'Patrocinadores', path: '/patrocinadores', color: 'bg-secondary' },
    { title: 'Rifa', path: '/rifa', color: 'bg-secondary' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 h-full p-8 overflow-hidden">
      {sections.map((section, index) => (
        <motion.div
          key={section.path}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex-1 min-w-[600px] max-w-[500px] w-full"
        >
          <Link to={section.path}>
            <Card
              className={`${section.color} h-64 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105`}
            >
              <h2 className="text-6xl font-bold text-white text-center">
                {section.title}
              </h2>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
