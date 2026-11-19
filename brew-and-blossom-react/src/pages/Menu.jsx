export default function Menu() {
  return (
    <>
      {/* PAGE HERO BANNER */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="brand-badge">Freshly Prepared Daily</span>
          <h1 className="page-title">Brew &amp; Blossom Menu</h1>
          <p className="page-description">
            Explore our full selection of handcrafted coffees, teas, artisan
            breads, and boutique desserts.
          </p>
        </div>
      </section>

      {/* MENU CONTENT CONTAINER */}
      <main className="menu-main-wrapper">
        {/* SECTION 1: CAKES & PASTRIES */}
        <section className="menu-section light-section">
          <div className="container">
            <div className="menu-category-header">
              <h2>Cakes &amp; Pastries</h2>
              <p>
                Delicate, buttery layers and rich house-made cream cakes baked
                fresh every morning.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/croissant.png"
                    alt="Classic Butter Croissant"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Classic Butter Croissant</h3>
                  <p>Flaky, golden layers made with 100% European butter.</p>
                  <span className="menu-item-price">$4.25</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/coconut.png"
                    alt="Coconut Lilikoi Puff Pastry"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Coconut Lilikoi Puff Pastry</h3>
                  <p>
                    Crisp, flaky puff pastry filled with tropical passion fruit
                    curd and toasted coconut flakes.
                  </p>
                  <span className="menu-item-price">$4.95</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img src="/images/tart.png" alt="Strawberry Fruit Tart" />
                </div>
                <div className="menu-card-body">
                  <h3>Strawberry Fruit Tart</h3>
                  <p>
                    Sweet vanilla custard paired with fresh glazed strawberries in
                    a crisp tart shell.
                  </p>
                  <span className="menu-item-price">$5.95</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ARTISAN SAVORY BREADS & BAKES */}
        <section className="menu-section dark-section">
          <div className="container">
            <div className="menu-category-header dark-header">
              <h2>Artisan Savory Breads &amp; Bakes</h2>
              <p>
                Warm, hearth-baked savory specialties packed with bold spices,
                cheeses, and smoked bacon.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/jalapeno.png"
                    alt="Garlic Jalapeño Cheddar Sourdough"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Garlic Jalapeño Cheddar Sourdough</h3>
                  <p>
                    Artisan sourdough loaded with roasted garlic, diced fresh
                    jalapeños, and melted aged cheddar cheese.
                  </p>
                  <span className="menu-item-price">$7.75</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/bacon.png"
                    alt="Bacon & Gruyère Croissant Pinwheel"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Bacon &amp; Gruyère Pinwheel</h3>
                  <p>
                    Savory rolled puff pastry layered with thick-cut smoked
                    bacon, melted Gruyère, and cracked black pepper.
                  </p>
                  <span className="menu-item-price">$6.50</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/focaccia.png"
                    alt="Rosemary Garlic Focaccia"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Rosemary Garlic Focaccia</h3>
                  <p>
                    Oven-baked flatbread infused with roasted garlic confit,
                    extra virgin olive oil, and sea salt flakes.
                  </p>
                  <span className="menu-item-price">$6.25</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INDIAN FUSION DESSERTS, TIRAMISU & TRES LECHES */}
        <section className="menu-section light-section">
          <div className="container">
            <div className="menu-category-header">
              <h2>Global Classics &amp; Indian Fusion</h2>
              <p>
                Signature tiramisu, tres leches, and unique desserts infused with
                traditional Indian spices.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img src="/images/tiramisu.png" alt="Tiramisu Slice" />
                </div>
                <div className="menu-card-body">
                  <h3>Tiramisu Slice</h3>
                  <p>
                    Espresso-soaked ladyfingers layered with rich mascarpone
                    cream and cocoa dusting.
                  </p>
                  <span className="menu-item-price">$6.50</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/tres.png"
                    alt="Strawberry Tres Leches Cake"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Strawberry Tres Leches Cake</h3>
                  <p>
                    Ultra-moist sponge cake soaked in three sweet milks, topped
                    with fresh whipped cream and berries.
                  </p>
                  <span className="menu-item-price">$6.75</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/mango.png"
                    alt="Mango Cardamom Pudding"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Mango Cardamom Pudding</h3>
                  <p>
                    Silky sweet mango puree layered with cardamom-infused cream
                    and crushed pistachios.
                  </p>
                  <span className="menu-item-price">$6.25</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COFFEES & ESPRESSO */}
        <section className="menu-section dark-section">
          <div className="container">
            <div className="menu-category-header dark-header">
              <h2>Specialty Coffees &amp; Espresso</h2>
              <p>
                Single-origin roasts and masterfully pulled shots crafted by
                expert baristas.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/lavender.png"
                    alt="Honey Lavender Latte"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Honey Lavender Latte</h3>
                  <p>
                    Double-shot espresso paired with organic local honey,
                    lavender infusion, and steamed milk.
                  </p>
                  <span className="menu-item-price">$5.75</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/pour.png"
                    alt="Single-Origin Pour Over"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Single-Origin Pour Over</h3>
                  <p>
                    Hand-poured seasonal single-origin coffee showcasing distinct
                    fruit and floral notes.
                  </p>
                  <span className="menu-item-price">$4.50</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img src="/images/tonic.png" alt="Espresso Tonic" />
                </div>
                <div className="menu-card-body">
                  <h3>Espresso Tonic</h3>
                  <p>
                    Refreshing chilled craft tonic water poured over ice and
                    topped with a double espresso shot.
                  </p>
                  <span className="menu-item-price">$4.75</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TEAS & BOTANICAL INFUSIONS */}
        <section className="menu-section light-section">
          <div className="container">
            <div className="menu-category-header">
              <h2>Teas &amp; Botanical Infusions</h2>
              <p>
                Soothing organic loose-leaf teas, authentic chai, and iced
                botanical blends.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/matcha.png"
                    alt="Matcha Blossom Latte"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Matcha Blossom Latte</h3>
                  <p>
                    Ceremonial-grade Japanese matcha whisked with steamed milk
                    and a touch of vanilla bean.
                  </p>
                  <span className="menu-item-price">$5.50</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/chai.png"
                    alt="Aromatic Masala Chai Latte"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Aromatic Masala Chai Latte</h3>
                  <p>
                    Slow-steeped black tea infused with cardamom, ginger,
                    cinnamon, cloves, and steamed milk.
                  </p>
                  <span className="menu-item-price">$5.25</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card">
                <div className="menu-img-container">
                  <img
                    src="/images/hibiscus.png"
                    alt="Hibiscus Berry Iced Tea"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Hibiscus Berry Iced Tea</h3>
                  <p>
                    Refreshing tart hibiscus flower tea steeped with dried
                    berries, mint leaves, and raw cane sugar.
                  </p>
                  <span className="menu-item-price">$4.75</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SMALL BITE-SIZED DESSERTS */}
        <section className="menu-section dark-section">
          <div className="container">
            <div className="menu-category-header dark-header">
              <h2>Small Bite-Sized Desserts</h2>
              <p>
                Delightful miniature treats and macarons perfect for sampling or
                gifting.
              </p>
            </div>
            <div className="menu-grid">
              {/* Item 1 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/mac.png"
                    alt="Assorted French Macarons"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Assorted French Macarons</h3>
                  <p>
                    Delicate almond meringue shells filled with rich ganache
                    (box of 4 assorted flavors).
                  </p>
                  <span className="menu-item-price">$8.50</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/dark.png"
                    alt="Mini Dark Chocolate Truffles"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Mini Dark Chocolate Truffles</h3>
                  <p>
                    Hand-rolled single-origin dark chocolate ganache dusted in
                    Dutch cocoa powder.
                  </p>
                  <span className="menu-item-price">$5.00</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="menu-card dark-card">
                <div className="menu-img-container">
                  <img
                    src="/images/mini.png"
                    alt="Mini Berry Fruit Petites"
                  />
                </div>
                <div className="menu-card-body">
                  <h3>Mini Berry Fruit Petites</h3>
                  <p>
                    Bite-sized butter pastry cups filled with pastry cream and
                    fresh summer berries.
                  </p>
                  <span className="menu-item-price">$6.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}