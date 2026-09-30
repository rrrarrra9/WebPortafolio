import { Code2, Terminal } from "lucide-react";
import { profile } from "@/lib/profile";

export function CodeScene({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`code-scene ${compact ? "code-scene-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="code-scene-grid" />
      <div className="code-scene-orbit" />
      <div className="code-window">
        <div className="code-toolbar">
          <span className="code-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>
            <Code2 size={12} /> perfil.ts
          </span>
          <Terminal size={13} />
        </div>
        <div className="code-document">
          <div>
            <span className="line-number">01</span>
            <code>
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-variable">perfil</span> = {"{"}
            </code>
          </div>
          <div>
            <span className="line-number">02</span>
            <code>
              &nbsp; nombre:{" "}
              <span className="syntax-string">
                &quot;{profile.fullName}&quot;
              </span>
              ,
            </code>
          </div>
          <div>
            <span className="line-number">03</span>
            <code>
              &nbsp; formación:{" "}
              <span className="syntax-string">&quot;DAM&quot;</span>,
            </code>
          </div>
          <div>
            <span className="line-number">04</span>
            <code>
              &nbsp; enfoque:{" "}
              <span className="syntax-string">&quot;backend&quot;</span>,
            </code>
          </div>
          <div>
            <span className="line-number">05</span>
            <code>
              &nbsp; stack: [
              <span className="syntax-string">&quot;C#&quot;</span>,{" "}
              <span className="syntax-string">&quot;Java&quot;</span>,{" "}
              <span className="syntax-string">&quot;TS&quot;</span>],
            </code>
          </div>
          <div>
            <span className="line-number">06</span>
            <code>
              &nbsp; objetivo:{" "}
              <span className="syntax-string">
                &quot;sumar a un equipo&quot;
              </span>
            </code>
          </div>
          <div>
            <span className="line-number">07</span>
            <code>
              {"}"};<span className="code-caret" />
            </code>
          </div>
        </div>
        <div className="code-window-footer">
          <span>
            <span className="status-dot" /> FORMACIÓN EN DESARROLLO
          </span>
          <span>TypeScript</span>
        </div>
      </div>
      <div className="code-scene-mark">&lt;/&gt;</div>
    </div>
  );
}
