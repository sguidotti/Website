import { useEffect, useState } from "react";

const SpotifyInfo = () => {
  const [token, setToken] = useState("");
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // First, check if there's a token in local storage
      let token = localStorage.getItem("spotifyToken");
      if (!token) {
        // If there's no token, redirect the user to Spotify to authenticate
        // need to do this in two steps 
        // step one get the auth token 
        // then it should redirect and i will give user access approval to get my data
        // then i should have a refresh token that i can directly request each time. i need to write the refresh token to the screen to hard code into env 
        const response = await fetch(
          "https://accounts.spotify.com/authorize?client_id=13b2a5e8fcf34ff4b85dda7c1762029e&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing playlist-modify-private"
        );
        const { url} = await response.json();
        console.log("this is the url: " + url);
      } else {
        setToken(token);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCurrentlyPlaying(data);
    };

    if (token) {
      fetchCurrentlyPlaying();
    }
  }, [token]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden container md:container md:mx-auto">
      {currentlyPlaying ? (
        <p>
          Currently Playing
          {/* Currently playing: {currentlyPlaying.item.name} by{" "}
          {currentlyPlaying.item.artists[0].name} */}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpotifyInfo;
