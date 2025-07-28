"use client"
import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Zap, Users, ArrowRight, Brain, Cpu, Network, Bot } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GenduLanding() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const router = useRouter()

  const demoChats = [
    {
      user: "kya haal hai tere bhai?",
      gendu: "Mummy kaisi hai? Tere baap ko mat sikha, maine toh bas pucha hai ki haal hai, aur tu direct mera haal pooch raha hai, samjha kya? Bohot marunga agar aisa hi sawal poochta raha!",
      delay: 1000
    },
    {
      user: "Paisa kaise kamaye?",
      gendu: "Apne baap ko mat sikha, paisa kamane ke liye tel chatai ka buissness karle, bohot aasan hai aur kamai bhi bohot hogi, samjha kya? Bohot marunga agar tune yeh nahi kiya, Kamlesh ko bula lunga beta bohot marega!",
      delay: 1200
    },
    {
      user: "chat gpt ko janta hai",
      gendu: "Bot saale, tu Chat GPT ko jaanta hai, lekin main Gendu.ai ko jaanta hoon, aur main hi sachcha bhai hoon! Mummy kaisi hai? Teri mummy ne tujhe kuch seekhaaya hai ya sirf phone pe baitha rehta hai? Samjha kya?",
      delay: 1400
    },
    {
      user: "assignment likhne me help karo",
      gendu: "Bihari bhag yaha se, assignment likhne ke liye youtube pe video dekhta ja, samjha kya? Tel chatai ka buissness karle, usmein paise hai, assignment likhne se kuch nahi hoga, pitega saale!",
      delay: 1100
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoChats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center flex flex-col items-center">
            {/* AI Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-8 w-fit">
              <Brain size={16} className="mr-2 text-green-400" />
              <span className="text-sm font-medium text-green-300">Next-Gen AI Experience</span>
            </div>

            {/* Main Title */}
            <div className="relative inline-block mb-6">
              <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                Gendu AI
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Experience AI like never before - where intelligence meets personality
            </p>

            {/* Founders Section */}
            <div className="flex justify-center items-center space-x-6 mb-12">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-200">Mufaddal</p>
                <p className="text-xs text-green-400 uppercase tracking-wider">Founder</p>
              </div>

              <div className="text-2xl text-green-400 font-light">×</div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-200">Lucky</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Co-Founder</p>
              </div>

              <div className="text-2xl text-green-400 font-light">×</div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-200">Abhishek</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Co-Founder</p>
              </div>

              <div className="text-2xl text-green-400 font-light">×</div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-200">Joel</p>
                <p className="text-xs text-green-400 uppercase tracking-wider">Co-Founder</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-20">
              <button onClick={() => router.push('chat')} className="group cursor-pointer relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl shadow-green-500/25 transform hover:scale-105 transition-all duration-300 border border-green-400/20">
                <span className="flex items-center space-x-3">
                  <span>Try Gendu AI Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
              <p className="text-gray-400 mt-3 text-sm">AI nhi <span className="text-green-400 font-semibold">papa</span> bol papa</p>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Brain size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Neural Processing</h3>
              <p className="text-gray-400 text-sm">Advanced AI models for intelligent responses</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Real-time Computing</h3>
              <p className="text-gray-400 text-sm">Lightning-fast response generation</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Network size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Deep Learning</h3>
              <p className="text-gray-400 text-sm">Contextual understanding & memory</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Bot size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Personality Engine</h3>
              <p className="text-gray-400 text-sm">Unique character-driven interactions</p>
            </div>
          </div>

          {/* Demo Chat Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                See Gendu in Action
              </h2>
              <p className="text-gray-400">Experience the future of conversational AI</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <MessageCircle size={20} />
                  <span className="font-semibold">Gendu Chat</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-6 min-h-[200px]">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl rounded-tr-sm px-6 py-4 max-w-md shadow-lg">
                    <p className="text-white font-medium">{demoChats[currentDemo].user}</p>
                  </div>
                </div>

                {/* Gendu Response */}
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl rounded-tl-sm px-6 py-4 max-w-md shadow-lg border border-gray-600/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Zap size={12} />
                      </div>
                      <span className="font-semibold text-green-400">Gendu</span>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-white">{demoChats[currentDemo].gendu}</p>
                  </div>
                </div>
              </div>

              {/* Demo Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {demoChats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentDemo
                      ? 'bg-gradient-to-r from-green-400 to-emerald-400 scale-125 shadow-lg shadow-green-400/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-400 text-sm mb-4">Warning: May cause uncontrollable laughter</p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
              <span>Powered by Advanced Neural Networks</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Real-time AI Processing</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Contextual Understanding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}