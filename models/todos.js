const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    done: { type: Boolean, default: 'false' }
}, {timestamps: true});

const ToDos = mongoose.model('todos', toDoSchema);

module.exports = ToDos;