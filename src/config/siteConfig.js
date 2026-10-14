/**
 * ProgNest Official Website Configuration
 * 
 * Central configuration file for all application metadata, store URLs,
 * contact details, features, learning subjects, FAQs, and navigation.
 * 
 * IMPORTANT: Before deploying to production, please check the placeholders marked
 * with "[ACTION REQUIRED]" and replace them with your actual live URLs and emails.
 */

export const siteConfig = {
  // Brand & Identity
  appName: "ProgNest",
  tagline: "Learn to Code. Build Your Future.",
  shortDescription: "ProgNest helps you learn programming through structured lessons, coding practice, tests, daily challenges, and progress tracking. Build your skills one step at a time.",
  category: "Programming Education",
  platform: "Android",
  developmentTech: "Android Studio & Kotlin",
  minAndroidVersion: "Android 8.0 (Oreo) or higher",
  logo: "/app-logo.png",

  // URLs & Links - Configurable Placeholders
  urls: {
    // Official Indus App Store listing URL
    indusAppStore: "https://indusapp.store/1cdovgl4",

    // Official contact & feedback email address
    contactEmail: "feedback.prognest.com@gmail.com",

    // [ACTION REQUIRED]: Replace with your published website domain (e.g., https://yourname.github.io/prognest or https://prognest.pages.dev)
    websiteUrl: "https://prognest.pages.dev",

    // Social Media Links (Optional - update or keep as placeholder)
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    discord: "https://discord.com",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Learning", href: "#learning" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "App Preview", href: "#preview" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Core Features (matching real implemented app features)
  features: [
    {
      id: "structured-learning",
      title: "Structured Learning",
      description: "Learn programming through organised chapters and topics designed to build knowledge progressively.",
      icon: "Layers",
      badge: "Core"
    },
    {
      id: "java-learning",
      title: "Java Learning",
      description: "Study Java concepts through lessons, syntax breakdowns, and clear practical examples.",
      icon: "Coffee",
      badge: "Language"
    },
    {
      id: "cpp-learning",
      title: "C++ Learning",
      description: "Explore C++ fundamentals, memory concepts, and core programming principles in depth.",
      icon: "Code2",
      badge: "Language"
    },
    {
      id: "practice-tests",
      title: "Practice Tests",
      description: "Test your understanding with programming assessments and instant feedback on your answers.",
      icon: "CheckCircle2",
      badge: "Assessment"
    },
    {
      id: "daily-challenges",
      title: "Daily Challenges",
      description: "Practise regularly and strengthen your problem-solving skills with new daily coding challenges.",
      icon: "CalendarCheck",
      badge: "Daily"
    },
    {
      id: "learning-progress",
      title: "Learning Progress",
      description: "Track your learning progress, completed chapters, and topic mastery directly within the app.",
      icon: "TrendingUp",
      badge: "Analytics"
    },
    {
      id: "streak-tracker",
      title: "Streak Tracker",
      description: "Stay consistent with daily learning activity and build a steady, uninterrupted coding habit.",
      icon: "Flame",
      badge: "Habit"
    },
    {
      id: "points-achievements",
      title: "Points and Achievements",
      description: "Stay motivated through the application's points, badges, and learning milestones as you study.",
      icon: "Award",
      badge: "Motivation"
    }
  ],

  // Learning Subjects Section (Java & C++)
  learningSubjects: [
    {
      id: "java",
      name: "Java",
      subtitle: "Enterprise-grade, object-oriented programming",
      tag: "Object-Oriented",
      icon: "Coffee",
      accentColor: "#3B82F6",
      accentBg: "rgba(59, 130, 246, 0.12)",
      description: "Master one of the world's most widely used programming languages. From core syntax to object-oriented structures, ProgNest provides organised lessons with concrete examples.",
      benefits: [
        "Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism)",
        "Strong typing and clear syntax suitable for computer science students",
        "Foundational concepts directly applicable to Android and backend development",
        "Topic-by-topic comprehension quizzes to validate knowledge"
      ],
      sampleCode: `public class ProgNestJava {
    public static void main(String[] args) {
        String student = "Learner";
        int streak = 7;
        
        System.out.println("Welcome, " + student + "!");
        System.out.println("Current streak: " + streak + " days");
    }
}`,
      topicsPreview: ["Data Types & Variables", "Control Flow & Loops", "Methods & Arrays", "OOP Principles", "Exception Handling"]
    },
    {
      id: "cpp",
      name: "C++",
      subtitle: "High-performance systems and foundational computing",
      tag: "Systems & Logic",
      icon: "Cpu",
      accentColor: "#8B5CF6",
      accentBg: "rgba(139, 92, 246, 0.12)",
      description: "Delve into low-level computing concepts, memory structures, and high-performance algorithms. ProgNest breaks down C++ concepts into digestible, student-accessible lessons.",
      benefits: [
        "In-depth grasp of foundational computing and memory architecture",
        "Procedural and Object-Oriented paradigms combined",
        "Essential preparation for university computer science curriculums",
        "Modular assessments to solidify algorithm comprehension"
      ],
      sampleCode: `#include <iostream>
#include <string>

int main() {
    std::string learner = "Future Developer";
    int points = 350;

    std::cout << "Learning with ProgNest: " << learner << std::endl;
    std::cout << "Earned XP: " << points << " pts" << std::endl;
    return 0;
}`,
      topicsPreview: ["Pointers & References", "Memory & Stack/Heap", "Functions & Scope", "Classes & Constructors", "STL Basics"]
    }
  ],

  // How It Works Steps
  howItWorksSteps: [
    {
      step: "01",
      title: "Download ProgNest",
      description: "Get the official app from the Indus App Store on your Android device.",
      icon: "DownloadCloud"
    },
    {
      step: "02",
      title: "Open the Application",
      description: "Launch the app and enter a clean, distraction-free student learning environment.",
      icon: "Smartphone"
    },
    {
      step: "03",
      title: "Choose Learning Content",
      description: "Select from the available programming languages — Java or C++.",
      icon: "BookOpen"
    },
    {
      step: "04",
      title: "Study Chapters & Concepts",
      description: "Read structured chapter lessons with code explanations and examples.",
      icon: "FileCode2"
    },
    {
      step: "05",
      title: "Complete Tests & Challenges",
      description: "Test your comprehension with practice quizzes and solve daily challenges.",
      icon: "CheckSquare"
    },
    {
      step: "06",
      title: "Track Progress & Stay Consistent",
      description: "Monitor your completion rates, keep your daily streak alive, and earn points.",
      icon: "Sparkles"
    }
  ],

  // App Preview Gallery Screens
  // If actual image screenshots become available, place them in public/screenshots/
  // and set imageSrc here. If imageSrc is null, the rich illustrative UI mock is displayed.
  appScreenshots: [
    {
      id: "curriculum",
      title: "Structured Curriculum",
      caption: "Organised chapter list showing Java and C++ learning paths with module progress.",
      imageSrc: null,
      screenTag: "Lessons",
      highlight: "Clean Chapter Navigation"
    },
    {
      id: "lesson",
      title: "Lesson & Code Breakdown",
      caption: "Read concise explanations with formatted code examples and concept breakdowns.",
      imageSrc: null,
      screenTag: "Study",
      highlight: "Readability-First Layout"
    },
    {
      id: "practice-test",
      title: "Practice Tests & Assessments",
      caption: "Validate your understanding with multiple-choice questions and instant feedback.",
      imageSrc: null,
      screenTag: "Assess",
      highlight: "Instant Knowledge Checks"
    },
    {
      id: "challenges",
      title: "Daily Challenges",
      caption: "New problem-solving challenges every day to sharpen your critical coding skills.",
      imageSrc: null,
      screenTag: "Daily",
      highlight: "Habit-Building Exercises"
    },
    {
      id: "progress",
      title: "Streak & Progress Tracking",
      caption: "View your day streak, accumulated learning points, and completed chapter statistics.",
      imageSrc: null,
      screenTag: "Stats",
      highlight: "Motivation & Analytics"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "What is ProgNest?",
      answer: "ProgNest is an Android programming education application designed to make learning to code structured, approachable, and consistent. It offers organised lessons, practical examples, practice assessments, daily challenges, and progress tracking for students and self-learners."
    },
    {
      id: "faq-2",
      question: "Where can I download ProgNest?",
      answer: "ProgNest is distributed officially on the Indus App Store for Android devices. You can download it directly from the Indus App Store by clicking the 'Download on Indus App Store' button on this website."
    },
    {
      id: "faq-3",
      question: "Which programming languages are currently available?",
      answer: "ProgNest currently supports structured learning for Java and C++. Content coverage and available chapters reflect the current version of the application."
    },
    {
      id: "faq-4",
      question: "Is ProgNest suitable for beginners?",
      answer: "Yes! ProgNest is designed specifically with students and beginners in mind. Chapters start with foundational concepts and build up progressively with clear explanations and practical code examples."
    },
    {
      id: "faq-5",
      question: "Does ProgNest include practice tests?",
      answer: "Yes, ProgNest features built-in practice tests and topic quizzes within the Android application so you can test your comprehension immediately after reading lessons."
    },
    {
      id: "faq-6",
      question: "Can I track my learning progress?",
      answer: "Yes. ProgNest includes in-app progress tracking, an active learning streak tracker, and learning points to help you maintain consistency and observe your personal growth over time."
    },
    {
      id: "faq-7",
      question: "How can I contact the ProgNest team?",
      answer: "You can get in touch with our team directly via email at feedback.prognest.com@gmail.com or by using the contact form on this website. We welcome questions, feedback, and suggestions."
    },
    {
      id: "faq-8",
      question: "Where can I report a bug or suggest a feature?",
      answer: "You can report bugs or propose feature requests by emailing feedback.prognest.com@gmail.com or selecting the 'Bug Report' / 'Feature Suggestion' category in our contact form. Please include your Android OS version and device model if reporting an issue."
    }
  ],

  // Contact form topic options
  contactTopics: [
    { value: "general", label: "General Inquiry" },
    { value: "bug", label: "Bug Report (Android App)" },
    { value: "feature", label: "Feature Suggestion" },
    { value: "content", label: "Learning Content Feedback" },
    { value: "other", label: "Other" }
  ]
};
