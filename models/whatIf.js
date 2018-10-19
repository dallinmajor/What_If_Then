const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WhatIfSchema = new Schema({
    then: {
        type: String,
        required: true
    }
})

const WhatIf = mongoose.model('WhatIf', WhatIfSchema);

module.exports = WhatIf;