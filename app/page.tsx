import { Share2, QrCode, Info, ChevronRight, Wifi, Battery, Signal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-500 to-purple-700 relative overflow-hidden">
      {/* Mobile Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium">
        <div className="flex items-center space-x-1">
          <span>9:41</span>
        </div>
        <div className="flex items-center space-x-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-8 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-6 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      {/* Header Icons */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <QrCode className="w-5 h-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Share2 className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-6 pt-8">
        {/* STC Logo Section */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="relative">
            <div className="w-36 h-36 bg-gradient-to-br from-purple-800 to-purple-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <span className="text-white text-5xl font-bold tracking-tight">stc</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-900 rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-[0.2em] text-white mb-2">STC</h1>
            <p className="text-white/70 text-sm">Saudi Telecom Company</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button className="w-full h-16 bg-white/95 backdrop-blur-sm text-purple-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-purple-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              الدفع السريع
            </span>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-purple-500 rounded-sm"></div>
            </div>
          </Button>

          <Button className="w-full h-16 bg-white/95 backdrop-blur-sm text-purple-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-purple-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              دفع الفواتير
            </span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
            </div>
          </Button>

          <Button className="w-full h-16 bg-white/95 backdrop-blur-sm text-purple-800 hover:bg-white hover:scale-[1.02] transition-all duration-200 rounded-2xl text-lg font-semibold flex items-center justify-between px-6 shadow-lg border border-white/20">
            <ChevronRight className="w-5 h-5 text-purple-900" />
            <span className="flex-1 text-center" dir="rtl" style={{ fontFamily: "system-ui" }}>
              آخر العروض
            </span>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
            </div>
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="w-full max-w-sm mt-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-white/80 text-xs text-center">المحفظة</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-white/80 text-xs text-center">التحويل</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-white/80 text-xs text-center">الرصيد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Info className="w-5 h-5 text-white/80" />
        </div>
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-sm transform rotate-12"></div>
            </div>
            <span className="text-white font-medium text-sm">HeyLink.me</span>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
    </div>
  )
}
