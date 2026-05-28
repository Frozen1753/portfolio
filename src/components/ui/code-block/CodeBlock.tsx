import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import styles from './codeBlock.module.css';
import 'highlight.js/styles/atom-one-dark.css';

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