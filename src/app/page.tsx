"use client";
import React from 'react';
import Image from 'next/image';
import me from '@/images/me.jpg';
import NavbarOverlay from '@/components/NavBar';

const StatCard = ({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) => {
  return (
    <div className={`card-modern p-6 text-center group cursor-pointer hover:${color} transition-all`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">{value}</div>
      <div className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">{label}</div>
      <div className="mt-2 h-1 w-0 group-hover:w-full bg-accent-500 transition-all duration-500 mx-auto rounded"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <NavbarOverlay />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-accent-50/30 to-transparent dark:from-primary-900/20 dark:via-accent-900/10 dark:to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 dark:bg-primary-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 dark:bg-accent-700/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 dark:from-primary-400 dark:via-accent-400 dark:to-primary-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                  Chinni Krishna Kongala
                </span>
                <div className="absolute -inset-4 bg-accent-300/20 blur-2xl -z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Software Engineer | Data Engineer | AI/ML Engineer | Cloud DevOps Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-neutral-600 dark:text-neutral-400 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Atlanta, Georgia
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  chinnikrishna2023@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (+1) 832-674-0883
                </span>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="card-modern p-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Professional Background</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  Software Engineer with 4+ years of expertise across Software Development, Data Engineering, AI/ML, and Cloud-Native DevSecOps. I specialize in designing Architecture and delivering Secure, Reliable, and Scalable systems with maintainable Engineering Practices, with a strong focus on Automation, Observability, and Governance.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  Technical leadership spans Distributed systems, Microservices, AI/ML solution development (RAG/Agentic AI), and Production-ready CI/CD and Kubernetes-based Platforms, Automated Infrastructure deployment, and Data Governance implementation.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Adept at translating complex business requirements into robust technical solutions while maintaining the highest standards of Code Quality, Security, and Operational Reliability, Consistently driving Innovation and Efficiency in Fast-Paced Environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="section-title text-center mb-12">Stats & Achievements</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatCard icon="🎓" label="Education" value="Master's" color="scale-110" />
            <StatCard icon="💼" label="Experience" value="4+ Years" color="scale-110" />
            <StatCard icon="⚡" label="Certifications" value="10+" color="scale-110" />
            <StatCard icon="🚀" label="Projects" value="15+" color="scale-110" />
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Professional Experience</h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500"></div>

            <div className="space-y-12">
              {/* Item 1 - Right */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="card-modern p-6 md:p-8 animate-slide-in-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Software Engineer II – Governance</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">Nike | Atlanta, GA, USA</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">April 2025 - Present</p>
                </div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-accent-200 dark:ring-accent-800"></div>
              </div>

              {/* Item 2 - Left */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="card-modern p-6 md:p-8 animate-slide-in-left md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Software Developer & DevOps Engineer</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">Tech Field | Atlanta, GA, USA</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">September 2024 - April 2025</p>
                </div>
                <div className="hidden md:block"></div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-primary-200 dark:ring-primary-800"></div>
              </div>

              {/* Item 3 - Right */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="card-modern p-6 md:p-8 animate-slide-in-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Software Developer (Intern)</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">Intelligenie Software Pvt. Ltd. | Remote, USA</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">August 2024 - September 2024</p>
                </div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-accent-200 dark:ring-accent-800"></div>
              </div>

              {/* Item 4 - Left */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="card-modern p-6 md:p-8 animate-slide-in-left md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Graduate Research Assistant – Software Engineer</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">University of Arkansas at Little Rock | AR, USA</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">March 2023 - May 2024</p>
                </div>
                <div className="hidden md:block"></div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-primary-200 dark:ring-primary-800"></div>
              </div>

              {/* Item 5 - Right */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="card-modern p-6 md:p-8 animate-slide-in-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Software Engineer Associate</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">Infor | Hyderabad, India</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">April 2022 - December 2022</p>
                </div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-accent-200 dark:ring-accent-800"></div>
              </div>

              {/* Item 6 - Left */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="card-modern p-6 md:p-8 animate-slide-in-left md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">AI/ML Intern</h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">Pantech Solutions | Chennai, India</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">May 2021 - June 2021</p>
                </div>
                <div className="hidden md:block"></div>
                {/* Circle */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg ring-4 ring-primary-200 dark:ring-primary-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Education</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-500 to-primary-600"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">Master of Science - Computer Science (Information Quality - IQ)</h3>
                <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">University of Arkansas at Little Rock</p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">Little Rock, Arkansas, USA</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-accent-600 dark:text-accent-400 font-bold text-lg">CGPA: 3.9/4.0</p>
                  <span className="px-4 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-semibold border border-primary-300 dark:border-primary-600">
                    🌟 Outstanding Academic Achievement Award
                  </span>
                </div>
              </div>
            </div>

            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-600"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">Bachelor of Technology (B.Tech) in Electronic and Communication Engineering</h3>
                <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">R.V.R & J.C College of Engineering</p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">Andhra Pradesh, India</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-accent-600 dark:text-accent-400 font-bold text-lg">CGPA: 3.3/4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Skills & Technologies</h2>

          <div className="card-modern p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">Languages & Frameworks</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">Python, PySpark, Go, Java, JavaScript, TypeScript, Node.js, React.js, Angular, Flask, FastAPI, Spring, Spring Boot</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">Databases</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">SQL, NoSQL, RDBMS, PostgreSQL, MySQL, MongoDB, DynamoDB</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">DevOps Tools</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">Git, Github, GitLab, CI/CD, GitHub Actions, Jenkins, ArgoCD, SonarQube, Checkmarx, Trivy, GitOps, Docker, Kubernetes, Helm, Istio</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">Cloud & Infrastructure</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">AWS (Lambda, EC2, VPC, S3, EKS, DynamoDB, ECR, EMR, CloudFormation, Glue, Athena), Terraform, Ansible</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">Monitoring & Logging</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">Prometheus, Grafana, Splunk, SUMO Logic, CloudWatch</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">Security & Governance</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">Cloud Custodian, WIZ, IAM, SAST/DAST, Encryption, Alation Data Governance</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2">AI/ML & Generative AI</h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  RAG (Retrieval-Augmented Generation), LLMOps, MLOps, Model Context Protocol (MCP), Agentic AI, Generative AI (GenAI), Ollama, LangChain, LangGraph, Vector Databases, Prompt Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Key Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-200/20 dark:bg-accent-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-300/30 dark:group-hover:bg-accent-600/30 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 relative z-10 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">RAG-based Document Intelligence System</h3>

              <p className="text-neutral-700 dark:text-neutral-300 mb-4 relative z-10">
                Built an advanced Retrieval-Augmented Generation (RAG) system using LangChain, vector databases, and LLMs for intelligent document querying and analysis. Implemented semantic search with embeddings and context-aware responses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">RAG</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">LangChain</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Vector DB</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">GenAI</span>
              </div>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-200/20 dark:bg-accent-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-300/30 dark:group-hover:bg-accent-600/30 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 relative z-10 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">User Behavior & Sentiment Profiling Platform</h3>

              <p className="text-neutral-700 dark:text-neutral-300 mb-4 relative z-10">
                Developed microservices for behavior monitoring and profile enrichment using BERT, VADER, and GPT. Instrumented observability stack with Prometheus and Grafana.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">NLP</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Microservices</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Observability</span>
              </div>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-200/20 dark:bg-accent-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-300/30 dark:group-hover:bg-accent-600/30 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 relative z-10 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">Sumo Automated Management System (SAMS)</h3>

              <p className="text-neutral-700 dark:text-neutral-300 mb-4 relative z-10">
                Automated log and metrics correlation to support DevOps operations using SUMO Logic and FastAPI. Delivered executive dashboards for real-time system health monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Automation</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">DevOps</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Python</span>
              </div>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-200/20 dark:bg-accent-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-300/30 dark:group-hover:bg-accent-600/30 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 relative z-10 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">Speech Enhancement Model with Neural Networks</h3>

              <p className="text-neutral-700 dark:text-neutral-300 mb-4 relative z-10">
                Applied denoising autoencoders and feed-forward neural networks to improve speech clarity in retail call center datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Machine Learning</span>
                <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs border border-accent-200 dark:border-accent-700">Neural Networks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Certifications & Credentials</h2>

          <div className="card-modern p-8 md:p-12">
            <div className="space-y-8">
              
              {/* Programming Languages */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Programming Languages
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">NPTEL:</span> Programming in JAVA</p>
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">HackerRank:</span> Python | GO</p>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Cloud & DevOps
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Udemy:</span> AWS Solution Architect | AWS Cloud Formation | AWS Lambda & Serverless | Docker and Kubernetes | GIT | Linux | Power Shell</p>
                </div>
              </div>

              {/* Data Quality & Governance */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Data Quality & Governance
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">ISO:</span> ISO 8000 | Master Data Quality Manager</p>
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Alation:</span> Alation Data Governance Advocate | Alation Data Steward | Data Analyst Advocate</p>
                </div>
              </div>

              {/* Data Science & Analytics */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Data Science & Analytics
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Cognitive Class:</span> Data Science 101 | SQL and Relational Databases 101 | Statistics 101 | R for Data Science | Python 101 for Data Science | Predictive Modeling Fundamentals | Data Privacy Fundamentals</p>
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">NVIDIA:</span> Accelerating End-to-End Data Science Workflows</p>
                </div>
              </div>

              {/* Big Data & Distributed Systems */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Big Data & Distributed Systems
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Cognitive Class:</span> Hadoop 101 | MapReduce and YARN | Spark Fundamentals 1 | Apache Pig 101</p>
                </div>
              </div>

              {/* Generative AI & Machine Learning */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary-700 dark:text-primary-400 mb-4 border-b-2 border-primary-300 dark:border-primary-600 pb-2 flex items-center gap-2">
                  <span className="text-2xl"></span> Generative AI & Machine Learning
                </h4>
                <div className="space-y-2 ml-8">
                  <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Databricks Academy - GenAI Learning Path:</span></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-neutral-700 dark:text-neutral-300">
                    <li>GenAI App Development and Monitoring</li>
                    <li>GenAI Application Evaluation & Governance</li>
                    <li>GenAI Application Development</li>
                    <li>GenAI Solution Development</li>
                  </ul>
                  <p className="text-neutral-700 dark:text-neutral-300 mt-2"><span className="font-semibold text-neutral-800 dark:text-neutral-200">Cognitive Class:</span> Prompt Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">About Me</h2>

          <div className="card-modern p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full ring-4 ring-accent-400 dark:ring-accent-500 shadow-2xl shadow-accent-200/30 dark:shadow-accent-700/30 w-48 h-48 object-cover"
                  src={me}
                  alt='Chinni Krishna Kongala'
                  width={192}
                  height={192}
                />
              </div>
              <div className="flex-1 space-y-4 text-neutral-700 dark:text-neutral-300">
                <p className="text-lg">
                  I&apos;m a tech enthusiast with a passion for exploring new technologies and staying at the forefront of innovation. Whether it&apos;s experimenting with cutting-edge tools or diving deep into complex problems, I thrive on continuous learning and discovery.
                </p>
                <p className="text-lg">
                  My curiosity drives me to constantly seek out emerging trends in software development, cloud computing, and data engineering. I believe that staying curious and adaptable is key to success in the ever-evolving tech landscape.
                </p>
                <p className="text-lg">
                  Beyond coding, I&apos;m a huge Marvel fan and enjoy immersing myself in the MCU universe. I&apos;m also a movie lover and music enthusiast who appreciates a wide variety of genres.
                </p>
                <p className="text-lg">
                  When I&apos;m not working on tech projects, you can find me playing sports like table tennis, cricket, badminton, or tennis. Staying active helps me maintain balance and brings fresh perspectives to problem-solving.
                </p>
              </div>
            </div>

            <div className="border-t border-primary-200 dark:border-gray-600 pt-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Professional Philosophy</h3>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    'Clarity in thought, discipline in approach, integrity in design, and consistency in execution.'
                  </p>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic" style={{ textAlign: 'center' }}> ~CK.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent-50 via-primary-50 to-accent-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="card-modern p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 dark:from-primary-400 dark:via-accent-400 dark:to-primary-500 bg-clip-text text-transparent">
                Made It This Far?
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                If you&apos;ve scrolled all the way down here, I must&apos;ve caught your attention!, I&apos;m genuinely impressed that you took the time to explore my work.
              </p>
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re here to collaborate, build something innovative, or just want to chat about the latest in tech <span className="font-bold text-accent-600 dark:text-accent-400">let&apos;s connect!</span> Together, we can create something the tech world will be proud of.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a 
                  href="mailto:chinnikrishna2023@gmail.com" 
                  className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a 
                  href="https://github.com/ckongala" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900 dark:hover:bg-neutral-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/chinni-krishna-kongala" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Connect on LinkedIn
                </a>                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <footer className="py-12 px-4 bg-gradient-to-br from-primary-100/50 via-accent-50/30 to-primary-50/50 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50 border-t border-primary-200 dark:border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-neutral-700 dark:text-neutral-300">
              <span className="text-xl">©</span>
              <p className="text-sm md:text-base">
                <span className="font-semibold">2025</span> Chinni Krishna Kongala. All rights reserved.
              </p>
            </div>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
              Built with ♥ by AI prompting🤖, a ton of patience⏳, bugs partying🎉🐛, Ctrl+Z miracles✨, dark mode devotion🌑, runtime surprises🎁, and the eternal hope that it compiles🤞🔥
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
