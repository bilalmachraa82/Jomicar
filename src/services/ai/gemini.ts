import { AIMessage, UserPreferences, VehicleRecommendation } from '../../types/ai';
import GeminiClient from './geminiClient';

export class GeminiService {
  private static instance: GeminiService;
  private context: UserPreferences = {
    lastInteractions: []
  };
  private geminiClient: GeminiClient;

  private constructor() {
    this.geminiClient = GeminiClient.getInstance();
  }

  static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  async processMessage(message: string): Promise<AIMessage> {
    const response = await this.geminiClient.generateResponse(message);
    
    const aiMessage: AIMessage = {
      id: crypto.randomUUID(),
      type: 'assistant',
      content: response,
      timestamp: Date.now()
    };

    this.context.lastInteractions.push({
      id: crypto.randomUUID(),
      type: 'user',
      content: message,
      timestamp: Date.now()
    }, aiMessage);

    return aiMessage;
  }

  async getRecommendations(preferences: UserPreferences): Promise<VehicleRecommendation[]> {
    const prompt = `
      Com base nas seguintes preferências do cliente:
      - Orçamento: ${preferences.budget ? `${preferences.budget.min}€ - ${preferences.budget.max}€` : 'Não especificado'}
      - Marcas preferidas: ${preferences.brands?.join(', ') || 'Não especificado'}
      - Tipo de combustível: ${preferences.fuelTypes?.join(', ') || 'Não especificado'}
      - Uso pretendido: ${preferences.usage || 'Não especificado'}
      
      Por favor, recomende os veículos mais adequados do nosso stock.
    `;

    const response = await this.geminiClient.generateResponse(prompt);
    
    // Process the response and convert it to recommendations
    // This is a simplified example
    return [{
      vehicleId: 1,
      score: 0.95,
      reasons: [
        'Dentro do orçamento especificado',
        'Marca preferida pelo usuário',
        'Características alinhadas com o uso pretendido'
      ]
    }];
  }

  updatePreferences(preferences: Partial<UserPreferences>) {
    this.context = {
      ...this.context,
      ...preferences
    };
  }

  async resetContext() {
    this.context = {
      lastInteractions: []
    };
    await this.geminiClient.resetChat();
  }
}