radio.onReceivedString(function (receivedString) {
    let kapotthomerseklet = 0
    led.plotBarGraph(
    kapotthomerseklet,
    30
    )
})
radio.setGroup(5)
