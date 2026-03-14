import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Mic, MicOff, Video, VideoOff, Send, PhoneOff, Circle, Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_MESSAGES = [
  { sender: 'ai', text: "Hello! I'm Alex, your AI technical recruiter. I'll be conducting your frontend engineering mock interview today. How are you doing?", timestamp: "10:00 AM" },
  { sender: 'user', text: "I'm doing great, thank you! I'm excited to be here.", timestamp: "10:00 AM" },
  { sender: 'ai', text: "Awesome. Let's start with a behavioral question. Can you tell me about a recent technical challenge you faced and how you solved it?", timestamp: "10:01 AM" },
];

function Mock() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAnalyzing]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newUserMsg = { sender: 'user', text: inputText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: "That's a very clear explanation. I like how you broke down the architecture. Follow-up question: How did you ensure the new implementation didn't impact the existing production performance?", 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    }, 2500);
  };

  return (
    <div className="h-screen bg-[#f1f5f9] flex flex-col font-sans overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-between shrink-0 h-[72px] shadow-sm z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition-all shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-slate-800 text-xl tracking-tight leading-tight">Mock Interview Arena</span>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-rose-600 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <Circle className="w-1.5 h-1.5 fill-rose-500 animate-pulse" /> Live
              </span>
            </div>
            <span className="text-xs font-bold text-slate-400 mt-0.5 tracking-wider">Frontend Engineering Track</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
           {/* Add a stylized timer or session status */}
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-lg text-slate-500 font-mono text-sm font-bold border border-slate-200/50 shadow-inner">
              04:12 Session Match
           </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-[1600px] mx-auto w-full p-6 gap-6">
        
        {/* Left Area: Video Panel Container */}
        <div className="flex-1 flex flex-col h-full bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative border border-slate-800">
          
          {/* Main AI Recruiter Feed (Stylized Background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center">
             
             {/* Glow Behind Agent */}
             <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

             <div className="relative group">
                {/* Ping rings */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 scale-150 animate-ping opacity-50 [animation-duration:3s]"></div>
                <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-110 animate-ping opacity-30"></div>
                
                {/* Avatar Icon */}
                <div className="w-40 h-40 rounded-full border border-slate-700/80 bg-slate-800/80 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)] relative z-10 transition-transform group-hover:scale-105">
                   <BrainCircuit className="w-16 h-16 text-blue-400 mb-2" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Agent</span>
                </div>
             </div>
             
             <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-slate-800/60 backdrop-blur border border-slate-700 font-black tracking-widest uppercase text-xs text-slate-300 flex items-center gap-2 shadow-lg">
               <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div> Alex - Technical Recruiter
             </div>
          </div>

          {/* User PIP Feed */}
          <div className="absolute top-6 right-6 w-[280px] aspect-video bg-black/90 backdrop-blur rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/80 z-20 flex flex-col group">
             <div className="absolute top-2 left-2 z-10 px-2 py-1 rounded bg-black/50 backdrop-blur border border-white/10 text-white/80 font-bold uppercase tracking-widest text-[9px]">
               Participant
             </div>
             <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-600 transition-colors">
                {isVideoOn ? (
                  <div className="text-xs font-bold tracking-widest uppercase">Initializing Camera...</div>
                ) : (
                  <VideoOff className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
             </div>
          </div>

          {/* Bottom Call Controls overlay */}
          <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-5 z-20">
             <button 
                onClick={() => setIsMicOn(!isMicOn)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 shadow-2xl ${
                  isMicOn 
                  ? 'bg-slate-800 border-slate-600/80 text-white hover:bg-slate-700 hover:scale-105' 
                  : 'bg-rose-500 border-rose-500 text-white hover:bg-rose-600 hover:scale-105 shadow-[0_0_30px_rgba(244,63,94,0.4)]'
                }`}
             >
                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
             </button>
             
             <button 
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 shadow-2xl ${
                  isVideoOn 
                  ? 'bg-slate-800 border-slate-600/80 text-white hover:bg-slate-700 hover:scale-105' 
                  : 'bg-rose-500 border-rose-500 text-white hover:bg-rose-600 hover:scale-105 shadow-[0_0_30px_rgba(244,63,94,0.4)]'
                }`}
             >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
             </button>

             <div className="w-px h-8 bg-slate-700/80 mx-2"></div>
             
             <button 
                className="h-14 px-8 rounded-full shadow-2xl ring-1 ring-rose-500/20 bg-rose-500 text-white font-black uppercase tracking-widest hover:bg-rose-600 flex items-center justify-center transition-all duration-300 hover:scale-105 text-sm"
             >
                <PhoneOff className="w-5 h-5 mr-3" /> Leave Session
             </button>
          </div>
        </div>

        {/* Right Area: Pro Transcript & Chat */}
        <div className="w-full md:w-[480px] h-full bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden">
          
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col">
            <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Live AI Transcript
            </h3>
            <p className="text-xs text-slate-400 mt-2 font-bold tracking-widest uppercase">Voice to text • Encrypted</p>
          </div>

          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar bg-slate-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}>
                <div className="flex items-center gap-2 mb-1.5 px-1">
                   <span className="text-[9px] uppercase font-black tracking-widest text-slate-400">
                     {msg.sender === 'ai' ? 'Alex' : 'You'}
                   </span>
                   <span className="text-[9px] font-bold text-slate-300">{msg.timestamp}</span>
                </div>
                <div 
                  className={`px-5 py-4 text-[15px] font-medium leading-[1.6] shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm border border-blue-700' 
                      : 'bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-200/80'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isAnalyzing && (
              <div className="self-start items-start flex flex-col max-w-[85%] animate-pulse">
                <span className="text-[9px] uppercase font-black tracking-widest text-slate-400 mb-1.5 px-1 flex items-center gap-2">
                  Alex <Loader2 className="w-3 h-3 animate-spin"/>
                </span>
                <div className="px-6 py-5 bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-200/80 flex gap-2 items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          <div className="p-5 border-t border-slate-200/60 bg-white">
            <div className="relative flex items-center group">
              <input 
                type="text" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Type a manual response..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[15px] rounded-2xl pl-5 pr-14 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium placeholder-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="absolute right-3 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <Mic className="w-3 h-3 text-emerald-500" /> Speak naturally—AI will transcribe
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Mock;
