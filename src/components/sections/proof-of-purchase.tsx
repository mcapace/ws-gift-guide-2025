"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, Send, Check, X } from "lucide-react";

export function ProofOfPurchase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    winery: "",
    receipt: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage("Please upload a JPG, PNG, GIF, or PDF file");
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("File size must be less than 10MB");
        return;
      }
      setFormData((prev) => ({ ...prev, receipt: file }));
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("winery", formData.winery);
      if (formData.receipt) {
        formDataToSend.append("receipt", formData.receipt);
      }

      const response = await fetch("/api/proof-of-purchase", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", winery: "", receipt: null });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="proof-of-purchase" className="py-20 md:py-28 bg-gradient-to-b from-white via-neutral-cream/30 to-neutral-cream relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white via-white/95 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-champagne-gold/20 relative overflow-hidden"
        >
          {/* Subtle gold accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne-gold/40 to-transparent" />
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wine-burgundy mb-4">
              Claim Your Free Subscription
            </h2>
            <p className="text-neutral-charcoal text-lg leading-relaxed">
              Purchase from any of our featured partners? Submit your proof of purchase and receive a{" "}
              <span className="font-semibold text-champagne-gold">3-month free subscription</span> to WineSpectator.com
            </p>
          </div>

          {/* Form */}
          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-champagne-gold/20 mb-6">
                <Check className="w-10 h-10 text-champagne-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-wine-burgundy mb-3">
                Thank You!
              </h3>
              <p className="text-neutral-charcoal text-lg">
                Your proof of purchase has been submitted. We'll process your request and send your subscription details to your email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-charcoal mb-2">
                  Full Name <span className="text-wine-burgundy">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-slate/30 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-charcoal mb-2">
                  Email Address <span className="text-wine-burgundy">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-slate/30 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Winery Selection */}
              <div>
                <label htmlFor="winery" className="block text-sm font-medium text-neutral-charcoal mb-2">
                  Winery/Partner <span className="text-wine-burgundy">*</span>
                </label>
                <select
                  id="winery"
                  name="winery"
                  required
                  value={formData.winery}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-slate/30 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a winery/partner</option>
                  <option value="Silver Oak">Silver Oak</option>
                  <option value="Domaine Serene">Domaine Serene</option>
                  <option value="JCB Collection">JCB Collection</option>
                  <option value="John Anthony Vineyards">John Anthony Vineyards</option>
                  <option value="ELLMAN Wine">ELLMAN Wine</option>
                  <option value="Copain Wines">Copain Wines</option>
                  <option value="Calcareous Vineyard">Calcareous Vineyard</option>
                  <option value="Sullivan Rutherford Estate">Sullivan Rutherford Estate</option>
                  <option value="Loco Tequila">Loco Tequila</option>
                </select>
              </div>

              {/* Receipt Upload */}
              <div>
                <label htmlFor="receipt" className="block text-sm font-medium text-neutral-charcoal mb-2">
                  Proof of Purchase (Receipt) <span className="text-wine-burgundy">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="receipt"
                    name="receipt"
                    required
                    accept="image/jpeg,image/jpg,image/png,image/gif,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="receipt"
                    className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-lg border-2 border-dashed border-neutral-slate/30 hover:border-champagne-gold hover:bg-champagne-gold/5 transition-all cursor-pointer"
                  >
                    {formData.receipt ? (
                      <>
                        <Check className="w-5 h-5 text-champagne-gold" />
                        <span className="text-neutral-charcoal font-medium">
                          {formData.receipt.name}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData((prev) => ({ ...prev, receipt: null }));
                            const input = document.getElementById("receipt") as HTMLInputElement;
                            if (input) input.value = "";
                          }}
                          className="ml-auto text-neutral-slate hover:text-wine-burgundy"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 text-neutral-slate" />
                        <span className="text-neutral-charcoal">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-sm text-neutral-slate ml-auto">
                          JPG, PNG, GIF, or PDF (max 10MB)
                        </span>
                      </>
                    )}
                  </label>
                </div>
                {errorMessage && (
                  <p className="mt-2 text-sm text-wine-burgundy">{errorMessage}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shop-now-btn flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Proof of Purchase</span>
                  </>
                )}
              </motion.button>

              {submitStatus === "error" && errorMessage && (
                <div className="p-4 rounded-lg bg-wine-burgundy/10 border border-wine-burgundy/30">
                  <p className="text-sm text-wine-burgundy">{errorMessage}</p>
                </div>
              )}

              {/* Disclaimer */}
              <p className="text-xs text-neutral-slate text-center pt-4">
                By submitting this form, you agree to receive communications from Wine Spectator. 
                Your information will be used solely for processing your subscription offer.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

