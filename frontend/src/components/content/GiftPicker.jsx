import { useState } from "react";
import "./GiftPicker.css";

function GiftPicker({ onAddGift }) {

    const [giftName, setGiftName] = useState("");
    const [giftMessage, setGiftMessage] = useState("");
    const [giftUrl, setGiftUrl] = useState("");


    const handleAddGift = () => {

        if (!giftName.trim()) {
            alert("Please give your gift a name.");
            return;
        }

        if (!giftMessage.trim()) {
            alert("Please write a little message.");
            return;
        }


        const newGift = {
            id: Date.now(),
            type: "gift",
            title: giftName,
            message: giftMessage,
            giftUrl: giftUrl
        };


        onAddGift(newGift);


        setGiftName("");
        setGiftMessage("");
        setGiftUrl("");
    };


    return (

        <div className="gift-picker">

            <h3>
                Add a little surprise 🎁
            </h3>

            <p className="gift-description">
                A tiny gift, wrapped with a little thought.
            </p>


            <div className="gift-form">

                <label htmlFor="giftName">
                    Gift Name
                </label>

                <input
                    id="giftName"
                    type="text"
                    placeholder="Example: A little surprise"
                    value={giftName}
                    onChange={(event) =>
                        setGiftName(event.target.value)
                    }
                />


                <label htmlFor="giftMessage">
                    Gift Message
                </label>

                <textarea
                    id="giftMessage"
                    rows="4"
                    placeholder="Write something sweet..."
                    value={giftMessage}
                    onChange={(event) =>
                        setGiftMessage(event.target.value)
                    }
                />


                <label htmlFor="giftUrl">
                    Gift Link (Optional)
                </label>

                <input
                    id="giftUrl"
                    type="url"
                    placeholder="Paste a gift link if you have one"
                    value={giftUrl}
                    onChange={(event) =>
                        setGiftUrl(event.target.value)
                    }
                />


                <button
                    type="button"
                    onClick={handleAddGift}
                >
                    Add Gift ♡
                </button>

            </div>

        </div>

    );
}

export default GiftPicker;