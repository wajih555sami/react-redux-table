import React from 'react'
import OurForm from './OurForm'
import formatToResponseShape from '../../utils/formatter'
import { useSelector, useDispatch } from "react-redux";
import {add,set} from '../components/countries';

function AddForm() {
    const dispatch = useDispatch();
    function onFinish(data){
        const newCountry = formatToResponseShape(data)
        dispatch(add(newCountry))
    }
  return (
    <OurForm title='Add Country' onFinish={onFinish} />
  )
}

export default AddForm