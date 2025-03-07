import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    },
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies} =moviesSlice.actions;
export default  moviesSlice.reducer