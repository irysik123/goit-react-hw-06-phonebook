import { Container } from './Filter.styled';
import { setFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
    let dispatch = useDispatch()

    let filter = useSelector(state => state.filter)

    function handleFilterChange(event) {
        dispatch(setFilter(event.target.value))
    }

    return (
        <Container>
            <input
          type="text"
          name="name"
          onChange={handleFilterChange}
          value={filter}
        />
        </Container>
    )
}

export default Filter;

