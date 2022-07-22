const stateDefault = [];


const DiceGameReducer = (state = stateDefault, action) => {
    switch (action) {
        case "": {
            return {...state};
        }
        default: 
        return {...state};
    }
}

export default DiceGameReducer;