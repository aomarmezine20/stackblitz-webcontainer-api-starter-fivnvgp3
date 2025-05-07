import React from 'react';
import { useParams } from 'react-router-dom';

export default function CheckoutPage() {
  const { planId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      <div className="max-w-2xl mx-auto">
        {/* Checkout form will be implemented later */}
      </div>
    </div>
  );
}