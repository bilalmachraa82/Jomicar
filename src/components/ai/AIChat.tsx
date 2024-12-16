import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Minimize2, Maximize2, Send } from 'lucide-react';
import { AIMessage } from '../../types/ai';
import { GeminiService } from '../../services/ai/gemini';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<AIMessage[]>([{
    id: '1',
    type: 'assistant',
    content: 'Olá! Sou o assistente virtual da Jomicar. Como posso ajudar na sua procura por um carro ideal?',
    timestamp: Date.now()
  }]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const gemini = GeminiService.getInstance();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: AIMessage = {
      id: crypto.randomUUID(),
      type: 'user',
      content: message,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    try {
      const response = await gemini.processMessage(message);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error processing message:', error);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#1a1a1a] text-white p-4 rounded-full shadow-lg hover:bg-[#333] transition-colors z-50"
          aria-label="Abrir chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed right-6 bottom-6 bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 ${
            isMinimized ? 'w-72 h-14' : 'w-96 h-[600px]'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b bg-[#1a1a1a] text-white rounded-t-lg">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare size={20} />
              Assistente Virtual
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={isMinimized ? 'Maximizar' : 'Minimizar'}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-[#1a1a1a] text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva a sua mensagem..."
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
                  />
                  <button
                    type="submit"
                    className="bg-[#1a1a1a] text-white p-2 rounded-md hover:bg-[#333] transition-colors"
                    aria-label="Enviar mensagem"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}