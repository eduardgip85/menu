const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Fluffy and tender pancakes made with buttermilk for a slightly tangy flavor, often served with butter and maple syrup. `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `A classic diner-style double cheeseburger, featuring two beef patties, cheese, lettuce, tomato, and condiments in a soft bun`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `A massive milkshake that's over-the-top in size and flavor, typically loaded with various toppings, candies, and often served with whipped cream and a cherry on top.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `A hearty and wholesome dish that may include fried or roasted chicken, mashed potatoes, gravy, and a side of vegetables, reminiscent of country-style comfort food.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `A dish that showcases eggs in various styles, such as scrambled, fried, or poached, often served with a combination of accompaniments like bacon, sausage, and toast.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `A dessert or milkshake made with Oreo cookies and ice cream, resulting in a sweet, creamy, and chocolaty treat.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `A decadent dish featuring an abundance of crispy bacon, often served alongside other breakfast items like eggs, toast, or pancakes.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `Typically refers to a classic American cheeseburger with a beef patty, cheese, lettuce, tomato, and various condiments, served in a bun.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `A dish that might have become a favorite during quarantine, it could be a comfort food item like macaroni and cheese or a special homemade creation.`,
    },
    {
      id: 10,
      title: "stake",
      category: "dinner",
      price: 36.99,
      img: "./images/item-1.jpeg",
      desc: `A high-quality cut of beef cooked to your preferred level of doneness, often seasoned and served with a choice of sauces and side dishes.`,
    },
    {
      id: 11,
      title: "soft drinks",
      category: "drinks",
      price: 4.5,
      img: "./images/item-1.jpeg",
      desc: `Cola, Fanta, Sprite,Lemon lime bitters, Sparklin Water.`,
    },
  ];

const faqQuestions = [
  {
    title: "Do you offer vegetarian or vegan options on your menu?",
    desc: "Yes, we offer a variety of vegetarian and vegan dishes. You can find them marked on our menu with specific symbols."
  },
  {
    title: "What are your opening hours?",
    desc: "We are open from [opening time] to [closing time] on [days of the week]. We are closed on [days when the restaurant is closed]."
  },
  {
    title: "Do you have gluten-free options?",
    desc: "Yes, we have gluten-free options available. Please specify your preference to our staff when placing your order."
  },
]

//const about the section that is the parent of each item
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//const for the buttons for the questions
const sectionCenterFaq = document.querySelector('.section-center-question');

//load items
document.addEventListener('DOMContentLoaded',function(){
  //display menu items
  displayMenuItems(menu);

  //display menu options
  displayMenuBtns();

  //display faq questions
  displayFaq(faqQuestions);

});


function displayMenuItems(menuItems){
    //read the menu array and put it as a item in the displaymenu
    let displayMenu = menuItems.map(function(item){
        
        return `<article class="menu-item">
                    <img src="${item.img}" class="photo" alt="${item.title}">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}$</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </article>`;
    });

    //now we use join to put it all together
    displayMenu = displayMenu.join("");
    //now we need to added to out data to our parent
    sectionCenter.innerHTML = displayMenu;
    // console.log(displayMenu);
}

function displayMenuBtns (){
  //first filter categories
  const categories = menu.reduce(
    function(values, item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ['all'] //and add "all" because we dont have "all" in menu cateries array 
  );

  //save a string with the buttons
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" 
            type="button" data-id="${category}">${category}
            </button>
            `
  }).join("");
  //print the string as a buttons
  container.innerHTML = categoryBtns;
  //una vez se han creado los botones dinamicamente, llamamos a la siguente funcion
  //se hace ahora debido al DOM 
  const filterBtns = document.querySelectorAll('.filter-btn');
  //filter items
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      //dataset is for acces to the "data-xxx" in html
      // console.log(e.currentTarget.dataset.id);

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        //return the item if matches the menu option with the category
        return menuItem.category === category;
      });
      // console.log(menuCategory);
      if(category === 'all'){
        displayMenuItems(menu);
      }else{
        displayMenuItems(menuCategory);
      }
    });
  });
}

function displayFaq(faqQuestions) {
  let displayFaq = faqQuestions.map(function (item, index) {
    return `<article class="question">
              <!-- question title -->
              <div class="question-title">
                <p>${item.title}</p>
                <button type="button" class="question-btn">
                  <span class="plus-icon">
                    <i class="far fa-plus-square"></i>
                  </span>
                  <span class="minus-icon">
                    <i class="far fa-minus-square"></i>
                  </span>
                </button>
              </div>
              <!-- question text -->
              <div class="question-text">
                <p>${item.desc}</p>
              </div>
            </article>`;
  });

  //now we use join to put it all together
  displayFaq = displayFaq.join("");
  //now we need to added to our parent
  sectionCenterFaq.innerHTML = displayFaq;

  //const for the buttons for the questions
  const btnFaq = document.querySelectorAll(".question-btn");

  //functionality to show/hide faq text for each question
  btnFaq.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const question = e.currentTarget.parentElement.parentElement;
      question.classList.toggle('show-text');
    })
  })
}

  