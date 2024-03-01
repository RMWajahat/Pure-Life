function handlesubmit() {
  var calories = document.getElementById('calorie-input').value;
  var mealCount = document.getElementById('meal-count').value;
  var dietType = document.getElementById('diet-type').value;

  var snackCalories = 0

  if (mealCount === "4") {
     snackCalories = 0.10 * calories;
     calories = calories - snackCalories; 
     mealCount = mealCount - 1;
  }

  var caloriesPerMeal = parseInt(calories) / parseInt(mealCount);
  // alert(mealCount + " caloriesPerMeal: " +  caloriesPerMeal + " snackCalories: " + snackCalories);

  caloriesPerMeal = Math.round(caloriesPerMeal);
  snackCalories = Math.round(snackCalories);


  var breakfastTable = [
    // 0
    ["Breakfast", "Banna, Milk, Peanut Butter & Honey MilkShake", 800, ["Vegan", "Paleo"]],
    ["Breakfast", "Grapefruit & Ginger Chia Pudding and Flax Smoothie", 800, ["Everyone can eat this"]],
    ["Breakfast", "Herb Omelette with 2 eggs with Fried Tomatoes", 700, ["Vegan"]],
    ["Breakfast", "Waffles and Yogurt", 500, ["Vegan", "Paleo"]],
    ["Breakfast", "Egg SandWich", 300, ["Vegan"]],
    ["Breakfast", "Oats", 200, ["Everyone can eat this"]],
    ["Breakfast", "Half Avacado", 100, ["Everyone can eat this"]]
  ];

  var lunchTable = [
    // 1
    ["Lunch", "Scrambled Eggs with Chorizo", 800, ["Vegan", "Vegetarian"]],
    ["Lunch", "Chocolate and Banana Kefir Smoothie", 800, ["Everyone can eat this"]],
    ["Lunch", "Peanut Noodle Salad", 500, ["Everyone can eat this"]],
    ["Lunch", "Kidney bean curry", 300, ["Everyone can eat this"]],
    ["Lunch", "Fried bacon", 200, ["Vegan", "Vegetarian"]],
    ["Lunch", "Tofu Spinach & Tomato Scamble", 200, ["Everyone can eat this"]],
    ["Lunch", "Half Avacado", 100, ["Everyone can eat this"]]
  ];

  var dinnerTable = [
    // 2
    ["Dinner", "Sweet Potato, Lentils and Tofu with Rice", 800, ["Paleo"]],
    ["Dinner", "Buffalo Chicken Salad with Sweet Potatoes", 800, ["Vegan", "Vegetarian"]],
    ["Dinner", "Shrimp Tacos", 500, ["Vegan", "Vegetarian"]],
    ["Dinner", "Macro Buddha Bowl", 500, ["Everyone can eat this"]],
    ["Dinner", "Spiced Red Lentil, Tomato, and Kale Soup", 300, ["Paleo"]],
    ["Dinner", "Chicken Lettuce Wrap", 300, ["Vegan", "Vegetarian"]],
    ["Dinner", "Tofu Scrambled Eggs", 200, ["Paleo"]],
    ["Dinner", "Fried bacon", 200, ["Vegan", "Vegetarian"]],
    ["Dinner", "Half Avacado", 100, ["Everyone can eat this"]]
  ];
  var snackTable = [
    // 3
    ["Snack", "Vegan Protein Omega Shake Chocolate", 800, ["Everyone can eat this"]],
    ["Snack", "Large granola bar", 500, ["Paleo"]],
    ["Snack", "Pumpkin Coconut Paleo Smoothie", 500, ["Everyone can eat this"]],
    ["Snack", "Yogurt with Almonds & Honey", 500, ["Vegan", "Paleo"]],
    ["Snack", "Plum and Greek Yogurt", 300, ["Vegan", "Paleo"]],
    ["Snack", "Vegan Chocolate Hummus", 300, ["Everyone can eat this"]],
    ["Snack", "Papaya Flaxseed Shake", 200,  ["Everyone can eat this"]],
    ["Snack", "Banana", 100,  ["Everyone can eat this"]]

  ];
  
  if (snackCalories !== 0) {
    mealCount++;
  }
  
  let breakfastCalories = caloriesPerMeal;
  let lunchCalories = caloriesPerMeal;
  let dinnerCalories = caloriesPerMeal;

  let mealCalorieArray = [breakfastCalories, lunchCalories, 
                          dinnerCalories, snackCalories]

  let breakfastMeals = [];
  let lunchMeals = [];
  let dinnerMeals = [];
  let snackMeals = [];
  // alert(breakfastCalories);

  let breakfastOutput = "";
  let breakfastCaloriesOutput = 0;

  let lunchOutput = "";
  let lunchCaloriesOutput = 0;

  let dinnerOutput = "";
  let dinnerCaloriesOutput = 0;

  let snackOutput = "";
  let snackCaloriesOutput = 0;
  
 
  mealCount = parseInt(mealCount);
  
  if (mealCount >= 1) {
    document.getElementById('meal-breakfast-id').style.backgroundColor = '#d6ccc2';
    document.getElementById("breakfast-header").innerHTML = "BREAKFAST <br/><br/>" 
    
    while (breakfastCalories > 99) {
      for (let i = 0; i < breakfastTable.length; i++) {
        if (breakfastCalories - breakfastTable[i][2] >= 0) {
          
          if (checkDiet(dietType, breakfastTable[i])) {
            breakfastMeals.push(breakfastTable[i]);
            breakfastOutput += "<b>" + breakfastTable[i][1] + "</b> - Calories: " + breakfastTable[i][2] + "<br/>";
            // ["Breakfast", "Banna, Milk, Peanut Butter & Honey MilkShake", 800, ["Vegan", "Paleo"]],
            breakfastCalories = breakfastCalories - breakfastTable[i][2];
            breakfastCaloriesOutput += breakfastTable[i][2];
          }
        }
      }
    }
    
    lunchCalories += breakfastCalories;
    //breakfast-meals 
    document.getElementById("breakfast-meals").innerHTML = breakfastOutput + "<br/><br/>";
    document.getElementById("breakfast-calories-total").innerHTML = breakfastCaloriesOutput + " calories for breakfast.";
    // document.getElementById("breakfast-header").innerHTML = breakfastMeals;
    // alert(breakfastMeals);
    
  }
  
  if (mealCount >= 2) {
    document.getElementById('meal-lunch-id').style.backgroundColor = '#d6ccc2';
    document.getElementById("lunch-header").innerHTML = "LUNCH <br/><br/>" 
    while (lunchCalories > 99) {
      for (let i = 0; i < lunchTable.length; i++) {
        if (lunchCalories - lunchTable[i][2] >= 0 ) {
          if (checkDiet(dietType, lunchTable[i])) { 
            lunchMeals.push(lunchTable[i]);
            lunchCalories = lunchCalories - lunchTable[i][2];

            lunchOutput += "<b>" + lunchTable[i][1] + "</b> - Calories: " + lunchTable[i][2] + "<br/>";
            lunchCaloriesOutput += lunchTable[i][2];
          }    
        }
      }
    }
    dinnerCalories += lunchCalories;
    // alert(lunchMeals);
    document.getElementById("lunch-meals").innerHTML = lunchOutput + "<br/><br/>";
    document.getElementById("lunch-calories-total").innerHTML = lunchCaloriesOutput + " calories for lunch.";
  }

  if (mealCount >= 3) {
    document.getElementById('meal-dinner-id').style.backgroundColor = '#d6ccc2';
    document.getElementById("dinner-header").innerHTML = "DINNER <br/><br/>" 
    while (dinnerCalories > 99) {
      for (let i = 0; i < dinnerTable.length; i++) {
        if (dinnerCalories - dinnerTable[i][2] >= 0 ) {
          if (checkDiet(dietType, dinnerTable[i])) { 
            dinnerMeals.push(dinnerTable[i]);
            dinnerCalories = dinnerCalories - dinnerTable[i][2];

            dinnerOutput += "<b>" + dinnerTable[i][1] + "</b> - Calories: " + dinnerTable[i][2] + "<br/>";
            dinnerCaloriesOutput += dinnerTable[i][2];
           }
        }
      }
    }
    snackCalories += dinnerCalories;
    // alert(dinnerMeals);
    document.getElementById("dinner-meals").innerHTML = dinnerOutput + "<br/><br/>";
    document.getElementById("dinner-calories-total").innerHTML = dinnerCaloriesOutput + " calories for dinner.";
  }
  
  if (mealCount == 4) {
    document.getElementById('meal-snack-id').style.backgroundColor = '#d6ccc2';
    document.getElementById("snack-header").innerHTML = "SNACKS <br/><br/>" 
    while (snackCalories > 99) {
      console.log(snackCalories);
      for (let i = 0; i < snackTable.length; i++) {
        if (snackCalories - snackTable[i][2] >= 0 ) {
          if (checkDiet(dietType, snackTable[i])) { 
            snackMeals.push(snackTable[i]);
            snackCalories = snackCalories - snackTable[i][2];

            snackOutput += "<b>" + snackTable[i][1] + "</b> - Calories: " + snackTable[i][2] + "<br/>";
            snackCaloriesOutput += snackTable[i][2];
          }         
        }
      }
    }
    document.getElementById("snack-meals").innerHTML = snackOutput + "<br/><br/>";
    document.getElementById("snack-calories-total").innerHTML = snackCaloriesOutput + " calories for snacks.";
  }
  
  total_cals = snackCaloriesOutput + dinnerCaloriesOutput + lunchCaloriesOutput + breakfastCaloriesOutput;
  document.getElementById("total-calories-result").innerHTML = total_cals + " calories overall. <br/> <br/>";

  document.getElementById('items-to-delete').remove();

 
  document.getElementById("submit-button-meals").value ="GENERATE NEW MEAL PLAN";
  document.getElementById("submit-button-meals").onclick ="";
  document.getElementById("submit-button-meals").style.backgroundColor = "rgba(255, 22, 6, 0.42)";
  document.getElementById("submit-button-meals").style.color = "rgb(121, 0, 0)";
  document.getElementById("submit-button-meals").style.borderColor = "rgb(59, 0, 0)";


}

function checkDiet(dietType, dietTable) {
  let returnVal = true;
  for (let i = 0; i < dietTable[3].length; i++) {
    // alert(dietTable[3][i]);
    if (dietTable[3][i] == dietType) {
     
      returnVal = false;
    }
  }
  return returnVal;
}
