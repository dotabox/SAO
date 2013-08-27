(function (window) {
    var Sound = function (arraySound, director) {
        var self = this;
        this.arraySound = arraySound;
        this.audioSound = null;

        this.addAudioSound = function () {
            for (var i = 0; i < length; i++) {
                self.audioSound = director.addAudio(self.arraySound[i].name, document.getElementById(self.arraySound[i].id));
            }
        }
        this.audioPlay = function (nameSound) {
            self.audioSound.audioPlay(nameSound);
        }
        this.audioLoopSound = function (nameSound) {
            self.audioSound.audioLoop(nameSound);
        }

        this.audioLoopSoundAll = function () {
            //self.audioSound.audioLoop(arraySound);
            for (var i = 0; i <= 3; i++) {
                self.audioSound.audioLoop(self.arraySound[i].name);
            }
        }
        this.pauseSound = function () {
            self.audioSound.setSoundEffectsEnabled(!self.audioSound.audioManager.isSoundEffectsEnabled());
            self.audioSound.setMusicEnabled(!self.audioSound.audioManager.isMusicEnabled());
        }
        this.endSound = function () {
            self.audioSound.endSound();
        }

        this.changeMusic = function (nameSound) {
            self.audioSound.endSound();
            self.audioSound.audioLoop(nameSound);
        }

    }
    window.Sound = Sound;
})(window)

