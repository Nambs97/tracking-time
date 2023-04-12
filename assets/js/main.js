$(function() {

    const TimeOnSite = {
        // Initial values
        sessionStartDate: undefined,
        sessionEndDate: undefined,
        sessionDuration: Number(sessionStorage.getItem('hf-timeonsite')) || 0,
        idleTime: 0,
        counter: undefined,

        startCounter: () => {
            console.log('click externe');
            this.sessionStartDate = new Date();
            this.counter = setInterval(function() {
                TimeOnSite.sessionDuration += 1;
                console.log(TimeOnSite.sessionDuration);
                sessionStorage.setItem('hf-timeonsite', TimeOnSite.sessionDuration)
            }, 1000);
        },

        stopCounter: () => {
            clearInterval(this.counter);
            sessionStorage.removeItem('hf-timeonsite');
            TimeOnSite.resetSessionDuration();
        },

        resetSessionDuration: () => {
            sessionDuration = 0;
        },

        resetSIdleTime: () => {
            idleTime = 0;
        }
    }

    TimeOnSite.startCounter();

    $('#stop-session-btn').click(function() {
        TimeOnSite.stopCounter();
    })


});