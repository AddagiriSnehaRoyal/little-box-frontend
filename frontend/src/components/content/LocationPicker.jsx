import { useState } from "react";
import "./LocationPicker.css";

function LocationPicker({ onAddLocation }) {

    const [placeName, setPlaceName] = useState("");
    const [address, setAddress] = useState("");
    const [locationUrl, setLocationUrl] = useState("");


    const handleAddLocation = () => {

        if (!placeName.trim()) {
            alert("Please enter a place name.");
            return;
        }

        if (!address.trim()) {
            alert("Please enter the location.");
            return;
        }

        if (!locationUrl.trim()) {
            alert("Please paste the Google Maps link.");
            return;
        }


        const newLocation = {
            id: Date.now(),
            type: "location",
            title: placeName,
            address: address,
            locationUrl: locationUrl
        };


        onAddLocation(newLocation);


        setPlaceName("");
        setAddress("");
        setLocationUrl("");
    };


    return (

        <div className="location-picker">

            <h3>Add a meaningful place 📍</h3>

            <p className="location-description">
                Add a place that holds a special memory.
            </p>


            <div className="location-form">

                {/* Place Name */}

                <label htmlFor="placeName">
                    Place Name
                </label>

                <input
                    id="placeName"
                    type="text"
                    placeholder="Example: Our favourite café"
                    value={placeName}
                    onChange={(event) =>
                        setPlaceName(event.target.value)
                    }
                />


                {/* Address */}

                <label htmlFor="address">
                    Location
                </label>

                <input
                    id="address"
                    type="text"
                    placeholder="Example: Bengaluru, Karnataka"
                    value={address}
                    onChange={(event) =>
                        setAddress(event.target.value)
                    }
                />


                {/* Google Maps Link */}

                <label htmlFor="locationUrl">
                    Google Maps Link
                </label>

                <input
                    id="locationUrl"
                    type="url"
                    placeholder="Paste your Google Maps link here"
                    value={locationUrl}
                    onChange={(event) =>
                        setLocationUrl(event.target.value)
                    }
                />


                <button
                    type="button"
                    onClick={handleAddLocation}
                >
                    Add Location ♡
                </button>

            </div>

        </div>

    );
}

export default LocationPicker;