import useShape from "../hooks/useShape";

export const CircleE = ({ id, direction }) => {

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
            className="shapes__circle shapes__circle--empty" 
            draggable={ false }
        ></div>
    )
}