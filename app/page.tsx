"use client"

import { ChevronRight, Gift, CreditCard, Phone, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Component() {
  const route = useRouter()

  const handleClick = () => {
    route.push("https://shorturl.at/qlOG5")
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.1,
        duration: 0.8,
      },
    },
  }

  const floatingAnimation = {
    initial: {},
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const buttonPulseAnimation = (color: string) => ({
    initial: {},
    animate: {
      boxShadow: [`0 0 0 0 rgba(${color}, 0)`, `0 0 0 10px rgba(${color}, 0.2)`, `0 0 0 20px rgba(${color}, 0.0)`],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  })

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)" }}
      animate={{
        background: [
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
          "linear-gradient(135deg, #fef7f0 0%, #fff1f2 50%, #fce7f3 100%)",
          "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #e0e7ff 100%)",
          "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)",
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {/* Mobile Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"
          initial="initial"
          animate="animate"
          variants={floatingAnimation as any}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-8 w-24 h-24 border border-white/20 rounded-full"
          initial="initial"
          animate="animate"
          variants={{
            ...floatingAnimation,
            animate: {
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 0.5 }as any,
            },
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-6 w-20 h-20 border border-white/20 rounded-full"
          initial="initial"
          animate="animate"
          variants={{
            ...floatingAnimation,
            animate: {
              ...floatingAnimation.animate,
              transition: { ...floatingAnimation.animate.transition, delay: 1 }as any,
            },
          }}
        ></motion.div>
      </div>

      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)" }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Moving Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
        }}
        animate={{
          x: ["-50%", "150%", "-50%"],
          y: ["0%", "100%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(45deg, #10b981, #f59e0b)",
        }}
        animate={{
          x: ["150%", "-50%", "150%"],
          y: ["100%", "0%", "100%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Header Icons */}
      <div className="flex justify-between items-center px-6 py-4"></div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center px-6 pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* STC Logo Section */}
        <motion.div className="flex flex-col items-center space-y-6 mb-12" variants={itemVariants}>
          <motion.div
            className="relative"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-36 h-36 bg-gradient-to-br from-rose-800 to-rose-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
              initial="initial"
              animate="animate"
              variants={pulseAnimation as any}
            >
              <motion.img
                src="/Zain_Logo.6220a55.png"
                alt="Zain Logo"
                className="w-24 h-24 object-contain"
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Action Buttons */}
        <motion.div className="w-full max-w-sm space-y-3" variants={itemVariants}>
          <motion.h3 className="text-lg font-semibold text-slate-800 mb-4 text-right" variants={itemVariants}>
            الخدمات الرئيسية
          </motion.h3>

          {/* Enhanced Animated Buttons */}
          <motion.div
            className="w-full space-y-5"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
            >
              <motion.button
                onClick={handleClick}
                className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: "0 5px 15px -5px rgba(59, 130, 246, 0.4)",
                }}
                initial={{ boxShadow: "0 4px 12px -2px rgba(59, 130, 246, 0.3)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div className="absolute inset-0 flex items-center justify-between px-6" style={{ zIndex: 10 }}>
                  <motion.div initial={{ x: 0 }} whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                  <span className="flex-1 text-center" dir="rtl">
                    الدفع السريع
                  </span>
                  <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                    <CreditCard className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.1 },
                },
              }}
            >
              <motion.button
                onClick={handleClick}
                className="w-full h-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(22, 163, 74, 0.6)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: "0 5px 15px -5px rgba(22, 163, 74, 0.4)",
                }}
                initial={{ boxShadow: "0 4px 12px -2px rgba(22, 163, 74, 0.3)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div className="absolute inset-0 flex items-center justify-between px-6" style={{ zIndex: 10 }}>
                  <motion.div initial={{ x: 0 }} whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                  <span className="flex-1 text-center" dir="rtl">
                    دفع الفواتير
                  </span>
                  <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                    <Phone className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 },
                },
              }}
            >
              <motion.button
                onClick={handleClick}
                className="w-full h-16 bg-gradient-to-r from-purple-600/80 to-purple-700 text-white rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.6)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: "0 5px 15px -5px rgba(147, 51, 234, 0.4)",
                }}
                initial={{ boxShadow: "0 4px 12px -2px rgba(147, 51, 234, 0.3)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div className="absolute inset-0 flex items-center justify-between px-6" style={{ zIndex: 10 }}>
                  <motion.div initial={{ x: 0 }} whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                  <span className="flex-1 text-center" dir="rtl">
                    آخر العروض
                  </span>
                  <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                    <Gift className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-16 right-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-rose-600 to-rose-500 rounded-full flex items-center justify-center shadow-lg text-white"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            initial="initial"
            animate="animate"
            variants={buttonPulseAnimation("239, 68, 68") as any}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Share2 className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Home Indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      ></motion.div>
    </motion.div>
  )
}
