export default async function searchData(searchStr){
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`;
    try{
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data.meals.length);
        if( response.ok && data.meals.length > 0){
            let searchDataArray = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
                id: idMeal,
                title: strMeal,
                details: strInstructions,
                image: strMealThumb
            }));
            return searchDataArray;
        } else{
            throw new Error("Not Exits");
        }
        
    } catch(err){
        return err.message;
    }
}
