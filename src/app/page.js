"use client"
import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GenduLanding() {
  const [currentDemo, setCurrentDemo] = useState(0);

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
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden w-screen">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            {/* Main Title - Static */}
            <div className="relative inline-block mb-8">
              <h1 className="text-8xl md:text-9xl font-black text-white">
                Gendu AI
              </h1>
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              AI nhi <span className="text-green-400 font-semibold">papa</span> bol
              <span className="text-green-300 font-medium"> papa</span>
            </p>

            {/* Founders Section */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">Mufaddal</p>
                <p className="text-lg text-gray-400">Founder</p>
              </div>

              <div className="text-4xl text-green-400">×</div>

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">Joel</p>
                <p className="text-lg text-gray-400">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Demo Chat Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              See Gendu in Action
            </h2>

            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <MessageCircle size={20} />
                  <span className="font-semibold">Gendu Chat</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-green-600 rounded-2xl rounded-tr-sm px-6 py-4 max-w-md">
                    <p className="text-white font-medium">{demoChats[currentDemo].user}</p>
                  </div>
                </div>

                {/* Gendu Response */}
                <div className="flex justify-start">
                  <div className="bg-gray-700 rounded-2xl rounded-tl-sm px-6 py-4 max-w-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap size={12} />
                      </div>
                      <span className="font-semibold text-green-400">Gendu</span>
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
                        ? 'bg-green-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          {/* <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Witty Responses</h3>
              <p className="text-gray-300">Every conversation is a comedy show. Gendu doesn't just answer—it entertains.</p>
            </div>

            <div className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-300">Quick wit, quicker responses. Gendu thinks faster than your patience runs out.</p>
            </div>

            <div className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Personality Plus</h3>
              <p className="text-gray-300">Not your typical boring bot. Gendu has attitude, charm, and zero filter.</p>
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="text-center mt-24">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center space-x-3">
                <Link href={"/chat"}>Try Gendu AI Now</Link>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <p className="text-gray-400 mt-4">Warning: May cause uncontrollable laughter</p>
          </div>
        </div>
      </div>
    </div>
  );
}