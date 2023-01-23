import useShape from "../hooks/useShape";

export const SquareE = ({ id, direction }) => {

    const { updateBothSides } = useShape();

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const onDrop = (event) => {
        updateBothSides( event, id, direction );
    }

    return (
        <div 
            onDragOver={ allowDrop }
            onDrop={ onDrop }
            className="shapes__square shapes__square--empty" 
            draggable={ false }
        ></div>
    )
}
