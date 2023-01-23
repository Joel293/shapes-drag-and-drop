import useShape from "../hooks/useShape";

export const SquareF = ({ id }) => {

    const { startDragging, endDragging } = useShape();

    const onDragStart = (e) => {
        e.dataTransfer.setData('id', id);

        startDragging();
    }
    
    const onDragEnd = () => {
        endDragging();
    }

    return (
        <div 
            className="shapes__square" 
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        ></div>
    )
}
