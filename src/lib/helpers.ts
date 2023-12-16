export const isServer = () => typeof window === "undefined" || typeof window.document === "undefined";
