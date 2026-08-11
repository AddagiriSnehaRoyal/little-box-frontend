import { useRef, useState } from "react";
import "./DrawingUploader.css";

function DrawingUploader({ onAddDrawing }) {

    const canvasRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#5a3040");
    const [brushSize, setBrushSize] = useState(4);
    const [isEraser, setIsEraser] = useState(false);


    // --------------------------------
    // GET MOUSE / TOUCH POSITION
    // --------------------------------

    const getPosition = (event) => {

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        let clientX;
        let clientY;

        if (
            event.touches &&
            event.touches.length > 0
        ) {

            clientX =
                event.touches[0].clientX;

            clientY =
                event.touches[0].clientY;

        } else {

            clientX = event.clientX;
            clientY = event.clientY;

        }


        const scaleX =
            canvas.width / rect.width;

        const scaleY =
            canvas.height / rect.height;


        return {

            x:
                (clientX - rect.left) *
                scaleX,

            y:
                (clientY - rect.top) *
                scaleY

        };

    };


    // --------------------------------
    // START DRAWING
    // --------------------------------

    const startDrawing = (event) => {

        event.preventDefault();

        const canvas = canvasRef.current;

        const ctx =
            canvas.getContext("2d");


        const {
            x,
            y
        } = getPosition(event);


        ctx.beginPath();

        ctx.moveTo(x, y);

        setIsDrawing(true);

    };


    // --------------------------------
    // DRAW
    // --------------------------------

    const draw = (event) => {

        if (!isDrawing) {
            return;
        }


        event.preventDefault();


        const canvas =
            canvasRef.current;

        const ctx =
            canvas.getContext("2d");


        const {
            x,
            y
        } = getPosition(event);


        ctx.lineWidth =
            brushSize;

        ctx.lineCap =
            "round";

        ctx.lineJoin =
            "round";


        if (isEraser) {

            ctx.globalCompositeOperation =
                "destination-out";

        } else {

            ctx.globalCompositeOperation =
                "source-over";

            ctx.strokeStyle =
                color;

        }


        ctx.lineTo(x, y);

        ctx.stroke();


        ctx.beginPath();

        ctx.moveTo(x, y);

    };


    // --------------------------------
    // STOP DRAWING
    // --------------------------------

    const stopDrawing = (event) => {

        if (event) {
            event.preventDefault();
        }


        const canvas =
            canvasRef.current;

        if (!canvas) {
            return;
        }


        const ctx =
            canvas.getContext("2d");


        ctx.closePath();

        setIsDrawing(false);

    };


    // --------------------------------
    // CLEAR DRAWING
    // --------------------------------

    const clearDrawing = () => {

        const canvas =
            canvasRef.current;

        if (!canvas) {
            return;
        }


        const ctx =
            canvas.getContext("2d");


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.globalCompositeOperation =
            "source-over";

    };


    // --------------------------------
    // ADD DRAWING
    // --------------------------------

    const handleAddDrawing = () => {

        const canvas =
            canvasRef.current;


        if (!canvas) {
            return;
        }


        // Convert canvas into PNG Blob
        canvas.toBlob(
            (blob) => {

                if (!blob) {

                    alert(
                        "Unable to create your drawing."
                    );

                    return;
                }


                // Convert Blob into File
                const drawingFile =
                    new File(
                        [blob],
                        `drawing-${Date.now()}.png`,
                        {
                            type: "image/png"
                        }
                    );


                const newDrawing = {

                    id: Date.now(),

                    type: "drawing",

                    title: "My Drawing",

                    file: drawingFile

                };


                // Send the File to AddContent
                onAddDrawing(
                    newDrawing
                );


                clearDrawing();

            },
            "image/png"
        );

    };


    // --------------------------------
    // COLORS
    // --------------------------------

    const colors = [

        "#5a3040",

        "#e6396f",

        "#ff6b81",

        "#f4a261",

        "#e9c46a",

        "#70ad47",

        "#4dabf7",

        "#7b61ff",

        "#000000"

    ];


    // --------------------------------
    // UI
    // --------------------------------

    return (

        <div className="drawing-uploader">


            <div className="drawing-header">

                <div>

                    <h3>
                        Draw a little something 🎨
                    </h3>

                    <p>
                        Create a tiny memory in your own way.
                    </p>

                </div>

            </div>


            {/* DRAWING BOARD */}

            <div className="drawing-board">

                <canvas
                    ref={canvasRef}
                    width={700}
                    height={380}
                    className="drawing-canvas"

                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}

                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />

            </div>


            {/* TOOLBAR */}

            <div className="drawing-toolbar">


                {/* COLORS */}

                <div className="tool-group">

                    <span className="tool-label">
                        Color
                    </span>


                    <div className="color-palette">

                        {colors.map(
                            (itemColor) => (

                                <button
                                    key={itemColor}
                                    type="button"

                                    className={`color-button ${
                                        color === itemColor &&
                                        !isEraser
                                            ? "active"
                                            : ""
                                    }`}

                                    style={{
                                        backgroundColor:
                                            itemColor
                                    }}

                                    onClick={() => {

                                        setColor(
                                            itemColor
                                        );

                                        setIsEraser(
                                            false
                                        );

                                    }}

                                    aria-label={
                                        `Choose ${itemColor}`
                                    }

                                />

                            )
                        )}

                    </div>

                </div>


                {/* BRUSH SIZE */}

                <div className="tool-group">

                    <span className="tool-label">
                        Brush
                    </span>


                    <div className="brush-options">

                        <button
                            type="button"
                            className={`brush-button ${
                                brushSize === 3
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setBrushSize(3)
                            }
                        >
                            •
                        </button>


                        <button
                            type="button"
                            className={`brush-button ${
                                brushSize === 7
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setBrushSize(7)
                            }
                        >
                            ●
                        </button>


                        <button
                            type="button"
                            className={`brush-button ${
                                brushSize === 12
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setBrushSize(12)
                            }
                        >
                            ●
                        </button>

                    </div>

                </div>


                {/* ERASER */}

                <button
                    type="button"
                    className={`tool-button ${
                        isEraser
                            ? "active-tool"
                            : ""
                    }`}
                    onClick={() =>
                        setIsEraser(
                            !isEraser
                        )
                    }
                >
                    🧹 Eraser
                </button>


                {/* CLEAR */}

                <button
                    type="button"
                    className="tool-button clear-button"
                    onClick={clearDrawing}
                >
                    🗑️ Clear
                </button>

            </div>


            {/* ADD DRAWING */}

            <button
                type="button"
                className="add-drawing-button"
                onClick={handleAddDrawing}
            >
                Add Drawing ♡
            </button>

        </div>

    );

}

export default DrawingUploader;