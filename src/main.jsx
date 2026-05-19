import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const floatingTexts = [
  { text: 'frio + bergamota', x: 12, y: 22, depth: 'near' },
  { text: 'tu assistindo serie', x: 64, y: 16, depth: 'mid' },
  { text: 'o teu jeitinho', x: 76, y: 46, depth: 'near' },
  { text: 'teu sorriso', x: 23, y: 62, depth: 'far' },
  { text: 'teu abraco', x: 52, y: 72, depth: 'mid' },
  { text: 'dias tranquilos', x: 17, y: 82, depth: 'near' }
];

const doodles = [
  { kind: 'daisy', x: 8, y: 14, s: 1.1, delay: 0 },
  { kind: 'tangerine', x: 78, y: 10, s: 0.9, delay: -2 },
  { kind: 'cloud', x: 42, y: 18, s: 1.4, delay: -5 },
  { kind: 'tv', x: 18, y: 42, s: 1, delay: -3 },
  { kind: 'tea', x: 83, y: 38, s: 1.05, delay: -7 },
  { kind: 'blanket', x: 58, y: 52, s: 1.25, delay: -4 },
  { kind: 'heart', x: 33, y: 73, s: 0.7, delay: -8 },
  { kind: 'star', x: 70, y: 82, s: 1, delay: -1 },
  { kind: 'daisy', x: 91, y: 68, s: 0.8, delay: -6 },
  { kind: 'cloud', x: 7, y: 75, s: 0.95, delay: -10 },
  { kind: 'tangerine', x: 45, y: 83, s: 0.72, delay: -9 },
  { kind: 'star', x: 29, y: 16, s: 0.6, delay: -11 }
];

function Icon({ kind }) {
  if (kind === 'daisy') {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <ellipse cx="60" cy="28" rx="12" ry="24" />
          <ellipse cx="60" cy="92" rx="12" ry="24" />
          <ellipse cx="28" cy="60" rx="24" ry="12" />
          <ellipse cx="92" cy="60" rx="24" ry="12" />
          <ellipse cx="37" cy="37" rx="11" ry="22" transform="rotate(-45 37 37)" />
          <ellipse cx="83" cy="83" rx="11" ry="22" transform="rotate(-45 83 83)" />
          <ellipse cx="83" cy="37" rx="11" ry="22" transform="rotate(45 83 37)" />
          <ellipse cx="37" cy="83" rx="11" ry="22" transform="rotate(45 37 83)" />
          <circle cx="60" cy="60" r="10" />
        </g>
      </svg>
    );
  }

  if (kind === 'tangerine') {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M72 26c-9-5-19-4-27 2 11 0 20 5 27 15 2-6 2-12 0-17Z" />
          <path d="M58 38c-25 0-42 16-42 37 0 19 17 33 42 33s46-15 46-36c0-20-20-34-46-34Z" />
          <path d="M58 45c-9 13-9 37 1 56" />
          <path d="M39 48c-8 13-8 34 1 48" />
          <path d="M78 48c8 12 8 32-1 47" />
        </g>
      </svg>
    );
  }

  if (kind === 'cloud') {
    return (
      <svg viewBox="0 0 140 90" aria-hidden="true">
        <path d="M31 66h75c15 0 24-8 24-20 0-13-10-21-23-21-6-15-19-22-34-20-13 1-23 9-28 22-14-1-25 8-25 20 0 11 8 19 11 19Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'tv') {
    return (
      <svg viewBox="0 0 120 100" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="24" width="84" height="54" rx="12" />
          <path d="M43 88h34" />
          <path d="M51 78v10M69 78v10" />
          <path d="M48 14l12 10 14-12" />
        </g>
      </svg>
    );
  }

  if (kind === 'tea') {
    return (
      <svg viewBox="0 0 120 100" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 38h56v25c0 17-12 27-28 27S22 80 22 63V38Z" />
          <path d="M78 47h11c9 0 14 5 14 13s-6 14-17 14h-8" />
          <path d="M37 22c-5-7 7-10 1-17M55 24c-5-8 8-12 2-20M72 23c-4-7 7-10 2-17" />
        </g>
      </svg>
    );
  }

  if (kind === 'blanket') {
    return (
      <svg viewBox="0 0 130 100" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 24h73c13 0 22 10 22 23v29H48c-14 0-25-11-25-25V24Z" />
          <path d="M45 24v52M68 24v52M91 24v52" />
          <path d="M23 50h94" />
        </g>
      </svg>
    );
  }

  if (kind === 'heart') {
    return (
      <svg viewBox="0 0 100 90" aria-hidden="true">
        <path d="M50 78S13 56 13 30c0-12 8-20 20-20 8 0 14 4 17 11 3-7 9-11 17-11 12 0 20 8 20 20 0 26-37 48-37 48Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === 'popcorn') {
    return (
      <svg viewBox="0 0 130 130" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M31 45h68l-9 70H40L31 45Z" />
          <path d="M42 45l5 70M65 45v70M88 45l-5 70" />
          <path d="M37 38c-8-11 7-23 17-14 5-16 27-12 27 4 11-7 24 4 18 17" />
          <rect x="83" y="70" width="31" height="22" rx="5" />
          <path d="M90 92l-7 12M106 92l7 12" />
        </g>
      </svg>
    );
  }

  if (kind === 'dog') {
    return (
      <svg viewBox="0 0 130 130" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 59c0-22 14-36 29-36s29 14 29 36v17c0 20-13 32-29 32S36 96 36 76V59Z" />
          <path d="M39 55c-12-8-22-4-24 8-2 15 10 27 24 19M91 55c12-8 22-4 24 8 2 15-10 27-24 19" />
          <path d="M54 62h.1M76 62h.1" />
          <path d="M61 77c2 2 6 2 8 0M56 89c5 5 13 5 18 0" />
          <path d="M65 76v8" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 8l9 31 32 11-32 10-9 32-10-32L9 50l31-11 10-31Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          style={{
            '--x': `${(index * 37) % 100}%`,
            '--y': `${(index * 19) % 100}%`,
            '--d': `${index * -0.45}s`,
            '--s': `${2 + (index % 5)}px`
          }}
        />
      ))}
    </div>
  );
}

