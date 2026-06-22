import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, FormEvent } from 'react';
import { X, Send, Terminal as TerminalIcon, Check, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setIsSubmitting(false);
      setIsDone(false);
      setTerminalLogs([]);
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTerminalLogs([]);

    // Emulate a sleek terminal secure submission
    const logs = [
      `$ Initializing secure connection to mail-server.local...`,
      `$ Resolving API endpoint: api.alex.dev.data/v1/contact`,
      `$ Packaging analytical data payloads (AES-256 encrypted)...`,
      `$ Sending payload for: "${formData.name}" <${formData.email}>`,
      `$ Waiting for mail transfer handshake...`,
      `$ STATUS: 200 OK. Message delivered successfully. Code: 0x90`
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setTerminalLogs((prev) => [...prev, logs[i]]);
    }

    setIsSubmitting(false);
    setIsDone(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="contact-modal-wrapper">
          {/* Backdrop screen filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-dark/85 backdrop-blur-md"
            id="contact-modal-backdrop"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-lg bg-surface-lowest border border-outline-val/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(93,230,255,0.15)] flex flex-col z-20"
            id="contact-modal-frame"
          >
            {/* Header banner */}
            <div className="flex items-center justify-between p-5 border-b border-outline-val/20 bg-surface-low" id="contact-modal-head">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-secondary" />
                <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase">SECURE_COMMUNICATION.IO</span>
              </div>
              <button
                id="btn-close-modal"
                onClick={onClose}
                className="p-1 text-on-surface-variant hover:text-white rounded hover:bg-surface-high transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body form container */}
            <div className="p-6 overflow-y-auto max-h-[80vh]" id="contact-modal-body">
              {!isSubmitting && !isDone && (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">SENDER NAME *</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Linus Torvalds"
                      className="w-full bg-surface-low border border-outline-val/20 rounded px-4 py-3 font-mono text-xs text-on-surface focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">EMAIL ADDRESS *</label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. linus@kernel.org"
                      className="w-full bg-surface-low border border-outline-val/20 rounded px-4 py-3 font-mono text-xs text-on-surface focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">SUBJECT INQUIRY</label>
                    <select
                      id="select-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-surface-low border border-outline-val/20 rounded px-4 py-3 font-mono text-xs text-on-surface focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="SaaS Architecture">SaaS Architecture Consulting</option>
                      <option value="Data Analytics Pipelines">Data Analytics Pipelines</option>
                      <option value="Full-Stack Collaboration">Full-Stack Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">ENCRYPTED MESSAGE CONTENT *</label>
                    <textarea
                      id="textarea-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Compose your technical prompt or project details here..."
                      className="w-full bg-surface-low border border-outline-val/20 rounded px-4 py-3 font-mono text-xs text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4" id="submit-button-frame">
                    <button
                      id="btn-submit-contact"
                      type="submit"
                      className="w-full bg-secondary text-background-dark font-mono text-xs font-bold py-3.5 uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Payload
                    </button>
                  </div>
                </form>
              )}

              {/* Terminal submission load status */}
              {isSubmitting && (
                <div className="space-y-5 py-6" id="terminal-submitting-state">
                  <div className="flex items-center gap-3" id="loader-row">
                    <Loader2 className="w-5 h-5 text-secondary animate-spin" />
                    <span className="font-mono text-xs text-on-surface font-semibold animate-pulse">TRANSMITTING SECURE DATA DATA...</span>
                  </div>
                  
                  <div className="bg-surface-lowest border border-outline-val/25 p-4 rounded font-mono text-[11px] space-y-2 h-44 overflow-y-auto" id="terminal-screen-box">
                    {terminalLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={index === terminalLogs.length - 1 ? 'text-secondary font-bold' : 'text-on-surface-variant'}
                      >
                        {log}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Success submission modal screen */}
              {isDone && (
                <div className="text-center py-8 space-y-6 flex flex-col items-center" id="success-submitted-state">
                  <div className="p-4 bg-secondary/10 border-2 border-secondary rounded-full inline-block" id="success-circle">
                    <Check className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-xl font-bold text-on-surface">Transmission Completed</h3>
                    <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
                      Your informational inquiries have been parsed, encrypted, and compiled. Alex will deploy responses short after handshake.
                    </p>
                  </div>
                  <button
                    id="btn-close-success"
                    onClick={onClose}
                    className="font-mono text-xs font-bold px-6 py-2.5 bg-surface-container border border-outline-val/25 rounded hover:border-secondary hover:text-secondary transition-colors cursor-pointer"
                  >
                    CLOSE TERMINAL
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
