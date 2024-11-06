const menuItems = [
    { category: "Appetizers", items: [
      { name: "French Onion Soup", price: "$12" },
      { name: "Escargots de Bourgogne", price: "$16" },
      { name: "Cheese Board", price: "$18" },
    ]},
    { category: "Main Courses", items: [
      { name: "Coq au Vin", price: "$28" },
      { name: "Beef Bourguignon", price: "$32" },
      { name: "Ratatouille", price: "$24" },
    ]},
    { category: "Desserts", items: [
      { name: "Crème Brûlée", price: "$10" },
      { name: "Tarte Tatin", price: "$12" },
      { name: "Chocolate Mousse", price: "$9" },
    ]},
  ]
  
  export default function Menu() {
    return (
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-semibold mb-4 text-accent">{category.category}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.name} className="mb-2 flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-accent">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }