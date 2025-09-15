
import OutfitCard from "../../components/OutfitCard.jsx";

function SummerOutfits() {
  const outfits = [
    {
      name: "",
      occasion: "",
      season: "Summer",
      image: "../public/1.jpeg",
      description:
        "A clean, professional look perfect for important meetings and presentations.",
      items: [
        { type: "Blazer", brand: "Everlane" },
        { type: "Trousers", brand: "COS" },
        { type: "Blouse", brand: "Uniqlo" },
        { type: "Shoes", description: "Black leather loafers" },
      ],
      tags: ["Professional", "Neutral", "Classic"],
    },
    {
      name: "Weekend Casual",
      occasion: "Coffee Date",
      season: "Spring",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=800&fit=crop",
      description: "Effortlessly stylish for weekend adventures and casual occasions.",
      items: [
        { type: "Sweater", brand: "& Other Stories" },
        { type: "Jeans", brand: "Levi's" },
        { type: "Sneakers", brand: "Veja" },
      ],
      tags: ["Casual", "Comfortable", "Everyday"],
    },
    {
      name: "Evening Elegance",
      occasion: "Dinner Party",
      season: "Summer",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=800&fit=crop",
      description:
        "Sophisticated evening wear that transitions beautifully from cocktails to dinner.",
      items: [
        { type: "Dress", brand: "Reformation" },
        { type: "Heels", brand: "ATP Atelier" },
      ],
      tags: ["Elegant", "Evening", "Sophisticated"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 py-8 sm:py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="tracking-[3px] font-[Karla] text-3xl font-light uppercase text-gray-800 mb-3">
          Polaroid Outfits
        </h1>
        <p className="font-sans text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          A scattered collection of curated looks — just like flipping through a
          box of Polaroids.
        </p>
      </div>

      {/* Scattered Polaroid Grid */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-start gap-8">
        {outfits.map((outfit, index) => (
            <OutfitCard key={index} outfit={outfit} index={index} />
        ))}
        </div>

    </div>
  );
}

export default SummerOutfits;
