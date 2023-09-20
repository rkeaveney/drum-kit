var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button = this.innerHTML;

        switch (button) {
            case "w":
                var drum_sound = new Audio("sounds/tom-1.mp3");
                drum_sound.play();
                break;
            case "a":
                var drum_sound = new Audio("sounds/tom-2.mp3");
                drum_sound.play();
                break;
            case "s":
                var drum_sound = new Audio("sounds/tom-3.mp3");
                drum_sound.play();
                break;
            case "d":
                var drum_sound = new Audio("sounds/tom-4.mp3");
                drum_sound.play();
                break;
            case "j":
                var drum_sound = new Audio("sounds/snare.mp3");
                drum_sound.play();
                break;
            case "k":
                var drum_sound = new Audio("sounds/crash.mp3");
                drum_sound.play();
                break;
            case "l":
                var drum_sound = new Audio("sounds/kick-bass.mp3");
                drum_sound.play();
                break;
            default:
                console.log(this.innerHTML);
                break;
        }
    });
}
