"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./PlayDemoModal.module.css";

/**
 * PlayDemoModal
 *
 * A "Play the game" call to action that opens the live Superstrike kiosk
 * inside a modal. The kiosk URL never appears in the page markup, the link
 * text, the status bar, or a right-click menu: the button is a <button>, not
 * an <a>, and the iframe src is only set once the modal opens.
 *
 * Accessibility: role="dialog", aria-modal, focus moves into the dialog on
 * open and returns to the trigger on close, Escape closes, Tab is trapped,
 * body scroll locks while open, and motion respects prefers-reduced-motion
 * through the CSS module.
 *
 * Props:
 *   variant  "strip" (default): in-post bar the width of the text column,
 *            mouse image left, game name, invitation, filled button. "primary" (royal
 *            blue fill, coral on hover) or "secondary" (outlined) render a
 *            standalone button with a hint line.
 *   title    Strip only. Headline. Default "Superstrike Challenge".
 *   text     Strip only. Gray invitation under the headline.
 *   imageSrc Strip only. Cropped mouse PNG with transparent background.
 *   label    Button text. Default "Play the game".
 *   align    "left" or "center" for the wrapper. Default "left".
 */

const DEMO_SRC = "https://logitech-kiosk.displayedux.com/";

type Props = {
  /** "strip" renders the in-post bar: mouse image, game name, invitation, filled button. */
  variant?: "strip" | "primary" | "secondary";
  label?: string;
  align?: "left" | "center";
  /** Strip only. Headline, the game name. */
  title?: string;
  /** Strip only. The gray invitation under the headline. */
  text?: string;
  /** Strip only. Cropped mouse image, transparent background. Bleeds off top and bottom. */
  imageSrc?: string;
};

export default function PlayDemoModal({
  variant = "strip",
  label = "Play the game",
  align = "left",
  title = "Superstrike Challenge",
  text = "Try it yourself.",
  imageSrc = "/blog/images/superstrike/mouse-cutout.png",
}: Props) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setLoaded(false);
  }, []);

  // Escape closes; Tab stays inside the dialog.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Lock page scroll, move focus in, and return focus on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      {variant === "strip" ? (
        <aside className={styles.strip} aria-label="Live demo">
          <div className={styles.stripArt} aria-hidden="true">
            <img src={imageSrc} alt="" className={styles.stripImg} loading="eager" decoding="async" />
          </div>
          <div className={styles.stripText}>
            <p className={styles.stripTitle}>{title}</p>
            <p className={styles.stripCopy}>{text}</p>
          </div>
          <button
            ref={triggerRef}
            type="button"
            className={`${styles.cta} ${styles.ctaPrimary} ${styles.stripBtn}`}
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <span>{label}</span>
          </button>
        </aside>
      ) : (
      <div
        className={`${styles.ctaWrap} ${
          align === "center" ? styles.ctaWrapCenter : ""
        }`}
      >
        <button
          ref={triggerRef}
          type="button"
          className={`${styles.cta} ${
            variant === "secondary" ? styles.ctaSecondary : styles.ctaPrimary
          }`}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span className={styles.ctaIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            </svg>
          </span>
          <span>{label}</span>
        </button>
        <p className={styles.ctaHint}>
          Live build. Best with a mouse. Enter a name and your score goes on the board.
        </p>
      </div>
      )}

      {open && (
        <div
          className={styles.overlay}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
          >
            <header className={styles.bar}>
              <div className={styles.barText}>
                <span className={styles.eyebrow}>Live demo</span>
                <h2 id={titleId} className={styles.title}>
                  Superstrike Challenge
                </h2>
                <p id={descId} className={styles.desc}>
                  Click as fast as you can. Press Escape to leave.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={close}
                aria-label="Close demo"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            <div className={styles.stage}>
              {!loaded && (
                <div className={styles.loading} aria-live="polite">
                  <span className={styles.loadingRing} aria-hidden="true" />
                  <span>Loading the game</span>
                </div>
              )}
              <iframe
                className={styles.frame}
                src={DEMO_SRC}
                title="Superstrike Challenge, playable demo"
                allow="autoplay; fullscreen"
                referrerPolicy="no-referrer"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
