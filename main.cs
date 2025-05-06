public class Calculator
{
    public int Add(int num1, int num2)
    {
        return num1 + num2;
    }

    public void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Calculator calc = new Calculator();
        int sumResult = calc.Add(8, 4);
        Console.WriteLine($"Sum: {sumResult}");
        calc.Greet("Alice");
    }
}
