const audioPlayer = document.getElementById('audio-player');
const fileInput = document.getElementById('file-input');
const recognitionResult = document.getElementById('recognition-result');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;

        // MOCK ARTIST RECOGNITION (replace with actual API call)
        recognizeArtist(file).then(artist => {
            recognitionResult.textContent = "Recognized Artist: " + artist;
        }).catch(error => {
            recognitionResult.textContent = "Recognition failed: " + error.message;
        });
    }
});

// Mock recognition function (simulates an API call)
async function recognizeArtist(file) {
    // In a real application, you would send the audio data to a server here.
    // This is a simplified example that uses a random artist name.

    // Simulate a delay (like an API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockArtists = ["The Beatles", "Queen", "Radiohead", "Led Zeppelin", "ABBA"];
    const randomIndex = Math.floor(Math.random() * mockArtists.length);
    const recognizedArtist = mockArtists[randomIndex];
    if (file.name.includes("Queen")) return "Queen"; // for testing
    return recognizedArtist;
}