import { useState } from 'react';
import logo from '../../imports/Cambalache_Logo-AplicaciónVertical_(4).png';

export function Header() {
  const [productosOpen, setProductosOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-[#D2493C] via-[#D3B902] via-50% via-[#6A9C2B] to-[#5696A4]"></div>
      <div className="flex justify-between items-center px-4 md:px-12 max-w-screen-2xl mx-auto h-24">
        <div className="flex items-center">
          <a className="flex items-center py-2" href="https://cambalache.coop.ar/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Cambalache Logo"
              className="h-20 w-auto object-contain"
              src={logo}
            />
          </a>
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          <a
            className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium tracking-wide uppercase"
            href="https://cambalache.coop.ar/soluciones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soluciones y Consultorías
          </a>
          <div className="relative">
            <button
              className={`px-5 py-2 rounded-full border transition-all text-xs font-medium tracking-wide uppercase ${
                productosOpen
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
              onMouseEnter={() => setProductosOpen(true)}
              onMouseLeave={() => setProductosOpen(false)}
            >
              Productos
            </button>
            {productosOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-lg border border-slate-200 py-1 min-w-[250px] z-50"
                onMouseEnter={() => setProductosOpen(true)}
                onMouseLeave={() => setProductosOpen(false)}
              >
                <a
                  href="https://geonube.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-all border-b border-slate-200 uppercase tracking-wide"
                >
                  Geonube
                </a>
                <a
                  href="https://geonube.com.ar/geodashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-all border-b border-slate-200 uppercase tracking-wide"
                >
                  Geodashboard
                </a>
                <a
                  href="https://geonube.com.ar/tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-all border-b border-slate-200 uppercase tracking-wide"
                >
                  Geonube Tracker
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-all uppercase tracking-wide"
                >
                  Gestión Catastral
                </a>
              </div>
            )}
          </div>
          <a
            className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium tracking-wide uppercase"
            href="https://cambalache.coop.ar/capacitaciones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capacitaciones
          </a>
          <a
            className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium tracking-wide uppercase"
            href="https://cambalache.coop.ar/trabajos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuestros Trabajos
          </a>
          <a
            className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium tracking-wide uppercase"
            href="https://cambalache.coop.ar/quienes-somos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiénes Somos
          </a>
          <a
            className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium tracking-wide uppercase"
            href="https://cambalache.coop.ar/contacto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </nav>
        <div className="w-12 lg:w-0"></div>
      </div>
    </header>
  );
}
