const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'] // Saving the keyboard shortcuts to play white keys in a constant variable
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'] // Saving the keyboard shortcuts to play black keys in a constant variable

const keys = document.querySelectorAll('.key') // Selecting all keys from index.html and saving them in a constant variable
const whiteKeys = document.querySelectorAll('.key.white') // Selecting all white keys from index.html and saving them in a constant variable
const blackKeys = document.querySelectorAll('.key.black') // Selecting all black keys from index.html and saving them in a constant variable

// Execute this code for each object in the constant variable of 'keys'
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key)) // Executing a function when a key gets clicked
})

// Whenever a key gets pressed
document.addEventListener('keydown', e => {
  if (e.repeat) return; // Exiting the code if the keydown-function repeats for the same key
  const key = e.key // Get the key that's pressed and save it in a constant variable
  const whiteKeyIndex = WHITE_KEYS.indexOf(key) // Check if the key is in the white keys
  const blackKeyIndex = BLACK_KEYS.indexOf(key) // Check if the key is in the black keys

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) // If whiteKeyIndex exists, the note gets played
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]) // If blackKeyIndex exists, the note gets played
})

// The function that plays the notes
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) // Get the audio element from index.html
  noteAudio.currentTime = 0 // Set the current playtime of the audio to 0
  noteAudio.play() // Play the audio
  key.classList.add('active') // Add the 'active' class
  // As soon as the audio file is done playing, execute this code
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active') // Remove the 'active' class
  })
}
