// src/components/AuthModal.tsx
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const { login } = useAuth();

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");

  const [isNewUser, setIsNewUser] = useState(false); // mock check
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit number");
      return;
    }

    // mock new user check
    setIsNewUser(mobile.endsWith("7")); // just pretend users ending in 7 are new 😄

    setError("");
    setStep("otp");
  };

  const handleVerifyOtp = () => {
    if (otp !== "1234") {
      setError("Invalid OTP. Try 1234 for mock.");
      return;
    }

    login({ mobile, name: isNewUser ? name : undefined });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>

        {step === "phone" && (
          <>
            <h2 className="text-xl font-bold mb-4">Login to ByteBite</h2>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleSendOtp}
              className="w-full bg-orange-500 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP (hint: 1234)"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            {isNewUser && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border rounded px-4 py-2 mb-4"
              />
            )}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded"
            >
              Verify & Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
