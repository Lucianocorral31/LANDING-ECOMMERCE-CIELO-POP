import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  short_description: string
  price: number
  compare_price?: number
  image_url: string
  category_id: number
  stock: number
  is_active: boolean
  featured: boolean
  created_at: string
  updated_at: string
  category_name?: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  created_at: string
}

export interface Order {
  id: number
  order_number: string
  customer_name: string
  customer_email: string
  customer_phone?: string
  customer_address?: string
  total_amount: number
  status: string
  payment_status: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: number
  order_id: number
  product_id: number
  product_name: string
  product_price: number
  quantity: number
  subtotal: number
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

// Funciones para productos
export async function getProducts(): Promise<Product[]> {
  const result = await sql`
    SELECT p.*, c.name as category_name 
    FROM products p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.is_active = true 
    ORDER BY p.featured DESC, p.created_at DESC
  `
  return result as Product[]
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const result = await sql`
    SELECT p.*, c.name as category_name 
    FROM products p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.is_active = true AND p.featured = true 
    ORDER BY p.created_at DESC
    LIMIT 6
  `
  return result as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const result = await sql`
    SELECT p.*, c.name as category_name 
    FROM products p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.slug = ${slug} AND p.is_active = true
  `
  return (result[0] as Product) || null
}

export async function getCategories(): Promise<Category[]> {
  const result = await sql`
    SELECT * FROM categories ORDER BY name
  `
  return result as Category[]
}

// Funciones para pedidos
export async function createOrder(orderData: {
  customer_name: string
  customer_email: string
  customer_phone?: string
  customer_address?: string
  total_amount: number
  items: { product_id: number; product_name: string; product_price: number; quantity: number }[]
}): Promise<string> {
  const orderNumber = `CP-${Date.now()}`

  // Crear el pedido
  const orderResult = await sql`
    INSERT INTO orders (order_number, customer_name, customer_email, customer_phone, customer_address, total_amount)
    VALUES (${orderNumber}, ${orderData.customer_name}, ${orderData.customer_email}, 
            ${orderData.customer_phone || null}, ${orderData.customer_address || null}, ${orderData.total_amount})
    RETURNING id
  `

  const orderId = orderResult[0].id

  // Crear los items del pedido
  for (const item of orderData.items) {
    await sql`
      INSERT INTO order_items (order_id, product_id, product_name, product_price, quantity, subtotal)
      VALUES (${orderId}, ${item.product_id}, ${item.product_name}, ${item.product_price}, 
              ${item.quantity}, ${item.product_price * item.quantity})
    `
  }

  return orderNumber
}

export async function getOrderByNumber(orderNumber: string): Promise<Order | null> {
  const result = await sql`
    SELECT * FROM orders WHERE order_number = ${orderNumber}
  `
  return (result[0] as Order) || null
}

export async function getOrderItems(orderId: number): Promise<OrderItem[]> {
  const result = await sql`
    SELECT * FROM order_items WHERE order_id = ${orderId} ORDER BY id
  `
  return result as OrderItem[]
}
