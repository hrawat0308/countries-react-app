import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStageSlice = createSlice({
    name: 'initialStage',
    initialState : {initialValue : true},
    reducers:{
        setInitialStage(state,action){
            state.initialValue = !state.initialValue;
        }
    }
});

const selectedCountrySlice = createSlice({
    name: 'selectedCountry',
    initialState: { country: '', neighbour1: '', neighbour2: '', countryObj:{}, neighbour1Obj: {}, neighbour2Obj:{} },
    reducers: {
        setMainCountry(state,action){
            state.country = action.payload.country;
        },
        setNeighbours(state, action){
            state.neighbour1 = action.payload.neighbour1;
            state.neighbour2 = action.payload.neighbour2;
        },
        
        setMainCountryArray(state, action){
            state.countryObj = action.payload.countryArray;
            
        },

        setNeighbourContriesArray(state, action){
            state.neighbour1Obj = action.payload.neighbour1Array;
            state.neighbour2Obj = action.payload.neighbour2Array;
        }
    }
});

export const fetchCountries = (country)=>{
    return async (dispatch) => {
        try{
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
            if(!response.ok){
                throw new Error("No countries Fetched");
            }
            const mainCountry = {};
            const [responseData] = await response.json();
            if(responseData === undefined) {
                console.log("No DATA");
                return;
            }
            mainCountry.name = (responseData.name ?? "").common;
            mainCountry.capital = (responseData.capital ?? "")[0];
            let currency = responseData.currencies ? Object.values(responseData.currencies)[0] : undefined;
            mainCountry.currency = (currency?.symbol ? currency.symbol : '')+" "+(currency?.name ? currency.name : '');  
            mainCountry.flag = (responseData.flags.svg ?? '');
            let languagesArray = (responseData.languages ?? '');
            languagesArray = '' ? '' : Object.keys(languagesArray).map(function(key){ return languagesArray[key] }).join(', ');  
            mainCountry.languages = languagesArray;
            mainCountry.region = (responseData.region ?? '');
            mainCountry.population = (responseData.population ?? '');
            mainCountry.borders = (responseData.borders ?? '') ? responseData.borders.join(', ') : '';
            dispatch(selectedCountryActions.setNeighbours({
                neighbour1 : mainCountry.neighbour1,
                neighbour2 : mainCountry.neighbour2
            }));
            dispatch(selectedCountryActions.setMainCountryArray({
                countryArray : mainCountry,
            }));
        }
    
        catch(err){
            console.log(err.message);
        }
    }
};

const store = configureStore({
    reducer : {
        selectedCountry : selectedCountrySlice.reducer,
        initialStage : initialStageSlice.reducer,
    }
});


export const selectedCountryActions = selectedCountrySlice.actions;
export const initialStageActions = initialStageSlice.actions;
export default store;
