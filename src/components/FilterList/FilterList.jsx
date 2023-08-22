import { useDispatch, useSelector } from "react-redux";
import css from "./filterlist.module.css"
import { filterContact } from "store/phonebook/filterReducer";


const FilterList = () => {
  const { filter } = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterContact(filterValue))
  };

  return (
    <label className={css.form_style}>
      <h2>Find contacts by name</h2>
      <input type="text" className={css.form_input} value={filter} onChange={changeFilter}/>
    </label>
  );
};

export default FilterList

