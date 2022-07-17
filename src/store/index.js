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

const isLoadingSlice = createSlice({
    name:'isLoading',
    initialState : {isLoading : false},
    reducers:{
        setIsLoading(state, action){
            state.isLoading = !state.isLoading;
        }
    }
});

const selectedCountrySlice = createSlice({
    name: 'selectedCountry',
    initialState: { country: '', neighbour:{} , countryObj:{}, neighboursObj: [], emptyArray : [] },
    reducers: {
        setMainCountry(state,action){
            // state.neighboursObj = [];
            state.neighboursObj = [...state.emptyArray];
            state.country = action.payload.country;
        },
        
        setMainCountryArray(state, action){
            // state.neighboursObj = [];
            state.neighboursObj = [...state.emptyArray];
            state.countryObj = action.payload.countryArray;
        },

        setNeighbourContriesArray(state, action){
            state.neighboursObj.push(action.payload.neighbour);
        }
    }
});

export const fetchNeighbours = (countryObj)=>{
    if(!countryObj) return;
    return async (dispatch) => {
        try{
            const neighboursArray = countryObj?.borders?.split(",");
            if(neighboursArray === undefined) return;
            if(neighboursArray[0] !== ''){
                neighboursArray.forEach( async (item)=>{
                    item = item.trim();
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${item}`);
                    if(!response.ok){
                        throw new Error("No countries Fetched");
                    }
                    const neighbourCountry = {};
                    const [responseData] = await response.json();
                    if(!responseData){
                        return;
                    }
                    neighbourCountry.name = (responseData.name ?? "").common;
                    neighbourCountry.capital = (responseData.capital ?? "")[0];
                    let currency = responseData.currencies ? Object.values(responseData.currencies)[0] : undefined;
                    neighbourCountry.currency = (currency?.symbol ? currency.symbol : '')+" "+(currency?.name ? currency.name : '');  
                    neighbourCountry.flag = (responseData.flags.svg ?? '');
                    let languagesArray = (responseData.languages ?? '');
                    languagesArray = '' ? '' : Object.keys(languagesArray).map(function(key){ return languagesArray[key] }).join(', ');  
                    neighbourCountry.languages = languagesArray;
                    neighbourCountry.region = (responseData.region ?? '');
                    neighbourCountry.population = (responseData.population ?? '');
                    neighbourCountry.borders = (responseData.borders ?? '') ? responseData.borders.join(', ') : '';
                    dispatch(selectedCountryActions.setNeighbourContriesArray({
                        neighbour : neighbourCountry,
                    }));
                });
            }
        }
        catch(err){
            console.log(err.message);
        }
    }
};

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
        isLoading : isLoadingSlice.reducer,
    }
});


export const selectedCountryActions = selectedCountrySlice.actions;
export const initialStageActions = initialStageSlice.actions;
export const isLoadingActions = isLoadingSlice.actions; 
export default store;
