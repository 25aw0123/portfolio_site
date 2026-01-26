import { useCallback } from "react"

const urlRegex = /([a-zA-Z][a-zA-Z0-9+.-]*:[^\s]+)/g;

const isValidUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
};

const addRelNoopener = (url) => {
  return `<a href="${url}" rel="noopener noreferrer">${url}</a>`;
};

const useUrlSanitizer = () => {
  const sanitizeText = useCallback((inputText) => {
    return inputText.replace(urlRegex, (urlMatch) => {
      if (!isValidUrl(urlMatch)) {
        return "";
      }
      return addRelNoopener(urlMatch);
    });
  }, []);

  return { sanitizeText };
};

export default useUrlSanitizer