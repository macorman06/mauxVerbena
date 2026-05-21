import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { supabase } from '../lib/supabase';

export default function Layout() {
  const [readyOrder, setReadyOrder] = useState<number | null>(null);

  useEffect(() => {
    const channel = supabase
      .channel('orders-ready')
      .on('broadcast', { event: 'order_ready' }, ({ payload }) => {
        setReadyOrder(payload.orderId);
        setTimeout(() => setReadyOrder(null), 8000);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />

      <AnimatePresence>
        {readyOrder !== null && (
          <motion.div
            key={readyOrder}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 text-center min-w-[160px]"
          >
            <p className="text-sm font-medium text-gray-500 mb-1">🔔 Pedido listo</p>
            <p className="text-6xl font-bold text-green-600">#{readyOrder}</p>
            <p className="text-xs text-gray-400 mt-2">Pasa a recogerlo</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
