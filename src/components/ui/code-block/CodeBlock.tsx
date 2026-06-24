import { useEffect, useRef, useState } from 'react';

// Core léger
import hljs from 'highlight/es/core';

// Langages que tu veux supporter
import typescript from 'highlight/es/languages/typescript';
import javascript from 'highlight/es/languages/javascript';
import php from 'highlight/es/languages/php';
import python from 'highlight/es/languages/python';
import java from 'highlight/es/languages/java';
import cpp from 'highlight/es/languages/cpp';
import c from 'highlight/es/languages/c';
import csharp from 'highlight/es/languages/csharp';
import xml from 'highlight/es/languages/xml';
import cssLang from 'highlight/es/languages/css';
import sql from 'highlight/es/languages/sql';
import bash from 'highlight/es/languages/bash';
import json from 'highlight/es/languages/json';

// Thème
import 'highlight/styles/atom-one-dark.css';

import styles from './codeBlock.module.css';

// Enregistrer les langages
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('c', c);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', cssLang);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);

export interface CodeBlockProps {
  code: string;
  language?: 'typescript' | 'javascript' | 'php' | 'python' | 'java' | 'cpp' | 'c' | 'csharp' | 'html' | 'css' | 'sql' | 'xml' | 'bash' | 'json';
  title?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
  height?: string;
}

export function CodeBlock({
  code,
  language = 'typescript',
  title,
  showLineNumbers = true,
  copyable = true,
  height = 'auto',
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = codeRef.current;
    if (!el) return;

    delete el.dataset.highlighted;

    el.textContent = code;
    hljs.highlightElement(el);
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy code');
    }
  };

  const lines = code.split('\n').length;

  return (
    <div className={styles.wrapper}>
      {(title || copyable) && (
        <div className={styles.header}>
          {title && <span className={styles.title}>{title}</span>}
          {copyable && (
            <button
              onClick={handleCopy}
              className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
              aria-label="Copy code"
            >
              {copied ? '✓ Copié' : '📋 Copier'}
            </button>
          )}
        </div>
      )}

      <div className={styles.container} style={{ height }}>
        <pre className={styles.pre}>
          {showLineNumbers && (
            <div className={styles.lineNumbers}>
              {Array.from({ length: lines }, (_, i) => (
                <span key={i + 1} className={styles.lineNumber}>
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <div className={styles.code}>
            <code
              ref={codeRef}
              className={`language-${language}`}
            />
          </div>
        </pre>
      </div>
    </div>
  );
}