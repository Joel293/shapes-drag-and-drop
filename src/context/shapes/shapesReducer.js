
export const shapesReducer = ( state,  action ) => {
    //let { foundEmptyShape, foundDropShape } = action.payload;

    switch (action.type) {
        case '[Shapes] - Start Dragging':
            return  {
                ...state,
                isDragging: true
            }

        case '[Shapes] - End Dragging':
            return  {
                ...state,
                isDragging: false
            }

        case '[Shapes] - Update Ahead Direction':

            return  {
                ...state,
                //lado B, lado de llegada
                B_side: state.B_side.map( shape => {
                    if(shape.id === action.payload.foundEmptyShape.id) {
                        if(shape.isFilled === false ) {
                            shape.isFilled = true;
                        } 
                    }
                    return shape;
                }),
                //lado A
                A_side: state.A_side.map( shape => {
                    if(shape.id === action.payload.foundDropShape.id) {
                        if(shape.isFilled === true ) {
                            shape.isFilled = false;
                        } 
                    }
                    return shape;
                })
            }

        case '[Shapes] - Update Back Direction':
            return  {
                ...state,
                //lado A, lado de llegada
                A_side: state.A_side.map( shape => {
                    if(shape.id === action.payload.foundEmptyShape.id) {
                        if(shape.isFilled === false ) {
                            shape.isFilled = true;
                        } 
                    }
                    return shape;
                }),
                //lado B
                B_side: state.B_side.map( shape => {
                    if(shape.id === action.payload.foundDropShape.id) {
                        if(shape.isFilled === true ) {
                            shape.isFilled = false;
                        } 
                    }
                    return shape;
                })
            }


        default:
            return state;
    }
}


