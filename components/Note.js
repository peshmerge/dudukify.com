app.component('note-display',
    {
        props: {
            isPlaying: {
                type: Boolean,
                required: true
            },
            noteToPlay: {
                type: String,
                required: true

            }
        },
        data() {
            return {
                var1: []
            }
        },
        template:
            /*html*/
            `
            <div class="col-4 themed-grid-col g-4 d-flex justify-content-center text-center">
            <audio class="notes" id="note-e" loop>
                <source src="assets/sounds/E.ogg" type="audio/ogg">
                <source src="assets/sounds/E.mp3" type="audio/mpeg">
            </audio>
            <a onClick="playNote('e')">
                <div class="note text-center">
                    <div class="note-body" id="body-e">
                        <div class="note-name">E</div>
                        <p class="note-range">164.8Hz</p>
                    </div>
                </div>
            </a>
        </div>
            `,
        methods: {
            get

        }
    },

)