export default function Text({addEmoji}){
    const text = "This is javascript";
    return addEmoji? addEmoji(text, "🔥") : text;
    
}