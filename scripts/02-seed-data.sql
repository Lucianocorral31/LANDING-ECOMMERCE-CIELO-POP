-- Insertar categorías
INSERT INTO categories (name, slug, description) VALUES
('Servicios Digitales', 'servicios-digitales', 'Servicios de marketing digital y desarrollo web'),
('Diseño Gráfico', 'diseno-grafico', 'Servicios de diseño y branding'),
('Automatización', 'automatizacion', 'Soluciones de automatización con IA'),
('Consultoría', 'consultoria', 'Servicios de consultoría estratégica')
ON CONFLICT (slug) DO NOTHING;

-- Insertar productos
INSERT INTO products (name, slug, description, short_description, price, compare_price, image_url, category_id, stock, featured) VALUES
(
  'Paquete Despegue - Gestión de Redes Sociales',
  'paquete-despegue-redes',
  'Gestión completa de 2 redes sociales con 15 posts mensuales, diseño gráfico básico y reporte mensual. Perfecto para emprendedores que quieren comenzar su presencia digital.',
  'Gestión de 2 redes sociales + 15 posts + diseño básico',
  299.00,
  399.00,
  '/placeholder.svg?height=400&width=400',
  1,
  50,
  true
),
(
  'Paquete Órbita - Marketing Digital Completo',
  'paquete-orbita-marketing',
  'Solución integral que incluye gestión de 4 redes sociales, 30 posts mensuales, campañas publicitarias, chatbot con IA y reportes quincenales.',
  'Marketing digital completo + campañas ads + chatbot IA',
  599.00,
  799.00,
  '/placeholder.svg?height=400&width=400',
  1,
  30,
  true
),
(
  'Desarrollo Web Profesional',
  'desarrollo-web-profesional',
  'Sitio web moderno, responsive y optimizado para SEO. Incluye diseño personalizado, hasta 10 páginas, formularios de contacto y integración con redes sociales.',
  'Sitio web profesional + SEO + diseño responsive',
  1299.00,
  1599.00,
  '/placeholder.svg?height=400&width=400',
  1,
  20,
  true
),
(
  'Identidad Visual Completa',
  'identidad-visual-completa',
  'Diseño de logo, paleta de colores, tipografías, manual de marca y aplicaciones en diferentes formatos. Todo lo necesario para una identidad sólida.',
  'Logo + manual de marca + aplicaciones',
  799.00,
  999.00,
  '/placeholder.svg?height=400&width=400',
  2,
  25,
  false
),
(
  'Chatbot Inteligente con IA',
  'chatbot-inteligente-ia',
  'Chatbot personalizado con inteligencia artificial para atención al cliente 24/7. Incluye integración con WhatsApp, Facebook Messenger y tu sitio web.',
  'Chatbot IA + integración WhatsApp + configuración',
  899.00,
  1199.00,
  '/placeholder.svg?height=400&width=400',
  3,
  15,
  true
),
(
  'Consultoría Estratégica Digital',
  'consultoria-estrategica-digital',
  'Sesión de consultoría de 2 horas para definir tu estrategia digital. Incluye análisis de competencia, plan de acción y recomendaciones personalizadas.',
  'Consultoría 2hs + análisis + plan de acción',
  199.00,
  299.00,
  '/placeholder.svg?height=400&width=400',
  4,
  100,
  false
),
(
  'Campaña Publicitaria Premium',
  'campana-publicitaria-premium',
  'Gestión completa de campañas en Meta Ads y Google Ads durante 1 mes. Incluye creación de anuncios, segmentación avanzada y optimización diaria.',
  'Meta Ads + Google Ads + optimización diaria',
  699.00,
  899.00,
  '/placeholder.svg?height=400&width=400',
  1,
  40,
  false
),
(
  'E-commerce Completo',
  'ecommerce-completo',
  'Tienda online completa con carrito de compras, pasarela de pagos, gestión de inventario y panel administrativo. Listo para vender online.',
  'Tienda online + pagos + inventario + admin',
  1899.00,
  2399.00,
  '/placeholder.svg?height=400&width=400',
  1,
  10,
  true
)
ON CONFLICT (slug) DO NOTHING;
