import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import Button from '../Common/Button';
import { donationCategories } from '../../data/donationCategories';
import { FiInfo } from 'react-icons/fi';

const DonateNow = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Details:', { selectedCategory, amount: amount || customAmount, isRecurring, donorName, donorEmail, donorPhone, message });
    alert('Thank you for your donation! You will be redirected to payment gateway.');
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Donate Now"
        subtitle="Make an Impact Today."
        description="Your support enables us to transform lives and build stronger communities."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-dark mb-6">Choose a Donation Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {donationCategories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-secondary bg-primary shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-secondary hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h4 className="font-semibold text-dark">{category.title}</h4>
                        <p className="text-sm text-gray-600">{category.description}</p>
                        {category.impact && (
                          <p className="text-xs text-secondary mt-1">{category.impact}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Donation Amount */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4">Select Amount</h4>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[1000, 5000, 10000, 25000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountSelect(amt)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        amount === amt
                          ? 'bg-secondary text-white shadow-lg'
                          : 'bg-primary text-dark hover:bg-secondary/20'
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    className="px-4 py-3 border rounded-lg w-40"
                  />
                </div>
              </div>

              {/* Recurring Donation */}
              <div className="mb-8">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <span className="font-semibold">Make this a monthly recurring donation</span>
                </label>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4">Your Information</h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                  <textarea
                    placeholder="Message (Optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Donation Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h4 className="text-xl font-bold text-dark mb-4">Donation Summary</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">
                      {donationCategories.find(c => c.id === selectedCategory)?.title || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-secondary text-xl">
                      ₹{(amount || customAmount || 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">{isRecurring ? 'Monthly' : 'One-time'}</span>
                  </div>
                </div>
                
                <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <FiInfo className="text-secondary mt-0.5" />
                    <p className="text-sm text-gray-700">
                      Your donation is eligible for 50% tax exemption under Section 80G of Income Tax Act, 1961.
                    </p>
                  </div>
                </div>

                <Button onClick={handleSubmit} variant="primary" fullWidth size="lg">
                  Proceed to Donate
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Secure payment gateway powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateNow;