import React from "react";

interface SubscribeButtonProps {
  onClick: () => void;
  isSubmitting: boolean;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  onClick,
  isSubmitting,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isSubmitting}
      className="px-6 py-3 w-full text-white font-semibold text-[18px] bg-red-500 hover:bg-yellow-500 duration-1000 opacity-70"
    >
      {isSubmitting ? "Subscribing..." : "Subscribe"}
    </button>
  );
};

export default SubscribeButton;
