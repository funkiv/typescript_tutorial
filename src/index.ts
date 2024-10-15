type Draggable = {
        drag: () => void
}

type Resizable = {
        resize: () => void
}

//Intersection
type UIWidget = Draggable & Resizable

//Allows use of both functions
let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
}