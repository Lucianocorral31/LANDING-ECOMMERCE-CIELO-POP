"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/database"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", product })
  }

  const discount = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-sky-500 text-white">
              <Star className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
          )}
          {discount > 0 && <Badge className="absolute top-3 right-3 bg-red-500 text-white">-{discount}%</Badge>}
        </div>

        <div className="p-6">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category_name}
            </Badge>
          </div>

          <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">{product.name}</h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.short_description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-sky-600">${Number(product.price).toFixed(2)}</span>
              {product.compare_price && (
                <span className="text-sm text-slate-500 line-through">${Number(product.compare_price).toFixed(2)}</span>
              )}
            </div>
            <div className="text-sm text-slate-500">Stock: {product.stock}</div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
