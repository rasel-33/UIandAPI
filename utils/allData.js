const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default async function getAllData() {  // initial data fetching from the api
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok && data.meals.length > 0){
            let allData = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
                id: idMeal,
                title: strMeal,
                details: strInstructions,
                image: strMealThumb
            }));
            
            return allData;
        } else{
            throw new Error("Not Exists")
        }
        
    } catch(err){
        return err.message;
    }
}

