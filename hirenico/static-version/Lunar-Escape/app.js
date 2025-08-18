const socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
const roundTimer = document.querySelector('#timer');
const roundQuestion = document.querySelector('#question');
const roundOptions = document.querySelector('#options');
const gameMessage = document.querySelector('#gameMessage');
const pastRoundInfo = document.querySelector('#pastRoundInfo');
const restartBtn = document.querySelector('#restartBtn');

let hasVoted = false;

// Render the option buttons for the current round
function renderOptions(options) {
  roundOptions.innerHTML = '';
  options.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.disabled = hasVoted;
    btn.onclick = () => {
      socket.send(JSON.stringify({ type: 'vote', option: i }));
      hasVoted = true;
      updateOptionButtons();
    };
    roundOptions.appendChild(btn);
  });
}

// Enable/disable option buttons based on hasVoted
function updateOptionButtons() {
  roundOptions.querySelectorAll('button')
    .forEach(btn => btn.disabled = hasVoted);
}

// Update the vote counts displayed next to each option
function updateVoteCounts(counts) {
  roundOptions.querySelectorAll('button').forEach((btn, i) => {
    const label = btn.textContent.split(' (')[0];
    btn.textContent = `${label} (${counts[i] || 0})`;
  });
}

// Append a single past-round summary to the UI
function appendPastRound({ round, voteCounts, isCorrect }) {
  const div = document.createElement('div');
  div.textContent = `Round ${round + 1}: ${isCorrect ? '✔️ Correct' : '❌ Wrong'} — votes: [${voteCounts.join(', ')}]`;
  pastRoundInfo.appendChild(div);
}

// Render all past-round summaries at once (used on init)
function renderPastRounds(rounds) {
  pastRoundInfo.innerHTML = '<h3>Past Rounds</h3>';
  rounds.forEach(r => appendPastRound(r));
}

// Initialize or restart a round in the UI
function setupRound({ question, options, voteCounts, timeLeft }) {
  roundTimer.textContent = `Voting Time Remaining: ${Math.ceil(timeLeft/1000)}`;
  roundQuestion.textContent = question;
  hasVoted = false;
  renderOptions(options);
  updateVoteCounts(voteCounts);
  gameMessage.textContent = '';
  restartBtn.style.display = 'none';
}

// Handle incoming WebSocket messages
socket.addEventListener('message', ({ data }) => {
  const { type, payload } = JSON.parse(data);

  switch(type) {
    case 'init':
      renderPastRounds(payload.roundsData);
      // if there are any past rounds, make sure the panel is visible after a reload
      if (payload.roundsData.length > 0) {
        pastRoundInfo.style.display = 'block';
      }
      setupRound(payload);
      break;

    case 'roundStart':
      setupRound(payload);
      break;

    case 'timeUpdate':
      roundTimer.textContent = `Voting Time Remaining: ${Math.ceil(payload.timeLeft/1000)}`;
      break;

    case 'voteUpdate':
      updateVoteCounts(payload.voteCounts);
      break;

    case 'noVotes':
      hasVoted = false;
      updateOptionButtons();
      break;

    case 'roundEnd':
      pastRoundInfo.style.display = 'block';
      appendPastRound(payload);
      break;

    case 'gameOver':
      gameMessage.textContent = payload.won
        ? '🎉 You survived!'
        : '💥 You lost!';
      hasVoted = true;
      updateOptionButtons();
      restartBtn.style.display = 'block';
      break;

    case 'gameRestart':
      pastRoundInfo.style.display = 'none';
      renderPastRounds([]);
      gameMessage.textContent = '';
      restartBtn.style.display = 'none';
      break;
  }
});

// Send a restart request when the button is clicked
restartBtn.addEventListener('click', () => {
  socket.send(JSON.stringify({ type: 'restart' }));
});