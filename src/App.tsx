/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Globe, 
  Radio, 
  Sprout, 
  University, 
  Church,
  Rocket,
  MessageCircle,
  ChevronDown,
  Star,
  FileText,
  Settings,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Lightbulb,
  ChartLine,
  FileEdit,
  BookOpen,
  ClipboardCheck,
  Users2,
  UserPlus,
  Handshake,
  BarChart3,
  Cpu,
  PieChart,
  Megaphone,
  HeartHandshake,
  Video,
  MessagesSquare,
  Tractor,
  Presentation,
  Microscope,
  Book,
  Heart,
  Download,
  Mic,
  Languages,
  FileSignature
} from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./components/Logo";
import { jsPDF } from "jspdf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AudiencePage } from "./components/AudiencePage";
import { ContactPage } from "./components/ContactPage";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

type Audience = 
  | "students" | "teachers" | "hr" | "ceos" | "ngos" 
  | "media" | "agriculture" | "government";

interface Plan {
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  popular?: boolean;
  cta?: string;
}

interface AudienceData {
  id: Audience;
  label: string;
  icon: any;
  hook?: string;
  plans: Plan[];
  sample?: {
    title: string;
    intro: string;
    tool: string;
    prompt: {
      title: string;
      content: string;
    };
    output: {
      title: string;
      content: string;
    };
  };
  content: {
    title: string;
    description: string;
    icon: any;
  }[];
  samples: {
    title: string;
    desc: string;
    content: string;
  }[];
}

