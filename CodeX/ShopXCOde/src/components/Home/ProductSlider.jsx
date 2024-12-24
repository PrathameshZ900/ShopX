import React, { useState } from "react";
import "./ProductSlider.css";

const products = [

  {
    id: 1,
    name: "Stanley Classic Flip Straw Tumbler Set",
    price: "$37.97",
    image: "https://n.nordstrommedia.com/it/569ba42e-71ac-4d51-9c68-97fe1236ff29.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/stanley-classic-flip-straw-tumbler-set/8014633",
    discount: "(24% off)",
    rating: "4.1 out of 5 stars",
    reviews: "(6)",
  },
  {
    id: 2,
    name: "Nike Kids' Assorted 3-Pack Micro Essentials Boxer Briefs",
    price: "$14.97",
    image: "https://n.nordstrommedia.com/it/095ea5ed-c1fa-4f2f-97e9-db4201c8b0bf.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/nike-kids-assorted-3-pack-micro-essentials-boxer-briefs-big-kid/6984648",
    discount: "(46% off)",
    rating: "4.8 out of 5 stars",
    reviews: "(79)",
  },
  {
    id: 3,
    name: "Adornia 14K Yellow Gold Plated Swarovski Crystal Halo Stud Earrings",
    price: "$19.98",
    image: "https://n.nordstrommedia.com/it/fb6e605f-e07e-44ef-a0be-fdd08baab8cc.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/adornia-14k-yellow-gold-plated-swarovski-crystal-halo-stud-earrings/5981637",
    discount: "(84% off)",
    rating: "4.0 out of 5 stars",
    reviews: "(166)",
  },
  {
    id: 4,
    name: "Adornia Water Resistant Swarovski Crystal Studded Band - Set of 3",
    price: "$32.97",
    image: "https://n.nordstrommedia.com/it/4cc34ec8-8462-4929-af03-0dced14a2738.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/adornia-water-resistant-swarovski-crystal-studded-band-set-of-3/5987600",
    discount: "(81% off)",
    rating: "4.0 out of 5 stars",
    reviews: "(279)",
  },
  {
    id: 5,
    name: "Nike Assorted 3-Pack Boxer Briefs",
    price: "$26.97",
    image: "https://n.nordstrommedia.com/it/88cf23d2-3eb8-45c9-92ae-ca1b1fef58bd.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/nike-assorted-3-pack-boxer-briefs/5825298",
    discount: "(40% off)",
    rating: "4.8 out of 5 stars",
    reviews: "(168)",
  },
  {
    id: 6,
    name: "Steve Madden Smiley Brushed Baseball Cap",
    price: "$9.54 - $16.97",
    image: "https://n.nordstrommedia.com/it/def71040-eaa1-4e50-ab66-8e176d7ced99.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/steve-madden-smiley-brushed-baseball-cap/7482950",
    discount: "(Extra 25% off select items)",
    rating: "4.8 out of 5 stars",
    reviews: "(17)",
  },
  {
    id: 7,
    name: "Kate Spade New York Laurel Way Neda Continental Zip Wallet",
    price: "$44.97",
    image: "https://n.nordstrommedia.com/it/1411854a-3745-40c3-9b96-077df63359e0.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s /kate-spade-new-york-laurel-way-neda-continental-zip-wallet/7726952",
    discount: "(Extra 25% off)",
    rating: "4.8 out of 5 stars",
    reviews: "(12)",
  },
  {
    id: 8,
    name: "MAC Cosmetics Everyday Luxury Mini Lustreglass Lipstick Trio Holiday Gift Set $45 Value",
    price: "$21.75",
    image: "https://n.nordstrommedia.com/it/d519cc2c-16e5-45ee-af3b-8b6164b67a78.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/everyday-luxury-mini-lustreglass-lipstick-trio-holiday-gift-set-45-value/7998298",
    discount: "(25% off)",
    rating: "4.5 out of 5 stars",
    reviews: "(10)",
  },
  {
    id: 9,
    name: "Yves Saint Laurent Vinyl Cream Lip Stain",
    price: "$29.97",
    image: "https://n.nordstrommedia.com/it/0ac4fee8-0027-4d75-9693-81d05843e7f3.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/yves-saint-laurent-vinyl-cream-lip-stain/4386953",
    discount: "(26% off)",
    rating: "4.5 out of 5 stars",
    reviews: "(89)",
  },
  {
    id: 10,
    name: "Leith Initial Pendant Necklace",
    price: "$15.97",
    image: "https://n.nordstrommedia.com/it/be8f0be2-8bef-4241-aa55-a3da7eed601a.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/leith-initial-pendant-necklace/7894285",
    discount: "(57% off)",
    rating: "4.3 out of 5 stars",
    reviews: "(10)",
  },
  {
    id: 11,
    name: "Stanley Ice Flow Aerolight 50-Ounce Transit Bottle",
    price: "$39.97",
    image: "https://n.nordstrommedia.com/it/d2d221cc-b61c-460e-8c70-e2218aececc3.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/stanley-ice-flow-aerolight-50-ounce-transit-bottle/8024305",
    discount: "(27% off)",
    rating: "5 out of 5 stars",
    reviews: "(1)",
  },
  {
    id: 12,
    name: "Patchology Rosé Toes Foot Mask",
    price: "$10.00",
    image: "https://n.nordstrommedia.com/it/a3719cb3-9892-41b0-8e81-f29caac146c7.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/patchology-ros-toes-foot-mask/7258829",
    discount: "",
    rating: "4.6 out of 5 stars",
    reviews: "(135)",
  },
  {
    id: 13,
    name: "Madewell Set of 3 Oval Stacking Rings",
    price: "$15.97",
    image: "https://n.nordstrommedia.com/it/1f005099-2908-4c91-89e2-5904537fb4d8.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/madewell-set-of-3-oval-stacking-rings/6672933",
    discount: "(42% off)",
    rating: "4.4 out of 5 stars",
    reviews: "(5)",
  },
  {
    id: 14,
    name: "NORDSTROM RACK Cashmere Gloves",
    price: "$29.97",
    image: "https://n.nordstrommedia.com/it/87d5cc89-c8dc-4998-898c-56a060db1b2c.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/nordstrom-rack-cashmere-gloves/6167318",
 discount: "(45% off)",
    rating: "4.4 out of 5 stars",
    reviews: "(50)",
  },
  {
    id: 15,
    name: "NORDSTROM RACK Jack Faux Shearling Lined Clog Slipper",
    price: "$12.91",
    image: "https://n.nordstrommedia.com/it/d4983cf3-afe7-4b3b-910d-5f3c0c4fe071.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/nordstrom-rack-jack-faux-shearling-lined-clog-slipper-men/7374341",
    discount: "(Extra 25% off)",
    rating: "4 out of 5 stars",
    reviews: "(16)",
  },
  {
    id: 16,
    name: "MIA Cosette Faux Shearling Sandal",
    price: "$8.98 - $19.97",
    image: "https://n.nordstrommedia.com/it/ccd9b41a-7db8-45d9-8f55-816578b8e143.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/mia-cosette-faux-shearling-sandal-women/7655979",
    discount: "(Extra 25% off select items)",
    rating: "4 out of 5 stars",
    reviews: "(31)",
  },
  {
    id: 17,
    name: "Adornia White Rhodium Plated Swarovski Crystal Accented Lariat Bracelet",
    price: "$23.98",
    image: "https://n.nordstrommedia.com/it/ced19022-9bf2-4f94-adfd-e8044ee93d57.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/adornia-white-rhodium-plated-swarovski-crystal-accented-lariat-bracelet/5995103",
    discount: "(84% off)",
    rating: "3.5 out of 5 stars",
    reviews: "(78)",
  },
  {
    id: 18,
    name: "Abound Sonya Faux Fur Slipper",
    price: "$19.97",
    image: "https://n.nordstrommedia.com/it/c7f41ea0-a408-42f3-aaaf-cf08d7a81f91.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/abound-sonya-faux-fur-slipper-women/7853283",
    discount: "(33% off)",
    rating: "4.3 out of 5 stars",
    reviews: "(38)",
  },
  {
    id: 19,
    name: "Too Faced Pillow Balm Pop Rich & Creamy Lip Balm Trio",
    price: "$24.97",
    image: "https://n.nordstrommedia.com/it/d621b197-8221-438d-b060-9c5560227e19.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/too-faced-pillow-balm-pop-rich-creamy-lip-balm-trio/7262178",
    discount: "(26% off)",
    rating: "5 out of 5 stars",
    reviews: "(2)",
  },
  {
    id: 20,
    name: "Crosley Radio Mini Record Player Portable Bluetooth Speaker",
    price: "$19.97",
    image: "https://n.nordstrommedia.com/it/5d06968c-394a-48e9-ac23-5160fbac36aa.jpeg?q=45&dpr=2&h=365.31&w=230",
    link: "/s/crosley-radio-mini-record-player-portable-bluetooth-speaker/7902216",
    discount: "",
    rating: "4.8 out of 5 stars",
    reviews: "(13)",
  },
   
  // Add more products as needed
];


const ProductRecommendations = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const visibleProducts = products.slice(
    currentPage * itemsPerPage,
    ( currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="product-recommendations">
      <div className="slider">
        <button id="nav-button" className="prev" onClick={handlePrev} disabled={currentPage === 0}>
          &#10094; 
        </button>
        <ul className="product-list">
          {visibleProducts.map((product) => (
            <li key={product.id} className="product-item">
              <a href={product.link} aria-label={product.name}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.price} {product.discount}</p>
                  <span>{product.rating} {product.reviews}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <button id="nav-button"  className="next" onClick={handleNext} disabled={currentPage === totalPages - 1}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductRecommendations;