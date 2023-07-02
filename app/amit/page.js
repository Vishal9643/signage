import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  fetchFailure,
  fetchMainSuccess,
  fetchProductSuccess,
  fetchStart,
  fetchSubSuccess,
} from "@/app/Redux/categoriesSlice";


const page = () => {
  // const dispatch = useDispatch();

  const currentMainCategory = useSelector((state) => state.categories.currentMainCategory);
  // dispatch(fetchMainSuccess([{name:"amit"}]));
  console.log(currentMainCategory,"amit...........................");

  return (
    <div >
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>
      <h1>Amit</h1>

    </div>
  )
}

export default page