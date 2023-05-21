export function getBotResponse(message) {
  if (message.includes("what can you do") || message.includes("what can do")) {
    return "Ask me anything about bank";
  }
  if (message.includes("What is your name") || message.includes("your name")) {
    return "I'm BotBank.";
  }
  return "Sorry I don't have an answer.";
}
