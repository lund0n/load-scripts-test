declare global {
  interface Window {
    foo: string;
  }
}

export function loadDummy() {
  return new Promise<{ client: typeof window.foo }>((resolve, reject) => {
    const script = document.createElement("script");

    script.id = "dummy-lib";
    script.type = "text/javascript";
    script.async = true;

    script.onload = function onLoadDummy() {
      resolve({ client: window.foo });
    };
    script.onerror = reject;

    script.src =
      "https://raw.githubusercontent.com/lund0n/load-scripts-test/main/dummy.js";

    document.head.appendChild(script);
  });
}
