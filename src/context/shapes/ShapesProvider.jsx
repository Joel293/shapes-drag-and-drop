import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ShapesContext, shapesReducer } from "./";

const SHAPES_INITIAL_STATE = {
    isDragging: false,
    A_side: [
        { type: 'square', isFilled: true, id: uuidv4() },
        { type: 'circle', isFilled: true, id: uuidv4() },
        { type: 'square', isFilled: true, id: uuidv4() },
        { type: 'rectangle', isFilled: true, id: uuidv4() },
        { type: 'circle', isFilled: true, id: uuidv4() },
        { type: 'rectangle', isFilled: true, id: uuidv4() },
       
    ],
    B_side: [
        { type: 'square', isFilled: false, id: uuidv4() },
        { type: 'rectangle', isFilled: false, id: uuidv4() },
        { type: 'square', isFilled: false, id: uuidv4() },
        { type: 'circle', isFilled: false, id: uuidv4() },
        { type: 'square', isFilled: false, id: uuidv4() },
        { type: 'rectangle', isFilled: false, id: uuidv4() },
    ]
}

const ShapesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shapesReducer, SHAPES_INITIAL_STATE);

    const startDragging = () => {
        dispatch({ type: '[Shapes] - Start Dragging' });
    }

    const endDragging = () => {
        dispatch({ type: '[Shapes] - End Dragging' });
    }

    const updateBothSides = (event, idEmptyShape, direction) => {

        const idDropShape = event.dataTransfer.getData('id');
        let foundDropShape, foundEmptyShape;

        if(direction === 'ahead') {
            foundDropShape = state.A_side.find( shape => shape.id === idDropShape );
            foundEmptyShape = state.B_side.find( shape => shape.id === idEmptyShape );

        } else if( direction === 'back') {
            foundEmptyShape = state.A_side.find( shape => shape.id === idEmptyShape );
            foundDropShape = state.B_side.find( shape => shape.id === idDropShape );
        }
    
        if(!foundEmptyShape || !foundDropShape || foundEmptyShape.type != foundDropShape.type ) return;

        if ( direction === 'ahead' ) {
            dispatch({ type: '[Shapes] - Update Ahead Direction' , payload : { foundEmptyShape, foundDropShape } });

        } else {
            dispatch({ type: '[Shapes] - Update Back Direction' , payload : { foundEmptyShape, foundDropShape } });
        }
        
    }

    return (
        <ShapesContext.Provider
            value={{
                ...state,

                //Methods
                startDragging,
                endDragging,
                updateBothSides
            }}
        >
            { children }
        </ShapesContext.Provider>
    )
}

export {
    ShapesProvider,
}
