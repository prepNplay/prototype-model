import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock, Trophy, Target, ChevronRight, XCircle, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const APTITUDE_QUESTIONS = [
  {
    id: 1,
    question: "A pipe can fill a tank in 15 hours. Due to a leak in the bottom, it is filled in 20 hours. If the tank is full, how much time will the leak take to empty it?",
    options: ["40 hours", "50 hours", "60 hours", "70 hours"],
    correctAnswer: 2, 
    topic: "Pipes & Cisterns",
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that code?",
    options: ["EOJDJEFM", "EOJDEJFM", "MFEJDJOE", "MFEDJJOE"],
    correctAnswer: 0,
    topic: "Logical Reasoning",
    difficulty: "Hard"
  },
  {
    id: 3,
    question: "The ratio of the ages of A and B is 4:3. After 6 years, their ages will be in the ratio 11:9. What is B's present age?",
    options: ["24 years", "27 years", "30 years", "33 years"],
    correctAnswer: 1,
    topic: "Ages",
    difficulty: "Easy"
  }
];

function Aptitude() {
  const navigate = useNavigate();
  const [currentQnIndex, setCurrentQnIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = APTITUDE_QUESTIONS[currentQnIndex];
  const isLastQuestion = currentQnIndex === APTITUDE_QUESTIONS.length - 1;

  const handleSubmit = () => {
    if (selectedOption !== null && !isSubmitted) {
      setIsSubmitted(true);
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 10);
      }
    } else if (isSubmitted && !isLastQuestion) {
      setCurrentQnIndex(currentQnIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col font-sans">
      
      {/* Sleek App Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BrainCircuit className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-slate-800 text-lg tracking-tight">Aptitude Arena</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-slate-600 bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-200 font-semibold text-sm shadow-inner">
              <Clock className="w-4 h-4 text-blue-600" /> 
              <span className="tabular-nums">14:26</span>
            </div>
            <div className="flex items-center gap-2 font-black text-slate-800 bg-amber-50 border border-amber-200/50 px-4 py-1.5 rounded-full shadow-sm">
              <Trophy className="w-4 h-4 text-amber-500" /> 
              <span className="text-amber-700">{score} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row gap-8 items-start relative box-border">
        
        {/* Left Sidebar - Progress & Stats */}
        <div className="w-full md:w-72 shrink-0 md:sticky md:top-24 space-y-6">
          <div className="premium-card p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Quest Progress</h3>
            
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-100 z-0"></div>
              
              <div className="space-y-6 relative z-10">
                {APTITUDE_QUESTIONS.map((q, idx) => {
                  const isPast = idx < currentQnIndex;
                  const isCurrent = idx === currentQnIndex;
                  
                  return (
                    <div key={q.id} className={`flex items-start gap-4 ${isPast ? 'opacity-50' : ''}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-all mt-0.5
                        ${isPast ? 'bg-blue-600 border-blue-600' : 
                          isCurrent ? 'bg-white border-blue-600 ring-4 ring-blue-50' : 
                          'bg-white border-slate-300'}`}
                      >
                        {isPast ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : 
                          <span className={`text-[10px] font-bold ${isCurrent ? 'text-blue-600' : 'text-slate-400'}`}>{idx + 1}</span>}
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isCurrent ? 'text-slate-800' : 'text-slate-500'}`}>Question {idx + 1}</div>
                        <div className="text-xs text-slate-400 font-medium truncate w-40">{q.topic}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Play Area */}
        <div className="flex-1 w-full flex flex-col items-center">
          
          <div className="w-full max-w-3xl">
            {/* Header tags */}
            <div className="flex items-center gap-3 mb-4 pl-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                <Target className="w-3.5 h-3.5" /> {currentQuestion.topic}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                Level: {currentQuestion.difficulty}
              </span>
            </div>

            {/* The Question Card */}
            <div className="premium-card p-8 sm:p-12 mb-6 bg-white relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-[1.4] mb-10 relative z-10">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-4 relative z-10">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isSubmitted && idx === currentQuestion.correctAnswer;
                  const isWrong = isSubmitted && isSelected && !isCorrect;

                  let stateClass = "";
                  if (!isSubmitted && isSelected) stateClass = "selected text-blue-900";
                  else if (!isSubmitted && !isSelected) stateClass = "text-slate-700";
                  else if (isCorrect) stateClass = "correct text-emerald-900";
                  else if (isWrong) stateClass = "wrong text-red-900";
                  else stateClass = "opacity-50 text-slate-500 scale-95";

                  return (
                    <button
                      key={idx}
                      disabled={isSubmitted}
                      onClick={() => setSelectedOption(idx)}
                      className={`option-btn w-full text-left px-6 py-5 flex items-center justify-between group ${stateClass}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold text-sm transition-colors
                          ${(!isSubmitted && isSelected) ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 
                            (isCorrect) ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' :
                            (isWrong) ? 'bg-red-500 text-white shadow-md shadow-red-500/20' :
                            'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-700'}`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-semibold text-lg">{option}</span>
                      </div>
                      
                      {/* Icons for submission state */}
                      {isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />}
                      {isWrong && <XCircle className="w-6 h-6 text-red-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <button className="text-slate-500 font-bold hover:text-slate-800 py-2 px-4 rounded-lg hover:bg-slate-200/50 transition-colors">
                Skip Question
              </button>
              
              <button 
                disabled={selectedOption === null && !isSubmitted}
                onClick={handleSubmit}
                className="btn-primary w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-2 text-[15px] tracking-wide"
              >
                {!isSubmitted ? 'Submit Answer' : isLastQuestion ? 'Finish Arena' : 'Next Question'}
                {isSubmitted && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
            
          </div>

        </div>
      </main>
    </div>
  );
}

export default Aptitude;
