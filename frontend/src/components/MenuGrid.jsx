import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function MenuGrid() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch from the backend. 
    // For now we will fetch, but if it fails (DB not running yet), we fall back to dummy data.
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
    axios.get(`${apiUrl}/api/menu`)
      .then(res => {
        if (res.data.length > 0) {
          setMenuItems(res.data);
        } else {
          useFallback();
        }
      })
      .catch(() => {
        useFallback();
      })
      .finally(() => setLoading(false));

    function useFallback() {
      setMenuItems([
        { id: '1', title: 'Seared Duck Trio', description: 'Pan-seared duck breast served with cherry gastrique.', price: '32.00', image_url: 'https://images.unsplash.com/photo-1628198622814-1e01761e0f0a?auto=format&fit=crop&q=80', category: 'Mains' },
        { id: '2', title: 'Forest Mushroom Risotto', description: 'Arborio rice cooked with a blend of wild mushrooms.', price: '26.50', image_url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80', category: 'Mains' },
        { id: '3', title: 'Burrata Heirloom Tomato', description: 'Fresh burrata cheese with heirloom tomatoes.', price: '18.00', image_url: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80', category: 'Starters' },
        { id: '4', title: 'Classic Crème Brûlée', description: 'Rich vanilla bean custard with a caramelized sugar crust.', price: '12.00', image_url: 'https://images.unsplash.com/photo-1473269712320-f24ce56facd1?auto=format&fit=crop&q=80', category: 'Desserts' },
      ]);
    }
  }, []);

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-charcoal mb-4">The Menu</h2>
          <div className="w-16 h-1 bg-sage mx-auto"></div>
        </motion.div>

        {loading ? (
          <div className="text-center text-charcoal">Loading menu...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {menuItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-md">
                  <img src={item.image_url} alt={item.title} loading="lazy" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                    <span className="text-sage font-medium text-lg mt-2 sm:mt-0">${Number(item.price).toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
