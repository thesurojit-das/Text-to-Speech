speechSynthesis.cancel();
    var speaking = false;
    var speech = new SpeechSynthesisUtterance();
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    speech.voice = speechSynthesis.getVoices()[0];
    function Speech() {
        speaking = true;
        speech.text = document.getElementById('textSpeech').value;
        speechSynthesis.speak(speech);
    }
    function Stop() {
        speaking = false;
        speechSynthesis.cancel();
    }
    function Pause() {
        if (speaking) {
            speaking = false;
            speechSynthesis.pause();
        }
        else {
            speaking = true;
            speechSynthesis.resume();
        }
    }
    function changeSpeed(speed) {
        if (speed == 'speed2') speech.rate = 2;
        else if (speed == 'speed1.75') speech.rate = 1.75;
        else if (speed == 'speed1.5') speech.rate = 1.5;
        else if (speed == 'speed1.25') speech.rate = 1.25;
        else if (speed == 'speed1') speech.rate = 1;
        else if (speed == 'speed0.75') speech.rate = 0.75;
        else if (speed == 'speed0.5') speech.rate = 0.5;
    }
    function changeVoice(voice) {
        if (voice == 'voice1') speech.voice = speechSynthesis.getVoices()[8];
        else if (voice == 'voice2') speech.voice = speechSynthesis.getVoices()[0];
        else if (voice == 'voice3') speech.voice = speechSynthesis.getVoices()[1];
        else if (voice == 'voice4') speech.voice = speechSynthesis.getVoices()[11];
        else if (voice == 'voice5') speech.voice = speechSynthesis.getVoices()[12];
        else if (voice == 'voice6') speech.voice = speechSynthesis.getVoices()[18];
        else if (voice == 'voice7') speech.voice = speechSynthesis.getVoices()[33];
        else if (voice == 'voice8') speech.voice = speechSynthesis.getVoices()[37];
        else if (voice == 'voice9') speech.voice = speechSynthesis.getVoices()[41];
    }