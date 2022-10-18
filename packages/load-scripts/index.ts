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
      "https://gist.githubusercontent.com/lund0n/480973cd6e2226d3b2d19870b317f8d2/raw/0effb54372d6dd6abe9bad9820c3c4da6ec2016e/dummy.js";

    document.head.appendChild(script);
  });
}
