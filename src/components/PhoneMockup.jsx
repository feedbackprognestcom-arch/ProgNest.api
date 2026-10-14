import React, { useState } from 'react';
import { 
  Flame, 
  Award, 
  ChevronRight, 
  CheckCircle, 
  BookOpen, 
  Code2, 
  Calendar, 
  Play, 
  Check, 
  Layers, 
  Sparkles,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

export default function PhoneMockup({ activeScreen = 'home', interactive = true }) {
  const [currentTab, setCurrentTab] = useState(activeScreen);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const handleSelectOption = (index) => {
    if (!isAnswerChecked) {
      setSelectedOption(index);
    }
  };

  const handleCheckAnswer = () => {
    setIsAnswerChecked(true);
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  return (
    <div className="phone-wrapper">
      {/* Ambient background glow behind phone */}
      <div className="phone-ambient-glow" />

      {/* Realistic Android Phone Chassis */}
      <div className="phone-frame">
        {/* Camera Punch Hole & Earpiece */}
        <div className="phone-notch">
          <div className="camera-lens" />
          <div className="speaker-grill" />
        </div>

        {/* Phone Screen Display */}
        <div className="phone-screen">
          {/* Android Status Bar */}
          <div className="status-bar">
            <span className="status-time">09:41</span>
            <div className="status-icons">
              <Signal size={12} strokeWidth={2.5} />
              <Wifi size={12} strokeWidth={2.5} />
              <Battery size={13} strokeWidth={2.5} />
            </div>
          </div>

          {/* App Top Bar */}
          <div className="app-topbar">
            <div className="app-brand">
              <div className="app-icon-mini">
                <img src="/app-logo.png" alt="ProgNest App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="app-brand-name">ProgNest</span>
            </div>
            <div className="app-stats-row">
              <div className="stat-pill streak-pill">
                <Flame size={13} className="pill-flame" />
                <span>7d</span>
              </div>
              <div className="stat-pill points-pill">
                <Award size={13} className="pill-award" />
                <span>420 XP</span>
              </div>
            </div>
          </div>

          {/* Phone Screen Content Switcher */}
          <div className="phone-content-scroll">
            {currentTab === 'home' && (
              <div className="screen-content animate-fade">
                {/* Daily Challenge Banner */}
                <div className="mock-challenge-card">
                  <div className="mock-badge-row">
                    <span className="mock-mini-tag">Daily Challenge</span>
                    <span className="mock-xp-gain">+30 XP</span>
                  </div>
                  <h4 className="mock-challenge-title">Check Java String Immutability</h4>
                  <p className="mock-challenge-desc">Complete today's problem to extend your 7-day streak!</p>
                  <button 
                    className="mock-start-btn"
                    onClick={() => setCurrentTab('quiz')}
                  >
                    <Play size={12} fill="currentColor" /> Solve Challenge
                  </button>
                </div>

                {/* Continue Learning Card */}
                <div className="mock-section-label">CONTINUE LEARNING</div>
                <div className="mock-course-card">
                  <div className="mock-course-header">
                    <div className="course-icon java-icon">☕</div>
                    <div>
                      <div className="course-title">Java Programming</div>
                      <div className="course-subtitle">Chapter 3: Object-Oriented Principles</div>
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: '65%' }}></div>
                  </div>
                  <div className="progress-footer">
                    <span>13 of 20 topics</span>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>

                {/* Secondary Course */}
                <div className="mock-course-card secondary-course">
                  <div className="mock-course-header">
                    <div className="course-icon cpp-icon">⚙️</div>
                    <div>
                      <div className="course-title">C++ Fundamentals</div>
                      <div className="course-subtitle">Chapter 2: Pointers & References</div>
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill purple-fill" style={{ width: '38%' }}></div>
                  </div>
                  <div className="progress-footer">
                    <span>6 of 16 topics</span>
                    <span className="progress-percent">38%</span>
                  </div>
                </div>

                {/* Recent Achievement */}
                <div className="mock-achievement-item">
                  <div className="achievement-icon">
                    <Sparkles size={14} className="text-cyan" />
                  </div>
                  <div className="achievement-info">
                    <div className="achievement-title">Streak Master</div>
                    <div className="achievement-desc">Completed 7 continuous days of learning</div>
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'code' && (
              <div className="screen-content animate-fade">
                <div className="mock-section-label">LESSON EXPLANATION</div>
                <div className="mock-lesson-header">
                  <h3>Java: Encapsulation</h3>
                  <span className="topic-num">Topic 3.2</span>
                </div>
                <p className="mock-lesson-body">
                  Encapsulation wraps variables and methods into a single unit, shielding internal state using private access modifiers:
                </p>

                <div className="mock-code-editor">
                  <div className="editor-tab">ProgNestStudent.java</div>
                  <pre className="mock-code">
                    <code>
                      <span className="code-kw">public class</span> <span className="code-type">Student</span> {'{\n'}
                      {'  '}<span className="code-kw">private</span> <span className="code-type">String</span> name;{'\n'}
                      {'  '}<span className="code-kw">private int</span> streak;{'\n\n'}
                      {'  '}<span className="code-kw">public</span> <span className="code-type">void</span> addDay() {'{\n'}
                      {'    '}<span className="code-kw">this</span>.streak++;{'\n'}
                      {'  }'}{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>

                <div className="mock-tip-box">
                  <CheckCircle size={14} className="text-cyan" />
                  <span>Getter and setter methods control state mutation safely.</span>
                </div>
              </div>
            )}

            {currentTab === 'quiz' && (
              <div className="screen-content animate-fade">
                <div className="mock-quiz-header">
                  <span className="mock-mini-tag">Practice Assessment</span>
                  <span className="question-count">Q 4 / 5</span>
                </div>
                
                <h4 className="quiz-question">
                  Which keyword is used in Java to inherit a class?
                </h4>

                <div className="quiz-options">
                  {[
                    { label: 'implements', correct: false },
                    { label: 'extends', correct: true },
                    { label: 'inherits', correct: false },
                    { label: 'super', correct: false }
                  ].map((option, idx) => {
                    let optionClass = 'quiz-option-btn';
                    if (selectedOption === idx) {
                      optionClass += ' selected';
                      if (isAnswerChecked) {
                        optionClass += option.correct ? ' correct' : ' wrong';
                      }
                    } else if (isAnswerChecked && option.correct) {
                      optionClass += ' correct';
                    }

                    return (
                      <button 
                        key={idx}
                        className={optionClass}
                        onClick={() => handleSelectOption(idx)}
                      >
                        <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                        <span className="option-text"><code>{option.label}</code></span>
                        {isAnswerChecked && option.correct && <Check size={14} className="opt-check" />}
                      </button>
                    );
                  })}
                </div>

                {isAnswerChecked ? (
                  <div className="quiz-feedback correct-feedback">
                    <CheckCircle size={15} />
                    <span>Correct! <code>extends</code> is used for class inheritance.</span>
                    <button className="quiz-retry-btn" onClick={handleResetQuiz}>Reset Question</button>
                  </div>
                ) : (
                  <button 
                    className="quiz-submit-btn" 
                    disabled={selectedOption === null}
                    onClick={handleCheckAnswer}
                  >
                    Check Answer
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Interactive Screen Tabs */}
          {interactive && (
            <div className="phone-bottom-nav">
              <button 
                className={`nav-tab-btn ${currentTab === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentTab('home')}
                title="Learning Dashboard"
              >
                <BookOpen size={16} />
                <span>Dashboard</span>
              </button>
              <button 
                className={`nav-tab-btn ${currentTab === 'code' ? 'active' : ''}`}
                onClick={() => setCurrentTab('code')}
                title="Lesson & Code"
              >
                <Code2 size={16} />
                <span>Lesson</span>
              </button>
              <button 
                className={`nav-tab-btn ${currentTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setCurrentTab('quiz')}
                title="Practice Test"
              >
                <CheckCircle size={16} />
                <span>Quiz</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .phone-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
        }

        .phone-ambient-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(124, 58, 237, 0.18) 40%, transparent 70%);
          filter: blur(28px);
          z-index: 0;
          pointer-events: none;
        }

        .phone-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 18.5;
          max-height: 640px;
          background: #0B0E17;
          border-radius: 40px;
          box-shadow: 
            0 0 0 10px #1E293B,
            0 0 0 12px #334155,
            0 20px 50px rgba(0, 0, 0, 0.7);
          overflow: hidden;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .camera-lens {
          width: 10px;
          height: 10px;
          background: #020617;
          border-radius: 50%;
          border: 1px solid #1E293B;
        }

        .speaker-grill {
          width: 36px;
          height: 3px;
          background: #1E293B;
          border-radius: 2px;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #090D16;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-top: 28px;
        }

        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 18px 2px 18px;
          font-size: 11px;
          font-weight: 600;
          color: #94A3B8;
        }

        .status-icons {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .app-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(14, 20, 36, 0.6);
        }

        .app-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .app-icon-mini {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #2563EB, #06B6D4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
        }

        .app-brand-name {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: -0.02em;
          color: #FFF;
        }

        .app-stats-row {
          display: flex;
          gap: 6px;
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 7px;
          border-radius: 20px;
        }

        .streak-pill {
          background: rgba(245, 158, 11, 0.15);
          color: #FBBF24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .pill-flame {
          color: #F59E0B;
        }

        .points-pill {
          background: rgba(6, 182, 212, 0.15);
          color: #22D3EE;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .pill-award {
          color: #06B6D4;
        }

        .phone-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 12px 14px;
          scrollbar-width: none;
        }

        .phone-content-scroll::-webkit-scrollbar {
          display: none;
        }

        .mock-challenge-card {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.22) 0%, rgba(124, 58, 237, 0.18) 100%);
          border: 1px solid rgba(59, 130, 246, 0.35);
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 12px;
        }

        .mock-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .mock-mini-tag {
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          color: #38BDF8;
          letter-spacing: 0.05em;
        }

        .mock-xp-gain {
          font-size: 9px;
          font-weight: 700;
          color: #FBBF24;
          background: rgba(245, 158, 11, 0.15);
          padding: 2px 6px;
          border-radius: 8px;
        }

        .mock-challenge-title {
          font-size: 12px;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 4px;
        }

        .mock-challenge-desc {
          font-size: 10px;
          color: #94A3B8;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .mock-start-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #2563EB;
          color: #FFF;
          font-size: 10px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .mock-section-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #64748B;
          margin-bottom: 8px;
        }

        .mock-course-card {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 8px;
        }

        .mock-course-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .course-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          background: rgba(37, 99, 235, 0.15);
        }

        .cpp-icon {
          background: rgba(124, 58, 237, 0.15);
        }

        .course-title {
          font-size: 11px;
          font-weight: 700;
          color: #FFF;
        }

        .course-subtitle {
          font-size: 9px;
          color: #94A3B8;
        }

        .progress-bar-container {
          width: 100%;
          height: 4px;
          background: #1E293B;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563EB, #06B6D4);
          border-radius: 4px;
        }

        .purple-fill {
          background: linear-gradient(90deg, #7C3AED, #A855F7);
        }

        .progress-footer {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          color: #64748B;
        }

        .progress-percent {
          font-weight: 700;
          color: #38BDF8;
        }

        .mock-achievement-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(6, 182, 212, 0.08);
          border: 1px dashed rgba(6, 182, 212, 0.25);
          border-radius: 8px;
          padding: 8px 10px;
          margin-top: 6px;
        }

        .achievement-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .achievement-title {
          font-size: 10px;
          font-weight: 700;
          color: #FFF;
        }

        .achievement-desc {
          font-size: 8px;
          color: #94A3B8;
        }

        /* Lesson Screen */
        .mock-lesson-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .mock-lesson-header h3 {
          font-size: 13px;
          color: #FFF;
        }

        .topic-num {
          font-size: 9px;
          color: #38BDF8;
          font-weight: 700;
        }

        .mock-lesson-body {
          font-size: 10px;
          color: #94A3B8;
          line-height: 1.45;
          margin-bottom: 10px;
        }

        .mock-code-editor {
          background: #050810;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .editor-tab {
          background: #0E1424;
          font-size: 8px;
          font-family: var(--font-mono);
          padding: 4px 8px;
          color: #64748B;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mock-code {
          padding: 8px;
          font-size: 9px;
          font-family: var(--font-mono);
          color: #E2E8F0;
          line-height: 1.5;
        }

        .code-kw { color: #818CF8; font-weight: 600; }
        .code-type { color: #38BDF8; }

        .mock-tip-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(6, 182, 212, 0.08);
          border-radius: 6px;
          padding: 6px 8px;
          font-size: 9px;
          color: #94A3B8;
        }

        /* Quiz Screen */
        .mock-quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .question-count {
          font-size: 10px;
          font-weight: 700;
          color: #94A3B8;
        }

        .quiz-question {
          font-size: 12px;
          color: #FFF;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .quiz-option-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 11px;
          text-align: left;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .quiz-option-btn:hover {
          background: #1E293B;
          border-color: rgba(59, 130, 246, 0.4);
        }

        .quiz-option-btn.selected {
          border-color: #3B82F6;
          background: rgba(37, 99, 235, 0.15);
        }

        .quiz-option-btn.correct {
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.15);
          color: #34D399;
        }

        .quiz-option-btn.wrong {
          border-color: #EF4444;
          background: rgba(239, 68, 68, 0.15);
          color: #F87171;
        }

        .option-letter {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
        }

        .opt-check {
          margin-left: auto;
          color: #10B981;
        }

        .quiz-submit-btn {
          width: 100%;
          padding: 8px;
          background: #2563EB;
          color: #FFF;
          font-size: 11px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
        }

        .quiz-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quiz-feedback {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px 10px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
          font-size: 10px;
          color: #34D399;
        }

        .quiz-retry-btn {
          align-self: flex-start;
          background: transparent;
          color: #FFF;
          font-size: 9px;
          text-decoration: underline;
          padding: 0;
          cursor: pointer;
        }

        /* Bottom Nav */
        .phone-bottom-nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 6px 4px 10px 4px;
          background: #0B0E17;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          background: transparent;
          border: none;
          color: #64748B;
          font-size: 8px;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.15s ease;
        }

        .nav-tab-btn.active {
          color: #38BDF8;
        }

        .nav-tab-btn:hover {
          color: #94A3B8;
        }

        .animate-fade {
          animation: phoneFadeIn 0.25s ease-out;
        }

        @keyframes phoneFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
