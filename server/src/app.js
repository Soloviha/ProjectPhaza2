const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path')
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokenRouter');
const candidateRouter = require('./routes/candidateRouter');
const statusRouter = require('./routes/statusRouter');
const addCandidateRouter = require('./routes/addCandidateRouter');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/account', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/cards', candidateRouter);
app.use('/api/upload-pdf', addCandidateRouter);
app.use('/api/statuses', statusRouter)

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;