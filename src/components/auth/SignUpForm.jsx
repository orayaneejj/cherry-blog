import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignUpForm } from "@/utils/validation";
import { register } from "../../services/authServices";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignUpForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const response = await register(formData);
      navigate("/login");
    } catch (error) {
      toast.custom((t) => (
        <div className="bg-[#EB5164] text-white p-4 rounded-md flex justify-between items-start max-w-md w-full">
          <div>
            <h3 className="font-bold text-lg mb-1">
              Registration failed. Please try again.
            </h3>
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="text-white hover:text-gray-200 ml-1"
          >
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>×</span>
          </button>
        </div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-grow py-10 px-4 md:px-8 lg:px-16 xl:px-20">
      <Toaster />
      <main className="max-w-5xl mx-auto">
        <div className="bg-[#EFEEEB] rounded-xl p-6 md:p-12">
          <h1 className="text-3xl font-semibold text-center mb-10">Sign up</h1>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full name"
                className={`w-full px-4 py-2.5 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-600 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className={`w-full px-4 py-2.5 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white`}
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`w-full px-4 py-2.5 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white`}
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto md:min-w-[120px] md:mx-auto md:flex md:justify-center bg-gray-900 text-white rounded-full py-2.5 px-8 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default SignUpForm;
