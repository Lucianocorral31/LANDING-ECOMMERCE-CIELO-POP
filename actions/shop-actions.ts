"use server"

import { createOrder, getProducts, getFeaturedProducts, getProductBySlug, getCategories } from "@/lib/database"
import { revalidatePath } from "next/cache"

export async function getProductsAction() {
  try {
    const products = await getProducts()
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { success: false, error: "Error al cargar productos" }
  }
}

export async function getFeaturedProductsAction() {
  try {
    const products = await getFeaturedProducts()
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return { success: false, error: "Error al cargar productos destacados" }
  }
}

export async function getProductAction(slug: string) {
  try {
    const product = await getProductBySlug(slug)
    return { success: true, data: product }
  } catch (error) {
    console.error("Error fetching product:", error)
    return { success: false, error: "Error al cargar producto" }
  }
}

export async function getCategoriesAction() {
  try {
    const categories = await getCategories()
    return { success: true, data: categories }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return { success: false, error: "Error al cargar categorías" }
  }
}

export async function createOrderAction(formData: FormData) {
  try {
    const customerName = formData.get("customer_name") as string
    const customerEmail = formData.get("customer_email") as string
    const customerPhone = formData.get("customer_phone") as string
    const customerAddress = formData.get("customer_address") as string
    const cartItems = JSON.parse(formData.get("cart_items") as string)
    const totalAmount = Number.parseFloat(formData.get("total_amount") as string)

    if (!customerName || !customerEmail || !cartItems.length) {
      return { success: false, error: "Datos incompletos" }
    }

    const items = cartItems.map((item: any) => ({
      product_id: item.product.id,
      product_name: item.product.name,
      product_price: item.product.price,
      quantity: item.quantity,
    }))

    const orderNumber = await createOrder({
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone || undefined,
      customer_address: customerAddress || undefined,
      total_amount: totalAmount,
      items,
    })

    revalidatePath("/tienda")

    return {
      success: true,
      data: { orderNumber },
      message: `Pedido ${orderNumber} creado exitosamente`,
    }
  } catch (error) {
    console.error("Error creating order:", error)
    return { success: false, error: "Error al crear el pedido" }
  }
}