const AUDIENCES: AudienceData[] = [
  {
    id: "students",
    label: "Students (Primary, Secondary, University, Masters & PhDs)",
    icon: GraduationCap,
    plans: [
      { 
        name: "Deadline Lifeline", 
        price: "3,000 RWF", 
        tagline: "Best for: Primary, Secondary, and Undergraduates stuck the night before an assignment is due. \"Don't panic. Get unstuck and get it done safely.\"",
        features: ["WhatsApp Prompt Rescue", "Safe AI Anti-Plagiarism Guide", "The Assignment Structurer"] 
      },
      { 
        name: "Research Engine", 
        price: "5,000 RWF", 
        tagline: "Best for: Final-year Undergrads and Masters students writing dissertations. \"Stop reading 50-page PDFs. Let AI do the heavy lifting.\"",
        features: ["Literature Review Automator", "The Academic Paraphraser", "The Data Assistant"],
        popular: true 
      },
      { 
        name: "VIP Thesis Clinic", 
        price: "15,000 RWF", 
        tagline: "Best for: PhDs, serious Masters students, or anyone doing a final-year project who has zero time to waste. \"Your personal AI research assistant, custom-built for your exact thesis.\"",
        features: ["2-Hour Hands-On Practice Session", "Custom Prompt Engineering", "Priority Concierge Support"] 
      }
    ],
    sample: {
      title: "🎓 Sample Blueprint Sneak Peek: The \"A-Grade\" Assignment Architect",
      intro: "Struggling to start that 2,000-word essay? Most students fail because they don't have a structure. We use the RGCC Framework to turn a simple topic into a professional, high-scoring academic outline in seconds.",
      tool: "Recommended AI Tool: ChatGPT-4o or Perplexity (Best for deep research and structured academic outlines).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a Senior Academic Tutor at a top-tier university.\n\n[GOAL] Create a detailed, high-scoring outline for a 2,000-word undergraduate essay.\n\n[CONTEXT] The topic is \"The Impact of Artificial Intelligence on Job Security in East Africa's Service Sector.\" The audience is academic markers who value critical analysis, local case studies (like Rwanda or Kenya), and a balanced argument.\n\n[CONSTRAINTS] The outline must include an Introduction (with a thesis statement), three main body sections (with sub-points), and a Conclusion. For each section, suggest one type of evidence or data point to look for. Use formal academic tone."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Essay Roadmap):",
        content: "Essay Title: Navigating the Digital Shift: A Critical Analysis of AI and Employment Stability in East Africa’s Service Industry.\n\nI. Introduction\n- Hook: The rapid integration of AI in Kigali’s banking and hospitality sectors.\n- Context: Defining the \"Service Sector\" in the EAC (East African Community) context.\n- Thesis Statement: While AI threatens low-skill clerical roles, it simultaneously creates high-value opportunities in tech-management, requiring a strategic regional upskilling framework.\n\nII. Body Section 1: The Automation of Routine Service Tasks\n- Focus: Chatbots in banking (e.g., BK, I&M) and automated check-ins.\n- Evidence: Look for statistics on \"Digital Banking Adoption Rates in Rwanda 2023-2024.\"\n\nIII. Body Section 2: New Frontiers - AI as a Job Creator\n- Focus: The rise of data labeling, AI maintenance, and personalized tourism services.\n- Evidence: Case study on \"The Growth of Tech Hubs in Nairobi and Kigali.\"\n\nIV. Body Section 3: The Skills Gap and Policy Response\n- Focus: Why education systems must pivot from \"memorization\" to \"AI-collaboration.\"\n- Evidence: Review \"Rwanda’s National AI Policy\" for specific government targets.\n\nV. Conclusion\n- Summary: AI is not a job-killer, but a job-transformer.\n- Final Thought: The future belongs to the \"Augmented Worker.\""
      }
    },
    content: [
      { title: "Research Planning", description: "Get help with research gap identification, literature review, and methodology design for your thesis.", icon: Lightbulb },
      { title: "The Research Engine", description: "Our flagship AI-powered system for automated literature synthesis, citation mapping, and identifying high-impact research trends.", icon: Rocket },
      { title: "Data Analysis", description: "Professional guidance on statistical analysis, interpretation, and presentation of findings.", icon: ChartLine },
      { title: "Writing Support", description: "Structure your thesis, improve academic writing, and ensure university standards.", icon: FileEdit },
      { title: "Prompt Engineering", description: "Master the art of crafting high-precision academic prompts using our specialized RGCC framework.", icon: Cpu },
      { title: "PhD Research Design", description: "Advanced research methodology, experimental design, and statistical frameworks for doctoral studies.", icon: Microscope },
    ],
    samples: [
      { 
        title: "Academic Prompt Library", 
        desc: "The official AriseBlueprint Lab Prompt Bank with RGCC framework.",
        content: "ARISE BLUEPRINT LAB: ACADEMIC PROMPT LIBRARY\n\nOVERVIEW\nWelcome to the official AriseBlueprint Lab Prompt Bank. This resource provides a curated set of high-quality academic prompts designed to support rigorous, ethical, and effective research workflows across disciplines.\n\nTHE RGCC FRAMEWORK FOR ACADEMIC PROMPTING\nHigh-quality AI outputs begin with well-structured prompts. Arise Blueprint Lab applies the RGCC Framework to ensure academic precision and reliability.\n\nR — Role: Assign the AI a specific academic role.\nG — Goal: Clearly state the task to be completed.\nC — Context: Provide relevant background information.\nC — Constraint: Set boundaries and academic rules.\n\nCATEGORY 1: TOPIC SEARCH & RESEARCH DESIGN\n1. Research Gap Finder: \"Act as a Senior Academic Researcher. My topic is [Insert Topic]. Identify three current research gaps in recent literature that could be explored in a thesis. Constraint: Focus on gaps from the last five years.\"\n2. Problem Statement Architect: \"Act as a Thesis Advisor. Draft a formal problem statement for research on [Insert Topic]. Context: PhD-level proposal. Constraint: Highlight the tension between the current state and the ideal state.\"\n3. Research Question Refiner: \"Act as a Research Methodologist. Refine the following research question to improve clarity and researchability: [Insert Question]. Constraint: Ensure it is open-ended and empirically grounded.\"\n4. Theoretical Framework Scout: \"Act as a Social Science Expert. Recommend two to three theoretical frameworks relevant to a study on [Insert Topic], and briefly explain their relevance.\"\n5. Academic Title Generator: \"Act as an Academic Editor. Generate five formal thesis titles based on [Insert Topic and Key Findings]. Constraint: Titles must be precise and descriptive.\"\n6. Methodology Consultant: \"Act as a Qualitative Research Specialist. For the topic [Insert Topic], recommend the most appropriate data collection method and justify the choice.\"\n7. Keyword Strategy Builder: \"Act as a Research Librarian. Based on [Insert Topic], generate ten academic keywords and Boolean search strings suitable for databases such as Scopus or JSTOR.\"\n\nCATEGORY 2: SUMMARIZATION & LITERATURE REVIEW\n8. Methodology Snapshot: \"Act as a Senior Researcher. Extract and summarize the methodology from the following text: [Paste Text]. Goal: Present sample size, design, and analysis tools in three bullet points.\"\n9. Findings Extractor: \"Act as an Academic Assistant. Summarize the key findings from this abstract: [Paste Abstract]. Constraint: Maximum 100 words.\"\n10. Comparative Synthesis: \"Act as a Literature Review Expert. Compare the arguments in the following two summaries: [Paste Text A] and [Paste Text B]. Goal: Identify one shared theme and one conflicting finding.\"\n11. Abstract Drafter: \"Act as a Scientific Writer. Using the following results [Insert Results], draft a 250-word abstract. Constraint: Follow the IMRaD structure.\"\n12. Jargon Clarifier: \"Act as a Subject Matter Expert. Explain the following technical concept in clear, accessible academic language: [Insert Concept].\"\n13. Reference Formatter: \"Act as a Formatting Assistant. Convert the following citation into APA or MLA (7th edition): [Paste Reference].\"\n14. Critical Appraisal: \"Act as a Peer Reviewer. Analyze the following paragraph and identify potential biases or limitations: [Paste Text].\"\n\nCATEGORY 3: EDITING & ACADEMIC VOICE\n15. Academic Tone Enhancer: \"Act as an Expert Thesis Editor. Rewrite the following text to improve formality and objectivity. Constraint: Remove first-person language.\"\n16. Conciseness Editor: \"Act as a Copy Editor. Reduce the length of this section by 30% while preserving academic rigor: [Paste Text].\"\n17. Logical Flow Connector: \"Act as a Writing Coach. Propose a transition sentence that logically connects the following two ideas: [Idea A] and [Idea B].\"\n18. Grammar and Syntax Audit: \"Act as a Professional Proofreader. Review the following text for grammar and syntax errors. Output: Provide a corrected version and list of changes.\"\n19. Active Voice Converter: \"Act as a Writing Editor. Identify passive constructions and rewrite them in active voice: [Paste Text].\"\n20. AI Disclosure Statement Generator: \"Act as an Ethics Officer. Draft a three-sentence AI Disclosure Statement describing how AI was used for editing or summarization in academic work.\"\n\nQUALITY & ETHICS NOTE\nVerification: Always verify AI-generated citations and factual claims.\nAcademic Integrity: Use AI as a support tool, not a substitute for independent scholarship."
      },
      {
        title: "Research Proposal Template (One-Page)",
        desc: "Initial supervisor meetings, funding applications, or research planning.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nRESEARCH PROPOSAL TEMPLATE (ONE-PAGE VERSION)\n\nSTUDENT INFORMATION\nName: _________________________________\nStudent ID: _________________________________\nProgram: _________________________________ (e.g., MBA, MSc Public Health)\nSupervisor: _________________________________\nDate: _________________________________\n\n1. PROPOSED RESEARCH TITLE\nFormat: [Action Word] + [Main Variable] + [Context/Population] + [Location]\nExamples:\n- \"Assessing the Impact of Mobile Money on SME Growth in Kigali, Rwanda\"\n- \"Factors Influencing E-learning Adoption Among University Students in Rwanda\"\n- \"Exploring Maternal Health Outcomes in Rural Districts of Rwanda\"\n\n2. BACKGROUND AND RATIONALE (200-300 words)\n- Context: Explain the broader topic and why it matters globally and in Rwanda.\n- The Problem: What specific issue are you addressing?\n- Research Gap: What is missing in current knowledge?\n\n3. RESEARCH OBJECTIVES\n- General Objective: One broad statement of what you want to achieve.\n- Specific Objectives: 3-5 measurable, specific objectives.\n\n4. RESEARCH QUESTIONS\n- Main Research Question: One broad question aligned with your general objective.\n- Sub-Questions: 3-5 specific questions aligned with your specific objectives.\n\n5. RESEARCH METHODOLOGY (150-200 words)\n- Research Design: Descriptive, Correlational, Experimental, Case Study, or Mixed Methods.\n- Approach: Quantitative, Qualitative, or Mixed Methods.\n- Target Population: e.g., \"SMEs in Kigali with 5-50 employees registered with RDB\".\n- Sample Size: participants (justify with formula or citation).\n- Sampling Method: Random, Stratified, Purposive, or Convenience Sampling.\n- Data Collection Methods: Primary (Survey, Interview, Focus Group) and Secondary (NISR, RDB, Journals).\n- Data Analysis: Quantitative (SPSS/Excel) and Qualitative (NVivo/Manual Coding).\n\n6. EXPECTED OUTCOMES AND SIGNIFICANCE\n- Expected Results: What do you expect to find?\n- Significance: For SMEs, For Policymakers, For Academia.\n\n7. TENTATIVE TIMELINE (6 Months)\n- Month 1-2: Literature Review\n- Month 2: Proposal Defense\n- Month 2-3: Data collection tool design\n- Month 3: Ethical clearance\n- Month 3-4: Data collection\n- Month 4-5: Data analysis\n- Month 5-6: Report writing\n- Month 6: Final thesis submission\n\n8. PRELIMINARY REFERENCES (5-10 key sources)\nFormat: Use APA, Harvard, or your university's preferred style."
      },
      { 
        title: "PhD Research Methodology", 
        desc: "Advanced framework for doctoral level research.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPHD RESEARCH METHODOLOGY\n\n1. Research Philosophy (Ontology/Epistemology)\n2. Research Approach (Inductive/Deductive)\n3. Research Strategy\n4. Data Collection Instruments\n5. Data Analysis Techniques (NVivo/SPSS/R)\n6. Ethical Considerations"
      }
    ]
  },
  {
    id: "teachers",
    label: "Teachers & Educators",
    icon: Presentation,
    plans: [
      { 
        name: "The Full AI Toolkit", 
        price: "5000 RWF", 
        tagline: "One-Time Payment. \"Everything you need to start automating your lesson plans today.\"",
        features: [
          "The Blueprint PDF: Instant access to our complete library of 50+ premium RGCC prompts, advanced templates, and grading rubrics.",
          "1 Month WhatsApp Support: Got stuck on a prompt? Text the helpline, and we will help you fix your prompt so you can keep moving."
        ] 
      },
      { 
        name: "The VIP Educator Setup", 
        price: "10,000 RWF", 
        tagline: "Per Academic Term. \"Your personal AI teaching assistant. We build your term strategy together.\"",
        features: [
          "The Full AI Toolkit: You get the complete Blueprint PDF and all premium templates.",
          "2-Hour Hands-On Practice (Live): We sit down with you (via Zoom or in person) and your actual syllabus to generate core lesson plans and exams.",
          "Full AI Strategy & Support (1 Term): Priority WhatsApp access for the entire school term to help you integrate AI into your specific subjects."
        ],
        popular: true 
      }
    ],
    sample: {
      title: "🍎 Sample Blueprint Sneak Peek: The 5-Minute Lesson Plan & Quiz Architect",
      intro: "Stop spending your weekends grading and planning. We use the RGCC Framework to help teachers generate a full, curriculum-aligned lesson plan and an interactive quiz in less time than it takes to pour a cup of coffee.",
      tool: "Recommended AI Tool: ChatGPT-4o or Claude 3.5 Sonnet (Best for creative pedagogical structures and clear formatting).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as an expert Curriculum Designer with 20 years of experience in student-centered learning.\n\n[GOAL] Create a comprehensive 40-minute lesson plan and a 5-question formative assessment quiz.\n\n[CONTEXT] The topic is \"The Water Cycle\" for a Grade 6 Science class in Rwanda. The lesson must be interactive, include a local example (like rainfall in the Musanze region), and cater to different learning styles.\n\n[CONSTRAINTS] The lesson plan must include: 1. Learning Objectives, 2. A 5-minute 'Hook' activity, 3. Core content delivery, and 4. A 5-question multiple-choice quiz with an answer key. Use simple, clear language suitable for 11-12 year olds."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Monday Morning Lifesaver):",
        content: "Lesson Title: The Journey of a Drop: Understanding the Water Cycle in Rwanda.\n\nI. Learning Objectives\n- Students will identify the 4 main stages of the water cycle.\n- Students will explain how evaporation and condensation lead to rainfall in mountainous areas like Musanze.\n\nII. The Hook (5 Mins): \"The Disappearing Puddle\"\n- Ask: \"If it rains in the morning in Musanze, but the sun comes out at noon, where does the water go?\"\n- Activity: Quick 'Think-Pair-Share' about where water 'hides' when it's not raining.\n\nIII. Core Content (25 Mins)\n1. Evaporation: The sun warms Lake Kivu; water turns to invisible gas.\n2. Condensation: The gas rises, cools over the Virunga Mountains, and forms clouds.\n3. Precipitation: The clouds get heavy and rain falls on the farmers' crops.\n4. Collection: Water flows back into the valleys and lakes.\n\nIV. Interactive Quiz (10 Mins)\n1. What is it called when water turns into gas? (A. Evaporation, B. Freezing)\n2. Why does it rain so much near Musanze? (A. The mountains cool the air, B. It's closer to the sun)\n\nAnswer Key: 1-A, 2-A..."
      }
    },
    content: [
      { title: "CBC Lesson Plans", description: "Complete CBC-aligned lesson plans with activities, assessments, and differentiation strategies.", icon: BookOpen },
      { title: "Assessment Tools", description: "Ready-to-use rubrics, assessment criteria, and evaluation frameworks for all grade levels.", icon: ClipboardCheck },
      { title: "Quiz Preparation & Generation", description: "Automated quiz generation, marking schemes, and question bank management tools.", icon: FileText },
      { title: "Classroom Management", description: "Strategies for managing diverse classrooms and creating inclusive learning environments.", icon: Users2 },
    ],
    samples: [
      { 
        title: "CBC Lesson Plan Template", 
        desc: "Standardized CBC lesson plan for primary and secondary levels.",
        content: "ARISE RESEARCH BLUEPRINT LAB\nCBC LESSON PLAN TEMPLATE\nFor All Teachers · All Levels · All Subjects · Rwanda\n\nSECTION A: Basic Lesson Information\n- Teacher Name: [Your Full Name]\n- School Name: [Name of Your School / Institution]\n- Level / Class: [e.g. P4 / S2 / Year 1 University]\n- Subject: [e.g. Mathematics / English / Biology]\n- Topic: [Specific Lesson Topic]\n- Sub-topic: [Specific focus within the topic]\n- Duration: [e.g. 40 min / 60 min / 90 min]\n- Number of Students: [e.g. 35 students]\n- Date: [DD / MM / YYYY]\n- Lesson Number in Unit: [e.g. Lesson 3 of 8 in Unit 2]\n\nSECTION B: Curriculum Alignment\n- Curriculum: [e.g. Rwanda CBC — Primary / Secondary]\n- Unit / Chapter: [e.g. Unit 3: Fractions]\n- Key CBC Competencies Targeted: Critical Thinking, Communication, Creativity, Cooperation, Character, Citizenship, Lifelong Learning.\n\nSECTION C: Learning Outcomes\nBy the end of this lesson, students will be able to:\n- KNOWLEDGE (Know): [Facts, definitions, concepts]\n- SKILLS (Do): [Actions, procedures, processes]\n- ATTITUDES (Be): [Values or behaviours developed]\n\nSECTION D: Materials & Resources\n- Teacher Materials: [Textbook, projector, etc.]\n- Student Materials: [Exercise books, pens, etc.]\n- Technology: [Laptop, internet, etc.]\n- Reference / Source: [REB Textbook, etc.]\n\nSECTION E: Lesson Procedure (Step-by-Step)\n1. INTRODUCTION / HOOK (5–10 min): Purpose, Teacher Action, Student Response.\n2. MAIN TEACHING ACTIVITY: Instruction, Vocabulary, Examples, Student Activity.\n3. GUIDED PRACTICE: Activity Description, Grouping, Differentiation.\n\nSECTION F: Assessment Plan\n- Assessment Type: [Formative / Summative]\n- Method: [Oral questioning, worksheet, etc.]\n- Criteria: [Accuracy, participation, etc.]\n- Recording: [Tick list, rubric, etc.]\n- Follow-up: [Reteach, move on, etc.]\n\nSECTION G: Post-Lesson Teacher Reflection\n- What went well? / What didn't go as planned?\n- Evidence of student learning.\n- What I will do differently next lesson.\n- Students who need extra support."
      },
      {
        title: "AI Quiz Generation Master Prompt",
        desc: "Master prompt for generating high-quality quizzes using ChatGPT and NotebookLM.",
        content: "ARISE RESEARCH BLUEPRINT LAB\nAI Quiz Generation Master Prompt for Teachers\n(ChatGPT + NotebookLM Demonstration Edition)\n\nPURPOSE\nThis prompt helps teachers generate:\n- High-quality quizzes\n- Competency-based assessments\n- Higher-order thinking questions\n- Marking guides\n- Feedback explanations\n- Auto-differentiated versions (easy / medium / advanced)\n\nPART 1: USING ChatGPT TO GENERATE A SMART QUIZ\n\nCOPY & PASTE THIS INTO ChatGPT:\n\"Act as an experienced curriculum expert and assessment designer. Create a high-quality quiz for:\n\nSubject: [Insert Subject]\nTopic: [Insert Topic]\nLevel: [Primary / Secondary / University / TVET]\nCurriculum: [CBC / National Curriculum / Cambridge / etc.]\nDuration: [e.g., 30 minutes]\n\nThe quiz must include:\n1. 5 Multiple Choice Questions (with 4 options each)\n2. 3 Short Answer Questions\n3. 2 Application or Case-Based Questions\n4. 1 Higher-Order Thinking Question (Analysis or Evaluation level)\n\nThen provide:\n- Answer key\n- Marking scheme with allocated marks\n- Short explanation for each correct answer\n- One differentiated easier version\n- One advanced extension question\n\nEnsure questions test understanding, not memorization. Make it engaging, clear, and suitable for classroom use.\"\n\nWhy you need This\nWith one prompt, ChatGPT:\n- Designs structured assessments\n- Aligns with learning objectives\n- Provides marking guides instantly\n- Creates differentiated learning versions\n- Saves 2–3 hours of manual work\nIt feels like having a professional assessment designer in your laptop.\n\nPART 2: USING NotebookLM TO GENERATE A QUIZ FROM YOUR OWN NOTES\nNow we make it even more powerful.\n\nNotebookLM works differently from ChatGPT. Instead of generating from general knowledge, it generates quizzes directly from:\n- Your lesson notes\n- Your PDF textbook\n- Your scheme of work\n- Your PowerPoint slides\n- Government curriculum documents\n\nFor example:\n- Upload Rwanda REB curriculum guide\n- Upload your own lesson notes\n- Upload a chapter PDF\n\nThen ask NotebookLM:\n\nCOPY THIS INTO NotebookLM:\n\"Based only on the uploaded documents, generate a structured quiz for my students.\n\nInclude:\n- 5 multiple choice questions\n- 3 short answer questions\n- 2 application questions\n- 1 higher-order thinking question\n\nEnsure all questions strictly come from the uploaded materials. Provide answers and marking scheme. Highlight which section of the document each question is based on.\"\n\nWhy This Is Powerful\nNotebookLM:\n- Prevents hallucination\n- Uses ONLY your curriculum material\n- Cites exact sections\n- Keeps alignment with school standards\n- Increases academic integrity\nIt becomes your AI-powered curriculum assistant.\n\nThe Magic: Combining Both Tools\n\nChatGPT:\n- Creative\n- Flexible\n- Fast structuring\n- Differentiation expert\n\nNotebookLM:\n- Curriculum-based\n- Evidence-based\n- Document-grounded\n- Policy-aligned\n\nTogether, they create:\n- Smarter assessments\n- Faster preparation\n- Better question quality\n- Reduced teacher burnout\n- More engaging student evaluation\n\nDemo Scenario\nImagine a Mathematics teacher teaching:\nTopic: Quadratic Equations\nLevel: Senior 3\n\nWithin 5 minutes:\nChatGPT:\n- Creates structured quiz\n- Adds application problem\n- Provides marking scheme\n\nNotebookLM:\n- Pulls exact definitions from REB document\n- Generates exam-style question aligned to national standards\n- Cites curriculum source\n\nThe teacher now has:\n- Professional-level assessment\n- Curriculum-aligned\n- Differentiated\n- Ready to print\nWithout staying up late writing questions.\n\nTraining Invitation\nThis is just 5% of what AI can do for teachers. In our full training, you will learn:\n- How to design competency-based AI prompts\n- How to generate exam papers in minutes\n- How to create marking rubrics automatically\n- How to prevent AI misuse by students\n- How to use AI ethically in classrooms\n- How to turn your lesson notes into smart assessments\n- How to build your own AI Teaching Toolkit\n\nConclusion\nAI is not replacing teachers. It is upgrading powerful teachers. The future classroom is not about working harder. It is about working smarter. Teachers who understand AI today."
      },
      {
        title: "Mastering CBC Lesson Planning",
        desc: "The AI-Powered Teacher: From Administrative Burden to Creative Teaching.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nTHE AI-POWERED TEACHER: MASTERING CBC LESSON PLANNING\n\n1. THE CHALLENGE: WHY CBC PLANNING FEELS SO HARD\nCompetency-Based Curriculum (CBC) is excellent for students but exhausting for teachers. You are required to:\n- Align every lesson with specific 'Key Unit Competences'.\n- Break down objectives into Knowledge, Skills, and Attitudes (KSA).\n- Plan 'Learner-Centered' activities that keep 40+ students engaged.\n- Integrate 'Cross-Cutting Issues' (Gender, Environment, Financial Literacy).\n- Differentiate instruction for students with special needs.\n\n2. THE SOLUTION: YOUR DIGITAL TEACHING ASSISTANTS\nAI is here to be your Secretary, Research Assistant, and Planner. \n\n- ChatGPT: The 'Instant Drafter'. Best for creating full lesson plan drafts from scratch.\n  Prompt: 'Act as an expert Rwandan CBC teacher. Create a 40-minute lesson plan for [Subject: Biology], [Grade: S3], on the topic of [Photosynthesis]. Include a KSA table and Learner-Centered activities.'\n\n- Google Gemini: The 'Curriculum Aligner'. Great for making abstract topics relatable to Rwandan students.\n  Prompt: 'I am teaching [Topic: Financial Literacy] to Senior 4 students in Rwanda. Suggest 3 Discovery Activities using real-world Rwandan examples like Mobile Money or local markets.'\n\n- NotebookLM: The 'Syllabus Expert'. For strict compliance. Upload the official REB Syllabus PDF and it answers only from that book.\n  Prompt: 'Based strictly on the uploaded syllabus, generate a Scheme of Work for [Unit 3]. List the Key Unit Competence and Learning Objectives.'\n\n- Gamma: The 'Slide Designer'. Creates visual presentations in 1 click.\n  Prompt: 'Create a 10-slide presentation for a high school history class on [Topic: The 1994 Genocide against the Tutsi]. Keep the tone respectful and educational.'\n\n- Perplexity: The 'Fact-Checker'. Finds accurate sources and up-to-date statistics.\n  Prompt: 'Find the latest statistics on [Coffee Exports in Rwanda] for 2023-2024. Cite the official source like NAEB or NISR.'\n\n- Claude.ai: The 'Long-Form Planner'. Best for Schemes of Work and Term Planning.\n  Prompt: 'I have these 15 topics to cover in [Term 2]. Create a Weekly Scheme of Work table with columns for Week, Topic, and Teaching Methods.'\n\n3. CONCLUSION\nDon't just read about the future—build it in your classroom. Arise provides the hands-on training that turns 'Technology' into 'Teaching Power'."
      }
    ]
  },
  {
    id: "hr",
    label: "HR Professionals",
    icon: Users,
    plans: [
      { 
        name: "The Admin Hack", 
        price: "5,000 RWF", 
        tagline: "Best For: HR Officers who want instant relief from daily typing and drafting. \"Never write a routine document from scratch again.\"",
        features: ["The JD & Interview Architect", "The Policy & Memo Drafter", "WhatsApp Tone Check Support"] 
      },
      { 
        name: "The Talent Engine", 
        price: "15,000 RWF", 
        tagline: "Best For: HR Managers handling mass recruitment and performance review cycles. \"Automate the heavy lifting of recruitment and data.\"",
        features: ["The CV Screener System", "The Performance Review Automator", "The Onboarding Assistant"],
        popular: true 
      },
      { 
        name: "The VIP Strategic Partner", 
        price: "100,000 RWF", 
        tagline: "Best For: Solo HR Managers who want an expert to help them build their internal AI systems. \"Your bespoke AI HR department, set up for you.\"",
        features: ["2-Hour Live System Setup", "Custom Company Prompts", "30-Day Executive Concierge"] 
      }
    ],
    sample: {
      title: "🤝 Sample Blueprint Sneak Peek: The 60-Second Job Description & Interview Guide Generator",
      intro: "Recruitment shouldn't take weeks. We use the RGCC Framework to help HR professionals generate high-quality, performance-driven job descriptions and behavioral interview guides in under a minute.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet or ChatGPT-4o (Best for professional tone and structured HR documentation).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a Senior HR Director with 15 years of experience in the East African tech and finance sectors.\n\n[GOAL] Generate a comprehensive Job Description (JD) and a structured Interview Guide for a 'Customer Success Manager' role.\n\n[CONTEXT] The company is a fast-growing Fintech startup based in Kigali, Rwanda. The ideal candidate needs to be fluent in Kinyarwanda and English, have experience with CRM tools, and a strong background in conflict resolution. The company culture is fast-paced, innovative, and deeply customer-centric.\n\n[CONSTRAINTS] The JD must include: 1. A catchy 'Why Join Us' section, 2. Key Responsibilities (5-7 bullets), 3. Required Qualifications. The Interview Guide must include 3 behavioral questions using the STAR method. Use a professional yet modern tone."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Recruitment Shortcut):",
        content: "Job Title: Customer Success Manager\nLocation: Kigali, Rwanda (Fintech Sector)\n\nI. Why Join Us?\nBe part of the digital revolution in Rwanda! We aren't just a startup; we are building the financial rails for the next generation. If you love solving complex problems and making customers smile, your seat is ready.\n\nII. Key Responsibilities\n- Proactively manage a portfolio of 50+ high-value corporate clients.\n- Act as the primary bridge between our product team and the end-user.\n- Resolve technical and financial queries with empathy and speed.\n- Drive product adoption and identify upsell opportunities.\n- Lead monthly 'Voice of the Customer' feedback sessions.\n\nIII. Required Qualifications\n- 3+ years in Customer Success or Account Management.\n- Native-level Kinyarwanda and professional English.\n- Mastery of HubSpot or Salesforce CRM.\n- Proven track record in the East African Fintech or Banking space.\n\nIV. Interview Guide (STAR Method)\n1. \"Tell me about a time you had to handle a frustrated client who was facing a technical payment failure. What did you do?\"\n2. \"Describe a situation where you identified a customer need that wasn't being met. How did you advocate for them?\"\n3. \"Give an example of how you managed a high-pressure deadline involving multiple stakeholders.\""
      }
    },
    content: [
      { title: "Recruitment Templates", description: "Professional job descriptions, interview guides, and candidate evaluation frameworks.", icon: UserPlus },
      { title: "Policy Documents", description: "HR policies, employee handbooks, and compliance documents tailored to Rwandan laws.", icon: Handshake },
      { title: "Performance Systems", description: "Performance review templates, goal-setting frameworks, and development plans.", icon: BarChart3 },
    ],
    samples: [
      { 
        title: "Employee Handbook Outline", 
        desc: "Essential policies for a modern Rwandan workplace.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nEMPLOYEE HANDBOOK OUTLINE\n\n1. Welcome and Introduction\n2. Employment Policies\n- Recruitment and Selection\n- Probation Period\n3. Code of Conduct\n4. Compensation and Benefits\n5. Leave Policies\n6. Disciplinary Procedures"
      },
      {
        title: "AI Recruitment Accelerator",
        desc: "Simplify your hiring workflow from Job Description to Offer Letter.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nTHE AI RECRUITMENT ACCELERATOR – RWANDA EDITION\n\n1. PHASE 1: THE JOB DESCRIPTION ARCHITECT\nStop drafting from scratch. Create strategic, performance-driven JDs aligned with Rwanda's talent market.\nPrompt: 'Act as a Senior HR Manager in Rwanda. Write a professional JD for a [Job Title] in the [Industry] sector. Include KSA, 7 actionable bullet points, and KPIs for the first 90 days.'\n\n2. PHASE 2: THE INTERVIEW QUESTION GENERATOR\nMove beyond 'Tell me about yourself'. Generate behavioral questions using the STAR Method.\nPrompt: 'I am interviewing a candidate for [Job Title]. Generate 7 Behavioral Interview Questions based on the STAR Method. Focus on Conflict Resolution, Problem Solving, and Integrity.'\n\n3. PHASE 3: THE CV SCREENER RUBRIC\nStandardize and score objectively. Create a Candidate Evaluation Scorecard.\nPrompt: 'Act as an expert Recruiter. Create a Candidate Evaluation Scorecard (Matrix) for the [Job Title] position. Include Criteria, Weight, and a 1-5 Scoring guide.'\n\n4. PHASE 4: THE HR COMMUNICATION ASSISTANT\nProfessional emails in seconds. No more rewriting offer letters or rejection emails.\n- Option A: Job Offer Email (Warm and celebratory).\n- Option B: Polite Rejection Email (Respectful and empathetic).\n\n5. CONCLUSION\nArise helps you hire smarter, faster, and more objectively. We introduce numerous AI tools like Perplexity, Claude.ai, and Gemini to master the HR lifecycle."
      }
    ]
  },
  {
    id: "ceos",
    label: "CEOs",
    icon: Briefcase,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    sample: {
      title: "🚀 Sample Blueprint Sneak Peek: The 2-Minute Executive Strategy & Crisis Briefing",
      intro: "As a CEO, your time is your most valuable asset. We use the RGCC Framework to help executives synthesize complex data, draft high-stakes communications, and build strategic roadmaps in minutes, not hours.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet or ChatGPT-4o (Best for nuanced strategic thinking and executive-level tone).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a Chief of Staff and Strategic Advisor to a Fortune 500 CEO.\n\n[GOAL] Synthesize a complex market entry strategy and draft a high-stakes internal memo to the Board of Directors.\n\n[CONTEXT] Our company, a regional logistics leader in East Africa, is considering a $5M expansion into the DRC market. We face risks regarding infrastructure and regulatory hurdles, but the growth potential is 300% over 3 years.\n\n[CONSTRAINTS] Provide a 3-point executive summary, a SWOT analysis, and a 200-word draft memo for the Board. Use a decisive, visionary, and data-driven tone."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Strategic Advantage):",
        content: "I. Executive Summary\n1. Market Opportunity: The DRC expansion represents a $15M revenue potential by Year 3, driven by untapped demand in urban centers.\n2. Risk Mitigation: We recommend a 'Hub-and-Spoke' entry model, partnering with local distributors to minimize initial capital exposure.\n3. Strategic Alignment: This move solidifies our position as the dominant Pan-African logistics provider.\n\nII. SWOT Analysis\n- Strengths: Existing regional fleet and proprietary routing software.\n- Weaknesses: High initial logistics cost due to infrastructure gaps.\n- Opportunities: First-mover advantage in high-growth corridors.\n- Threats: Fluctuating local regulations and currency volatility.\n\nIII. Board Memo Draft\nSubject: Strategic Expansion into the DRC Market\n\nDear Members of the Board,\n\nFollowing extensive market analysis, I am proposing a strategic expansion into the Democratic Republic of Congo. This initiative aligns with our 2026 growth targets and positions us at the forefront of the region's logistics evolution. While infrastructure challenges exist, our phased entry model mitigates risk while capturing a projected 300% growth in volume. I look forward to discussing the full roadmap at our next session.\n\nBest regards,\n[CEO Name]"
      }
    },
    content: [
      { title: "AI Strategy", description: "Develop AI implementation strategies that align with your business goals and resources.", icon: Cpu },
      { title: "Business Reports", description: "Professional business plans, financial projections, and strategic analysis documents.", icon: PieChart },
      { title: "Crisis Communication", description: "Crisis management plans, communication templates, and reputation strategies.", icon: Megaphone },
    ],
    samples: [
      { 
        title: "AI Implementation Roadmap", 
        desc: "Strategic plan for integrating AI into business operations.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nAI IMPLEMENTATION ROADMAP\n\nPhase 1: Assessment (Week 1-2)\n- Identify business processes for AI automation\n- Data readiness check\n\nPhase 2: Tool Selection (Week 3-4)\n- Evaluating AI vendors\n- Pilot project identification\n\nPhase 3: Implementation (Week 5-12)\n- Staff training\n- Deployment and monitoring"
      }
    ]
  },
  {
    id: "ngos",
    label: "NGOs & Development",
    icon: Globe,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    sample: {
      title: "🌍 Sample Blueprint Sneak Peek: The 5-Minute Grant Concept Note & Impact Framework",
      intro: "Drafting high-impact concept notes for international donors requires precision, data-driven logic, and a clear theory of change. We use the RGCC Framework to help NGO professionals turn a project idea into a professional, donor-ready concept note in minutes.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet or ChatGPT-4o (Best for complex logic, empathetic tone, and structured development frameworks).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a Senior Grant Writer and Development Consultant with 15 years of experience working with USAID, EU, and UN agencies.\n\n[GOAL] Draft a 500-word Concept Note for a new community-based project.\n\n[CONTEXT] The project is 'Digital Literacy for Rural Women Farmers' in the Eastern Province of Rwanda. We aim to reach 500 women, providing them with basic smartphone skills to access market prices and weather data. The donor values sustainability, gender equality, and measurable impact.\n\n[CONSTRAINTS] The Concept Note must include: 1. Problem Statement, 2. Proposed Intervention, 3. Theory of Change (If/Then logic), and 4. Key Performance Indicators (KPIs). Use a professional, persuasive, and evidence-based tone."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Donor-Ready Draft):",
        content: "Project Title: Smart-Agri Women: Bridging the Digital Divide in Rwanda's Eastern Province\n\nI. Problem Statement\nRural women farmers in Rwanda's Eastern Province contribute 70% of agricultural labor but face a 40% 'information gap' due to lack of digital access. This digital exclusion leads to significant post-harvest losses and reduced bargaining power in local markets, trapping families in cycles of subsistence.\n\nII. Proposed Intervention\nThe 'Smart-Agri Women' initiative will deploy 10 mobile training hubs to provide hands-on digital literacy training. The curriculum focuses on the use of the 'E-Soko' platform for market pricing and climate-smart weather applications to optimize planting cycles.\n\nIII. Theory of Change\nIF rural women farmers are equipped with digital skills and real-time market data, THEN they will reduce post-harvest losses by 20% and increase household income by 15%, BECAUSE they can make informed, data-driven decisions on crop timing and sales negotiation.\n\nIV. Key Performance Indicators (KPIs)\n- 500 women farmers certified in basic digital literacy within 12 months.\n- 85% of participants reporting regular use of market price applications for sales.\n- 15% average increase in seasonal crop revenue for project participants."
      }
    },
    content: [
      { title: "Proposal Writing & Concept Note Generation", description: "Professional project proposals, concept notes, and donor reports for development projects.", icon: HeartHandshake },
      { title: "Impact Assessment", description: "Comprehensive project evaluation reports, impact assessments, and M&E frameworks.", icon: ChartLine },
      { title: "Stakeholder Engagement", description: "Community consultation frameworks, partnership agreements, and communication strategies.", icon: Users2 },
    ],
    samples: [
      { 
        title: "Proposal & Concept Note Blueprint", 
        desc: "Winning structure for development project proposals and concept notes.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPROPOSAL & CONCEPT NOTE BLUEPRINT\n\n1. Project Summary\n2. Problem Statement / Needs Assessment\n3. Concept Note Overview\n4. Project Goals and Objectives\n5. Implementation Plan\n6. Monitoring and Evaluation\n7. Sustainability Plan\n8. Budget Justification"
      }
    ]
  },
  {
    id: "media",
    label: "Media & Comms",
    icon: Radio,
    hook: "Tired of staring at a blank page when an urgent press release or social media campaign is due?\n\nWe can introduce you to the exact, hidden AI tools that top agencies use to instantly draft radio scripts, translate complex documents, and map out entire content calendars. We don't just give you the tools—we give you the exact blueprints to make them sound like a human wrote them.",
    plans: [
      { 
        name: "📘 OPTION 1: The Communicator's Pro-Toolkit", 
        price: "15,000 RWF (One-Time Payment)", 
        tagline: "Best For: PR Officers, Social Media Managers, Journalists, Content Creators, and Freelance Writers. \"The complete AI arsenal to cut your writing time in half.\"",
        features: [
          "The \"Secret Tool\" Stack: We reveal the specific AI platforms you should be using (that aren't just ChatGPT) to simplify your daily writing and content creation.",
          "50+ Premium Comms Prompts: Instant master prompts for drafting compelling Press Releases, Social Media Calendars, and catchy Radio Scripts.",
          "Translation & Localization Frameworks: The exact workflows to safely use AI for high-quality Kinyarwanda ↔ English translations without sounding like a robot.",
          "1-Month WhatsApp Support Lifeline: Stuck on a difficult press release? Text us, and we will send you the exact prompt to get it written perfectly."
        ],
        cta: "Get the Toolkit",
        popular: true
      },
      {
        name: "👑 OPTION 2: The Enterprise Comms Pipeline",
        price: "100,000 RWF (Per Project / Per Quarter)",
        tagline: "Best For: Comms Departments, and PR Agencies. \"A custom-built AI strategy to protect your brand and win donor funding.\"",
        features: [
          "Everything in the Pro-Toolkit, PLUS:",
          "Crisis & Reputation Management Protocols: Custom AI workflows designed to instantly draft stakeholder messaging and crisis responses the moment an emergency hits.",
          "Automated Grant & Donor Reporting: We build a system that turns messy field notes into professional, donor-ready reports in minutes.",
          "Live Team Integration (2 Hours): On-site or Zoom setup of secret AI tools on your team's computers with automated campaign training.",
          "Priority Executive Support: Skip the queue. Direct access to our experts when your agency needs high-level strategic help fast."
        ],
        cta: "Book Enterprise Setup"
      }
    ],
    sample: {
      title: "🎧 Sample Blueprint Sneak Peek: The 30-Second Radio Ad Generator",
      intro: "Want to see how our clients write studio-ready radio scripts in under 2 minutes? We use our proprietary RGCC Framework combined with elite AI models to do the heavy lifting. Here is an exact example from our Professional Toolkit.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet (Best for natural dialogue and creative audio formatting).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a veteran radio copywriter who specializes in high-energy, persuasive audio advertisements.\n\n[GOAL] Write a 30-second radio script promoting a new \"Weekend Unlimited\" data pack for a local telecom company.\n\n[CONTEXT] The target audience is university students and young professionals in Kigali who want to stream music and watch live sports over the weekend. The brand voice must be youthful, energetic, and relatable.\n\n[CONSTRAINTS] The script must be exactly 65 to 75 words to fit perfectly into a 30-second studio slot. You must include specific Sound Effect [SFX] and Background Music [BGM] directions for the audio engineer. End with a clear Call to Action using the USSD code *123#."
      },
      output: {
        title: "👇 THE AI OUTPUT (Ready for the Recording Studio):",
        content: "[BGM: Upbeat, heavy-bass Afrobeats track fades in, high energy]\n\nVoiceover (Excited, fast-paced): > Weekend plans? Locked. Data limit? Smashed!\n\n[SFX: Glass shattering sound effect, followed by a crowd cheering]\n\nVoiceover: > Stop counting your megabytes and start living. Introducing the new Weekend Unlimited Data Pack! Whether you are streaming the big match or blasting the latest hits, we’ve got you covered from Friday night to Monday morning. Zero buffering. Zero stress. Just pure, unlimited vibes.\n\n[SFX: Quick record scratch]\n\nVoiceover (Authoritative but friendly): > Don't let your weekend buffer. Dial star one-two-three hash right now to activate. Stay connected, stay unlimited!\n\n[BGM: Music swells and fades out with a final heavy bass drop]"
      }
    },
    content: [
      { title: "Press Releases", description: "Professional press releases, media kits, and strategies for effective media engagement.", icon: FileText },
      { title: "Content Strategy", description: "Social media content calendars, multimedia campaign strategies, and engagement frameworks.", icon: Video },
      { title: "Crisis Communication", description: "Reputation management plans, crisis protocols, and stakeholder messaging.", icon: MessagesSquare },
      { title: "Radio Script Writing", description: "Professional script writing for radio advertisements, programs, and announcements.", icon: Mic },
      { title: "Translation & Localization", description: "Kinyarwanda ↔ English translation and localization services for effective communication.", icon: Languages },
      { title: "Grant & Donor Reports", description: "Expert grant proposal and donor report writing services for media projects.", icon: FileSignature },
    ],
    samples: [
      { 
        title: "Press Release Template", 
        desc: "Professional format for media announcements.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPRESS RELEASE TEMPLATE\n\nFOR IMMEDIATE RELEASE\n\n[Headline: Catchy and informative]\n\n[City, Country] — [Date]\n\n[Lead Paragraph: The who, what, when, where, and why]\n\n[Body Paragraphs: Additional details and quotes]\n\n[Boilerplate: About the organization]\n\n[Contact Information]"
      }
    ]
  },
  {
    id: "agriculture",
    label: "Agriculture",
    icon: Sprout,
    plans: [
      { 
        name: "The Grant & Report Hack", 
        price: "5,000 RWF", 
        tagline: "Best For: Cooperative Managers and Agronomists who spend too much time on paperwork instead of in the field. \"Turn rough field notes into professional, donor-ready documents in minutes.\"",
        features: ["The Grant Winning Architect", "The Field Report Generator", "The Training Localizer"] 
      },
      { 
        name: "The Field Data Engine", 
        price: "15,000 RWF", 
        tagline: "Best For: Agri-Tech Startups, mid-sized farms, and NGOs managing dozens of field agents and large harvests. \"Make sense of your harvest data and instantly diagnose crop issues.\"",
        features: ["The AI Agronomist Vision Guide", "The Harvest Survey Analyzer", "The Supply Chain Organizer"],
        popular: true 
      },
      { 
        name: "The VIP Agribusiness Partner", 
        price: "100,000 RWF", 
        tagline: "Best For: Directors of Agricultural NGOs or large-scale Commercial Farmers who want a complete AI system built for their specific crops. \"Your bespoke agricultural data department, set up for you.\"",
        features: ["2-Hour Live System Setup", "Custom Crop Prompts", "30-Day Harvest Concierge"] 
      }
    ],
    sample: {
      title: "☕ Sample Blueprint Sneak Peek: The International Coffee Market Proposal Architect",
      intro: "Selling Rwanda's 'Green Gold' to international markets requires more than just good beans—it requires a story that resonates with global roasters. We use the RGCC Framework to help agri-exporters draft professional, persuasive market proposals that highlight Rwanda's unique quality and sustainability.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet or ChatGPT-4o (Best for sophisticated business storytelling and persuasive trade language).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as an expert International Trade Consultant and Coffee Sommelier with 20 years of experience in the specialty coffee industry.\n\n[GOAL] Write a compelling 400-word market proposal to pitch Rwandan Specialty Coffee to a boutique roastery in Berlin, Germany.\n\n[CONTEXT] Our coffee is grown at 1,800m altitude in the volcanic soil of the Karongi region. It is 100% Red Bourbon, fully washed, and has a cupping score of 87+. We focus on direct trade and female-led cooperatives. The German market values traceability, organic practices, and unique flavor profiles.\n\n[CONSTRAINTS] The proposal must include: 1. A 'Story of Origin' hook, 2. Detailed Cupping Notes (Citrus, Floral, Chocolate), 3. A Sustainability & Social Impact section, and 4. A 3-step 'Sample to Shipment' roadmap. Use a professional, sophisticated, and inviting tone."
      },
      output: {
        title: "👇 THE AI OUTPUT (Your Export Success Blueprint):",
        content: "Subject: Partnership Opportunity: Exceptional Karongi Red Bourbon for Berlin’s Specialty Scene\n\nDear [Roaster Name],\n\nI am writing to introduce you to a hidden gem from the 'Land of a Thousand Hills'—a coffee that doesn't just offer a caffeine kick, but a journey through Rwanda’s volcanic highlands. \n\nI. The Story of Karongi\nPerched at 1,800 meters above sea level, our Karongi Red Bourbon is nurtured by the nutrient-rich volcanic soil and the cool mist of Lake Kivu. This is not mass-produced coffee; it is the result of meticulous hand-picking and a fully washed process that preserves the pristine clarity of the bean.\n\nII. Cupping Profile (Score: 87+)\nExpect a vibrant, complex experience. The first sip reveals a bright, zesty acidity reminiscent of Meyer lemon, followed by a delicate floral aroma of jasmine. As the cup cools, it settles into a deep, velvety finish of dark chocolate and honey. It is a profile designed for the discerning Berlin palate.\n\nIII. Impact & Traceability\nOur coffee is more than a commodity; it is a catalyst for change. We work exclusively with female-led cooperatives in Karongi, ensuring that 100% of the premium goes directly back to the farmers. Our direct-trade model offers you full traceability from the washing station to your roastery.\n\nIV. The Roadmap to Partnership\n1. Sample Request: We ship a 500g green bean sample for your lab testing.\n2. Quality Alignment: We adjust processing (honey vs. washed) based on your roast profile needs.\n3. Direct Shipment: Seamless logistics from Kigali to Berlin with full documentation.\n\nLet’s bring the soul of Karongi to the streets of Berlin.\n\nWarm regards,\n[Your Name]"
      }
    },
    content: [
      { title: "Farm Management", description: "Agricultural business plans, crop planning tools, and systems for cooperatives.", icon: Tractor },
      { title: "Cooperative Governance", description: "Cooperative bylaws, member engagement strategies, and governance frameworks.", icon: Sprout },
      { title: "Market Analysis", description: "Market research reports, value chain analysis, and pricing strategies.", icon: BarChart3 },
    ],
    samples: [
      { 
        title: "Cooperative Bylaws Template", 
        desc: "Governance structure for agricultural cooperatives.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nCOOPERATIVE BYLAWS TEMPLATE\n\nArticle 1: Name and Location\nArticle 2: Objectives\nArticle 3: Membership Requirements\nArticle 4: Rights and Duties of Members\nArticle 5: Governance Structure\n- General Assembly\n- Board of Directors\nArticle 6: Financial Management"
      }
    ]
  },
  {
    id: "government",
    label: "Government",
    icon: University,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    sample: {
      title: "🏛️ Sample Blueprint Sneak Peek: The Executive Cabinet Briefing Architect",
      intro: "In the high-stakes environment of public service, decision-makers require information that is concise, evidence-based, and strategically aligned with national priorities like NST2. We use the RGCC Framework to help public officials transform complex data into professional Cabinet Briefing Notes that command respect and drive action.",
      tool: "Recommended AI Tool: Claude 3.5 Sonnet (Best for sophisticated logic, neutral administrative tone, and complex policy synthesis).",
      prompt: {
        title: "THE MASTER PROMPT (Using the RGCC Formula):",
        content: "[ROLE] Act as a Senior Policy Advisor to the Cabinet with 25 years of experience in public administration and strategic planning. You are an expert in the Rwandan National Strategy for Transformation (NST2) and Vision 2050.\n\n[GOAL] Draft a 2-page Executive Briefing Note for a Minister regarding the 'Strategic Integration of AI in Public Service Delivery'.\n\n[CONTEXT] The goal is to improve efficiency in local government (Irembo integration) and health services. We need to address data privacy, infrastructure readiness, and workforce upskilling. The tone must be formal, objective, and highly professional. It must align with Rwanda's ambition to become a regional ICT hub.\n\n[CONSTRAINTS] Use the following structure: 1. Purpose of the Note, 2. Strategic Alignment (NST2/Vision 2050), 3. Key Challenges & Opportunities, 4. Proposed Policy Interventions, 5. Financial & Social Implications, and 6. Clear Recommendation. Use precise, administrative language. Avoid jargon unless technical."
      },
      output: {
        title: "👇 THE AI OUTPUT (Cabinet-Ready Documentation):",
        content: "CONFIDENTIAL | FOR EXECUTIVE DECISION-MAKING\n\nSUBJECT: STRATEGIC INTEGRATION OF ARTIFICIAL INTELLIGENCE (AI) IN PUBLIC SERVICE DELIVERY\n\n1. PURPOSE\nThe purpose of this note is to brief the Cabinet on the proposed roadmap for integrating AI into public service delivery to enhance efficiency, transparency, and citizen satisfaction.\n\n2. STRATEGIC ALIGNMENT\nThis initiative directly supports the National Strategy for Transformation (NST2) under the 'Economic Transformation' pillar, specifically focusing on 'Modernizing Public Service' and 'Positioning Rwanda as a Global ICT Hub'. It aligns with Vision 2050’s goal of achieving high-income status through a knowledge-based economy.\n\n3. KEY CHALLENGES & OPPORTUNITIES\n- Challenges: Current data silos across institutions, limited specialized AI talent, and the need for a robust ethical framework for data privacy.\n- Opportunities: AI can automate 40% of routine administrative tasks on the Irembo platform, reduce diagnostic wait times in rural health centers by 30% through AI-assisted screening, and optimize resource allocation in local government.\n\n4. PROPOSED POLICY INTERVENTIONS\n- Establishment of a National AI Governance Council to oversee ethical implementation.\n- Implementation of an 'AI-First' data interoperability layer across all government agencies.\n- Launch of a 'Civil Service AI Literacy' program to upskill 5,000 public servants by 2027.\n\n5. IMPLICATIONS\n- Financial: Initial investment required for cloud infrastructure and talent acquisition, offset by a projected 15% reduction in operational costs over 5 years.\n- Social: Significant improvement in service accessibility for citizens in remote areas.\n\n6. RECOMMENDATION\nIt is recommended that the Cabinet approves the pilot phase of the AI Integration Roadmap in the Ministry of Health and the Ministry of Local Government, effective Q3 2026.\n\nSubmitted by:\nSenior Policy Advisor"
      }
    },
    content: [
      { title: "Policy Documents", description: "Policy briefs, white papers, and legislative analysis for decision-making.", icon: FileText },
      { title: "Cabinet Briefs", description: "Executive summaries, briefing notes, and presentation materials for officials.", icon: Presentation },
      { title: "Stakeholder Consultation", description: "Public consultation frameworks and citizen feedback systems.", icon: Handshake },
    ],
    samples: [
      { 
        title: "Policy Brief Template", 
        desc: "Concise document for executive decision-making.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPOLICY BRIEF TEMPLATE\n\n1. Executive Summary\n2. Introduction\n3. The Problem\n4. Policy Options\n5. Recommendation\n6. Implementation Considerations"
      }
    ]
  }
];

const FAQS = [
  {
    question: "What exactly do I get when I purchase a package?",
    answer: "You get instant access to our complete library of AI-powered prompts, templates, and workflow guides specific to your role. This includes 50+ premium prompts, professional templates, and step-by-step guides."
  },
  {
    question: "How do I access the materials after purchase?",
    answer: "After contacting us via WhatsApp and confirming your payment, we send you secure access links to download all materials. You can access them anytime, anywhere."
  },
  {
    question: "Are these resources suitable for beginners?",
    answer: "Absolutely! Our resources are designed for all skill levels. Each prompt and template comes with detailed instructions and examples."
  },
  {
    question: "Can I request custom modifications?",
    answer: "Yes! We offer customization services for an additional fee. Contact us via WhatsApp with your specific requirements."
  }
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home audiences={AUDIENCES} faqs={FAQS} />} />
        <Route path="/audience/:id" element={<AudiencePage audiences={AUDIENCES} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
