import useShape from "../hooks/useShape";

export const CircleF = ({ id }) => {

    const { startDragging, endDragging } = useShape();

    const onDragStart = (e) => {
        e.dataTransfer.setData('id', id);


        startDragging();
    }
    
    const onDragEnd = () => {
        //console.log('dragEnd');
        
        endDragging();
    }

    return (
        <div 
            className="shapes__circle" 
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        ></div>
    )
}
