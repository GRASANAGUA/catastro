import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FlipCard } from './components/FlipCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import heroImage from '../imports/image-3.png';
import metabaseLogo from '../imports/metabase_logo.png';
import postgisLogo from '../imports/postgis-logo-1.png';
import postgresqlLogo from '../imports/postgresql_logo.png';
import leafletLogo from '../imports/leafletjs-card.png';
import qgisLogo from '../imports/QGIS_logo,_2017.svg.png';
import geoserverLogo from '../imports/GeoServer_logo.png';

export default function App() {
  const cardsData = [
    {
      iconType: 'geoportal' as const,
      frontTitle: 'Geoportal Catastro',
      frontDescription: 'Acceso centralizado a capas de información geográfica, metadatos y servicios web cartográficos compatibles con estándares internacionales.',
      frontAction: 'Ver detalles',
      backTitle: 'Geoportal Catastro',
      backItems: [
        { icon: 'layers', text: 'Visualización de capas catastrales, geográficas e imágenes (mde y mosaicos ortorectificados, imágenes satelitales).' },
        { icon: 'search', text: 'Búsqueda por parcela, coordenadas, partidas catastrales, dirección.' },
        { icon: 'file_export', text: 'Importación y exportación de información en distintos formatos.' },
      ],
      borderColor: 'border-t-8 border-[#5696A4]',
      bgColor: 'bg-[#5696A4]',
      iconBgColor: 'bg-[#E0F3F7]',
      iconColor: 'text-[#5696A4]',
      backLink: 'https://geonube.com.ar/visor/geonube_catastro',
    },
    {
      iconType: 'visor' as const,
      frontTitle: 'Visor Catastral Inteligente',
      frontDescription: 'Herramientas avanzadas de edición alfanumérica y espacial, gestión documental y seguimiento de trámites en tiempo real.',
      frontAction: 'Gestionar',
      backTitle: 'Visor Catastral Inteligente',
      backItems: [
        { icon: 'edit_square', text: 'Edición geométrica, alfanumérica.' },
        { icon: 'folder_managed', text: 'Gestor documental centralizado.' },
        { icon: 'lock', text: 'Control de acceso robusto a usuarios.' },
      ],
      borderColor: 'border-t-8 border-[#5696A4]',
      bgColor: 'bg-[#5696A4]',
      iconBgColor: 'bg-[#E0F3F7]',
      iconColor: 'text-[#5696A4]',
      backLink: 'https://geonube.com.ar/catastro/',
    },
    {
      iconType: 'gemelo' as const,
      frontTitle: 'Gemelo Digital Cambalache',
      frontDescription: 'Entorno inmersivo de navegación 3D para análisis urbano predictivo, modelado de sombras y simulación de impacto territorial.',
      frontAction: 'Explorar 3D',
      backTitle: 'Gemelo Digital Cambalache',
      backItems: [
        { icon: '3d_rotation', text: 'Navegación tridimensional avanzada.' },
        { icon: 'analytics', text: 'Análisis de código urbanístico y asolamiento.' },
        { icon: 'domain_add', text: 'Análisis del crecimiento vertical de la ciudad.' },
      ],
      borderColor: 'border-t-8 border-[#5696A4]',
      bgColor: 'bg-[#5696A4]',
      iconBgColor: 'bg-[#E0F3F7]',
      iconColor: 'text-[#5696A4]',
      backLink: 'https://cambalache.coop.ar/mapas/maplibre/3d.html',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pb-16 pt-20">
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              opacity: 0.2
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

          <div className="relative max-w-screen-2xl mx-auto px-4 md:px-12 py-16 w-full">
            <div className="max-w-3xl">
              <h1 className="text-[#5696A4] mb-5 leading-tight font-black text-2xl md:text-4xl uppercase tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)', fontFamily: "'Montserrat Alternates', sans-serif" }}>
                PLATAFORMA INTELIGENTE DE GESTIÓN CATASTRAL
              </h1>
              <p className="text-slate-600 mb-10 text-base md:text-lg leading-relaxed">
                Infraestructura geoespacial avanzada para la administración eficiente, visualización 3D y análisis técnico del territorio.
              </p>
              <div>
                <a
                  href="https://cambalache.coop.ar/contacto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#E0F3F7] text-[#5696A4] px-10 py-4 rounded-full font-bold hover:bg-[#95D5E3] hover:text-white active:scale-95 transition-all shadow-md items-center gap-3 text-base"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  QUIERO ESTE PRODUCTO
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-12 pt-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <FlipCard key={index} {...card} />
            ))}
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-4 md:px-12 mt-24 mb-24">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-slate-700 mb-4 uppercase">Tecnologías</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Trabajamos con software libre, lo que permite la libre instalación de los softwares en cualquier ámbito de trabajo.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={metabaseLogo} alt="Metabase" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={qgisLogo} alt="QGIS" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={postgresqlLogo} alt="PostgreSQL" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={postgisLogo} alt="PostGIS" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={leafletLogo} alt="Leaflet.js" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex items-center justify-center p-4 h-28">
                <ImageWithFallback src={geoserverLogo} alt="GeoServer" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/541126075602"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
}