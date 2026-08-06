import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function SynapseCodeBlock() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { SynapseCanvas, useFramePreset } from '@synapse/core';

// Initialize zero-latency PFP generator with Synapse design tokens
export function SynapsePFPStudio() {
  const { currentFrame, drawComposite } = useFramePreset({
    theme: 'hacker-goa-2026',
    accentColor: '#8b5cf6',
    outputSize: 1080
  });

  return (
    <SynapseCanvas
      shape="circle"
      zoom={1.2}
      onRenderComplete={(blob) => console.log('Crisp 1080p PFP Generated!')}
    />
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="code-block-section" id="code">
      <div className="ide-window-container">
        {/* Toolbar: 3 decorative dots, filename, copy button */}
        <div className="ide-toolbar">
          <div className="window-dots-row">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
          </div>

          <span className="ide-filename">synapse-generator.ts</span>

          <button onClick={handleCopy} className="ide-copy-btn">
            {copied ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Syntax Highlighted Monospaced Code */}
        <pre className="ide-code-content">
          <code>
            <span className="code-keyword">import</span> &#123; SynapseCanvas, useFramePreset &#125; <span className="code-keyword">from</span> <span className="code-string">'@synapse/core'</span>;<br /><br />
            <span className="code-comment">// Initialize zero-latency PFP generator with Synapse design tokens</span><br />
            <span className="code-keyword">export function</span> <span className="code-class">SynapsePFPStudio</span>() &#123;<br />
            &nbsp;&nbsp;<span className="code-keyword">const</span> &#123; currentFrame, drawComposite &#125; = <span className="code-class">useFramePreset</span>(&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;theme: <span className="code-string">'hacker-goa-2026'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;accentColor: <span className="code-string">'#8b5cf6'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;outputSize: <span className="code-string">1080</span><br />
            &nbsp;&nbsp;&#125;);<br /><br />
            &nbsp;&nbsp;<span className="code-keyword">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-class">SynapseCanvas</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shape=<span className="code-string">"circle"</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zoom=&#123;<span className="code-string">1.2</span>&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onRenderComplete=&#123;(blob) =&gt; console.log(<span className="code-string">'Crisp 1080p PFP Generated!'</span>)&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
            &nbsp;&nbsp;);<br />
            &#125;
          </code>
        </pre>
      </div>
    </section>
  );
}
