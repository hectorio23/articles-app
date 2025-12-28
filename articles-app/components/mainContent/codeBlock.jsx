"use client";

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Importar lenguajes adicionales
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';

export function CodeBlock ({ code, language = 'javascript', fileName = '', showLineNumbers = true })  {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className="my-12 mx-20 rounded-lg overflow-hidden shadow-lg  border border-gray-700">
      {/* Header del editor */}
      <div className="bg-[#1d1f21] px-4 py-2.5 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          {/* Botones de ventana */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          {fileName && (
            <span className="ml-3 text-sm text-gray-300 font-mono">{fileName}</span>
          )}
        </div>
        <span className="text-xs text-gray-400 font-mono uppercase">{language}</span>
      </div>

      {/* Área de código */}
      <div className="relative bg-[#1d1f21]">
        <pre className={`!m-0 !bg-transparent ${showLineNumbers ? 'line-numbers' : ''}`}>
          <code className={`language-${language} !text-sm !leading-6`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};
