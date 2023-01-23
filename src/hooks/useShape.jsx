import { useContext } from "react";
import { ShapesContext } from "../context/shapes";

const useShape = () => {
    return useContext( ShapesContext );
}

export default useShape;