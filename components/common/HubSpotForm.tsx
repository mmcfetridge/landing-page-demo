"use client";

import React, { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (opts: {
          region?: string;
          portalId: string;
          formId: string;
          target: string;
          css?: string;
          onFormReady?: (form: HTMLElement) => void;
          onFormSubmit?: (form: HTMLElement) => void;
        }) => void;
      };
    };
  }
}

type HubSpotFormProps = {
  className?: string;
  portalId: string;
  formId: string;
  region?: string;
};

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/v2.js";

export default function HubSpotForm({
  className,
  portalId,
  formId,
  region = "na2",
}: HubSpotFormProps) {
  const rid = useId().replace(/:/g, "");
  const targetId = `hs-form-${rid}`;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const createdRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const ensureScript = () =>
      new Promise<void>((resolve, reject) => {
        if (window.hbspt?.forms?.create) return resolve();

        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${HUBSPOT_SCRIPT_SRC}"]`
        );

        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(), { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = HUBSPOT_SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });

    const mount = async () => {
      await ensureScript();
      if (cancelled) return;

      const el = containerRef.current;
      if (!el) return;

      // Clear anything previously injected (prevents duplicates on remount)
      el.innerHTML = "";

      // StrictMode dev double-effect guard
      if (createdRef.current) return;
      createdRef.current = true;

      window.hbspt?.forms?.create({
        region,
        portalId,
        formId,
        target: `#${targetId}`,
      });
    };

    mount().catch(() => {});

    return () => {
      cancelled = true;
      createdRef.current = false;
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [portalId, formId, region, targetId]);

  return <div id={targetId} ref={containerRef} className={className} />;
}
