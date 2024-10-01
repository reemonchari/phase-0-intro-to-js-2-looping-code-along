stringNames = ['becca', 'monchari', 'atuti']
eventName = 'wedding'
function writeCards(stringNames, eventName) {
    const message = []
    for (let i=0; i<stringNames.length; i++) {
        message.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return message
}

function countDown(int) {
    int = 10
    while (int >= 0) {
        console.log(int --)
    }
    
}

