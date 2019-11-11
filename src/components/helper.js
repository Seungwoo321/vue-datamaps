/*
  Getter for value. If not declared on datumValue, look up the chain into optionsValue
*/
function val (datumValue, optionsValue, context) {
    if (typeof context === 'undefined') {
        context = optionsValue
        optionsValue = undefined
    }
    var value = typeof datumValue !== 'undefined' ? datumValue : optionsValue

    if (typeof value === 'undefined') {
        return null
    }

    if (typeof value === 'function') {
        var fnContext = [context]
        if (context.geography) {
            fnContext = [context.geography, context.data]
        }
        return value.apply(null, fnContext)
    } else {
        return value
    }
}

export {
    val
}
