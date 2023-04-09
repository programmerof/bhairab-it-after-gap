export default [

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Differentiate analog computer with digital computer. What is CPU and how its works? What does an instruction cycle in CPU consists of?",
        "answer": "Analog computer and digital computer are two types of computing systems that operate differently. Analog computers operate on continuous physical variables, such as voltage, current, and resistance, and use mathematical equations to solve problems. They were widely used in scientific and engineering applications until the development of digital computers. Analog computers can perform calculations very quickly, but they are not as precise or versatile as digital computers. Digital computers, on the other hand, operate on discrete values represented by binary digits (bits), which are either 0 or 1. They use complex algorithms and software to perform a wide range of tasks and are capable of storing and processing vast amounts of data with high accuracy and precision. The CPU, or central processing unit, is the brain of a computer. It is a complex electronic circuit that processes instructions and performs calculations. The CPU consists of two main components: the control unit and the arithmetic logic unit (ALU). The control unit retrieves instructions from memory and decodes them, determining which operations to perform and which data to use. The ALU performs mathematical and logical operations, such as addition, subtraction, multiplication, and comparison. The instruction cycle in the CPU consists of several steps: Fetch: The CPU retrieves the next instruction from memory. Decode: The CPU decodes the instruction, determining what operation to perform. Execute: The CPU performs the operation specified by the instruction. Store: The CPU stores the result of the operation in memory or in a register. After the instruction is executed, the CPU returns to the fetch stage and repeats the cycle with the next instruction. This process continues until the program is complete.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "What is computer Network? Discuss different types of data transmission media in computer network with their advantages and disadvantages.",
        "answer": "A computer network is a group of computers linked to each other that enables the computer to communicate with another computer and share their resources, data, and applications. A computer network can be categorized by their size. A computer network is mainly of four types: LAN(Local Area Network) PAN(Personal Area Network) MAN(Metropolitan Area Network) WAN(Wide Area Network) In data communication terminology, a transmission medium is a physical path between the transmitter and the receiver i.e. it is the channel through which data is sent from one place to another. Transmission Media is broadly classified into the following types: 1. Guided Media: It is also referred to as Wired or Bounded transmission media. Signals being transmitted are directed and confined in a narrow pathway by using physical links. Features: High Speed Secure Used for comparatively shorter distances There are 3 major types of Guided Media: (i) Twisted Pair Cable – It consists of 2 separately insulated conductor wires wound about each other. Generally, several such pairs are bundled together in a protective sheath. (ii) Coaxial Cable – It has an outer plastic covering containing an insulation layer made of PVC or Teflon and 2 parallel conductors each having a separate insulated protection cover. The coaxial cable transmits information in two modes: Baseband mode(dedicated cable bandwidth) and Broadband mode(cable bandwidth is split into separate ranges). Cable TVs and analog television networks widely use Coaxial cables. (iii) Optical Fiber Cable – It uses the concept of reflection of light through a core made up of glass or plastic. The core is surrounded by a less dense glass or plastic covering called the cladding. It is used for the transmission of large volumes of data. The cable can be unidirectional or bidirectional. The WDM (Wavelength Division Multiplexer) supports two modes, namely unidirectional and bidirectional mode. The advantage and disadvantage of guided media are Advantages The cost of guided media is very low (inexpensive) and easily available. This is very Flexible and Lightweight. Very easy to set up and install. Disadvantages Bandwidth is very low in guided media. Susceptible to interference and noise- (Noise is an electrical disturbance that can degrade communication) 2. Unguided Media: It is also referred to as Wireless or Unbounded transmission media. No physical medium is required for the transmission of electromagnetic signals. Features: The signal is broadcasted through air Less Secure Used for larger distances There are 3 types of Signals transmitted through unguided media: (i) Radio waves – These are easy to generate and can penetrate through buildings. The sending and receiving antennas need not be aligned. Frequency Range:3KHz – 1GHz. AM and FM radios and cordless phones use Radio waves for transmission. (ii) Microwaves – It is a line of sight transmission i.e. the sending and receiving antennas need to be properly aligned with each other. The distance covered by the signal is directly proportional to the height of the antenna. Frequency Range:1GHz – 300GHz. These are majorly used for mobile phone communication and television distribution. (iii) Infrared – Infrared waves are used for very short distance communication. They cannot penetrate through obstacles. This prevents interference between systems. Frequency Range:300GHz – 400THz. It is used in TV remotes, wireless mouse, keyboard, printer, etc. The advantage and disadvantage of unguided media are Advantages: Use for long distance communication. High speed data transmission. Many receiver stations can receive signals from same sender station. Disadvantages: Very costly. Radio waves travel through Lowest portion of atmosphere",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "What is database management system? Why database management systems are used. Discuss database system architecture.",
        "answer": "A database management system (DBMS) is software that allows users to create, maintain, and manipulate databases. A database is a collection of data organized in a way that allows efficient storage, retrieval, and manipulation of the data. A DBMS provides an interface between the user and the database, allowing users to interact with the data in a controlled and secure manner. Database management systems are used to manage large amounts of data efficiently and accurately. They provide tools for data storage, retrieval, and manipulation, and ensure the consistency, security, and integrity of the data. DBMSs are widely used in businesses, organizations, and institutions that deal with large amounts of data, such as banks, hospitals, universities, and government agencies. Database system architecture refers to the overall design of a DBMS. The architecture includes the components of the system, their interrelationships, and the rules and protocols that govern the system. A typical DBMS architecture consists of the following components: Database: The database is the collection of data that is managed by the DBMS. It includes the data itself, as well as metadata, which describes the structure and properties of the data. DBMS Engine: The DBMS engine is the core of the DBMS. It is responsible for processing queries and commands, and for managing the storage and retrieval of data. Storage Manager: The storage manager is responsible for managing the storage of data on the physical storage devices, such as disks. Query Processor: The query processor is responsible for processing user queries and generating the execution plan. Transaction Manager: The transaction manager is responsible for managing transactions, which are groups of database operations that are executed as a single unit. Data Access Layer: The data access layer is the interface between the application programs and the DBMS. It provides an abstraction layer that shields the application from the complexities of the DBMS. User Interface: The user interface is the part of the DBMS that allows users to interact with the database. It provides tools for data entry, retrieval, and manipulation. The architecture of a DBMS determines its performance, scalability, and reliability. A well-designed architecture can provide efficient data management and processing, while a poorly-designed architecture can result in poor performance, data inconsistency, and security vulnerabilities.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "What is cache memory? How it is different from register?",
        "answer": "Cache memory and register are both types of memory used in computer systems, but they differ in terms of their purpose, size, and speed. Cache memory is a small, high-speed memory that is used to store frequently accessed data and instructions. It is located between the processor and the main memory, and is used to reduce the time it takes to access data from the main memory. When the processor requests data, the cache memory checks if the data is already stored in the cache. If it is, the data is retrieved from the cache, which is much faster than retrieving it from the main memory. If the data is not in the cache, it is retrieved from the main memory and stored in the cache for future use. Registers, on the other hand, are small, high-speed memory locations within the processor itself. They are used to store data that is currently being processed by the CPU. Registers are used to hold operands, intermediate results, and addresses of memory locations. The advantage of registers is their high speed - data can be read from or written to a register in a single clock cycle. The main differences between cache memory and registers are: Purpose: Cache memory is used to speed up data access from the main memory, while registers are used to hold data that is being processed by the CPU. Size: Cache memory is larger than registers, typically ranging from a few kilobytes to several megabytes. Registers, on the other hand, are much smaller, typically ranging from a few bytes to a few hundred bytes. Speed: Registers are faster than cache memory, as they are located within the processor itself and can be accessed in a single clock cycle. Cache memory, while still very fast, is slower than registers as it is located outside the processor. In summary, cache memory and registers are both high-speed memory used in computer systems, but they have different purposes and characteristics. Cache memory is used to speed up data access from the main memory, while registers are used to hold data that is currently being processed by the CPU. Registers are faster than cache memory, but they are also much smaller in size.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Discuss about the source data entry device with example.",
        "answer": "A source data entry device is any device that is used to input data into a computer system. There are many types of source data entry devices, each designed for a specific purpose and type of data. Some common examples of source data entry devices are: Keyboard: The keyboard is the most commonly used source data entry device for inputting text into a computer. It allows users to type letters, numbers, and other characters into a document or form. Mouse: The mouse is a pointing device that allows users to interact with graphical user interfaces (GUIs) by moving a cursor on the screen and clicking buttons. It can also be used for data entry by clicking on buttons, menus, or other graphical elements. Touchscreen: A touchscreen is a display that can detect and respond to touch inputs. It is commonly used in mobile devices, kiosks, and point-of-sale systems for data entry. Barcode scanner: A barcode scanner is a device that reads barcodes, which are unique patterns of lines and spaces used to identify products and other items. It is commonly used in retail and inventory management for data entry. Magnetic stripe reader: A magnetic stripe reader is a device that reads the magnetic stripe on credit cards, identification cards, and other similar items. It is commonly used in payment processing and access control for data entry. Optical character recognition (OCR) scanner: An OCR scanner is a device that can read printed text and convert it into digital text. It is commonly used for data entry in document management and archival systems. Voice recognition software: Voice recognition software allows users to input data by speaking into a microphone. It is commonly used in dictation software, virtual assistants, and other speech-to-text applications. These are just a few examples of source data entry devices. The choice of device depends on the type of data being input, the environment in which it is being used, and the user's preferences and requirements.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": " How binary addition is done? Show binary addition of (11001) with (11011).        ",
        "answer": "Binary addition is done in a similar way to decimal addition, but using a base of 2 instead of 10. Here's how you can add two binary numbers (11001) and (11011): 11001 11011 111100 Start by adding the rightmost bits, which are both 1. Write down 0 in the first position of the sum, and carry 1 to the next column. Then add the next pair of bits, which are 0 and 1, along with the carried 1. This gives you 0 in the second position of the sum, and you carry 1 again. Then add the next pair of bits, which are both 1, along with the carried 1. This gives you 1 in the third position of the sum, and you carry 1 again. Continue adding the remaining pairs of bits and any carried ones until you reach the leftmost bit. The final result of the addition is 111100 in binary, which is equivalent to the decimal number 30.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "What is software? How it differs from hardware? Why software is needed?  ",
        "answer": "Software refers to a collection of programs, data, and instructions that tell a computer or other digital device what to do. It's the intangible part of a computer system that includes applications, operating systems, utilities, and programming languages. Hardware, on the other hand, refers to the physical components of a computer system, such as the central processing unit (CPU), memory, storage devices, input/output devices, and other components that can be touched and physically manipulated. The key difference between software and hardware is that software is a set of instructions that the hardware executes. Without software, hardware is just a collection of physical components that cannot perform any tasks. In contrast, software cannot run without hardware, as it needs the processing power and storage capacity provided by hardware to operate. Software is needed for a variety of reasons. It provides the functionality that users need to perform tasks, such as word processing, web browsing, or gaming. It also controls the underlying hardware, managing resources, allocating memory and processing power, and providing access to peripherals such as printers, scanners, and cameras. Software also enables developers to create new applications and services, driving innovation and advancing technology. Overall, software is essential for the operation and management of modern digital devices, making them more versatile, powerful, and useful.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Describe the functionalities of operating system.",
        "answer": "An operating system is a program on which application programs are executed and acts as a communication bridge (interface) between the user and the computer hardware. Important functions of an operating System: 1. Security – The operating system uses password protection to protect user data and similar other techniques. it also prevents unauthorized access to programs and user data. 2. Control over system performance – Monitors overall system health to help improve performance. records the response time between service requests and system response to having a complete view of the system health. This can help improve performance by providing important information needed to troubleshoot problems. 3.Job accounting – Operating system Keeps track of time and resources used by various tasks and users, this information can be used to track resource usage for a particular user or group of users. 4.Error detecting aids – The operating system constantly monitors the system to detect errors and avoid the malfunctioning of a computer system. 5.Coordination between other software and users – Operating systems also coordinate and assign interpreters, compilers, assemblers, and other software to the various users of the computer systems. 6.Memory Management – The operating system manages the Primary Memory or Main Memory. Main memory is made up of a large array of bytes or words where each byte or word is assigned a certain address. Main memory is fast storage and it can be accessed directly by the CPU. For a program to be executed, it should be first loaded in the main memory. An Operating System performs the following activities for memory management: It keeps track of primary memory, i.e., which bytes of memory are used by which user program. The memory addresses that have already been allocated and the memory addresses of the memory that has not yet been used. In multiprogramming, the OS decides the order in which processes are granted access to memory, and for how long. It Allocates the memory to a process when the process requests it and deallocates the memory when the process has terminated or is performing an I/O operation. 7.Processor Management – In a multi-programming environment, the OS decides the order in which processes have access to the processor, and how much processing time each process has. This function of OS is called process scheduling. An Operating System performs the following activities for processor management. Keeps track of the status of processes. The program which performs this task is known as a traffic controller. Allocates the CPU that is a processor to a process. De-allocates processor when a process is no more required. 8.Device Management – An OS manages device communication via their respective drivers. It performs the following activities for device management. Keeps track of all devices connected to the system. designates a program responsible for every device known as the Input/Output controller. Decides which process gets access to a certain device and for how long. Allocates devices in an effective and efficient way. Deallocates devices when they are no longer required. 9.File Management – A file system is organized into directories for efficient or easy navigation and usage. These directories may contain other directories and other files. An Operating System carries out the following file management activities. It keeps track of where information is stored, user access settings and status of every file, and more… These facilities are collectively known as the file system.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "What is internet? Describe about the internet architecture        ",
        "answer": "The Internet is a vast network that connects computers all over the world. Through the Internet, people can share information and communicate from anywhere with an Internet connection. The architecture of the Internet is ever-changing due to continuous changes in the technologies as well as the nature of the service provided. The heterogeneity and vastness of the Internet make it difficult to describe every aspect of its architecture. The overall architecture can be described in three levels − Backbone ISP (Internet Service Provider) Regional ISPs Clients The following diagram shows the three levels − Backbone ISP (Internet Service Provider) − Backbone ISPs are large international backbone networks. They are equipped with thousands of routers and store enormous amounts of information in data centers, connected through high bandwidth fiber optic links. Everyone needs to connect with a backbone ISP to access the entire Internet. There are different ways through which a client can connect to the ISP. A commonly used way is DSL (Digital Subscriber Line) which reuses the telephone connection of the user for transmission of digital data. The user uses a dial-up connection instead of the telephone call. Connectivity is also done by sending signals over cable TV system that reuses unused cable TV channels for data transmission. For high-speed Internet access, the connectivity can be done through FTTH (Fiber to the Home), that uses optical fibers for transmitting data. Nowadays, most Internet access is done through the wireless connection to mobile phones from fixed subscribers, who transmit data within their coverage area.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },


    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Define multimedia. Discuss the applications of multimedia. ",
        "answer": "Multimedia is an interactive media and provides multiple ways to represent information to the user in a powerful manner. It provides an interaction between users and digital information. It is a medium of communication.Some of the sectors where multimedias is used extensively are education, training, reference material, business presentations, advertising and documentaries. Some of the areas where multimedia are used are listed below: 1. Multimedia in Education field Multimedia is used to instruct as a master (guide) because nowadays, multimedia CD are used instead of textbooks. Knowledge can be easily obtained by using multimedia CD in computer because multimedia CD includes text, pictures, sound and film which helps the students to understand easily and clearly than the textbooks and is cheaper than going to schools. 2. Multimedia in Business Multimedia is used in business for training employees, presenting sales, educating customers etc. It helps for the promotion of business and new products. 3. Multimedia in Entertainment Multimedia is mostly used in games. Text, audio, images and animations are mostly used in computer games. The use of multimedia in games made possible to make innovative and interactive games. It is also used in movies for entertainment. 4. Multimedia in Medicine The use of multimedia in medicine is increasing rapidly. In medicine, doctors can be trained by looking at a virtual surgery (Simulators). Using multimedia, they can simulate how the human body is affected by diseases spread by viruses and bacteria and then develop techniques to develop it. 5. Multimedia in Research We use multimedia to discuss or to make prototype about the invention and theory of different people. We can also use multimedia to investigate through the materials available on the internet.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Differentiate security attack from security threat. How virus affects computer?",
        "answer": "The threat is a possible security condition/violation to exploit the vulnerability of a system/asset. A threat can arise from any condition for example, accident, fire incident, environmental like natural disaster, human negligence. The following are various types of threats. Interruption Interception Fabrication Modification Attack The attack is an intended unauthorized action on a system/asset. An attack always has a motivation to misuse system and generally wait for an opportunity to occur. The following are some of the important differences between Threat and Attack. Sr. No. Key Threat Attack 1 Intentional Threats can be intentional like human negligence/failure or unintentional like natural disaster. The attack is a deliberate action. An attacker have a motive and plan the attack accordingly. 2 Malicious The threat may or may not malicious. The attack is always malicious. 3 Definition The threat by definition is a condition/circumstance which can cause damage to the system/asset. Attack by definition, is an intended action to cause damage to system/asset. 4 Chance for Damage Chance to damage or information alteration varies from low to very high. The chance to damage or information alternation is very high. 5 Detection A threat is difficult to detect. An attack is comparatively easy to detect. 6 Prevention A threat can be prevented by controlling the vulnerabilities. An attack cannot be prevented by merely controlling the vulnerabilities. Other measures like backup, detect and act etc are required to handle a cyber-attack. Computer virus is similar to a biological virus. It does not activate on its own in any device however, it needs help of some source to get activated. For instance, if you download any important software or game from the internet, the virus sticks to the software. It remains inactive till the time the software is not run by you on your device. The time when you double click and run the downloaded software, the virus also gets activated. In other words, virus is wriiten into a program by the attacker and some condition is set for the virus to run. Once the program starts to run on some machine and when the condition set meets or comes True, the virus becomes active. A computer virus can infect your machine just like common cold (a biological virus) affects your body. It can disrupt the proper functioning of your machine by stopping important services of the machine. In general, it always depends on the type of virus to get information of its effects.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Write short notes on: GIS E-commerce",
        "answer": "a) GIS: GIS- Geographic information system is a system that can be used to analyze, store and share certain data’s, that represents real objects like roads, trees, waterways or any other geographical landscape. It is one of the most efficient methods used in Civil engineering in its different fields. For eg- In Construction management, the GIS system can be used to denote the precise location, where the structure is to be constructed. Here the GIS system can give certain factors and favorable conditions at the particular site. The steps undertaken with the help of GIS are, data collection, data analysis and the estimate prepared, based upon it’s dimensions and cross sectional area. In a geotechnical aspect, GIS can be used to provide adequate data based upon the nature of the soil and size of the foundation and the maximum load bearing capacity. GIS also plays a major role in GPS functioning. With the help of GIS, we obtain a precise location of a site based upon both longitudinal and latitudinal aspect that that makes it easier to navigate. b) E-commerce: E-commerce is the buying and selling of goods and services over the Internet. It is done through computers, tablets, smartphones, and other smart devices. Almost anything can be purchased through e-commerce today. It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both. There are three main types of e-commerce: B2B websites such as Shopify, B2C websites such as Amazon, Flipkart, and Consumer-to-Consumer websites such as eBay. Advantages of e-commerce: A larger market. Customer insights through tracking and analytics. Lower cost. More opportunities to sell. Personalized messaging. Disadvantages of e-commerce: Lack of personal touch. Price and product comparison. Lack of tactile experience. Need for internet access. IT security issues.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
    },

    {
        "subject": "oop",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": "Explain the concept of user- defined to user-defined data conversion with the conversion routine located in the destination class ",
        "answer": "User-defined to user-defined data conversion refers to the process of converting an object of one user-defined type to an object of another user-defined type. This type of conversion can be achieved by defining a conversion routine in the destination class. A conversion routine is a member function of a class that takes an object of the source class as an input parameter and returns an object of the destination class. This routine defines the rules for converting the source object to the destination object. For example, suppose we have two classes, Temperature and Length, and we want to convert a Temperature object to a Length object. We can define a conversion routine in the Length class that takes a Temperature object as an input parameter and returns a Length object. This routine can perform the necessary calculations to convert the temperature value to a length value, according to a specific conversion formula. Once the conversion routine is defined, we can use it to convert a Temperature object to a Length object using a typecast operator or a function call. For example, if we have a Temperature object called temp, we can convert it to a Length object called len using the following code: Length len = static_cast<Length>(temp); // using typecast operator Or, Length len = len.fromTemperature(temp); // using conversion routine as a member function By defining a conversion routine in the destination class, we can provide a way for users to convert objects between different user-defined types, making our code more flexible and versatile.",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
      },

      {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": " Depict the difference between private and public derivation. Explain derived class constructor with suitable program.",
        "answer": "",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
      },

      {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": " ",
        "answer": "",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
      },


      {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": " ",
        "answer": "",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
      },


      {
        "subject": "",
        "year": "",
        "semester": "",
        "previouslyAskedIn": "",
        "question": " ",
        "answer": "",
        "side1": "",
        "side2": "",
        "imageUrl": "",
        "points": ""
      },







]

