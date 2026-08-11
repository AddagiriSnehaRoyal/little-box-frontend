import { useRef, useState } from "react";
import "./VoiceRecorder.css";

function VoiceRecorder({ onAddVoice }) {

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState("");
    const [audioBlob, setAudioBlob] = useState(null);


    // --------------------------------
    // FIND SUPPORTED AUDIO FORMAT
    // --------------------------------

    const getSupportedMimeType = () => {

        const types = [
            "audio/webm;codecs=opus",
            "audio/webm",
            "audio/ogg;codecs=opus",
            "audio/mp4"
        ];

        for (const type of types) {

            if (MediaRecorder.isTypeSupported(type)) {
                return type;
            }

        }

        return "";
    };


    // --------------------------------
    // START RECORDING
    // --------------------------------

    const startRecording = async () => {

        try {

            const stream =
                await navigator.mediaDevices.getUserMedia({
                    audio: true
                });

            console.log(
                "Microphone tracks:",
                stream.getAudioTracks()
            );

            console.log(
                "Microphone settings:",
                stream.getAudioTracks()[0].getSettings()
            );

            const mimeType = getSupportedMimeType();

            const mediaRecorder = mimeType
                ? new MediaRecorder(stream, {
                    mimeType: mimeType
                })
                : new MediaRecorder(stream);

            mediaRecorderRef.current = mediaRecorder;

            audioChunksRef.current = [];


            mediaRecorder.ondataavailable = (event) => {

                console.log(
                    "Audio data received:",
                    event.data.size
                );

                if (event.data.size > 0) {

                    audioChunksRef.current.push(
                        event.data
                    );

                }

            };


            mediaRecorder.onstop = () => {

                const blob = new Blob(
                    audioChunksRef.current,
                    {
                        type:
                            mediaRecorder.mimeType ||
                            "audio/webm"
                    }
                );

                console.log(
                    "Final audio blob:",
                    blob
                );

                console.log(
                    "Final audio size:",
                    blob.size
                );

                console.log(
                    "Final audio type:",
                    blob.type
                );


                const url =
                    URL.createObjectURL(blob);

                setAudioBlob(blob);

                setAudioUrl(url);


                stream
                    .getTracks()
                    .forEach((track) => {
                        track.stop();
                    });

            };


            // IMPORTANT:
            // Ask MediaRecorder to provide
            // audio data every 250 milliseconds.

            mediaRecorder.start(250);

            setIsRecording(true);


            console.log(
                "Recording started with:",
                mediaRecorder.mimeType
            );

        } catch (error) {

            console.error(
                "Unable to access microphone:",
                error
            );

            alert(
                "Please allow microphone access to record your voice."
            );

        }

    };


    // --------------------------------
    // STOP RECORDING
    // --------------------------------

    const stopRecording = () => {

        if (
            mediaRecorderRef.current &&
            mediaRecorderRef.current.state !== "inactive"
        ) {

            mediaRecorderRef.current.stop();

        }

        setIsRecording(false);

    };


    // --------------------------------
    // CLEAR RECORDING
    // --------------------------------

    const clearRecording = () => {

        if (audioUrl) {

            URL.revokeObjectURL(audioUrl);

        }

        setAudioUrl("");

        setAudioBlob(null);

        audioChunksRef.current = [];

    };


    // --------------------------------
    // ADD VOICE
    // --------------------------------

    const handleAddVoice = () => {

        if (!audioBlob) {

            alert(
                "Please record your voice first."
            );

            return;

        }


        // Determine file extension

        let extension = "webm";


        if (audioBlob.type.includes("ogg")) {

            extension = "ogg";

        } else if (
            audioBlob.type.includes("mp4")
        ) {

            extension = "m4a";

        }


        // Create File

        const voiceFile = new File(
            [audioBlob],
            `voice-${Date.now()}.${extension}`,
            {
                type: audioBlob.type
            }
        );


        // Create voice object

        const newVoice = {

            id: Date.now(),

            type: "voice",

            title: "My Voice Message",

            file: voiceFile

        };


        // Send to AddContent.jsx

        onAddVoice(newVoice);


        // Clear recorder

        clearRecording();

    };


    // --------------------------------
    // UI
    // --------------------------------

    return (

        <div className="voice-recorder">

            <h3>
                Leave a little voice 🎙️
            </h3>


            <p className="voice-description">
                Record something they can listen to later.
            </p>


            {/* RECORD / STOP */}

            {!isRecording ? (

                <button
                    type="button"
                    className="record-button"
                    onClick={startRecording}
                >
                    🎙️ Start Recording
                </button>

            ) : (

                <button
                    type="button"
                    className="stop-recording-button"
                    onClick={stopRecording}
                >
                    ⏹️ Stop Recording
                </button>

            )}


            {/* AUDIO PREVIEW */}

            {audioUrl && (

                <div className="voice-preview">

                    <p>
                        Your recording ♡
                    </p>


                    <audio
                        src={audioUrl}
                        controls
                    />


                    <button
                        type="button"
                        className="clear-voice-button"
                        onClick={clearRecording}
                    >
                        🗑️ Record Again
                    </button>

                </div>

            )}


            {/* ADD VOICE */}

            <button
                type="button"
                className="add-voice-button"
                onClick={handleAddVoice}
                disabled={isRecording}
            >
                Add Voice ♡
            </button>

        </div>

    );

}

export default VoiceRecorder;