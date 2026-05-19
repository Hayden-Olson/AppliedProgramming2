namespace InventorySystem
{
    class Program
    {
        static List<Item> inventory = new List<Item>();
        static int nextId = 1;
 
        static void Main(string[] args)
        {
            Console.WriteLine("============================");
            Console.WriteLine("     INVENTORY SYSTEM       ");
            Console.WriteLine("============================\n");
 
            bool running = true;
            while (running)
            {
                ShowMenu();
                string choice = Console.ReadLine();
 
                switch (choice)
                {
                    case "1": ViewInventory(); break;
                    case "2": AddItem(); break;
                    case "3": UpdateQuantity(); break;
                    case "4": RemoveItem(); break;
                    case "5":
                        Console.WriteLine("\nGoodbye!");
                        running = false;
                        break;
                    default:
                        Console.WriteLine("\nInvalid option. Please try again.\n");
                        break;
                }
            }
        }
    }
}