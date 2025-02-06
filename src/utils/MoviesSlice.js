import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nomPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nomPlayingMovies=action.payload;
        },
    },
});


export const {addNowPlayingMovies} =moviesSlice.actions;
export default  moviesSlice.reducer