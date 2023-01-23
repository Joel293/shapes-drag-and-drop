import useShape from "../hooks/useShape";

export const RectangleF = ({ id }) => {

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
            className="shapes__rectangle" 
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        ></div>
    )
}
