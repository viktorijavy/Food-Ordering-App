import classes from './Header.module.css';
import MealsImg from '../../assets/Meals1.avif'
import HeaderButton from './HeaderButton';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals </h1>
                <HeaderButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img  src={MealsImg} alt="meals" />

            </div>
            
        </>

    )
}

export default Header;