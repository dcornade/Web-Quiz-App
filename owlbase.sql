-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2020 at 05:19 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `owlbase`
--

-- --------------------------------------------------------

--
-- Table structure for table `tallon`
--

CREATE TABLE `tallon` (
  `sln` int(2) NOT NULL,
  `quest` varchar(400) NOT NULL,
  `op1` varchar(200) NOT NULL,
  `op2` varchar(200) NOT NULL,
  `op3` varchar(200) NOT NULL,
  `op4` varchar(200) NOT NULL,
  `ans` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tallon`
--

INSERT INTO `tallon` (`sln`, `quest`, `op1`, `op2`, `op3`, `op4`, `ans`) VALUES
(1, 'Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects?', 'Public', 'Private', 'Protected', 'Internal', 'Public'),
(2, 'Which of the following operator returns the address of an variable in C#?', 'sizeof', 'typeof', '&', '@', '&'),
(3, 'CLR is the .NET equivalent of _________.', 'Java Virtual Machine', 'Common Language Runtime', 'Common Type System', 'Common Language Specification', 'Common Language Runtime'),
(4, 'In C#, a subroutine is called a ________.', 'Function', 'Metadata', 'Method', 'Managed Code', 'Method'),
(5, 'All C# applications begin execution by calling the _____ method.', 'Class()', 'Main()', 'SubMain()', 'Namespace', 'Main()'),
(6, 'A _______ is an identifier that denotes a storage location.', 'Constant', 'Reference type', 'Variable', 'Object', 'Variable'),
(7, '_________ are reserved, and cannot be used as identifiers.', 'Keywords', 'literal', 'variables', 'Identifiers', 'Keywords'),
(8, 'Boxing converts a value type on the stack to an ______ on the heap.', 'Bool type', 'Instance type', 'Class type', 'Object type', 'Object type'),
(9, 'The character pair ?: is a________________available in C#.', 'Unary operator', 'Ternary operator', 'Decision operator', 'Functional operator', 'Ternary operator'),
(10, 'An _______ is a symbol that tells the computer to perform certain mathematical or logical manipulations.', 'Operator', 'Expression', 'Condition', 'Logic', 'Operator'),
(11, 'Arrays in C# are ______ objects.', 'Reference', 'Logical', 'Value', 'Arithmetic', 'Reference'),
(12, '_______ variables are visible only in the block they are declared.', 'System', 'Global', 'Local', 'Console', 'Local'),
(13, 'A structure in C# provides a unique way of packing together data of ______ types.', 'Different', 'Same', 'Invoking', 'Calling', 'Different'),
(14, 'Struct’s data members are ____________ by default.', 'Protected', 'Public', 'Private', 'Default', 'Private'),
(15, 'The methods that have the same name, but different parameter lists and different definitions is called______.', 'Method Overloading', 'Method Overriding', 'Method Overwriting', 'Method Overreading', 'Method Overloading'),
(16, 'The theory of _____ implies that user can control the access to a class, method, or variable.', 'Data hiding', 'Encapsulation', 'Information Hiding', 'Polymorphism', 'Encapsulation'),
(17, 'Inheritance is ______ in nature.', 'Commutative', 'Associative', 'Transitive', 'Iterative', 'Transitive'),
(18, 'In C#, having unreachable code is always an _____.', 'Method', 'Function', 'Iterative', 'Error', 'Error'),
(19, 'Which of the following statements is incorrect about delegate?', 'Delegates are reference types.', 'Only one method can be called using a delegate.', 'Delegates are object oriented.', 'Delegates are type-safe.', 'Only one method can be called using a delegate.'),
(20, ' Which of the following is NOT an Arithmetic operator in C#.NET?', '+', '/', '&', '-', '&'),
(21, 'Which of the following is NOT a Bitwise operator in C#.NET?', '&', '|', '^', '<<', '<<'),
(22, 'Which of the following is NOT a namespace in the .NET Framework Class Library?', 'System.Security', 'System.Process', 'System.Threading', 'System.Drawing', 'System.Process'),
(23, 'Which of the following is NOT a .NET Exception class?', 'StackMemoryException', 'Exception', 'InvalidOperationException', 'OutOfMemoryException', 'StackMemoryException'),
(24, 'Which of the following is the Object Oriented way of handling run-time errors?', 'OnError', 'Heresult', 'Error codes', 'Exceptions', 'Exceptions'),
(25, 'Which of the following keyword is used to overload user-defined types by defining static member functions?', 'op', 'opoverload', 'operator', 'operatoroverload', 'operator'),
(26, 'Which of the following statements about a String is correct?', 'A String is created on the stack.', 'Whether a String is created on the stack or the heap depends on the length of the String.', 'A String is created on the heap.', 'A String is a primitive.', 'A String is created on the heap.'),
(27, 'In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?', 'Compiler', 'CLR', 'Linker', 'Loader', 'CLR'),
(28, 'Which of the following should be used to implement a \'Has a\' relationship between two entities?', 'Polymorphism', 'Encapsulation', 'Inheritance', 'Containership', 'Containership'),
(29, 'The reason that C# does not support multiple inheritances is because of ______.', 'Name collision', 'Method collision', 'Function collision', 'Interface collision', 'Name collision'),
(30, 'What is the wild card character in the SQL \"like\" statement?', '* (Asterisk)', '% (Percent)', '# (Pound)', '$ (Dollar)', '% (Percent)'),
(31, 'Features of Read only variables', 'Declaration and initialization is separated', 'It is allocated at compile time', 'It is allocated at runtime', 'all of the above', 'all of the above'),
(32, 'Which of the following .NET components can be used to remove unused references from the managed heap?', 'Class Loader', 'Garbage Collector', 'CTS', 'CLR', 'Garbage Collector'),
(33, 'A Constructor', 'is a method of a class ', 'is used to create objects ', 'Represents the behavior of an object ', 'maybe overloaded ', 'is a method of a class '),
(34, 'Find any errors in the following BankAccount constructor: Public int BankAccount() { balance = 0; }', 'Name ', 'Formal parameters ', 'Return type', 'No errors ', 'Return type'),
(35, 'Every class directly or indirectly extends the______class.', 'System ', 'Object ', 'Drawing ', 'Console ', 'Object '),
(36, 'An abstract class', 'may contain instance variables ', 'may extend another class ', 'Can\'t be Overloaded', 'all of the above ', 'may contain instance variables '),
(37, 'Which of the following statements is correct for Constructor?', 'If we provide a one-argument constructor then the compiler still provides a zero-argument constructor.', 'Static constructors can use optional arguments.', 'Overloaded constructors cannot use optional arguments.', 'If we do not provide a constructor, then the compiler provides a zero-argument constructor.', 'If we do not provide a constructor, then the compiler provides a zero-argument constructor.'),
(38, 'Which of the following statements are correct about static functions?', 'Static functions are outside the class scope.', 'Static functions are invoked using class', 'Static functions can access static data as well as instance data.', 'Static functions are invoked using objects of a class.', 'Static functions are invoked using class'),
(39, 'Which of the following statements is correct about Managed Code?', 'Managed code is the code that is compiled by the JIT compilers.', 'Managed code is the code where resources are Garbage Collected.', 'Managed code is the code that is written to target the services of the CLR.', 'Managed code is the code that runs on top of Windows.', 'Managed code is the code that is written to target the services of the CLR.'),
(40, 'Code that targets the Common Language Runtime is known as', 'Unmanaged', 'Managed Code', 'Native Code', 'Legacy', 'Managed Code'),
(41, 'How many values is a function capable of returning?', '1', '0', 'Any number of values.', 'Depends upon how many params arguments does it use.', '1'),
(42, 'Which of the following CANNOT occur multiple number of times in a program?', 'namespace', 'Entrypoint', 'Class', 'Function', 'Entrypoint'),
(43, 'Which of the following statements is correct about Interfaces used in C#.NET?', 'All interfaces are derived from an Object class.', 'All interfaces are derived from an Object interface.', 'Interfaces can be inherited.', 'Interfaces can contain only method declaration.', 'Interfaces can be inherited.'),
(44, 'The CLR is physically represented by an assembly named _______.', 'mscoree.dll', 'mcoree.dll', 'msoree.dll', 'mscor.dll', 'mscoree.dll'),
(45, 'C# treats the multiple catch statements like cases in a _____________ statement.', 'If', 'Switch', 'For', 'While', 'Switch'),
(46, 'The___________keyword is new to C# 4.0, and is used to tell the compiler that a variable\'s type can change or that it is not known until runtime.', 'Covariance', 'Contravariance', 'Object', 'dynamic', 'dynamic'),
(47, '_______ methods are not supported for dynamic types.', 'Anonymous', 'Static', 'Extension', 'Abstract', 'Extension'),
(48, 'Which of the following is/are not types of arrays in C#?', 'Single-Dimensional', 'Jazzed arrays', 'Jagged arrays', 'Multidimensional', 'Jazzed arrays'),
(49, 'Managed methods will be marked as ------------ in MSIL code', 'mscorjit', 'cil', 'dgclr', 'None', 'cil'),
(50, 'Private Button print = new button();', 'creates a button control', 'initializes a button control ', 'Calling Button Control', 'Both b and c', 'creates a button control');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
