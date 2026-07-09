export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuSection[] = [
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    items: [
      { name: "Die Hard*", price: "$17.00", description: "Shrimp tempura, spicy tuna, & cucumber with albacore & spicy soft shell crab on top (Spicy level I-5)" },
      { name: "Eel Popper", price: "$15.00", description: "Eel, crab, avocado, jalapeno & cream cheese wrapped in seaweed, deep fried with eel sauce on top" },
      { name: "Frantastic Roll*", price: "$20.00", description: "Deep fried soft shell crab & calamari tempura topped with spicy albacore & jalapenos drizzled with sweet sauce and spicy vinaigrette sauce", signature: true },
      { name: "Grand Finale*", price: "$18.00", description: "Spicy soft shell crab and crab meat wrapped in soy paper covered in tuna, salmon, & yellow tail topped with jalapenos with special sauce on the side" },
      { name: "Joy Special*", price: "$16.00", description: "Shrimp tempura, cucumber, & avocado covered by tuna & avocado, drizzled with spicy ponzu sauce" },
      { name: "Playboy*", price: "$17.00", description: "Crab, avocado, & cream cheese wrapped with thinly sliced seared beef & drizzled with a special sauce" },
      { name: "Royal Flush*", price: "$20.00", description: "Lobster roll topped with deep fried lobster then baked with sweet yum yum sauce and eel sauce", signature: true },
      { name: "Scareface*", price: "$17.00", description: "Shrimp tempura & spicy crab with Cajun albacore on top with sriracha, eel sauce, & yum yum sauce" },
      { name: "Steel Wheel", price: "$16.00", description: "Shrimp tempura & avocado topped with spicy crab, shrimp, and avocado" },
      { name: "The Godfather", price: "$20.00", description: "Diced soft shell crab & cucumber with avocado & deep fried lobster on top with eel sauce, sriracha, and sweet yum yum sauce" },
      { name: "The Nuts*", price: "$17.00", description: "Crab, cucumber, & avocado topped with albacore & deep fried seasoned onions" },
      { name: "The Pornstar*", price: "$16.00", description: "Crab, tuna, salmon, yellow tail, & avocado wrapped in soy paper then deep fried, drizzled with eel sauce & spicy mayo" },
      { name: "The Rockstar*", price: "$15.00", description: "Tuna, salmon, yellowtail, crab & avocado wrapped in thinly sliced cucumber" },
      { name: "Wet Dream*", price: "$17.00", description: "Shrimp tempura, spicy tuna, & cucumber topped with albacore & salmon, drenched with a special ponzu, masago sauce & thinly sliced green onions" },
      { name: "W.S.O.P. (World Series of Poker)*", price: "$75.00", description: "Negitoro & shrimp tempura layered with avocado and topped with seared A5 grade Japanese Kobe beef", signature: true },
      { name: "W.T.F.", price: "$20.00", description: "Lobster roll with avocado topped with spicy mayo sauce" },
      { name: "99% Roll*", price: "$17.00", description: "Diced spicy soft shell crab covered with tuna and baked scallops accompanied with the screaming \"O\" sauce" }
    ]
  },
  {
    id: "chefs-specialty-rolls",
    title: "Chef's Specialty Rolls",
    items: [
      { name: "Albacore Supreme Roll*", price: "$15.50", description: "Albacore roll w/ albacore & garlic ponzu on top" },
      { name: "Ash Fire*", price: "$15.00", description: "Spicy tuna roll w/ eel on top" },
      { name: "Banzai Roll*", price: "$13.50", description: "Shrimp tempura roll w/ spicy salmon on top" },
      { name: "Buddha Roll", price: "$12.00", description: "Shrimp tempura roll w/ avocado on top" },
      { name: "Caterpillar Roll", price: "$15.00", description: "Eel roll w/ avocado on top" },
      { name: "Chicano Roll*", price: "$11.50", description: "Tempura hatch green chili, salmon, & cream cheese roll w/ jalapenos on top" },
      { name: "Christian's Roll*", price: "$11.00", description: "Shrimp roll w/ tempura crunch on top w/ eel sauce" },
      { name: "Coachella Roll", price: "$16.00", description: "Shrimp tempura roll w/ eel on top" },
      { name: "Crazy Horse*", price: "$13.00", description: "Spicy salmon roll w/ salmon on top" },
      { name: "Crunchy Roll", price: "$7.50", description: "California roll w/ tempura flakes on top" },
      { name: "Da Bomb", price: "$12.00", description: "Roll w/ deep fried jalapenos stuffed w/ spicy tuna & cream cheese" },
      { name: "Da Volcano Roll*", price: "$13.50", description: "Crab, avocado, & salmon roll baked with spicy tuna on top" },
      { name: "De Ja Vu*", price: "$16.50", description: "Tuna, crab, avocado, & cucumber roll topped w/ salmon & avocado" },
      { name: "Dragon Roll", price: "$15.00", description: "California roll w/ eel on top" },
      { name: "Godzilla*", price: "$11.50", description: "Spicy tuna roll w/ avocado on top" },
      { name: "Hawaiian Roll*", price: "$13.00", description: "California roll w/ tuna on top" },
      { name: "Hot Flash", price: "$14.50", description: "Shrimp tempura, crab, cucumber inside w/ baked salmon on top w/ eel sauce, spicy sauce, green onions & sesame seeds" },
      { name: "Japanese Lasagna", price: "$11.00", description: "Crab & avocado baked w/ cream cheese on top" },
      { name: "J In Ur Mouth", price: "$10.50", description: "Deep fried Philadelphia roll" },
      { name: "Kamikaze", price: "$16.00", description: "Eel roll w/ spicy scallop on top" },
      { name: "Kyle's Roll", price: "$13.50", description: "Crab, shrimp tempura, avocado, & asparagus roll w/ sesame on top" },
      { name: "Mexican Roll*", price: "$14.00", description: "Mixed crab & scallop roll w/ tuna on top" },
      { name: "Mikey's Roll", price: "$13.50", description: "Breaded & deep fried California roll w/ spicy scallop on top" },
      { name: "My X-Girlfriend*", price: "$15.00", description: "Roll w/ tuna, salmon, white fish, & avocado inside, & deep fried" },
      { name: "Ninja Roll", price: "$10.50", description: "Spicy tuna roll deep fried" },
      { name: "New Mexico Roll", price: "$10.00", description: "Tempura hatch green chili & cream cheese" },
      { name: "Rainbow Roll*", price: "$14.00", description: "California roll w/ salmon, tuna, yellow tail, & shrimp on top" },
      { name: "Rolling Stone", price: "$13.00", description: "Shrimp tempura roll w/ scallop on top" },
      { name: "Salmon Supreme Roll*", price: "$15.50", description: "Salmon roll w/ smoked salmon on top" },
      { name: "Samurai*", price: "$12.50", description: "Crab, salmon, & avocado roll, breaded & deep fried topped w/ masago & sauce" },
      { name: "Screaming Orgasm*", price: "$13.00", description: "Seared tuna salad" },
      { name: "Sex On The Beach*", price: "$12.50", description: "Spicy scallop roll w/ salmon on top" },
      { name: "Sexy Redhead*", price: "$14.00", description: "Salmon roll w/ shrimp, albacore, & masago on top" },
      { name: "Shaggy Dog", price: "$11.50", description: "Shrimp tempura roll w/ shredded crab stick on top w/ mayo & wasabi sauce" },
      { name: "Sin*", price: "$15.00", description: "Eel, avocado, & cream cheese roll breaded & deep fried w/ eel sauce on top" },
      { name: "Spicy Latina*", price: "$14.00", description: "Roll w/ salmon, yellow tail, & tuna diced & mixed w/ masago & spicy sauce inside" },
      { name: "Tiger Roll*", price: "$14.00", description: "Shrimp tempura roll w/ spicy tuna on top" },
      { name: "Tsutomu Roll*", price: "$16.00", description: "Negihama roll w/ yellow tail, & masago on top" },
      { name: "Tuna Supreme Roll*", price: "$17.00", description: "Spicy tuna roll w/ tuna on top" },
      { name: "Ugly Redhead*", price: "$11.50", description: "California roll w/ spicy tuna on top" },
      { name: "UNLV*", price: "$12.00", description: "Spicy tuna & cucumber roll w/ crab tempura" },
      { name: "Volcano Roll*", price: "$11.50", description: "Crab roll w/ scallop on top" },
      { name: "Washington Roll*", price: "$12.00", description: "California roll w/ salmon on top" },
      { name: "White Boy Roll*", price: "$13.00", description: "Spicy tuna, cucumber & gobo inside w/ albacore on top" },
      { name: "XXX", price: "$15.00", description: "Soft shell crab, shrimp, & avocado roll deep fried w/ special sauce" },
      { name: "Yellowtail Supreme Roll*", price: "$17.00", description: "Negihama roll w/ yellow tail on top" },
      { name: "2 Day Old Roll*", price: "$15.00", description: "Shrimp tempura roll w/ spicy tuna & soft shell crab on top" },
      { name: "911*", price: "$13.00", description: "Spicy crab roll w/ spicy tuna on top" }
    ]
  },
  {
    id: "traditional-rolls",
    title: "Traditional Rolls",
    items: [
      { name: "California Roll", price: "$5.75" },
      { name: "Tuna Roll*", price: "$8.50" },
      { name: "Spicy Tuna Roll*", price: "$8.00" },
      { name: "Salmon Roll*", price: "$6.00" },
      { name: "Negi Hama Roll*", price: "$8.00" },
      { name: "Philadelphia Roll*", price: "$8.00" },
      { name: "Alaskan Roll*", price: "$7.75" },
      { name: "Crab Roll", price: "$7.00" },
      { name: "Scallop Roll", price: "$9.00" },
      { name: "Spider Roll", price: "$10.50" },
      { name: "Eel Roll", price: "$9.50" },
      { name: "Shrimp Roll", price: "$7.00" },
      { name: "Shrimp Tempura Roll", price: "$8.50" },
      { name: "Vegetable Roll", price: "$7.00" },
      { name: "Salmon Skin Roll", price: "$6.50" }
    ]
  },
  {
    id: "sashimi-nigiri",
    title: "Sashimi & Nigiri",
    items: [
      { name: "Tuna (Maguro)*", price: "$8.00" },
      { name: "Super White Tuna*", price: "$6.00" },
      { name: "Albacore (White Tuna)*", price: "$6.50" },
      { name: "Zuke Albacore-Marinated*", price: "$8.00" },
      { name: "Yellowtail (Hamachi)*", price: "$7.00" },
      { name: "Kobe Beef, A5 Japanese*", price: "$18.00" },
      { name: "Salmon (Sake)*", price: "$5.50" },
      { name: "Zuke Salmon-Marinated*", price: "$7.00" },
      { name: "Smoked Salmon", price: "$7.50" },
      { name: "Shrimp (Ebi)", price: "$5.00" },
      { name: "Sweet Shrimp (Ama Ebi) w/ Deep Fried Head*", price: "$8.50" },
      { name: "Fresh Water Eel (Unagi)", price: "$8.50" },
      { name: "Red Snapper (Tai)*", price: "$5.50" },
      { name: "Scallop (Hotategai)*", price: "$6.50" },
      { name: "Smelt Roe (Masago)*", price: "$5.50" },
      { name: "Kobe Beef A5 Japanese Truffle Ponzu* 2 ozs", price: "$35.00", signature: true }
    ]
  },
  {
    id: "sashimi-tiradito",
    title: "Sashimi Tiradito",
    items: [
      { name: "Yellowtail Jalapeno* 10pc", price: "$18.00" },
      { name: "Super White Tuna* Jalapeno 10pc", price: "$17.00" },
      { name: "Salmon Habanero* 8pc", price: "$12.00" }
    ]
  },
  {
    id: "specialty-appetizers",
    title: "Specialty Appetizers",
    items: [
      { name: "Tasty Treats*", price: "$8.00", description: "Cream cheese sandwiched between a ball of spicy tuna & shrimp on top, deep fried, with eel sauce & spicy mayo on top" },
      { name: "Musashi Crispy Rice* 6pc", price: "$14.00", description: "Crispy rice with spicy tuna on top drizzled with eel sauce & spicy mayo" },
      { name: "Snow on Tuna* 4pc", price: "$14.00", description: "Shrimp tempura & avocado wrapped with tuna & daikon on top with eel sauce & yum yum sauce" },
      { name: "Strip Salmon* 4pc", price: "$12.00", description: "Minced soft shell crab wrapped with salmon & cucumber on top with screaming \"O\" sauce" },
      { name: "Strippers* 4pc", price: "$14.00", description: "Crab & kaiware wrapped with salmon & seaweed with sweet mayo and apple slice" }
    ]
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Edamame", price: "$5.00", description: "Boiled and salted soy beans" },
      { name: "Garlic Edamame", price: "$6.00" },
      { name: "Gyoza", price: "$5.50" },
      { name: "Asparagus Beef", price: "$10.50", description: "House beef asparagus wrapped in beef with oriental sauce and barbecued" },
      { name: "Beef Egg Rolls", price: "$7.00", description: "Beef and vegetable egg rolls served with our house sweet and sour sauce" },
      { name: "Yakitori", price: "$7.00", description: "Skewered chicken thigh" },
      { name: "Shrimp & Veg. Tempura", price: "$9.50" },
      { name: "Bacon / Shrimp Skewers", price: "$11.50" },
      { name: "Fire Cracker", price: "$7.50" },
      { name: "Shrimp Dragoons", price: "$7.50" },
      { name: "Calamari Tempura", price: "$10.50" },
      { name: "Miso Soup", price: "$2.25" },
      { name: "Beef Broth Soup", price: "$2.25" },
      { name: "House Salad", price: "$3.25" },
      { name: "Cucumber Salad", price: "$4.00" }
    ]
  },
  {
    id: "entrees",
    title: "Entrees",
    items: [
      { name: "Chicken Teriyaki", price: "$19.00", description: "Grilled chicken breast topped with our house teriyaki sauce" },
      { name: "Chicken Katsu", price: "$21.00", description: "Breaded and deep fried chicken breast served with tonkatsu sauce" },
      { name: "New York Steak*", price: "$34.00" },
      { name: "Rib-eye*", price: "$37.00" },
      { name: "Grilled Salmon", price: "$30.00" },
      { name: "Chilean Sea Bass", price: "$45.00", signature: true },
      { name: "Shrimp Tempura Dinner", price: "$22.00" }
    ]
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    items: [
      { name: "Vegetable Fried Rice", price: "$11.00" },
      { name: "Chicken Fried Rice", price: "$13.00" },
      { name: "Shrimp Fried Rice", price: "$15.00" },
      { name: "Beef Fried Rice", price: "$17.00" },
      { name: "2 Combo Fried Rice", price: "$20.00" },
      { name: "3 Combo Fried Rice", price: "$22.00" }
    ]
  },
  {
    id: "rice-bowls",
    title: "Rice Bowls",
    items: [
      { name: "Chicken Teriyaki Bowl", price: "$14.00" },
      { name: "Beef Sukiyaki Bowl", price: "$16.00" },
      { name: "Unagi Bowl", price: "$25.00" }
    ]
  },
  {
    id: "sauces",
    title: "Sauces",
    items: [
      { name: "Yum Yum Sauce", price: "$1.50" },
      { name: "Spicy Sauce", price: "$1.50" },
      { name: "Garlic Butter Sauce", price: "$1.50" },
      { name: "Teriyaki Sauce", price: "$1.50" },
      { name: "Spicy Yum Yum Sauce", price: "$1.50" },
      { name: "Ginger Sauce", price: "$1.50" }
    ]
  }
];
