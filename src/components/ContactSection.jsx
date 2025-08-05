import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setMessage('Please correct the errors in the form.');
      return;
    }
    setMessage('Sending message...');
    const formUrl = import.meta.env.VITE_FORMSPREE_URL;
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: dataToSend,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setMessage('Message sent successfully! Thank you.');
        setFormData({ subject: '', name: '', email: '', message: '' });
        setErrors({});
      } else {
        const data = await response.json();
        setMessage(data.errors ? data.errors.map(error => error.message).join(', ') : 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please check your network and try again.');
    }
  };

  return (
    <section id="contact" className="px-4 py-20 bg-transparent pt-20 pb-10">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100"
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
        <div>
          <input type="text" name="subject" placeholder="Subject (optional)" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 shadow-sm" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 shadow-sm ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'}`} required />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="w-full">
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 shadow-sm ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'}`} required />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 shadow-sm ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'}`} required ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-md w-full sm:w-auto font-semibold transform hover:scale-105">
          Send Message
        </button>
        {message && <p className={`mt-4 text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
      </form>
    </section>
  );
};

export default ContactSection;