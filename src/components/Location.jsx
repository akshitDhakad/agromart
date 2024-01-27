import React from 'react'

function Location() {
    const [location, setLocation] = useState("");

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Use a reverse geocoding API to get the city name
            fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            )
              .then((response) => response.json())
              .then((data) => {
                setLocation(data.address.city || "City not found");
              })
              .catch((error) => {
                console.error("Error fetching location:", error);
                setLocation("Error fetching location");
              });
          },
          (error) => {
            console.error("Geolocation error:", error);
            setLocation("Geolocation not available");
          }
        );
      } else {
        setLocation("Geolocation not supported");
      }
    }, []);
    
  return (
    <div>Location</div>
  )
}

export default Location