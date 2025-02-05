import style from './style.module.css'
import recipes from '../../data/recipes.json'
import RecipeCard from '../RecipeCard'
import happy_bean from '../../assets/images/happy_bean.png'

const RecipesCards = () => {
    console.log(recipes.items)
    return (
        <div className={style.container}>
            <h1>Explore Recipes ...</h1>
            <div className={style.flexContainer}>
                <div className={style.imgContainer}>
                <img src={happy_bean} alt="happy bean" className={style.happy_bean}></img>
                </div>
                {recipes.items.map((recipe) => {
                    //console.log(recipe)
                    return <RecipeCard data={recipe} key={recipe.recipeId} />
                    //return null
                })}
            </div>
        </div>
    )
}

export default RecipesCards
