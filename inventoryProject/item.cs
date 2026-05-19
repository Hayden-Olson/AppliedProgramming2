namespace InventorySystem
{
    // Represents a single item in the inventory
    class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }

        public Item(int id, string name, int quantity, double price)
        {
            Id = id;
            Name = name;
            Quantity = quantity;
            Price = price;
        }

        public override string ToString()
        {
            return $"[{Id}] {Name,-20} Qty: {Quantity,-5} Price: ${Price:F2}";
        }
    }
}
