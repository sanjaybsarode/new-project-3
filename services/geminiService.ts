
import { GoogleGenAI, Chat } from "@google/genai";
import { Tariff } from "../types";
import { getShipments } from "./shipmentService";

// The hosting environment is expected to provide `process.env.API_KEY`.
// A standard browser does not have a `process` object. Without a build step to replace this
// variable, `process` is undefined and trying to access `process.env` would crash the app.
// This check prevents the crash, allowing the app to load, but AI features will be disabled.
const API_KEY = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

let ai: GoogleGenAI | null = null;

// Initialize the AI client only if the API key is available.
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  // This warning will appear in the browser console if the app is run without a build step.
  // To fix this for deployment, a build process (e.g., `npm run build`) must be used that
  // correctly replaces `process.env.API_KEY` with a value from an environment secret.
  console.warn("Gemini API key is missing. Ensure the deployment process sets the API_KEY environment variable.");
}

export const startChatSession = async (): Promise<Chat | null> => {
    if (!ai) {
        console.error("Gemini API key is not configured or the 'process' object is not available.");
        return null;
    }
    try {
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: 'You are a helpful logistics assistant for a company called Shipify. Be friendly, concise, and professional. Answer questions about shipping, logistics, tariffs, and the features of the Shipify application.'
            }
        });
        return chat;
    } catch (e) {
        console.error("Could not start chat session", e);
        return null;
    }
};

export const getShipmentUpdate = async (question: string): Promise<string> => {
    if (!ai) {
        console.error("Gemini API key is not configured.");
        return 'The AI service is not available. Please ensure the API_KEY is set up correctly in the deployment environment.';
    }

    try {
        const shipments = await getShipments();
        const prompt = `
        You are a helpful logistics assistant for a company called Shipify.
        A user is asking about a shipment. Answer their question based ONLY on the data provided below.
        If you cannot find the shipment in the data, say that you couldn't find details for that shipment.
        Be friendly and concise. Format your response clearly. Do not mention that you were given data. Just answer the question.

        Current Shipment Data:
        ${JSON.stringify(shipments, null, 2)}

        ---
        User's question: "${question}"
        ---

        Your answer:
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.2,
            }
        });
        return response.text;
    } catch (error) {
        console.error('Gemini API call for shipment update failed:', error);
        return 'An error occurred while communicating with the AI. Please try again later.';
    }
};

export const getTariffExplanation = async (tariff: Tariff): Promise<string> => {
  // Check if the AI client is configured before making a call.
  if (!ai) {
    console.error("Gemini API key is not configured.");
    return 'The AI service is not available. Please ensure the API_KEY is set up correctly in the deployment environment.';
  }
  
  const prompt = `
    You are a logistics and shipping expert. 
    A user wants a simple explanation of a tariff plan.
    Please break down the following tariff details into a clear, easy-to-understand summary. 
    Explain what each major fee (like Port Dues, Cargo Handling, Landing Charges) is for. 
    Focus on clarity over technical jargon. Use bullet points for the breakdown.

    Tariff for: ${tariff.name} (${tariff.code})
    Type: ${tariff.type}
    Country: ${tariff.country}

    --- TARIFF DETAILS ---
    ${tariff.details}
    --- END OF DETAILS ---

    Generate the explanation now.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.3,
      }
    });
    return response.text;
  } catch (error) {
    console.error('Gemini API call failed:', error);
    return 'An error occurred while communicating with the AI. Please try again later.';
  }
};