function SpotifyLoveCard() {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;
  const remaining = duration ? duration - currentTime : 0;

  async function togglePlay() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function seekToPointer(clientX) {
    const audio = audioRef.current;
    const progressElement = progressRef.current;

    if (!audio || !progressElement || !duration) {
      return;
    }

    const rect = progressElement.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const nextTime = ratio * duration;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function handleSeekStart(event) {
    setIsSeeking(true);
    seekToPointer(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handleSeekMove(event) {
    if (isSeeking) {
      seekToPointer(event.clientX);
    }
  }

  function handleSeekEnd(event) {
    setIsSeeking(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <article className="spotify-love-card reveal delay-1" aria-label="Player do casal">
      <audio
        ref={audioRef}
        src="/foi-assim-sotam.mp3"
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime || 0)}
        onEnded={() => setIsPlaying(false)}
      />
      <header className="spotify-card-top">
        <button type="button" aria-label="Voltar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 8 7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <strong>Juntos para sempre</strong>
        <button type="button" aria-label="Mais opcoes">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12a2 2 0 1 0 .01 0ZM12 12a2 2 0 1 0 .01 0ZM19 12a2 2 0 1 0 .01 0Z" fill="currentColor" />
          </svg>
        </button>
      </header>

      <div className="spotify-cover">
        <img
          src="/casal-1.jpeg"
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="spotify-cover-fallback">
          <span>nossa foto</span>
        </div>
      </div>

      <div className="spotify-track-info">
        <div>
          <h2>Foi assim</h2>
          <p>Sotam</p>
        </div>
        <button className="saved-button" type="button" aria-label="Favorito">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="spotify-progress">
        <div
          ref={progressRef}
          className="spotify-progress-line"
          style={{ '--thumb-x': `${progress || 0}%` }}
          role="slider"
          aria-label="Progresso da musica"
          aria-valuemin="0"
          aria-valuemax={Math.floor(duration || 0)}
          aria-valuenow={Math.floor(currentTime || 0)}
          tabIndex={0}
          onPointerDown={handleSeekStart}
          onPointerMove={handleSeekMove}
          onPointerUp={handleSeekEnd}
          onPointerCancel={handleSeekEnd}
          onKeyDown={(event) => {
            const audio = audioRef.current;

            if (!audio || !duration) {
              return;
            }

            if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
              event.preventDefault();
              const nextTime = Math.min(audio.currentTime + 5, duration);
              audio.currentTime = nextTime;
              setCurrentTime(nextTime);
            }

            if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
              event.preventDefault();
              const nextTime = Math.max(audio.currentTime - 5, 0);
              audio.currentTime = nextTime;
              setCurrentTime(nextTime);
            }
          }}
        >
          <span style={{ width: `${progress || 0}%` }} />
        </div>
        <div className="spotify-time">
          <span>{formatTime(currentTime)}</span>
          <span>-{formatTime(remaining)}</span>
        </div>
      </div>

      <div className="spotify-controls" aria-label="Controles do player">
        <button type="button" aria-label="Aleatorio">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h2.4c2.6 0 3.9 2.1 5.2 5s2.6 5 5.2 5H20M17 4l3 3-3 3M17 14l3 3-3 3M4 17h2.4c1.1 0 2-.4 2.8-1.1M14.8 8.1c.6-.6 1.3-1.1 2.2-1.1H20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="muted" type="button" aria-label="Anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6h3v12H6V6Zm4 6 9-6v12l-9-6Z" fill="currentColor" />
          </svg>
        </button>
        <button className="spotify-play" type="button" aria-label={isPlaying ? 'Pausar' : 'Tocar'} onClick={togglePlay}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m8 5 11 7-11 7V5Z" fill="currentColor" />
            </svg>
          )}
        </button>
        <button type="button" aria-label="Proxima">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6h3v12h-3V6ZM5 6l9 6-9 6V6Z" fill="currentColor" />
          </svg>
        </button>
        <button type="button" aria-label="Repetir">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17 2.8 20.2 6 17 9.2M4 11V9a3 3 0 0 1 3-3h13M7 21.2 3.8 18 7 14.8M20 13v2a3 3 0 0 1-3 3H4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}

