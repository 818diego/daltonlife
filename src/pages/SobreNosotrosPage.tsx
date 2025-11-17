import React from "react";
import Layout from "@/layouts/Layout";
import { Icon } from "@iconify/react";

const SobreNosotrosPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-dalton-extrabold text-dalton-primary text-center mb-4 uppercase">
              Sobre Nosotros
            </h1>
            <p className="font-dalton-regular text-base sm:text-lg text-gray-300 max-w-7xl mx-auto">
              Conoce más sobre Dalton Life y nuestra comunidad
            </p>
          </div>

          <div className="w-full">
            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8 lg:p-10">
              <h2 className="font-dalton-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6 uppercase">
                ¿Quiénes Somos?
              </h2>
              <div className="space-y-4 font-dalton-regular text-gray-200 leading-relaxed text-sm sm:text-base">
                <p>
                  Dalton Life es una marca dedicada a los videojuegos y el desarrollo tecnológico, 
                  especializada en crear experiencias de entretenimiento digital de alta calidad. 
                  Nuestro enfoque está en la innovación, la excelencia técnica y la creación de 
                  productos que redefinan los estándares de la industria de los videojuegos.
                </p>
                <p>
                  Como desarrolladores y creadores de contenido, nos dedicamos a ofrecer productos 
                  de calidad que combinan tecnología avanzada con diseño cuidadosamente elaborado. 
                  Cada uno de nuestros proyectos está pensado para brindar una experiencia única, 
                  inmersiva y memorable para nuestros usuarios.
                </p>
                <p>
                  Nuestro objetivo principal es proporcionar servicios y productos de la más alta 
                  calidad en el ámbito de los videojuegos y el desarrollo tecnológico. Buscamos 
                  constantemente nuevas formas de innovar, mejorar y superar las expectativas, 
                  trabajando con tecnologías de vanguardia y aplicando las mejores prácticas del 
                  sector para garantizar resultados excepcionales.
                </p>
                <p>
                  En Dalton Life, no solo creamos videojuegos y servicios digitales; construimos 
                  comunidades, desarrollamos soluciones tecnológicas innovadoras y establecemos 
                  nuevos estándares de excelencia en cada proyecto que emprendemos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-dalton-extrabold text-dalton-primary mb-4 uppercase">
              Apoyo
            </h2>
            <p className="font-dalton-regular text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Si quieres apoyarnos monetariamente o ser parte de nuestra comunidad, estas son las formas de hacerlo
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-dalton-primary/20 rounded-full p-3 flex-shrink-0">
                  <Icon
                    icon="line-md:discord"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-primary"
                  />
                </div>
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Discord
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base mb-4">
                Únete a nuestra comunidad de Discord para obtener soporte,
                reportar problemas, hacer preguntas y estar al día con todas las
                novedades.
              </p>
              <a
                href="https://discord.gg/YHVH8HvtAb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-dalton-semibold bg-dalton-primary text-black hover:bg-dalton-primary/90 hover:shadow-[0_0_8px_rgba(254,254,134,0.4)] transition-all duration-300 px-4 py-2 rounded-[4px] uppercase cursor-pointer"
              >
                <span>Únete a Discord</span>
                <Icon icon="line-md:external-link" className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-dalton-secondary/20 rounded-full p-3 flex-shrink-0">
                  <Icon
                    icon="lucide:store"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-secondary"
                  />
                </div>
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Tebex
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base mb-4">
                Visita nuestra tienda oficial en Tebex para adquirir paquetes
                VIP, beneficios exclusivos y apoyar el desarrollo del servidor.
              </p>
              <a
                href="https://dalton-life.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-dalton-semibold bg-dalton-secondary text-white hover:bg-dalton-secondary/90 hover:shadow-[0_0_8px_rgba(124,64,160,0.4)] transition-all duration-300 px-4 py-2 rounded-[4px] uppercase cursor-pointer"
              >
                <span>Visitar Tebex</span>
                <Icon icon="line-md:external-link" className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-dalton-primary/20 rounded-full p-3 flex-shrink-0">
                  <Icon
                    icon="mdi:share-variant"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-primary"
                  />
                </div>
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Redes Sociales
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base mb-4">
                Síguenos en nuestras redes sociales para estar al día con todo el contenido, actualizaciones y novedades.
              </p>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/daltonxlife/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-dalton-bg-light border border-white/20 rounded-full hover:bg-dalton-primary/20 hover:border-dalton-primary hover:shadow-[0_0_6px_rgba(254,254,134,0.3)] transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Icon icon="mdi:instagram" className="w-6 h-6 text-white hover:text-dalton-primary transition-colors" />
                </a>
                <a
                  href="https://www.tiktok.com/@daltonliferp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-dalton-bg-light border border-white/20 rounded-full hover:bg-dalton-primary/20 hover:border-dalton-primary hover:shadow-[0_0_6px_rgba(254,254,134,0.3)] transition-all duration-300 cursor-pointer"
                  aria-label="TikTok"
                >
                  <Icon icon="ic:baseline-tiktok" className="w-6 h-6 text-white hover:text-dalton-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/Dalton-Life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-dalton-bg-light border border-white/20 rounded-full hover:bg-dalton-primary/20 hover:border-dalton-primary hover:shadow-[0_0_6px_rgba(254,254,134,0.3)] transition-all duration-300 cursor-pointer"
                  aria-label="GitHub"
                >
                  <Icon icon="mdi:github" className="w-6 h-6 text-white hover:text-dalton-primary transition-colors" />
                </a>
              </div>
            </div>

            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-dalton-secondary/20 rounded-full p-3 flex-shrink-0">
                  <Icon
                    icon="simple-icons:kofi"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-secondary"
                  />
                </div>
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Ko-fi
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base mb-4">
                Apoya nuestro trabajo con un café virtual. Tus donaciones nos ayudan a mejorar y desarrollar nuevos proyectos.
              </p>
              <a
                href="https://ko-fi.com/daltonlife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-dalton-semibold bg-dalton-secondary text-white hover:bg-dalton-secondary/90 hover:shadow-[0_0_16px_rgba(124,64,160,0.6)] transition-all duration-300 px-4 py-2 rounded-[4px] uppercase cursor-pointer"
              >
                <span>Apoyar en Ko-fi</span>
                <Icon icon="line-md:external-link" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-dalton-extrabold text-dalton-primary mb-4 uppercase">
              Nuestra Misión y Visión
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="mdi:target"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-primary"
                />
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Nuestra Misión
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base leading-relaxed">
                Crear productos de calidad que combinen innovación, excelencia técnica 
                y diseño cuidadosamente elaborado. Nos dedicamos a ofrecer soluciones 
                tecnológicas y experiencias digitales que superen las expectativas 
                de nuestros usuarios y establezcan nuevos estándares en la industria.
              </p>
            </div>

            <div className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="mdi:eye"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-primary"
                />
                <h3 className="font-dalton-bold text-lg sm:text-xl text-white uppercase">
                  Nuestra Visión
                </h3>
              </div>
              <p className="font-dalton-regular text-gray-300 text-sm sm:text-base leading-relaxed">
                Ser un equipo completo y enfocado en objetivos de superarnos día a día 
                y darnos a conocer en la industria del software. Buscamos constantemente 
                nuevas formas de innovar, mejorar y establecer nuestra presencia como 
                referentes en el desarrollo tecnológico y la creación de experiencias digitales.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-dalton-extrabold text-dalton-primary mb-4 uppercase">
              Nuestros Valores
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "mdi:heart",
                title: "Comunidad",
                description:
                  "Valoramos y respetamos a cada miembro de nuestra comunidad.",
              },
              {
                icon: "mdi:shield-check",
                title: "Calidad",
                description:
                  "Nos esforzamos por ofrecer la mejor experiencia posible.",
              },
              {
                icon: "mdi:lightbulb",
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de mejorar.",
              },
              {
                icon: "mdi:handshake",
                title: "Respeto",
                description: "Fomentamos un ambiente de respeto y tolerancia.",
              },
              {
                icon: "mdi:rocket",
                title: "Pasión",
                description:
                  "Amamos lo que hacemos y lo transmitimos en cada detalle.",
              },
              {
                icon: "mdi:account-group",
                title: "Trabajo en Equipo",
                description:
                  "Creemos en el poder de trabajar juntos hacia un objetivo común.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-dalton-bg-light backdrop-blur-sm rounded-[4px] border border-white/20 p-4 sm:p-6 text-center"
              >
                <div className="bg-dalton-primary/20 rounded-full p-3 w-fit mx-auto mb-3">
                  <Icon
                    icon={value.icon}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-dalton-primary"
                  />
                </div>
                <h3 className="font-dalton-bold text-base sm:text-lg text-white mb-2 uppercase">
                  {value.title}
                </h3>
                <p className="font-dalton-regular text-gray-300 text-xs sm:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SobreNosotrosPage;
