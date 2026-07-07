import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './App.module.css';
import { assets, defaultLocale, isLocale, links, localeLabels, locales, messages, type Locale } from './content';

const storageKey = 'chrono-locale';
const isGitHubRepoConfigured = links.githubIssuesRepo.trim().length > 0;
const githubIssuesUrl = isGitHubRepoConfigured
  ? `https://github.com/${links.githubIssuesRepo}/issues`
  : links.githubIssuesUrl;

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const stored = window.localStorage.getItem(storageKey);
  return isLocale(stored) ? stored : defaultLocale;
}

function App() {
  const [locale, setLocale] = useState<Locale>(getStoredLocale);
  const commentsRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const galleryPausedRef = useRef(false);
  const galleryDragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const t = messages[locale];
  const galleryItems = useMemo(
    () => [
      ...assets.gallery.scenes.map((image) => ({ image, label: t.gallery.items[0], type: 'scene' })),
      ...assets.gallery.monsters.map((image) => ({ image, label: t.gallery.items[1], type: 'monster' })),
      ...assets.gallery.relics.map((image) => ({ image, label: t.gallery.items[2], type: 'relic' })),
    ],
    [t.gallery.items],
  );
  const galleryMarqueeItems = useMemo(() => [...galleryItems, ...galleryItems], [galleryItems]);

  useEffect(() => {
    galleryItems.forEach((item) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = item.image;
    });
  }, [galleryItems]);

  useEffect(() => {
    const container = galleryRef.current;
    if (!container) {
      return;
    }

    let animationFrame = 0;
    let lastTime = 0;
    const cycleSeconds = 300;

    const tick = (time: number) => {
      if (lastTime === 0) {
        lastTime = time;
      }

      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      const loopWidth = container.scrollWidth / 2;
      if (!galleryPausedRef.current && loopWidth > 0) {
        container.scrollLeft += (loopWidth / cycleSeconds) * deltaSeconds;

        if (container.scrollLeft >= loopWidth) {
          container.scrollLeft -= loopWidth;
        }
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [galleryMarqueeItems]);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const featuredCards = useMemo(
    () =>
      t.deckTypes.map((deck, index) => ({
        ...deck,
        image: assets.cards[index],
      })),
    [t.deckTypes],
  );

  useEffect(() => {
    const container = commentsRef.current;
    if (!container || !isGitHubRepoConfigured) {
      return;
    }

    container.replaceChildren();

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', links.githubIssuesRepo);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'visitor-feedback');
    script.setAttribute('theme', 'github-dark');

    container.appendChild(script);
  }, [locale]);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Reverse Chrono home">
          <span className={styles.brandMark}>R</span>
          <span>Reverse Chrono</span>
        </a>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#gameplay">{t.nav.game}</a>
          <a href="#cards">{t.nav.cards}</a>
          <a href="#story">{t.nav.story}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#feedback">{t.nav.feedback}</a>
        </nav>

        <div className={styles.localeSwitcher} aria-label="Language selector">
          {locales.map((item) => (
            <button
              className={item === locale ? styles.localeActive : undefined}
              key={item}
              type="button"
              onClick={() => setLocale(item)}
              aria-pressed={item === locale}
            >
              {localeLabels[item]}
            </button>
          ))}
        </div>
      </header>

      <section className={styles.hero} id="top">
        <img className={styles.heroImage} src={assets.hero} alt="" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className={styles.heroText}>{t.hero.subtitle}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={links.wishlistUrl}>
              {t.hero.primaryCta}
            </a>
            <a className={styles.secondaryButton} href={links.demoUrl}>
              {t.hero.secondaryCta}
            </a>
            <a className={styles.ghostButton} href={links.pressKitUrl}>
              {t.hero.tertiaryCta}
            </a>
          </div>
          <div className={styles.stats} aria-label="Game highlights">
            {t.hero.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="gameplay">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{t.gameplay.eyebrow}</p>
          <h2>{t.gameplay.title}</h2>
          <p>{t.gameplay.body}</p>
        </div>
        <div className={styles.deckGrid}>
          {featuredCards.map((deck) => (
            <article className={styles.deckCard} key={deck.name}>
              <img src={deck.image} alt="" loading="lazy" />
              <div>
                <h3>{deck.name}</h3>
                <p>{deck.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.cardsSection}`} id="cards">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{t.cards.eyebrow}</p>
          <h2>{t.cards.title}</h2>
          <p>{t.cards.body}</p>
        </div>
        <div className={styles.showcase}>
          <div className={styles.cardFan} aria-label={t.cards.labels[0]}>
            {assets.showcaseCards.map((card, index) => (
              <img key={card} src={card} alt="" style={{ '--offset': index } as React.CSSProperties} loading="lazy" />
            ))}
          </div>
          <div className={styles.relicShelf} aria-label={t.cards.labels[1]}>
            {assets.relics.map((relic) => (
              <img key={relic} src={relic} alt="" loading="lazy" />
            ))}
          </div>
          <figure className={styles.battlePreview}>
            <img src={assets.battle} alt="" loading="lazy" />
            <figcaption>{t.cards.labels[2]}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.section} ${styles.storySection}`} id="story">
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>{t.story.eyebrow}</p>
          <h2>{t.story.title}</h2>
          <p>{t.story.body}</p>
          <div className={styles.storyBeats}>
            {t.story.beats.map((beat) => (
              <span key={beat}>{beat}</span>
            ))}
          </div>
        </div>
        <figure className={styles.tunnelFeature}>
          <img className={styles.storyImage} src={assets.tunnel} alt="" loading="lazy" />
          <figcaption>
            <strong>{t.story.tunnelTitle}</strong>
            <span>{t.story.tunnelBody}</span>
          </figcaption>
        </figure>
      </section>

      <section className={styles.section} id="gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{t.gallery.eyebrow}</p>
          <h2>{t.gallery.title}</h2>
        </div>
        <div
          className={`${styles.galleryViewport} ${isGalleryDragging ? styles.galleryDragging : ''}`}
          ref={galleryRef}
          aria-label={t.gallery.title}
          onPointerDown={(event) => {
            const container = galleryRef.current;
            if (!container) {
              return;
            }

            galleryPausedRef.current = true;
            galleryDragRef.current = {
              active: true,
              startX: event.clientX,
              startScrollLeft: container.scrollLeft,
            };
            setIsGalleryDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const container = galleryRef.current;
            const drag = galleryDragRef.current;
            if (!container || !drag.active) {
              return;
            }

            const loopWidth = container.scrollWidth / 2;
            container.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX);

            if (loopWidth > 0) {
              if (container.scrollLeft < 0) {
                container.scrollLeft += loopWidth;
                drag.startScrollLeft += loopWidth;
              } else if (container.scrollLeft >= loopWidth) {
                container.scrollLeft -= loopWidth;
                drag.startScrollLeft -= loopWidth;
              }
            }
          }}
          onPointerUp={(event) => {
            galleryDragRef.current.active = false;
            setIsGalleryDragging(false);
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={() => {
            galleryDragRef.current.active = false;
            galleryPausedRef.current = false;
            setIsGalleryDragging(false);
          }}
          onMouseEnter={() => {
            galleryPausedRef.current = true;
          }}
          onMouseLeave={() => {
            if (galleryDragRef.current.active) {
              return;
            }

            galleryDragRef.current.active = false;
            galleryPausedRef.current = false;
            setIsGalleryDragging(false);
          }}
          onFocus={() => {
            galleryPausedRef.current = true;
          }}
          onBlur={() => {
            galleryPausedRef.current = false;
          }}
        >
          <div className={styles.galleryTrack}>
            {galleryMarqueeItems.map((item, index) => (
              <figure key={`${item.image}-${index}`} className={styles.galleryItem} data-kind={item.type}>
                <img src={item.image} alt="" loading="eager" decoding="async" draggable={false} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href={links.wishlistUrl}>
            {t.hero.primaryCta}
          </a>
          <a className={styles.secondaryButton} href={links.demoUrl}>
            {t.hero.secondaryCta}
          </a>
        </div>
      </section>

      <section className={`${styles.section} ${styles.feedbackSection}`} id="feedback">
        <div className={styles.feedbackHeader}>
          <div>
            <p className={styles.eyebrow}>{t.feedback.eyebrow}</p>
            <h2>{t.feedback.title}</h2>
            <p>{t.feedback.body}</p>
          </div>
          <a className={styles.secondaryButton} href={githubIssuesUrl} target="_blank" rel="noreferrer">
            {t.feedback.openIssues}
          </a>
        </div>

        <div className={styles.commentsPanel}>
          <p className={styles.feedbackHelper}>{t.feedback.helper}</p>
          {isGitHubRepoConfigured ? (
            <div className={styles.utterancesHost} ref={commentsRef} />
          ) : (
            <div className={styles.commentsPlaceholder}>
              <h3>{t.feedback.unconfiguredTitle}</h3>
              <p>{t.feedback.unconfiguredBody}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
