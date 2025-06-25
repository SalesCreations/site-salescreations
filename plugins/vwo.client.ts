export default defineNuxtPlugin(() => {
  if (process.client) {
    const head = document.head;

    // Preconnect para performance
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://dev.visualwebsiteoptimizer.com';
    head.appendChild(preconnect);

    // Script VWO externo (forma ideal)
    const script = document.createElement('script');
    script.id = 'vwoCode';
    script.src = 'https://dev.visualwebsiteoptimizer.com/j.php?a=1106075&x=true';
    script.async = true;
    script.type = 'text/javascript';
    head.appendChild(script);
  }
});
