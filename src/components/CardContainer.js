import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Card.module.css';
import MainCountry from './MainCountry';
import NeighbourCountry from './NeighbourCountry';
import {fetchCountries, initialStageActions} from '../store/index';



const CardContainer = function(){
    const dispatch = useDispatch();
    const country = useSelector(state=>state.selectedCountry.country);
    const initialStage = useSelector(state=>state.initialStage.initialValue);
    console.log("initial Stage is :", initialStage);
    useEffect(()=>{
        if(initialStage){
            dispatch(initialStageActions.setInitialStage());
            return;
        }
        dispatch(fetchCountries(country));
    },[country, dispatch, initialStage]);

    return(
        <Fragment>
        <div className={classes.CardContainer}>
            <div className={classes.mainCardContainer}>
                <MainCountry cssClass={classes.mainCountry} />
            </div>
            {
                !initialStage && 
                    <div className={classes.neighbourCardCountainer}>
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                        <NeighbourCountry cssClass={classes.neighbourCountry} />
                    </div>
            }
            
        </div>
        </Fragment>
    );
}

export default CardContainer;