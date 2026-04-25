import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    guest_name: '',
    date: '',
    time: '',
    party_size: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      await axios.post(`${apiUrl}/api/reservations`, formData);
      setStatus('success');
      setFormData({ guest_name: '', date: '', time: '', party_size: '', phone: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="reservations" className="py-24 bg-sage bg-opacity-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          className="bg-white p-10 md:p-14 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif text-charcoal mb-4">Make a Reservation</h2>
            <p className="text-gray-600">Secure your table at The Lattice Bistro.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10">
              <h3 className="text-2xl text-sage font-serif mb-2">Reservation Confirmed</h3>
              <p className="text-gray-600">We look forward to serving you.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sage underline hover:text-charcoal transition-colors"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="guest_name" 
                    value={formData.guest_name} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-cream"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select 
                    name="party_size" 
                    value={formData.party_size} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all bg-cream"
                  >
                    <option value="" disabled>Select party size</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="11">Larger Party (Please call)</option>
                  </select>
                </div>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">There was an error making your reservation. Please try again.</p>
              )}

              <div className="text-center mt-8">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`btn-primary w-full md:w-auto px-12 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'CONFIRM RESERVATION'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
