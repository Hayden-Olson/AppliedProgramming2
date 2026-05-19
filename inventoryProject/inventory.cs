using System;
using System.Collections.Generic;
 
namespace InventorySystem
{
 
    class Inventory
    {

    
 
        static void ShowMenu()
        {
            Console.WriteLine("--- MENU ---");
            Console.WriteLine("1. View Inventory");
            Console.WriteLine("2. Add Item");
            Console.WriteLine("3. Update Quantity");
            Console.WriteLine("4. Remove Item");
            Console.WriteLine("5. Exit");
            Console.Write("\nEnter choice: ");
        }
 
        static void ViewInventory()
        {
            Console.WriteLine("\n--- INVENTORY ---");
            if (inventory.Count == 0)
            {
                Console.WriteLine("No items in inventory.\n");
                return;
            }
 
            foreach (Item item in inventory)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
        }
 
        static void AddItem()
        {
            Console.WriteLine("\n--- ADD ITEM ---");
 
            Console.Write("Item name: ");
            string name = Console.ReadLine();
 
            Console.Write("Quantity: ");
            int quantity = int.Parse(Console.ReadLine());
 
            Console.Write("Price: $");
            double price = double.Parse(Console.ReadLine());
 
            inventory.Add(new Item(nextId++, name, quantity, price));
            Console.WriteLine("Item added!\n");
        }
 
        static void UpdateQuantity()
        {
            Console.WriteLine("\n--- UPDATE QUANTITY ---");
            ViewInventory();
 
            if (inventory.Count == 0) return;
 
            Console.Write("Enter item ID: ");
            int id = int.Parse(Console.ReadLine());
 
            Item item = inventory.Find(i => i.Id == id);
            if (item == null)
            {
                Console.WriteLine("Item not found.\n");
                return;
            }
 
            Console.Write($"New quantity for '{item.Name}': ");
            item.Quantity = int.Parse(Console.ReadLine());
            Console.WriteLine("Quantity updated!\n");
        }
 
        static void RemoveItem()
        {
            Console.WriteLine("\n--- REMOVE ITEM ---");
            ViewInventory();
 
            if (inventory.Count == 0) return;
 
            Console.Write("Enter item ID to remove: ");
            int id = int.Parse(Console.ReadLine());
 
            Item item = inventory.Find(i => i.Id == id);
            if (item == null)
            {
                Console.WriteLine("Item not found.\n");
                return;
            }
 
            inventory.Remove(item);
            Console.WriteLine($"'{item.Name}' removed.\n");
        }
    }
}