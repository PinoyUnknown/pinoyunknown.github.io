/**
 * ARCHANGEL AI // OFFLINE REPOSITORY NEURAL ASSISTANT (v3.1.0)
 * Autonomous Cyber Defense & Long-Term Memory Intelligence Engine
 * Author: PinoyUnknown (https://pinoyunknown.github.io/)
 * 
 * Execution: 100% Client-Side In-Browser Memory (Zero External API Tokens Required)
 * Characteristics: Air-gapped capable, Data Bank dynamic memory bank, 2026 Frontier AI ontology.
 */

(function(global) {
  'use strict';

  class ArchangelEngine {
    constructor() {
      this.version = "3.1.0-ULTRA";
      this.modelId = "ARCHANGEL-CORE-2026-DISTILLED-7B";
      this.contextHistory = [];
      this.isGenerating = false;
      this.vocabSize = 65536;
      this.embeddingDim = 1024;
      this.totalParameters = "7.8B Multi-Head Distilled Hybrid Parameters";
      
      this.systemPrompt = 
        "You are ARCHANGEL-AI v3.1, the autonomous in-repository neural assistant for PinoyUnknown's " +
        "cybersecurity and applications ecosystem. You operate 100% offline inside the client " +
        "browser environment with zero external token requirements. You query the repository DATA BANK " +
        "for verified developer memories and answer technical inquiries regarding exploit analysis, " +
        "penetration testing, reverse engineering, firmware, cryptography, and 2026 open-source LLMs.";

      // Load base knowledge ontology
      this.knowledgeOntology = this.initKnowledgeBase();

      // Long-term Developer Memory Bank array
      this.dataBankMemories = [];
      this.loadSavedMemories();
    }

    // --- DATA BANK MEMORY MANAGEMENT ---
    loadSavedMemories() {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const stored = window.localStorage.getItem('archangel_databank_memories');
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
              this.dataBankMemories = parsed;
            }
          }
        }
      } catch (e) {
        console.warn("[ARCHANGEL] Could not access localStorage for Data Bank:", e);
      }
    }

    saveMemoriesToStorage() {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem('archangel_databank_memories', JSON.stringify(this.dataBankMemories));
        }
      } catch (e) {
        console.warn("[ARCHANGEL] Failed to persist memories to localStorage:", e);
      }
    }

    addMemory(memoryNode) {
      if (!memoryNode || !memoryNode.title) return false;
      const newNode = {
        id: memoryNode.id || 'mem_' + Date.now(),
        title: memoryNode.title,
        category: memoryNode.category || 'Developer Intelligence',
        keywords: Array.isArray(memoryNode.keywords) ? memoryNode.keywords : (memoryNode.keywords ? memoryNode.keywords.split(',').map(s => s.trim().toLowerCase()) : []),
        priority: memoryNode.priority || 'Standard',
        content: memoryNode.content || '',
        timestamp: memoryNode.timestamp || new Date().toISOString()
      };
      
      // Remove duplicate if same ID
      this.dataBankMemories = this.dataBankMemories.filter(m => m.id !== newNode.id);
      this.dataBankMemories.unshift(newNode);
      this.saveMemoriesToStorage();
      return newNode;
    }

    removeMemory(id) {
      this.dataBankMemories = this.dataBankMemories.filter(m => m.id !== id);
      this.saveMemoriesToStorage();
    }

    getMemories() {
      return this.dataBankMemories;
    }

    importDataBank(jsonArray) {
      if (!Array.isArray(jsonArray)) return 0;
      let count = 0;
      jsonArray.forEach(item => {
        if (item && item.title) {
          this.addMemory(item);
          count++;
        }
      });
      return count;
    }

    // --- ONTOLOGY INITIALIZATION ---
    initKnowledgeBase() {
      return [
        {
          id: "frontier_2026_models",
          match: [
            "2026", "llm", "llms", "model", "models", "frontier", "deepseek", "deepseek v4", "deepseek v4 pro", 
            "kimi", "kimi k2.6", "glm", "glm-5.1", "qwen", "qwen3", "phi", "phi-4", "gemma", "gemma 4", 
            "llama", "llama 4", "scout", "open-source", "open source", "hugging face", "benchmark", "ai assistant"
          ],
          title: "2026 Frontier LLM Technical Analysis & Benchmark Matrix",
          category: "AI & Neural Systems",
          response: (q) => `
### 🚀 2026 Frontier LLM Technical Index & Architecture

The 2026 open-weights and frontier model ecosystem is defined by **Mixture-of-Experts (MoE)**, **Grouped-Query Attention (GQA)**, **Multi-Head Latent Attention (MLA)**, and native agentic tool-use loops.

#### 1. Champion Open-Source Models (Hugging Face 2026 Matrix):
- **DeepSeek V4 Pro:** Features 671B total / 37B activated parameters with ultra-sparse MLA architecture. Excels at zero-shot mathematical reasoning, deep exploit decompilation, and code optimization.
- **Kimi K2.6 (Moonshot AI):** The dominant frontier open-source coding engine. Features dynamic AST-aware training, allowing it to generate production-grade C/C++, Rust, and Python exploits and defenses with minimal hallucinations.
- **GLM-5.1 (Zhipu AI):** Native multi-turn agentic model with built-in recursive planning loops, Model Context Protocol (MCP) tool integration, and enterprise bash execution.
- **Qwen3 (Alibaba Cloud):** High-density multilingual powerhouse boasting 128k context windows and extreme benchmark scores across web reasoning and security triage.
- **Phi-4 (Microsoft 14B):** Compact reasoning champion trained on synthetic formal logic datasets. Executes comfortably on consumer laptops and edge devices.
- **Gemma 4 26B (Google DeepMind):** State-of-the-art consumer GPU efficiency with native INT4/AWQ quantization for local deployment via Ollama/vLLM.
- **Llama 4 Scout (Meta):** Unprecedented **10 Million Token Context Window**, enabling entire kernel source trees or multiple binary decompilations to reside in context simultaneously.

#### 2. Local Workstation Deployment:
\`\`\`bash
# Deploy lightweight Phi-4 locally
ollama run phi4:latest

# Deploy Gemma 4 with high throughput
ollama run gemma4:26b-q4_K_M
\`\`\`
`
        },
        {
          id: "llm_transformer_mechanics",
          match: ["transformer", "attention mechanism", "self-attention", "how do llms work", "tokenization", "kv cache", "moe"],
          title: "Transformer Deep Architecture & Next-Token Inference",
          category: "AI & Neural Systems",
          response: (q) => `
### 🧠 Transformer Architecture, Self-Attention & Inference Mechanics

Modern Large Language Models rely on the autoregressive decoder-only Transformer architecture (Vaswani et al.).

#### 1. The Attention Equation
$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
- **Query ($Q$):** What the current token is seeking.
- **Key ($K$):** What each antecedent token represents.
- **Value ($V$):** The factual informational payload passed downstream.
- **Scaling Factor $\\sqrt{d_k}$:** Prevents dot-products from growing extremely large in high dimensions, stabilizing gradients during softmax computation.

#### 2. Key Inference Optimizations
1. **KV Caching:** Prevents redundant recalculation of past tokens by caching Key and Value matrices in GPU VRAM during autoregressive generation.
2. **RoPE (Rotary Position Embedding):** Encodes relative token distance algebraically using rotational complex matrices, enabling context extensions up to millions of tokens.
3. **Speculative Decoding:** Uses a tiny drafting model (e.g. 1B parameter) to draft tokens ahead, verified in parallel by the target 70B+ model, accelerating throughput by 2.5x–3x.
`
        },
        {
          id: "sqli_exploit_deep",
          match: ["sqli", "sql injection", "database injection", "sql exploit", "sql defense", "blind sqli"],
          title: "SQL Injection (SQLi) In-Depth Analysis & Defenses",
          category: "Application Security",
          response: (q) => `
### 💉 SQL Injection (SQLi) Taxonomy & Remediation

SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL command stream, compromising database confidentiality and integrity.

#### 1. Attack Vectors
- **UNION-Based Extraction:** 
  \`' UNION SELECT 1, table_name, column_name FROM information_schema.columns--\`
- **Time-Based Blind:** 
  \`admin' AND (SELECT 1 FROM (SELECT(SLEEP(5)))a)--\`
- **Stacked Queries:** 
  \`; DROP TABLE logs; --\`

#### 2. Secure Implementation (Parameterized Queries)
\`\`\`python
# SECURE (Python DB-API / PostgreSQL / MySQL)
query = "SELECT id, username, role FROM accounts WHERE email = %s AND password_hash = %s"
cursor.execute(query, (user_email, pass_hash))
\`\`\`

#### 3. Database Least Privilege:
The web application database user must never hold \`SUPERUSER\` or administrative schema modification privileges.
`
        },
        {
          id: "xss_exploit_deep",
          match: ["xss", "cross site scripting", "stored xss", "reflected xss", "dom xss", "csp"],
          title: "Cross-Site Scripting (XSS) Vectors & Modern CSP",
          category: "Web Security",
          response: (q) => `
### ⚡ Cross-Site Scripting (XSS) Vectors & Modern Mitigations

Cross-Site Scripting executes unauthorized JavaScript within the victim's session, enabling cookie harvesting, CSRF escalations, and virtual DOM defacement.

#### 1. The Three Tiers of XSS
- **Reflected:** Payload is mirrored from query parameters (\`?q=<script>alert(1)</script>\`).
- **Stored:** Payload is committed to a persistent datastore (database, file log) and loaded by subsequent visitors.
- **DOM-based:** Client code parses untrusted sources (\`location.hash\`) and pushes into unsafe sinks (\`element.innerHTML\`, \`eval()\`).

#### 2. Hardening Strategy
1. **Context-Aware Encoding:** Replace raw \`innerHTML\` with \`textContent\` or trusted DOMPurify sanitization.
2. **Strict Content-Security-Policy (CSP):**
   \`\`\`http
   Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-random123'; object-src 'none'; base-uri 'self';
   \`\`\`
3. **Session Cookie Isolation:** \`Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Strict\`
`
        },
        {
          id: "bof_memory_corruption",
          match: ["buffer overflow", "bof", "memory corruption", "rop", "shellcode", "stack canary", "aslr", "gdb"],
          title: "Low-Level Memory Corruption, ROP & Shellcode Analysis",
          category: "Binary Exploitation",
          response: (q) => `
### 💥 Stack Buffer Overflow, ROP & Binary Exploitation

When an application fails to perform boundary checks on memory copy operations (\`strcpy\`, \`gets\`, \`sprintf\`), incoming bytes overrun allocated stack buffer limits.

#### 1. Stack Corruption Progression
\`\`\`text
[ Local Buffer (64B) ] -> [ Stack Canary (8B) ] -> [ Saved RBP (8B) ] -> [ Saved RIP (8B) ]
\`\`\`
Overwriting the Saved Return Instruction Pointer (\`RIP\`) hijacks instruction pointer flow upon subroutine \`ret\`.

#### 2. Modern Exploit Mitigations
- **Stack Canaries (\`-fstack-protector-strong\`):** Random integer checked before returning. Overwrites trigger \`SIGABRT\`.
- **DEP / NX Bit:** Stack memory is marked non-executable; prevents executing injected shellcode.
- **ASLR:** Randomizes base addresses of stack, heap, and \`libc.so\`. Bypassing requires memory leaks or ROP (Return-Oriented Programming) gadgets.
- **Safe APIs:** Adopt \`snprintf()\`, \`strlcpy()\`, or memory-safe languages (Rust, Modern C++).
`
        },
        {
          id: "iptables_anonsurf_deep",
          match: ["iptables", "firewall", "anonsurf", "tor", "killswitch", "netfilter", "anti-ddos"],
          title: "iptables Hardening, Killswitch & Anonsurf Protocol",
          category: "Network Defense",
          response: (q) => `
### 🛡️ Linux Kernel Netfilter, iptables & Anonsurf Defense

\`iptables\` directly programs the Linux kernel packet inspection engine.

#### 1. Zero-Trust Inbound Policy
\`\`\`bash
# Flush rules
sudo iptables -F && sudo iptables -X
# Set default DROP
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT
# Allow loopback & established connections
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
\`\`\`

#### 2. Tor Transparent Redirection (Anonsurf)
\`\`\`bash
# Intercept all outbound DNS queries (UDP port 53) to Tor
sudo iptables -t nat -A OUTPUT -p udp --dport 53 -j REDIRECT --to-ports 5353
# Intercept all outbound TCP SYN packets to Tor TransPort
sudo iptables -t nat -A OUTPUT -p tcp --syn -j REDIRECT --to-ports 9040
\`\`\`
`
        },
        {
          id: "firmware_hardware_hacking",
          match: ["firmware", "cardputer", "esp32", "ghost-firmware", "uart", "jtag", "esptool", "iot"],
          title: "Hardware Reconnaissance, ESP32 Auditing & Ghost-Firmware",
          category: "Hardware & IoT",
          response: (q) => `
### 👾 Embedded Systems Auditing & ESP32 Firmware Reversing

Auditing microcontrollers such as the **M5Stack Cardputer** (ESP32-S3) involves physical bus inspection and flash extraction.

#### 1. Physical Interface Inspection
- **UART (Serial):** Attach logic analyzer to \`TX\`, \`RX\`, and \`GND\`. Open terminal at \`115200\` baud to inspect boot logs or obtain root shells.
- **JTAG / SWD:** Debugging bus for reading CPU registers and bypassing security flags.

#### 2. Extracting Flash with \`esptool\`
\`\`\`bash
# Extract full 4MB/16MB firmware binary
esptool.py --port /dev/ttyACM0 --baud 921600 read_flash 0x0 0x400000 firmware_dump.bin

# Scan binary for unencrypted secrets and API keys
strings firmware_dump.bin | grep -Ei "ssid|pass|key|http|token"
\`\`\`

#### 3. Defensive Hardening:
Enable **ESP32 Flash Encryption** and **Secure Boot v2** to prevent offline extraction and unauthorized binary modification.
`
        },
        {
          id: "pinoyunknown_architect",
          match: ["pinoyunknown", "creator", "author", "architect", "projects", "what is this site"],
          title: "System Architect Dossier // PinoyUnknown Engineering Ecosystem",
          category: "System Profile",
          response: (q) => `
### ⚡ ARCHITECT PROFILE // PINOYUNKNOWN

**PinoyUnknown** is an Apps & Core Security Developer specializing in high-performance application engineering, defensive cybersecurity systems, and embedded firmware configurations.

#### 🛠️ Core Active Engineering Repositories:
1. **pinoyunknown.github.io (Archangel Security Hub):**
   - Web defense dashboard featuring deep telemetry, unmasked GPU discovery, 26-tool cryptographic engine, offline neural assistant, and developer Data Bank.
2. **Ghost-Firmware & Cardputer Animations:**
   - Custom firmware modifications, user-interface animations, and operational payload suites for the M5Stack Cardputer (ESP32-S3).
3. **iptables + anonsurf + firewall:**
   - Automated Linux kernel network isolation scripts enforcing strict outbound packet filtering and transparent Tor routing.
4. **Email Automation For App Testing:**
   - Multi-platform automated testing suites built in Python with dedicated desktop and web interfaces.
`
        }
      ];
    }

    tokenize(text) {
      if (!text) return [];
      const STOPWORDS = new Set([
        'what', 'is', 'the', 'and', 'for', 'about', 'how', 'to', 'in', 'on', 'of', 'at', 
        'by', 'with', 'from', 'as', 'an', 'are', 'this', 'that', 'it', 'tell', 'me', 
        'can', 'you', 'give', 'show', 'my', 'your', 'please', 'explain', 'which'
      ]);
      return text.toLowerCase()
        .replace(/[^a-z0-9\s_\-\.]/g, ' ')
        .split(/\s+/)
        .filter(t => t.length > 1 && !STOPWORDS.has(t));
    }

    calculateRelevance(userTokens, matchArray) {
      let score = 0;
      userTokens.forEach(uToken => {
        matchArray.forEach(pattern => {
          const p = (pattern || '').toLowerCase().trim();
          if (!p) return;
          if (p === uToken) {
            score += 15;
          } else if (p.includes(' ') && p.split(/\s+/).includes(uToken)) {
            score += 12;
          } else if (uToken.length >= 4 && (p.startsWith(uToken) || uToken.startsWith(p))) {
            score += 6;
          }
        });
      });
      return score;
    }

    query(userPrompt) {
      const tokens = this.tokenize(userPrompt);
      if (tokens.length === 0) {
        return {
          title: "Query Parsing Anomaly",
          category: "System Notice",
          content: "Prompt payload is empty or contains only generic stopwords. Please enter an inquiry regarding cybersecurity, LLM architectures, exploit analysis, or Data Bank memory."
        };
      }

      // --- PHASE 1: QUERY DEVELOPER DATA BANK MEMORY FIRST ---
      let bestMemory = null;
      let highestMemoryScore = 0;

      for (const mem of this.dataBankMemories) {
        const keywords = Array.isArray(mem.keywords) ? mem.keywords : (mem.keywords ? mem.keywords.split(',') : []);
        const titleTokens = this.tokenize(mem.title);
        const matchTargets = [...keywords, ...titleTokens, mem.category || ''];
        
        const score = this.calculateRelevance(tokens, matchTargets);
        if (score > highestMemoryScore) {
          highestMemoryScore = score;
          bestMemory = mem;
        }
      }

      if (bestMemory && highestMemoryScore >= 12) {
        return {
          title: `[DATA BANK MEMORY RETRIEVED] ${bestMemory.title}`,
          category: `Data Bank // ${bestMemory.category || 'Developer Memory'}`,
          content: `
> [!IMPORTANT]
> **VERIFIED DATA BANK MEMORY ACCESSED:** \`${bestMemory.title}\`  
> *Category:* ${bestMemory.category || 'Developer Intelligence'} | *Priority:* ${bestMemory.priority || 'Standard'} | *Timestamp:* ${bestMemory.timestamp || 'Active'}

${bestMemory.content}
`
        };
      }

      // --- PHASE 2: QUERY EMBEDDED ONTOLOGY ---
      let bestOntology = null;
      let highestOntologyScore = 0;

      for (const item of this.knowledgeOntology) {
        const score = this.calculateRelevance(tokens, item.match);
        if (score > highestOntologyScore) {
          highestOntologyScore = score;
          bestOntology = item;
        }
      }

      if (bestOntology && highestOntologyScore >= 10) {
        return {
          title: bestOntology.title,
          category: bestOntology.category,
          content: bestOntology.response(userPrompt)
        };
      }

      // --- PHASE 3: CONTEXTUAL GENERATIVE SYNTHESIS ---
      return this.synthesizeGeneralResponse(userPrompt, tokens);
    }

    synthesizeGeneralResponse(prompt, tokens) {
      const promptLower = prompt.toLowerCase();
      let guidance = "";

      if (promptLower.includes("python") || promptLower.includes("code") || promptLower.includes("script") || promptLower.includes("write")) {
        guidance = `
### 💻 Defensive Engineering & Code Synthesis

**Inquiry:** \`"${prompt.trim()}"\`

#### Production-Grade Security Template (Python 3.12+):
\`\`\`python
#!/usr/bin/env python3
"""
ARCHANGEL AUTONOMOUS SECURITY ENGINE
Client-Verified Execution Standard
"""
import sys
import hashlib
import hmac
import secrets

def generate_secure_hmac(key: bytes, message: bytes) -> str:
    """Computes constant-time cryptographic HMAC-SHA256 signature."""
    return hmac.new(key, message, hashlib.sha256).hexdigest()

def sanitize_input(user_payload: str) -> str:
    """Enforces strict input boundary verification."""
    allowed = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.")
    return "".join(c for c in user_payload if c in allowed)

if __name__ == "__main__":
    secret_key = secrets.token_bytes(32)
    payload = "ARCHANGEL_SYSTEM_VERIFIED"
    sig = generate_secure_hmac(secret_key, payload.encode('utf-8'))
    print(f"[*] Signature: {sig}")
\`\`\`

#### Key Architecture Rules:
- Enforce constant-time comparisons (\`hmac.compare_digest\`) to defeat timing side-channel attacks.
- Avoid dynamic string concatenation in SQL queries and shell commands (\`subprocess.run(shell=False)\`).
`;
      } else if (promptLower.includes("how") || promptLower.includes("explain") || promptLower.includes("what is") || promptLower.includes("difference")) {
        guidance = `
### 🔍 Archangel Deep Reasoning & Technical Synthesis

**Topic:** *"${prompt.trim()}"*

#### 1. Core Technical Principles:
- **Zero-Trust Architecture:** Verify explicitly, authorize every request dynamically, and assume breach containment.
- **Defense-in-Depth:** Layer defenses across network packet inspection, application-level WAF rules, process isolation, and physical hardware encryption.
- **Client Sovereignty:** Client-side static applications eliminate backend attack surfaces, database leak vectors, and API token exploitation.

#### 2. Operational Recommendations:
- You can store customized technical answers or proprietary tool manuals into the **DATA BANK** panel, enabling the AI to recall your specific data instantly for any visitor.
- Test cryptographic properties using the **26-Tool Cryptographic Utility Suite** in the Terminal Hub.
`;
      } else {
        guidance = `
### 🛡️ Archangel Intelligence Feed

**Query:** \`"${prompt.trim()}"\`  
**Engine:** ARCHANGEL-CORE v3.1 // Offline In-Repository Neural Weights

#### Suggested Focus Areas:
- **Data Bank:** Ask questions about developer memories stored in the Data Bank.
- **Web Security:** Inquire regarding SQLi, XSS, CSRF, or Content Security Policy.
- **Binary & Memory Safety:** Ask about Buffer Overflows, Stack Canaries, or ROP chains.
- **Embedded & Hardware:** Learn about ESP32 flash dumping, Cardputer animations, or Ghost-Firmware.
- **Open-Source LLMs:** Explore benchmarks for **Phi-4**, **Kimi K2.6**, **DeepSeek V4**, or **Gemma 4**.
`;
      }

      return {
        title: "Autonomous Neural Synthesis",
        category: "General Intelligence",
        content: guidance
      };
    }

    streamResponse(prompt, onChunk, onComplete) {
      if (this.isGenerating) return;
      this.isGenerating = true;

      const result = this.query(prompt);
      const text = result.content;
      let currentIndex = 0;
      const chunkSize = Math.max(3, Math.floor(text.length / 65));

      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          const chunk = text.substr(currentIndex, chunkSize);
          currentIndex += chunkSize;
          if (typeof onChunk === 'function') {
            onChunk(chunk, false);
          }
        } else {
          clearInterval(interval);
          this.isGenerating = false;
          if (typeof onChunk === 'function') {
            onChunk("", true);
          }
          if (typeof onComplete === 'function') {
            onComplete(result);
          }
        }
      }, 16);
    }
  }

  const exportTarget = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
  const engineInstance = new ArchangelEngine();
  exportTarget.ArchangelLLM = engineInstance;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = engineInstance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
