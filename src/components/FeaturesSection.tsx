import React from "react";
import {
  TruckIcon,
  CreditCardIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  { icon: TruckIcon, title: "Free Shipping", description: "Order above $200" },
  {
    icon: CreditCardIcon,
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    icon: LockClosedIcon,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    icon: PhoneIcon,
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <feature.icon className="mb-4 h-10 w-10 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
