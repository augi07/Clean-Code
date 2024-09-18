// Produktliste
let products = [
    { id: 1, name: "Laptop", cost: 999 },
    { id: 2, name: "Smartphone", cost: 599 },
    { id: 3, name: "Headphones", cost: 199 }
  ];
  
  // Produkt nach ID finden
  function getProductById(id) {
    return products.find(product => product.id === id) || null;
  }
  
  // Neues Produkt hinzufügen
  function addProduct(name, cost) {
    const maxId = Math.max(...products.map(product => product.id));
    products.push({ id: maxId + 1, name, cost });
  }
  
  // Liste der Produkte ausgeben
  function listProducts() {
    products.forEach(product => {
      console.log(`${product.name} costs ${product.cost}€`);
    });
  }
  
  // Produkt abrufen und hinzufügen
  let product = getProductById(2);
  console.log(product);
  
  addProduct("Tablet", 399);
  listProducts();
  