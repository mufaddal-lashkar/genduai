"use client"
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, RefreshCw, Zap, Sparkles, MessageCircle, Mic } from "lucide-react";

export default function Home() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
        }
    }, [input]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input.trim() };
        const newMessages = [...messages, userMessage];

        setMessages(newMessages);
        setInput("");
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch("/api/gendu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await res.text();
                console.error('Non-JSON response:', text);
                throw new Error('Server returned non-JSON response');
            }

            const data = await res.json();

            if (!data.success && data.error) {
                throw new Error(data.error);
            }

            if (!data.reply) {
                throw new Error('No reply received from API');
            }

            setMessages([...newMessages, { role: "assistant", content: data.reply }]);
        } catch (err) {
            let errorMessage = "Oops! Gendu is taking a chai break. Try again!";

            if (err.message.includes('HTTP error! status: 404')) {
                errorMessage = "API endpoint not found. Check if /api/gendu.js exists in pages/api/ or app/api/gendu/route.js";
            } else if (err.message.includes('Non-JSON response')) {
                errorMessage = "Server configuration issue. Check your API route setup.";
            } else if (err.message.includes('Failed to fetch')) {
                errorMessage = "Network error. Check your internet connection.";
            }

            setError(errorMessage);
            console.error('Chat error:', err);
            console.error('Error details:', err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const clearChat = () => {
        setMessages([]);
        setError("");
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
            {/* Header */}
            <div className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700/50 px-6 py-4 shadow-xl">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Gendu.ai</h1>
                            <p className="text-sm text-gray-400 font-medium"></p>
                        </div>
                    </div>
                    {messages.length > 0 && (
                        <button
                            onClick={clearChat}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-200 border border-gray-600/30 hover:border-gray-500/50"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>New Chat</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    {messages.length === 0 ? (
                        <div className="text-center py-16 animate-fade-in">
                            <div className="relative mb-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                                    <Zap className="w-10 h-10 text-white" />
                                </div>
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl animate-ping opacity-20"></div> */}
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-3">
                                Namaste! Main Gendu AI hu
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Mere saath agar bakwas kiya toh bohot marunga saale!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                {[
                                    { text: "assignment likhne me help karo", icon: "📚" },
                                    { text: "kya haal hai tere bhai?", icon: "👋" },
                                    { text: "Paisa kaise kamaye?", icon: "💰" },
                                    { text: "Health tips doon?", icon: "🏃" }
                                ].map((suggestion, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(suggestion.text)}
                                        className="group p-5 text-left bg-gray-800/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl hover:border-green-500/50 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{suggestion.icon}</span>
                                            <span className="text-gray-200 group-hover:text-white transition-colors font-medium">{suggestion.text}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex animate-fade-in ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className={`flex space-x-4 max-w-4xl ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                                        {/* Avatar */}
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === "user"
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                            : "bg-gradient-to-r from-green-500 to-emerald-500"
                                            }`}>
                                            {msg.role === "user" ? (
                                                <User className="w-5 h-5 text-white" />
                                            ) : (
                                                <Zap className="w-5 h-5 text-white" />
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className={`px-6 py-4 rounded-3xl shadow-lg max-w-2xl ${msg.role === "user"
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-lg"
                                            : "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-white rounded-tl-lg"
                                            }`}>
                                            <div className="whitespace-pre-wrap break-words leading-relaxed text-base">
                                                {msg.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Loading indicator */}
                            {isLoading && (
                                <div className="flex justify-start animate-fade-in">
                                    <div className="flex space-x-4 max-w-4xl">
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="px-6 py-4 rounded-3xl rounded-tl-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                                </div>
                                                <span className="text-gray-300 font-medium">Gendu soch raha hai...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="max-w-4xl mx-auto px-6 pb-4 animate-fade-in">
                    <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-red-300 px-5 py-3 rounded-2xl text-sm font-medium">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span>{error}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="bg-transparent px-6 py-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <textarea
                            ref={textareaRef}
                            className="w-full px-6 py-4 pr-24 bg-gray-700/80 backdrop-blur-sm border border-gray-600/50 text-white placeholder-gray-400 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 max-h-32 overflow-hidden transition-all duration-200 text-base shadow-lg"
                            placeholder="Bolo kya poochhna hai..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={1}
                            disabled={isLoading}
                        />
                        <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                                ) : (
                                    <Send className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center font-medium">
                        Gendu can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>

            {/* <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
                    background-color: #4b5563;
                    border-radius: 3px;
                }
                .scrollbar-track-transparent::-webkit-scrollbar-track {
                    background: transparent;
                }
            `}</style> */}
        </div>
    );
}