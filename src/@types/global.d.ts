declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
  interface Window {
    IntersectionObserver: IntersectionObserver;
  }
}