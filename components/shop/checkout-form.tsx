"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { createOrderAction } from "@/actions/shop-actions"
import { CheckCircle, CreditCard, User, MapPin } from "lucide-react"
import Image from "next/image"

export function CheckoutForm() {
  const { state, dispatch } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    // Agregar items del carrito al FormData
    formData.append("cart_items", JSON.stringify(state.items))
    formData.append("total_amount", state.total.toString())

    try {
      const result = await createOrderAction(formData)

      if (result.success) {
        setOrderComplete(result.data.orderNumber)
        dispatch({ type: "CLEAR_CART" })
      } else {
        alert(result.error || "Error al procesar el pedido")
      }
    } catch (error) {
      alert("Error al procesar el pedido")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No hay productos en el carrito</p>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Pedido Confirmado!</h2>
          <p className="text-slate-600 mb-4">
            Tu pedido <strong>{orderComplete}</strong> ha sido recibido correctamente.
          </p>
          <p className="text-sm text-slate-500 mb-6">Te contactaremos pronto para coordinar los detalles y el pago.</p>
          <Button onClick={() => window.location.reload()} className="bg-sky-500 hover:bg-sky-600 text-white">
            Realizar otro pedido
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Resumen del Pedido
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            {state.items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <Image
                  src={item.product.image_url || "/placeholder.svg"}
                  alt={item.product.name}
                  width={60}
                  height={60}
                  className="w-15 h-15 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.product.name}</h3>
                  <p className="text-slate-600 text-sm">
                    ${Number(item.product.price).toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(Number(item.product.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-sky-600">${Number(state.total).toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checkout Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Datos de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="customer_name" className="block text-sm font-medium text-slate-700 mb-1">
                Nombre completo *
              </label>
              <Input id="customer_name" name="customer_name" type="text" required placeholder="Tu nombre completo" />
            </div>

            <div>
              <label htmlFor="customer_email" className="block text-sm font-medium text-slate-700 mb-1">
                Email *
              </label>
              <Input id="customer_email" name="customer_email" type="email" required placeholder="tu@email.com" />
            </div>

            <div>
              <label htmlFor="customer_phone" className="block text-sm font-medium text-slate-700 mb-1">
                Teléfono
              </label>
              <Input id="customer_phone" name="customer_phone" type="tel" placeholder="+54 9 381 XXX-XXXX" />
            </div>

            <div>
              <label htmlFor="customer_address" className="block text-sm font-medium text-slate-700 mb-1">
                <MapPin className="w-4 h-4 inline mr-1" />
                Dirección (opcional)
              </label>
              <textarea
                id="customer_address"
                name="customer_address"
                rows={3}
                placeholder="Tu dirección completa"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div className="bg-sky-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">Información de Pago</h3>
              <p className="text-sm text-slate-600">
                Una vez confirmado tu pedido, nos pondremos en contacto contigo para coordinar el método de pago y los
                detalles del servicio. Aceptamos transferencias bancarias, MercadoPago y otros medios.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3"
            >
              {isSubmitting ? "Procesando..." : "Confirmar Pedido"}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Al confirmar tu pedido, aceptas nuestros términos y condiciones.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
