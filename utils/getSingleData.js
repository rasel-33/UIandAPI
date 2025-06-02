// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

export default async function getSingleData(id) {  // initial data fetching from the api
    try{
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        // console.log(data.meals.length);
        if(response.ok && data.meals.length > 0){
            
            let singleData = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
                id: idMeal,
                title: strMeal,
                details: strInstructions,
                image: strMealThumb
            }));
            return singleData;
        } else{
            throw new Error("Not Exists");
        }
    } catch(err){
        return err.message;
    }
}

// async function calling(){
//     const xx = await getSingleData(52772);
//     console.log(xx);
// }

// calling();



