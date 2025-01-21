// Import the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzasWROqlfUSyG4qzjhVgEJaZ0iubGfqc",
  authDomain: "tubberman-2b9cd.firebaseapp.com",
  projectId: "tubberman-2b9cd",
  storageBucket: "tubberman-2b9cd.appspot.com",
  messagingSenderId: "555526946213",
  appId: "1:555526946213:web:e402b9b9b901ea24073c4c",
  measurementId: "G-6P9W691BYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the DOM elements
const calendarElement = document.getElementById('calendar');
const pushupCountInput = document.getElementById('pushup-count');
const submitButton = document.getElementById('submit-btn');

// Function to fetch push-up data from Firestore
async function fetchPushupsData() {
  const querySnapshot = await getDocs(collection(db, "pushups"));
  const data = {};
  querySnapshot.forEach((doc) => {
    data[doc.id] = doc.data().count;
  });
  renderCalendar(data);
}

// Function to render the calendar
function renderCalendar(data) {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  calendarElement.innerHTML = '';
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${day}`;
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.innerHTML = `
      <span>${day}</span>
      <div>${data[dateStr] || 0} push-ups</div>
    `;
    calendarElement.appendChild(dayElement);
  }
}

// Function to save push-up data to Firestore
async function savePushupsData() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const pushupCount = parseInt(pushupCountInput.value, 10) || 0;
  
  await setDoc(doc(db, "pushups", dateStr), { count: pushupCount });
  fetchPushupsData();
}

// Event listener for the submit button
submitButton.addEventListener('click', savePushupsData);

// Initial fetch and render
fetchPushupsData();
