export interface ProductMetrics {
  metaAds: number
  scalability: number
  competition: number
  profitMargin: number
  trendScore: number
}

export interface Product {
  id: string
  name: string
  score: number
  source: "amazon" | "flipkart"
  category: string
  price: number
  aiSummary: string
  imageUrl: string
  productUrl: string
  metrics: ProductMetrics
  tags: string[]
  trending?: boolean
  hot?: boolean
  newArrival?: boolean
  verified?: boolean
  monthlySearches: number
  salesVelocity: string
}

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Sports & Fitness",
  "Toys & Games",
  "Health & Wellness",
  "Baby Products",
  "Pet Supplies",
  "Automotive",
  "Garden & Outdoor",
  "Office Supplies",
] as const

const productTemplates = [
  // Electronics
  { name: "Wireless Bluetooth Earbuds TWS", category: "Electronics", priceRange: [799, 2999], tags: ["audio", "wireless", "portable"] },
  { name: "Smart Fitness Band Pro", category: "Electronics", priceRange: [1299, 3999], tags: ["fitness", "health", "wearable"] },
  { name: "Portable Mini Projector 4K", category: "Electronics", priceRange: [5999, 15999], tags: ["entertainment", "home", "portable"] },
  { name: "LED Ring Light 10 inch with Tripod", category: "Electronics", priceRange: [699, 1999], tags: ["content", "photography", "lighting"] },
  { name: "Wireless Charging Pad Fast 15W", category: "Electronics", priceRange: [499, 1499], tags: ["charging", "wireless", "tech"] },
  { name: "Portable Bluetooth Speaker 20W", category: "Electronics", priceRange: [999, 3499], tags: ["audio", "portable", "party"] },
  { name: "Smart WiFi Plug Socket", category: "Electronics", priceRange: [399, 999], tags: ["smart home", "automation", "energy"] },
  { name: "USB C Hub 7-in-1 Adapter", category: "Electronics", priceRange: [799, 2499], tags: ["productivity", "tech", "portable"] },
  { name: "Mechanical Gaming Keyboard RGB", category: "Electronics", priceRange: [1499, 4999], tags: ["gaming", "rgb", "mechanical"] },
  { name: "Webcam 1080P HD with Microphone", category: "Electronics", priceRange: [999, 2999], tags: ["streaming", "work", "video"] },
  { name: "Portable Power Bank 20000mAh", category: "Electronics", priceRange: [799, 2499], tags: ["charging", "portable", "travel"] },
  { name: "Smart Watch with AMOLED Display", category: "Electronics", priceRange: [2499, 7999], tags: ["wearable", "fitness", "smart"] },
  
  // Fashion
  { name: "Organic Cotton Oversized T-Shirt", category: "Fashion", priceRange: [399, 999], tags: ["casual", "sustainable", "comfort"] },
  { name: "Slim Fit Stretch Jeans Men", category: "Fashion", priceRange: [799, 1999], tags: ["denim", "casual", "trendy"] },
  { name: "Athleisure Track Pants Unisex", category: "Fashion", priceRange: [599, 1499], tags: ["sporty", "comfort", "versatile"] },
  { name: "Polarized Sunglasses UV400", category: "Fashion", priceRange: [299, 999], tags: ["accessories", "summer", "style"] },
  { name: "Canvas Sneakers Casual Shoes", category: "Fashion", priceRange: [699, 1799], tags: ["footwear", "casual", "trendy"] },
  { name: "Leather Belt Premium Quality", category: "Fashion", priceRange: [399, 1299], tags: ["accessories", "formal", "leather"] },
  { name: "Crossbody Sling Bag Trendy", category: "Fashion", priceRange: [499, 1499], tags: ["bags", "casual", "versatile"] },
  { name: "Printed Scarf Lightweight", category: "Fashion", priceRange: [199, 599], tags: ["accessories", "versatile", "trendy"] },
  
  // Home & Kitchen
  { name: "Stainless Steel Insulated Bottle 1L", category: "Home & Kitchen", priceRange: [399, 999], tags: ["eco", "hydration", "durable"] },
  { name: "Bamboo Cutlery Set Eco-Friendly", category: "Home & Kitchen", priceRange: [249, 699], tags: ["eco", "travel", "sustainable"] },
  { name: "Air Fryer Digital 4.5L Capacity", category: "Home & Kitchen", priceRange: [2999, 7999], tags: ["cooking", "healthy", "appliance"] },
  { name: "Silicone Kitchen Utensils Set", category: "Home & Kitchen", priceRange: [399, 1199], tags: ["cooking", "non-stick", "durable"] },
  { name: "Automatic Soap Dispenser Touchless", category: "Home & Kitchen", priceRange: [599, 1499], tags: ["hygiene", "smart", "modern"] },
  { name: "Portable Blender USB Rechargeable", category: "Home & Kitchen", priceRange: [699, 1799], tags: ["blender", "portable", "smoothie"] },
  { name: "Cast Iron Skillet Pre-Seasoned", category: "Home & Kitchen", priceRange: [799, 1999], tags: ["cooking", "durable", "traditional"] },
  { name: "Vacuum Storage Bags Set of 10", category: "Home & Kitchen", priceRange: [399, 999], tags: ["storage", "organization", "space-saving"] },
  { name: "Herb Garden Kit Indoor", category: "Home & Kitchen", priceRange: [499, 1299], tags: ["gardening", "fresh", "diy"] },
  { name: "Electric Kettle Fast Boil 1.7L", category: "Home & Kitchen", priceRange: [699, 1799], tags: ["appliance", "fast", "essential"] },
  
  // Beauty & Personal Care
  { name: "Vitamin C Serum with Hyaluronic Acid", category: "Beauty & Personal Care", priceRange: [399, 1299], tags: ["skincare", "anti-aging", "glow"] },
  { name: "Jade Roller and Gua Sha Set", category: "Beauty & Personal Care", priceRange: [299, 899], tags: ["skincare", "massage", "natural"] },
  { name: "Hair Growth Serum Organic", category: "Beauty & Personal Care", priceRange: [499, 1499], tags: ["haircare", "growth", "natural"] },
  { name: "Electric Face Massager LED", category: "Beauty & Personal Care", priceRange: [799, 2499], tags: ["skincare", "massage", "led"] },
  { name: "Beard Grooming Kit Complete", category: "Beauty & Personal Care", priceRange: [599, 1799], tags: ["grooming", "beard", "men"] },
  { name: "Nail Art Kit Professional", category: "Beauty & Personal Care", priceRange: [399, 1199], tags: ["nails", "diy", "creative"] },
  { name: "Teeth Whitening Kit LED", category: "Beauty & Personal Care", priceRange: [699, 1999], tags: ["dental", "whitening", "smile"] },
  { name: "Makeup Brush Set 15 Pieces", category: "Beauty & Personal Care", priceRange: [399, 1299], tags: ["makeup", "brushes", "professional"] },
  
  // Sports & Fitness
  { name: "Resistance Bands Set 5 Levels", category: "Sports & Fitness", priceRange: [299, 899], tags: ["workout", "home gym", "strength"] },
  { name: "Yoga Mat Non-Slip Premium 6mm", category: "Sports & Fitness", priceRange: [499, 1499], tags: ["yoga", "exercise", "eco"] },
  { name: "Adjustable Dumbbell Set 20kg", category: "Sports & Fitness", priceRange: [2499, 6999], tags: ["weights", "strength", "home gym"] },
  { name: "Jump Rope Speed Skipping", category: "Sports & Fitness", priceRange: [199, 599], tags: ["cardio", "portable", "workout"] },
  { name: "Foam Roller Muscle Recovery", category: "Sports & Fitness", priceRange: [399, 1199], tags: ["recovery", "massage", "fitness"] },
  { name: "Ab Wheel Roller with Knee Pad", category: "Sports & Fitness", priceRange: [299, 799], tags: ["core", "strength", "workout"] },
  { name: "Sports Water Bottle 750ml BPA Free", category: "Sports & Fitness", priceRange: [199, 599], tags: ["hydration", "gym", "portable"] },
  { name: "Gym Gloves with Wrist Support", category: "Sports & Fitness", priceRange: [299, 899], tags: ["gym", "protection", "grip"] },
  
  // Toys & Games
  { name: "Building Blocks Set 1000 Pieces", category: "Toys & Games", priceRange: [699, 1999], tags: ["creative", "educational", "kids"] },
  { name: "Remote Control Car Off-Road 4WD", category: "Toys & Games", priceRange: [999, 3499], tags: ["rc", "outdoor", "fun"] },
  { name: "Puzzle 1000 Pieces Adults", category: "Toys & Games", priceRange: [399, 999], tags: ["puzzle", "brain", "relaxing"] },
  { name: "Board Game Strategy Family", category: "Toys & Games", priceRange: [599, 1799], tags: ["family", "strategy", "fun"] },
  { name: "Drone Mini with Camera HD", category: "Toys & Games", priceRange: [1999, 5999], tags: ["drone", "camera", "tech"] },
  { name: "Slime Kit DIY 24 Colors", category: "Toys & Games", priceRange: [399, 999], tags: ["diy", "creative", "sensory"] },
  
  // Health & Wellness
  { name: "Digital Thermometer Infrared", category: "Health & Wellness", priceRange: [499, 1499], tags: ["health", "monitoring", "contactless"] },
  { name: "Pulse Oximeter Fingertip", category: "Health & Wellness", priceRange: [399, 1199], tags: ["health", "monitoring", "portable"] },
  { name: "Essential Oil Diffuser 500ml", category: "Health & Wellness", priceRange: [699, 1999], tags: ["aromatherapy", "relaxation", "home"] },
  { name: "Massage Gun Deep Tissue", category: "Health & Wellness", priceRange: [1999, 5999], tags: ["massage", "recovery", "muscle"] },
  { name: "Posture Corrector Back Brace", category: "Health & Wellness", priceRange: [399, 1199], tags: ["posture", "back", "comfort"] },
  { name: "Sleep Mask Silk Premium", category: "Health & Wellness", priceRange: [199, 699], tags: ["sleep", "travel", "comfort"] },
  
  // Baby Products
  { name: "Baby Carrier Ergonomic 4-in-1", category: "Baby Products", priceRange: [1299, 3499], tags: ["baby", "carrier", "ergonomic"] },
  { name: "Silicone Baby Bibs Set of 5", category: "Baby Products", priceRange: [399, 999], tags: ["baby", "feeding", "easy-clean"] },
  { name: "Baby Monitor Camera WiFi", category: "Baby Products", priceRange: [1999, 4999], tags: ["baby", "safety", "smart"] },
  { name: "Teething Toys Set Silicone", category: "Baby Products", priceRange: [299, 799], tags: ["baby", "teething", "safe"] },
  { name: "Diaper Bag Backpack Multifunction", category: "Baby Products", priceRange: [999, 2499], tags: ["baby", "travel", "organized"] },
  
  // Pet Supplies
  { name: "Automatic Pet Feeder Smart", category: "Pet Supplies", priceRange: [1499, 3999], tags: ["pet", "feeding", "smart"] },
  { name: "Dog Harness No-Pull Adjustable", category: "Pet Supplies", priceRange: [399, 1199], tags: ["dog", "walking", "comfortable"] },
  { name: "Cat Tree Tower Multi-Level", category: "Pet Supplies", priceRange: [1999, 4999], tags: ["cat", "furniture", "play"] },
  { name: "Pet Grooming Brush Self-Cleaning", category: "Pet Supplies", priceRange: [299, 899], tags: ["pet", "grooming", "shedding"] },
  { name: "Interactive Dog Toy Ball", category: "Pet Supplies", priceRange: [399, 999], tags: ["dog", "toy", "interactive"] },
  
  // Automotive
  { name: "Car Phone Mount Magnetic", category: "Automotive", priceRange: [299, 899], tags: ["car", "phone", "hands-free"] },
  { name: "Dash Cam 1080P Front and Rear", category: "Automotive", priceRange: [1999, 4999], tags: ["car", "safety", "recording"] },
  { name: "Car Vacuum Cleaner Portable", category: "Automotive", priceRange: [699, 1999], tags: ["car", "cleaning", "portable"] },
  { name: "Tire Inflator Portable Air Compressor", category: "Automotive", priceRange: [999, 2999], tags: ["car", "emergency", "portable"] },
  { name: "Car Seat Organizer Back Seat", category: "Automotive", priceRange: [399, 1199], tags: ["car", "organization", "kids"] },
  
  // Garden & Outdoor
  { name: "Solar Garden Lights Set of 8", category: "Garden & Outdoor", priceRange: [799, 1999], tags: ["garden", "solar", "decoration"] },
  { name: "Portable Hammock with Stand", category: "Garden & Outdoor", priceRange: [1999, 4999], tags: ["outdoor", "relaxation", "camping"] },
  { name: "Garden Tool Set 10 Pieces", category: "Garden & Outdoor", priceRange: [699, 1799], tags: ["garden", "tools", "durable"] },
  { name: "Outdoor String Lights LED 50ft", category: "Garden & Outdoor", priceRange: [599, 1499], tags: ["outdoor", "decoration", "party"] },
  { name: "Camping Tent 4 Person Waterproof", category: "Garden & Outdoor", priceRange: [2499, 5999], tags: ["camping", "outdoor", "adventure"] },
  
  // Office Supplies
  { name: "Desk Organizer Wood Multi-Compartment", category: "Office Supplies", priceRange: [499, 1299], tags: ["office", "organization", "aesthetic"] },
  { name: "Ergonomic Mouse Pad with Wrist Rest", category: "Office Supplies", priceRange: [299, 799], tags: ["office", "ergonomic", "comfort"] },
  { name: "Monitor Stand Riser with Storage", category: "Office Supplies", priceRange: [699, 1799], tags: ["office", "ergonomic", "storage"] },
  { name: "Laptop Stand Aluminum Adjustable", category: "Office Supplies", priceRange: [799, 2499], tags: ["office", "ergonomic", "portable"] },
  { name: "Desk Lamp LED with USB Charging", category: "Office Supplies", priceRange: [599, 1499], tags: ["office", "lighting", "smart"] },
]

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateProduct(template: typeof productTemplates[0], index: number): Product {
  const source = Math.random() > 0.5 ? "amazon" : "flipkart" as const
  const price = getRandomInt(template.priceRange[0], template.priceRange[1])
  const metaAds = getRandomInt(4, 10)
  const scalability = getRandomInt(4, 10)
  const competition = getRandomInt(3, 10)
  const profitMargin = getRandomInt(15, 45)
  const trendScore = getRandomInt(5, 10)
  const score = Math.round((metaAds + scalability + (10 - competition) + trendScore) / 4)
  
  const summaries = [
    `Strong demand with ${getRandomInt(10, 50)}K monthly searches. Excellent for ${source === "amazon" ? "FBA" : "Flipkart Assured"} sellers.`,
    `Trending product with ${profitMargin}% profit margin potential. Low competition in this niche.`,
    `High conversion rate product. Perfect for social media marketing and Meta ads.`,
    `Consistent sales velocity. Great for building a sustainable dropshipping business.`,
    `Viral potential on social platforms. ${getRandomInt(20, 80)}% of traffic from Instagram/Facebook.`,
  ]

  return {
    id: `product-${index}`,
    name: template.name,
    score,
    source,
    category: template.category,
    price,
    aiSummary: summaries[getRandomInt(0, summaries.length - 1)],
    imageUrl: `https://picsum.photos/seed/${index}/400/400`,
    productUrl: "#",
    metrics: {
      metaAds,
      scalability,
      competition,
      profitMargin,
      trendScore,
    },
    tags: template.tags,
    trending: Math.random() > 0.7,
    hot: Math.random() > 0.85,
    newArrival: Math.random() > 0.8,
    verified: Math.random() > 0.5,
    monthlySearches: getRandomInt(5000, 100000),
    salesVelocity: ["Low", "Medium", "High", "Very High"][getRandomInt(0, 3)],
  }
}

// Generate 100 products
export const products: Product[] = []
let productIndex = 0

// Repeat templates to get 100 products
while (products.length < 100) {
  for (const template of productTemplates) {
    if (products.length >= 100) break
    products.push(generateProduct(template, productIndex++))
  }
}

// Shuffle the products
products.sort(() => Math.random() - 0.5)
