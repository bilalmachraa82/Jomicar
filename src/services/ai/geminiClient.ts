import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY, geminiConfig, systemPrompt } from '../../config/gemini';

export default class GeminiClient {
  private static instance: GeminiClient;
  private genAI: GoogleGenerativeAI;
  private model: any;
  private chat: any;

  private constructor() {
    this.genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.initChat();
  }

  private async initChat() {
    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: systemPrompt,
        },
        {
          role: 'model',
          parts: 'Entendido. Estou pronto para ajudar os clientes da Jomicar.',
        },
      ],
      generationConfig: geminiConfig,
    });
  }

  static getInstance(): GeminiClient {
    if (!GeminiClient.instance) {
      GeminiClient.instance = new GeminiClient();
    }
    return GeminiClient.instance;
  }

  async generateResponse(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.';
    }
  }

  async resetChat() {
    await this.initChat();
  }
}