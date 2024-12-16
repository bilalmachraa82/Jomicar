export interface AIMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface VehicleRecommendation {
  vehicleId: number;
  score: number;
  reasons: string[];
}

export interface UserPreferences {
  budget?: {
    min: number;
    max: number;
  };
  brands?: string[];
  fuelTypes?: string[];
  features?: string[];
  usage?: string;
  lastInteractions: AIMessage[];
}

export interface AIAnalytics {
  sessionId: string;
  userId?: string;
  interactions: number;
  leadScore: number;
  preferences: UserPreferences;
  recommendations: VehicleRecommendation[];
  lastActivity: number;
}