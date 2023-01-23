import useShape from "../hooks/useShape";

export const RectangleE = ({ id, direction }) => {

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
            className="shapes__rectangle shapes__rectangle--empty" 
            draggable={ false }
        ></div>
    )
}
