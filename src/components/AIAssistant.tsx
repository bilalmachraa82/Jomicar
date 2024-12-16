import React, { useState } from 'react';
import { MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: 'Olá! Sou o assistente virtual da Jomicar. Como posso ajudar?',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { type: 'user', content: message }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Obrigado pela sua mensagem. Como posso ajudar com a sua procura de carro?'
      }]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#1a1a1a] text-white p-4 rounded-full shadow-lg hover:bg-[#333] transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed right-6 bottom-6 bg-white rounded-lg shadow-2xl transition-all duration-300 ${
            isMinimized ? 'w-72 h-14' : 'w-96 h-[600px]'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Assistente Virtual</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
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
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva a sua mensagem..."
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
                />
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}