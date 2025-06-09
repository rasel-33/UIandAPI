// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

async function getSingleData(id) {  // initial data fetching from the api
    try{
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        if(response.ok && data.meals.length > 0){
            let [meal] = data.meals;
            let {idMeal, strMeal, strMealThumb, strInstructions} = meal;
            let singleData = {
                id: idMeal,
                title: strMeal,
                image: strMealThumb,
                details: strInstructions
            }
            return singleData;
        } else{
            throw new Error("Not Exists");
        }
    } catch(err){
        return err.message;
    }
}


