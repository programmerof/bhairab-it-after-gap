export default [
    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: 'Differentiate analog computer with digital computer. What is CPU and how its works? What does an instruction cycle in CPU consists of?',
        answer: 'Analog computer and digital computer are two types of computing systems that operate differently. Analog computers operate on continuous physical variables, such as voltage, current, and resistance, and use mathematical equations to solve problems. They were widely used in scientific and engineering applications until the development of digital computers. Analog computers can perform calculations very quickly, but they are not as precise or versatile as digital computers. Digital computers, on the other hand, operate on discrete values represented by binary digits (bits), which are either 0 or 1. They use complex algorithms and software to perform a wide range of tasks and are capable of storing and processing vast amounts of data with high accuracy and precision. The CPU, or central processing unit, is the brain of a computer. It is a complex electronic circuit that processes instructions and performs calculations. The CPU consists of two main components: the control unit and the arithmetic logic unit (ALU). The control unit retrieves instructions from memory and decodes them, determining which operations to perform and which data to use. The ALU performs mathematical and logical operations, such as addition, subtraction, multiplication, and comparison. The instruction cycle in the CPU consists of several steps: Fetch: The CPU retrieves the next instruction from memory. Decode: The CPU decodes the instruction, determining what operation to perform. Execute: The CPU performs the operation specified by the instruction. Store: The CPU stores the result of the operation in memory or in a register. After the instruction is executed, the CPU returns to the fetch stage and repeats the cycle with the next instruction. This process continues until the program is complete.'
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: 'What is computer Network? Discuss different types of data transmission media in computer network with their advantages and disadvantages.',
        answer: 'A computer network is a group of computers linked to each other that enables the computer to communicate with another computer and share their resources, data, and applications. A computer network can be categorized by their size. A computer network is mainly of four types: LAN(Local Area Network) PAN(Personal Area Network) MAN(Metropolitan Area Network) WAN(Wide Area Network) In data communication terminology, a transmission medium is a physical path between the transmitter and the receiver i.e. it is the channel through which data is sent from one place to another. Transmission Media is broadly classified into the following types: 1. Guided Media: It is also referred to as Wired or Bounded transmission media. Signals being transmitted are directed and confined in a narrow pathway by using physical links. Features: High Speed Secure Used for comparatively shorter distances There are 3 major types of Guided Media: (i) Twisted Pair Cable – It consists of 2 separately insulated conductor wires wound about each other. Generally, several such pairs are bundled together in a protective sheath. (ii) Coaxial Cable – It has an outer plastic covering containing an insulation layer made of PVC or Teflon and 2 parallel conductors each having a separate insulated protection cover. The coaxial cable transmits information in two modes: Baseband mode(dedicated cable bandwidth) and Broadband mode(cable bandwidth is split into separate ranges). Cable TVs and analog television networks widely use Coaxial cables. (iii) Optical Fiber Cable – It uses the concept of reflection of light through a core made up of glass or plastic. The core is surrounded by a less dense glass or plastic covering called the cladding. It is used for the transmission of large volumes of data. The cable can be unidirectional or bidirectional. The WDM (Wavelength Division Multiplexer) supports two modes, namely unidirectional and bidirectional mode. The advantage and disadvantage of guided media are Advantages The cost of guided media is very low (inexpensive) and easily available. This is very Flexible and Lightweight. Very easy to set up and install. Disadvantages Bandwidth is very low in guided media. Susceptible to interference and noise- (Noise is an electrical disturbance that can degrade communication) 2. Unguided Media: It is also referred to as Wireless or Unbounded transmission media. No physical medium is required for the transmission of electromagnetic signals. Features: The signal is broadcasted through air Less Secure Used for larger distances There are 3 types of Signals transmitted through unguided media: (i) Radio waves – These are easy to generate and can penetrate through buildings. The sending and receiving antennas need not be aligned. Frequency Range:3KHz – 1GHz. AM and FM radios and cordless phones use Radio waves for transmission. (ii) Microwaves – It is a line of sight transmission i.e. the sending and receiving antennas need to be properly aligned with each other. The distance covered by the signal is directly proportional to the height of the antenna. Frequency Range:1GHz – 300GHz. These are majorly used for mobile phone communication and television distribution. (iii) Infrared – Infrared waves are used for very short distance communication. They cannot penetrate through obstacles. This prevents interference between systems. Frequency Range:300GHz – 400THz. It is used in TV remotes, wireless mouse, keyboard, printer, etc. The advantage and disadvantage of unguided media are Advantages: Use for long distance communication. High speed data transmission. Many receiver stations can receive signals from same sender station. Disadvantages: Very costly. Radio waves travel through Lowest portion of atmosphere'
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: 'What is database management system? Why database management systems are used. Discuss database system architecture?',
        answer: 'A database management system (DBMS) is software that allows users to create, maintain, and manipulate databases. A database is a collection of data organized in a way that allows efficient storage, retrieval, and manipulation of the data. A DBMS provides an interface between the user and the database, allowing users to interact with the data in a controlled and secure manner. Database management systems are used to manage large amounts of data efficiently and accurately. They provide tools for data storage, retrieval, and manipulation, and ensure the consistency, security, and integrity of the data. DBMSs are widely used in businesses, organizations, and institutions that deal with large amounts of data, such as banks, hospitals, universities, and government agencies. Database system architecture refers to the overall design of a DBMS. The architecture includes the components of the system, their interrelationships, and the rules and protocols that govern the system. A typical DBMS architecture consists of the following components: Database: The database is the collection of data that is managed by the DBMS. It includes the data itself, as well as metadata, which describes the structure and properties of the data. DBMS Engine: The DBMS engine is the core of the DBMS. It is responsible for processing queries and commands, and for managing the storage and retrieval of data. Storage Manager: The storage manager is responsible for managing the storage of data on the physical storage devices, such as disks. Query Processor: The query processor is responsible for processing user queries and generating the execution plan. Transaction Manager: The transaction manager is responsible for managing transactions, which are groups of database operations that are executed as a single unit. Data Access Layer: The data access layer is the interface between the application programs and the DBMS. It provides an abstraction layer that shields the application from the complexities of the DBMS. User Interface: The user interface is the part of the DBMS that allows users to interact with the database. It provides tools for data entry, retrieval, and manipulation. The architecture of a DBMS determines its performance, scalability, and reliability. A well-designed architecture can provide efficient data management and processing, while a poorly-designed architecture can result in poor performance, data inconsistency, and security vulnerabilities.'
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: 'What is cache memory? How it is different from register?',
        answer: 'Cache memory and register are both types of memory used in computer systems, but they differ in terms of their purpose, size, and speed. Cache memory is a small, high-speed memory that is used to store frequently accessed data and instructions. It is located between the processor and the main memory, and is used to reduce the time it takes to access data from the main memory. When the processor requests data, the cache memory checks if the data is already stored in the cache. If it is, the data is retrieved from the cache, which is much faster than retrieving it from the main memory. If the data is not in the cache, it is retrieved from the main memory and stored in the cache for future use. Registers, on the other hand, are small, high-speed memory locations within the processor itself. They are used to store data that is currently being processed by the CPU. Registers are used to hold operands, intermediate results, and addresses of memory locations. The advantage of registers is their high speed - data can be read from or written to a register in a single clock cycle. The main differences between cache memory and registers are: Purpose: Cache memory is used to speed up data access from the main memory, while registers are used to hold data that is being processed by the CPU. Size: Cache memory is larger than registers, typically ranging from a few kilobytes to several megabytes. Registers, on the other hand, are much smaller, typically ranging from a few bytes to a few hundred bytes. Speed: Registers are faster than cache memory, as they are located within the processor itself and can be accessed in a single clock cycle. Cache memory, while still very fast, is slower than registers as it is located outside the processor. In summary, cache memory and registers are both high-speed memory used in computer systems, but they have different purposes and characteristics. Cache memory is used to speed up data access from the main memory, while registers are used to hold data that is currently being processed by the CPU. Registers are faster than cache memory, but they are also much smaller in size.'
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: 'Discuss about the source data entry device with example.',
        answer: 'A source data entry device is any device that is used to input data into a computer system. There are many types of source data entry devices, each designed for a specific purpose and type of data. Some common examples of source data entry devices are: Keyboard: The keyboard is the most commonly used source data entry device for inputting text into a computer. It allows users to type letters, numbers, and other characters into a document or form. Mouse: The mouse is a pointing device that allows users to interact with graphical user interfaces (GUIs) by moving a cursor on the screen and clicking buttons. It can also be used for data entry by clicking on buttons, menus, or other graphical elements. Touchscreen: A touchscreen is a display that can detect and respond to touch inputs. It is commonly used in mobile devices, kiosks, and point-of-sale systems for data entry. Barcode scanner: A barcode scanner is a device that reads barcodes, which are unique patterns of lines and spaces used to identify products and other items. It is commonly used in retail and inventory management for data entry. Magnetic stripe reader: A magnetic stripe reader is a device that reads the magnetic stripe on credit cards, identification cards, and other similar items. It is commonly used in payment processing and access control for data entry. Optical character recognition (OCR) scanner: An OCR scanner is a device that can read printed text and convert it into digital text. It is commonly used for data entry in document management and archival systems. Voice recognition software: Voice recognition software allows users to input data by speaking into a microphone. It is commonly used in dictation software, virtual assistants, and other speech-to-text applications. These are just a few examples of source data entry devices. The choice of device depends on the type of data being input, the environment in which it is being used, and the user preferences and requirements.'
  },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: '',
        answer: ''
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: '',
        answer: ''
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: '',
        answer: ''
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: '',
        answer: ''
    },

    {
        subject: '',
        year: '',
        semester: '',
        previouslyAskedIn: '',
        question: '',
        answer: ''
    },


]