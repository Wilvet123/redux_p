import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "../componentes/nameSlice";

export default configureStore({
    reducer:{
        user: nameSlice,
    }
})