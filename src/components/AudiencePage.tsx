import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Download, 
  MessageCircle, 
  FileText,
  CheckCircle2,
  Rocket
} from "lucide-react";
import { Logo } from "./Logo";
import { ContactSection } from "./ContactSection";

const WHATSAPP_NUMBER = "250798600238";

const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

interface AudiencePageProps {
  audiences: any[];
}

export function AudiencePage({ audiences }: AudiencePageProps) {
  const { id } = useParams<{ id: string }>();
  const audience = audiences.find(a => a.id === id);

  if (!audience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <h1 className="text-2xl font-bold mb-4">Audience not found</h1>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  const Icon = audience.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dark-blue text-white py-12">
        <div className="w-full px-6 md:px-10">
          <div className="flex justify-between items-start mb-8">
            <Link to="/">
              <Logo className="h-10" light />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-blue-200 hover:text-white transition-colors font-medium">
                Contact Us
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-accent-orange text-dark-blue rounded-2xl flex items-center justify-center shadow-xl">
              <Icon size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">{audience.label} Resources</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Tailored AI-powered blueprints and strategic tools designed specifically for {audience.label.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Services */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-display font-bold mb-8 text-neutral-900 border-b-4 border-accent-orange inline-block">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {audience.content.map((item: any, idx: number) => {
                    const ServiceIcon = item.icon;
                    return (
                      <div key={idx} className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-white text-dark-blue rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-dark-blue group-hover:text-white transition-colors">
                          <ServiceIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-900">{item.title}</h3>
                        <p className="text-neutral-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                {audience.hook && (
                  <div className="mb-12 p-8 bg-blue-50 rounded-[2rem] border-l-8 border-accent-orange">
                    <p className="text-lg text-dark-blue leading-relaxed whitespace-pre-line">
                      {audience.hook}
                    </p>
                  </div>
                )}

                {/* Sample Section */}
                {audience.sample && (
                  <div className="mb-16">
                    <div className="bg-neutral-50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-orange text-dark-blue rounded-full flex items-center justify-center shadow-lg">
                          <Rocket size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900">{audience.sample.title}</h2>
                      </div>
                      
                      <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                        {audience.sample.intro}
                      </p>

                      <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8 shadow-inner">
                        <p className="text-accent-orange font-bold text-sm uppercase tracking-wider mb-2">💡 Expert Tip</p>
                        <p className="text-neutral-600 font-medium italic">{audience.sample.tool}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Prompt Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-dark-blue flex items-center gap-2">
                            <span className="w-8 h-8 bg-dark-blue text-white rounded-lg flex items-center justify-center text-xs">01</span>
                            {audience.sample.prompt.title}
                          </h3>
                          <div className="bg-neutral-900 text-neutral-300 p-6 rounded-2xl font-mono text-sm leading-relaxed border border-neutral-800 shadow-xl overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{audience.sample.prompt.content}</pre>
                          </div>
                        </div>

                        {/* Output Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-accent-orange flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent-orange text-dark-blue rounded-lg flex items-center justify-center text-xs">02</span>
                            {audience.sample.output.title}
                          </h3>
                          <div className="bg-blue-50 text-dark-blue p-6 rounded-2xl text-sm leading-relaxed border border-blue-100 shadow-xl italic relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                              <MessageCircle size={80} />
                            </div>
                            <div className="relative z-10 whitespace-pre-wrap">
                              {audience.sample.output.content}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 text-center">
                        <p className="text-neutral-500 text-sm mb-6">This is just 1 of 50+ specialized blueprints available in the full toolkit.</p>
                        
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 max-w-xl mx-auto mb-8">
                          <p className="text-dark-blue font-medium mb-4">
                            Not fully satisfied with this sample? Need something more specific?
                          </p>
                          <motion.a 
                            href={getWhatsAppLink(`Hello! I'm interested in the ${audience.label} sample: "${audience.sample.title}". I'd like to ask more about it.`)} 
                            target="_blank" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 text-accent-orange font-bold hover:underline"
                          >
                            <MessageCircle size={20} />
                            Ask more about this sample on WhatsApp →
                          </motion.a>
                        </div>

                        <div className="inline-block h-1 w-20 bg-accent-orange rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                <h2 className="text-3xl font-display font-bold mb-8 text-neutral-900 border-b-4 border-accent-orange inline-block">Pricing Plans</h2>
                <div className={`grid ${
                  audience.plans.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" : 
                  audience.plans.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : 
                  "md:grid-cols-3"
                } gap-8`}>
                  {audience.plans.map((plan: any, idx: number) => (
                    <div 
                      key={idx} 
                      className={`rounded-3xl border flex flex-col transition-all duration-300 hover:shadow-2xl ${
                        audience.plans.length === 1 
                          ? "p-12 border-2 border-accent-orange bg-blue-50/50 shadow-xl" 
                          : plan.popular 
                            ? "p-8 border-2 border-accent-orange bg-blue-50/30 shadow-lg scale-105 z-10" 
                            : "p-8 border-neutral-200 bg-white shadow-sm"
                      }`}
                    >
                      <h3 className={`${audience.plans.length === 1 ? "text-3xl" : "text-2xl"} font-bold mb-3 text-dark-blue`}>{plan.name}</h3>
                      <div className={`${audience.plans.length === 1 ? "text-4xl" : "text-3xl"} font-bold mb-6 text-accent-orange`}>
                        {plan.price}
                      </div>
                      {plan.tagline && (
                        <p className={`${audience.plans.length === 1 ? "text-lg" : "text-sm"} text-neutral-600 mb-8 leading-relaxed italic font-medium`}>{plan.tagline}</p>
                      )}
                      <div className="h-px bg-neutral-200 mb-8 w-full" />
                      <ul className={`${audience.plans.length === 1 ? "space-y-5" : "space-y-4"} mb-10 flex-grow`}>
                        {plan.features.map((f: string, i: number) => (
                          <li key={i} className={`flex items-start gap-4 ${audience.plans.length === 1 ? "text-lg" : "text-base"} text-neutral-700`}>
                            <CheckCircle2 size={audience.plans.length === 1 ? 28 : 20} className="text-accent-orange shrink-0 mt-1" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.a 
                        href={getWhatsAppLink(`Hello! I would like to inquire about the "${plan.name}" package for ${audience.label} (${plan.price}).`)} 
                        target="_blank" 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`btn ${audience.plans.length === 1 ? "btn-lg py-8 text-2xl" : "btn-lg py-4 text-lg"} ${plan.popular || audience.plans.length === 1 ? "btn-secondary" : "btn-outline"} w-full shadow-lg`}
                      >
                        {plan.cta || "Inquire Now"}
                      </motion.a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enterprise Exclusive Section (Conditional) */}
              {['hr', 'ceos', 'agriculture', 'ngos'].includes(audience.id) && (
                <section className="mb-12">
                  <div className="bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-800 flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-accent-orange p-8 flex flex-col justify-center items-center text-center text-dark-blue">
                      <Rocket size={48} className="mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tighter leading-tight">Enterprise Exclusive</h3>
                    </div>
                    <div className="md:w-3/4 p-10 text-white">
                      <h2 className="text-2xl font-display font-bold mb-3 text-accent-orange">The "While You Sleep" Automation Pipeline</h2>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-6">Best For: HR Directors, Headmasters, and Corporate Agencies</p>
                      
                      <p className="text-lg font-medium text-neutral-200 italic mb-4">
                        "We build the machine. You just read the results."
                      </p>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                        We don't just teach you how to use AI; we build a custom, secure data pipeline for your company. Imagine a workflow where every applicant's CV is automatically collected, filtered against your exact criteria, and summarized. You wake up on Monday morning, and a clean "Top 5 Candidates" report is already waiting on your desk.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-center sm:text-left flex-grow">
                          <p className="text-accent-orange font-bold mb-1">📲 Interested in a custom automation build?</p>
                          <p className="text-[10px] text-neutral-500">Schedule a feasibility call with our experts today.</p>
                        </div>
                        <motion.a 
                          href={getWhatsAppLink(`Hello! I'm interested in the Enterprise Exclusive "While You Sleep" Automation Pipeline for ${audience.label}. Can we schedule a feasibility call?`)} 
                          target="_blank" 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-secondary btn-sm whitespace-nowrap gap-2"
                        >
                          <MessageCircle size={18} />
                          Text Us via WhatsApp
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: CTA & Info */}
            <div className="space-y-8">
              <div className="bg-dark-blue text-white p-8 rounded-3xl shadow-2xl border-t-8 border-t-accent-orange">
                <h3 className="text-2xl font-bold mb-4">Get the Full Package</h3>
                <p className="text-blue-100 mb-6">
                  Unlock our complete library of 50+ premium prompts and templates specifically for {audience.label.toLowerCase()}.
                </p>
                <ul className="space-y-3 mb-8">
                  {(audience.plans[1]?.features || ["Premium Prompt Bank", "Strategic Templates", "Implementation Guides"]).map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent-orange" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a 
                  href={getWhatsAppLink(`Hello! I want to get the Full Package for ${audience.label}. Please guide me on the next steps.`)} 
                  target="_blank" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-secondary w-full py-4 text-lg gap-3 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Inquire on WhatsApp
                </motion.a>
              </div>

              <div className="p-8 rounded-3xl border border-neutral-200 bg-neutral-50">
                <h4 className="font-bold text-neutral-900 mb-4">Why Arise Blueprints?</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Our blueprints are not just templates; they are strategic frameworks built on the RGCC model to ensure academic and professional excellence in the age of AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800">
        <div className="container text-center">
          <Logo className="h-10 mb-6 mx-auto" light />
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Arise Research Blueprint Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
