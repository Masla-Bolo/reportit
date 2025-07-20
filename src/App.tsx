import { useEffect, useState } from 'react';
import { 
  Eye, 
  MessageSquare, 
  Camera, 
  MapPin, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Github,
  Shield,
  Bell,
  Zap,
  Globe
} from 'lucide-react';

export function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Shield className="w-5 h-5 text-white drop-shadow-lg" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ReportIt
            </span>
          </div>
          <a 
            href="https://github.com/Masla-Bolo/masla-bolo-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-all duration-300 border border-slate-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">View on GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              ReportIt
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-light mb-8 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>See it,</span>{' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>Say it,</span>{' '}
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>Snap it</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Empower your community through crowdsourced issue reporting. Bridge the gap between citizens and officials with transparency, accountability, and real action.
          </p>
          
          <div className="flex items-center justify-center">
            <a 
              href="https://we.tl/t-xVW0zdYg8V"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 border border-cyan-500/20"
            >
              <span className="flex items-center space-x-2">
                <span>Get the App</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced tools designed to transform how communities address local issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Visual Issue Reporting",
                description: "Snap photos of problems and instantly create detailed reports with location data",
                color: "from-cyan-500 to-blue-500",
                glow: "group-hover:shadow-cyan-500/30"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Geospatial Tracking",
                description: "Advanced mapping with PostGIS and OpenStreetMap for precise issue location",
                color: "from-blue-500 to-purple-500",
                glow: "group-hover:shadow-blue-500/30"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Official Integration",
                description: "Direct connection between citizens and verified local government officials",
                color: "from-purple-500 to-pink-500",
                glow: "group-hover:shadow-purple-500/30"
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Real-time Updates",
                description: "Live notifications powered by WebSocket technology for instant status updates",
                color: "from-emerald-500 to-cyan-500",
                glow: "group-hover:shadow-emerald-500/30"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Progress Tracking",
                description: "Visual status flow from report to resolution with transparent accountability",
                color: "from-orange-500 to-red-500",
                glow: "group-hover:shadow-orange-500/30"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Community Driven",
                description: "Collaborative platform fostering engagement through comments, likes, and updates",
                color: "from-indigo-500 to-blue-500",
                glow: "group-hover:shadow-indigo-500/30"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${feature.glow}`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, effective process from problem identification to resolution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                icon: <Eye className="w-12 h-12" />,
                title: "See the Issue",
                description: "Spot a problem in your community - potholes, broken streetlights, sanitation issues, or any local concern that needs attention.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                step: "02",
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Report & Engage",
                description: "Create a detailed report with photos, location data, and category selection. Engage with your community through comments and updates.",
                color: "from-blue-500 to-purple-500"
              },
              {
                step: "03",
                icon: <Zap className="w-12 h-12" />,
                title: "Track Progress",
                description: "Monitor your report's journey from submission to official approval, active resolution, and final completion with real-time notifications.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-cyan-500/50`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Community Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                ReportIt transforms passive observation into active community engagement. By providing a direct channel between citizens and officials, we create accountability, transparency, and measurable change.
              </p>
              <div className="space-y-6">
                {[
                  "Bridge communication gaps between public and authorities",
                  "Promote transparency in local governance",
                  "Enable community-driven problem solving",
                  "Create accountability through public tracking",
                  "Foster civic engagement and participation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/20">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">Citizens</div>
                    <div className="text-gray-400">Empowered Voices</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/20">
                    <div className="text-3xl font-bold text-blue-300 mb-2">Officials</div>
                    <div className="text-gray-400">Direct Accountability</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/20">
                    <div className="text-3xl font-bold text-purple-300 mb-2">Issues</div>
                    <div className="text-gray-400">Resolved</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl border border-emerald-500/20">
                    <div className="text-3xl font-bold text-emerald-300 mb-2">Impact</div>
                    <div className="text-gray-400">Community Wide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Shield className="w-5 h-5 text-white drop-shadow-lg" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ReportIt
            </span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Empowering communities through transparent, accountable issue reporting. 
            Building bridges between citizens and officials for a better tomorrow.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://github.com/Masla-Bolo/masla-bolo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700/50 text-gray-500 text-sm">
            © 2024 ReportIt. Building better communities together.
          </div>
        </div>
      </footer>
    </div>
  );
}