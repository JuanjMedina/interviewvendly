import { CreditCard, ShoppingCart, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'Pagos seguros',
    description: 'Procesa pagos de forma segura con nuestra plataforma de confianza.',
    icon: CreditCard,
  },
  {
    name: 'Gestión de inventario',
    description: 'Administra tu inventario fácilmente con nuestras herramientas intuitivas.',
    icon: ShoppingCart,
  },
  {
    name: 'Análisis de ventas',
    description: 'Obtén insights valiosos sobre tus ventas con nuestros análisis detallados.',
    icon: TrendingUp,
  },
]

const Features = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para tu negocio en línea
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

