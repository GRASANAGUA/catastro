interface CardIconProps {
  type: 'geoportal' | 'visor' | 'gemelo';
  className?: string;
}

export function CardIcon({ type, className = '' }: CardIconProps) {
  const icons = {
    geoportal: (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Círculo principal */}
        <circle cx="50" cy="50" r="35" stroke="#5696A4" strokeWidth="3.5" fill="none"/>

        {/* Líneas horizontales del globo */}
        <ellipse cx="50" cy="50" rx="35" ry="17" stroke="#5696A4" strokeWidth="3.5" fill="none"/>

        {/* Líneas verticales del globo */}
        <ellipse cx="50" cy="50" rx="17" ry="35" stroke="#5696A4" strokeWidth="3.5" fill="none"/>

        {/* Línea ecuatorial */}
        <line x1="15" y1="50" x2="85" y2="50" stroke="#5696A4" strokeWidth="3.5"/>

        {/* Pin de ubicación */}
        <path d="M50 20 C50 20, 42 32, 42 38 C42 43, 45.5 47, 50 47 C54.5 47, 58 43, 58 38 C58 32, 50 20, 50 20 Z"
              fill="#95D5E3"
              stroke="#5696A4"
              strokeWidth="2.5"/>

        {/* Punto interior del pin */}
        <circle cx="50" cy="37" r="4" fill="#5696A4"/>
      </svg>
    ),
    visor: (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Documento */}
        <rect x="20" y="15" width="50" height="60" rx="2" stroke="#5696A4" strokeWidth="3.5" fill="white"/>

        {/* Líneas del texto */}
        <line x1="27" y1="25" x2="55" y2="25" stroke="#5696A4" strokeWidth="2.5"/>
        <line x1="27" y1="33" x2="55" y2="33" stroke="#5696A4" strokeWidth="2.5"/>
        <line x1="27" y1="41" x2="45" y2="41" stroke="#5696A4" strokeWidth="2.5"/>
        <line x1="27" y1="49" x2="55" y2="49" stroke="#5696A4" strokeWidth="2.5"/>
        <line x1="27" y1="57" x2="50" y2="57" stroke="#5696A4" strokeWidth="2.5"/>

        {/* Lupa - círculo exterior */}
        <circle cx="62" cy="62" r="15" stroke="#5696A4" strokeWidth="3.5" fill="none"/>

        {/* Lupa - círculo interior */}
        <circle cx="62" cy="62" r="9" stroke="#5696A4" strokeWidth="2.5" fill="none"/>

        {/* Mango de la lupa */}
        <line x1="73" y1="73" x2="83" y2="83" stroke="#5696A4" strokeWidth="4" strokeLinecap="round"/>

        {/* Detalles dentro de la lupa */}
        <path d="M55 58 L62 62" stroke="#95D5E3" strokeWidth="2" fill="none"/>
        <path d="M59 55 Q60.5 58.5 62 60" stroke="#95D5E3" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    gemelo: (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Edificio central grande */}
        <path d="M50 25 L60 30 L60 60 L50 65 L40 60 L40 30 Z"
              fill="#95D5E3"
              stroke="#5696A4"
              strokeWidth="2.5"/>
        <path d="M50 25 L60 30 L70 25 L70 55 L60 60 L60 30 Z"
              fill="#5696A4"
              stroke="#5696A4"
              strokeWidth="2.5"/>

        {/* Edificio izquierdo */}
        <path d="M30 35 L37 39 L37 63 L30 67 L23 63 L23 39 Z"
              fill="#95D5E3"
              stroke="#5696A4"
              strokeWidth="2"/>
        <path d="M30 35 L37 39 L44 35 L44 59 L37 63 L37 39 Z"
              fill="#5696A4"
              stroke="#5696A4"
              strokeWidth="2"/>

        {/* Edificio derecho */}
        <path d="M70 35 L77 39 L77 67 L70 71 L63 67 L63 39 Z"
              fill="#95D5E3"
              stroke="#5696A4"
              strokeWidth="2"/>
        <path d="M70 35 L77 39 L84 35 L84 63 L77 67 L77 39 Z"
              fill="#5696A4"
              stroke="#5696A4"
              strokeWidth="2"/>

        {/* Base/plataforma */}
        <rect x="15" y="73" width="70" height="3" fill="#5696A4"/>
        <path d="M20 73 L15 83 L85 83 L80 73"
              fill="none"
              stroke="#5696A4"
              strokeWidth="2"/>

        {/* Ventanas edificio central */}
        <rect x="45" y="38" width="4" height="4" fill="#E0F3F7"/>
        <rect x="45" y="46" width="4" height="4" fill="#E0F3F7"/>
        <rect x="45" y="54" width="4" height="4" fill="#E0F3F7"/>
        <rect x="52" y="38" width="4" height="4" fill="white"/>
        <rect x="52" y="46" width="4" height="4" fill="white"/>
        <rect x="52" y="54" width="4" height="4" fill="white"/>
      </svg>
    ),
  };

  return icons[type];
}
