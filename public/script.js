// Define the Mario Kart track list
const marioKartTracks = [
    'Moo Moo Meadows',
    'Rainbow Road',
    'Toad Harbor',
    'Mount Wario',
    'Shy Guy Falls',
    'DK Jungle',
    'Bowser Castle',
    'Mario Circuit',
    'Sweet Sweet Canyon',
    'Electrodrome',
    'Wario Stadium',
    'Cloudtop Cruise',
    'Grumble Volcano',
    'Cheep Cheep Beach',
    'Mario Kart Stadium'
  ];
  
  // Function to pick a random track
  function getRandomTrack() {
    const randomIndex = Math.floor(Math.random() * marioKartTracks.length);
    return marioKartTracks[randomIndex];
  }
  
  // Handle button click to choose a random track
  const button = document.getElementById('choose-track-btn');
  const selectedTrackElement = document.getElementById('selected-track');
  
  button.addEventListener('click', () => {
    const randomTrack = getRandomTrack();
    selectedTrackElement.textContent = `Random Track: ${randomTrack}`;
  });
  