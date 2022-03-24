import classes from './MealForm.module.css'
import Input from '../UI-Layout/Input';

const MealForm = props => {
    return (
      <form className={classes.form}>
     
          <Input label='Amount' input={{
              id: 'Amount',
              type: 'number',
              min: '1',
              max: '5',
              defaultValue: '1'
          }}/>
         
          <button>+Add</button>
      </form>
    )
}

export default MealForm;