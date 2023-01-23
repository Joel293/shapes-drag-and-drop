import { SquareF, SquareE, CircleF, CircleE, RectangleE, RectangleF } from "./";

import useShape from "../hooks/useShape"; 

export const Shapes = () => {

    const { A_side, B_side } = useShape();

    const renderShape = (shape, direction) => {
        switch(shape.type) {
            case 'square':
                return (shape.isFilled) 
                    ? <SquareF key={ shape.id } id={ shape.id } />
                    : <SquareE key={ shape.id } id={ shape.id } direction={direction} /> 

            case 'circle':
                return (shape.isFilled) 
                    ? <CircleF key={ shape.id } id={ shape.id } />
                    : <CircleE key={ shape.id } id={ shape.id } direction={direction} />

            case 'rectangle':
                return (shape.isFilled) 
                    ? <RectangleF key={ shape.id } id={ shape.id } />
                    : <RectangleE key={ shape.id } id={ shape.id } direction={direction}/>

            default:
                return null;
        }
    }

    return (
        <div className="shapes">
            <div className="shapes__models">
                {
                    A_side.map(shape => (
                        <div>
                           { renderShape(shape, 'back')}
                        </div>
                    ))
                }

            </div>
            <div className="shapes__empty-models">
                {
                    B_side.map(shape => (
                        <div>
                            {renderShape(shape, 'ahead')}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
