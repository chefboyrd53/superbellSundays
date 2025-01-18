// Define the Mario Kart track list
const marioKartTracks = [
    { name: 'Mario Kart Stadium', image: '/images/MKS.png' },
    { name: 'Water Park', image: '/images/WP.png' },
    { name: 'Sweet Sweet Canyon', image: '/images/SSC.png' },
    { name: 'Thwomp Ruins', image: '/images/TR.png'}
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
    selectedTrackElement.textContent = `Random Track: ${randomTrack.name}`;

    //show track image
    const trackImage = document.createElement('img');
    trackImage.src = randomTrack.image;
    selectedTrackElement.appendChild(trackImage);
  });
  