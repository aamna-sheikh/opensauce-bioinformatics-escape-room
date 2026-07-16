function normalizeSequence(sequence) {
  return sequence.toUpperCase().replace(/[^ATCG]/g, "");
}

function runBlast() {
  const loading = document.getElementById("blastLoading");
  const results = document.getElementById("blastResults");

  results.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    results.classList.remove("hidden");
  }, 2600);
}

function compareSequence() {
  const correctSequence = "AAGATTATACAAAAACAGACA";
  const sampleInput = document.getElementById("sampleSequence").value;
  const normalizedInput = normalizeSequence(sampleInput);

  const selected = document.querySelector('input[name="organism"]:checked');
  const message = document.getElementById("compareMessage");
  const success = document.getElementById("compareSuccess");

  if (normalizedInput.length === 0) {
    message.textContent = "Enter your reconstructed sequence before comparing.";
    message.style.color = "#ffcc66";
    success.classList.add("hidden");
    return;
  }

  if (!selected) {
    message.textContent = "Select one reference organism to compare against your sequence.";
    message.style.color = "#ffcc66";
    success.classList.add("hidden");
    return;
  }

  if (normalizedInput !== correctSequence) {
    message.textContent = "Sample sequence does not match the expected reconstructed sequence. Re-check Puzzle 3 and try again.";
    message.style.color = "#ff6666";
    success.classList.add("hidden");
    return;
  }

  if (selected.value === "dog") {
    message.textContent = "Exact sequence match detected.";
    message.style.color = "#00ff88";
    success.classList.remove("hidden");
  } else {
    message.textContent = "Sequence mismatch detected. This reference is similar, but not an exact match.";
    message.style.color = "#ff6666";
    success.classList.add("hidden");
  }
}