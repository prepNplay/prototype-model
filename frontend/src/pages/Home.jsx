import React, { useState } from 'react';
import { Brain, Code2, Mic, Trophy, Flame, Play, ChevronRight, User, MessageCircle, X, Sparkles, Target, BookOpen, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [showRankPopup, setShowRankPopup] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  // Mock data for friends comparison
  const userScore = 1250;
  const friends = [
    { name: 'Alex', score: 1400, avatar: 'A' },
    { name: 'Sarah', score: 1180, avatar: 'S' },
    { name: 'Mike', score: 980, avatar: 'M' },
    { name: 'Emma', score: 890, avatar: 'E' },
    { name: 'John', score: 750, avatar: 'J' },
  ];

  const sortedFriends = [...friends, { name: 'You', score: userScore, avatar: 'Y' }]
    .sort((a, b) => b.score - a.score);

  const userRank = sortedFriends.findIndex(f => f.name === 'You') + 1;

  return (
    <div className="min-h-screen overflow-hidden flex flex-col relative bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-100/40 rounded-full blur-3xl -z-10 translate-y-1/3 -translate-x-1/3"></div>

      {/* Navbar - Floating Screen Style */}
      <nav className="floating-nav mx-4 mt-6 px-6 py-4 flex items-center justify-between sticky top-4 z-50 bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-2xl shadow-lg shadow-blue-600/20">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900 hidden sm:block">
            InterviewQuest
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Score Comparison with Friends */}
          <div 
            className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-2xl border border-purple-200/50 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
            onClick={() => setShowRankPopup(true)}
          >
            <div className="relative">
              <Trophy className="w-5 h-5 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-purple-700 text-sm">{userScore} pts</span>
              <span className="text-[10px] text-purple-500 font-bold">vs friends</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-inner">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-600 text-sm">12 Day Streak</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
              L5
            </div>
            <div className="flex flex-col">
              <div className="h-2 w-20 sm:w-28 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4 rounded-full"></div>
              </div>
              <span className="text-[10px] text-slate-500 font-bold mt-0.5 uppercase tracking-wider">1200 / 1500 XP</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:shadow transition-all group">
            <User className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </nav>

      {/* Motivational Text Below Navbar */}
      <div className="text-center py-6 px-4">
        <p className="text-lg md:text-xl font-semibold text-slate-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          "Every test is a step closer to your dream job."
        </p>
      </div>

      {/* Chatbot Icon */}
      <button 
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-purple-500/30 flex items-center justify-center hover:scale-110 hover:shadow-purple-500/50 transition-all animate-bounce"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowChatbot(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scaleIn">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Welcome to InterviewQuest AI</h2>
                  <p className="text-blue-100 text-sm">Your personal interview preparation assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChatbot(false)}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* How to Use Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" /> How to Use This App
                </h3>
                <p className="text-slate-600 mb-6">
                  InterviewQuest helps you prepare for technical interviews through three powerful modules:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                      <Brain className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">1. Aptitude Arena</h4>
                      <p className="text-sm text-slate-600">Sharpen logical reasoning and quantitative skills with time-based puzzles tailored for tech interviews.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">2. Code Coliseum</h4>
                      <p className="text-sm text-slate-600">Solve algorithmic challenges in a real-time IDE. Switch between Python, Java, C, and C++ to practice in your preferred language.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mic className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">3. Mock Interviews</h4>
                      <p className="text-sm text-slate-600">Practice verbal communication with AI Recruiter. Get instant feedback on tone, clarity, and confidence.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Real-time Code Execution</h4>
                  <p className="text-sm text-slate-600">Write code in Python, Java, C, or C++ and get instant feedback with test case validation.</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Track Your Progress</h4>
                  <p className="text-sm text-slate-600">Compare scores with friends and see your ranking among the top 15.</p>
                </div>
              </div>

              {/* Getting Started */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">🚀 Getting Started</h3>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Start with Aptitude Arena to build strong logical foundations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Practice coding problems in Code Coliseum - solve challenges and verify with test cases</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Perfect your communication skills in Mock Interviews</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>Climb the leaderboard and land your dream job!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rank Popup */}
      {showRankPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowRankPopup(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full animate-scaleIn">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6" /> Leaderboard
                </h2>
                <button 
                  onClick={() => setShowRankPopup(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-purple-100 text-sm">Your ranking among friends</p>
            </div>
            <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
              {sortedFriends.slice(0, 15).map((friend, index) => (
                <div 
                  key={friend.name}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                    friend.name === 'You' 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-400 shadow-md' 
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' :
                    index === 1 ? 'bg-gray-300 text-gray-700' :
                    index === 2 ? 'bg-amber-600 text-amber-100' :
                    'bg-slate-200 text-slate-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {friend.avatar}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold ${friend.name === 'You' ? 'text-blue-700' : 'text-slate-900'}`}>
                      {friend.name}
                    </p>
                    <p className="text-xs text-slate-500">{friend.score} points</p>
                  </div>
                  {friend.name === 'You' && (
                    <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      You
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100">
              <p className="text-center text-sm text-slate-500">
                Keep practicing to climb the ranks! 📈
              </p>
            </div>
          </div>
        </div>
      )}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-16 flex flex-col gap-16 z-10 relative">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            Season 1 is now live
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Level Up Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Interview Skills
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Train in aptitude, programming, and communication through interactive challenges. Climb the leaderboard and land your dream job with confidence.
          </p>
          <div className="pt-4">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1">
              <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span className="text-lg">Resume Career Quest</span>
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pb-20">
          
          {/* Aptitude Card */}
          <div 
            onClick={() => navigate('/aptitude')}
            className="glass-panel p-8 group cursor-pointer hover:-translate-y-2 relative overflow-hidden flex flex-col h-full bg-white hover:border-blue-200"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100 transition-colors"></div>
            <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Aptitude Arena</h3>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-1">
              Sharpen your logical reasoning and quantitative skills with time-based puzzles tailored for tech interviews.
            </p>
            <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-600 z-10 hover:z-20 hover:-translate-y-1 transition-transform">
                    L{i}
                  </div>
                ))}
              </div>
              <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform bg-indigo-50 px-3 py-1.5 rounded-lg">
                Enter Arena <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Programming Card */}
          <div 
            onClick={() => navigate('/coding')}
            className="glass-panel p-8 group cursor-pointer hover:-translate-y-2 relative overflow-hidden flex flex-col h-full bg-white border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-blue-600/5 hover:ring-blue-600/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors"></div>
            <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-sm px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-white" /> Hot
            </div>
            <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Code Coliseum</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
              Solve algorithmic challenges in a real-time IDE. Optimize for time and space complexity against the clock.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold">Array</span>
              <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold">Tree</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-500 text-xs font-bold">+12</span>
            </div>
            <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                Daily Challenge
              </span>
              <button className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform bg-blue-50 px-3 py-1.5 rounded-lg">
                Start Coding <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Communication Card */}
          <div 
            onClick={() => navigate('/mock')}
            className=" glass-panel p-8 group cursor-pointer hover:-translate-y-2 relative overflow-hidden flex flex-col h-full bg-white hover:border-emerald-200"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100 transition-colors"></div>
            <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <Mic className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Mock Interview</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
              Practice your verbal communication with an AI Recruiter. Get instant feedback on tone, clarity, and confidence.
            </p>
            <div className="w-full bg-slate-50 rounded-xl p-3 border border-slate-200 mb-8 flex items-center gap-3 shadow-inner">
              <div className="relative flex h-2.5 w-2.5 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="text-xs text-slate-700 font-bold tracking-wide">AI Recruiter Ready</span>
            </div>
            <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
              <button className="text-emerald-700 font-bold text-sm flex items-center justify-center gap-1 bg-emerald-50 w-full py-2.5 rounded-xl group-hover:bg-emerald-100 transition-colors">
                Join Virtual Call <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;
