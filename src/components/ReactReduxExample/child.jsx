import React, { useEffect, useState } from 'react'
import { getRecipes } from '../../reactRedux/action/recipesActionRR';
import { useDispatch } from 'react-redux';

const Child = () => {
    console.log("re-rendering child")
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const delay = setTimeout(() => dispatch(getRecipes({ value: searchValue })), 300)
        return () => clearTimeout(delay);
    }, [searchValue, dispatch])
    return (
        <>
            <p>Child </p>
            <input type="text" name="search-rec" id="rec" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </>
    )
}

export default React.memo(Child)