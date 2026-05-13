import { CardIcon } from './CardIcon';

interface FlipCardProps {
  iconType: 'geoportal' | 'visor' | 'gemelo';
  frontTitle: string;
  frontDescription: string;
  frontAction: string;
  backTitle: string;
  backItems: { icon: string; text: string }[];
  borderColor: string;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  backLink: string;
}

export function FlipCard({
  iconType,
  frontTitle,
  frontDescription,
  frontAction,
  backTitle,
  backItems,
  borderColor,
  bgColor,
  iconBgColor,
  iconColor,
  backLink,
}: FlipCardProps) {
  return (
    <div className="group h-[450px] cursor-pointer" style={{ perspective: '1000px' }}>
      <div className="flip-card-inner relative w-full h-full transition-transform duration-[600ms]" style={{ transformStyle: 'preserve-3d' }}>
        <div
          className={`flip-card-front absolute w-full h-full bg-white p-10 rounded-2xl ${borderColor} outline outline-1 outline-slate-200 shadow-md flex flex-col items-center text-center`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`w-20 h-20 ${iconBgColor} rounded-2xl flex items-center justify-center mb-8 p-2`}>
            <CardIcon type={iconType} className={`w-full h-full ${iconColor}`} />
          </div>
          <h3 className="text-2xl font-bold text-[#263539] mb-4">{frontTitle}</h3>
          <p className="text-slate-600 leading-relaxed">{frontDescription}</p>
          <div className="mt-auto pt-6 border-t border-slate-100 w-full flex justify-center items-center text-[#5696A4] font-bold gap-2">
            <span>{frontAction}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        <a
          href={backLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flip-card-back absolute w-full h-full ${bgColor} text-white p-10 rounded-2xl shadow-2xl flex flex-col items-start text-left hover:brightness-110 transition-all`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl font-bold mb-6">{backTitle}</h3>
          <ul className="space-y-5 text-sm leading-relaxed">
            {backItems.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="material-symbols-outlined mt-0.5">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </a>
      </div>

      <style>{`
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
