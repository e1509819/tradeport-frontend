import {
  CloudArrowUpIcon,
  LockClosedIcon,
  MapPinIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    name: "Customer First",
    description:
      "We Put Our Customers First. We are committed to providing the best customer service and support to our customers.",
    icon: MapPinIcon,
  },
  {
    name: "Round The Clock Support",
    description:
      "With 24/7 support, we are always here to help you with any questions or concerns you may have.",
    icon: TicketIcon,
  },
  {
    name: "Real-Time Updates",
    description:
      "Stay up to date with real-time updates on the latest trading opportunities and trends.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Safety First",
    description:
      "Our platform is secure and safe to use. We take the security of our customers very seriously.",
    icon: LockClosedIcon,
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">
            TradePort Singapore
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Your Ideal Trading Companion
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Discover the best trading opportunities and make informed decisions with TradePort. TradePort hosts the best B2B trading platform for businesses to connect and trade with each other. TradePort is the ideal trading companion for businesses looking to expand their reach and grow their business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
