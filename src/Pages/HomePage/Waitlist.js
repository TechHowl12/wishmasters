import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPhoneError('');

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      setLoading(false);
      return;
    }  

    const now = new Date();    
    const time = now.toLocaleString(); // You can format this as needed

    const payload = {
      ...formData,
      time
    };

    try {
        await fetch('https://script.google.com/macros/s/AKfycbxU8SnjlCpX4EDbNmwhM5QX3WPdqdDEMadF7cwEqJ7TLcqtXopyXRa3LGUfqgQ1Ecv_/exec', {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        setFormData({ name: '', phone: '' });
      } catch (error) {
        console.log(error);
        
      }
    setLoading(false);
  };

  return (
    <section id="joinwaitlist" className="w-full bg-[#00603A] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Join the Waitlist</h2>
          <p className="text-white font-light text-sm">
            Be the first to know when we launch. Sign up now and get exclusive early access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="items-center">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full text-sm capitalize px-4 py-2 border-2 border-[#00603A] text-[#00603A] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00603A] transition-all placeholder:text-[#00603A]"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full text-sm capitalize px-4 py-2 border-2 border-[#00603A] text-[#00603A] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00603A] transition-all placeholder:text-[#00603A]"
              required
            />
          </div>
          {phoneError && <p className="text-red-400 text-xs mt-4">{phoneError}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#284a3da7] flex mx-auto mt-7 text-sm md:mt-3 text-white capitalize px-8 py-2 md:block hover:scale-110 transition-all border-2 border-[#00603A] rounded-md"
          >
            {loading ? 'Submitting...' : 'Join the waitlist'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
