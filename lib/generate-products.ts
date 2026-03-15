import type { ComparisonProduct } from "@/components/comparison-card"

const suppliers = [
  { name: "Alibaba", logo: "https://logo.clearbit.com/alibaba.com" },
  { name: "IndiaMART", logo: "https://logo.clearbit.com/indiamart.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.in" },
  { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
  { name: "TradeIndia", logo: "https://logo.clearbit.com/tradeindia.com" },
]

const badgeOptions = ["Best Seller", "Hot", "Trending", "New", "Winner", "High Margin"]

const prosTemplates = [
  "High profit margin potential",
  "Low competition in India",
  "Easy to ship and store",
  "Good for impulse buying",
  "Strong social media appeal",
  "Year-round demand",
  "Multiple upsell options",
  "Great for video ads",
  "Low return rate",
  "Works well with influencers",
]

// Product templates for different search queries
const productTemplates: Record<string, { names: string[]; basePrice: number; category: string; images: string[] }> = {
  "portable mixer": {
    names: [
      "Portable Electric Protein Shaker Blender 380ml",
      "USB Rechargeable Mini Mixer Cup 450ml",
      "Automatic Vortex Mixer Bottle Premium",
      "Electric Portable Blender Sports Edition",
      "Smart Protein Shaker with LED Display",
    ],
    basePrice: 599,
    category: "Kitchen & Home",
    images: [
      "https://images.unsplash.com/photo-1570197571499-166b36435b9d?w=400&q=80",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    ],
  },
  "smart watch": {
    names: [
      "Smart Watch Pro Ultra HD Display",
      "Fitness Tracker Watch with SpO2",
      "Premium Smartwatch Metal Edition",
      "Sports Smart Watch Waterproof IP68",
      "Health Monitor Watch with ECG",
    ],
    basePrice: 1299,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
    ],
  },
  "wireless earbuds": {
    names: [
      "TWS Pro Wireless Earbuds ANC",
      "Bluetooth 5.3 Gaming Earphones",
      "Premium HiFi Wireless Earbuds",
      "Sports Wireless Earbuds IPX7",
      "Noise Cancelling Pods Ultra",
    ],
    basePrice: 899,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80",
      "https://images.unsplash.com/photo-1631176093617-63490a3d785a?w=400&q=80",
      "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?w=400&q=80",
    ],
  },
  "led strip lights": {
    names: [
      "RGB LED Strip Lights 5M WiFi",
      "Smart LED Strip with Music Sync",
      "Neon LED Rope Light Waterproof",
      "Gaming LED Strip Kit RGB+IC",
      "Bedroom LED Lights Remote Control",
    ],
    basePrice: 399,
    category: "Home & Lighting",
    images: [
      "https://images.unsplash.com/photo-1550535424-b498819c412f?w=400&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&q=80",
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&q=80",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=400&q=80",
    ],
  },
  "phone holder": {
    names: [
      "Car Phone Mount Magnetic Pro",
      "Desk Phone Stand Foldable Aluminum",
      "Ring Light Phone Holder 3-in-1",
      "Bike Phone Mount Waterproof",
      "Lazy Neck Phone Holder Flexible",
    ],
    basePrice: 299,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&q=80",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    ],
  },
  "massage gun": {
    names: [
      "Deep Tissue Massage Gun Pro",
      "Mini Fascia Gun Portable",
      "Electric Percussion Massager 30 Speed",
      "Professional Muscle Massage Gun LCD",
      "Cordless Massage Gun with Heat",
    ],
    basePrice: 1499,
    category: "Health & Fitness",
    images: [
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    ],
  },
  default: {
    names: [
      "Premium Quality Product Variant A",
      "Budget-Friendly Option Model B",
      "Professional Grade Version Pro",
      "Compact Travel Edition Mini",
      "Deluxe Feature-Rich Model Max",
    ],
    basePrice: 799,
    category: "General",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055uj6a7c09?w=400&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80",
    ],
  },
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomElements<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function generateProductsForQuery(query: string): ComparisonProduct[] {
  const normalizedQuery = query.toLowerCase().trim()
  const template = productTemplates[normalizedQuery] || productTemplates.default

  // Customize names if using default template
  const names =
    template === productTemplates.default
      ? template.names.map((name) => name.replace("Product", query))
      : template.names

  return names.map((name, index) => {
    const supplier = suppliers[index % suppliers.length]
    const isRecommended = index === 0
    const priceVariation = getRandomInt(-200, 400)
    const price = template.basePrice + priceVariation + index * 100

    // Generate scores with first product being best
    const baseScore = isRecommended ? 8 : getRandomInt(5, 8)
    const scores = {
      metaAds: Math.min(10, baseScore + getRandomInt(-1, 2)),
      scalability: Math.min(10, baseScore + getRandomInt(-2, 1)),
      competition: Math.min(10, baseScore + getRandomInt(-1, 2)),
      profitMargin: Math.min(10, baseScore + getRandomInt(-2, 2)),
      trendScore: Math.min(10, baseScore + getRandomInt(-1, 2)),
    }

    const monthlySearches = getRandomInt(10, 150) * 1000
    const avgCPC = (getRandomInt(5, 25) / 10).toFixed(1)
    const profitPercent = getRandomInt(25, 65)

    return {
      id: `product-${index}-${Date.now()}`,
      name,
      image: template.images[index] || template.images[0],
      price,
      supplier: supplier.name,
      supplierLogo: supplier.logo,
      scores,
      metrics: {
        monthlySearches: `${(monthlySearches / 1000).toFixed(0)}K`,
        avgCPC: `₹${avgCPC}`,
        estimatedProfit: `₹${Math.round(price * (profitPercent / 100))}`,
        sellerCount: getRandomInt(50, 500),
      },
      badges: getRandomElements(badgeOptions, getRandomInt(1, 3)),
      pros: getRandomElements(prosTemplates, 3),
      recommended: isRecommended,
    }
  })
}