function formatTime(value) {
  if (!Number.isFinite(value) || value <= 0) {
    return '0:00';
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
}

function PlayerHero() {
  return (
    <section className="hero section-shell">
      <Particles />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-copy reveal">
        <span className="eyebrow">private session</span>
        <h1>fiz esse cantinho pra te lembrar que voce nunca esta sozinha.</h1>
        <p>mesmo nos dias dificeis, eu continuo aqui.</p>
      </div>
      <SpotifyLoveCard />
    </section>
  );
}

function CoupleStoryCard() {
  const [timeTogether, setTimeTogether] = useState(() => getTimeTogether());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeTogether(getTimeTogether());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const stats = [
    [timeTogether.years, 'Anos'],
    [timeTogether.months, 'Meses'],
    [timeTogether.days, 'Dias'],
    [timeTogether.hours, 'Horas'],
    [timeTogether.minutes, 'Minutos'],
    [timeTogether.seconds, 'Segundos']
  ];

  return (
    <article className="couple-card">
      <div className="couple-photo">
        <img
          src="/casal-2.jpeg"
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="couple-photo-fallback" />
        <h3>Sobre o casal</h3>
      </div>
      <div className="couple-body">
        <h3>Matheus e Luana</h3>
        <p>Juntos desde 18 de janeiro de 2026</p>
        <div className="couple-stats">
          {stats.map(([value, label]) => (
            <div className="stat-box" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function getTimeTogether() {
  const start = new Date(2026, 0, 18, 0, 0, 0);
  const now = new Date();

  if (now < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const daysInPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += daysInPreviousMonth;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

function SpecialMessageCard() {
  const [shown, setShown] = useState(false);
  const specialMessage = `Depois que eu te conheci, a minha vida ficou mais leve de um jeito que eu nem consigo explicar direito. Parece que as coisas ganharam mais cor, mais calma, mais sentido. Tu trouxe uma paz que eu nao sabia que precisava tanto. Ate os dias normais ficaram especiais so porque eu posso dividir eles contigo.

Eu amo o teu jeitinho. Amo como tu e fofinha sem perceber, como tu sempre tenta cuidar dos outros antes de pensar em ti mesma, como tu se preocupa, como tu quer fazer o melhor em tudo. Tu tem um coracao tao puro que as vezes o mundo acaba sendo pesado contigo justamente porque nem todo mundo e como tu. E isso me doi, porque eu queria que tu enxergasse o quanto tu merece receber o mesmo carinho que entrega pros outros todos os dias.

Tu gosta das coisas mais simples, e talvez seja isso que te faz ser tao especial. Assistir serie enroladinha no frio, comer bergamota no sol, ficar feliz vendo cachorrinhos, se emocionar com romantismo bobo... tu transforma coisas pequenas em memorias bonitas. E eu acho lindo como tu consegue deixar qualquer momento confortavel so sendo voce.

Eu amo teu coracao, teu jeito delicado, tua risada, tua calma, ate as pequenas manias que so fazem tu ser mais tu. E mesmo nos teus dias dificeis, quando tu acha que ta cansada demais ou quando o mundo pesa um pouco mais, eu queria que tu lembrasse que nunca vai precisar enfrentar tudo sozinha. Eu to aqui. Sempre.

Se algum dia tu esquecer o quanto e especial, eu faco questao de lembrar por nos dois.`;

  return (
    <article className={`message-card ${shown ? 'is-open' : ''}`}>
      <h3>Mensagem especial</h3>
      <p>
        {shown
          ? specialMessage
          : 'E pensar que tudo comecou do nada... Olha so pra gente agora: escrevendo nossa propria historia, que-'}
      </p>
      <button type="button" onClick={() => setShown((value) => !value)}>
        {shown ? 'Esconder Mensagem' : 'Mostrar Mensagem'}
      </button>
    </article>
  );
}

function CoupleCardsSection() {
  return (
    <section className="couple-cards section-shell">
      <div className="cards-heading reveal">
        <span className="eyebrow">nossa historia</span>
        <h2>um pedacinho de nos dois em formato de lembranca.</h2>
      </div>
      <div className="cards-grid">
        <CoupleStoryCard />
        <SpecialMessageCard />
      </div>
    </section>
  );
}

function ThingsSheLoves() {
  const comfortCards = [
    {
      icons: [
        {
          src: 'https://api.iconify.design/ph/flower.svg?color=%23ffffff',
          label: 'Margarida'
        }
      ],
      title: 'margaridas',
      text: 'um lembrete delicado de que ate as coisas simples conseguem iluminar o dia.'
    },
    {
      icons: [
        {
          src: 'https://api.iconify.design/ph/sun.svg?color=%23ffffff',
          label: 'Sol'
        },
        {
          src: 'https://api.iconify.design/game-icons/orange-slice.svg?color=%23ffffff',
          label: 'Bergamota'
        }
      ],
      title: 'sol + bergamota',
      text: 'aquele tipo de calma pequena que parece abraco em tarde tranquila.'
    },
    {
      icons: [
        {
          src: 'https://api.iconify.design/mdi/popcorn.svg?color=%23ffffff',
          label: 'Pipoca doce'
        },
        {
          src: 'https://api.iconify.design/ph/television-simple.svg?color=%23ffffff',
          label: 'Serie'
        }
      ],
      title: 'pipoca doce + serie',
      text: 'ficar enroladinha, escolher um episodio e deixar o mundo esperar um pouco.'
    },
    {
      icons: [
        {
          src: 'https://api.iconify.design/mingcute/dog-fill.svg?color=%23ffffff',
          label: 'Cachorrinho'
        }
      ],
      title: 'cachorrinhos',
      text: 'porque teu coracao fica ainda mais bonito quando tu sorri vendo um.'
    }
  ];

  return (
    <section className="dream section-shell">
      <div className="section-heading reveal">
        <span className="eyebrow">coisas que moram em ti</span>
        <h2>um mapa pequeno do que te deixa mais leve.</h2>
      </div>

      <div className="comfort-grid">
        {comfortCards.map((card, index) => (
          <article className="comfort-card" key={card.title} style={{ '--index': index }}>
            <div className="comfort-icon">
              {card.icons.map((icon) => (
                <img key={icon.label} src={icon.src} alt={icon.label} loading="lazy" />
              ))}
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SupportLetter() {
  const lines = [
    'tu nao precisa carregar tudo sozinha.',
    'mesmo quando o mundo fica pesado, eu continuo aqui.',
    'eu quero ser teu lugar seguro.',
    'descansa um pouquinho em mim.'
  ];

  return (
    <section className="letter section-shell">
      <Particles />
      <div className="letter-panel reveal">
        <span className="eyebrow">pra quando o dia pesar</span>
        <h2>nos dias dificeis, eu preciso que tu lembre disso</h2>
        <div className="typed-lines">
          {lines.map((line, index) => (
            <p key={line} style={{ '--chars': line.length, '--delay': `${index * 1.85}s` }}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroGate({ onEnter }) {
  return (
    <section className="intro-gate" aria-label="Entrada do presente">
      <div className="intro-topbar">
        <button className="intro-close" type="button" aria-label="Fechar" onClick={onEnter}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z" />
          </svg>
        </button>
        <span className="wrapped-pill">Wrapped</span>
      </div>

      <div className="intro-card">
        <div className="intro-card-glow" aria-hidden="true" />
        <p className="intro-title">
          Mathues separou um <span>presente</span> especial!
        </p>
        <p className="intro-subtitle">
          Um momento unico feito com carinho para celebrar a jornada de voces
        </p>
        <button className="gift-button" type="button" onClick={onEnter}>
          Ver Presente
        </button>
      </div>

      <nav className="intro-nav" aria-label="Navegacao decorativa">
        <span className="intro-nav-item active">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Inicio
        </span>
        <span className="intro-nav-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10.5 18a7.5 7.5 0 1 1 5.31-2.2L21 21l-1.4 1.4-5.2-5.19A7.45 7.45 0 0 1 10.5 18Z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          Pesquisar
        </span>
        <span className="intro-nav-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5v14M10 5v14M15 7l4 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Sua biblioteca
        </span>
      </nav>
    </section>
  );
}

function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <IntroGate onEnter={() => setEntered(true)} />;
  }

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <div className="mouse-light" aria-hidden="true" />
      <PlayerHero />
      <CoupleCardsSection />
      <ThingsSheLoves />
      <SupportLetter />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
