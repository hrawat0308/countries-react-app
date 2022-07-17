import { useEffect,Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Card.module.css';
import MainCountry from './MainCountry';
import NeighbourCountry from './NeighbourCountry';
import {fetchCountries, initialStageActions, fetchNeighbours} from '../store/index';


const CardContainer = function(){
    const dispatch = useDispatch();
    const country = useSelector(state=>state.selectedCountry.country);
    const initialStage = useSelector(state=>state.initialStage.initialValue);
    const countryObj = useSelector(state=>state.selectedCountry.countryObj);
    const neighbours = useSelector(state=>state.selectedCountry.neighboursObj);
    
    

    useEffect(()=>{
        if(initialStage){
            dispatch(initialStageActions.setInitialStage());
            return;
        }
        // dispatch(isLoadingActions.setIsLoading());
        dispatch(fetchCountries(country));
    },[country, dispatch, initialStage]);


    useEffect(()=>{
        dispatch(fetchNeighbours(countryObj));
    }, [country, dispatch, countryObj]);

    
    return(
        <Fragment>
        <div className={classes.CardContainer}>
            <div className={classes.mainCardContainer}>
                { <MainCountry cssClass={classes.mainCountry} />}
            </div>
            <div className={classes.neighbourCardCountainer}>
            {
                !initialStage && neighbours.map((item, index)=>{
                    return(
                        <NeighbourCountry cssClass={classes.neighbourCountry} 
                                          name={item.name} 
                                          capital={item.capital} 
                                          currency={item.currency}
                                          flag={item.flag}
                                          languages={item.languages}
                                          population={item.population}
                                          region={item.region}
                                          borders={item.borders}
                                          key={index}
                                    />
                    )
                })
                    
            }
            </div>
            
        </div>
        </Fragment>
    );
}

export default CardContainer;