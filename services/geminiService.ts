
import { GoogleGenAI, Type } from "@google/genai";
import { PortfolioHolding } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume the key is always present.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getMarketSummary = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Provide a concise, expert-level summary of today's global financial market conditions. Cover key indices (S&P 500, NASDAQ, etc.), major market-moving news, and notable sector performance. The tone should be professional and informative for an experienced trader.",
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching market summary:", error);
    return "Failed to load market summary. The AI may be temporarily unavailable.";
  }
};

export const getPortfolioAnalysis = async (holdings: PortfolioHolding[], userQuery: string): Promise<string> => {
  try {
    const portfolioString = holdings.map(h => `${h.name} (${h.symbol}): $${h.value.toFixed(2)}`).join(', ');
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: `The user's current portfolio is: ${portfolioString}. The user's question is: "${userQuery}". Provide a detailed, professional analysis and answer the question.`,
        config: {
            systemInstruction: "You are a sophisticated AI financial advisor. Your analysis should be balanced, insightful, and avoid giving direct financial advice. Focus on risk analysis, potential diversification strategies, and market context."
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching portfolio analysis:", error);
    return "Failed to retrieve analysis. Please try again later.";
  }
};

export const buildPortfolio = async (riskProfile: string, investmentGoals: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: `A user has the following risk profile: "${riskProfile}" and investment goals: "${investmentGoals}". Suggest a diversified model portfolio with specific asset allocations (e.g., stocks, ETFs, crypto) and provide a rationale for your suggestions.`,
            config: {
                systemInstruction: "You are an AI Portfolio Construction expert. Generate a sample portfolio structure. Present the output in a clean, readable format, possibly using markdown for lists and bolding. Do not give financial advice, but rather educational examples.",
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        portfolioName: { type: Type.STRING },
                        rationale: { type: Type.STRING },
                        allocations: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    assetClass: { type: Type.STRING },
                                    percentage: { type: Type.NUMBER },
                                    examples: { type: Type.ARRAY, items: { type: Type.STRING } }
                                }
                            }
                        }
                    }
                }
            }
        });

        // The response text will be a JSON string due to responseSchema
        return response.text;

    } catch (error) {
        console.error("Error building portfolio:", error);
        return JSON.stringify({ error: "Failed to generate a portfolio suggestion. The AI may be temporarily unavailable." });
    }
};
