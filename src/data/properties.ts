export interface Property {
  id: number;
  title: string;
  type: 'house' | 'flat' | 'land' | 'NewProjects' ;
  category: 'buy' | 'rent';
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  description: string;
  isTrending?: boolean;
  isNewProject?: boolean;
}

export const properties: Property[] = [
//  House detail & Pictures add here 1 to 50
 {
    id: 1,
    title: "DHA Phase 1 Luxury House",
    type: "house",
    category: "buy",
    price: "PKR 110.5 Crore",
    location: "DHA Phase 6, Karachi",
    beds: 5,
    baths: 6,
    area: "500 Sq Yards",
    image: "/images/asifphoto2.jpg",
    description: "A stunning modern luxury house located in the heart of DHA Phase 6. Features include a spacious living room, imported fittings, a beautiful garden, and a 3-car parking space. Ideal for large families looking for a premium lifestyle.",
    isTrending: true,
  },
  {
    id: 2,
    title: "Modern Villa in Phase 8",
    type: "house",
    category: "buy",
    price: "PKR 12 Crore",
    location: "DHA Phase 2, Karachi",
    beds: 6,
    baths: 7,
    area: "1000 Sq Yards",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Brand new modern villa with a swimming pool, basement home theater, and state-of-the-art security system. Located in a peaceful neighborhood of Phase 8.",
    isNewProject: true,
  },
  {
    id: 3,
    title: "Cozy Family Home Phase 5",
    type: "house",
    category: "rent",
    price: "PKR 3.5 Lakh/month",
    location: "DHA Phase 3, Karachi",
    beds: 4,
    baths: 4,
    area: "300 Sq Yards",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Well-maintained family home available for rent. Close to top schools and commercial areas. Features a tiled flooring, modern kitchen, and servant quarters.",
    isTrending: true,
  },
  {
    id: 4,
    title: "Designer House Phase 6",
    type: "house",
    category: "buy",
    price: "PKR 9.8 Crore",
    location: "DHA Phase 6, Karachi",
    beds: 5,
    baths: 6,
    area: "600 Sq Yards",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "Architect-designed house with premium finishes. Features an open-plan living area, Italian kitchen, and landscaped garden.",
    isNewProject: true,
    isTrending: true,
  },
  {
    id: 5,
    title: "Spacious House Phase 4",
    type: "house",
    category: "rent",
    price: "PKR 2.8 Lakh/month",
    location: "DHA Phase 7, Karachi",
    beds: 4,
    baths: 5,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Spacious house available for rent in Phase 4. Features large bedrooms, a clean kitchen, and a small front garden.",
  },
  {
    id: 5,
    title: "Spacious House Phase 4",
    type: "house",
    category: "rent",
    price: "PKR 2.8 Lakh/month",
    location: "DHA Phase 7, Karachi",
    beds: 4,
    baths: 5,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Spacious house available for rent in Phase 4. Features large bedrooms, a clean kitchen, and a small front garden.",
  },
  {
    id: 5,
    title: "Spacious House Phase 4",
    type: "house",
    category: "rent",
    price: "PKR 2.8 Lakh/month",
    location: "DHA Phase 7, Karachi",
    beds: 4,
    baths: 5,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Spacious house available for rent in Phase 4. Features large bedrooms, a clean kitchen, and a small front garden.",
  },
// House End

//  Flat detail & Pictures add here 50 to 100
  {
    id: 51,
    title: "Premium Apartment Phase 8",
    type: "flat",
    category: "buy",
    price: "PKR 4.2 Crore",
    location: "DHA Phase 4, Karachi",
    beds: 3,
    baths: 3,
    area: "2000 Sq Feet",
    
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    description: "Luxury sea-facing apartment in a highly secure building. Includes gym, pool access, and dedicated parking.",
    
  },
  {
    id: 52,
    title: "DHA ASIF RIZVI",
    type: "flat",
    category: "rent",
    price: "PKR 1.5 Lakh/month",
    location: "DHA Phase 8, Karachi",
    beds: 2,
    baths: 2,
    area: "1200 Sq Feet",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Fully furnished luxury flat available for rent. Ideal for expats or small families.",
    isTrending: true,
  },
  {
    id: 53,
    title: "DHA ASIF RIZVI",
    type: "flat",
    category: "rent",
    price: "PKR 1.5 Lakh/month",
    location: "DHA Phase 8, Karachi",
    beds: 2,
    baths: 2,
    area: "1200 Sq Feet",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Fully furnished luxury flat available for rent. Ideal for expats or small families.",
    isTrending: true,
  },

  //  Land detail & Pictures add here 100 to 150 
  {
    id: 101,
    title: "Commercial Plot Phase 7",
    type: "land",
    category: "buy",
    price: "PKR 15 Crore",
    location: "DHA Phase 5, Karachi",
    beds: 0,
    baths: 0,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    description: "Prime commercial plot located on the main boulevard. Excellent investment opportunity for building a commercial plaza.",
  },
   {
    id: 102,
    title: "Commercial Plot Phase 7",
    type: "land",
    category: "buy",
    price: "PKR 15 Crore",
    location: "DHA Phase 5, Karachi",
    beds: 0,
    baths: 0,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    description: "Prime commercial plot located on the main boulevard. Excellent investment opportunity for building a commercial plaza.",
  },
  

  {
    id: 300,
    title: "Commercial Plot Phase 7",
    type: "NewProjects",
    category: "buy",
    price: "PKR 15 Crore",
    location: "DHA Phase 5, Karachi",
    beds: 0,
    baths: 0,
    area: "400 Sq Yards",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    description: "Prime commercial plot located on the main boulevard. Excellent investment opportunity for building a commercial plaza.",
  },
  
  
];
