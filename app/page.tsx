import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Palette,
  Target,
  Share2,
  Globe,
  Bot,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Cloud,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Play,
  Calendar,
  MessageCircle,
  Clock,
  BarChart3,
  Camera,
  Video,
  Search,
  Settings,
  Download,
  FileText,
  BookOpen,
  GraduationCap,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Send } from "lucide-react"

export default function CieloPop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50">
      {/* Floating Clouds Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-10 w-16 h-16 text-sky-200 opacity-30 animate-pulse" />
        <Cloud className="absolute top-40 right-20 w-12 h-12 text-sky-300 opacity-40 animate-pulse delay-1000" />
        <Cloud className="absolute top-60 left-1/3 w-20 h-20 text-sky-200 opacity-20 animate-pulse delay-2000" />
        <Cloud className="absolute bottom-40 right-10 w-14 h-14 text-sky-300 opacity-30 animate-pulse delay-3000" />
        <Cloud className="absolute top-80 right-1/3 w-18 h-18 text-sky-200 opacity-25 animate-pulse delay-4000" />
        <Cloud className="absolute bottom-60 left-20 w-16 h-16 text-sky-300 opacity-35 animate-pulse delay-5000" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-20 flex items-center border-b border-sky-200/50 bg-white/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/cielo-pop-logo.jpg"
              alt="Cielo Pop Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicios" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              Nosotros
            </Link>
            <Link href="#casos" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              Casos
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
            >
              Testimonios
            </Link>
            <Link href="#recursos" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              Recursos
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">Agendá tu llamada</Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-sky-100 text-sky-700 border-sky-200 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Desde Tucumán para toda Argentina
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Llevamos tu marca
              <span className="block text-sky-500">a otro nivel</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Somos la agencia de marketing digital que impulsa tu negocio con creatividad, tecnología y estrategia.
              Despegá hacia el éxito digital con resultados comprobados y un equipo apasionado por hacer crecer tu
              marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Despegá con Cielo Pop
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-300 text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg bg-transparent"
              >
                Quiero potenciar mi marca
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">150+</div>
                <div className="text-slate-600">Proyectos exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">98%</div>
                <div className="text-slate-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">5+</div>
                <div className="text-slate-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">24/7</div>
                <div className="text-slate-600">Soporte disponible</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="relative">
              <Sparkles className="absolute -top-10 left-1/4 w-6 h-6 text-sky-400 animate-pulse" />
              <Sparkles className="absolute -top-5 right-1/3 w-4 h-4 text-sky-300 animate-pulse delay-1000" />
              <Rocket className="absolute top-5 right-1/4 w-8 h-8 text-sky-500 animate-bounce" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Sobre Cielo Pop</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nacimos en Tucumán con la misión de llevar marcas y negocios hacia nuevas alturas. Combinamos
                creatividad, tecnología de vanguardia y estrategia digital para crear experiencias que conectan,
                convierten y hacen crecer tu negocio a nivel nacional. Nuestro enfoque integral y personalizado nos
                permite adaptarnos a las necesidades específicas de cada cliente, desde emprendedores que dan sus
                primeros pasos hasta empresas consolidadas que buscan reinventarse en el mundo digital.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-sky-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Innovación</h3>
                  <p className="text-slate-600">
                    Tecnología de vanguardia para impulsar tu marca hacia el futuro digital
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-sky-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Estrategia</h3>
                  <p className="text-slate-600">Planes personalizados basados en datos y objetivos específicos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-sky-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Creatividad</h3>
                  <p className="text-slate-600">Contenido único que destaca y genera impacto real en tu audiencia</p>
                </div>
              </div>
            </div>

            {/* Company Timeline */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Nuestra Historia</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    2019
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Fundación en Tucumán</h4>
                    <p className="text-slate-600">Comenzamos como un pequeño estudio de diseño con grandes sueños</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Expansión Digital</h4>
                    <p className="text-slate-600">Incorporamos servicios de marketing digital y desarrollo web</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    2022
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Alcance Nacional</h4>
                    <p className="text-slate-600">Comenzamos a trabajar con clientes de todo el país</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Inteligencia Artificial</h4>
                    <p className="text-slate-600">Pioneros en automatización con IA para negocios digitales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Nuestros Servicios</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Soluciones integrales de marketing digital para hacer despegar tu negocio hacia nuevas alturas de éxito
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Content Creation */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Palette className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Creación de Contenido</h3>
                  <p className="text-slate-600 mb-4">
                    Contenido visual, escrito y audiovisual que conecta con tu audiencia y genera engagement auténtico.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Diseño gráfico para redes sociales</li>
                    <li>• Videos y animaciones profesionales</li>
                    <li>• Copywriting estratégico y persuasivo</li>
                    <li>• Fotografía de productos y servicios</li>
                    <li>• Infografías y contenido educativo</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Advertising */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Target className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Campañas Publicitarias</h3>
                  <p className="text-slate-600 mb-4">
                    Ads optimizados en Meta y Google para maximizar tu ROI y alcanzar tus objetivos comerciales.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Meta Ads (Facebook e Instagram)</li>
                    <li>• Google Ads y Shopping</li>
                    <li>• Optimización y análisis continuo</li>
                    <li>• Remarketing y audiencias personalizadas</li>
                    <li>• Reportes detallados de performance</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Share2 className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Gestión de Redes</h3>
                  <p className="text-slate-600 mb-4">
                    Estrategia, publicación y análisis para hacer crecer tu comunidad digital de manera orgánica.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Estrategia de contenido personalizada</li>
                    <li>• Community management profesional</li>
                    <li>• Análisis y reportes mensuales</li>
                    <li>• Gestión de crisis y reputación online</li>
                    <li>• Influencer marketing y colaboraciones</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Web Development */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Globe className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Desarrollo Web</h3>
                  <p className="text-slate-600 mb-4">
                    Sitios web modernos, funcionales y optimizados para conversión que impulsan tu negocio.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Diseño responsive y mobile-first</li>
                    <li>• Optimización SEO técnica</li>
                    <li>• E-commerce y tiendas online</li>
                    <li>• Landing pages de alta conversión</li>
                    <li>• Integración con herramientas de marketing</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Graphic Design */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Sparkles className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Diseño Gráfico</h3>
                  <p className="text-slate-600 mb-4">
                    Identidad visual que refleja la esencia de tu marca y genera impacto memorable en tu audiencia.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Identidad visual completa</li>
                    <li>• Piezas promocionales y publicitarias</li>
                    <li>• Branding y rebranding</li>
                    <li>• Packaging y etiquetas</li>
                    <li>• Material corporativo y presentaciones</li>
                  </ul>
                </CardContent>
              </Card>

              {/* AI Automation */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Bot className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Automatización IA</h3>
                  <p className="text-slate-600 mb-4">
                    Inteligencia artificial para automatizar procesos y mejorar la atención al cliente 24/7.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Chatbots inteligentes personalizados</li>
                    <li>• Generación automática de leads</li>
                    <li>• Flujos de atención automatizados</li>
                    <li>• Análisis predictivo de comportamiento</li>
                    <li>• Integración con CRM y herramientas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Servicios Adicionales</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Camera className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Fotografía Profesional</h4>
                  <p className="text-sm text-slate-600">Sesiones fotográficas para productos, servicios y eventos</p>
                </div>
                <div className="text-center">
                  <Video className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Producción Audiovisual</h4>
                  <p className="text-sm text-slate-600">Videos corporativos, testimoniales y contenido multimedia</p>
                </div>
                <div className="text-center">
                  <Search className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">SEO y SEM</h4>
                  <p className="text-sm text-slate-600">Posicionamiento orgánico y campañas de búsqueda pagada</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Analytics y Reportes</h4>
                  <p className="text-sm text-slate-600">Análisis detallado de métricas y KPIs de rendimiento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Nuestro Proceso</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Un método probado que garantiza resultados excepcionales en cada proyecto que emprendemos
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Descubrimiento y Análisis</h3>
                      <p className="text-slate-600">
                        Analizamos tu negocio, competencia y audiencia para crear una estrategia personalizada que se
                        alinee con tus objetivos específicos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Estrategia y Planificación</h3>
                      <p className="text-slate-600">
                        Desarrollamos un plan detallado con cronogramas, KPIs y métricas de éxito claras para cada fase
                        del proyecto.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Diseño y Desarrollo</h3>
                      <p className="text-slate-600">
                        Creamos contenido, diseños y desarrollamos las herramientas necesarias con la más alta calidad y
                        atención al detalle.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Implementación y Lanzamiento</h3>
                      <p className="text-slate-600">
                        Ejecutamos la estrategia con precisión, monitoreando cada paso para asegurar un lanzamiento
                        exitoso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Optimización Continua</h3>
                      <p className="text-slate-600">
                        Analizamos resultados y optimizamos constantemente para mejorar el rendimiento y maximizar el
                        ROI.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Reportes y Análisis</h3>
                      <p className="text-slate-600">
                        Proporcionamos reportes detallados con insights accionables para tomar decisiones informadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      7
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Soporte y Mantenimiento</h3>
                      <p className="text-slate-600">
                        Ofrecemos soporte continuo y actualizaciones para mantener tu presencia digital siempre
                        actualizada.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      8
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Escalamiento y Crecimiento</h3>
                      <p className="text-slate-600">
                        Identificamos oportunidades de crecimiento y escalamos las estrategias exitosas para maximizar
                        resultados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="casos" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Casos de Éxito</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Proyectos reales que demuestran nuestro compromiso con la excelencia y los resultados excepcionales
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <CardContent className="p-6">
                  <Badge className="bg-purple-100 text-purple-700 mb-4">E-commerce</Badge>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Boutique Luna - Transformación Digital</h3>
                  <p className="text-slate-600 mb-4">
                    Ayudamos a esta boutique tucumana a digitalizar completamente su negocio, creando una tienda online
                    que generó un crecimiento del 400% en ventas durante el primer año.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">400%</div>
                      <div className="text-sm text-slate-600">Aumento en ventas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">15K</div>
                      <div className="text-sm text-slate-600">Nuevos seguidores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">85%</div>
                      <div className="text-sm text-slate-600">Tasa de conversión</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver caso completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <CardContent className="p-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-4">SaaS</Badge>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">TechStart - Lanzamiento de Producto</h3>
                  <p className="text-slate-600 mb-4">
                    Desarrollamos la estrategia de lanzamiento completa para esta startup tecnológica, logrando 1000
                    usuarios registrados en las primeras 48 horas.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">1K</div>
                      <div className="text-sm text-slate-600">Usuarios en 48h</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">250%</div>
                      <div className="text-sm text-slate-600">ROI en ads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-500">50K</div>
                      <div className="text-sm text-slate-600">Impresiones</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver caso completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Restaurante Gourmet</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Incremento del 200% en reservas online mediante estrategia integral de redes sociales
                  </p>
                  <Badge variant="outline">Gastronomía</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Clínica Médica</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Automatización completa de citas que redujo tiempos de espera en un 70%
                  </p>
                  <Badge variant="outline">Salud</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Academia Online</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Plataforma educativa que alcanzó 5000 estudiantes en 6 meses
                  </p>
                  <Badge variant="outline">Educación</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Confían en nosotros</h2>
              <p className="text-slate-600">Marcas líderes que han despegado con Cielo Pop</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-200 h-16 rounded-lg flex items-center justify-center">
                  <span className="text-slate-500 font-semibold">MARCA {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Lo que dicen nuestros clientes</h2>
              <p className="text-lg text-slate-600">
                Testimonios reales de empresarios que han transformado sus negocios con Cielo Pop
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "Cielo Pop transformó completamente nuestra presencia digital. Nuestras ventas online crecieron un
                    300% en 6 meses. Su equipo es increíblemente profesional y siempre están disponibles para
                    ayudarnos."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">María Rodríguez</p>
                      <p className="text-sm text-slate-500">CEO, Boutique Luna</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "El equipo de Cielo Pop entiende perfectamente nuestras necesidades. Su creatividad y
                    profesionalismo son excepcionales. Recomiendo sus servicios sin dudarlo."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Juan López</p>
                      <p className="text-sm text-slate-500">Fundador, TechStart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "Gracias a las automatizaciones con IA, ahora podemos atender a nuestros clientes 24/7 sin perder
                    calidad en el servicio. Es impresionante lo que lograron."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">AG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Ana García</p>
                      <p className="text-sm text-slate-500">Directora, Wellness Spa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "La estrategia de contenido que desarrollaron para nosotros generó un engagement increíble. Nuestros
                    seguidores se triplicaron en solo 4 meses."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">CF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Carlos Fernández</p>
                      <p className="text-sm text-slate-500">Gerente, Fitness Center</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "El sitio web que nos desarrollaron no solo es hermoso, sino que convierte visitantes en clientes de
                    manera increíble. Nuestra tasa de conversión mejoró un 150%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">LM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Laura Martínez</p>
                      <p className="text-sm text-slate-500">Propietaria, Inmobiliaria Norte</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    "Trabajar con Cielo Pop fue la mejor decisión que tomamos. Su enfoque estratégico y atención al
                    detalle superaron todas nuestras expectativas."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sky-600 font-semibold">RS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Roberto Silva</p>
                      <p className="text-sm text-slate-500">Director, Consultora Legal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="recursos" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Recursos Gratuitos</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Herramientas, guías y contenido valioso para impulsar tu negocio digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <FileText className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Guía de Marketing Digital 2024</h3>
                  <p className="text-slate-600 mb-4">
                    Estrategias actualizadas para dominar el marketing digital en el nuevo año
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <BookOpen className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">E-book: Redes Sociales para Empresas</h3>
                  <p className="text-slate-600 mb-4">
                    Todo lo que necesitás saber para crear una presencia sólida en redes sociales
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar E-book
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Settings className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Checklist de SEO Técnico</h3>
                  <p className="text-slate-600 mb-4">
                    Lista completa para optimizar tu sitio web y mejorar tu posicionamiento
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Checklist
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <BarChart3 className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Template de Análisis de Competencia</h3>
                  <p className="text-slate-600 mb-4">
                    Plantilla para analizar a tu competencia y encontrar oportunidades
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <Calendar className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Calendario de Contenido</h3>
                  <p className="text-slate-600 mb-4">Planificá tu contenido mensual con nuestro calendario editable</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Calendario
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                    <GraduationCap className="w-6 h-6 text-sky-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Curso: Fundamentos de IA para Negocios</h3>
                  <p className="text-slate-600 mb-4">Aprende cómo implementar inteligencia artificial en tu negocio</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Play className="w-4 h-4 mr-2" />
                    Ver Curso
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Blog Preview */}
            <div className="bg-sky-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Últimas del Blog</h3>
                <p className="text-slate-600">Mantente actualizado con las últimas tendencias y consejos</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "10 Tendencias de Marketing Digital para 2024",
                    excerpt: "Descubre las estrategias que dominarán el marketing digital este año",
                    date: "15 Ene 2024",
                    category: "Tendencias",
                  },
                  {
                    title: "Cómo Automatizar tu Atención al Cliente con IA",
                    excerpt: "Guía paso a paso para implementar chatbots inteligentes",
                    date: "12 Ene 2024",
                    category: "Automatización",
                  },
                  {
                    title: "ROI en Redes Sociales: Cómo Medirlo Correctamente",
                    excerpt: "Métricas clave para evaluar el éxito de tus campañas sociales",
                    date: "10 Ene 2024",
                    category: "Analytics",
                  },
                ].map((post, i) => (
                  <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Badge className="bg-sky-100 text-sky-700 mb-3">{post.category}</Badge>
                      <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{post.date}</span>
                        <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline">
                  Ver todos los artículos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Preguntas Frecuentes</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Respuestas a las dudas más comunes sobre nuestros servicios y proceso de trabajo
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "¿Cuánto tiempo toma ver resultados?",
                  answer:
                    "Los resultados varían según el servicio, pero generalmente comenzás a ver mejoras en las primeras 2-4 semanas. Para campañas publicitarias, los resultados son casi inmediatos, mientras que SEO y crecimiento orgánico pueden tomar 3-6 meses para mostrar resultados significativos.",
                },
                {
                  question: "¿Trabajan con empresas de todos los tamaños?",
                  answer:
                    "Sí, trabajamos desde emprendedores individuales hasta grandes empresas. Nuestros servicios se adaptan a las necesidades y presupuesto de cada cliente, ofreciendo soluciones escalables que crecen con tu negocio.",
                },
                {
                  question: "¿Qué incluye el servicio de automatización con IA?",
                  answer:
                    "Incluye el desarrollo de chatbots personalizados, automatización de respuestas en redes sociales, sistemas de generación de leads, flujos de atención al cliente 24/7, y integración con tus herramientas existentes como CRM y plataformas de venta.",
                },
                {
                  question: "¿Ofrecen soporte técnico continuo?",
                  answer:
                    "Absolutamente. Todos nuestros clientes reciben soporte técnico continuo, actualizaciones regulares, monitoreo de rendimiento y optimizaciones constantes. Nuestro equipo está disponible para resolver cualquier consulta o problema.",
                },
                {
                  question: "¿Cómo miden el éxito de las campañas?",
                  answer:
                    "Utilizamos KPIs específicos según tus objetivos: ROI, conversiones, engagement, tráfico web, leads generados, ventas, etc. Proporcionamos reportes detallados mensuales con análisis y recomendaciones para mejorar continuamente.",
                },
                {
                  question: "¿Pueden trabajar con mi presupuesto?",
                  answer:
                    "Ofrecemos diferentes paquetes y soluciones personalizadas para adaptarnos a diversos presupuestos. Durante la consulta inicial, analizamos tus necesidades y recursos para crear una propuesta que maximice tu inversión.",
                },
              ].map((faq, i) => (
                <Card key={i} className="border-sky-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between cursor-pointer">
                      <h3 className="font-semibold text-slate-800">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-sky-500" />
                    </div>
                    <p className="text-slate-600 mt-3">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">¿No encontraste la respuesta que buscabas?</p>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactanos directamente
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para despegar?</h2>
              <p className="text-xl mb-8 opacity-90">
                Agendá una llamada gratuita de 30 minutos y descubrí cómo podemos llevar tu marca a otro nivel. Sin
                compromisos, solo resultados reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendá tu llamada gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 text-lg bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Envianos un mensaje
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Consulta gratuita
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Sin compromisos
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Respuesta en 24hs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="py-16 bg-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Reconocimientos y Certificaciones</h2>
              <p className="text-slate-600">Avalados por las principales plataformas y organizaciones del sector</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[
                "Google Partner",
                "Meta Business",
                "HubSpot Certified",
                "Shopify Partner",
                "WordPress Expert",
                "AI Certified",
              ].map((cert, i) => (
                <div key={i} className="bg-slate-100 h-16 rounded-lg flex items-center justify-center">
                  <span className="text-slate-600 font-medium text-sm text-center px-2">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/images/cielo-pop-logo.jpg"
                alt="Cielo Pop Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 mb-4">
                Agencia de marketing digital desde Tucumán para toda Argentina. Llevamos tu marca a otro nivel con
                creatividad, tecnología y estrategia.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Creación de Contenido
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Campañas Publicitarias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gestión de Redes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Diseño Gráfico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Automatización IA
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Tucumán, Argentina
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +54 9 381 XXX-XXXX
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hola@cielopop.com
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Lun - Vie: 9:00 - 18:00
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Consulta Rápida</h3>
              <form className="space-y-3">
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <textarea
                  placeholder="Tu mensaje"
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder:text-slate-400 resize-none"
                />
                <Button className="w-full bg-sky-500 hover:bg-sky-600">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Cielo Pop. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
